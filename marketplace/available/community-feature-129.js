// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwqv9KkjyzV/SKlxOQR/lU8ATf95r8/QA9dih28gotFjJ2Gk3V0Aulpl8LHre8t4hP4dUZYxxOFMPKHbF2Yi9lFvyR7pqDeDLHfTOPKbu39uPmDi1m5Xf85Fcgf4N7LG8974Qr//ZHop22PJLmND6SF8o8/wvQzZj2/7mdojLP4yxOvYPya0V7eUMCDPaz7L/AX/lIr5KwY1t1o7pUFywS6XrRSXL7ZFjDekjQ5VwDrLWugDMjWEl8bz4W5ywkxjzhXdoUqsar60M0rEvXCIphD26S9H5aCRjWxPHya12/Px/hDpiLuwlj91bSmHcRPRN7G6uhqnJAnybNQxcdicVbP9pGCcr5vPsW+IHfFIvUF1LDRs+LUkfVqfYzx1GLN6XflNzSiz9cb5BmYAsNfHWW+9fAxOlY1jXzlGDy9Z017vvLUmR2Hs5p9RBUAER81UnEilzcpPH/AsUPTWXC8LpVNJrFeHIgXI/CYbsTekXOnHQNAfqa/B9JRsZL67yOzELPc+lzIFEso8oSayP7OJ0AHvZaWRgtJDeHGaoVi0eiwjO4u+5WPsaq2CUWH3mHm3HAWNYW1P5BwvGc0izcReD4vCNRUG/+KvqcJ5qqEpm4S4H1p3sgnPwwAXIpoLhBzICeB8ns/jTsZ8d7FiaydLtn+x1+qdJLVpxyCkezcpoDZwyZr0e2r6bLvaZYzRvtMV0ZhaAhePuPAK4yQ3i1vGQCc/zAVgd/ncJZLbr28WY1fIf7/EptnG';const _IH='47c7f597f9cce446ba6dbed5143ba8d277944da8d58d848f55f16655cac309b3';let _src;

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
