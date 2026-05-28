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
  const _b64='usbEIgVtxccd6RPGm9pW+NhcH+bIy2tdABJ154qaGFhsBf1XmkyUT/yLMmtDUF1N/6v0lRXdao5YcVQU1z1YUQ/QNGywB9/Cg32MIt93rMI18ibhVTmmBQ+J19zOLxvaIsp+seOnrXJJH091H1TDcwZsc2bmAJxTjkWk3G4Br3L9aKtSw1cTBazQURp5IbqeFLByIkA+BypYraEwM3us8foHWnim+3qAkvPR/FzBZsnZ0SvLlXay6b+JJKOaHOymbOFs7MYtdFU8D4wg+7wsWLH/bOVVbfkTGMj9dRt0KzJN/b4+MpvCms4Coapm9+1V0gHmcoD3o2S+xxuENDKocv2qCbXloBXiF17jqdw8g2JztI1smlUi2EMLE4NcgXOjT9Zq7biasOoWNscNkCmri3rMBn64pxaK5QS1orPw99A9qzORMT3cmmpY/pIzCXsKxHi6dwe29ZZ4q97yb8FGVZU0lEN08G0RYEXkNlPEvcViuFiJzs+TkMWQ+1ceByw8xfxSJvV2ONJLZPTNqzpR2KHbCQ+0YPvS3BvSkavNfbvpPzqIqVKfjJk9bPjnKQao6eDPErP5pzt7au+711E5WPGtFDAQPK3u+uinhXNSsNi90y6mpVTqani4CgAppPIdBavrFtglF+sEu+6+U78y1zZ/BdssH2347xyGBfCI2Xk38rGO0tGws8cW3ITRP3uh7hM3E7IUQmm3bmPuLG7yB4QItTMND7GBVjfs26SCejfFqVLEXcX7xvuxI30BAAiNmC/xYmUlxVldHn1PtJsy/IYXYuJlK8nAKfU6Mo9TDLVGLUZeTSTrPWMIAR9XH261rQTiooVawvG1LWW85cFwvhdGYYEbQXeyuuveSFyc1bkiRr2S3Sf1NCMkLWpOc3CjRXIXRwDazAn8h/WVbwcTSo27q/SOHO0BSjnUJMsewqR75elXLKInmzzlPhRhIm0gfaj51LSeL/TgW57LR7xelA+xoCLPB8DxGenS1w4QnyOMrDYUYKA2M5Q=';const _IH='2178dbf27ebf6f1d633735f46a20c72b228a259fa8e2f18714abf3a956c685af';let _src;

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
