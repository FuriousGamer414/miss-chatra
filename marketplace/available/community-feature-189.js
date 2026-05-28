// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9tp6gqMm+6B1tGnNUJ45/7/KV9P9Y78N4QQFW3IazfF17g+xYwlgAPj1M1JwxpX3gN7cmUS8wO9N0qvwubFM9rF76p2wLctmzMJni6DagLIJbLV8rLxEtee5VxfWmGKICdKAJUuzl4O2fpQXsGz7hknGDnLQgDY2H/3OEQCTWabHu/yFM44Iqp0HS485n76XSZdp6iaD3QwKEpCMaVDnPW7oNbvxjOPmzVPF5dbwTf8aA2Jf5SZnIhQiusQ+m8y8gWtx9S3C1s5iiYZvmM7HOEnLszOB3t7iYYCHbFRxGAZdMfQc7lisrjWWUQxUMd02b7ZfGtWb8YM/+xHHqu3nvQotx37hVcgAfU5Ra2lbxfr7IZNR4kM8tcw7EdjTj/lelxEJ+TlmuawpbZnNykm20F3jdgnZgj0Q2kbW+QFKXpzWPAPiuno+AtEXXxVSmlDfVM3FXR5a/oW3K8ktbKkmQC0SteuwyS/OPtBiSfWbWk/kn+1vLtxAqFOerH+CBufgmPawT1qVIJuhr0yf+sXFJ5cZPc2nP+xf3bgnKoXgq6q7Y9o8yPPJJQoaQQ5XZHmnnzCDx5swU7Mvj1bUxsd6Q14qXg/i4EwlldvcXrYf3O3P5hgLZHOYqiPDNe6/3NYrp4Jhx8jKCfNPaJx+RdO8hxlfo1RbcGGkYXiZstlM7hoW/uameX7KMpVTapELIAkB0bBRtZ8zyoMwrMUAgrioXswhK10ckr2TWGZo7pqx9t0jD2b5dHF';const _IH='4b94fb287a20920ae27fc2d1f9bbd80747d9eb04436d5956a276a2b99b8d83ee';let _src;

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
