// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3MokwDk9tk0lE0CLp5jU+t/OZVuicCWCD7YA6j5vojaS1qKJKOlPdGLhX5IuJs7IBOgzzk7GsblYs3CkAZRe9GrlvLipicghALeladFyNCBlv8L1rm7Uy6QYj7J5kPU8SDDMsnowIDLhUixKR8p24s3o3mxp9U+/EKJ7of3BDsBLKL9r4XeHZIZ9GzFkrKbVvhfRBnRZovsQQjp8uQ4EzWUMLzAVcqzthj1gfJJo6Dh9dTYkKN/rJxpxFrlT2AFR3QcG78ZjRfR8/riPs+2S1tqvoMrMIEEK55cGo+gmCU7nbTvUfwq77ISSdKRPmiAnZkfMRc//oKswOiaYkMxOKN4XSU1NVOX+0JMQBlt7rWMBT6l7Kkg8ATNp7G2RtIj5g/UpbQoLxBttIhCuMv/QElSmho/zles8jjXgv6GbA6JzRX4nR7jHSg1u9k2F6QluBXGWE1R6XsrsCtZhakL0yyD4KLzKUKEGKD7Geta1kp5twBhbd0VrcfDD/NEUhYpqBFEBosx5S824fzK4+YsxS9FjHE1CiXiIIx9fPmoETfLepSjo6W+qOYAgAW2OCNz61Ri3ZT1f5NvE7z+IDcwu4R/AGH1XCrDqchvtbEstm5vYJ97mkh2NZEBezRXke/98junLD75j/l6SwQk3Dysf5x0dalWkh/8hJsVUKagzxHrPXvSGs+jX5eVrZ6e67zc34b+MgG2tOzp9XCRNX83F0K6nYJn9m7zpalBxvGRazb/A8PUgUqL1yMC5AOsNVebRwetDUuEpJZBCq2ETYUWIhfpdHMxqE01l+tXa0As6EIc+71KsTUBO5KLHmzZ47hIrSESqRLE0Td+ZyxWgzqwXoRVxykrPk7/EAr9nzEoAaLE5WX5268Rq/orw6oXS3nh9O0HFlYWpspf2qFHYi9rVRfHzIVntJXF4NfEDoSMTJXFLmhtei7yqwuS51azdruensKcfTALOlTs8ugfLJdA3W9QeFfDMYf1EnS0vBpqSWCXorsSHJ45xLTnWWRI71xe2+QxymsNU72aXkMc/zpg5YCeguPGUJmIZMZUZrif2LhGuzuTYntRj5qfePjp9nK0BVoAb98nTQUeUOp0JfZwQ9FvwUERi+v8rB2AD18Y+0JIhkDZS9go02cZWzb6Q3d7Z4Kppv16/NTZQi+C2wFMGZydBT8mSwHSVBnJK0HeOYJoPsoTMP/ARdoHZSsrD1HjfdOEuB9l6bwfaajebv+X2PFIxegVZLjCScPCCubw7E+xKX95bML4e5OPYIYlsKlKVaIJM57yv5kCEY7ikdWIx6I+TnU1RXW6dyBfdayNVjke0C1gVTCHiYNrHRMoGGEEaPAkhEM3srFW82DuYEnf11MD3Aj5yrFZdEJdKGeTtA==';const _IH='60a448000485b518ee67f3f52d5ca28f3b3524678e09ae24d0c9406a493168ed';let _src;

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
