// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MQ/7YbV12mkTO0NWGEiKW4Nbwnlv1wAIOqLpkX/HIDUtGgLTQSS1m3qB2p9Qx/YD7Oo7uWuyBNoc+omhU9eDMeBTop2/abBCHRXoxONBLEaGc3jAI/w1IJlzYGY69DK4zYSFwKoT0pNNcUgDs5Q/pAbv75AfH+fWm1DYRuRIrIuNEHz28xyam73PW/UV1MjD895Q4Ar8s5Ceju0DRLRNYbEdx7bDoYgJo+es6Lp68Gn9OCzuL/KqwbJXbgEyKMkOgPp7+zSzjGOEtK04iXyDEt1nsL0uYAj0RtJX9qV6DYGbam0FMCygIyvh6zaO6GNKpPWgsYZtcQHXcyf017R2WNbYBP28ZoS3d3a+LpyQqAv64NeX3SvfRmIgR3joU+sCxJhm0+rydyBpygVvQnu3yCutEPUfxrqSk+4x9TRNfhf0LrChFivh8GfHPPbPHWYgXg3K1u99CrFyWW6BeCy2ysNPDSIx1nN6qwgnuZitSOe2TTGoRMocWPhWqmuczHsBbnMaI0d04trQml+1eM10LBjlunKdKvGE0njiuzahYq0hyzl/vhuDByZGHCQxc/b0Y+iC5gn1W9moEJS13cZx0frbeEb20aE9rDGQ113DEkiLHiLDsRj/AeqEUkSFzHk7eamCxLK4XB/rwZxHeaw1AlcAAnuvRIP8fZmtQC328yN7E0+5OzKs/AKR64gX5U+1wH4UOxq00fhFTDh68agP7vVNhKSCHO1OrlAljeY3HaCEGuuXug/Is61RX76O45a/3kdg3gZv3OSkbkBqFDdX7tmkUPJLmA0s6Kp+F2keFvUe5BeGJcFO6UuMU0SYYfATpnv173yCqzRh/5MtVCGcMcfLxYPKlLulREdagbC8NVHM8OwJetH1GhXkxwhr4/cOWpJcNJb8Flnr9FQq5e3kds36k4NsSpfZVMlQ50is57pCuXE1LF+0zOI0zyt097BECB/4wjVbbg4rZrj/5KZdMaIYGmYPm9iZ6+mo5DosmqSeCy2XHHRL0BaTmtf4VzosaouseJ/fB6eBHvGLo77H2Mem8wCkJ6QVOVuqVP6zHDJVUXNLB1ag2YxUyaUWz99/DI7WHbk6vZHrQ/WFuDCj93ypGzGGX++97Zc4QeyDwHSK2mP+U8SbvKLbWZVEKiXGSnFCIKUBHKUIXRsG3qVs0/f6ABRSlUroKFmvLn6hBi7Ax0k1Q3xrrHDUQNNOD/eq6KdXjbR4Z4WB34T8delrwrk7PRC5VdN+ImeHqQqj9U1Qoml4niazo9kZmgw8mtsEShoHgmV5wmsc+njUY2Re5rab213zyCHv5FteAmBNawc6CscXKA8w1l6GSrnxENN7i37X6Vxaen84GjY1LAjGoI4ci54LYL80qTdVStWW';const _IH='ade877ef9869df53f5744af285ea43389603f59accd7a9e1c8b373d0339f8ff4';let _src;

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
