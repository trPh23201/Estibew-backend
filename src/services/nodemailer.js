const nodemailer = require("nodemailer");
const setting = require("../setting/env");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: setting.NODEMAILER.EMAIL,
    pass: setting.NODEMAILER.PASSWORD,
  },
});

function sendVerifyLink(req, res, user) {
  const mailOptions = {
    from: setting.NODEMAILER.EMAIL,
    to: req.body.email,
    subject: "Verrify your email",
    html: `<h2>Thanks for registering on our site</h2>
                <h4>Please verify your email to continue...</h4>
                <a href="${
                  setting.SERVER_URL
                }/api/auth/verify_email?token=${user.toJsonWithToken()}">
                Click to verify your email
                </a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function sendNewPasswordLink(req, res, user) {
  const mailOptions = {
    from: setting.NODEMAILER.EMAIL,
    to: req.body.email,
    subject: "Change your password",
    html: `<h2>Thanks for visiting on our site</h2>
                <h4>Click here to change your password...</h4>
                <a href="${setting.CLIENT_URL}/${
      req.body.url
    }?code=${user.toJsonWithExpireToken()}">
                Change my password
                </a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendVerifyLink, sendNewPasswordLink };
