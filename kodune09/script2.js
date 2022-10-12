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
    uudisedElement.innerHTML += `
    <div class="uudis">
        <img src="${uudised[i].pildiUrl}" />
        <h3 class="pealkiri">${uudised[i].pealkiri}</h3>
        <div class="kokkuvote">${uudised[i].kirjeldus}</div>
        <a href="${uudised[i].viideUudisele}">Loe edasi</a>
    </div>`;
}

