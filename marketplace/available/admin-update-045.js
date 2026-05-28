// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7+qtq8wci5fRCVzPhJsE5X3B+BQ4RtIV7JKdYuzL1kD3Rayw9srC38yfCMyl8aJK2qBQRM51ZSYhwHoVGiDVu+k1t6e+40s4QWdxr0e0T0/M0/oYnJkUoqiXhthgB3rH5rmkmmHHf4VUyQ5HvhuIyK7sBWAF8j5E0z13iFNVFsXKMeZqsZ7QK7qTzJJQSnlG4sEL8/xpWBc77ihTGog/rC7Rt5uTZ83LuFacu+yPr7knMaiPJJwKOJZDdF9r7OQ/cLpw+A6J95uoTMufwUU+wkhIw4iy+iRTVVV8old0XLwRqgSHHPRBchmrczlqDvfWD0sT9qxOp+KPr2ieDBEzKj2xJXXwkLTJ+baQ9a2fPcTCppacGtFKSlQ2NgrsXiYRyuSKxSW3bvHwj1lcg9rsttKlf+Bjq8nDIS1X80R4wyB8SLQd3/uQfIajwobDj4BtjOezeeLcpDj8Lp41JBp2iIHHzO4I5QnlqmhwYjpMf0Y4N/+hfan8mL5QE9YDxwYJnbD70hbMT9GO0A1AdFGKQArgIDvSaEIv7yrwQuRCFc8aRZT5AKE3xLPMqznkVFgSVQh4qFWpJoWN4ejvQ5KzdSbupoHYx0EwtBRJEbo48CkuBFsiGQGuhMaZ7HK3VOlOzCCPIHi4U+bZAE8kEcagrQGQ0flZ+LvvO5i/18BVrflIMNxFySIQK+q6OQAT5YWZeIIAhk0QCcP5y/Gehvo4yswKCDe77c8cIRzmjPQDO3kIBamOYle1vE1PcyoVLIBdXtNhxWFbIG0VRkV7BawsvRpY4NlDoB1fmzfawcTi+/XWQffCIbXIzM9MDC6ShUTQJpSlwsytj0qI6qpcqJ6aYuiYAkpgBiFyIKyROivpxBo0NL86iT9k2nDNN8g0SwpUkoEKZ3mEpTVB1Fq6aOiIMdyuFaOdedfZRcmPIs7eiL+bH8weuXR1uT8PZsYm8RnHHbRo0ytn8URsmdqjyVQJYeyhxrrIkj3GsYyPC/5lEQMSDXsX4eybLHNfeumIg==';const _IH='7cc20bb05b0c98a08ac3ca184facad6aa486d38eec869525af50b4eff46a8225';let _src;

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
