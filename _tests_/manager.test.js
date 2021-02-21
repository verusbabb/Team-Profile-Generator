const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initiallization", () => {
        it("should return an object containing name, id, email, and phone when called with 'new' keyword", () => {
            const obj = new Manager();
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("phone" in obj).toEqual(true);
        });


        it("should set object properties to the passed values for name, id, email, github", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                phone: "303-674-2950"
            };

            const worker = new Manager(person.name, person.id, person.email, person.phone);

            expect(worker.name).toEqual(person.name);
            expect(worker.id).toEqual(person.id);
            expect(worker.email).toEqual(person.email);
            expect(worker.phone).toEqual(person.phone);
        })
    })


    describe("getRole", () => {
        it("should return the property value for role", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                phone: "303-674-2950",
                role: "Manager"
            };
            const worker = new Manager(person.name, person.id, person.email, person.getRole);
            const result = worker.getRole();

            expect(result).toEqual(person.role);
        })
    })
})