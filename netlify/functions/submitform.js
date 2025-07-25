// netlify/functions/submitForm.js

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);

  const { employerName, employerEmail, employerMessage } = data;

  // Example: log to server or write to storage
  console.log("New form submission:");
  console.log("Name:", employerName);
  console.log("Email:", employerEmail);
  console.log("Message:", employerMessage);

  // You could integrate email sending here using services like SendGrid or Nodemailer

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully!' }),
  };
};
