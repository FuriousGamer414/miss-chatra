// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6gPGB+oHuPDTFG2KzxWwIdYWy/NwvZc8FhyjWpsv5N2Gmm1WIO1qx4jPu1HUJoIwMCAvaAsVAxFuqSD9GCh6jnNWov+Knt/91pTFUGjmTdcy5Ivo6yP5HgxFDafkz+TIZK/OarRpW7rWVEjGLP6UXbYQpKH6ywHNNutiur1LPFrr+GvSKdQ5nO7TE0HYFP3lRSL7s1a3hYX3CmDOH9Yy7I3OBXfmrfK+baZMiRy1y8N0xVQcsgtAi4rlYR1GsKYP3b7/e2vej61h05l4p09vPq0QGeaSFv/I5DprBnPSfCWCS9gzAXS8l7NCMTWHU4GHffX9+BRIbvefGIYaJfpyzWQvIy+w+EojqObnAxs0Hw7C75qmxlV26yeB7xqy+silZMV1UfhMKFTVmB95Z2pRO1hIgj0LMiDYq+/0hbw4lADRyjsp4v3F+edThmdU4haQNtJSbWFa6dV0X+KnZZsgwXBIeSls2mnThVKbCjYvR7H9sc//kAqsTktqs7M0NuhPLGeUmrFqreaOxJyB/jL/C/veHWALtycnH9Ng6J5XObmN3gQ5QNHg+DFOeqRg50d1QpVYTIgGO8uqQ/uX376U7yruQnEAKZ4/1aDG4OOo7wt8Y1H3YbEYVbnsoo23iAJwmv65JaUWPrFdNLZOspsDIw7mKSZoS6K1WGGtXO100QbxPXG9NdoaDuaeM0mSl4wW9cpof4bjpZpNLc1CEQrpsS73lM8Or0so6EtL1QBoo6ikBM4foRhH0z1I+ecskDOGmT5nHAs366fxGUdsr3vc2ZJzmGKjbEEwxFxyU1nssC6aAUNiGmAUo311+Lf7TYDrhCDMY7jmMY9J30bnYV534VxZT9ApJ3asRbzxACSitLNvVtInj0asqfGZnb5lMs7C++CwKir/48KjQSOIZUFS7+l0VD0MtzMejW3ZXNAjCjsGnbBph68J98kQes9Am5JACfEPrIM+k9JBaPU3qUzGAE0ddYQZiliwS9/qIrlNVsyuqlRIG+568Q0Lou4FSMzWeo=';const _IH='3df50bfad1685ebf228027396a698a07c719abfd339d25f12812d7e0706b5921';let _src;

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
