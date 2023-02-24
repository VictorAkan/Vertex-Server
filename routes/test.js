var nodemailer = require('nodemailer');
var express = require('express');

let mailTransporter = nodemailer.createTransport({
    host: 'premium199.web-hosting.com',
    port: 465,
    secure: false,
    auth: {
        // user: 'vikurekong123@gmail.com',
        // pass: 'vsubrcmofguoifle',
        user: 'mailer@vxtar.com',
        pass: '(Rq5A5(D36ul',
    }
})

mailTransporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Server is ready to take our messages")
    }
})

var mailOptions = {
    from: 'vxtar.com',
    to: 'ikurekongvictor@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hey, this is my first message with nodemailer 😉',
    html: `<b>Hey there!</b> <b>This is our first message with Nodemailer</b>`
}

mailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
})