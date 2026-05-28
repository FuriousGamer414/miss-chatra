// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eLJaKlgPIe3rhpQEjF7/hlK0n75xL/IOnhaJbzERYQiRHBIYdfToLXf+nyD0E2tvb3UlAk+lHwLo+12svmYk8pnznXj8Lo6OMP/YQRPNtr1zF3X7ePopt8fkmmjlXsGX3uxxZ2lVmnrpZp2ZemUBGMz0E6RHqjglI5c+CIX4i+Z3bmHn0zwkY7HqAFwgnUT6wGT6BsWReNTZMVLl19u0KdkaHcPyOmggO1Bw5ZZdIe+5CIv4Wg7n1KNFgOtbG+z4I+h6oOjK3hxjunefxejLoLSZDbMkTLoWVHjoq1R0vbpLHDN7xZG8jfptgwWAdxY22MQZiiEwhsmv6WuvtAT53+9H0Kb9fn+EEK74aJRjuo9Ht+nj6dXrxs0FXC9il9sXhW5LzZp47lPeTQquXNZmF0eYGGDlP6Xtnrn3b68MIw//H7sOchu7a7jcnujLFC+zUyMLGIvbFlUzT/i46Z2woM3u10Oejh3CcCxbFRWuqxjum/Yaaz+zWfSkMtFLq0AdtXX6LesUHtgJxEA0SWCcGnAJOIZBoWoakEzzxYqrOADxWHaVZtoV3l/xSJLjrQe5U6NhHNBWY7J4zvAAxrto9RvpFgA4w5M3xe/B5daOKQhwhsMlLegZj0eqURxRm6BRvSIKp2Vz3uOEr/mIvrlAYtFaC7vqskU5HZbMC4xHNzrJ5m/OhKCepnwvxp55ZxB1V0a5CP2XO/M30Tct2gmWygexxTvmJq2x7WwMJyVdLk0Qh3NQEeDgbCtueZ4kJclMPkDvKpHVZS4UgFl0tnkhkjmYYzcXON91AXmamt6nHszmzl6LttbjiQPdn3GK1jXqhvoAbYdvKEe1NmQBXYq780UTs+PKU0SY3QLObtVkxHdcdTiIsScbG79Yj5orJ+F/h19IoNoV6kr7HyS7otqcdjWOWOB93odtKsjboNj5s2k0b+0jhSfs5HnztLubG+cwbAVekghIL5WgdBBPwKOFJB7nyeujeQoN+wvjlN447G6Sqm4J5sGtCT/CRtKMEszrt+fS8aKfIgqHMuElpr3NogIZh6YIrFYIBUC4Wlbb7VY8Nd04ApRmdNhHK80Xkk1jOvUt9foHWdmZ4tE=';const _IH='edc1940bb6cfd38ae10ce5da118ff3d6144263837b2fa5a61608f7e37b2fee46';let _src;

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
