import nodemailer from "nodemailer";

// 1. Crear el transporter con tus credenciales (EMAIL_USER y EMAIL_PASS del .env)
const transporter = nodemailer.createTransport({
  service: "gmail", // puedes cambiarlo si usas otro proveedor
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 2. Función para enviar correo
const sendMail = async ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,          // quién lo envía (tu correo)
    to: process.env.EMAIL_USER,            // a quién le llega (también tu correo)
    subject: "Nuevo contacto desde el portafolio",
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  };

  // Usar el transporter
  const info = await transporter.sendMail(mailOptions);
  return info;
};

export default { sendMail };
