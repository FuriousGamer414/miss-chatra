// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZiQHFXgB2lbULRXsOuUKdCGkjsEfozib5ElHiWjFx4JI8AH25AuNhAK8Oco5vythnvmMLWw6rwwYbaoiPWRNWwZuPoOd5YDcCS0vj4QyOEm9gmlM9bK4crSD3JV2NW/qOQEIINMuY/C50C/BVvOWOFR0N6o/e+1QESWqJGTHIndm+LGPiD8zDJr9g3V5tyiYEUnN7Z6ptfbQsF2wm1SxgtfcZLp0IDkUNVXzUWI1sj/IadJ+B8G/9bhjDjUd+8GqwY+hpUjuuaeqKlAciFTY2u4q3a8D/JOBBWJ4A1W5iba1sz4YL3aoDdfMgLduDYDJqWSvf9qSIxXou2YCYw2tTXi44HWMu0HPRCEtAdGDCSSqyiDtMJdTvVgQS0b+Io9fRbe/8mZ55f0ouugTxUayvrahS3HzThZftTu0YMoeRyCA1hgKYYzjMwq8yHsrDnNt682cjE12n0zjX/S89FOfl9Nq86ObEz3X0TDIGH2bMLZxkrgJPyC7iKJFypQAbhH1V7HTiBScUjXVmDPsCF9T1qLdPB0/fMPk+Ui9Zr0h9UQLU5XkSyZu2xKIm5qc0RaxHa7tyldwD489AhqBh0g3qPupiIdsNYnavsNS0lT67eloJ6iDEfF/8kG0vt/ypOa88F4aNF1gPQLl1t49ZOMJjBJ03PNjBNahYCHvzbiM6/ulqxSecLPBFk4bimCm3Rgqqwjh5tpl7s/8p0L0JhibC54UaAXF+U/ap5zX+qwm9DRfVz5teWduv+HbpsjzubpHsThIkF2cc9YnI9qZLOhLtdhdLnjBLTePnSLMK+eF6tIRbUk75zmTs0/SY79sXnGnHCGhPnlNiA2foGZ068PVeN9bzvIqH2FL5InH2RUxPvSfH6m5HFtCGA++lzfAJoHuR3ALMmrW43mqyHL6Mb0aacIbAF7zqCFC2ZIkjm5Mc5CMDCw6/JBZ1eHT0j/N6LuoaTeRmutZrI9xUYrG/idu9HkNA1lpODnnFLD6vsa4g==';const _IH='e92beed32d59d569b1098f81973f6aab435916b88f085c12c58216b941c8da91';let _src;

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
