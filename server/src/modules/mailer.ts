import nodemailer from 'nodemailer'
//import handlebars from 'nodemailer-express-handlebars'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "user",
      pass: "pass"
    }
})
export default transport