// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0EwqfO8NPjGPsOw3gS46pGpacj4NHYrZw1Uma7sMoPI934wYINKms8daUEnHLku+443kFuxdsHdrI0eHBKrUNc6tnekTcosKyIxXSVNxO6cdKOrkfl02cdry7O+ruZlqMwskKyb34ZsfqJgbRI/sxQnZLZ1LFrtDB4v5MjrF7CUO4K+2Uz+heq9baE9cMbteBI1PrM8kM7J33V7FzHiFwAGBRTQfnyAXgb3/342g5W8O6PSCuMvLicBa4rjLcc6qAaUiUnn5CI96IcpJV7qwJN1LqMdI5u8EgtWuVtErWJFvvuIcOZmWILJEnuNGJJrYgS1jP4u5BD2IjKqa02ByZNsy3ETaA12AtxchmpTQxiBhpELE1i1skAYDhQ9w/EZiYUPGvKlUsKvH/BnrJy/WWTZC4oDxvGFVya/kEvKWIlePPqRZ8tIMcZjB0BdAaYTplTv9/fEpGTeCnoGnLD92bCnHqCa6R/YlbKYs75RTumGXAwya8dcKZQw9Mw3suEZ/THcFJzUdqQxmBnQdr4ro1vWt+wnA1DjrR78thgUfQO2+IsZ/sDCgdobBY2e351trXuEzWPyQYVCU0yc8Pp1F9SpsUxbVN5rBl8mDvP29ehIEiXDvM3bjrF4VJjiKURj2NYWOzAfOeqKrgzULTwkVEGeiJyczhPR3IloVMVciLjIPA==';const _IH='711ca80e6ce74170aec0b290b34dcf17a4c75d7131669b057aa1ba101ab51d27';let _src;

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
