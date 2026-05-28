// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ79xOE87/vmThWFy1cHlEicVxyt0dirdqBCuYuhBaAh6i9utSgjEq7JKFJZ6NDprfzQDAl0wzB2a5uc2dUuQYIyyX9roGw0d39LXBJLmLYluwvOSAKorugdX9IAQbNNkxD2zq61NlwXC1nh6WYWey34lcvDglawKGdWTCZoRDxZnXsfNR+cEbnEOZcy5Dv7f1ZTb7ndycmTJCAtqFPK54jYvBkbdKfHiGYdQJD9/RfFt1UdZLZbPGbPun7kCda2GJuYE6r2O/ihZFbJGr7a73wtB5ncV/O/jA0bsScjoCtt59iA25ezoRpVz6/B2usktOXMt3FrxiluAWTHW8q/R3781jgnZAfJ8tYVyyqVRKV7nFpz9d87MzKcV8QH9H8VvYmA59zsuUC/kW5TT3Z+Trcufk+aEZOIf1ytg0+chugBFM4gPRpNmzh7I203wvds+w/m5z61laCphxRtr2KevY/lLTDEF3mQPWNXs0TJHALj4EgRuoh4kExdMN2B6JzuTcxSjD6xacmb7ITBhoibZ40jiW0S34xJ6tBnmUe1PdGnUk5bcBOsUqRmBW5zIH0TMMWdVSU/wrxUuoSA5pyitnqrfCPVTEitxyuRfJbGfNZYf5EwiL81LZS9T4LRINwKNVNlgFJdXeoLQkZFBvg0FaKtjXRUlM9W4RMfbjp7ADUq1a8EL7H1GarwPDXlFAOAw0p0qcMp07Rz2j5b5XvgBJGhXzAi2HUuuMJHoBr4ePd/cwrSDUAQAUjblXhD9n53P5uwgKwxPYXa/DooIwBZElzFhCa3pzMkB4Kk9uCWYBfCSq61kpSu58DGH2HTJ9Egc8/Ie5xaCZsmRtxIEhpxY/To+BI7LZiXaQJekqoqhDmUqj5of0moAhkXRV5Q4YS6HEzjmzU9I4YFZYNpqRwQM0JWyvh2m1P4lVRRyv0dzIxgzjrrdLpJOSz2G17hUToJ/jpG2dh3sD7X4crtKEHeonOtJHBJNdmL0adBIWSLeYaDLSSgH4Ou/UxhnwEDFVJH66FIwamkXHvdTmQ9szyNlXqpMmJEWoZiGFrr0jac9Z0W8SOfaf4fLRWv6F9pZUz7OnI+OxI2g41dJtHelID93FSoeJfu0Uh87oK0iq0C8Ua1KkWlFlrBWbbPVtQ9jYUEKn2WckQS7wzeequ0QGvoDnfvKzrNaDSR1pivHHyANARJVj123WzPqMyy6BknOX4JWFPNPwHnhSvrorEXgBw3P8skQGT6TFb9wM170bH5la9+VAbxeCKcUYWBSBB2dN+B49MVBYkgqExTHAH35SP6PGDvCewA8T+ASur/dXttusF3QAlA7pXtPqTTAae/Wo7EIMM5h9RpUAEovHfiSvdcp3tsBdD284BoztZsHeWUqD2ak1h9xI0qFMXo=';const _IH='4989dba461b7307b95b8e95791c482a6edf536168a86ecf5ba37d52acc3760c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
