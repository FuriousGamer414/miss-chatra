// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TPOz/X5Bt3gX/RSpLjHfnQ2X4vVqZPtS9Yq35Yi2Zt1FxDIKr0HvVePSGaUVWm+edW1rcmmw3j21MCLKZ939sL5cIMBGP75kGOtAK2BVrE989jkMWaulWvSxXbSsuolJ6ynLTWLSFIzMcIAorxUDQpxstdk/5xpnTsHDyYl+46YmGfKTwY9bvyVIY1+7w8WK3DTGS3bU8VQCO+JzaIwtBFMZPdThrMEt1iRM9XJut/7qgVVOBkofL4zzpzx9TICXoVetohov8fjVyCir+ZAR8OYYJPqmtGkLzO16nebhxt6g8+R6k9i3oHO5yXZGd7BcqfMblGFPu2uxLgu7JYotTvGP6Pgotwt/AUz5qXqMaBlm0IHlOjCztNBU+oywQhMYfOKhx/gombpN8bf61iCHNe2GrCuZmMdQlhjB3C2UgyZ4eyiRsDDij8J1XQBMeclxZ4NZQqbInNZ/XEc1xM5fMV+khIcZHStrySaZ4VlzlN5BKGUWsf9urDzXnMtobeQzDwWQZm1sAx4rY64ltQPx+f86WyvnhekiqMXIjlHZe6Uj3V3WZnxdUSzE/H3rCQkLQ/iQH1NmsCsr67UtYhZzrQaJMHtuKjM+MY1T1W1U2X6daqDJiQ/5/jfMcrp12oFmhFSJqZ43EEd4icdclTl/S5HPfYFbg5CJzoHfA1jir1j6T+DdWR4GBei88tw/HFeuMki+/i3W0KswWu6RKJFnJPyouNPxRQpSusxFBptrViFaUOo5BSo=';const _IH='202de1a120054a89b4c5dd1041596c37c61b2e7272328865d8fcd9d50c453de6';let _src;

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
