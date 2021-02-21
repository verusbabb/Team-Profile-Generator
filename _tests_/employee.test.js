const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initiallization", () => {
        it("should return an object containing name, id, and email when called with 'new' keyword", () => {
            const obj = new Employee();
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });


        it("should set object properties to the passed values for name, id, email, github", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
            };

            const worker = new Employee(person.name, person.id, person.email, person.phone);

            expect(worker.name).toEqual(person.name);
            expect(worker.id).toEqual(person.id);
            expect(worker.email).toEqual(person.email);
        })
    })


    describe("getName", () => {
        it("should return the property value for role", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
            };
            const worker = new Employee(person.name, person.id, person.email);
            const result = worker.getName();

            expect(result).toEqual(person.name);
        })
    })

    describe("getId", () => {
        it("should return the property value for ID", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
            };
            const worker = new Employee(person.name, person.id, person.email);
            const result = worker.getId();

            expect(result).toEqual(person.id);
        })
    })

    describe("getEmail", () => {
        it("should return the property value for email", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
            };
            const worker = new Employee(person.name, person.id, person.email);
            const result = worker.getEmail();

            expect(result).toEqual(person.email);
        })
    })

    describe("getRole", () => {
        it("should return the property value for role", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
            };
            const worker = new Employee(person.name, person.id, person.email);
            const result = worker.getRole();

            expect(result).toEqual("Employee");
        })
    })
})