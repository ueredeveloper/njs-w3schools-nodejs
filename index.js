var http = require('http');
var nodemailer = require('nodemailer');
require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.USERPASS
  }
});

var mailOptions = {
  from: process.env.USER,
  to: 'ueredeveloper@gmail.com',
  subject: 'Hello World Subject',
  //text: 'Hello World Text'
  html: `<h1> Hello World HTML Email</h1>
        <h6> This is an example how to send html email</h6>
        `
}

send();

// está dando erro:
//  response: '535-5.7.8 Username and Password not accepted. Learn more at\n' +

async function send() {
    const result = await transporter.sendMail({
        from: process.env.USER,
        to: 'ueredeveloper@gmail.com',
        subject: 'Hello World',
        text: 'Hello World'
    });

    console.log(JSON.stringify(result, null, 4));
}