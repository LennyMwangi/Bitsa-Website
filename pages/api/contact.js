import nodemailer from "nodemailer";

const handler = async (req, res) => {
  res.status(200).json(req.body);

  const { subject,  email, message } = req.body;
  const authorizedEmail ='wangaevans84@gmail.com';
  const pass = "nifhzqmaybymywnl";

  //  Configure the nodemailer transport with your email service's settings
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authorizedEmail,
      pass: pass,
    },
  });

  try {
    // Send the email using nodemailer
    const emailRes = await transport.sendMail({
      from: { name: `${subject}`, address: email },
      to: authorizedEmail,
      replyTo: email,
      subject: `${subject}`,
      html: `
      <p>${message}</p>
    </p>
    `,
    });
    console.log("message sent", emailRes.messageId);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
