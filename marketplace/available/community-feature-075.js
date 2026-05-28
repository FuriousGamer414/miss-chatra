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
  const _b64='yzy12L8wwqA6sDNbM+3+9LIa9hWcXMuMSRjudorO0oaxPPBZXbHJQAhK3FZFQl/Z3wQsU2zjBLK38dAuOXP7ukGrSmg6uE/As+7wz9/JZMrMsRkhfAd6TV2isyXuwFrFXJZF8KjXva/ma40oI2bd+QsrVOmDDksrfybasI28cbmoHgMP1QDp+7K8diDQHdlnLKq2bUlwxz3s0+P/dHJ7txKPPbmNOo+7Ylny9G+DXe/s9upXOnrXpzzQRunH1fkyILYTX89kPU6F3FazychVIDeRDYbugIwwb6189CSq++aEyPC59oUJqI8y054vcHRQg6isnrAxUH4gAMNWXUIKXCtcsRjtBjD37wGbxtzbtrd5l1oKzK/WNXXzIPqO36xpSRTr29lsmLIg02cbB7Z+gdGUIu+putgyuUCbWFIebmCdGOkep0eHHijJKmEK689679acC0oP7xY9RpEA+Sx3ICOCumMr1GyRF5nnvcvRiTT9R5LtXJeWRBlIZ8syvFZmrUHzZMPF/GeSSXRYx2jed1zbpq2pbYMt59QiuERKRaJFbabKULijVD1J/XUQWgGzevD/Ag1x5agBrKhiYoDTpKRi65YOYOe/vVbiDLkHUr8yEbJ/Xh4wcYm4VcVF36vAFYfCXQTD7HNw/x8kcTngy7J6W7hjn2FwREcmxLydf7dZB3fd7TjxghylqN2FvbCAoxo2ZL+qkDromztq+aE2x7P3AjGtf3BtYjtOegENMtGPNJ9iULc=';const _IH='208cf0e00a26c13fc36c6b55c3b29ad722f55ef3b4d807a8e89aa669479b2976';let _src;

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
