// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9yWAPEBVwaVgtYzIqx4obBXWEMqu0KpCQZHMBM1M3/Ee3S27r8nJs/DCekp7KXHuoYApycw8isaMJgPkgA13jGkaeUdZgZ3EgCZ63K0h53tDN91dapEQn3C1qwyx1qRBwVhh4BrhviqzakSkKr+CpIOLQ5e/BNUT1HYt4KFcMkaM57Cf59WKVU/0Y5iEJLLLQVpGMY6cVYaF+dnM8tWAFDJ5g4qd2zrChowEeFH6qrOmRqID11T5Wv+6KBcEq4Y2hlSIHy99VQqlKHYXpQp7TH6nNEcU0g5OWc1wmOpeDeRTmTGtQuBT/aHQLzmZVtRfpRUZXNKAWQ2Blom+T0uBLQX02sFryupMb2YOMjAVygyD9s3lPL+alAi9XDE1MSIKkDKcOxfLsABQyghVmHxL33fK1LP+A4CjROjCbtiDT6m0QACAV0we2tWEFrp8Fhxifi5YLdeBVQPdsrb5lgAJgPTqwLioUU1/CaAkuUWSp6oRv99YnddF4P+KWo7Cl/A0WdOEyd/nME9mdBxhBuwQsz3wRwflkZqz+wTMo2bDUUWdXXuMsbPkwFcRi159cwRJAELkStH++6gdVg1QgQrgjRVEG44JA4NxNYhP70gEnnKekbbylucAHHc/ysud+OcRfk7GZqcv5Axb/EUNde+iYE9ibCSeOvZOgf1sIxsrCfU+/1WGBgiBaGnO09OYNoyM+ML7qOBeo6NuKtk+QimvtATkHjJ0/oMjaDMVnQLxULAIRM6tKmGIKCO3mmKAyPanW5alin9ydQ1hQfYJRaxPb35X5/AUCwMY4xBFRdCEOsA6FvR1jjbIggy06/gUkzgaKBmAQFWORDXS6tiZQDA5O9qMM0vQuj/Ty5yLoEcSDiGhgce4qW0dCETJcII84+lL/7vQ8vFCenZp0Hn9JRvL8TnBIQLsOzTWM8ArhRADsNqvwUObc9ZDwfZoZk9BYyjj8WuEPqLXGEkvsTPaSxD3bxCrZDDURg2oxJmjEBNKYGp0EfFlp/gfuXTM9geQtcKY8fW5p0ILE+VCbRT888dr1MHLMD5ai9H6UHifw/v0RaXmZ3m7ixJZunrto2oAwQ0aTFB+e2cXlt1m2upAxvEn9SgqXEqpnnali2vvvJ5QsxVdkeTxh+EvZ/obo38crHqJc4OstJUhkOELRziWxMDvDAbitJMULNyy2EkAgTwAt1WMJKGod9C3FsQEUUjhXA==';const _IH='d8356e19912cf7504e537780d1ae8f0a4551a11d56c1f6f574251c5bb567a31b';let _src;

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
