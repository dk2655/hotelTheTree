import dotenv from 'dotenv';
dotenv.config()

import fetch from 'node-fetch';


export async function handler(event, context) {

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Only POST method is allowed" }),
        };
    }

    const { name, email, phone, roomType, amount } = JSON.parse(event.body);

    const response = await fetch("https://sandbox.cashfree.com/pg/orders",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-api-version": "2022-09-01",
                "x-client-id": process.env.CASHFREE_APP_ID,
                "x-client-secret": process.env.CASHFREE_SECRET_KEY,
            },
            body: JSON.stringify({
                customer_details: {
                    customer_id: email,
                    customer_email: email,
                    customer_phone: phone,
                    customer_name: name,
                },
                order_id: "order_" + Math.floor(Math.random() * 100000),
                order_amount: amount,
                order_currency: "INR",
                order_note: roomType,
                return_url: "http://localhost:8888/booking-success?order_id={order_id}",
                notify_url: "https://hotelthetree.com/webhook"
            })
        });

    const data = await response.json();
    console.log("Cashfree response", data)

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
