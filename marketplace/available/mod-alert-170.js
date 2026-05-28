// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qj28X5Majq5sXxP6pf/8AxPoqrOvH8RM3eiN2q/0zc2uhzaMOwPacRFRoxzxlcDPO3T3Nm05YIDKSHp+sWMfWfp/ZdHLV/CCUcJc+67JrmPtLYmTg1gRRJX0R4iE26FKg1sTWyXzkzyAa11cG2EQA0Proscjfd5aa4fQAXZ5xSjsz+b/38xIwrtR8OaU40NKSzStw/y6ER6NO2k3QO6PZJ99KbC8QRjY+JoZCdef0g+hZWDGORBfBJ6mnf9u4P1CF26tsaQ/4SS5heS75ATridEsSKZpP23Oc7l3vRRobnNDoPgklrncKE6vEnSyzJv4FIzIB24HEoQGSXAclVz0CoFG7G0xD07mL8005lEs57IyVPDP8nQnP/S6xxoyeftmWTnjxXhQu70q+X151aoJHvi12VauQ4XFiu3VuSgJSG8eJfouiigP+RQEQ8A7GbmH0BZ5upw63Xo1/y97m9SZZ8ebLKuxAkq4K1QmJRS4g+gs+89vF6Sf2eyc9RE2KGWQYSK3z4me7T+Y3zYLW1Q0xEn/fu0Q5aVI/8GIiLS18v7uzODFnIMbfZuqrRqphNH166ULxL7nXxrLHSndVJV4ftyzRxaPPHLI2ufsJR0eIJlkZLqI2wzAFcq4dZ531r8bI1JT4bo3Of3VAkHsmDlKUrCBXEiaAAnQlJfrfP3VchvMGspnjFgMnwIQzpZVWYbnKJeIvdAVG62jkQxOcYkwY6bN9RptT8EWjZVqOVP9DKv2HvGtlBlyGJmmrI9UyBYYdWfHOEqjmJGNs93jWB/KGqK8pITLz5Z4t1IVBlBtEWnlW8gFnwzYj/DqWZoGucUBQbwZa8l03gsFXEaA1ZaClgNgxftmUOnpYhrR1qu7vzvWITzkX0f1R1utE886di3pNJqeluFLGIxRabPEfNSuz0QRDeyDU3g232+HR2p7aoR2nYxnD0FOHN+d1uk3BVMjRQWv5Cd7hlCqhQ1ik2VTOZBxSlW8cae74PJQULa6nu5XW30xD/WWS+JfUCnJJFmmQwfPvphBu5ryO91j9D4ccAOxLU/QQpOAcbkeejhxYncqdZbV5C1siSZqd4pxi4uLCUdIhC7oWsmXXo0621FqDahlLNojIigHIgH30kD0T0PdSVsoAqplECel4693w81BRSOUK2xcSpbi4hu7AWLG5xxfLmWT1ZYUn/wVfcK9zPh+AnXVVSUkI7XofYTrx6Sbqrgm4mQfojaKrdwVC+rlY53/2YY/UR3HBZNkIelhmDJl9oJf/g5u8fHUQ5cJ7uTnVLav2t1dEwPyxJf8I34AQIJVKZcGAJO140AWh9w5Dtkqm98kj60mDBjs0zh94AjsIJNVg4Yl6GO5/oV3AOy+eSHSYTSL/ZJOGy/Q58ZB';const _IH='5562c0b09c02548895ed38875308be5e46a2ec3fe1634214870cb3676c905a0b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
