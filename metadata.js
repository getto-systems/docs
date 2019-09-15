let headers = {
  "strict-transport-security": "max-age=31536000",
  "content-security-policy": [
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "connect-src 'self'",
    "img-src 'self'",
    "font-src 'self' https://fonts.gstatic.com/",
    "script-src " + [
      "'self'",
      "https://cdnjs.cloudflare.com/",
      "https://stackpath.bootstrapcdn.com/",
      "https://code.jquery.com/",
    ].join(" "),
    "style-src " + [
      "'self'",
      "https://fonts.googleapis.com/",
      "'sha256-qrfKUZ7Qym5PldHQIUxPXnloHivOw+K/G6RHojzPzVo='",
      "'sha256-0Ma6tpfVdTZVySLqUcH6N+qz5aWIee/JSbNtEpjmHRQ='",
      "'sha256-pSQgUq1c1+NLvUbGbB3dH10HbQa3XSVRU3/Wf2wE0aU='",
      "'sha256-jimIt22piu8wTrmd9dT1psMdeoYTeD6ykru+Oq4Vtfs='",
      "'sha256-7Or+KYE2T4dtHFWgCRNiDi9M2q1oB+3KFkD+7/cTEdw='",
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
