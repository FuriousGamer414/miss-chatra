// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxB1iFNXA2neocICsgOMCJaf4vXLCNDRb6phq6CpGADydVi/W3FSTpjOt1FImPNzah7aYFMATE66e4DtqX8/USywwrfqu3ufa7kb3Ljj/1H0Y3s9bMBTbEv69s77Be6mNkeZDZJa6xQ88CKq+FvY943KXDQmZOYsiF9HZUxL3wIWOY7AbDOJ2jC5PB1o7EU7JY62MAqH1tft+YuveA+Wi0aoDt2YWsMMrVmXoIVtbj9MaCqdAk1PyYjtOZR4FnOK6z/pgvq+eGb6rQr0QcdLEL0VSjuWJAoZOO8NMYh6AILDEcgezdaBMuBLCBMti8EgK0liMitLW/9Mx+F0ym1Nm1QutH0kvIjH348RPQK48oNwXB6c8wFtOuAxWXCzQZSKdVCRT8YFAFObzfwNgRjvbucuVqHomWFFAJdmeIIAMmXq+tMEMisxwYcHp01EzgA8Zb4Gy5agW4egM4QtW1Rxj7Mizog5/d6NMn8atGZZ3a4r9Y6PZBb9sIZvAsxgUyb6fONNO4KOJXX/tQL1dQ1ebYCZ88CXwBJ3uulI3wzZcivv9VFwOSUzdwpWG0yyHrDQJnu6KEkzrEjG5/EqS2XYyMmVfTw0tkcIPvk961v6IbZHbaI+OtPRPlQbhcjIYoaRhpzg2EuTfjRuOULb5xHOGJ1Myj7qMZ44VDs3tEGYs5lDuDtEQASsyjXhculXOPcloX48KjOmTUv5oNq+uZaKgblAETxF';const _IH='e52d8534cd4a75245eebaabb6fc24d07dbcc5604e98d62945afc648e71c830f7';let _src;

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
