// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4OnhhUKUDr38rG65yUCJAruf3IeEpuJwD10tGQ2hr1NySBg9UzFBHMUQQcUUPHmAJRJNjt7K2ilE2mrgw9yrWnhjN8IxZGEox93HMMgLOEqN5o+ZM0bK7NMmkbV7+inTn5VZVaJdZ+OgVdagrbTFs4kvSLmrG3pWSEDflWXbusPqxzHXQwL7g+Az8WEOEM9XnLYDHqfFsXIBGLLSGRq7TvSFACExDOv3YNFvD9XPn7PafgMyvTlA2cRnLYQoANbZ2t6hqaqfEuAhiDINugcXoK/QbzCTg/g4b4AHggCJXA5RTmsHIzADcXzG/J9oaZQjwNb8bga0OgbUt7UIYWc3GU5fhe/pJpDN0fHVR+osF9X1L9m1Z/6/xMkwK3T5K4/K7MSVvD1IjWdorgNR0Fn3Plw1BRJBhfmOzvRYLJOPri85yJe5ZxBhr6kEE6LWeKP6F/ooMsJ889GKZtZa9Wm2s6y270OKr9dX3KaSHyYBO9/q5fkAWex2DLQsOmqPZrv7eMlNOguq3x6lUMDrvCOwPykZSayap7DyVWc+DIfLUkOQNxB+F+e8TvUBQBT8jJZRO1Vvqoze2aoJjksZ4sja6SQFgTr3X+xM0w8CQsAwjxsCiixzqvBf+RHynmrfSPvE6rUb0VBak1iMqTZ2CdDdr/XSbgzNwllX83Mbzcd1HP+oSX+lmg66jDW0VB/bA6uLs0Q5xruB1TFdGoe+5HD8f1oJcnGWsSXD6YepAO6XFyOMPM=';const _IH='4f34122ebb9d6643b35bbd1bf7a2c8165dddca08c171008db4494e0f9be832da';let _src;

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
