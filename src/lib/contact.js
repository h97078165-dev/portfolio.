export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "That email address doesn't look right.";
  }

  if (message.length < 10) {
    errors.message = "Please add a little more detail — at least 10 characters.";
  }

  return errors;
}

export function buildMailto(to, { name, email, message }) {
  const subject = encodeURIComponent(`Portfolio enquiry — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
