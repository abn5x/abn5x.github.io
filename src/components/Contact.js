export default function Contact() {
    return (
        <main className="contact-main">
            <div className="contact-info">
                <h2>¿Tienes alguna consulta?</h2>
                <p>
                    Si quiere saber más sobre mis servicios y/o preguntarme sobre presupuestos, no dude en contactarme,
                    especificando en detalle tu problema y subiendo los archivos que pienses que sean necesarios.
                    </p>
                <p>
                    Intentaré responderle en el menor tiempo posible.
                    </p>
                <p>
                    Muchas gracias, atentamente Adrián.
                    </p>
            </div>
            <hr></hr>
            <form action="https://formspree.io/mlepwjkq" method="POST" encType="multipart/form-data">

                <label htmlFor="email">Tu Correo electrónico:</label>
                <input id="email" type="email" name="_replyto" required />

                <label htmlFor="message">Tu mensaje:</label>
                <textarea id="message" name="message" cols="30" rows="10" required />

                <label id="upload-button" htmlFor="upload">¿Tienes algún archivo?</label>
                <input type="file" id="upload" name="attachment" multiple />

                <input type="hidden" name="_next" value="/contact/email_sent" />
                <button type="submit">Enviar Mensaje</button>

            </form>
        </main>
    )
}