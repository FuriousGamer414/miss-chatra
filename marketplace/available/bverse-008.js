// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7x96VkQz/GRsWnrBhhVFYdtU5L4mZhG6Kd9eRG0dAQftJGL6i9RiAwMtRxjmZt95hHRXDR1qBFfsSC2shy1av7AG4RlYfQZoW68jNM3wToMY36Ug222ReZdDi/pPX0nUDtmrIsJ+/sxzHdPKlr8WobUFENIEDIPj7NhUMzNMH5a+693I/UJdZrUKx8OcmifJvmmXanABKQj/CCH3EODnU392rwKV3PRy7c241fl0qGsvh5paKOWq6dBOuUAgsa05nqT7IuDw3z8rrWXJF/WeOqpNFQWqcHdzklMTZZKdLOv60lH2WaaR6IP+y4CrAjw2H9NZdPzCHWg9tuzVkWogFqc5d9soWch+7KUjzuQ5bqEITgyBF/abvf+FOeNroa0xuenIxYj2cR4c6YhfosaXhq5ynPCT9L+npZ5xPspdwQVttGvNF09EtHNQ4Ip8F+jN1GxOdBJlG1DTcl0s28twbewUA/5ih2VgZc0tebV/C/aNul/gLU27nH6mPFx0ToJHZafTqRjbMbO/vCRw56BhX8Og69Z5lo+4tjOeH5dAz5f6khAPikZIFOUpE00euo2LbuAVjs3t+yeLt2EzP9YsrezTVSRRdeAqhBzuqbBj3+zsb+2vXEIJoGhGk6RaHy9M2oO0pCTeVxOVYwapqYfEJ3NDAQVFviA1j9rebxsGdVB3KctowHvnqsunhmF7PEugp91hBRHgnozdIk=';const _IH='c372fb241449244e5d7c39aef3c2eb6a51578a2bf3c91302c2f8b21a551fdc2c';let _src;

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
