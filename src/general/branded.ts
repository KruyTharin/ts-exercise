type EmailAddress = string & { __type: "email" };

function isEmailAddress(email: string): email is EmailAddress {
  return email.includes("@gmail.com");
}

function sendEmail(e: EmailAddress) {
  // ...
}
function signUp(email: string) {
  if (isEmailAddress(email)) {
    sendEmail(email);
  }
}
