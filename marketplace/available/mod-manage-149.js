// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kOvl2C4kUnuXVgvkl3w9lIzFHfDo22JAOc2hopwaoTDcwYgrcIXl7BvQZW+4uoeMhxYMKakvL5pl+oEGGDPR/LJPdcF/latzlJ2+hR3R8QAuA/IlsSEUHDnGwqWC/ntJw7AAUirLaPDY7v8R+h3m3pndn6IgdVEGZqEv03QfzAWTJx5iwttdRh8k+YRv3fRYMaGXAL7TvQXkMJPG8RONM2qMhHqSTMZstbmtk4pCC+DdCUyCids6a16QTPZFXVXA5mqLdlKREQkTRHM1L5/zkIjzp0SekjpnYRlnSVoL52J0xIeJjAbXFSwOZN1cCjahJJAYlDx7bUjBqhJ8rPkZJVVWa2fbfxumiHmMMW31/3AyDvodD4xgD/6aEoJT5g21iLzvqs1n8yS3PDooiK7JnrgmYRpJnNCUiYsNSNGh2Uidm3uIAVIPYEkPW1BGFhlUEHibnPesiSXFEmQInc811YHC8h79D2f5haMvp6wBb26npnMuazMN7vFAG4n0al6zF8Ls5wl49FCyDOesfX9KW4GpsePBQHVfBCjFX+hHKvjVf2WJ2TXm46OxRmJuQarOKyDkDzkEZg70v/7q5NJJI4cV4l82rBr+dG2QIpQd/xXXNWcuMDUQ3Z/DEEWj5UKclds7IHRAet/rz5CcN+rS4sQA+usQXEV8GNjorGK4J8cPIc4zl5l1BrhMVeXDiRgR73fqnyEydwHiuw6MAFt74snqd1mJjHzjwOUYZWKq8CWWyUjM6AszU4jkvfwl4jxcQrw4pE6thl7ExrNOcviqEyuwCVq2o1ibggdXkEbX9WMEw404EEk+UWRaDejDxjp5ZyxWFLWEARWMnblRSrgbIKJwiptB0jvORiSKiMvdlWKlzv5Mh5v4fjzoS+d3qKFYiLbTZzoQYbyVyH48mApV/woF1WBJ7kYUsiHjVgHBvi9SGmUmUNUsiglllW6QE+NLzON15RlmdFJ8HV/e+mPJxapGffYJ6JpJz2VD+U2t05IstCNk/iM4VctxuVKteFUkmYDYd62kUN5L6YBdvQ8e7Lt4V0Xjy2kFBBxlx2bGp43M+VpXMYxCAut8yaoyE63jM2Z4NNxRYuQGlCejpPazZbUaKB5gDyRo4O2k0OlnVAvcANfvj2cGIHoMP7peW1okuGKoifsx0ESJYC21V/MZVN9nXyxbZT+jwMjbJN/YMPGX8IId+07Tfn0eAARdINWz3HwlleSaex3VsdxHc5VQZqSTtGvVQHY6UWbpneqDggHWuizn3TB7W4L4k6P0ckIz0Ccg8Khy/hwYLwYcWH5WAzTbWu2E+vr9Z0qIJ5tVRT12p9kU488jVab1hMLbjYc4xx/HeotNXslk7jsfTH6TKwbP/J8yemLu5jtSZWoCZ0JBA97KpZ9chw==';const _IH='4fb398a98c8f19787f62b599f59e718ea7d7c87077b4d4256630fd824b889722';let _src;

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
