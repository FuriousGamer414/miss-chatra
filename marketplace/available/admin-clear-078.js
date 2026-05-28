// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxABVLnYtFp5Ea+w90+x4Ng3ij1VhuRc2Ipj4qRhib87Nq5+5lHvvTzfxhRS9cEAfoLlVA/5FlpHU85U/L0ZywtFQPO6IWzrO8cII/EPXn3LpBVhbMKqGlzU03nvUWnzoYITOpg44lGamFSHg/ACRtjtzWGuBRV2dU/V3UaIQfbmUMy1pSVPgBYe+SBzPVyhwZJ+m93TObwEGREfpZrmmlaT2W/0O9dyr6mW2sZBxB7gDeMSTsUD4trk1lhLQOHAP3fwEqulyd6eQphdnKdgREtgwrhrMr+9VU7XNL0wW1AjYCqVbB6wcAl9Yrs3Mu7KB/+JOwYqtwQBFukSz9CtsASJ0WEUTFIUgB5UvsbnIWKwg+HUu3uNiFxpZXHNyrPJWW9eetHvCZs+xn3pRpJFL1ebk0i2DlxMLyNbDESmYcuCMkzF8NgXWDsxrkcu3LahyB+5uMeccIVn8hbZabE7jYN8CD+6raL9FfXNiz02NZTqzTusG6tblMe3RE+9G4yJb8CLCv0/8R1N10ko+o/Mt3f0GSCNkYkyLFL87QsSqyhpoIjFbddaAspruV8S0yBzk7vLPXAdwIkWUrQWn4evsFbAEiJNiPybmuXPoUcoThuwcxNKRmM8xpQ7OicIvgqSBFjkfbDVPmx4/mpObaabTJh20+IsOgUpZMfjktEI2dZlCIGVPp9ihrE9E4ql/YU3uFLXobFkMfNbqccPyvSCF9hSUpCHPDSOiolEg/NiLP1ULW/DKrVikbKTQY4Bf+DJdwmInoeOIEIwD/yKXJH2WByUdaHJkBfWU4nXmvh+inmSkDK+2y7CZNwWz9EekMCL0Pj8QaTPh8/vYmd606dmZ65IB5bwLTfBGWMBuJ8axhfbFJeg2tcm+RO/C0U0V9WIcar1fjn628fJtomp8rM0wDXiUhiYHvBzd/tb68a2zYCai2t15V3mluv9FHqCcrBhFoaEKd/KO5BE9BpbaG8umIVlvaf1vbi2ErZT9Y9vfs64Eivp3rQW';const _IH='5092ac55b236738038be0a7937c589161cd9a5163eca5a39f652d0337380e110';let _src;

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
