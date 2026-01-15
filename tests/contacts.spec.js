import { test, expect } from '@playwright/test';

test("POST create new contact", async ({ request }) => {
    let res = await request.post("/contacts", {
        data: {
            name: "Jane Doe",
            email: "doe@email.com",
            reason: "Testing"
        }
    });

    expect(res.status()).toBe(201);
});