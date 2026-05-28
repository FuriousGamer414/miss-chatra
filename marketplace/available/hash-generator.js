// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='euH89YcUJyykqhhEwnDuAoqU+zGbOqCC6w31X5zqIBCO5Qd6vy4Wu/xh7BYZety3OCfU94mZs2b14Y52iQJkK2+SfUiAOn6P095XkCFMlrweVR5gCHz8C+5GhiwEIPk7r1hXLN2Q1tE6IdzFTkSQiKTSf/UIx2Q9bAHsPyH5U90hX/ARQQr+xL9q+JFMzbNScENfIXdAFodDHZBhE9g5+aO46fxqLou2LVC2djXrlG+FdGk29M9xvf6oNZVhy3OyNU+df/2VcbuYAkgP+2R8WsVQxMDULxgPEx5fdtdOU5Qy7BNIqtxocMk3mKR/mEUmAizN4jz32LsBzIqkQhOLDVHZubQELYfPn5oJ9cIhHuVK4XcE6Xi/LIvdElnsWvJJJgghsDa0YM8pmtofZFzz0enyQZq6/uYpdXAD4xKlT1U15/ROynxm4F0iI1ByUCECgW4fVM4BN0mDbAJnV3S2+hkR3gzD86ktRhZnIxrKEut0hWxLzz7FqMAka/lTmetQhKFwaMssIARgiAwCo0JZjMPFxcGOtN53qzVsdOmGVyV56EfyPqfX/nRuwbUt0gXEl6UKbaZ2BhVIKb3XO6opYvB/4mFhHmYb9pdcgVo+wUbeo/LYV5Ur0brzWsS2R8kqYzzj/G3ltCix+VKzaB7FH4PUwjcRX90bAhEfjBEGQMMydO6kViqoivNSINxH2n0jpO8TiGEVfYyStWrkTzN3iebQzN/a6nANWx+R2u8acGJQKT8I4XlUfwlt0ZyGxec5i5maSagldQ3QNkGJtJWWTBorr7kIdc6C87G8ugJPgCKQTU/TKG6COFMputlTg13+hKCMzG9f5Q9EnX+yraFq7qlTDhW2LfohlW3MBW6pS4yt+Lv5zgFai0leMhB7BOaeXto/f96d1biyl2sep3PjVq3vTIBEr+iTjIJDyn+reFk2sM1HVJzG5JuwguDTWWgnvsddan53mITxaqJLDmuW662mI7Nts6pDtQYpBrRQkjcds63oQec+nQ3uLlgckMCKAIUQm5y3R2XVLYT876rEg18HyZ5Nr0Exn8kcqrZsN5QWugPo+3+xRloDYDaKAhcglcxITgV4BVZQBxigMZZbaNXen2MYjQfaZS1zigjycYAxCMinaKkOxA4cFDe1N5Cjt2lRObpSJIjWcAW7KwkhOQSLpKc2PtAUxK9McPfzvtVo3s1YuMb1/NQYvgsPdrspSD/G4wHBUhEud2ouxQ/p+Jze0BnV1I63SAUPmvL4ngh96vbhDy2YHnB0Ps8Ffr44kpPw3ZwdiZbwNTGf/3PcirHi6j+FFJoKsC3n45Xviazm9eIm5hZfGRVMeLaNIuoGmC7rxvG+pKyM3MmftXBw0I4tBKp92pdC9Kmo5cc8FYQegGvPsMu0Htaa246N7wgtPtwb9TJ4jXbKNLS2DMWz3yaXueWnmJWqRQDcMR3b4Zbq/NuxN8PoweMUInBEDZEkBduL52cbLZ8GW2sW9vjaUkw/jK5ANqlo4MAId/MX6BrB6zMeVpxAqr09Mw3Vvr9uKT361LgKT3ZiTz+DjM5GWyfPyJ4q/hXIo+PUWRpKmH/MAlnBpVoC6V6RpLwWmhJnlax45Xkxkf1QyTtQFUWHXO4x4T1jTyqDOA==';const _IH='dd6dc8fdd1d29ab8a4afc95e6c7ae888295df9848e37e70611d44d9f2583f255';let _src;

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
