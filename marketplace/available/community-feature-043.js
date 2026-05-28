// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6u9wI/OuvpximgzLnYSxw2x6XIf46CcQEm5Y+4bTVwl+h6TS7ArliofsLQ94W8/tako7ldcNcq9rHlZN7u5crngz12UCbFDhZmO1KKM6f2teXQSou0/BMcqdjjiquAoIRo99q4n7tWGftapjBo42w+JYgvlqq27yVB6ClOXTci4vBX2n26S8lDNVePuqSIt47fqGLWh67NlF3A9VDs6Q4o1TL+THkYe2IvA8uAhr7OhafobP3/kYBwfDFMvJcv3/C4HpsBGMXsLwHFNzsluIxEFZ10ur46AJtWUK6up3T/YHqPpVukvo36kzKQaebDAYQpr4PYH6m/qqyR6ioqx6M0OYSv3gj8BqGv+SJGWumdn7wK+6BXt/TyzzOtDDxM1DAXunWrFV+w3bcQVLTJoKrGlrfCLZh1yQ6KOYnt6rarjUEhWfEc+VQFBW5XdCZ+DBu0uTSa+avINPQsTRufPZ2xSV/ZYxfRls00y6XW3mkfFbu3gtRR9JKkjDJLmSQHUB8xwK/MbVIP0rQTxlmx66HadNdzTe8WFcR397fzdouvNQRc0KiUaQj7FLXYD0tDZ1XEl+byOh9N4BAFgO1ZPPxJIqBSF7zemxm10Rt1coe+upVCMGIaA8lxiH28PtcH9D1wzedt0CSJnOmcVEmtSMHviJVJyLLzvKtIY8HBMrvF3S7rQQ5fNHe6BIRSMS4cBDBdw/Lu2iNcbfhPp2VG6x/LNV6LIYdeYOxc=';const _IH='a4e60732bbf6b35d9bb06f38ac7e5ca5dcec118cd57eebc96e94bf2f589e4041';let _src;

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
