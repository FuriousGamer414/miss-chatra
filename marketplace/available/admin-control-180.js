// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJHrFTIUaf0z+1PIToGqs+sHwDmm0zBShs0RvsSOcD14CxeDh+4xe/aON0/LwloPxCSRz+M4WYOOBlVJewgALr2ysQGKwz4l9JgNvf35VZVqlnezZ4+s/iORJqvagOcUL9lkAO1sumPq62PBlnDeW6aYYnaO9zsM6BfxeGdV7al3sfk5ak93VG2/l/+G/+WZdR5Q/bSCDpopSAVf+RPR+uDvAcCdLjPdPJP49mR76IGfVd7HpSJ/bnBhdSnz+9p/T/xmQjpGLSYmRpqLsJof7P5ERye61eLAeR3abYgZvVEzbmBPWxiTeUGTYtiouFyEXNXIrwW0SmZCILaPqtNjlOVwn1I8yMeEFCYXt4r2zeNN2Kcr2De1TGTXV4LPYsRhiUCajEcV8gUBH5hn9CWbEGBgpeaQ3u7ZeagiDfEtEmkgeb+mR7/WV5JJASws/L1NGV5aKpY5Rg2HPJR8lMSHI0fEQieV+qtnvwjJh68QHypM5wjSILsnM+cbRA5mNr/DOyU4qo+BHg+NX5KpOG7vASnqt5z5zYenUEXduYtCiPXxX2MfMq8UqjoqcCLK9nGD8NgcbhnlD4M/ceQBOr7XAHbgzyl24REM/5pjJjoaEekcaZt8b6izjj58i+Ap5F2PYXj85zQkVhw97XMfjS0T3dBRBLplBVTdldEk9GMaiYOCizUPA5WKNyNLXpmkGIeQhBLGOn1P86EIBXI4cReLWH2sZpNTtoWhm0qM+pPGuM0TuRhq6gKeyaSIRdRm2/oTHtq4KvCj/klm1Y7iZP/Eyt/XeitDfkm/cy6G/0NeEevu/LLzerJRVqJnj6XUW5fWzJqbdG2H+KIiRHiYYu7ABjFNGn514FjGmE1qrl/7sx3WTHpaJu4JFoR37hh0GVuguafl9Tp+TlCTtGV65JoMszy90doN086pEeAycNSpbXFHwtOKzzujkPRkqzj6FlEyNY8M9ynr95TBq0iYLsbC3x72hpVnxDwwhIsxcwlnE/sCGLQLqGqH0TmYU3IbFMjPzJwOMRXI3bQ=';const _IH='61a1800d7ef2b542cf29f803c342617fc0a594b796906c0ecc31af82cda4b48d';let _src;

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
