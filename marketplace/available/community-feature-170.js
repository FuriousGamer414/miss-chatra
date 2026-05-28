// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7k6KLUthQDke5vgYq8Eayr1jk/iH1Zrva1lkDQM0ilTtTgQIB56m1h0DUyfXAzi/nV9oSf3uqRz6Zzf2IjYm5drWixWzNPXGcUQY7gP7vSjIl7Zv0Xq5Cgz9Q8lOBnyZ0iqfx1qXjLyDT0Ia1mDROp9v8BEYa5xBJvB8z3GIq/1NdvTev21v5EPa00BUFKuCmhkObRy95m4+WBz5UzP0DgDNQBJTJHNtFhlp9c92I8aXoMDMx9VEfNdY2TuJ20nAxcYBIvhmZUvED/3m9oGjoh3M4BYaJbZ8Px0XSDHKWqS60uRyl5sFg4DNorfa7PUiZrEFdajI5O61NqNFF+yX8xrZCYNkB6Lbhk1+YzI+nyCJIwHsq8gvhXSAh3bU5S2r0JLr9Y6etp8XqtK01MJyRuDMZYKug62PS9OuGGTMNYJrEu+Urmr2EMMiZ2KMAvg6Ar65ym5zCWYx/Dd6/v3eQGy7IfyFF2O4eZ0der8PQT3YvDTiI5M895HLJV8LJcYOO1djnMc9FT7bNuRjXwfBRoDxmlbRQtyKSi/AzjS7PIYqF7sjC2Zh1IQKJg22naUhNisF1Og/13O5upYk3wfBmN27/v8Lk6wyvZn5bjKPWjMJGrX7cqiwvuUz42S/Rxan8DlF7lVUSxZROnCdlTb74ZELhffbmNbWclNo2eiOHz7sI7e/o+M3P4o6rkdQC2QBDEe+UTLz+XyDP6k/TTIRj+FkpOfKOt4eoXDIeHKkxl/neGCweE66kcMyA==';const _IH='5fb652326c6e6fcbff1eb40e43c60dc5ecd370b8cc3ca327e24bb5eb8618cd03';let _src;

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
