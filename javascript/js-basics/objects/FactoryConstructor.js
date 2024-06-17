let adress = new Adress('a', 'b', 'c');
console.log(adress);

function createAdress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Adress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}