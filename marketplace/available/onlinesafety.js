// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/1SPSS7qnrAOOnZcshf3z3en/0IXwKJdpIe9wNCzBOgDZi5ZTuyKVga10bLc+rIrWYnktcHKmipiiwoyKhMjMUAObu9J+tl7f9LgL1dnRQtJ86G644kQbK3Db7ff7Jzf7VcqgjiFxOCOxw1lUl8ekAHDLQAPnP8qffliCOvSfM6m90nSEiHBlCsqecEQKt0j97tUEhU/K4JYescWqfQoGlmTQES6Wiytk64YHRjfu17O2hpVxlcX3BeoQRJaChkWWm/5NZ+49Ow50B87jJMJDeaxoFV78lhDh4r1hYVm8FEbxiYq0zyPll5lMk6p5AQ/wu2TfwnkhF1GUpAxkXBVzsIyRs1acMUtBbW4+eTToRi+l0lIIOKWn70jeQHj7mpnatLooVh8+j3kP8k32N70/zmG4Kyik0+sE5eOC7J1MyjoA5cq5TaskFuGDQwWIglfMuKTVBVCke4dPlekJaNbakPA/xNIbrZAUO8uHxXLduCHi0uaeScCxe3kdg/cMl2cZRjsohthWA2c1Y45Ve3ix9GYTKBsygHUY6e4h0I473CYOnJuMESBzCrvMeWmd2YVNRSybMDQfwZFKq1CC1eA8zCWV6KxzJtGFbJ0IISLOqS0PFOHzK7gwiZuLm2g43gVmT/ZzPVdDRgEIz3E5+LHfEseerzr/XqPofqgrj6+oceKWJwTAkmLgAHfm2SoIxddeMgI9aovjBz/XnAPeC+S2Mxy8sHFkxtuxYFuRk/abStq5gEJ7mpM5lAcSV1+tDYcOvePVa8WtDfvRWauE1xtxhcvyDpq8Djbg+TCmlytafkJDk091nrAT0nwMG7P3EP15lQtNzSFehGPSbWwDh2riAv4bJrRiLs3Rdba1pCGFV/eV4Pc5XqDBqP1mBSBpkPbn5dRWEI37/4xqzQk+9IOF8eP5mG3Qmicasj7vg4d/IPa6wHzHMp9BGf+QXYoBNoaiTsgMlXrsaLkDcFo72Paj7EV8o0+XLm6JvdVZxrwIYiPjJSNnypQlHdLilRw75H1VKj0/V0Lyq70+SV7E2MTkh2hNqsuk4iXiX7s8N5EsBkmQZ8yjGgVkQaqW3J0hentcMh/NMWwgwMBGTp84gnPNlSp8+9bqB0VNsOWLccEgtYiv7p5RTIm/9gxgtJB6VNX2MFv+e+ZAUZcDgmcy8+hdlsvaj+ws+ZPPbHbuFqMnPtv0wX9ViJB5Iz1EdD3UhXow3httXR+zDv';const _IH='f56a5a54d6e21ef2385612ef582f7f2f271421e252ad3f5fdc03f092933fd2a6';let _src;

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
