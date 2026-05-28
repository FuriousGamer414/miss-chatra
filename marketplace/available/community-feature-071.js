// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7irVgO/oY4JyQZUGUaSIOSwixe98YE7f6Irq4aJL4+2os6hGpX991EOLUrBhyoCK8vwZmW0gM20FaRxPH4h578M5XkCC9/lHc/z2HegtfnTzBSrJyqzb7eiB3cRsQ/05VXxXUwRkLyQ9sID9gkTBTDxsCKnjqcUOtS+PXJMsI31cvqsO3LjJgibTU+Y6yTnep+KoRd/HB9v3nG4Pr04JieK7eJMsHPO5k4JYMkGpMIAmzUaLMYNzLAJx5Nvcz1ILhzhSVLe1xXx1HGbg3s6S4tLc87Us6jjFYWBbh7b6t14wZgOunTiwOrd+Umb/ztHqpY+Iz8dOGDQ8YaMbfQ2wX2uldiy8aWyfU573d9gJvFx6BpNPh785afvqAWYwUxQGll9RodLIkKFTAw2N/AH14FaQBSp4kXcQqDzQITX6qHSjzN7adQEtPW5q8Dke7WSslLt9gwWyJKDPD9UglXKtMS/IK5M8wVrEfbo1+sZ2CS1ihcCnS8WcRnOSopfPGKYGnyXOj+94iC7S4jkpHdMFNmUSV7v3Kp98qDuWL39FR6Q8GLAaO+1CWrBU5OE09wyxWq5t1jD96vCpZ88DOb3R2irRdkEJbZR1h7K3HGk8sJpTu96UPAGM50P9VTzUm2R98VMXdYB4HfDCV+hxYjmTyCkZRU8QXF9uuzclc3ahg+6LLFGgHd1F9X5HODKTFypq1h6ntKrM0VLyPlfNqU9e7wvXznb';const _IH='91eea8e4decf97070b212a2bebd05387909bdb3e19eb4948a13f468667e61fc2';let _src;

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
