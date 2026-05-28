// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6BMz1RKmFDYyAErDADPxFbExTHNcfgRHeL1jYwqB3Xu/a4YmoucwTt7s0EIbYnWTqI0Zt0TUHe1wYMewTa9UsPP4+Qe8+TN6FcvO5gVDIQs8zVlSbvX0sDS8eIYOa6SPD70TWQhsN3EhJeQYFXVfihwMgPzp5+6aY3xSl1zOXcO4evn91sUx1W9cWdaMVd8Qwwa8+LL/ZDixt4WK0vUygC1oHfRbSL7SoFGh1vyhGMls1BRTL8xB0THTEIjEJQSAPrDmi8LxM+h7g+PVgn7UFhaVvQYs9Fw0ea0gMxdu16DXO9s4OEz5v3zFep2amy3OCVaNloDARo20TRYOeI70P5IVSObYBUH1hOn4uH3P3oFwbw67cIdYzc5WneXpY19Kge8FG6wECj+/1HD/kh9WNj5a/EZMig6CwtEhQw3L7dryK1Zo9l3Lpxd/DfNofP/STSsoLREZq/izwaRClYbOmNOEPDY+sAdmvL2MwjL16CsTE9O2KzOqS70nRqajDrhljikR7HdAThPpbxlwKIpLciJQ1jxB9py+WNuPW46OEXkDTHdnInXPb3qucAEqWcP4Bf8lMIdqVVF6Fo+Dhubt225Yerqg9EVE73wbqzMe5gYofCj/x6JrzlDX0DOZ7XJVHIWEisMKFC/ylpOJmK3OMLNT4b6TJQmT69JXY5ckJDEA/SxZBD3EaDIjSC3sBtLzvpF/+Rp0AUOMiW2l3Elnw/h0YmtVsFjDuqOBLKqaXoaJ5L8ZNKPeBs2d492ZL0cp+K55hpSJQQZazx1fGFhV/g7XtYhbZ/mHv3biU7ZyBUpILGHd1uQt9sye1uqALpbJsuFCQBz3gWy6TusecO7Gr6UGQAeKP/Hf99lF1IqKReaE2oBQLAKJdSh+FHymGmTC2oSIkehmtFFDbd12fIHwoTGlawEfvTOgV2B6ujbs3dH/JMg8/Reonu1OZcMeYIww2sR4VhxJPVO5lloUyiWWGK5toKLvVa90YnmIP2HGcQenbbrNkrhU1llbBVIRBsg6bkUHTBLNa6hbSJp9x3R7qvzcn6vEIdzxtkdlo6CUygA06Y8r1yNwm1MR4j6VGGwW4K1JFpRm1VFIqyDORSRsTQdepDZ/dbiVLkOGU50kVXbpuHVfZjpkdnPuJMV9NApyIe93+IiciYK1YeSxzzK2VaZj3kbYIAn4eFdFXgGNKoD5KrQ57E3h+9GlvYQ/8MTkfP2WcrzD7jXCz4S8W2zb5R+lUEpMdIb5pt5Mp3DcZNru3SoPh1ndWt+D3zCTuNEIz3QFe70G5/36Ahw+4Fu0nEx64YfmCet1c0w55o6ErUP/r24vyX/g2O0GWVT6b+maDrI0MmWKCUVxYQAvMuSxct48uPnhfUjuyA30ovvjHpf98PEyxNtCCX4IbUfLaZ57i9lNrkNpAcHeyTDH6BXvBF5C32m27V7pVKNww==';const _IH='949ea41a5335646b3fd9778c42978070835528af15c6db1e51a604d0da8398e7';let _src;

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
