const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
    //   host: "smtp.gmail.com",
    //   port: 465,

      auth: {
        user: "prathamneupane5@gmail.com",      //email from which we want to send
        pass: "trjyscnprvofvmhg",             //wrapped email----> app password
      },
    });
    const mailOptions = {
      from: "Pratham<prathamneupane5@gmail.com>",
      to: options.to,
      subject: options.subject,
      text: options.text,
    };

    transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.log("Email sent: " + info.response);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (e) {
    console.log(e);
  }
};

module.exports = sendEmail;