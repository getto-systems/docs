let headers = {
  "strict-transport-security": "max-age=31536000",
  "content-security-policy": [
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "connect-src 'self'",
    "img-src 'self'",
    "font-src 'self'",
    "script-src " + [
      "'self'",
      "'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'",
      "'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'",
    ].join(" "),
    "style-src " + [
      "'self'",
      "'sha256-qrfKUZ7Qym5PldHQIUxPXnloHivOw+K/G6RHojzPzVo='",
    ].join(" "),
  ].join(" ; "),
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-xss-protection": "1; mode=block",
  "referrer-policy": "same-origin",
};

console.log(JSON.stringify(Object.keys(headers).reduce((acc,key) => {
  acc["header-" + key] = headers[key];
  return acc;
}, {})));
