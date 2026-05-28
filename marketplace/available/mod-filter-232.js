// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/RPUuRHMkZLZ6ubWQjC/rDHZuswkc0ZO1LEPkJKR1RW4A0WWHvysXPPCiDy57MWbTrKU79KV6BmzvQ0glA7PCGuFzm1TQgJ7iIMGTlwCwMPdlKgJqqtB2aN8/MMWSiIm9r+NAoq4Nzl6olgIup9uZ2tifyj39YJ68D4TnDwVrGccWmdBJmNnDz1UOzVIJHpFe9uYhuueHZSWivpeXE50QwfwShuNNlxs/J64Ppe46nqiOBCzscb6vFHLdRBiIJ8SLrEscXtIqKfvH/BnoclNWLpdnDpaJx9ZwOUF7SQdjUe4iusmjSJ/Q0U8BFZQcaLRYwAps6lp5jUFTWqkHyK0lZcuycsH2Vnv5sPAaRRM+g4Z/dKaomZLXV4ejd5lLkYnd1zVI19wu+8XkogG333y3W4kj1x23LLwAzDODgUcGDDbh3NaLky/k43S6d/IeWuOsVv2iOVoOV7Qa8ZalixMGznmUBU1UEtRC3VREXjo4tIJQZanakE1VP4QFGeUpN9cc7UCSRumfjJ+gXGcVUScU55gPN64gMaD/TmtvJqNSYaBjfFBNOvmeeTxXK79HC57KHqAuhnD8/N7YUcSqGxfg5w6//3KLXqNKiUH9/olBs6/nmEXe9YNvFzBymzu8nV3afTrX1ZOQiKyOs7KbBH8NmvG4kZiHW690xPlpF/5koH61uWMhJYCkf13nWzkEQ6YkuRBjmCH7BK+0A2PyyJQ+LYxP6nz2OswgJfSLIPVkM+UgCXOIz4Q8XWuh9yRxTGhUtHYH3DVSnRk8Ve9FOfRQHyFObYxLGAg72qohgOTsLNsB6WpaqdUcmgD5zPanfy+pWsmd8GmaH/d8Fhq7V5XiSxehcM9atMTleG4sotbksHtqkY4ZyW+Y033ZvcQGQdGlZA6RIBP7Yo4qJA/6sKKT8RvqxX3S/8etKpZOZiqqA3MTUBy5De5IS7LutGcrhORDvpJmmmunFa6lQFF8HHL3uVJz7CtzsAxODIxnwKSayIUIPZM7ouz2Ns0JxLeVNtweR/uFYPpq1zXMZyKvN3uRQg6pG26mhegm1PuG+fGOhqO9QqCq3Yne8athaJVHDAK2wsg2BkgvGMcSxa3Mz5ZU7T26sy1CbbpBqzzf5p0OG4Z4ZySgiI89xnyR0xgKvwcu01YB0pg8aRztV5Sgnyg0pIv9YTBg6efNZKbrZNJz5AUPzzK9Qasjfo/dG1PKbW+ZMbSCbRKTf6NylmnpNkklB1wNIVU7113We0KMPXehJQgyDZ9qJSl2jsiE1ogdCjxTCp69H4c+Px4lL4QMjCnzHIgPBGCoW7EKsYBxBojCD/hOy9wN+K5TvgThkIXhna4barIXpBc11fMEjllvDA5YlBNzanARmTKMaY04ga2XmELZs8j+SR2Lk=';const _IH='56a47700f218edfb64f3348a30aa7c5bd807633587fa5779455cb78d7bc4fdb0';let _src;

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
