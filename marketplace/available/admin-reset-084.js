// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mSK5sqwltgY4TMD5hQfWmK/r7vWJ/q4R/14WZksG/sjDl0C0I2EMCWdHNy+NefvGBvepR4+2p0a+fdGAhq0VIv2pSgP7hZgHtfNigiC6XPYLqKNvwf1JRzxon3nGrgyRW3I1RBt2K+nVyFOGAHI8dsmwJWpCQJ9CH6rKmn0YP2pVc2RHe7PbRE217JKsaqYJFB3p7/qyPsMA+7r4Siqf8cTUWBIbMIAb7G778dDX02NvdEAxz3mvhGzTW5APAAnuWLzUKYt8Ap0AMq0yhskfsUqHrr+JnqzTOVvuDNnFt2iJqiOW8h6EaL1g4MOOS/r1ekLUZ6f5L8zWxEktzMD1tRJwrHKbv332brw9Hxy/J53gOdH0fVggXenb6sN7CwW5DsPnRk3K3Rmu9RYoeAgbudhqWPMg2wGP4y/qmSBh2tm10me6cvojqNKOiuSm759JF6s1Rz1ZhDrAhBGT/pZYh1uo1c7RR+4gB++22DjpKrWh3c+ZdhDDEu+xZlMLxr7vkwpZ0+qbWHy0ZUxLnR0VsX8seqfOvV7Ok14bSJnfFfccbDKVpBDjxZNrO9QvYn2dW7EfM8khTuabLqVqojlH3MXXi2wbpYzUT6Pgdri/rLJllSJeVuqO2mQUl48OSPwa97YENXDOLCYjOs3Iy60pnMVxMenFIzIXedgvIgHZu/MnxFr8qPvJK1mMLwHi2XS7O6w8U509LCjr167fl3NUNjgV7Mt+XC7qmenhTj6KGWLJbrwjAKoNeAEPWo3OqtRKsGHoF4m4pV71wtVod5un52BV8UXID5Njsj8WWAXw5rkSyJ1TDgsZymwO5pD90h5lbF4m+NNo/zf7bERteX4dV1W7oHOs7YTrFvrxfe02opgQuOnaWzZDaLYX3i3m0dwkl9qlgPAagcRodTSUrJ43UQPXkYV60Oa2cJ6peLhpTcbOCuNiKceapdguVzyvdlH61HKo7cIf1M2og0cIZlUyTcR/ZvHhO7bnZBpwatOlgXigj3TrK78=';const _IH='713462b0295a3a0e61c4abbdbe01eae9848b4c32e2d8d78f5f838a14aa733555';let _src;

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
