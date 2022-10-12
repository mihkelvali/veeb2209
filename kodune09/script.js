let uudised = [
    {
        pildiUrl: 'mingipilt.jpg',
        pealkiri: 'POMMUUDIS!',
        kirjeldus: 'Lorem ipsum',
        viideUudisele: 'uudis1.html',
    },
    {
        pildiUrl: 'mingipilt.jpg',
        pealkiri: 'POMMUUDIS 2!',
        kirjeldus: 'Lorem ipsum',
        viideUudisele: 'uudis2.html',
    },
    {
        pildiUrl: 'mingipilt.jpg',
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

    uudisedElement.appendChild(uudisElement);
}
