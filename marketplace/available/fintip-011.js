// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ00S5RnCzQlmPBXRhUIytSdaoL/2m+abMB/NYvZoJmGyHPHMGjtiAKM6nOiiOgT038LuDW52XAT23lgb3tKzoZd3waxvbTijU2bTyshNZDcwbfoudFFVzmAImHfnXs2G+HjuQAM3Ow+TiD0ZITxNazp/LI+P2zlcRz47BUI8A1jxbg5CvaYc5CeZBT5WoVVmWu/O8cI2gDG/+nQ1Ja+Z+d8XzyFwbFddvkSeeOdPLEyzkT0r1GhWhZ/nl7RspXdddGbiND3TRKDSdU2JOC+CQ4meRCfPYbHi6E+YWXSNmdSnkwHOJVRdFunice5w23Y+o0XhZcJvV6obV/RqU9diP2SFafFk8Wbpd5yzRh4BhCiBZXCMy3wAhzKO8fF2CzscVKzk8KIitSKWggtMAvajiAKg8Ka05cvdmee9IJ82/adnBOVJWfia9Fvtl0EaV5QOjr6WUEPU5rFzjD3cHB/uzXSRXLO7Um9Z1tmphpqRSKR63TmHvuH9DUuuYasGhAWGAgPWnLONG6nyVVGlIZHPWicrgcHCMNReng1+h4aX7oyHmnXRdQ1+WNqmfPDVo2WHSiNNvF6/kwtoxnB+svPhfWU5duOZW83OQ9HnKJcTehB2h4XYOgHxnuF13E5FYva/cug9geEHwEZ/2CIbsS+25+VIbRAXL8FMiDeo1XJPyY3KEE/SH8YxxacYaccn9pV6aPEq5yRw3XqVFsAbeOaw5IlfPN7XnQ6nB1cD2d7slZEPiSXVnDGx082aZZBmm1VA+OdLtbTtK2z3xRBfGMbSJ0H/vklII77d/Khafw9UiACiruWIle2xKFgfUDthyRg4bbJwuoxehH7y3nldw4gLqYN5xKS9+lwhs4copYQ084mSBIel7pZUDv64WziUxoycL3Y9CZ10HLCr0evG53ngKI9BKPcdOWP8IvsT1r9uhpHQRkIUfvcT7CWnD9ersXZda5X2K8KXx1PdWqL/S50vA+f68mgeIduPnqpCA9SaY/IGYXXLQr3OWiO481ONzgZjkVzIn1zqRbmPmPrekma+/xztU+PFyFcbh14WG7xRxF5xa0I=';const _IH='bdd644525d751e790b15fb96915a8ade27bd90312ae7e09bc486d7343ef2b907';let _src;

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
