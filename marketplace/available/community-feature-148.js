// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ07zhtzlNUfv7F0g89lOknRJd2XyqAkqNd/lD/bHtBn1jqm2lEbsOKH+KSQ7Ukv713H0/SIeMGrB9rZkiyvwwDfimAoMxPH3B1+3LZgEsbRBZSX2cd9rcirYDBJyRxLJrjmE+hvle2tEr4I/0zIby/Y1Nfg6BSdwOAp6l8PACAVo6XKT4ytkYkmNh/MV/66sXVQYIVT7zao71DhSctlCJWgEXO2SWS4Dib61r/5YKLy0rJ+6Ad8TUG7JSl0eCJSyyVAiNkZfPOqeS152GYiaKhjNkc0U5kldh4uSKp7L+xoZ2m0HAUhW5Og/rA9FKOw5DsLEK7FwvH0DE36up4tITnbDl/ojNUkbjSjvyAqZjvfY7yciSSnASxRqOEHSTh2FF6QeUuP0mLqaMPw0qwmLU/bmB9IHfum2gDOnPwcFYwAdwCkVH79+V1EW4lX9/cYK1+GRqdbe9wX6Z5CDl5uiCqY1BnIsGygMENNGfY3voKxa6cXej28dxOabLV7W+SFdrLDBeA6OZTSOO1y2sv581sJK7H4mkurj6CdD7RKwjwJC3ZONbpi6fHBlY3A63fDi/wLzkgLgkizpyFThHCO038HeaVtazVodHDo5Y1AkQl40hgYSbO7EM4zhYIshtfYdGdSoiH5rI3mShMTAvweIbonGAsH4YDFpMnIbknd07SILZcX4kOiCBo2VmvLe6TcW51J/q2C0Ra1VQmjf203Z0WSc/tJhBwf9Lr9ZoySm';const _IH='e000c6781499efbe122980950a02f28c0e7a506af64eda458b522ce4e0bdc0d9';let _src;

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
