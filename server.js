const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker'); 

class Product {
    constructor(){
        this.name = faker.name.findName(); // Rowan Nikolaus
        this.price = faker.internet.email(); // Kassandra.Haley@erich.biz
        this.department = faker.helpers.createCard()
    }
}
class Usuario {
    constructor(){
    this._carne = faker.datatype.uuid(); // Rowan Nikolaus
    this.firstname = faker.name.firstName(); // Kassandra.Haley@erich.biz
    this.lastname = faker.name.lastName();
    this.fone = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    }
}

class Empresa {
    constructor(){
    this._carne = faker.datatype.uuid(); // Rowan Nikolaus
    this.companyName = faker.company.companyName(); // Kassandra.Haley@erich.biz
    this.street = faker.address.streetAddress();
    this.city = faker.address.cityName();
    this.state = faker.address.state();
    this.postal = faker.address.countryCode();
    this.country = faker.address.country();
    }
}
const companies = new Empresa;
const usuarios = new Usuario;
app.get("/api/users/new", (req, res) => {
    res.json({ user: usuarios });
});
app.get("/api/companies/new", (req, res) => {
    res.json({ company: companies });
});
app.get("/api/user/company", (req, res) => {
    res.json({ user: usuarios, company: companies });
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );