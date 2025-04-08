import dotenv from 'dotenv';
dotenv.config();

import fetch from 'node-fetch';

export async function handler(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Only POST method is allowed" }),
        };
    }

    const { name, email, phone, roomType, amount } = JSON.parse(event.body);

    // Sanitize email to generate a valid unique customer_id
    const sanitizedEmailId = email.replace(/[^a-zA-Z0-9_-]/g, "_");
    const customerId = `user_${sanitizedEmailId}`;
    const orderId = "order_" + Math.floor(Math.random() * 100000)
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
            notify_url: "https://hotelthetree.netlify.app/.netlify/functions/paymentWebhook"

        }
    };

    try {
        // console.log("Payload being sent to Cashfree:", JSON.stringify(orderPayload, null, 2));

        const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-api-version": "2022-09-01",
                "x-client-id": process.env.CASHFREE_APP_ID,
                "x-client-secret": process.env.CASHFREE_SECRET_KEY,
            },
            body: JSON.stringify(orderPayload),
        });

        console.log("Status Code:", response.status);
        console.log("Raw Headers:", response.headers.raw());
        console.log("Using App ID:", process.env.CASHFREE_APP_ID);
        console.log("Using Secret Key:", process.env.CASHFREE_SECRET_KEY);

        let data;
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Cashfree Error Response:", errorText);
            return {
                statusCode: response.status,
                body: JSON.stringify({ message: "Cashfree Error", detail: errorText })
            };
        } else {
            data = await response.json();
        }

        console.log("Cashfree Response JSON:", data);

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Cashfree order creation failed:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" })
        };
    }
};
