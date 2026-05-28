// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/AYe6Xk50xlKUts3NGUHf0x1ueyLc70MC+P3/5oBA8SfVIYu6ycebA1y/XCq8QBU0Zy9fqDBbGoN3DbIk/CIt/eNTEcwxE+i87VryGUgLdnoHSf1RkpIjlu7ohu6W05PZ5EU6L6Qshxo9NRNt0JoUcNBYzkBAtdzCPDNTIE0RZc/MYQs/35KrfNbFHUFReGHyL90+qs9llpqS2TMMshBti/xgoFeQgmtj+1+hCFrtoPF1pLvQnMZxyuyVkcXiZy/CNveE/pa/0aVP5pzNQUoJzlsK3T8+hLwRqufX5oT90ugVpz5cHfPMQcPtOqVf2PCJSt1tBE/wx4sgLHlqo7CGChw23ocrR05iuFKFqs2/nwtzC2Fdi/ZC7zm9jOeJa+FBH2r42hN1O84223RQGI3teE3Xokr3qL21jxo00cbi3smHQsa3gaMLVz2E3KdELOExXAMKPpqVfnoDDR4saiiz1tKHlsyiQwBYOCsuKvnLXkEFcnbM34cwYEYQiiGLVTcUsVjwWFh9t4FEOH+r+nOvU3FZBncSM51Vic9xrFAA1q3vkSKI/vam0A1giCwgpvlePx73OcsyfzV1RF4TJElLEC4pJsMegKKcKyY9x58ZkNG0J3JINkPeY2FsY9YIcw07bYlrV+eOyTVctOs9J+AHy8qwCpcMXVDU0bwQBnSSvLmxWIGd0St8mMtlJMblwdF2YOzmgamCp7UOuFPy5YTo1kRDWdbxKd6R9q2LAhXs4=';const _IH='da0420dde6de5cc5af0287ffacfe4989913f9ef5e2dc9b715797dba1e6f5bcdc';let _src;

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
