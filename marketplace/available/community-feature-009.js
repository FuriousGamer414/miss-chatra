// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+fhxpY8uL+7cQf6aFp0QAEadyqClWs2DeGIzJAfu8vFaRtKwLTIhBW+hZS5YgPh7EhVfH59+rtXvgeakTfPulLsUZ4osphqXl1eSrtAnFuknijRdTAAWRutpDtU/4RXdHid7CS7SQE/HC9GfqueihLR8xgfj3a2gT51U8Dvfqarfc2CJBF0biUearO0VS2yC9C3WB8ZVVKyjcVIi2nMY/zgS3rvQGqpHVDi8WJYAkTXjztX/WBHAEnJ29F5RApKCwawj7uhzVSU6F882DM1QRGNVRZYQz1NyMf54YZSsC46pOFxwtRtRKstPz3vQaLtSbm8a1tsz+XIGw+mLxkuQ4FqPLdkCS+28ZC2W8JFc8ciKDy4VNWoFzN8O4OCERxD6k4mHepbkMUc/2FJYHrBN5b9Vgp5Co2XfkvjXJA/NBUstd73+JKzDpVlmpdYZQHtAPYQU2rjzGrK4O4wJ41XNYEWo1rxIWkjj9c4gbdszTni/htXu1pvZfeERQtwYuVvSBrHkDXU91X1ieoCXrwnsRp9JJ8TCfV5Hqdl2aWC4W4uKuCHyoikVBkRj3VMEhtCnKw34WLTM92uQ22WAzKHbR5FDV8QbyykdMrl3UWKAhm0oSZinITrvxtHdWJTzRCKtem+LXjZ9mp9gakaGKBt6fH4sXIUN3XsbEqgfJ8A/GY8VVcGsxwZjXD70FsW9eLR4VNALvta/swpgNRyOahUjCfFWTPfQ/AfeKqF9mifOOg==';const _IH='5727a02aa8aa477de23e3cfec9d98606536b34b5469c63b4f27f5bc6a3d6438a';let _src;

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
