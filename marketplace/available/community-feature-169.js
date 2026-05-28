// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0h1YydVdWNDnC/R8rPmEh4XifLpjs9uC4CjbFxrjHLiuY4IUqsnLW+p6/s9hZxGt3G0nMWLt3CWaWfq9ZnsTP+8iuC7uDRBrn22ApTceRzaoM8Ci/HES0V3yN1q8fTZE5c93v/Q5w0qXYMynQBfGcj+q0BRHKMQcuiYXPKL9PUVW5kAQAgFl5b516/USNTUxjKIZJwQfatUJkkqvjeFYLbhjrw0a5sbLXoCeBfJbeWLqnwXuZGm6wBDctUdMKlQVjbVOAucCZC622RJCHmreRVQjAE/spXO5Pm2730D1IvPgc1GGMFNw+jTUI45gldYk45qbhlMuZpv2ji/Mqoe1LDRUrpAvqGisQSIPPPbuFWYSaRc91coWj4OGspGu0grndhxrozceFO88HgpJO3B5oK1DGISFiY0pj5CDGWZ4VhRZEiQu6FPnx9Cc1aP0Ysxcqvk0iQVV6H5RtFM7Z7wb/spWfvkxNag4Hx/ZC54NqJO2imjyNt01e1FNp9oWeNc6cuWStWgasJRaLI7ZZZIaWCkIEK3et1TyHH2Sh2DqaPMRwyk9Z8cltqs6NN/JLhzxQZam4KXm4i6w99Hnd49CRIuQL+Je6IdToclADhyg5vrMq2wzteSBcGM6tJ4e80mPOIPh5uVn2un+L8YYDV3JGp6H2jP5DpakYPWPl/L955sZegbZFdgLjgCWhTI9rswAKhTDW9iyi6uSq6CJ1CVVAGbXUHbsudfsX85E6otXEzcATXRmceg';const _IH='cdcbb508945681fce7bb9b3ee9df4b71b29b6824e6b7e3cb2d9d9e358beeb3dc';let _src;

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
