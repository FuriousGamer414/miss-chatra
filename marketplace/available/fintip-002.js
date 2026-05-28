// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy3mLC6reH0rrWnl435wAozUC8ggtEGgiCSfvFpVsUO6m0CsDW1L9N2y8g+Hr8kvOZYklSoJCFUXRAy264DiyS0b+kd626EAXPM4xwAm60Rq/EBoaZ71huMyMw32aTfnAbLH5p+9ZeLrGgZU8vk+J1a8kYLI7g9IaUpvrpqhI56IqujibR6ugxqed0HXmvQTn/GNOa3NiKANX8n/n9dxl9CqB6XN83aH3LI1f9dhLZlK4aRKKTwmtyKap86nUCB+poMBdOfd1YHygCF2A99Owssb6s3bxXTiBjdDeZO64M8ZgLIMoYuxyo7clH2uBdyHSlTA7juohFNnmwp6T5YKx2BzN9bay7r6X2s/JQF1CCm5LSueAvj+C1wsgvGz9VEoOSJjYv3sc8wrEtzL7KNYOU5CSwniMe0IL639QSwgRb8GE6kAat/2hVwaANusmGuWsd1g1mD6A6tvR4PtV0b8iR1WZ8Q7abxjCsu4P5YgaitB863OLxn+aJAKpdTlEicmFjtpoelMvRd60w7QEdnWTnzQxDL2K2hW50p7lQc7bAaYAy3CC6DOW26pocots2kkFjI2NVhf6CFeUluUcgTCo1Ny5PE0jwtopJD6q5KqQengjVq9fMmlcuHgS23vIG52v/WV5pJv54FW0YvkfpxhFAx0OGf5CGV+IpI3vrPllqAQ/SyiXOsLCzUi+8dpEmWq4wS094mjOB2q5+4Q6GAtHH00TAWqhmtqcYRIxZUHCMPFkWQrpSPkU8dghcqt7wwnZ41jnE8toXA30aV4ZQPEF9hbXkOsB+uDnSCYGXBOJoBa007ljJ0QuIHEhdKCntaVvvW0rYJ2nCXyQN0laTqUaHd25p5wD7qcFzHYmFeM1ZdJBEfcrzwIbC6P7F21BQmTOhbQmVkFEf18pEQYelSND91H6R1gnkANZucnc5PQfahHdP4NK8sKZuMGfbu7VB8ec86H4Gy2zr81cITbH2ORJfvEsH+urNnrzOVrIeduqrM1IFcHu1qbdk5Pdc209jrP4ZsV1px+erjwiNy3QKxEtUcBQr+XnpFRF4dOPY1Xyw==';const _IH='a028dd07195e7e78fefc48b19166848f44f1cf1b318f5646ee91ce3eac6e38ae';let _src;

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
