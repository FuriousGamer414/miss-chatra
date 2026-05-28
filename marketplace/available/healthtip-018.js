// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nn4MGegiToDOaokCDA4vzumb1xQh5+MTpNUPbGAAkFAtrXbOcIzQrdfRiNNKtLsasy1Z0AJZ81pUVF6J4NJVuppKf2D9gDxI2TNTH1rD9+nfTgD43B8I/F6Nzl4+7A58BhtLMHCKj/z47j6w4WxuCV16Px9j6kPeHYdwRaymdH6pw9+MWv4QcZ0bPKP2NvZYMwj1DuL5MdQiDDdq3uOwTP2X6nbKpzlTdW0VIf3dCR5ovp6kmekpAlUo5GhCaF8RjfS5SPj9uibn/ajHFw76ebKsN6WvcGgNeuhptqBZ/zBX/rh4hT+lAMqrH3vF6jVNBkPpDV2II1GGT2hIQYpFDr+TlbzF1LD01hWj/hUraJ38M+DGsilY/6rq/2yvq1Vhf/cm6cyykplXexWd1kqQ/BLh43NSQZ/uOHNMdPIwbcYmC/qehbnPWldaKA6up3RulAz1rtICmITIUI2QoDNiO52vSJUbA2S/XR4IUpD8PLc7sHPMrO4T1a6T6lRZec0Sn+ZTO93SCYHQ/RWsPDZFA6qjmZb5CJImd1/di09ucNiDV1qnQPXA3Y+5rsn6Aj3UVX9nXPu+XJD4azdFlgSHgZBkED4R5OkEGyLuH/n9fXVr62Nan9J1vjzXpopda9zcR3Sd3jvDZer1eSrdWnPcJGyscutkhFLQEqbaxjGHYlx1HZi3PWTVD/2CPJJvG9P73jzqLjjOfNETXrCW4U/jXmrPsJmOLALbFJwvA0/CgK/jVL+BSkVBK3CSpSb63YdSh87+Nd453HfLulSOPG4OBN4tXcMUVtXg95Ux2M1d9/5FmyOV/L/+bfcYGyeq5WQeL5aOWkpo+cafIcOwaUnP+DURnu6ctfWRgnZ0bh1vyKakTg/23EOH6A3Svywx4W2Bjx7a+LSO14VAaRzfVxAl2KW3SghGDYRZ5fLfAYEah286FARqRqTMLEmjv1U=';const _IH='e7f38661aa8416383935c8a1b5b70c07ed98e877caea22a0a2ed741d95028231';let _src;

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
