
function generateRoomHash(){
    //Generate hash for a game room
    const alphanumerics = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const hashLen = 5
    let hash = "";
    for (let i = 0; i < hashLen; i++) {
        hash += alphanumerics[Math.round(Math.random() * (alphanumerics.length - 1))]
    }
    document.getElementById("url_hash").setAttribute("value", hash)
    return hash
}

function notReady(){
    alert("Still not done :)")
}