// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxAb5dpDWqBYgt0lPjAk18NCUmprxjRwwKz/ss8aWpxVO+Z++4odacUy2oG7HKFkE1ziHG8JK/xPyCdNRrktiZnHSxeGUMgeAX4SxMPaLBu9A+WSxrmytibuQUZt/cyu2n9G7u/K5m6m67J/dLVaQK7+QVh4s7SY6jQ/OK/GrsJZLoBwiD8DH3ZNgUQEpZQNGDhcQdIZUVObZJTyH7oeFa4eJP+EEfUMyj5fF6S2ogXVV9vKOGLf4jIrsUh/KvO03ucU4EJgrpZKLs3odzVAyeBJ+dKIR7V/EiskvvPm37qZhOMsdKAuHWrJBC12eOhDXCM+VX+FH9Qkk8E2+7oqknZWRu9voMeNAbuRcfwFlYRqzstziP+qF6Th0Sf6lGGTMdv8YYMS/HQPS5VFdb1abBkHZ39g1v+TVEOnVbffzOaQRDjE7R2EErbCE3ZaI7Lpq3XynlWVNnbNwvN+JUkLG/z3p7lJ/+iMmLxvCC+XZ2YC92sC/guOx2OLnARhGFDDsEG3RZmWXSnut3kFOCA+Q252x2y8kHFzfCv7itGACsjEexxaQLe98NMzpMUN5uozkkXaNZ/ee6MhWvjVde5LIuBIMrva8Q6QcDl0s75gCCcLgLRKJ424HMEcjNCGPxLXyL/Hr+LbdxymLtNAdZFCJ4ZvziyQbSARgPrkW0wigU0t5B6Ip8RDbSH8Gs+MzxKSAagl7tOPit3G52CUvv6QIDIwfmMWCIRsp5Mbz2zyPMXlN24AmwlcXsSfEq3mosePCLfkUXMvA1RMZG1tOE7GYuPU+6P/LOC/ADAkozVb1X+kYaGdJ/vvuQ/0aCtYx7h3MUOdtpAN4qdCO/S/tQ+41S24qfYsMnBlMhNiEOryq4wmQgoXKFw87HFdULF7lsdE3sIsdGaqi+J7rxj/ClBpsUiUe5kKDUQ1r1Mp0DrFeu0vn+27KqxO1uQv7a2PabX55HIDIxIhD/X8SZyOExRX6MFV/DPAwEdQaw==';const _IH='048c7e601ef5fa8f8b7522cae269f483eb76de4322884938af7b068e2da06c67';let _src;

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
