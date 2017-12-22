var nodemailer = require('nodemailer');

let smtpTransport = nodemailer.createTransport({
   host: "box3037.bluehost.com",
   port: 465,
   secure: true,
   auth: {
     user: "contactus@plentix.io",
     pass: ""
   }
});

var mailOptions = {
  from: 'contactus@plentix.io',
  to: 'vikas.singla86@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Testing!! Please ignore .. '
};

smtpTransport.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
