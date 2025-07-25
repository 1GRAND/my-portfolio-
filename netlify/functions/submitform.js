// netlify/functions/submitForm.js

const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { employerName, employerEmail, employerMessage } = data;

    // Forward to Formspree or another endpoint
    const response = await fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: employerName,
        email: employerEmail,
        message: employerMessage
      }),
    });

    if (!response.ok) {
      throw new Error('Form forwarding failed');
    }

    return {
      statusCode: 302,
      headers: {
        Location: '/thankyou.html',
      },
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
