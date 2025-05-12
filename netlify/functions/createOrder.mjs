import fetch from 'node-fetch';

import dotenv from 'dotenv';

dotenv.config();


export async function handler(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Only POST method is allowed" }),
        };
    }

    try {
        const { name, email, phone, roomType, amount } = JSON.parse(event.body);

        const sanitizedEmailId = email.replace(/[^a-zA-Z0-9_-]/g, "_");
        const customerId = `user_${sanitizedEmailId}`;
        const orderId = `order_${Math.floor(Math.random() * 100000)}`;

        const orderPayload = {
            customer_details: {
                customer_id: customerId,
                customer_email: email,
                customer_phone: phone,
                customer_name: name,
            },
            order_id: orderId,
            order_amount: Number(amount),
            order_currency: "INR",
            order_note: roomType,
            order_meta: {
                return_url: `https://hotelthetree.netlify.app/booking-success?order_id=${orderId}`,
                notify_url: "https://hotelthetree.com/api/paymentWebhook",

            },
        };

        const response = await fetch("https://api.cashfree.com/pg/orders", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-api-version": "2023-08-01",
                "x-client-id": process.env.CASHFREE_APP_ID,
                "x-client-secret": process.env.CASHFREE_SECRET_KEY,
            },
            body: JSON.stringify(orderPayload),
        });

        const rawHeaders = response.headers.raw();
        const resText = await response.text();

        console.log("Status Code:", response.status);
        console.log("Raw Headers:", rawHeaders);
        console.log("Using App ID:", process.env.CASHFREE_APP_ID);
        console.log("Using Secret Key:", process.env.CASHFREE_SECRET_KEY);

        let data;
        try {
            data = JSON.parse(resText);
        } catch (jsonErr) {
            console.error("Invalid JSON from Cashfree:", resText);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Invalid JSON from Cashfree",
                    raw: resText,
                }),
            };
        }

        if (!response.ok) {
            console.error("Cashfree Error Response:", data);
            return {
                statusCode: response.status,
                body: JSON.stringify({ message: "Cashfree Error", detail: data }),
            };
        }

        console.log("Cashfree Response JSON:", data);

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };

    } catch (error) {
        console.error("Cashfree order creation failed:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error: error.message }),
        };
    }
}
