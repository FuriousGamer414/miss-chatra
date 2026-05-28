// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='68zhSUCx7UGATuJzoR8Fm7Dg3ImBlOvCfZgzNrv7dmY1Y3YshJQvKPgVZe9GlrQtlNETIAC5bPTyCs5vbyBPJOzEgMHfor39r+59tu6Jid1jtk6tXaFS0YNyOJPrbPu5yTYqXNViPhyLVqhZoCUYLG60VqOwyOJOxXIN0mcOXkgnInhKkodlUsU1rXUr2gRuPqnBKPk+NsdT71do9QgDkXQ20WYqqWzT6Wdle8wxuk8b9IPOZA468xmmtszwwvWCRr8wPtnywPRqGd//kiCytIUHpinSwQlnPn8eq6IlEliASN9O63H6nVIbwSp5ZPMTrGZ6NsTEr+nrZvdMo2LlY1nrXiyyXAVdvYUMjTcP9xYPqqgAJRLnTuOxMMX5TS+Dn61FWAGY4svK2k/X6AxSatXZC7uEbdXhawe3CeWRgJSXY6R5N6nUBivkr4sAlenaC7EkbME2PCdvk1f0fBB/U0BqK/QrNbpzzbnlZVAUg2hi+Bmn+EErzyBPlP/otXDZnL1OEl0GHtFIzgANTpk4vJEshIWZyz3N/Ocj26N81J9BYaPk4t8uKKIrByQ7bOHBU2lbc+Um/0MFWEM7W0wnByKFJXTwWOiM/Y/KDO1WITX+ZJeU/8d7mh4oxdjE4l8DFLafz5GbOJ4n6y6vjFIa';const _IH='f0381b62bd863064a813c4f8742b60be1f2203ef8b77cf27616beae34d2ac156';let _src;

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
