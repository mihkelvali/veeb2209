let uudised = [
    {
        pildiUrl: '../loeng05/pildid/hommik.jpg',
        pealkiri: 'POMMUUDIS!',
        kirjeldus: 'Lorem ipsum',
        viideUudisele: 'uudis1.html',
    },
    {
        pildiUrl: '../loeng05/pildid/poder.jpg',
        pealkiri: 'POMMUUDIS 2!',
        kirjeldus: 'Lorem ipsum',
        viideUudisele: 'uudis2.html',
    },
    {
        pildiUrl: '../loeng05/pildid/raba.jpg',
        pealkiri: 'POMMUUDIS 3!',
        kirjeldus: 'Lorem ipsum',
        viideUudisele: 'uudis3.html',
    }
];

let uudisedElement = document.querySelector('.uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];

    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);

    let pealkiriElement = document.createElement('h3');
    pealkiriElement.classList = ['pealkiri'];
    pealkiriElement.innerHTML = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);

    let kirjeldusElement = document.createElement('div');
    kirjeldusElement.classList = ['kokkuvote'];
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement);

    let viideElement = document.createElement('a');
    viideElement.href = uudised[i].viideUudisele;
    viideElement.innerHTML = 'Loe edasi';
    uudisElement.appendChild(viideElement);

    uudisedElement.appendChild(uudisElement);
}
