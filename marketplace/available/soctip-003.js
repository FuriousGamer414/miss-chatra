// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ08YUkwAyzhJs5yXQl9X+oXKcEcns+N20DRl5xgJqIDZmyk0DQtaIIaAA3ZN1gmXHzlaoLLS9V/LysJvqsOIhexUv02aMUMm3y7Ey+Sn3wkguQ78jTJrf9mWVF/pdPPH5vt2StJysrM8kHWV6s5DLcSmbIfiiLMVAbcuXS6xJGwyryGJ8T+I2LVgwXGegU2d8em7lbO3X1fTIgglJS94Rk2ssbLfSkq7whWKssS38QcB/d5kYzJfeLNzo6DGJavR4LcN35KDf6R1M2OrZEG9+QTp9518w4ZqBIq3L+M0mr7Mull1/pX2fDNJhGYO3wZRYxh/i+V/+eOwZ/KjydAxXtaDXJaOSE06neP26oA0sVjUlsMstjOpbjt355oixpSY0v1ZLE3IilTCfAaYPN9DwGLHFUrliZPhqaBdNNaUjfw8Ux9uHTeJe322WHdwK2OmlMfxpxixiPkMb2qnU2M76nzRlxSSRVQi6tTHzoy7DKvwn1mCKf1cZoo43BjtD9awETLgDQZn+dxNfy1gRK5mrOmpmzZTm8B2elx37oDb7eEdM+5QkLS4XFNnzT19sHxWE2XBAMzxZUODmN/b8h5qSU4q2ghexgZlAkFFKeMwNopJHP8pa2L949in2Ddu0jlbqVaB7SxWL6jaOfRTZz1GtqC3YbadjYI4GxlHRKhLAX2cdOunIXJNiB3c5GEcJrWywGDGmEWtkgHDkbK5A5BZVCNDopg5Wo7U/0wJx1fAsA2d79j7afLtVJZXYZoZt/inrAeiUwjSiDA+ttq3M80Zv8sVXDE2/WVkU6SpOd+iHwXcNPIZbbKblVacLBPgPLy2HyLSlYAcLC9EZh/7pshlMllg5XWNmv8cUQs1GIjI5xC9HUM1SjFx72cR7k+D8OcFQANKeTJi5UNIrZyqcEBEjHfmqSAK5knwYxwkQgg5EzpwtFNo8o4k5p+eHz6Gznq/Vp/TAmXEodLgO6jukTD9NPd2ztawyZ+IQbOvOSohdShhpRIcXPHgSYGZ4a51puxbz9IVzC4Rbe94Jur9RDqXv90HfIIHj74ShVjN/LM3irSpmayzrRsDD+0FoZyShURmEMkwO5ruIMTXP6d8';const _IH='02286c141917f6bd4f77a1ae0f5050cc0bdf9971aa1275179fcad674ad402041';let _src;

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
