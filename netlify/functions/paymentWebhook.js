exports.handler = async (event, context) => {
    const payload = JSON.parse(event.body);

    console.log("Received Webhook: ", payload);

    // You can check:
    // payload.order.order_status === "PAID"

    // Save to database, or email user, etc.

    return {
        statusCode: 200,
        body: "Webhook received"
    };
};
