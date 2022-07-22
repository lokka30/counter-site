/* start maincode */

let count = JSON.parse(localStorage.getItem("count") || "0");
updateCount();

let previousEntries = JSON.parse(localStorage.getItem("previousEntries") || "[]");
updatePreviousEntries();



function increment() {
    count++;
    updateCount();
}

function decrement() {
    if(count <= 0) return;
    count--;
    updateCount();
}

function save() {
    previousEntries.push(count);
    count = 0;
    updateCount();
    updatePreviousEntries();
}

function updateCount() {
    document.getElementById("count").textContent = count.toLocaleString('en');
    localStorage.setItem("count", count);
}

function updatePreviousEntries() {
    document.getElementById("previous-entries").textContent = previousEntries.length == 0 ? "None" : joined();
    localStorage.setItem("previousEntries", JSON.stringify(previousEntries));
}

function reset() {
    count = 0;
    updateCount();
}

function joined() {
    let ret = "";

    if(previousEntries.length == 0) {
        return ret;
    }

    for(let i = 0; i < previousEntries.length; i++) {
        if(i != 0) {
            ret += ", "
        }
        ret += previousEntries[i].toLocaleString('en');
    }

    return ret;
}

function clearSaved() {
    previousEntries = [];
    updatePreviousEntries();
}