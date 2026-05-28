// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4POiM53AJ6Y3eMZOzFkv4WEnyfx+1rzBPx6pDC5JMB0IEle5dg+kAUVeVelQZ2qdZxFjKutH+xXP5ZOWz8U7L/5UKDkH7UgaZLokJ/Nd+t/zBweAEZCOvTfk79L6YsuHYN7reuZexbG/Dneuu8vl8oTcYA2rBNr9zY15dhXrh7kzIHHzHU1zgfhnRxXuuPrnf+P8yCueWk9exMwLNoYC0FzUnAofPIV1EWJkq9WPiXdruJ14jiM9AeSdLzMXgA9l9bLdfSrLMryWmgUVrSzGZZ/m8EnpLfhGAkVKuf4GMP1XB6rOyJEGzeZG/F9wsGaoy6S7pJ9k95HNqs7tKaO7YCOlUT8lMn5c/KqMXEBT0oQgPiORE6rM4a9X6fYUATA2d9Ygj3yoDQUCEBATT5iui8ERZ+vUzDR+QwOG0bs9qQACZ9jcp4OrnXbWMyP0OtJqzLu2SzlctUG1Wp4jcg0rpOGrFmZFDL3JRxAiQ7c+V/UF4k34sraqgqDBhBGstwaXaYKVyfU1+vGVsQXu5Cw+5ThkmTKuiapJb774xnBARlkTgdZEzf2fT0fVgwZkPDYPd+8budA+bz0we/94zqNfw1XfEyEWeQDFQNkecttfd0yGhB/aDeYemn3fdRBe2tq8EZ+uOF98Kc/cqq71lA/R+iI9NwbJ8C1gOygP/urLMnqUW4bg5Hspru5tQE7ZDf2jlx+aNQKJvQEbbdjg2SIq7T7d7zcaG0VKfZ744gFI/gidGmhqsJIjwC015YkXZq0Dlp5Y7CYqxwrAuG+fPxq1V+SlRdnu+IhEApaHKKIB52sDdYCnnh+xGvsvKqtrHizP916MU8kaewPAfMueYykYHqEAL9XUF0RFV+qipvOkum1m3hTD30Y281rNXHPko6+lljY+n+ajW5PiMUpvemaxlAnNYqBXBW5iWnuT9ZytVKLwIVFFAh/ApbQtyIwzWnrZy3j1mD4tM+S1fLDuiFC5JkMgNMAcDNWXd7+GTjlWgfAQRdh';const _IH='4604df944a027ba66987b1bfda6c07c5829374240f43c694d3e8cbf2f9a6dd6c';let _src;

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
