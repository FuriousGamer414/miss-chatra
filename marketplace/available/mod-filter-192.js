// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q7rPlz8ytpcDbmChSRnds6XMtTHkfgdJch4x6mitQ48tDFdf89mTILD5E0f92AYqOt8cFrS3ioXRwb5kp7Eo1C8NsOJaRBiSJZ0fkuO3NfaAPNZ6bLI87EukLJsusowVeF1TnQZjDtZvHyXzFsU+PBHoCieo/m5U9lKigJVCTHoJVBM7ClTrWJJCsDHYKx5sFS5PuY24Ou4rEoQA7n9An9Jtzjum8MsOSFNkr0llgzmdGoGR8VqscHu3qLGaxfNXaZAnVuwtnRhCiP6m+gbvEdOC38oyu/ABRBoBk6fYFI/zmr2ch5gGX1o1/PR+XuRARGzAMZas0bihoW5/XjeZgIBqLhjIymWTHHMdEXtaxJ9U46gENXZEj1Z5WBRuZgtFkjZj3Uccz+PV69nHHuRMNL0vIPFyhZRIkvO+S+VfkYotOUA3cVZuCgkYrdTb70pzbQQJZepFU+6O9LurOOHKKCxi9+tk04MDBrzjo/ubjO+1zy3uenEt1MRoiOKq7vLbbllR9cFQXdUjZtI1G7IIRKQO3wy3y+x3/aA7ntzSc1AE2sGru6G/cZ/M9j/Zw8Dx7x6k8kHV3p3YV5ioONIViayZw4l+u2d3l1sCWRK1juDDxNboKVd+37BJ7YBFH5AjZxi/ECareoFmK+h7aAvo0j0kMcJKEj+RcIZDsRhUwez4CHIcS0O1Np5SbpGWoES+ntA3D9b7SPiaGs6HUv9Ga2ULnhAjijFjJsYNacfELyadwUmErnvkAWo+YdkKNUJXhxDTOF0Aq2azqM6GhhJbOxnn4FNoT8TSgys0sxtxNQ3yRNmZ3gMzBpg9g1rtrLiRA3Xf+s4+czgWlXgruwUqSGV5jknGoWAduY+c2WIjBx2wOTkX5vfagHFGlbSrZKMNS7cq1NhhIxBnuh9Y3VT/6J8DtR/Y4iUE5krl7vdbV1AUL+cPlQKFJNV8rVLpkjSzTHdCcb2CITqr/6sX8QhdwVTaLplmZdeZWRBUhuYNHzQnIl8Ij24IXBdxA/9jjJyy8mM/ul3McRTirSIj6MllilEIDgNxys+c0fq3/zOUzYDGENC0X+qjs9YpKp8EvdKHkAzWaegY8g3Ji7nyrge5Zcx/0iHbLjOxz6REons9VHyjsV8xIqtxhKEqXb6jyPPuRlvaa2UoUmz26rj2t7SrTPUEVSaUD+ptfjMrJDcln4hs3fszVnu/9HocExFVw5vwxeh1D2m8TR6rVJo3qwX3Qwk4CJChsc3edrz7ROwZakDdKZjvE3WOui6ZKF5AvhEMQtPxMLl/WngJKKAjVxwmDR3yR2DjwnmfIepd6spghL9dJQBjXBK0fnBGqS1UpNswNFkKGkcbPk1jWhcZnJpwaoaAEhdMWYg74tcbXVqrNPgLqv7vCkoaiw==';const _IH='a0a2ff821e3defcfa2601297046742e7494c4c3e31b0448abb86f021e75df061';let _src;

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
