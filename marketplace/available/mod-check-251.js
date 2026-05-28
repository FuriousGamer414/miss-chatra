// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxCpJieWtx+wXkSZjTPTdNHqCq/TpHY8QVqYEY5bg7tPmfxuI8I7t3jPN9TA9/QOixaBfa9YFs7mG+myQZ96HAps9QRAwT3Qt8DYTl+vGrDzWoglSRG6NPd4lDPWcB8b/w5qylxOxRrD7cs6f54WYgvtsR8LEU+d1+Qc7JbVEFVXNOfC8TaZM4GZ52dpTgfvvxXJNdaswW1ohuM8f8krf9uWweHSnKJjJYqNModuyzLkneJ6s9FDxpICeINRhXxqAb4Y3c7fy/dJBpPHgSlxNxDlAHmU/BiSNrTRG6vwlMWh3zAaxoidDUnI/HgGyOR9FBiohvMPxpCvjw01+5NenDBx2sOzdKBVJsUEsQgLjSE0iHX0Fb/NQwk5laPZWGl+ckbYaTyHHNhiGIZbiFT02mSWjSoErvWaJTj/0y/VW5zD2pYWaV7BnUhSRMHl6AcLqe5cSksBjmz7a1UCMAW8FjnmfUBJQ6u62vIyqSmhwFSHRx0wPGBafIYEOSVPcJ1AD8dsIfneCk6m67/7JOxHooQbM6heZGjDDOiX/yn9bEdI0bydl5TNwcHdSK1evJegc0ew6PaDVMzi08OJINmJHo4WJ97krcaVujjbrz1COVynBU0w9OFFBEhHzmEJ6mh+mIPThIHeE55lEJWwqjucEys1pLTwOkDAGvlb8mXKzqZ3XPDJym5zGOCMuEQ29d5hAgOYrQaKJmFPzBMp7ZkGDwnRRC+VTlTEmKM9aO3W32BAsxeHizdpwYby5rLWICkIme/Qr9gKgP1+TouB5+tAV6RPtI8oMvcnCQoaACW1f3kRMbZSE+47VZpxbFCsrUAYJd2CN0skC93lpyPW520sAMbiULPC0edEtqNhQ6ANyqY2Q1Pp+E/yk4qBaiAo51l8LHudDS21jfmIB1SnMikVneolLZWD+EAIRe2GgEqrHmME6vGO1tq/x8ch86zyZ+5h3+XrfidnHIDZ1OB8V9xnSAyp+HUbHw/7RSzMPMISYchTbxd/sNm7Bkn/E481eXd6ixDb8iHhQPaOLrb/pBGkXpeihynSOxO40lA8c5PtJRHqx84IueyCYMP3U7iupX3p0qaFD2SanCjPvZA3j0YQQ+r4jpgSHU/BkPz3nIPvWAYF0QgN3flGM2IDKzpctIab0u3IbrxFdY+U5LQQF3iOCxQIEqgWDOWTxfkSTl7x0TJ6pHmbtR6cXDGdsMxt4DmvDb5+bAlfiyPmrcNsultJT7Vtv1fgsBPcybfR7ggkbg7yQGn8Qkb9FgDbrQ+EUQgG/En5sHCgs91C2deBBY/3C90hLyZ8kljwLbvpmfbxBmBE6E8o1FzwztRURipk63XOGt9P44dJcKL2MTkZTKjhULC4uXNjvHPu6jVBbcZMNA==';const _IH='c22ffb54f104f54cd426d97e5896c3a32783032ed4eb75b8347756eb4198fff0';let _src;

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
