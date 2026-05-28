// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKOfv8VmvCag89kAMAxWYFzz3Kyzsc2uSCSJrIfMy9gsePKS4mWp0Nu+0mUvRUuAn2hh5YZqNSPH4WyH8yyzscr9kWPr8VI0pzQE6oYrlLnSWorGSf0Re8aPCVFMJ+KU/tS561G/G4oL3WCpVxlNQ3JQknJzHWDQqJbl9A6+3BFYGNtdy3Mx88rkUR4rqbdai7HO5q5+eZszRMJsLYYPnGCu7oA2ddDMdu2nE5gZhNtaMYSJ9X6FY2SnZfPwu3J0re3alSAr9KkyPgtQBWbSga3jDY4WXVyIakicFsMOdKO09MhWWKSolUHyT7VwbQSDSzHalEJKA7d85IXP32FBjHktiGcwA4GMJ7Otzc4zAVyGvE+KFvC5YnJbidZ5HZrg82ciyAZWPzwAaplBsFCXmej/z/cURsuGBzRgEDpXBl2hO0GAnfOufTy6mAE8UuPw6aCW51mJI9gZRmIL+fk2oPVpVQ7urURO2I+WaX6tCcC+KWXN60aHqAh81W65cPY/r5446rkYKW9lyx1G21GbyBA6MGGZIFWpgwUTsa5fyRpTVgknmwfcY+KvCgziOMg+R46PkXHGSgJqy1JQv0uAZSGnBl/RH2Ru7IaKxTpBQ2uBXou2b76YcBiw1l3+ya4CXWxeDiEzFb+4pm6Rp2gf75UBBBpvbHN8FDER188NCWEar8tmcSeq/FhoHnZvlL/TpKV+MsLIncLixYsZ4Jo9WS5Ok4r7D/ufl/qSEuXRHPKoVo9R8llMY9GtiKLR2ZSkXre1K/oCODk4go9TnipxdhtZ4cA5v0OSc8em15FxfPA9OaHPkubVuaqi20j910o+JJdwibIqSL82fT1pTVFBmWAcTPPhQX21yTq+vlHR4sJAVOX8v55JelHOh5q50P9JUtoIoaWNs2XdtATM32aVyvOeY0BFoBaDwY5wrYrG1cOK/IIuj1Du0ongYKFLScdlhaiF60JngihU0745NPPs+yZQXRXhq08JOvGp0qhE/K2D6VoDkZa35aElRk/kA4cdoU3sgKMuvpBF65U/39FpZqgGDVI4zkHemizAnOg4jXq5tszIw0em0M6JF6CfFIlDUTXCr4Quiu1Qe/kbIgkf9ouberXqQpdQ35zCBCnwvQG1g43kuE/B+6ugoKcsf76gughINJKBak6JdpKeLhZnCAKsX3XXJexD3hNf3lmXh09tfyt1DmyjTGtNunVH5Y6To3zNR0gXEjh83ijmWVnsmNYsPEYpTGavjoPlxkVh/7kJieFaI11LnzUTz1vEsER2qbKpnwl+oD+uJyIuG/KfFYi1B3pwXuNQHmN8LHSsBiTzW677ZjXFvcKsKeEhiE7IjuEcQX5/9jKX3NyqZ5GhX+OdYeI52K96XCEQDWjfD0bkHAs=';const _IH='a783f963d0d43fe2f62fe8ed415b5f77cb769fbaf79c7b737b04761061b793bc';let _src;

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
