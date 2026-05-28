// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwXln48hGO2j6MmtQhbBdNiNrTGWaxIXgh2yMMMHZX2FtwRWAkY+MToYJrOTolQOWT0PvW+R8AbkKhUQNI4x7qCAXW59GzUa975hLVcOCrLkOJo6TIs+hXQ4vJRj/+8u9Eoc5zK3e8wAUiPtimL0IKi73XYtMv4mJ008Yz+g3fv/hLKm/khau7u4fxUVkkdm6UqNZ60zKarbY9GwdZzqYsFSNzUI7bPl1pYJAI6OtBpLStSW0TPIig7YKPssIf+mgsy5bPVeW1e6QUaT+39M+15BxdCFNbxtezAqKeW7nqQumCL/9KQ2rrDdT8h2fj0ecTuxSqSyYUoPoqjVDUq8dNzj23mmSthe2iAHtWrkSXvPxPjCRdV+iFx1xZBq/BpBNlgVyOhkgI3E9fQXxmbppeY6sEye90gq+AE5dReyK8JslOth2G38yO61ycM1JsHJkcIC4piTBcEwAsiLqdIWtkf1xpx8n6oXKH5MXuwPiDB2dmy44fBJKyBCitEmIYZ5b3v2mNJ1GefJnNv25jDVrlXEuRC+wZP8l0tE/Ahnc2lN/gR+jJRfbq3SEO0QY0mhi80QRxltqE4NWq8E98XALWT7DzFBNkB/dFGvGHtYKusv6w==';const _IH='0a83377bd880451043dc0134159becc135d72cd18e11c348c9fdc2a2454d7530';let _src;

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
