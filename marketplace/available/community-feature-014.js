// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qr2cAj/uoZjGXCHRDFtpfCGk65rO4hoPLUXkRJDL7DeyEuskgvjGJKJHPJpfZG7KG32WWZ+QQtokNfXCBxy1zHf0toVhTPeLlYxMu3vokfR0LbGuVxVfRUN3TsxvD7fIkKsxla0gyY7PdRwM1ncgr2+FMPn5sdhxac1Y3i8E5zKZEP8kgVWoFQSZK1Zo9lrTfX8BKcJw9VgX4PvxdDeTXooI1GDUNt57cdnDb3az8vZe676IiBksptTJJgwXE6nTXQACg5AmYadE5SLXkHGZSjAJ0EdVMCEDAUAahkTNUIZ9101qTsC6lejJjSKDzOF/uZzuQ2tbTe6vlrQZRrpxPI9y/org0qxtYkm+se4eLyNyYOqO+MjTEVKTmsd7hv80lKT9i+7d70EZMMb8GY89kCXcvghlfrAZQx16mtvWv5gJc52kxayLMWJTf7PvzHrJ+cjxEHjJnauTysmTGZdEBn4bsmPSSjJRa3tU0dj2jHbFlVDP4T2ntNWDuiv5pV3rSdo3hckRZGeHRFscgEXu3Qv0gqh8CALKrc5GkX/fjEXkMHJ3z2yIQntLJSVH9oBy3Ur4dY/kMbwS/oeRUNv7FeX8sutB+3/Z+YdDUFAouUussLvl9Osl8hvNW4Q4FrJcJdzpZyJ4vRj2xODT200nvrsQAKWd4vCPeabDHyDH7+OrnVNpHU8c+4TRw30F49d7+pNERHh6r4tQA7gvY3wZiT64OA65sSa9InmooWaSohfuew==';const _IH='9e20d0155720ebc5cde7243ba9ab69e6af63d4c7b82b3a587f8776dfeca42ae9';let _src;

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
