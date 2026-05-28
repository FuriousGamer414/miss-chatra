// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nIN6D/EKV4HPF0L2KuKfGTCpA9BbJAYzIe/YuzI/nfURifkU/p7z4cTrqgvC0ZlVwMzjnpc1wCQ+dmIi7ytrcTkmUWePyBRp0C0vIGAQYk+pfVkiRKQxmRB88oKgUbxhLgUkCoyyPVdTcamGyR3wOuX59023fGTuFnCZp9Ya1Ll+1O1T7AWZQw+Pm5qmPyTwYV7byR2eg+KapVQr25uvx06vllaWhJZCvpxNjwlNGF2SSLX9UfHIeWnuTK9d3/FyCpU/dXTTl4d/f4Xs52fo0VezZpjtoY18HiGBN7FI2G9oKXLr96sJzPJODbDFezpRcPc/P0oCMFMCH3ogKcXqQVWwk/hByTOJLQbSeF+23IvUErOD2bs5ieqzYZCGbYOzONOzI+YPuKWO0exIw2n99o1tzchOFxP3TTtgYwcoyxHN6LoUuaXNdrLZv48//yRaOGVOjbBfVFnilKvUz1vAs0P/TlHXXvr9Aten3ri3uN/6K4aGs1D2SBOasDAmAfsEzIqZae8XSaGSSOmuZ+98A+GEILijOysMnz1rMkp294E+wilhVX+9UlCY7Bsh9vQfGL00T4mqec1lSh4zANOQKFpErU4qhZ5scsrhkru8irKj0/oC0iS+vnnU6l+PDLmaM6eI3CAEF2/8WRFWwokJ6o55Qfpf0w8cYUCPSGa83/uez1aUcdpfOq/y3pxAkVb+EGoh8SOveqV93XyDRVzMjQl2Gk6jWF9qfg==';const _IH='ead731334bba24ed26199d5e8f2a2403e81fe14c57cb55a8f26e213fc93eedcd';let _src;

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
