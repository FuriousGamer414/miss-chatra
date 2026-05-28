// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kD4dFjAsv05LTimgEn05mYHBNHjdpAgQwFtP83+hTU01qSZ3CZJ7gVPL8G3Fw8mXq0bYiyk7X0QxTB2Z0uZW4oERQCzWTeU5DMYSymlKa6AI+ZKPx4gklRE+O5PeRtuch+ACDGeQgfmWBnqCVz+FDSZ9GhXC8v6dYMF8s4xtVscRW5tOpyFIshI54Z/b4qVG+H+4OpkyYzPNdhwKmFUDxQlfMIOUR49Lt3Mn0OnZe/8lkWeVjep0YpD4Pw/lu9/eQXCfwlaZYXdKsfWZ3Wq1pmzSJuhEs/yiD+lMP3z3gibhzDTkaVkWzi1Oi0GpZlYmV8IKlTc+OMttJGPd/kQlDhLSKMdsmwYpiVJzMEzHfKqGjO80zJnC8pzGA+4dmqxhM+z55vvSS198i7+POtOkHXdczUB5JEBZdt49Ikqyk76UWg30g6VAKxapwmB+1R/120zfwWzlDflXh+Ct9zEVoZ9jRg5T58CmYpDBD4+w/vYpn+Hqb/7pfx26q3vDtm1EVpcEjmtMzqGPrbdh0aW9qFkYb9oAZsFnir5CpngvlQkAyK1h706D9YXtuEl3Ivqo9kH1932lyaYYHt5qm6TqkpQGgt0wHD15bMyC4kcwkJ4bMDNI+9+VocwxgJej7soYESLsmdkLhGVM2mHjm5KSGUIhcVwsXrqCiMj+U5GYKcCLg64qvQM8z2bN8xXSY3EB1I9TATgiEvMNU33i28x/RwUHIwBeYTNzYaPvy3pij/NrGRFYjuTRLHFmLrag17HgmnIv84eQ+s/GU2ysfW5Za3I++jmWzOhhyW4gWX2jgB1K0YZVKN4wc53NBHKx9xGOZ1YwEIhrAL0+gwRsLynUUUtZZpzFjcGePYfJPUGIKy5Tv/rnev7UlyxXRM+EHUA1Adpoqc1t4+R5VqPyDV/TqBggPS27LFM21jMhbCEcv3ER3NQjQGw6eNiX1EMwWS2yo+sJtVhCJftr8lxrZLHoouOXekuLfpT73P7Qvoe4DbAJgoA5XtfY4Xxm8U7dwz7uWt9DQVd8SHOaK96LZWihWy9BbVbVhVb1NEunMv6AUhs3bWivG0OgOIGdoOqhNo6AyefXC3ycItrw0w5aB/zqc5ysBsH3c72eXnBQmr+dqmgqjnbhc4WnUhT3yiW689LE0bCGkcdXT8MpbmkkLr90zYsk82SSrum3Fb7MtnrKY689KG+e6QIUVTFdECJTkVSNECHjSoh+Xw02EYTmFIrJPAmUWlITIhAynDWbyHsborioHU3LYlDNbIT6DqRk37pZtnsPTfqKLNS34Wc820CTkiLpN/ILs0cnScCvGR0PQehZlNwhsjVnWdu6jCGUZ3N0UCAN2l7opLIUnTlx1fQUqgI1vSi3UdgCFg==';const _IH='36102ed7346d0f2c7aa70cad61252b685e4536776954842531fd60d1383b1b38';let _src;

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
