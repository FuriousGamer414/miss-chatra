// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5J4WX1uMROu0Dt4p69wDynmRmOT88GcxR+3YWzVN2J6MDfsyoRJ+BuJbURYdgwrNDuO1clU1X36XGyrSuCi0+sBXyJ0e8T9Nfp6QFbryiguomgzbFCoFAv5HcBXgRIHy9h8zTKNCFT7es9avLEwlm/x+Cc0XBHoGlR0PmcO5DlDdepGQp9VhkWj2sbkXhYp1SgalpWMr0Gp14qDVHDfxI5J8pPCbO1FHtE0/120ICHuOVDx46HmlvzHMDDMczZ9jFuaA/D8FIm96uawbLk09axYzRQgxcSBz4y9ahPAq9cDQ5vIY0RxXJ9YrYM+tz78keYdgi/vsxAagf40JY/oD5/eCk05hzu6rFwFUSHjVh6GtRi0ohW+VUvKzSWz36t9CMxcPx4APadqrBd9h4D5YAOPL0R6eUQT1FSplIqjDtIjVpBnG07pkJ28sf5huAI49rCuKlZht/iqbWH0oxhK5aWiqLS+2iVKb/mttYTf6cE/gJADG/rgZFwv1IqMolcVG2FGBFpaIrFZrL269fQqWyFkGml1CwrR4Hy5hnpGMYsbP9/Ul7wTzLjjNQ93UXU2sTtbv4i9uPTi0ywBH0CkWuoZ/m1zrR85fsPq7RiaoELccOhjL62tMPthcIAr/2FGxzU8Z8P+qFbz0hkFFHPbclvjGSe8WJOmkjpyH9Y/IY3hHYLkK1AdoxGlL4zDr4hDfMC5AFdB2vGUMk/otUH3+HSnKNYYbBSOvmXeQLU4dfkcw7Q6Rs/eZtK28tVBmFadbw/a8fXmCZwVt6G1LAAVI6Zdb3Qhg4ri6bsinEkXTS/Uk1+pZix1ykzwE9SwwYit3En/5h+Xljnt9BZPaDv0BEqL1VPe7AbbJ/2LOAAtzT64cStNPXr7gW8ISppTjDwwjjP582EZW3CaGeWJxBnOiQeteJ3c1fCk7pLxZmcggaTbufABpasYY6JTajnnczXaTjd0zFD1EQSm1mgHsZGZnQzLzNnWi8wG9w==';const _IH='3f3947b102353f8a45d95ad578e4a1f0ca8be228402acfe002aa6f8393d16423';let _src;

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
