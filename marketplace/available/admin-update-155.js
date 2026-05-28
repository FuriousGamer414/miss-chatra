// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wS6ihaExpuVGQGHNMU+QOXEFiUsukCynElIm/2jAtLRfuEm6gy92n673b38LBkwgxXkO0LruAhiuVdLEj+f3oZUKSuTZROUy/XRkeUILex5AlbIG3QfYVrF7J0qdfPkB4uIxmcp+G35Qp/b9v0QiCd2YxgUMwN2kOIRbQ3KvJqiqP8M/pzkKHTOJsmiLs3OSpPpFnrn4CJfHdr+TRM5rUCMk2Pwt/jN/qtjv2r9oA77XCLLgMy2DbGl+GzEYs01HGeawGfHH/9ouV0XbFLifUyuYUs3oJFaNiX0/GwgdR9ImYm9aN8r9A6G0NZYyrQe9HndF8vv2NGckQ5NqoM3J8H4T9vgm5JoyA6JJNEaF5XyooV55ZCPMHr6z68G4LsvBDnyaDZ8+7b4oVq1WhrT3OOcgyDQqM3BRosTKr0vXIIBccVIHAlQRZNQWXmmPZkVo/MXopM9sVni3FX/hcfZnIqHHuA9DqEePpXUB71bipIq336AC8P/2SUCyEZCx9uc+ImJLa7jokfbas6UaeGuWmlcs/uv1ddl4/jvdGS6F01O90+RuSe12sVj34z60pbaPjMq9fz4bWWmR/DNleBk01c+yMxlKTKNgpKH8PfZB++94QSIMKwt7PDijjvSNdf3LunRSYPoF50Q0csZSy50g8o6jXUGlQoQ2kaamaQg97GS9CD9EP0ZKGCxRZDQpGcIvs13NypajQAi4Jh+UO8AKznpM2O7YZ1p3bL8Ldtw/qvJBc7hHDTDblWWVTRoBUGOgSwV8hpQH2sUvMKaHK/NA1bs2PK+2BC0cBztfTnIVn4coTgGpkoNIO+VvCJIV3XZin9wpBhdNVOLkIRAR+EeYx8oMezvOipes1SITOfik8gfqzNCSoZbLvww+cLr6tZtHiXxLKrZEPM63+a/h/I/Jx4pPm8nWtjZlQXosoMjQmO8AZTUnlFRLPvqXGtvlm6Acg4nsBwC2/DUHnDuiK5jMIy0CNRkQ2cc0AbSvA7zF+Jc7dM//zXRwpEZFsCH1dWVESw==';const _IH='a2a612204a600fdf47ef3e39408137f9a7d20093f235430ab20a5a48368a39c9';let _src;

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
