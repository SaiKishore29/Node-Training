
const request = require("supertest");

const app = require('../app');

let token = null;

// Register New User
describe("Register", () => {
    test("Register New User", async () => {
        const res = await request(app).post("/register").send({
            "userName": "testuser",
            "password": "testuser1234"
        });
        expect(res.body).toHaveProperty("message");
        expect(res.body).toHaveProperty("token");
        

    });
});


// Register Existing User
describe("Register", () => {
    test("Register Existing User", async () => {
        const res = await request(app).post("/register").send({
            "userName": "testuser",
            "password": "testuser1234"
        });
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toBe("User already exists");
        

    });
});

// Logging in User with correct password
describe("Login", () => {
    test("Logging in User with correct password", async () => {
        const res = await request(app).post("/login").send({
            "userName": "testuser",
            "password": "testuser1234"
        });
        expect(res.body).toHaveProperty("message");
        expect(res.body).toHaveProperty("token");
        token = res.body.token;
    });
});


// Logging in User with wrong password
describe("Login", () => {
    test("Logging in User with wrong password", async () => {
        const res = await request(app).post("/login").send({
            "userName": "testuser",
            "password": "testuser123"
        });
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toBe("Invalid username or Password");
    });
});


// Adding task without Authorization
describe("Add Task", () => {
    test("Adding task without Authorization", async () => {
        const res = await request(app).post("/tasks")
            .send(
                {
                    "title": "College_Task",
                    "description": "Project Report",
                    "priority": "max",
                    "dueDate": "2023-04-24",
                    "taskComments": ["comments", "comments"]
                });
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toBe("Unauthorized");

    });
});




// Adding task with Authorization
describe("Add Task", () => {
    test("Adding task with Authorization", async () => {
        const res = await request(app).post("/tasks").set('Authorization', token)
            .send(
                {
                    "title": "College_Task",
                    "description": "Project Report",
                    "priority": "max",
                    "dueDate": "2023-04-24",
                    "taskComments": ["comments", "comments"]
                });
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("message");
        

    });
});


// Getting tasks without Authorization
describe("Get Task", () => {
    test("Getting tasks without Authorization", async () => {
        const res = await request(app).get("/tasks");
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toBe("Unauthorized");
    });
});



