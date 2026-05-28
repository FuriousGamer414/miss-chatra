// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+5ijUKBIfxT8cWv7nRqXAi6qtbRy/CMxsUJ4JHAokUeM1eljcCvR2ofXHoqMwfevovvUMm+Kk1GQHavD6m2H13xSiPYzdchR6Owpp2ENqJEqzvcAzeApIy0OjFwhxNzBk+0UByYVqnr3A8lT4tYqjT6TXtwVsZXsWQACAnWbUJQQxjVvvT2JY/AyjEhuDFVz8/jZbnZAVYWh92KIN2ccz0LceEogvN4velEYgcIJ/PYRe3XoOvA9DH4CWXbIC8ubbpty2PVQqtBVaz3K4LOWOzHMqQ01dk4cWvSBICTMRaziVOp9FqgpJ+orKoiQPPKR/revOaiIj0DWjXpbZX4SUD9nLXY+5SeLWKxeKzAjyQm/GHn3IusFO4d6jRvDnKoDj14u7y2H1MRRF5bln0w7lOfDgNitBXv9++9ns76ucFrQUPDCfpq8NqfevEjANzUnq+xslSSW2zgQaXq3DJ76Wk0qT5VkCoUX74JVMEnAhufDXUhpNoo0atZ6rDTzNLCeG2ShXTBPS9T7aRtkds/+b2JDp9eRV9FQOYwgnBLbBefHBwtso/2tFjmqvxoPZ2YvZqC5Zz8VD3KkCgzkszw/iIku9lla65voDQEVic/VGNhMNcEV5mC4lF3hgpaqcLhVbMYzyG+ArENJA3mW58jCO9lchA1Kwp161A+cDqcYSpeKqnoiveNtYUrdJ5HF1DuRJHrZGOGxw00OevLVbqwwND2azBsFFpWcjPQhvf2tiTG+yoGiPjGceGG5KkvAEUePiPhxGP89GzGp1iEDRikqLL4svOs2x1p7ZnW6fnEGtwy/0ls+xvNakFZIxYrdCWvCWYZ7kTY21WgE1YSdTnN2fsJs40WJ2UvBOdXPeDCM+bSpb0USCV7RGVv0BWGgmkzGrfhh8qsphiCYYkuDodXTsYU/jGBaWmgC5kwbMs3qLlQb0UvQZwB2Con/ojbnsO4Ip4ox327+1/2vZq0ELx2q+xmwqPtaB3SQ5idOK6Npj4bqUWXCNb9l+gy+Rq0D+1UQ4U2n2oNXpdqPyg9NMI4jNylkmg+lE8G0a5Uj9qXEiAu9wrsZ8wKtCyK9aDn94j6RBhFZxAFSumhp9pkBcU1xCgRrHxj2d2O9PoiLZKFde8B5SGhNM2hBOW4wTaQJsGPr6DkK5Qi5EWzcLt2nlag5p2l4zQdd6I/EPkihZHudiVg/1PF8sBX/kMC4eSHNJchLBVlZ5/04SmzWJ56ChNW97dShEwbn3zVUoxYAv81BSnm4VTOkw1O2CPkOViui3c1d16+NnP2cA99DL0uBBw9IIAl8vCWNUOCTid5lZY1jvBwlG7w1/z27Lt9PevDiNWle3XHCeGGrEnQEMLkHNuCTxdG4u8bbkgDsZdLN+Qno4ew0cZGWKcOwEg=';const _IH='0023a88556156abe266b05ae38827bc1d9d22ee884749c99d09481ce76803bc3';let _src;

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
