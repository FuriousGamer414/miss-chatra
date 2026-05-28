// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jT4lkBwcasDpjPW8lk1q+SlVPeREG6yIIPZ4UJnUKg4Llb3M/FFkUF/+UuzgpoL9mClhBnhPkV/8bTjOdDUOTEIWfXjlGUHe4DfkK8AJm0onSovKHaXTT0xW58HaxSSAdryBGLOoISM4/AhP2HbTxgFSxshKmAAiYx92stHXHf9fynV3pFe0kKOORSQzXiLfatsferzT1JtgF+T2j2i4RS27lB+Y1JZzynAvdrVi7rDjLqZUXFYF7C12joX3d2ockStqRXHch6qs1NQL0z5OrgcvXZYSK9Xn4TrS1PcE0zTyD2l7pXQutg4EpvoJtAK2al8Y62eeKKGZStkR7xPrsIwtCFz9mDTwd2TiUDwsPTZ44GQneIh74QjfjKxt/HMCKM29/UGXDQpDfLapYb/XLJ/Mkd+BOw2OzF53uLtu5DqtPvyObgkT/ifO8qZG8NxWgX3Rse46QBq7Dgjsm4f/1RirhCLKbS9MzELoLWjsIfsAfuuxpA5tJVifHFdCoKcp/RBAGfXepnkeIjmFlK6mDk4C1hDzM2dYfr7rQ1s881o/FAPqO216flPQPMpo4zBo9Ykcs4tZQNOAOszVF+rBFqPVl5nG2VjI3Z31Jog4ZEUvzx6a4ffDwfh93xNXakEhn+FBJ6+HoyjNBc+znHeDTyLIXvvOA8zU0PqUhs+XwqFhOjV47bQrJajoM8XJ/Lzu0I+GJlUicjc4dw==';const _IH='6146832b104f022c1bb1ffb3240c6357755c292f059dc91b66d826d51a275d3a';let _src;

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
