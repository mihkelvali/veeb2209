function prindiNimi() {
    let nimi = document.getElementById('nimeInput').value;
    document.getElementById('nimiPealkirjas').innerHTML = nimi;
    console.log(nimi);
}

document.getElementById('nupp').addEventListener('click', prindiNimi);

console.log(document.getElementById('nupp'))
console.log(prindiNimi)