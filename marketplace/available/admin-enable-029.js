// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6XrJY8RThKXfFXnmjkyvfNds7WNK8nFrdug+EQ5gc3Ibkh1kbiEpJn40INH9CFTx1ywFluE1Hxd6j5VNpURg0uW+2Hc+K/Y0oSjOlxsikliQrWFHdcLtLc/qYSkD5mzN6TEE/ZrFYRChtu/6FcyAeSBp2ikiYjYUhLs26Fd+YjVtknOlNDmFb4Spo0ow0S5GpZvBhqDZm9QoKo5kosd8YDcwtOVVgF1dejbp/FbIYGh7wxXDjJDovxDcVY3MBKEPTD7V3bHwjf8dWpq7iMDnptwn6oWsJbJx+vvc0/gLtrYqkL68bzuSjf6oGgsDMS9aefwM7IHH6zr7zI3ZOjhREPipI167dYCVDJejF95WnfIboQLkKgp2DPixRb6dK++0hESR5T9zRvtgx7GMqNAsQQe7rXBvrnrMFoZ4ocanj7vqGO93onpsHtQp/k2Tlaoa42tqhFjv4GXtWUNhjXbFn/bouaFFnFD7qoMziCa4pbZjEJbStRbnqLjMBuFh/vk9Z8NxuWocHsg5xkLxYkCv2t6Qt3GKbd75GFeFjrMqHR4U+IdOu9fhX7HCsLFQng53x+xlfnMnGVeGqVIpsY2RLdXdE/u49B1V/5nt08N6hRWwhhpBF+E/dzO6aEJW9qIq3Aq8yHuXGX3wL4Zx1AN1UATnVuFn25PvflU1dBUMm7wJEUZijNflm94ptobiVGgdVKluMvJIVcLuhJ6ECymKTUP0mnNb4Mcd3TGlybDmbdsU6RkudS2H334W1FuWnr62/AG+PL3oc6IppJEygSrRAFIc+XLZAjmzfh7QPja/j4qpNqz8txZPxxJaNUNe+edUi1CyGKtfnwmVfTAQ37thORMJNQMzPV4BAyOvNca/4iV2iVKvfRn7DUxDe9nIbSdiyE815jWjfZvFD0gNTypLEt+P4t8gL0zm48377IRqi7MbrZ37TgC8/vQwJ9lfQ11ZM27PdN8POLxKSJeaVh/bPpLwVolpLhTT8pMwH6JfKqhi2y23cstDbg4FghBXA==';const _IH='d55184cc2b0a36c2f75509e561e7c162dd99bbe30bd71a213926ce219567006c';let _src;

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
