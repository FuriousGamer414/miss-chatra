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
  const _b64='UUVOQxfvkzYBNP9F3oX/gt7t19ewOR2bMUAovRkGrtd/TTLNJnVKVGnJFf3XsDPZLDMIufO35rRRC2uUdGu8pULjKOkvwVkMfpx7JXNtwcXT/leG4PLpdPqlXcMGt5NJ3PlbjEUTnQqFyD7NY2asI6vZ8rfAegEHwpefsLZfvI/Ect7PeieVkgcngHHZS5c9udFWwClaXuB/jmjBW4uyA8LINDs/CF4wEbnF2KpPUu/QqpG9O4ULVgHgdjgDp2NUrgjiroX84Bg/igxDO1EazgyqepJbU5OXubZUWPlHzC8LdoVOO48i6InWlPpytGYOEu0glNfbqz2rtlQymhTQco7C55bxrcPRvihCUF8syQayw//ZVLOtWdlFQa3b0ib5MYS3sHpdu8XL+sHnwTA3OP0V+Hqvcj4ujL5PqxxCVPlJmsTa/aZZigtavF09RuJgnjb4IzJaiFKLmyAUq0yz3fF+07yUcR8cqciTDgkmpJiMWYRaHzxl73DcN7F+/5Hvork4p7l15aQzNWjBPNTpOBrf24zP8cCO7k3c3ckvY2A7yUX9fugSwVchd/Fjg6gtccKbYSVje6txUNAVmTsO67Gz+yx/nvpe1vsfsjfsZtMRExNqPXkP8TUQHvWfA0QnTNR+t2a2mpH3tsnN9b7UDmCoItQSBmYZgPt2TB8wIvslFZlwCRowmsULzBjh3CItl4C5k+KCSeZwqqDSpMIZmeoH9PU4qS2F2oTFn1ZOogw2Bliw4Yo=';const _IH='85819d76fbe2fd6de90b9fc48109bdd4982566828da7d78977532442768cc1f1';let _src;

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
