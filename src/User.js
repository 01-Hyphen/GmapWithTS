"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.faker.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lan: parseFloat(faker_1.faker.address.longitude())
        };
    }
    User.prototype.summary = function () {
        return "\n       <h1>User Name: ".concat(this.name, "</h1>\n        ");
    };
    return User;
}());
exports.User = User;
