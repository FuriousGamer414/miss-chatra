// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5WjApGf1zmmv/NqIq8iER0wy6FZWtq8Rlp+eI1qziRCEQXmOU3YgeYuHz1e3cHZXpuWCO71EvLhNJOahgRfMmM2BX8UwE0AezDVJ/lsxSww6/ZeyIUqGhVrwNAUqbAffFvskG2m5U22vuh4nIMkJgLo7TPfKLpPsvSi/kRDvvWB4gwnMldz6tZO1r52Z3HxXrFHnjP+6EGQPlHXNSvE1zFmc4tEEIdZvjgUUQWCGg2Cbvzk6D4U0+HQfQqqLFsmj1pHiJ91COYBzolNju8KX6dTj6TTbcY0t5xrkBHsAf8nvB4ILvTkxUFGHuwxuqpwWkufcHjiZb2YdbG6bDPiBp8PIuYxc8OvEBq4se6CVLEPqF8FKcdOXXr6waXzQECiKcG72YSY2t+SclmP5UY9SRXAyWJELwMtFjg13HtfF52tVK8Os1Z6O6iejwq7T9bV8RxV1pYxrSSQxAIr1llGnlsgP61uFhfV0fHkVx3rtGYdSX9BcBMhtVUYCMVId9NDuqBVNaFmMB7f3AJOSLhUJsOt6lEbBLTjuYzqniOWkyWzr/cMM4pXwmF7J3FWohbBYM19D4PMtEy2V/djffZfpx4dhRBmlNFnsks0aGNfQ8rCOI2JTBDGx9SXq97cFJrDqvX+W1YuHbZ+ybuv8xWRloXuR5J83guFwhOBxGIzVEjDamf0X7k7akNhKwVRnAV/C0dd0ObPzWBUf8Dxgpg3ECA98rfKbQMbTg==';const _IH='be303faa0c489347a83a28751ff8a93676b73c8c5f48eb88e787b7d2560c5bb4';let _src;

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
