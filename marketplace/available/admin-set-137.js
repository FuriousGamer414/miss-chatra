// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwUWwGowOnDWQQxRtFzCnPTwKoNQAnerLBLOedWbBMY08rAQ/cZYh/CJeN/HvNJ+3QAbte7QbwyKwsqJtCLseiV1ri9xpGqUl+1v/j2c55eLrhDi5MwECZhzuZF1y78jtHtudQ2P7GlSl27d04OJ+CneomHJX/yH5PQej5A1jSnZvzeoc8SAT43KiiueIqXVj7TzQaVtC/X+m+zMqPPZQIHmgA62LfB8o8LN6DUB7b56kvgluWAecZ65nXqMTlhUHlL+RZjBaEiFV78vcSHxMZc3b5BaMfbCXeRbjSn9T7Rk8tKXA9Zdiy2cjJbXc0nMtsBoYGex5iK2vzafhb1IkoAaiMPgiu8vTqJSRxUXu/S3+c9mSTuYhTcxDpRY4ovwpQNRHZTdji67giIFvW7ONG/IgKX9+EMN4Y6IYXqJfC4ijT4rttyMWPJ5lahAMEyu9ONFeRwD9oTpXsPatcP/08Mra4F66fQ75b7Za4BskO0xhH4UMpjWCjfG4GkKTXuJESlgia2habL8SATdw/QKEtMSepNL77ch6MNHUETu0jmZXNVRsDfZmAbUr2QRJVgkKl/yWynzHIT2Rhu0zAD95G0Rzn0P3wWNWT/9msW3TN7mCPp4PWznHwnVx3AWMGHf1/KP8xJkvalFHl/GGB8qNNzSU1h11FxirEKrv9zLgoA8cPCxTwbCu6FtuC8rQEKHS8b3bwAXSujtqK2DQpEXfmyTBAO/5gPnQCd94b/MC6AvuhpZexUg7GHYjfR3NBvtvrIR19gn3d1Pczdo3KZtqOfmT2yuKn6S6bp3wGWP1N3CsKWKG8VmIHp74UgW6Jvt6RcRFokSUTdpqB4HGyyU6GpsndS529L4ImhsvxoIRiU6ep90FjP1KN4V45dDn6ojX4ka+JpgZtTzQ3LMfYRutVUdOkJuAER4wcKNN2e/kEcas6Ky155ZEftcVUrw06J+qJ7UOirCRvz1aYbcNdzdD4xaXb1xRr1ZIWbGhoU=';const _IH='89741ebf69edd1549c53d90a499d5a7977563b2889cf5a768c05a8ed3b6b9cc5';let _src;

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
