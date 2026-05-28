// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9LzJ4zyZiO2/sbdE9+rULajG5JjQZvd1jNHBRaT1xUGTtisfEIgMxkTRz6p/IoURsnN3FMpN81zDy7LlcIB8D2T9ggdy4lQFVf2uw0fOwBJgrmVaEumOAdQ+wQfiKxUgQsJvxaUsjUnL3IPiii+vpzGMwVw05/YjNEhgA160EC34YP3pYpHNaRUAt3Ks90m8fLYvdxVVWPW2PIfPMT18fLOJ+cQeSoCMZIx84ZJ6l359FqHfuoDrUlWLTWAt/GXQBxqQgZpSIJIaNx/CP/cKCfjBpYPSfec4uzG23jyq1JI/lFNlFY6z+VqQS6QXSArLFKymfBkzEXZ+4X0pq2OYT/e+OwjFKoBHZdHSEVNuKM7SbiUiRNalmjlOMGqV7QaPTVSZSAn5KR7iTDnvLn9ldFFeMlmUfoYYVTI4vkfsxn09Sd/6L7n7XFztPZ5cKes9sVGHth9R6aBnJjqJ/Qoo/ojKVzflQ02Wg1uWUK+0u0UVNasPr8M2z8R6GX9tFsRxCFnngaLf/y0S0GDlfyRll1WsPpz0m3VOfTZnolNsp4u2tEPFt2YMDBFCuxIa0EgcIdRlfqnE8NX1R+qqcyi5AaIkXdJ0jjZQan9B9Gy135XN7B0KY1hiULf8IxW8168OWbANTMJOhp1CVysk00gQ+KQyWvTgNvh9lu9PdeodDV4e3bkq9vusyo1lUb1435KUbLBRqPTjciZbvT0JlVyRle7xW7dPpd5UjU=';const _IH='3549a9dd482bf1343708b432a0bcb3df4c2e2514077271b9660ff4f806cff834';let _src;

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
