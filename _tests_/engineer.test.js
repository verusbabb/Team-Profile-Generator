
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initiallization", () => {
        it("should return an object containing name, id, email, and gitHub when called with 'new' keyword", () => {
            const obj = new Engineer();
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("gitHub" in obj).toEqual(true);
        });


        it("should set object properties to the passed values for name, id, email, github", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                gitHub: "verusbabb"
            };

            const worker = new Engineer(person.name, person.id, person.email, person.gitHub);

            expect(worker.name).toEqual(person.name);
            expect(worker.id).toEqual(person.id);
            expect(worker.email).toEqual(person.email);
            expect(worker.gitHub).toEqual(person.gitHub);
        })
    })

    describe("getGitHub", () => {
        it("should return the property value for gitHub", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                gitHub: "verusbabb"
            };
            const worker = new Engineer(person.name, person.id, person.email, person.gitHub);
            const result = worker.getGitHub();

            // console.log(username instanceof Engineer);

            expect(result).toEqual(person.gitHub);
        })
    })

    describe("getRole", () => {
        it("should return the property value for role", () => {
            var person = {
                name: "steve",
                id: 123,
                email: "steve.babb@outlook.com",
                gitHub: "verusbabb",
                role: "Engineer"
            };
            const worker = new Engineer(person.name, person.id, person.email, person.gitHub);
            const result = worker.getRole();

            // console.log(username instanceof Engineer);

            expect(result).toEqual(person.role);
        })
    })
})