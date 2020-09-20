function loadDepressionScores() {
    return new Promise((resolve, reject) => {
        fetch("/api/depression")
            .then(res => {
                return res.json()
            })
            .then(res => {
                res.sort((a,b) => new Date(a.dateSubmitted).getTime() >= new Date(b.dateSubmitted).getTime() ? 1 : -1),
                resolve(res)
            })
            .catch(err => {
                //alert('Something went wrong'),
                reject(err)
            })
    })
}

function loadUser() {
    return new Promise((resolve, reject) => {
        fetch("/api/user")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if(res[0]){
                    resolve(res[0]);
                }
            })
            .catch((err) => {
                //alert("An error occurred while loading the page.");
                reject(err);
            });
    })
}

function loadJournals() {
    return new Promise((resolve, reject) => {
        fetch('/api/journal')
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

module.exports = {loadDepressionScores, loadUser, loadJournals}