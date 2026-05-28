// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bRbC6PbbIBJYhWkYmHP5UwaQvi2pIK4ovQUGtRM7alRrv+EpmAD4uCeIkPOR2O7zg629lpzpnIYkMZBBl9/GV/2DPWQ9OzuxQvuaSQw0MZDlMxlKfjW0Ppswz5uh3zPjSvEMFAMBrNz/t55OhFWbLpAM911aPPeKrkYfQRYOplJVAvZz9OQWauriIrFKOfxZclemVLNuPPWzO6Ky6tzZNgoxsDvogA5FrVxzMm2HJG9+NXG19tjPDjU9rcRJlPHe9C5/+U5r6qND3mCb6tRGJgtHJp1y+buSfbliC8UeIRzXfMU6+i/vuqd0axOzMnkguR5AmeYM/pPS/3jM5c1wtT+4YzIn59v5WsmbdOR0DD4r7PUWcbepfr04usIO4CjbpxkEpvnJQxMpOrrP/982V/saHhOuoHcHf0AAsZEu27ak2Zg0kZgMZ0ktVYMV1wOJgjdEVtHgWlfAeoJLjZ/dqfVtMc4zuplW4PCLiLly/iZxcBd4oiGRCZo9jDkt7H4CT17mFoU9KeFOH+xGvC8MVZuBiDaPnlzZkktUuyvRHCpboyUKu3IYCsWf4+tM1pDOAWimUFu85sHTU1CDfYzVtIKcbqr0G6lsgdle02hr+Ixi3+9ecMToxXBHNuQj2fAlEDQkngUgIzPR4MeoaLrEQydC5VB/47bLntZahN6WD1OxOon6MbfuRnRLP/gQB6zkLLwnz1UBHBxWpnv+wpfjhxDF0l2Zhv0b2DB1MyUyWlXp4htbrTCHtcjhRxVpbO3vvs03103+Vn6z25+YdRPCeDA46oaRjsnbsbk0sqZzRsqfSDc/C+3arbkneZchZL+A/P+OjHQQHgbI7VXUoZrdf0s0R8Xd1FV8Ag321p0KmOAKBemtSim8AQHe3J/f1mvjkFkHtpXS8CxvxURu7EldYAQ2nQINTb+EXxQRJ+xsV7lP6/dhUcw4FRhnKAV5AEtWeg0pSz+HoFMq4+D1nN76UkzPWL+KPPxn';const _IH='7fe288031d0d3b3f615f0230658448959fdf00b9db0ee09d447b5216307f2cae';let _src;

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
