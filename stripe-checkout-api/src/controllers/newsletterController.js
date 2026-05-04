export const subscribeToNewsletter = async (req, res) => {
    const { name, surname, email } = req.body;

    if (!name || !surname || !email) {
        return res.status(400).json({ error: "Nombre, apellidos y email son obligatorios" });
    }

    try {
        const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
            },
            body: JSON.stringify({
                email,
                name,
                fields: {
                    last_name: surname,
                }
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("MailerLite error:", data);
            return res.status(500).json({ error: "Error al suscribir", details: data });
        }

        return res.json({ success: true, message: "Suscripción correcta" });

    } catch (error) {
        console.error("Error conectando con MailerLite:", error);
        return res.status(500).json({ error: "Error del servidor" });
    }
};