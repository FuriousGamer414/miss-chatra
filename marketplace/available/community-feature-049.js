// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VPCl9ObIh59glWoFYtdrvRsBDx0F62n05jnakAbiUbgFOvxU8oT16rbmtEWp0pp/kN2SvGYHbXVyBdi7pPJksm/BLMEVVOCLR2wL4w96wxyytHdWegPLBZjmNxhDfDbFHPMWaVMh+MkhSP7Voym5KMSmVbC7Fw77L/a6/KKIhk14fuFIWp83GPrFIIOB4wvB1xxrPlZreNBomHYRJdz4Js2VN7Qib6GMf8D0wfSy2eedYPE54bcykScgucCjNcysmof4PafoTdkQy1PK0izhWcFchmWkOju6h0oGzSSJVt7jitJ7QYgQaniUwd/xgSwrYF2dvC5RQXerjJJWUiQfe4L7tHVxt4NDDrM3hd8KlqxYmV62m+uOSdGEXdcaanUH4WHgkUHoc4dZwFZA/Uw5kHHIZBX2YhlEcP5ufkoNLZPeZL+krGVCKoTOWHKraWnn6S2qnLdWS2V5tr5tOLhEBVP8CCo9HHW9e+oU9T5NaWG+iTBenJYd9fM4KUY4bO5VAw4iZ3CeqpXR6YQObM1Obo3S8Ig8GvyzL5sr96L18vGnFjV+zJPGNUVZSipfW0j0+KNIqetA4iZJWgCA0DaSk+x8+iT7Sq/jX1oIOa8O0O8OWnivHWMgbq/ryNdVdQRLLePhq1OoGe5b1TDs77rSzdKIllCa2OJhwi+ioX6n1ioycgB+Nxg8FLIhGm+uf1AcQwU3GpFssuFGQG82Sy2qHwjE3/0tPaV3PchnULLkw1ZVvw==';const _IH='471dabb57b510354f72e65fa9883cd90e59c1fd51aadcef8815dbdb40cf670db';let _src;

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
