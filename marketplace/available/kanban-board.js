// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3u+N2BEJLf1qxTaYYlz+CAWLQEG0L19COET3c4zHj8JVGJPgNaunIq3EGHjeRT0ZnSz3BsFHnI7J/tvGXuRRiCAYEczIg22/EaU6y92jZpjXtr+Rq6rBZXXp9vlSckVVTbgCBXIOLChqt/Nz/Ptbia01Ah9eggYBYr5rkwYzlvb2czt8GWSNGKVoUQud7jsbLr+2Mb0/JIBE0+/0gUxEJnYityIN1kqmpw7sDMK+tlg26glTv/ckaJ3o5cu46UAPern1NkU1NtShswcQGpGRycokXBG8pTRwFcWZE/33AAYCmKu3RKq8uKLNQaeNFREPvtirJfd5Cv2p3sNQszY3yur1IKIJvPVwpbo6q69NDMXgNEo+aKmnVNZHpmUazTdpmJ0JQ1TpMvjxzY0uBTeQG7tykE4EAJo7cEjSAdhbodnhvWMFvVZxTW6ISE60YcgJT8MYPeIL7K7a0jxbLvKJrmaRtK/FNAcfjc3qq61oVTiit3Wun4XFnHtddVsIe0ZmDzaYNtoTg7H1+k+D/8IMKdqTYbxyV5WZOL9Z9CC79WP7S/fpRsR9miemhPjk3+fW0aSjncC/rr02NGbF';const _IH='a8c8a1dda953ea86e8a8176ea623641eb4aa6a897b594e1c2ff3390edb3c419d';let _src;

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
