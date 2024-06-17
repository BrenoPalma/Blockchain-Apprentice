let adress = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAdress(adress) {
    for (let key in adress) {
        console.log(key, adress[key]);
    }
}