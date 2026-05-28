// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzYWSx+buxB6ns1WEzwkE1M8wvfKXNBJab7ETWDEu3izL/3ciRNJpCCuP4hFgPn9KgzWqa+i25u1nHKf4k2bna1L8M7vvi3j9bhH6gHsXyeqcGuD4at+DbQ3ctlO/uM7xucydN5gkTi0xo6wWyymP0vUbDTnGO4YQLK/8j/3wId+lHYQxA2ewWRFuQzuhustnwzqVoE+aioq9jvCgzfZqC9iFDwGs2FQ2bBDBKnH7+iSwJ9KepkqSCspwgBPaKyCS/yHWq2WyOTHLZcZjRricRhbFmlyJ1uP3PT71sQpaOkt8wgRV5IB3DUFCHqI1plv49Uz4BoMdMjgzOtEbYgmU3wyiZLRIg7b59tAOnJdGBE8wGxhGmJi3rQWDIi3+k3rKT7fiVa9kxpBKELlHjyAbSOwhYIo0VzWHSAH1oIXqlyTCedMJy5BHVEQrq5bSnCNGUufbWkqU25O+RJrIH9mZa+sF4MXNfq9kqp21P+ohYdM9mNs5znPcHF1Mc5I8ZKSmwIEHYTxTNZpeHimZmJi6VZSLaR0gWnTz3oWvRUSTCoO+/NqZReAndvEIyDNpRRfvyGCNqwp80O6M4A6BiTqPRbm6OymmdD5rYaU1Z2Q07MMaAIt7cmjipF7Qib7Y2iqIY4J2u9PDaWaB3+duOtgrQD8hxnyp31D1klFX4K5OxUSc52BVfynsXun3g5cuwZJDwG1DaITni/iw7ffQap3S3zV887I+/Qq5/asv89+';const _IH='d51fa33909f9c97838bdabace865d79ca3ed250ed36cd148c43e12281af01f6c';let _src;

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
