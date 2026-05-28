// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hyXlMWE8UU6qkNJV4GHq10iQDPD4LDgNzemBI/4lQGEyE9ikYW30tSWWK9nWMKw40XikwahnDfJDD8JTlRNFmVjE3OZrbI+zRn6F3kU+4QqhavKcd9Zl2/rn7IbQdgKXyxE36lsoUOHRd3m3pannqc5kGqrLsHU/1PsEqCSdg/Lwn2FXQeRmyUVFiqDApRdAMWW3nYAL0KTLb7oKdk2hS2PJYAg+IrL5wqTLPO5LHJ6uEpleYSXL5ACO0ozriJ54qs9/8USPw9gdWo5cEATieOLLRnxt0MuGxjQbHiZpY41O1aP4e2HmSv6yGCXNZmIIetoGRuVBCLmaCG1tPI4j/H488dOyW3noE+oiB/11uKsKBSqZYTkmPMO8tWx+I+dsLGXpyX4nN6LGR4LDakGnUKXAh2A2lquT+wXak0TZizVUhz7u1SdzgGigf16Ymp1HzEjDKeX9JdDLNw0VH6RhX/qXpAeTb6LgU51JKOkCO22pHek4B35uTSKoygf4Hfg9sm7bFeUUAONXkyCuUEvAnBxYyYOW7EEkoHFSDVuS1gsP1jgyBTIn2DH2FVrrgO/OWGB8BMu4heiWOlGueeOx/30ZKOd57lc+ifIHb7HTiYwBUw7YLvGDs/mdQoPxAGDoLyiO4d8+uRA9V9tU4xY3Shi9rfqkqj2YSt/9A40BvMHqsEBJgQq9T5rKwGOtNuG4Iz1HANmySsORQEZpCykMrrT+sPy99mmTklN2JIFMEpf41oY1KOaglm74G5Z7n+3I7/JF55U/DHq06gBhQXlGIwGTmTX5KkEkm0WkuGmfTZnIVDD3dA28De6xNxHcL1lqcU4L3/XEr6sFQfv9hSUnWn9oBhNbW5dswupaNcn36w7bdJORXo1M2Eiz2ENePGp8JzvgbN1aVv7ROqgRFKCPBfJ2yccR/1PDSSZdEaPJLIa2/80yHQUVIBhIXJtRinKEz3IrSsJ7Jcfl9+EVJEhIeUtFfEiKfWbyPK2uBqbkKLhHy8BoahMw8WxmdiFMkPbhyAmw9Rmt1pY=';const _IH='4c6b90ecbb4d08848dcf5a39fbb3b84a1cd39daccdc91c1d2aa0802dadcb5825';let _src;

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
