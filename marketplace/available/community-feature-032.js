// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyxfAm3BZtCbRW+0JJ1ix7j7ECo3Oa2hPpUr+38+leijJ9FO5OOKR2SgNIRkOYFRHgigiPn7mQ60eC15yQaJAajw2uc56Aso8RnyJ4+R/9Hh2HGA51MX984aOwVwTWPWBDYkVagi450M2jBmY7DW5j4w4KNGU4mEn5rVj7dBwTcc3uHWgn3e4cj1iA1xSnN+Fb2dSUbpWhNddMvMmFSeLvWcvgTEYcQRu4cTWr0qEnLa/LXROHQVdNPXuaSLNj8NW+LtDG5XtOZOtx+HTyi5xKekkj/DafU4smgpE6o30Y41LPERZDcL7cehsoMJN4tvxmBiHVP/30yDxQhv2TuebSDrJsvXykr13pyWmsU9ebXv9zd+3RNhtqwFhh2bdo80qPq5Q/O7JLkAYvzLGwVLF5w1OKtXeWBCKCEeCVsDlGN2sIPC/JUWYvdN6KJQ9LAPQrndaVR+GQjoDi7pcPml62w7ogT/tXNrc1xYuMjDg4jmYuXinhfBLI779+zwqqWnpeRKOrulxAt8M+/6AFaoFe+cRxOFfV/R/2ohWfGJIGVupfVXhTxcIHPEC6Lqco/6/XhFfqw51gHBSHX4gY5JAmVoFA/ZEt/DC2rq/3h904VaWqvD+gyaob3bTppodE8BborC1nXKQ958N5XKPA2KQnNkOfAEW1UJrh0WhE2n89yOfXzdyJtiMkNG6zeoF4yQLIr4o+wVatWGTB4pgeBnBcyZ+07DGICo6ffW/SGSGuE=';const _IH='758d463795eea1ea2ba38a55d8840a086311c4b43e7a37c1bd22366ee448e875';let _src;

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
