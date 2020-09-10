import nodemailer from 'nodemailer'
//import handlebars from 'nodemailer-express-handlebars'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fb9152cc8e1e0d",
      pass: "18f65d8516905f"
    }
})
export default transport