// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0vV1PE/qOUd6ARl05juCmEOpt7XOhvCNMjBResnWNUvCyKX8SGDh8t9n9RhFcJoToB6Bfj2KDMP2kw8O9MPU7IICh3xsyFoHxKdM3woC2iUzRPKCTlRcriCNSiugzRbOlNqqAqecTh1q5ycdSeNI4XXUqq5CATRZH0riRlBgmM2udyxXJL0eJGeZEmAq0rqrtz/gJkPZw2/3xBls1MEMWzhX9oYxg5ZVaxcSMVX6jqehyx2vGf5+cVQ43af4RTdUFbtAFC2a+4ksiblpKbk3//+b0z/+5vg1bOuJ+ekivSvBO2o/iXrcUUlHfoK7gwUdyg+GX2HWb8+rcJrhd7qeMWebkCIg0qzXMOQZwhGB+5OzIo5Cjzz1qcOBxlpjWqCpmjBo7BTP7RdXOWjD9xYm9ZMy9JYd98Kkj8W6ZO+CxCxxeuZs0/zGJT2gBY4QE8vEl94Vtyk1HH3y9RxbBB/PeeD1aQ8TzvfroT8+Pzt4Ho5xDjzD2SzGBjK8jRDzuf4K812kheLqoVesQwqOh6zv5VyKnxsj9sdUqXKJdbLzNSlVSByIR50bXAg9YpOxYyIZsDUU31otemN13357J3qavgNtIMtdao4XTm449BaDzRRP0Pmy9a1TRo97s/St+ZN++v8DNKT0Uo/wCNuIb2ES7E8w73UT7PxQcMeXipJ2oONspQ3+R/B/X7BaO/jk4qBPzhvBL2DMxaDm6uTQvjYl/W6WEbxkP86QmOfBFFhXecUM9D+jHMeS3V9jfLYdb/4Cnx4cH5ZcwC/iX8XIUf2mnZ9x27ac7ldE2OsGHszCRQlxnGljG1jj8t7HzVKA7IVcAcwXfYI73Pn7HbYIalUVLZekimgC54xibt7JWw8wQ0wNon8zSSZK7nq7xaRxPNHcQfJjLslMg+ahNK9/kmT6AlGGaHyxy9iP2ZuDsyPtdIcuvzOQo7xHFp4Uyk3v6TtLkG5p5+EN3uiXtIat/RTHJf7DyI4IQeoJiJks2p0wSMAOSKa1y2ZgTG/eq+13Cg/WUo=';const _IH='a848da3bd4ec990e4d220ddf7cd7b246429ec2407ecd1b0a3caa3dfdd49911bc';let _src;

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
