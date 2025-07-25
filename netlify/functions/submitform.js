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

  console.log("New form submission:");
  console.log("Name:", employerName);
  console.log("Email:", employerEmail);
  console.log("Message:", employerMessage);

  // 👇 Redirect after success
  return {
    statusCode: 302,
    headers: {
      Location: '/thankyou.html',
    },
  };
};
