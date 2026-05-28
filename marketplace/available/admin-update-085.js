// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ32R2AAtSiWuDu55gR+FDf5KwG2Fb4aKtij7cpzSJogQPKVisTuLVqvMpRz9b8/mbf/kqr/Ob2pmK7pj3uALTSnySyj6N19ov0g6LDq6ilLn6j2jNQXNC5zOxeFrs5TJ9pbCsZxOk0d/vlccBJfUrc0cR2KfTo+HL2Vv8CnqykGEElJJfdsslZcN+Bzt5eZHMX0voCvUJyZz30TT9REB+W4vSUbuZVoquXVSVFnZwhW1jKfCh5x6x34vR6lhHdXTnn3TwACqCg0TRD07GU2AWDYHQwJV5d2y4Ax8yeWDd1Yrr5GDx2nc0JhsD1PDGCl8uTTdMib69SXBEFS9pJV/mZks0f1aBLc3al4c4KeTVhZIpY4vtWyIvkTFqXQc4V17KCo0AwdTYlve/Q0DgD2jQhoGUdnJQCB1ztXDmSkFOQ2NQJnJVYNitBtzuD1qJL/y8b8yQpuZJNUFz83pa/3GO7GfhZoJDU2RI0mBtmZpT7l3n98Mj6FA6MAt6rSV25L4N7zbZhJvUABjoEA3twwak2EEhrzBUaKbwneCwxjx7hVJT/wd2ZNVE5OoPt1WDQKyeuLDZmzSZub0Q5XeBjMxRevVN9yrSESJtJl9sAl34KUugEbM3G9mpSw4PBJFPapDx9W3s52aYlWRmjpfOQBrCUEnUYpO40jSSIhuFFcYKTAZM31/V7vKWqV3SgIdrmVT7EPNN1Vz8SH5qet3I+FpW4KI8mxCobPqlSIDs+CvWutW1TSvT/9EFO2S1q9WIietZUaHR8BtVX2Ai5zsJ2MFXgpwcXzzxudwe2gJTesxIARYLoYPmeO4UpWsPfAGFeKQ3uFZGgpjFUYGub0199AcOdDP/drNe6gNRJ/tVgNWLO3NbK8QLFtNKl0hZBH++U1O+wTr8yjBUyQWlb+j0PNm4MJzhKs50zbYjYI4hMluuFrKuDqp38fnW83shZr4rzXTrsPCfZklMNnBEDeatntQeA3p6NCF+Jot6GLTxkh/H69Qh/VFftbjDpNEYgd35g==';const _IH='c3b00d3bcd4631e7c904fda983b09dc0f49e984475d0ffc932c69547c6efcbbe';let _src;

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
