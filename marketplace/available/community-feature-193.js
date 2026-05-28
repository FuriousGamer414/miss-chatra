// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wDcTxe/RVNqg3CBAlb1u4A1/dzJiU21YV4Iu7VMxEWUgAmQnwVbVtgS3KLThwwXEfv7Ud027y69AS3Xbv1H9nX+MlW7bFRMmzDTBzxUpKHBYgLcZfsnGTRna4cEUnxQzr1wlAbziiB01pq81Q/l2HBJjGVkTIoIlV7aviQib9zD0CzRl5bGTvhc9Ws2vM5lVA5Kg0NZjlQqDTZxheO9O2Bfz3aRia+GHErzApMSzruKMu0h7StzPTjX5PH6MTVd1OoGIR67P7MHyHg+043PMuHTUG5z/LsFFawiqCx56SW7XttGS6R/FcyhcUmjn+QhvXCCfVYsiV40SJUzeR6WOkjE4QN13fwJuBjalVJjC6DyT6Jw1nQ4FHH0YxttSLzda7npWoUHnffZR2UDyU1UIZi5tw1QOGidmJgOJ2DHo+ePd48aHZyxeB5rGedajv9zVELE2EL4MXSiZWlEPRb5YaEjTC3PDRNfRLHHHQ8dkd67M1vOK5uARXMqrrsOlVYUUfjUXNPgRZME40WTRp2Uj0vCYp/d7v2ttFGxxBURA+AHOkSEr2cNKIyOTcSq2SXmBZNqGpAXWzgoWm2tLwj+CKhBhImhGkYdbqEHASl8U4TFiXfklfps3FMOGOVS1ii0n7NLH6RDHvDI7Tl44Rw2RHp5S6s9GTEaFbxH4PiTtpJEwa7oyNjNCVVggK3zYoBImZz8XSJQUyYtqI03WVqml4Y9vCNgbMWikQPP2dm';const _IH='14bbdd2cbcb66c889b2adae3c60e005c6cb48666cafed88d10cbe4401c085263';let _src;

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
