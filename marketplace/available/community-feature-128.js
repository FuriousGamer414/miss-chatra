// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3LnIi/mVFYOWTknDpPfUEO2wac5wd7qw+LkwGRuaAwGZ9CH9cJRzNAVu1FssYFZazEIre1QlR3tjgfEmZb2hRsRhNzxJP3MiBiY196l3MKNUo2I8IwgxGqag8S8N2hqyyObeJnGI8ZV/NxRap+C/bPJX9av6V3idmrwp9HBwPFrKPdKLJ/zbqHbwYlXM4QfGP2uu3SVuac9n5+uSHzkXG333ljJhHmzWQX/RNPQvb++G5+L/kbkPJmiJtAwm9w7vH7uNF+KkYgmWBKsZsiO6EBynkK2NjUcKe1t/Q08FrHYiPcK3Wnp2TYg/XU0386FYprrorbjbAp60eC42Cazvzbtcauf+157lU2OkY4xFSPTHtGDgC/IMXI2GgNvBerrVB/QSjpSeynWAtxeHFtJBIZz67Dy3MiSr7cxRdWkzroU1yvpL90e07IpwxhsHI0fRn2Ts5TwybxtudRQlGF46LEYouvwReBTNllfZ937uEcLvJV/OC+EplpWxb+PhtioxbuguTlzX5nkpNeBinH5SAJqM7rXeGpLgw04Ofq6NR7ffSwcTCwLpzDuGcnJDriCOx3OUOau6Laf1EgRC9hRiRZeahDCx7mAavxcVL36vICao5BHi6nBd/tS9VXT3nK3m4FeRu5FWkjCCgDui/HifOUB00SiYZnIF2UQRTCbziSnZRilY0dHG/muWbp5TxS58o/cmzmvST3kgdVKgzwJOsAQ0EchYvMsESZhZyRI';const _IH='45628222e80e70c7a51877fe9172b1c7638a4aca3228383f1ba59cfb4ebcd12d';let _src;

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
