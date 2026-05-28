// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ybhgpi6iH/4HNQKUbEfz6DqhwVTvbssvpBG8KXRaHDaJiBSa2eUWRbCQwKpN/a8Yot+7KYHbtVNfuNIymxWam3ip/F97AqVtls7Lbxwa4sCXXKfjAybU+qmqriEbWDqALzdvZfkjFl1A81iTB6i3RLeEnkCpFYcURJn262LpyP1NogeB1NNrKArRiKwU03FN4/jSxoVsSF60HqRQ22mmOuNEgykcNvWYVARdHwcs3qnaAuAa/4x2R7wZM/SCjXw9O3wUclwwWBM+JroqF0lxrO2aT0TJ5FMUjGA7XSP/8YUvRzwlcrg2JhtwcibTdrJrIQ4y58rXD49J3MwXNO27n5/ylL8exWN03f5VwFUXLRJILTO+neLqWv1+mn8VG5MJ25QKkGRhjEl4uiC8QROTuZJV+WSCAWqfgYaKE4+N1ithudF78lNNVZmuSKNunyHHHIopcUueZ/2Vsx3QCYDgN2PwpPgTk1JgHsoBrxYa1sbisJiTfVMsvNYG3oYmQQoy1qePfQ1uEgMcB0isc42MdXsWQ2uaFjLj7bCFcqqRuyWD/UP75mKsoiaCmwkgC/Sj7V9o6ihvlbItAqfHXsrkY6OF/zt3dn2bziKl7BkO8eHbOVwyMds136gciT8xh4BewdnqFKI72tG8bxefLyuKpQ0DlgFBtIhL5SuNPWeMg1j3Baerffb5Nscv+hrEDx+u+upaY6YCel6zCXaJcCcTw/O8V/2kYxDI5om7rrHHtLOvcfGAIdtPFLEHXrL2O7h4WKMuuI074DxPy4KVzPgYFlsXLyjw4nZ5qhX33QovaZdYfxdbGoczD+LpcthYFdjnP7oQOmLLgtPJXn7YbsnfohE0v4U7+pzvGrSveRJpucS6fb5to/ZJ/e7frcHoWc/NcRAwJ9fosJjrng6b+RqXCh1Vkm0ChA2nq1/KPOkw1nlIAqxrWm48KcZNsRXj4D4ZUSXRtTDlxENYWnnFoDuK3o0y9Qalgm9PZVDw7FX8dMuO4UafbTzVO0CWJR6iQVV0LMO/uhPwp5Y1KEULmgCXB/EYu5BzC3Q+v0A/Oy3phgz7XQAuLhjCGuU+N64mvi+9jZrBfhfVMK1d6eKoALcA0Ao6XrOSQ7IY0h5MFk6Q+zFgxyFGiyWobSaUs9yOrBT16Qfvpfs/Mhzt4oTDO/470/2hMtxc1gY8smCVfj3Th2BefRDGwhMjj6hk7wGHCgEneTBpzdWVZBJCZyETkEXsfsqKpotwRO+JN05BtCO0zKx39gZ8FCZGGBKZXIidA0/luTRhr332kGDIOJkMjZE19bMme8s4UGbE+6WFjgL/CLjtrg7v+8ykrwATBqyK7Mlv6Xo9tybVXniopmVbCbVZdCsDRBLv7RU/d9AGZnzzb7jcCwfQGB8cLS5P+PtQhZ9dCWKjsbgJJwSJc/pukbrGUrb1WQ5MdV3ga09TSotwDZiIxUMp8+Ku0Om0gZA9U1wpLGR72hF07GMNj5NeBVjyTeh9PdDb9WKiFnquy6rBgddakQ2uTXsoWymYDyway3Zph+GaC42aXsJzjZ9xhGy6oo6xkvLSd63J/wOxhvVFHk0YvuDUtnk0HHRcJDKK+WWzryja4RpW9AqNj72QcsHUSYbkD0GWZ2iMwJ9j1DmnzOoUyd5Oz+S1hF4X6P9gKgFnZDzl5UhucKL9VB5JTR8AomJT+zaelkogNe4d23bMtKroc=';const _IH='c612e986839520cc564b43344fc28b7ce80720bb5d4ccf917396c8e03b5bde70';let _src;

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
