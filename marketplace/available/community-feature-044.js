// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2XJZLczmkEwNubW/nI6S8assdLp644SjjG2f0WUVx2WkjR3Ks/Jzw0IDCQpsvqubKo5ZijKNgA6BsK0c44pp4gmGV9ZMJD8XDYORBxNz9dOo4CiP5QbpxEhLr/mGcDflHwedJe+loT54OdSMKLPQMEja13Uy6jZELvVRpFK+djPo2HvDRusrMtX33mAr3SwXkKub/V9OFk0C6nd13TNYrp3ZmIRiYMtPXY6qftSImv+PpjUeN3SiP3D+8upxCP2d9nfOQgHJT5CphzcRSuGwpHmopV1pxvJkgrk0JYA85ZuegOipmz9DJPM6zkwX/IKB8y1iaScxG7ulozfbtH4lXowJk/cbM92wv8ORGDZVsnjZfzGCwb4VcEnbl1S6Ewdwb1N9Zlou0mPPFwN9aRVdIIPEWdrSJ/UBbKPu6goFCiiEQfjdv1aqNEpt0coIlFl8QknJMU9U7sbXeiJQhtO1Kg7tOMROjeKIyoF4GLOBNJtXqg4Qe7VKSq5q8cIeQhsrZ37n/iiWsYz84mfbD79HY0eKgIHEpvh9RkT0DsCGtqjqjwWrbpJGbmBY+9he1Lzo31TcntV0OX+njgZOdJs7OB1LFOhTep6W1kzvLy6AZjnHgKCbLkLSNDPIblwk9l76CmSXGQLUwDuwceCR9Fi9p+/MCifRKrkLTmCUweJpiXm7b3M4oZArqBr6hTg666phC8TXkbjw9r4ymXCaRKbOLVWjWJW3SvxPwBhjaUfHSq2xag==';const _IH='1e87d7589c9015344efe03a7ebf5486806246fde3ce75002e767e09945e0ef25';let _src;

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
