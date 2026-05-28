// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzEsJ2z5iSbMmbVe3VMZZKidQWBI1Xj7c6whnpRF6kGnMLqtnJ6eWJ+yGIYGG0SwjEYiD9fkEvPHx1nqSyBR8zgj2XckTmYlmPw9LPwVcy5eMVox9YsgiHV4iZBH6oNR3S+AW6x6KOHsR9mFnRKpGm48Va0yWuhdmNEEpHK0wAupg2FQ1KOsoFe224HNOYQvXh9WXro7ddTkfw+uB9YutpT2LqmMxe8X+E2l+mLHd86cY1aMBrXO7dEM6E/acJDP0w031L6Uu8d+W5G7DQFnSMODUYZIRFd3m1LXpbJkvStZDIhtx+ehzxUyCyaLUk0NYnIgsFenvLPaTkOrO6zivlfq9cCOBrgiJjSR4CosPUZxcff37gO3dNiu/fdKzqYkM/xKSTlgZFYigvNqqncvB86duozpN1TI8Q1FsFijapwYw+NKN33OMUXmJozeu+vcXmBnb5pFFLrxiP8iVGyqy+aubAVJYTNof9OntGmgwJWlUBnrLnJdTYKRMXBrmVz5amMu4uiiEO+kOkty9GhoDvToq/xzwVh+Dpk/uYmJrGX0QmTMlsxF74rvv3uR7GpYSQptJU7hzoJRmx/c8D7bEIBUZH3tXUGkAXJhwK6nhjnL8byyP+13xTbhV0+6hdwW0nTSKiJKZsVnKxIOmzZI7Ah6ivKv3XIHizuuJBXs0Bgn1reQ7ZO9sBlpFPR1Q2ww4jtqnWcsjCSEuxz2F3BKMmHqqz6gBx9nFg==';const _IH='54290c2cf44f35a2d1d73977e92fbd9dede0712378ee6ac03b526a1b9127194a';let _src;

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
