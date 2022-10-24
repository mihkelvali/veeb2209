let vastuseElement = document.querySelector('.vastus');

let tehe = [];
let viimatiVajutatiOperaatorit = false;

const vajutatiNuppu = async (nupp) => {
    if (typeof nupp === 'number') {
        if (vastuseElement.innerHTML === '0' || viimatiVajutatiOperaatorit) {
            vastuseElement.innerHTML = nupp;
        } else {
            vastuseElement.innerHTML += nupp;
        }
        viimatiVajutatiOperaatorit = false;
    }
    if (nupp === 'AC') {
        vastuseElement.innerHTML = 0;
        tehe = [];
        viimatiVajutatiOperaatorit = false;
    }
    if (kasOnOperaator(nupp) && kasViimaneElementOnOperaator()) {
        viimatiVajutatiOperaatorit = true;
        return;
    }
    if (kasOnOperaator(nupp)) {
        if (!kasViimaneElementOnOperaator()) {
            tehe.push(vastuseElement.innerHTML);
        }
        tehe.push(nupp);
        viimatiVajutatiOperaatorit = true;
    }
    if (nupp === '=') {
        tehe.push(vastuseElement.innerHTML);
        viimatiVajutatiOperaatorit = true;
        const vastusJson = await fetch('http://localhost:3000/arvuta', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tehe)
        })
        const vastus = await vastusJson.json();
        tehe = [String(vastus.vastus)]
        vastuseElement.innerHTML = vastus.vastus;
    }
    console.log(tehe);

}

const kasViimaneElementOnOperaator = () => {
    if (tehe.at(-1) === '+' ||
        tehe.at(-1) === '-' ||
        tehe.at(-1) === 'x' ||
        tehe.at(-1) === '/') {
        return true;
    }
    return false;
}

const kasOnOperaator = (nupp) => {
    if (nupp === '+' ||
        nupp === '-' ||
        nupp === 'x' ||
        nupp === '/'
    ) {
        return true;
    }
    return false;
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === '=') {
        vajutatiNuppu('=');
        return;
    }
    if (event.key === '*') {
        vajutatiNuppu('x');
        return;
    }
    if (!isNaN(event.key)) {
        vajutatiNuppu(parseInt(event.key));
        return;
    }
    vajutatiNuppu(event.key);
});

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    }
    if (isEscape) {
        vajutatiNuppu('AC')
    }
};
