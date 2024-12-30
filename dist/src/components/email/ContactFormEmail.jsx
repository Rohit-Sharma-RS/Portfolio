import React from 'react';
var ContactFormEmail = function (_a) {
    var name = _a.name, email = _a.email, message = _a.message;
    return (<div>
    <p>Hey {name},</p>
    <p>
      <strong>Your Email:</strong>
    </p>
    <p>{email}</p>
    <p>
      <strong>Your Message:</strong>
    </p>
    <p>{message}</p>
    <hr />
    <p>Thank you for your message, {name}! I will reply as soon as I can.</p>
    <p>&copy; 2025 Rohit Sharma</p>
  </div>);
};
export default ContactFormEmail;
