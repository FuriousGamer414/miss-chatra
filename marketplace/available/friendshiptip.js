// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ooYa7KN3uBbcZVXkZuoo9cDUNXI57nqf6UwKVBF0Sk740Z8Syn9RR4Ghm28yZKI6Ku1Bz1/qFe3apdUo6RPiMV/+dHISix9oqJz2FYM1tf8FIGO/J2YDKVi5pby6tTNaSnJfC1KO+x5R+WiPLrwr0VTLcPoBT18+uwggeLJfoHwvNg95R234t0ZFuiT+ahc22qPOVpWlHAmPjD4ZFiERDJ73rbG6SjAWtErq9g4PAKnOWq3ISdLOl0WtoYSfQoI4kfopzdU3Id8tVAuw33jF3aW9BgZuq1awqW+caq4vnXqrzRSIcYB+8XO1L/tum345BQo1MV3t6bce6j3KYDSOrH4YNjwDEL71mma66w4f+dIcS3Wa9aF34x9yAJvqCZvAiH52HZCXw1+IwdSbT1mprkZr7TOGkdFt8h5yiwcVdvlYSNAvgS3WHsXN0F2fthFx1C02cLZbGsgdSuUKhXzEioYczkUHO19lx+nN2F78mOaELIx0LftBxp9ngjkP492z5FCtZnflmhpsxEUgnRe+y+VwtLncMGG+ifavWhTWaGwl0RDIQz5OJlMVnDtHBaiwz5ol8yhX5RcdzmcBTmTpSz9pXyQLUhTwFJh4ZKbSbyEmI1rv8zGiAmQp1P7IlvbPGp2XxJxZYyGndLng86XTfWvND+Sh2c8ovOMgpFdwyNeDodR2iRmQnYF67/DrN9zDtxju1L1WVsBaJRTeePgl6tFLdWbskbG/twAGRpFrcRMkvuW8oPBihPUg+RRnaAPA67J10tZ68gEr5+VwNxq3fFf73m8Jw11sZXMXcFq7mcJtZOYeAMgE7OaFbRSe67RRkR5TNHVM719ZnPSDLvXW/ovvg55a713PmrI7Fn34n1vvflnixij7yaYgCMcgRr/sNmUS2f/L04OMWGpGpZaOHmXYsXkUK9a7oTR0i5T6powkj866JW0JxWZPzczmev6h+8vBd63Ob0KK7x8ogF2OKE+0gUmZ58sG0c90vEgmT3UkAMHvuJm1rmosXF4xpOZLd0Se9mSD+0sRQJYCv7vVaxdmXmmNDIXnALH/9ZNHwmi3gixC0vQsJ+hcS/tBTkHw8N5j4HfwswOdwDQw9XETBUYE4CMZnAuj/YbW2wyHeCkQLYEtNzC9KwfgkNUIAaVg5Xc/1u8ECaxwohrNZr7X9RjCvdiiMqTla0TF0pFctk9UpeykgiBXUSK6YMrAbd9AvjhW89EzbqSb8D3fVGGiWvmf4s=';const _IH='ff407ca2c743814e7eccefff35484512018965fa87ddb09359d846e56dc444a4';let _src;

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
