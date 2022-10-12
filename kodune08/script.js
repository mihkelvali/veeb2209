let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');
let pilt = document.getElementById('pilt');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    let nimePikkus = nimiElement.value.length;
    if (!nimePikkus) {
        hinnangElement.innerHTML = '';
        pilt.style.display = 'none';
        return;
    }
    if (nimePikkus < 6) {
        pilt.src = '../loeng05/pildid/poder.jpg';
        pilt.style.display = 'block';
        hinnangElement.innerHTML = 'Küll sul on ilus lühike nimi';
        return;
    }
    pilt.src = '../loeng05/pildid/mannid.jpg';
    pilt.style.display = 'block';
    hinnangElement.innerHTML = 'Küll sul on suurepärane pikk nimi';
}
