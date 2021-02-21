const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initiallization", () => {
        it("should return an object containing name, id, email, and phone when called with 'new' keyword", () => {
            const obj = new Intern();
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });


        it("should set object properties to the passed values for name, id, email, school", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                School: "Illinois"
            };

            const worker = new Intern(person.name, person.id, person.email, person.school);

            expect(worker.name).toEqual(person.name);
            expect(worker.id).toEqual(person.id);
            expect(worker.email).toEqual(person.email);
            expect(worker.school).toEqual(person.school);
        })
    })


    describe("getRole", () => {
        it("should return the property value for role", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                school: "303-674-2950",
                role: "Intern"
            };
            const worker = new Intern(person.name, person.id, person.email, person.getRole);
            const result = worker.getRole();

            expect(result).toEqual(person.role);
        })
    })

    describe("getSchool", () => {
        it("should return the property value for school", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                school: "303-674-2950",
                role: "Intern"
            };
            const worker = new Intern(person.name, person.id, person.email, person.school);
            const result = worker.getSchool();

            expect(result).toEqual(person.school);
        })
    })
})