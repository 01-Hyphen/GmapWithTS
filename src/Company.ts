import { faker } from "@faker-js/faker";

export class Company {
    name: string;
    catchPhrase: string
    location: {
        lat: number,
        lan: number
    }

    constructor() {
        this.name = faker.company.name();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lan: parseFloat(faker.address.longitude())
        }

        this.catchPhrase = faker.company.catchPhrase();
    }

    summary() {
        return `
       <h1>Commpany Name: ${this.name}</h1>
       <h3>Catchphrase: ${this.catchPhrase} </h3>
        `
    }
}