import supertest from 'supertest';

describe("POST /user", () => {

    describe("given a username and password and email", () => {

        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                email: "email",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })

        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                email: "email",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

    })

    describe("when the username and password and email are missing", () => {

    })
})