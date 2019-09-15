let headers = {
  "strict-transport-security": "max-age=31536000",
  "content-security-policy": [
    "default-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "connect-src 'self'",
    "img-src 'self'",
    "font-src " + [
      "https://fonts.gstatic.com/",
      "'self'",
    ].join(" "),
    "script-src " + [
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/",
      "https://stackpath.bootstrapcdn.com/bootstrap/",
      "https://code.jquery.com/",
      "https://cse.google.com/",
      "https://www.google.com/cse/static/element/",
      "'self'",
      "'sha256-bimIMyRXEP/oybxalWcIAhSYpbLihuUf1RiqrHsg1wA='",
    ].join(" "),
    "style-src " + [
      "https://fonts.googleapis.com/",
      "https://www.google.com/cse/static/element/",
      "https://www.google.com/cse/static/style/look/",
      "'self'",
      "'unsafe-inline'",
    ].join(" "),
  ].join(";"),
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-xss-protection": "1; mode=block",
  "referrer-policy": "same-origin",
};

console.log(JSON.stringify(Object.keys(headers).reduce((acc,key) => {
  acc["header-" + key] = headers[key];
  return acc;
}, {})));
