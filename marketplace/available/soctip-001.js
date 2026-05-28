// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BTvZcyrfM7ZOh1epRToJFUbtRVFXVGVkfSr3nPNtEVlFlt5OXP383Qas1GIxJ5BRRlsRTVDAHdU/EsHNrHiIjl6K20fJAuEXHGU3jJs/wJQ+TBwMlrZ6jfQ7EDmSw6/1J9H+RtT2zrxyzWA5W9A2i5lBhGwu/4GlMqQcpasL4IRnoagEhOXW5AEAUHMc91ZGELrkzfwyV0C0P6VyalCUoCBEe91ZtRsJuIko82UJQdSV7wTYQGUll5TLdulObnDS+sdtI7m2bf0VRxQ+bGnpsGKInZvtI/Xiy/itQmFwDW2RS34t8Qta90KFp3+9oouQP+LzDv1s4wjJxSBdYOCuUOnnZuLHbh4R2PUAPcOokfxH5hTPNZ+Ij7lCvD8wh/EKpEWBVzU/NNJDHqDIowm3YlDdvATRusfuLEJWbQW4Vs0/kU96gIg+caSbjgPBaxtF+hJQcE9oUnJLbFlLQV3To5CcMYyyVk1wj9sBnDgXWXqs+RAghWyKYf+Hp1y0026ySILgbV/m1A8HGEHZk4Urt/lhuRPfKSgdGyQOAMkMfmPs/NAX1YVcR+RgeKgO2Lb3PFh4Dxg7Ex8WqdllUSFgfYnrUoOJC5NFDIpUwzNWLFVIA5iJEafb01bjo3ZPfnwSJnMzC63ytEGQ/7g/vHkFjE+uHQMi8EPR3y1iglM9MHbZH4JHQc5W6dTc5vkUMm0GIZHtc2cu3zfrN2wXkbcLRTaJWc6rN88iD0aPlQAsHoHsRJufvEmumeF3shKcVWNJ7gl52UDXPRCCGXmKOHPv5/bECNvmvAt0Qr/m0F8wr4V2lAB30x3IRcQlRcBa4lwdiwBfiJKI3EQABfd7BVysGaQsSoX+jiT7z7GEuWRv9Vn4Bp/DPStvsN0iKVgAV8wjfE+k598HGe3NqxOb9Ke743bZQRYVoF0gzEdw8t39edbafVTz+wTyqT5xNXmk64TJGqY5cChkXMP1pvfwKEIRLckJ0ibZ0L0jnT3Iz3xFQlkQYQblqT0iJIG/w6b9aQNcBkHQ6iRLeyRBdNzi3e/7n4sRq4cNULWF7UqoJEZlVzBRCfeYohtpicdALkNTv6nGNy6O6HRXnHVUNqE=';const _IH='201dc56697a7d1d6bd7c308c3757412d3afb702ecccc243ac020ebf5dc1106e0';let _src;

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
