let nodemailer = require('nodemailer');
 
let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: 'bhargavianubolu@gmail.com',
        pass: ''
    }
});

let mailOptions = {
    from: 'bhargavianubolugmail.com',
    to: 'anubolubhargavi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info,Response);
    }
});