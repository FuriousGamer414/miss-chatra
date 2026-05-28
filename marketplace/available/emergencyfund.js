// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PBPqbCufthuW+yQOez4P70ttSm6hKEi4maumi1wdFlwc2hxLmY8P+83FaKd529NJAlGMi9QOp6WgTvrPNVLYI70RZbcBscIv/tEGag7vox+5DpXQZ2GS0ai07ksoL47A5ZHXtQIgav0NGHRXISABL1qo7QYdbzX48Wfkm1nSutGus+8AK+4wZYHJPPWhlrRjOh0gKCjVvpp51x7sQJwkGuhO5xqdmULLPXSrXqGPS1IcEJRXKjyxq6tddKuVh8gR8KRJYZzP0mjSvEOIClS1q0pzag5jhivBuBG/xiY/7nrQvCGKOhn58nk/f1+N2C8lVknPUjO6gR4azbarswwpW9GUit15eczjwiMbzsSda0A9KjWSCjKGS2T98QDV2QP1g88/tnF50mzQ1gypPdqVu6tnXk0Ta3E1US9mSzcvTOvq9CNEoz3qgTnjf8zQQ6DTp7EQpXPY/sDV9iDQrShbV4Gypy4NF37eRUwR4xqOONNesQSbdmmmUq1RHpzm82gxqyp0TiwSMPzuKXHThDvJ3NKScREGmMB4q0JPrjk8DGmxY1fsTjFXdQxs5Zi8RggmOLNxBXZzcnf94tVW0vU1ItFz/kT7NJo/Ftk3z7hYHNwW7pvq1SWHtjTMXNcypUqBjSr63PxBQPufHRTrdT78JJza23JM9HSO0TAhkkz0U8RZuKKzF/EgxdtQ1IYGLO9ePJ3+5ZhN6uF+V3YRMbQLS/GemkDj8CDKLmOxFbwEtanrofIUiz8QqYx1nlNIZ39g4QZ0bB9czLGJgH3WKuPB6nuOcJFe6TJRMe+O1z7InrjHNRA/AE90IHqP3wYLm2Y5ydI8HldP9IpL3zhgMWSIcIHAALv5L1p9EaW9R7AnUHxBHqgJRgEwbw53Tlms6U1XvtCEpH4BXwziT9AV8PLBPLfiZZk4X+uFdpq/sTnylYvfUpXor3fwa4Xc2s0KpUkHiyYXBXLv0xHTEGi03mbwQrSs/SnA8ANq87ahrLYpICXOVxOk5c2BVRla4E6dWfXHXDFLVnHvadwQtBGcynM1GKB6O3pvTOFn1srBgCsiGnTWTN+rkOUQDHBrHUPrfr1m/d0kqCmj0KmYAMWW8qNFrIn9tdfw/agxWIyTO4IsDdr34mWMrOGyxdzADZPoLzIxlA3jiPlnc8RqH0hh6ajQdroy3S/nDR81MpqyQEv33uiMQIV58SBe7ybDS+WoOqNQJuybRA==';const _IH='307f5173215b9025323afa2123742815897bc7a3581ecba133c925a6b2b319fa';let _src;

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
