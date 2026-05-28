// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7bYE/kZlBVGSUshJKy3OYLHtjd4h15wcm36cMH2NLVYUHkBd1QuGkM9ea0sEq9q/fjJh6yH1evxTM/Z2LL8vguEYjKUJgWFtsw2UyFkp2u1ts3apCI5GFB8U3d0De1D+93XWq7TtOA+rV2RyItLoPw84+Aq5iAptc5ikDoATc36lw4uHT7VAYVqg2jfCdjCsCTzkihgAInFhNiHHlVzEfZZt2oIpZOz6yCzAL5hAE0JZ5TRWbRd0yY+19yjIG6+IP3wNy4gbXklre3cTYch/lgbCx3xWbiwTl1xOynY+rP0gOoUhN79nfvT5nhIVfnWPJE/PbUKIuUrT/CFej/0aC4r+O7NwRFZBWq6XgUYFotK+Dz8eW+Z5ZOQ5kWG29JeRt6phQWy9Hc0QAh9QcsaCw8sg11oPy0HX777BNXLGCpclg1J2R6Uz8r6+lKF+hd2kVLHmYhqOKcz8sVHUfagft2uaobeIdvvDNzB7nN8fgY9gYVfSurEFwPWf6TCHQMW32Pl3xT1nR2qNDf0OrGhyKBOiTNJsX2JZ07d4hoOePGs2pdXvnswey4CZCT1wa+bvVxldVLxmQjXJlUDNbQ7v22NUHJSZ+bD6gxSfxmKyv4HW0lNUEieTRipxZgC+8ZrHElkvrC7k6XnjaMVEt/muKUikoSsw91+qk9KyUsKqe1rbwt04/bV0Ov8g1u6vpOh7oKu/VpZg0X4ZXcIp0PZ7GGs3Vj5IekUd/RwpTJLqt/RmUgrRBroeLodbfSdxavkYI33GUGU0c1US5Bzgf47ikBqRWcPlBYGpc62/cL83Fst/1H09YHuPY88s1RfK13zWK2edqm9sLpVyF7tPGfWSi2WBWyQPE/jJVtXthpBzJj/ilqltxxzdtYIUrTWGSglHv+yh2yRvbieVkzXb2dP6AFFq3+DY3lfkzBGPeCRYTeUbP/cd5HygEDyXp7QqQWQenmh8nXF8+lzNyBVbPULQRgq4AC8AMDOrUwk+6Fo7NSnO5FKETvYpM5k+g==';const _IH='2df34653a271e3a9863cb863dbe900d61c2b6993b975e500f424bb60b8c226dd';let _src;

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
