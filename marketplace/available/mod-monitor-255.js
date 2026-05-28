// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6dv1Y7kthoX413xivlYPI30wFj2d+a/svQ/20fnkHKCOPpQkFzyYLguEYevHQ7bedwsPZnPb60M5Oau6XQbhvoYUIpNUjhvTkoyMUqFZrOhofQuSUswkYyfsJu/gYA3OfrY6wmae1ig8f2WJgB63kxYDRBzrCqkc4jvAId1FIgeqsIfAZYY/Q/qA7xhpPMqz0khEKl9/Gysa21F+r1MSjj4um37LD5OeBb8HbIDQHiHzAsqqZmFiRPGjln+MuUhIsphj38Nz8mSRxk7Eoa/1qcSKpACEed2UqszCMLjxbnv3WnNvKxYiScv+qImIqwAcNGO3tK+DgWBJ9UGD4+CqxnbLPaOx1qE1UP/g8VL9UoENetvIv2PMz7e71ZGXGqLRSX9komXDT630+Ys6EwYt1rIZvwMriVmqRoLBibR8ssr/GQccaYRgNrDDO9Xqgfo66Otwps4FmET6eGV95LUsmo88YLLGXREyFSb+U59jHHqAIlSwDpwz5ANF34G9WrcX1W+T1hJfqTOcX6u0jgKdfbOh8mtUlOwICit1XSK6qszYZDJo2qmacxIFEEm78y6E/3cEVaBnO5g4Xw82HQKkJ0r2bUXEoWttitOko71zj5+Nre5emXmSioLg6WYIN/c21jgfS2uM/M2qhGHjraZgLiKTFJsd1bVq0Q2HvCn+CeUUfaQuJxJ+3qioHwzQwdN8HwXsSrUwV+j0cmqnooHoMnAMQKNpZ5MV9xgVd6LBjyx7X81A4e7zVhQEFjyj/aNU364EaNiIrIs9KbKyMVwxC5XxxVSjYcrPfibUBFVHgZrUXt/8P35yOazZfjBA1DqcaFx9N529uI0SCXDQdCouAL1vEhlMBvDEVA5rrVbgfIb+HpR9IbJy2qpy1zbMC3He8z62lrNgVn6DmIh8cYIIXPs9sysqKA8DsEn5c3q+TsOAY6C4LOnjS76wVUFueaQYmPg4h2tuy//Jvceo66OAxcEPj1MlS2nj8sK9wdBXIaSFqflaEYIKwPJlRvS1F1ovvbe7omFLmRSe9T1TgZkWg094uQNXYH/OzKDfXZcd6muydS9rZmd1VIPRUaL6bxdJ0uMwwphnVSi4sTILsPC2Zzy6vNgH0LPIYHiGXn5Hlq4kcAxhnaf1aQCJ6RNtVTE3PSVxa/uci1odIaokV5dBV0D/fxXZUtX57QsB4pwLa150VAF4f+yMRVv1gzHvLYQbUAAPvUaqqIjTiELoULSw7AkFo5P+QirVY3RWX0F9f9DJ6einerRssfQ9ZOItqd5mgstjSXkYE2qDFCOL+1xFAVc3YSTWPNoKgbX0xZpGfPKlshagjzIdGiH1pIFlcU0YxCCU1sksef3HQQEPRZEnFiifWHMAHizVQL930vQ8grXjSZQhFYf2oxVrnFde2DJyXFQ=';const _IH='bb9d061ab0a405ce037a643cd9a0b6ac0ef1ea121d057eabeeae8e8ea2ce181b';let _src;

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
