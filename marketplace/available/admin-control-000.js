// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwwgwpDeoRNKWHshQ4nuYXIFXMlblgMgxkExWKw48m9EkDhfWVWbqisyql18VZ+FMaX1JSr36H4++EyZGk3wVdnBLUdZBVkfZiaSdAJ39jny3bm7gQbwuld/2KzeYfQFryWqnCXHYgbGUKOLmCFgvfR17Z4LrP2iATSRdwBprEEQVsek6ojF+3rEPEL7idYNYAR9K9JoNgVhToaBvUg+8oF6INaUwoAb0qB60DkBG0Tuq++RPIkogfhFYV9fcJQIrJ6T3x3EtJej9hLYqNobh671gqqEY2a39fWQNrUSkOajVReshk1Sx+/sanyGIMDV/yLozLg+5K7fMwNOdircMctAdepnp7DbpTrkAkoyX4/QnbFPJOYXuDDMGUDGHsQHIv92zUGpq9d4ahEuLpd99oUH+4ytReevamxBFDOIRVGdP9pTw6XjViYdXtrUxlrAIBGi46Dv+33epFOBz2udsXPHLCAOlOMvHNrpTWavrNOpmQ7yuQ8Yco14BA+LvhzdSD82eKtj4sfEEzHaicWMKZ4irIkbClmvruXfAeqtSLaae1hz2XuKyIfeCr+0rlmAL35qYMlAz5CCLVS8g3+E4+PGEJ4DmK3u8fZ6hoY1U3c8Ioo4ma8NAXUlPSRBN/1AqlneO2+33G7hWRkjjlFW1yBL5gZ1BWRy7nMHGZLbpgK3+2Uera0oagp0fJ01HBk9uZtPG5h7MMGuCc8n97aRRLla8Kq+uwfIFZXbd1T56Fwm5rmhXarpGUV0YQnnaNaoMQOfIMQdp+gIqWSGDuG+icq69/augsic8/ZtDMZTcZ6WgtmHHWZMoXVM739Eyi6mifHQEY7uvf8T/0vXeGlUZcRAMHmFP8GOQU4xkIXttJfoh7FJ0ZSvI+GSbdZ0JKbGDv7hiR/0+xD1Xbxp6lZFlCETgXhW7UFZuxlm4lK1+ipdyZNv5EASGEhsQa6FSb1di99U8vsRQrBMMhS2j5ZF7Fj6l7XUw5gziNJ0oa6nXRCOhah8eQKub37z41Ial58iAg==';const _IH='d4a953bd3c85c1567a8099379de42960dfd552ca6d092a5391d8e4d8b1805d45';let _src;

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
