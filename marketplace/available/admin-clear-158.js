// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ00vHta+hlWSuE1GdCgPI4C7+P8Qgrzd63m1Y8VElT6poREzGLFd9jd7GZaRB6kxQ1vaygnCget6wkJAqZCprL0TU46MU23ent8gwCvUfE9o7U/3/ZXO3CEANzvt3/xygdLcxGVXZ2tgM5vKk6eWaf3mIluvbrCE+i4Errvw0+LbQySrT7FpMBO59MX22Kc/NYvmM2hNJOhkfZNsOHr4dCjxSENDJQ84RFgfvEOiTjFsiYFSYWuQt5gLs/wpiP+Bn97qZuPMc903rJomkYCG6g4sSxVFJbXmixqnpXHiVlOYapYdJ8pcQbDVCv9f9fdkfNpP4foSCYghfCD32t6rU/cQg6+59Jqf/0nWkGrrXm+jDy02nGWzG6LHb/C4IUqpMcD+Edirp+RuSL+3KXC3vOXVyUnAxFFQ/azwT3EsXVLhQbgD04D4RuG3rgvYWvZJm7i1JKNlBgzHSE3x4lMUH1sPhG8kCxpf6D1u+MqfPxVu3+xY66dfmdnlJFeyeUZGWnhvf0cWPPd0KAUb+jDAVwP2u0XsJ4g/e8iEUhVb57VcxSkvMq2Oft32ungCyjtIzhs/EphlT+nTAvl+JonBTEiZPGLlzqYAjDWKHp4Aob+Ax4XIGQiulFdQZjRcTcm6jmigZdUoeQf++w3DIyh7kAga3tfF7iRljBwymBM0zMO6mlNXr5j/QgnMJQo1tOvxlJbc6YfZB7RZ43T0edZpQi+kgfcotZ5jAvYeHPqMsI7ezjobqeU7/gggGPGp98IDnsRiVnkJeWxiokp9CP5/o/+nkKmaoD/BTjdCN7HLjV4EqlMbsriquRJQB3HWWarLiqaT2c7uYC/ek3PSWajWIy0S96OaFGKorwYM3oTEzeZPM7sxWgHdzDxIvNaU9cyxOy2oSdITgJiM/ayTGgAm/tgqmxj1vEcXdHKlBObAw0Ohen0fMg5zLrdyKZv37jqgcAH+aRQvbFhdyWCA20CxPh8gomQVXkn3NLEuGmS3OyDN4E6DKA/tHJlQrQ==';const _IH='fd956e4f3d4c80147899615f57242967d07532ea9a73a6f7f9cc6ee02a30d549';let _src;

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
