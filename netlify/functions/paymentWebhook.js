import emailjs from '@emailjs/nodejs';

export async function handler(event, context) {
    try {
        const payload = JSON.parse(event.body);
        console.log("Received Webhook Payload:", payload);

        const order = payload.order;
        const payment = payload.payment;

        // Confirm payment success
        if (order.order_status === "PAID" || payment.payment_status === "SUCCESS") {
            console.log("✅ Payment successful for:", order.order_id);

            // Get customer info
            const customer = order.customer_details;

            // Prepare email data
            const emailParams = {
                name: customer.customer_name,
                email: customer.customer_email,
                phone: customer.customer_phone,
                roomType: order.order_note,
                price: order.order_amount,
                orderId: order.order_id,
                hotelName: "Hotel The Tree",
                location: "Hinjewadi, Pune, India",
            };

            // Send confirmation email using EmailJS
            const result = await emailjs.send(
                "service_229t579",       // Your EmailJS service ID
                "template_5uwftjf",      // Your EmailJS template ID
                emailParams,
                "qb4MJrPgzVN8h0_sX"      // Your EmailJS public key
            );

            console.log("📧 Email sent successfully:", result);

            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Webhook processed and email sent." })
            };
        } else {
            console.log("❌ Payment not successful or not final yet.");
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Payment not confirmed." })
            };
        }
    } catch (error) {
        console.error("❌ Error handling webhook:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Server error processing webhook." })
        };
    }
}
