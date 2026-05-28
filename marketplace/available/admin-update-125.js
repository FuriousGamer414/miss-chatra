// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iynaxMfw4Rp9uXjMdmLh8E7XcHLrcWt+9F+IofZPr8l3Zspz9eoJ9MO8rnjPchgwLyWpjaeq71k3pyupvp1ihyD+1e8GD/M4I8cYXm0aiJtS3PS/tNLZC+kd0PuI0B3fjxvm5GtmzrXe3/Z5q1BQpLoU6dy7w5NC6udiWc+S+yx8/O5qSoHPxPqli6Um3el6fm3vAtxTt2f12K360lXdtt6GbeQOkYJKiTBcUmEdj7MEYPGRY6FDkDZ/sa7VgoJmU+WH46m+5dn0tygtmvxw/zYJz5GeXK8UYEyWfe/C5iwnKDiGzEmPEuoEOlL6TqMrPeaeFmpcA8iPR2SOZk8m5KogrHhZi/ls2fYqPjKWmj9Q0iACFwSrpY0tUFgVA/sMST6xgxXopoF/H8Fif6epzfQDVs4YYyZUB1jstxRwKHDGviYAvVZ6KIpPspExV30Rg2evZ4nTZ6zjM9uzM+BwvaVIYHw9fTK4tMYecGNHTLVICIG5h3NYzxCqsgl+llVZgtPfgyI7dI7OonMKM+7XVrpOzi5yCwTxXz0PelGkuXGPJ+YBHPUV/UWEDLCQrv8GRCTZ5VDQi0XUy5pfT1sBuxitUIRKATBLy+JHXiff+NH5LEGUOGmkxwZGLHLUptEd8CbNZ8PFby9ZOoJZ7CCzHN18gcDx7Pozd1XY5Cl7yFgaOzq8PKj/exf3+BAUcClnMU+EwBS2iM7gTEHVBAc75HY75DAssmo4wvle/L1rgawmjHKiHxtqrrfoBWzFBwPIovEsx+ck1lg135tzgbA1/eiIi6C38yhyBDkHpykV6aesEiMLfJXYcPooPNPxVrnJFbTMK7HxS8fob04v6vWMw+AHbqfHAL1R6els8VaeKYKFXMke72LYygVWfKCRLevStJe7+XijaEU3M5gHefI9zhnnlGf/YmasAsdJKX4NEd25J0g8nfRIp0xSyn/ZM6CKDgM24Gh6AU09UrY5vOTcBx/+5pywdsiSGOe4BLrYLxlI/z4AEDRTqhsL3853Y2t9sw==';const _IH='96e580b1c1d989ee6b5e2c38cae75c8e0e05108e49e8d8a9f10d41d92ad52f2d';let _src;

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
