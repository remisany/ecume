import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
        user: 'remi.d.sany@gmail.com',
        pass: 'vscgribxyzjpbrfw',
    }
});

export default transporter
