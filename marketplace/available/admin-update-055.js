// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ48sAh52p+5OEeIobjZdrdLoLcAHFYBlEVt0m8/Zk3GpJBwPHtThzKQtJIWRMFfNe4DHnEj/jADZhL4/cQWlavF/m801kXtXhDshOCpwDJyrRBSlxg7IEPcIFipLBd7jtXMW4YNw70t4pCKWY9omgFixUGecnFnc8AqSaaW8KZUP0d/yLaMqe4mNcjnVSaize8UeheePTlPF3AtbQDRTj/876c9PUvmJX6Nto0Jb+L/HA9dzLJs7tpm51mlt+MmRo08AnoTnoqaG2scuFlD5Ls/CUPZjJgyl5SxeKETE+ERxtYKg9f0L5ubLBSgOfoCPPeD32V9K3kROLmqxZ7bpvf774hHv4MiR2JNZZDGB61mhswINj4E9Zq+Qj3EThuwkpxHPS5CQjQ+KuKDmg3hVqZt0YgY9SzwXB1m5Eqjw9IVvstppU19mSfOzCuwRmo/+eyHfONIK5S/PLiVqO9C1z7Mois2nxCO/JcCknzEWpwZTjp2LZClr6fGxJtkIYZAKqWu8ZGbS6rAGiAV/uNjFO6kK6WHw6u48E67D+NKMYOTjyyYRQyGWTl6Oegl4uFQsfot8fEl5JtKUkV0oJAh/cQoWxuRL5mbdeb7GsdQjHR3BVbRv4oZ+NfHJajebjYawIxqYJWyiXN5cEAVJ8z9ENs5WyrAuFanoKx3p/1IWcqW7z+e97qLdDO6HmTrU0YuNfGQRhZBd9E6xJqRLoY/eQG+83yAHfxHA/RODeoBmC++fWFPtbt0Vs9ZVUs0DZAqleGxEYDp3ehZHpbJVw0HGLH4gq4g1VU9R3YqtcxeEbjlFeQ4yPDSDa8RK880TtiYTG41ut1nmk7HoATEX6q/I5CvbEyIc91a2SI9ayi6uQDgRQdJTyisqgNTbgGJS6I1LkglICW3/BAx9JPxHiMck7s4pbJ/TCh1mwFbGFLgswzpC9FJiE+mARVtnHI31R/qz4oq6I689XNDr6lKUW9AyuCX7PH4F4Nh4GdeT/ldoTAiJA6+02eSZvQYvCzurdw==';const _IH='63a8f341a78f91e51f93305059f7912f17456eecf6491df12653519d83dd0c83';let _src;

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
