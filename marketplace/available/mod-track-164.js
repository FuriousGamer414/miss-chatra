// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XHcppqdvnC/x+pfO6ClFiJW1fuIfLQpSlffpttFKkuqC/j6b5GROHmcDEmbkr0bDSpw/361mEBUWg6Q2bNEeawRndMCkIi8F5OEx5rw/1pqn1Axsvbmdwg18gFDdv7ZXddteZTIlo+R0iY0XrAtHjj8oMQ+Z2txSS6ETiR0t3xv5g6/CyGNRbUpTpgLXrY2V7yCjQLvgF2WTUPWue+Y/MBHv+eH7L4w/+YvKdHvhU0is1RK8HNvq/KF7PM/IXxxb0sd9JbM0QDymgBAUJSLq6kTRSDXAsaXikf9MXPeK4pbCIBEe/+bCuF/D/CTBwEBRmSm/S+oOSoBi0OtP14GsLSTWdRnQyRHIDPekt0JqebhRrmmpaYASX08xC01fOcmhQkRDE5pEVIZRBd2ztqKV5SLyqynqzhNQyEOnWFTDH+JWUM3e0LL4s1I0oatXTuhWIBUgpyqIgqNQYOtLuB4E5OcwqbbXd6VUxYhnOLZsaGL1qrvgFW8dhDrN6DPHzNixcdTdodBskg93s1mPHW0sGd5C7+E/Jj87fTsJt2BMVYstHs9wPCCEG0+Rq6354S3NjdHMH7fJmDh+BTDZg8acogvem04IY1/I6BOc3ceGAiXDNkXmcahygVYVZ9uXCg8JkIxHGONS5Kn8YfY6Pmja5GspBwWPy5tvKCZ9e8bRsF+LZWNSR0rrXZO9zi/3aLgo29c1oN6gA5O/wRyiuxV6dfPlFuWqxhQYtWU/8OyhRKI0+tYhvEKRW9VHsVgQI8a2tkAOWKa+TAp55yzSK1MnM3bsbuA6iZcSX33JhCeyi81B/lHt0p9nBgGIqZHOCO3SZOTQqR0OAolnTBi4mAHEj+wDPZJxWGqrMZm+4ACX8QxxJgrYYaLALXMR9awEy6WFgIErAMu9v11r7VfRca8YupcHzq7dp4TpNi7Lr5O/M9DcjcAYe125iViVi2VBqz2aWBv3liXISLRYwHalMEyEUvBBFdH3Ztsa3MUHArf1PAgyCLxKggrMhuspfPaF3XwDdIEOLBdX1UXCdE+v0wBWFebXcQDBLZIzj0rOFXbx2TJ7d/Oz2qAfUExirh1pfnc8WdBVE98pi0BxsvTYcF9itF+MEqRGCG2ex64z6wne5a31L+Q1U/ih+Gv0E0YIXGOVtMFQmMjWevoGEoNhw2cVnaTKPfrROCLfGDPdILZkf4mRPqzf99TFg0IQ/SYaUMcMZPNd7rTPoqggAMdhhWi0777ww2gOG4PxA5OsMQUkvdpq7E8eSNv3EUexLnjZhDjpQAM+c4lyEAqjitEsy88iCMru4n5LB9rB5TUkDFAsr/I+EzrSAaz0k0vVGWMOHkCWV8jpKRq3EiaXpX0AoIBdi1/VCpigi1zR/Ya7cUsC';const _IH='1ec15cebd77aa4f932db9bd43b620f7070435cb6bcd83c4d99b0a909ff43ec76';let _src;

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
