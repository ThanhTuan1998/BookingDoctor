require("dotenv").config();
import nodemailer from "nodemailer";
let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Admin Booking Care", // sender address
    to: dataSend.reciverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    html: getBodyHTMLEmail(dataSend),
  });
};
let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `<h3>Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận dược email này vì đã đặt lịch khám bệnh online thành công</p>
    <p>Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian:${dataSend.time}</b></div>
    <div><b>Bác sĩ:${dataSend.doctorName}</b></div>
    <p>Nếu các thông tin trên đúng sự thật,vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đât lịch khám bệnh.</p>
    <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
    </div>
    <div>Xin chân thành cảm ơn</div>`;
  }
  if (dataSend.language === "en") {
    result = `<h3>Hello ${dataSend.patientName}!</h3>
    <p>You got this email name because have set up the history of online to a public</p>
    <p>
    Information to schedule an appointment:</p>
    <div><b>Timer:${dataSend.time}</b></div>
    <div><b>Doctor:${dataSend.doctorName}</b></div>
    <p>
    If the above information is true, please click on the link below to confirm and complete the procedure to schedule a medical examination.</p>
    <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
    </div>
    <div>Thank You!</div>`;
  }
  return result;
};
let getBodyHTMLEmailRemedy = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
      <h3>Xin chào ${dataSend.patientName}!</h3>
      <p>Bạn nhận dược email này vì đã đặt lịch khám bệnh online thành công</p>
      <p>Thông tin đặt lịch khám bệnh:</p>
      <div>Xin chân thành cảm ơn</div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
      <h3>Dear ${dataSend.patientName}!</h3>
      <p>You got this email name because have set up the history of online to a public</p>
      <div>Thank You!</div>
    `;
  }
  return result;
};
let sendAttachment = async (dataSend) => {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_APP, // generated ethereal user
          pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "Admin Booking Care", // sender address
        to: dataSend.email, // list of receivers
        subject: "Kết quả đặt lịch khám bệnh", // Subject line
        html: getBodyHTMLEmailRemedy(dataSend),
        attachments: [
          {
            filename: `remedy-${
              dataSend.patientID
            }-${new Date().getTime()}.png`,
            content: dataSend.imgBase64.split("base64,")[1],
            encoding: "base64",
          },
        ],
      });
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
  sendAttachment: sendAttachment,
};
