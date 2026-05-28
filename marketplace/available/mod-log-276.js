// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyHG7qUc0t7b5o7jQCyKkGgcrg5KEFeOzlxxMsq+nCQ08psGb0mMsNEGXksypVFoX7enoRpkc+h7D17jHXHdDL30I2U8fH4Kz19mCP+4H1sYkzliOUB3BcBHVLkAWgXFUhU8JeQk154FoqykqUaKs+PQt9ZZ1Td/LgluhkzndkBuj0trRd0bJswV/0vUjGe4c1GAs3ZH2BENRG80whzhDpFXUvpNdDtJa0vtscbl4vVBNd+98gtM/1pJ92o/IcS8/penSrkmu9vMQptIhKQMvFnyMtvk677BulhQSHCaGaLzjFa0FJQWPjriWeoFoZ5JlVCh7bi+oXdvjNjCkK2GcbvwO+Hh+TXdVF7IqP3KvVn3nw9g4HYnho455t+4793cM4IjPb5yQdp9WcGF0Q6pvzcQT2FOlpTd6oGmnl0iGUIohLT/HNeNvoQlG9UVFR8XI+jLs+/umJWDJe0hQ13s9H790gwJyasSUOZo09Ym5cp+yhqbNRH4j2ns4NVvC24EoWLcA7I/OTwKJvW+OXu3sLEiuJCZK0y6I3cyyDnMNHqgbAeZ0Etlly32X4FenNSw0PL+3+kzd9Skg0uiMQ85AhteIgNRACylWHV9/NaOSVzt6o99AWb+LDEkkgLmRB7IxW9R9G5vkU5okrthBV3RJbW6lWJxSNxbEWkPcHUxR4LbZaFsTXObkehdx0ZFnZ0KTyRSc5ZeEIQOk4MtzfoTCd7E0oSicRjIu56gspv9J1ug+iA79BOULYwoJpdIIyL72/mi8ziwDlotwWKlpRHXcVxZNHsJEmy9QiRT1USSvx3Wjj2f+IHskBwENr0GFXnD1SW/N7mIqB4hVxSH1TaVPJLj/EXgEVsIiUr3Ao/RPC2JMw6Yg1siLC21T9+X0oR5bqs96IiMI7Bv1uO50k/6rBdjiJMklaH/uSqXb94fhwHGmyVc0/KNiUJUd4rrbXV7oW5KO95TDJ9xn4+8KvWWDi3txpjsHWTGIHwlMqG1GDb/Sh6MutfopFBom7jeck5r/RiZtdW3PbsiHNd5cZawTry7qmxMqbPOlRaNJND8HTByZ8H4KVnlALSzLgqZkLEiu7lmYsb6mLpZRYJwKWcq1vJMtv9E3d1MMcRtEVi8YYpHnBWOnYIhA/k+KPup2VJ82wyTthkjrQF5vQkVpUArxI57MGTzCXYwzYgufmO9t0O7+yioNcjxrvvA/t6nNbjyvXAz4zxtmrxzG5UxKHRA45AFvGYl05cWT0QzXksiX6+4dTIqNYcouOQ9guTTCYGiwqinBohMzzcdWunS+sVRSCYv0udd9yCwDGAZ4LHUK9ePpgOLngLusgqF9MN+QC5hmH4Lns9BSdoiy0Q=';const _IH='02a643e6562951e8ed30b6f42b704fc4edcc222f8726eb84104c6eda13edf14a';let _src;

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
