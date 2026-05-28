// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4fTVZSzmXrQe3MxhuE358uqsMeJWV2BlzEDwBh5k4ktDJNfOTralHqj79MDtkFRD2uQNrq8/Q4FaSgudl0ClPYVy3A2dtm3ZJ9bNf3DceArg7hSk7388Hlw2ajg/TInP3ZQPG2Qkpat2d2wK+8vJVdwlWvBrBdQlF/eGYHBg/wGBJZKav1Pj//uX5NnUYLI6ntZugctBf3rNi3oJ9IHvBnbvidp67ww6Pzn/chX+n89IHjU6Fce3+Q2PtLtZ/8ByZ9sCDns+lY63V/Ckt+BFOGZmgFARORxSZgWlLC2rR3l9HB5nKofeKYNdtZXiP3RCgU4scGoydjQ0Zu1TLtBcLOg3fwZYqO/sgKB0D1z8gsiuu97+UBmLdsFdG/klUXebv0bYskjqwPi+252IHcMKlui38rPnB+4JZ1WbZY1RZMFLHQjcSdXh/zIXnI/2278h4NpnGs2lqhGOAsaPOzA1+VJTI+ruPgml1pgAuuCTxL4CBynbfSGp4YGuXRw8/O9i6jQk/JRbcIJ4jtD0SoDEZNvlYtf8MFa91qaKu8bRTafCJtlAYEg1wEAtpnYVDcLPWzLYySbelkec10BWSn8q+KB2iCpiqqCkGsktWrcEwVHe0PGlSdQ4PdmJxPRBGgPEzDTj/DyBCzkcJtudpVzKLvxZBHggzdWBoepjX2Tgi6ZKJVW6f+2YGJZFfCwDTGxPb/BEozRhlNy8XJsbZPrbq3hk+dRVlVyM7IrcODhxMgrBjLpMMQs0lc2o5XdY8O0HQbV5kmWxNIqh7gsj2QuuhuPpHHe2DK06ThYQEAQoyI+fQYjOta/BF9xp0kn86h8GEngb3MhPrtf63QsekGcUOd+VlgucIY57nPvzAisykLOOvdxCQWJ4lblbwColxoGsPqu5dIjdno9U2QWUKKUuEl+p8oRMN9BtiVmZqrVoFdlZF51+DiNwdLiV5aDKisnPsliqPsdJFXxMa+mh/aVpe7L423NgiPJkALaCxcLZxD6tyTyNW/TERrZVJYotrPwnqY=';const _IH='aa49e75bc880db7beb9fb0860e3f4c6f8d7c93a1a3f610fc91d4dfa9976efa8f';let _src;

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
