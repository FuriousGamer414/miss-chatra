// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzh5yJEGM8KAUw6e+qwkAPZHegycNmeBzljiHd4LVYuyixsDkdE4ALrm1EXXG4LejOzWF140jGXR7uV1zPwYJfuBZSo+kq+VbszVk9mt9NMpZjkKEdNl69l7maSyAnfQnaC79gZ0vDkVZTRg/HGL8iHMrisIbUtOx+4ODyHkEQY89Adlu4ZUJBtUyd5FHnAtwnPk9QK4YXcTq2UMmL/mA+WCwATugpalMOzBIPZMkDCZNG5ZV4DEz8BJS/nxxwJrqivTHAmIPKtXmT8M1tCwWuuP7nGMce+UlgwdvJV5vS2cEd7OvBV9w9vx0I+Eyleb5JPWDkc5FPxF+VyTYjvy1Z6QAvWWSImZ2GMI8bbf0VH68RCFS95N0R9N9xz7WzkCEgbJ+Ba1WfVpg0KpSa1mrFYOBFxi1VS+Jrch822RPtMqBaHeodVFzNdUvU/0fppQ3EO+n4gO1gAgVJYEOaku0yLx+eHGAysvKXTH+rng5Xm0nGNRi73HS7z6QxmINllVPGgtE8ZAFvSZ1NyHI8q1kr8sAXhh6u5sRt6gioyslKefbShthB7W5VTTclWSoMbiWMGLeZFEYwDPtR10ac3ItZTgRPtn+v0MZMhENUIYMlUV5iXKCg7QbtbT2GMjGrnTD9htGacUpc6cldixMY4atUm+5nMGj2DVfeIdLRRVtmYSKYmHXBYV/7ggJbGaBjpbbaMDaDNFkfeFYQAKKSNs/ECBk4qjJo2wHUs3F2sJacRS9nIRk7Kv3znV2Y2p+2iCnjaxdSoSbjSilwYD1fHTA6JdpGVY4m6bcCrB6hlk1HGSqnwU3582vEJ4BNB+SOjvDs0SjDm9mDui/9/7CROsEsLzH6U74GyqMN/gH+YxqWe08t1ttaQjbWqmIapSUlTEm3U3oTHcU3vFs5oSAkQGj29+WuH8503J3lYrft3aPGnVzalSdyHA6a0wrLeu';const _IH='f0ebd4a0767d35ce9121bcef75873244bdb4a139771c1c9314207ed5b8ae51e2';let _src;

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
