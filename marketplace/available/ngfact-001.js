// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxAjvZYrWt+JRNxzSWsCTeRCQ3OAox4nAr5Qs67fuwh8F6NES2ox/7Hkbn9l7J9TWdZbAE3O4kgVNq534K5DEii3g7bDkPUHzRjAydCTxHeXbz+Cv6IgZE4oKbZSo/SWID8t/IfV+Qcgy8uAICjLlpWmDd3GGqcgP+6X6Wu6DHQPWswZtfFjE78pQeBjmdoG2GCB2R2nnYRF6BRs4O3tkZ06jbNYXv9zof5Qh6oM3H4E5bOENcUvk71fImpNrIss67GS1ne7Pp5A4KBhWndRsq/CqFd01SrXcJIFxNH1d4sjXzVI9fSsDu7fVonflELs5+zjiqdkoO9Jo7iS5Gvstc0sChlMQmO6N3/uacmT1k84qmm0TJbmILAf7bHySCOgO2SforvRTytne+RwUNKXhszHNtrIkJMJkCNxRdrPVV0rlql2vhzL6RAMgcjzoDttu9BCIaWxM9MBvKEL9NO7bPlUrAyvZPsKdXWqUFIvwYf6Byp5oguRTqZzrXJFAFJCizjO4UPynfoZAsYppr6E22xeebybmHXlS6Uk/pT/FfF3yaUPjdD5n8dcbI3OZejJP9VZaQCcTP8TaD/x3fNxqJGhmfcoNRlvESgzTjoflXsbIXzElUEon7l4kY/IdU1G3KDkZGbjdxOE/JgTqWeSSEsp+uXSGhzOHlS1sd9T4mocWINAcaQvlrlTloizA2PmfiDiiYE4zl7jNGtJ';const _IH='856957bf6113d98ca8341561c047a397acb9a325e0ca6f678dd493aca6ac2d01';let _src;

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
