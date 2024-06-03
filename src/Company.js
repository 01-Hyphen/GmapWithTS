"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker_1.faker.company.name();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lan: parseFloat(faker_1.faker.address.longitude())
        };
        this.catchPhrase = faker_1.faker.company.catchPhrase();
    }
    Company.prototype.summary = function () {
        return "\n       <h1>Commpany Name: ".concat(this.name, "</h1>\n       <h3>Catchphrase: ").concat(this.catchPhrase, " </h3>\n        ");
    };
    return Company;
}());
exports.Company = Company;
