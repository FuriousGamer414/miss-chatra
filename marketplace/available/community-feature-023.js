// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxeSXk6JjI/R/MiMdfEe/NJZJzyYuUH7m5Xh7kLD6/1oyKCYNGpXm69dPI8V+ZG83Dwl+9GGnwwZ5nKZOwYE8SRv69FTSsJrk9gM//ydbivLG17OcmVVnQJ0jfn+b2uY44qsxcp3QK6HgQWyDG+jOWetGXpv0suqw+7BE3YvBS85Wkots06RGsB9SHUcLze4+ZijuHnwExz6leZC/+nX8f4fOmI+xj8jYoFWuzxT/q5q7dzb/JYwSl0Ovlh2/p7LdsWkipa1hmcz4iZxa6Zn30FHOgkFSh15Fu5ouITSXE6N+87elKKaeNlayE6xDCzF/v49uZ6X9LKSYKjQf9ekJLATsic/nOQHhgZBOHGxLrSN/zJ5hhcDu7AI1IBVxI/iAV2xsPe6if0XWjm9fschx9sYv86v7gnJ4N4qRzjPVas7fNuLAj/P/S+CxutgII4m/+jgYEGJVDjaAk5VMZqf+9DFhnIO7UeHbDW9GWuA4cSHxT+plOQKw/Fv2aPc+qk9w4vp6/7WGH8EgoHSWzHnNkUWri+ryRClqXuf+clwoag1Kr93eIP3fLLruxe5h/hkJnAt/wgsaPmKdZSwzqVy2uCYnxW/UU3/dOiFWYDL9xVSkh4RatToutrIH/EnwCFqh0VVJZEXkD9jcXprMv0CemaQF+O4hQRmDEFnDjwjy03SIw2SM6YtYVxaaDu6mkc+O6x7FG3Hm0DPicn8YOFUkC6v0HwJEt8+YtQ=';const _IH='6990ea1055d92b39a71f7c0f1808cc2ce05d8b1337088cff3bca8ae473515fab';let _src;

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
