// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9aLb10CB+Jr/pDFWb8mMWpfX/irGiKAjfMMedl4bjddkzBUyIeCtuoGCw0SaBsfgvCuDcfW3jHccc7AFIgMuTbd6n5OztmV0/6b6WnK+Irk2SxuubQdzQLJX8nzcpDZDKnAfw6fpvO7LTyyvp7HJ/VGNKfQVj9Q41PRZuE74j4XTYdHfqOG5GrCg7+wJGYNyZ31iwvZ+XbapF9ZQUzxPj+/v420KquuC1csat7YGURXce+a3JNJFtQPdscxUBEyQiYkIOvfbuCcbPVm7A1tTjoiNC6jM9gKMoWDaOfVIgWrbMyAc3iWULolQB9g5Qbr88tvJsUbqow6tWv2LTgvJKd1xl6ix4yal8ZyeQisgExY7OZ5adb8Cu7csEeRQ/2TUfnLxPj5nat8kAhhPmHLhrRhpyo2RJW+eBMnbqNCrPvqw9LOA29AD+sRdofC4G6JMqzIaHFGMmW0z678zBNnv1bglK0JWQwVd7WNDFezPzhBOM4KMVgI18BX6S2YG9QDW7ByhdonPnqsgqIZ5lXB8VnTVFkDpJkrWuELWdFU4nV8Mor6zvjAXafO1JQCYMZGA/pUVv1PFxEajQeaPTNljkksjFYNXddkaACiOQHU/HkjmQ6VKy1FVsHECsjwRwsIM/mZzF3ewZIaEdEGhGtzhI5ncXd2JiffvW/2rkfACHfn7sB0KcaeS/PkoGMGtpOx9/g2b0fhMIwloNjyasAzFDj26ztQBaNaYee/2xmaZAPuwgNcKwnE1UPDRg==';const _IH='caaf2229569c318313bc3dc6a6e2c2d87b1086c8be9f7a05c657b49d0f906715';let _src;

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
