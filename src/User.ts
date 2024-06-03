import { faker } from "@faker-js/faker";


export class User {
    name: string;
    location: {
        lat: number,
        lan: number
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lan: parseFloat(faker.address.longitude())
        }
    }

    summary() {
        return `
       <h1>User Name: ${this.name}</h1>
        `
    }
}