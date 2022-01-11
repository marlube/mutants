import app from "../src/app";
import request from "supertest";

describe("POST /mutant/", () => {
    test("should response with a 200 status code", async() => {
        const dataMutant = {
            "dna": [
                "ACGCGA",
                "CGGTGA",
                "TTTTCA",
                "AACAGA",
                "CCCCTA",
                "TCACTG"
            ]
        };
        const response = await request(app).post("/mutant").send(dataMutant);
        console.log(response);
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /stats", () => {
    test("should response with a 200 status code", async() => {
        console.log(app);
        const response = await request(app).get("/stats").send();
        console.log(response);
        expect(response.statusCode).toBe(200);
    });
});