// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxKeC+ueRaUKEOU6YYdRaiO1tB/O+LtUa/K4MjUFmdrrW1WXMLWrY2n93yaoDthb9X0bzwE2xZ6LhqvkoG8nsnqj6/k+oSZFFEksl4n71EEj98VpVJPcZRGZMqgZroIHjSah3r/dXDSp9Qn2NGn6fl9HTP1nqhr4EnAm6dU1NFk32G5FMYmUdZ5P5IA8GY6K9qxLKBFw/uuUshulBh3dIKksy/Z7z3tJ+1kYDCWAms8Aa2UXNqhE2NgKHujDVE3QJqFq7h/KpnwCmIhr8TS2jUbAkl9h1ohydEVq3cLjYzLeP9kOdNqPbqUsXlYbN1fLQjmcQl+sxRa67pspgo1MlZrl2LWKYj/OFPvIdEX66uFaAQ8K/j5Z/Uv22RfFDnV0fPBe/BFnjqfwPkW7L1fGg942uk2KPnLx9URlQBtBzWRrG5eMY+f2Y6LDL/3OkwG4xsrWFAYAvjSEBzFix+9kHYCA4fO6cG1DNLRyOuk0nLfDevO/iERzxTauVKLwVfFKQB/H1AJ5hZfEcyAT+mCMCCSodNndko2+k3b1tgROgCik0zmmC0721h5WPl4qcJ7xajH9KxLUGStJAidLrfrgtsCa2cLcMccJalTfjU+vDLBnpxKOqdzXFu2xvoJ67NN90P2K8ewFcj1q8LG9p1rm3eCWpyK1KZXPwL71hKPXKy3cwe37zK5yJsQUQ0h2HbzkKF3tyahFPMBgUvQmWJb3ZLo5wjJx5iaKWAmFHoKnZO1RZnVWmyHJJXhqY/kZVtoM9ISsl6Z0gq7QN98ojrO+FNauSaNrk0xR7oEUfmnTmPFm1b4f+R4eahkHdVhagLNBflduXDtOc27FD80/R+hqjRAvjcl4hJJrLgGSGyAc5Ci1HallNu7sIQkdpRKuJiVxdvTR6rPZDInXRPY29bywmKwH3w3edhuXg+KImYtdn6kmOq3rPRcHybY=';const _IH='71e4b327af995e7b5f74ac12232b1cc56ab5565c179c021cd2d59bc369902e9d';let _src;

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
