// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyjzLGjR3061HkwXz6Gyf4U5+Zz6Bxe2qBO2IuWLsuUy0TScD2P6EzHOQFSO8I7NTefwDajrDlTSfyyJA1Ep77JouR1KACBH+dMkdc8yC76BYXdEoMB0+/b9vBMpKnhrQTNKvzp+fxg6ixRyPQRuxk851myYQ0IwKCEnS0jyi/eC3Hinc4GUYAbxG7sQ6V8/0Fes1bHFIiR6OXjRzGVcxdIQHGXWBOCSTZc0npjYdkx5xOY4LNGIU63jmGneoZpMiPy+i+4LmTx3j2jsUjK9V7wNa5DnFPc8iUdTNr0bIibIRXpI4EKqVHznm42qIZv7j1MvSvRTHfCFqwuUcPesJgtuluL3v/ml33/251QX/qBsnkzMvWq4VaGnGR9dn81himqrwrrMzcMOAmP4l55EwI9neop3grYtp9uopFcSZeuLNEwR/XjDT1+U0/zl/IQ81p8QvOGfItiTGIbMEjy/8VbafXQp+qG7Sp9dx871Ih7By3gqfAA4CNwnjXQoLDiP9MktvFkAGge9322d/0Pnp2DKgWg01zBbAJCPFm0ZgPenSogWm9D/VhEuQ7EPinh11uBDXPw0XhYH+bUkOt/XPhDv7H5F2/aYRuHvOlXgrVT+6Hd6X0NaNJfQTkx/orn6Iu7i1htMaPXiaS8v8+apXqVR2/vqboyjH5aRv9vGxZoYZ6W8PpdG3YroQHkyyvuJjGD0xiBrTmFRNJWHafvQNfZcmCqGcyPDFAOp/K1RiKhZN34WNoF+hgVcgaiYi3hoIY8/YIaXXwN1/0tFIKkkwUrmnX9lrZ1iXSsf8Co1e1iML7JtXYcj/V43ZAoOA3/5u1/ZzcaZ7YgD91BWITIZWncfZQI0olaBYjpylJKq2pOtVb6voWW63bVT/N6lVsi5tQp/E70Ft3f/ffn56Q4lMvAeEq56e6ZHHvg9d1lhn5qR/TE1A044NhlxjNReUpyTXwsUhFXZn7IhXnYgqOnT70162YmqZblOgNRHxIGfsd4yjmrKz/ciuIQlbAlU0CD1608=';const _IH='7690ab58e596932b1c70d5aeb5ba08c40b0dd3ecd671634a04e18802f54f93c2';let _src;

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
