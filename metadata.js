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
    ].join(" "),
    "script-src-elem " + [
      "'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'",
      "'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'",
      "'https://code.jquery.com/jquery-3.3.1.min.js'",
    ].join(" "),
    "style-src " + [
      "'self'",
      "'sha256-qrfKUZ7Qym5PldHQIUxPXnloHivOw+K/G6RHojzPzVo='",
      "'sha256-0Ma6tpfVdTZVySLqUcH6N+qz5aWIee/JSbNtEpjmHRQ='",
    ].join(" "),
    "style-src-elem " + [
      "'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i'",
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
