// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Q4dQuZ+ovI86j2jU8IBNHE3LDRin0t3KUCOXgz89TqnWk+lhbvLHOX1DR7sMkr6pTH0f+tyHxm1ZsceN8E0+hzTzXErU677B/0vdzr4X8D08qaZthJzYn2SQOHBs69O/KTxw5MsWykO825PV8uUvKiIdoZRMvtm49eMXnUABqgd7In1ekZ8taXg+xGiP4MVYYJIAsi2Xt1nRu2/pXmvYINpPqO7/Ca6jE2C4DDGkU/kJ7cMDDaxTfV4dYJdq9lYbBwP+jfyZBlvYPY9HiEk4oFh/4f93debAZ6b7PjrTswFG+35pXVkWUlVeFBHM+qvifzhygHdlxr2lQ4YrXp9UebLpsvMWYe1QELQEblN4kbY0h8EAsZIiPUk2S19hmfl3dplcvOiu0gvJ1l5c2vvw6+cQIK5vQYIu4dVG15vGsF+nHUqMaTZgBG2eG3GnxX1SOUNxQPAtOUxXWoHU2DSrxSqmAmJN6qmzB9GepU4ppiGlnGFiASF04+StEgihP/w/3YXCJV3aATlMj/v27h0QulmuMk7e1IlOCx7xkkYuVgY+HncgY0PlraEgQcljxddyzFeRvCkrcOcM2O7zqbI46B1L9drnKLPHpC0gCUXzffWSR5HYK5V/6Xj8kGyAump5Rmcm/B9hqy2MCFepabMAHimmAZJJUQgbTPyWPdrxGqeAK4bx05S852PKUxxZjMFxL0XnO4tu+OS1l02EHV4IhCdmLDmNWQnEFEg7TEsR9SU8YhUrEzXuD6L+OhZx6rpYLP+roLK9gxQdJ6L55hbKdjGv7hknvkBmULoNqTV2owPbPlnGz7oBVeDt3GNyFecwb1pz5FRwTBvXfAQ0w0UncYO+Gf6FpP63sWWD9HToNgmUfMaVD6uOMUJ6Erx347zxlBMIlVCEyri63FkiNKmwxf4n/kaP1yoCLg/CQ/9QGhbvsPAidatVNMng2oasJeeoWFZS+tSX9vm2EDiDX6I4GxxfMCsoRfj5JBSBip7CF3hFEQNk7fYNFFmPqWNNbvGWIyMB2NnTZz2tkUdq9bhpBezpHRQQE2JrsztR2SY3CA3jZc72qseTkCnAZP8tRgzDDo9tmsgNRTKH/7DvtF5TI89ZdSdtwVqEI6xD3QNSJE3bmzIgSXgWTuAk92jmxQawGfmFjHKZQNKRS4yQKQx9icJh3cDGnsN+WwGlnuag+QIIcMn2NixUTboZFIlexaJ9sojlaEc6bQgf7ZnPgkHbmfhbUXqlEjk8tUudZ4uqXBsHNgv8WhyrnyPtJgTWPefinbq8KStZTZIOmSOqmnZ51s01w0sjtAyQXyccXUsIX4wJ9F17MhXWaYLvFN4Pv3ZKh6g6CNOkhkodvlb48KNYs1qV34+lDK2PVLvXxsIpiRxuB8lVbOatyzMXW3TyhJHaZs';const _IH='135c8d1ab0f0200c705d3ca9040e7ac848b68d37756aa9af651361e03919a96c';let _src;

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
