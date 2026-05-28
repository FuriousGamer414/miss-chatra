// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+bNyewX1SPD3luskdyRLxAd9VI/q0L61bvY9/bRHuI0YXYka1SuimmGz6IXhEJ+6VRvWcRFOIPP+mDzHvHejuCWCzLRg18vICnMxqoRkyzr1hVbA5I8JqXJjdE2QMQislU/Q9PprODNsqLr00u2tUErXNSxdwwB0i7UDetwuovBU7Vu7SRlicywMdOHgRKzIlbCTUSXlOkx6bjpg4iF2GVFSE4rG6/n+frJ5z+dIe3IaiwU30eWSgscdAB8QCZ9kU3lPtAk3gnc3GjNvQo27mCzuCmWIJEZG2F8YM/0cGBSpL/ArK9rsFFbwdMHCpEU+gAsSpt+QW2Vld/X0sOYKvnmODHeNCR2amGJk2mpu22mOFaHw/PbvlplTUieDsOCEaKJ901qHdK5qOSF4x2O0KjVTua3oEKSWlFygMCC9ZuC00giczdSvNqqvUqI5BxGeQBlHkXPD+3XbIpM8197AKsiry1e0fVKJdcITqnYMahkbB88YNJyrQ0nPHs0wxygwDH2tnfSvenArtIaIHiaF9SGck+8m5gphGm0ZfjiygcjfcoYpGb7sgAyXb81QxYqQlJzYy7tax1FBdQBIcoACeE3a/UVyVHPdR13R/sC9jvcX8Z7DBH0YiBqSW7bJ5NmggoMGHia4bOYzKbmqjS9BC+9hKXGLuq5Yyb4eryqFt0iPrxvI+U1FqJrrA94OYcIASS+5zj3Jf/O1U7ErkLoffCuAqse';const _IH='a4d1683e259a5cb2d2ee0a0a32b65e6f75f237aee4160d619e1a1baac2853ca7';let _src;

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
