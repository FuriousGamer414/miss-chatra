// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u7zjYPEttqWCVl847RuDEqim7kD+XfBVODQrWiSAT4I4AsOX6q+HOuRPpkq9A7hRfxlFozBb3tSSJdB+YWn2/1qRyQnxNI0x7buOvZcRwf83UnIEWhG7ZWjncA9YAkyUr8AnzrEJBcUMPNhiAqnATq+bPv/3OnzKEuP2bo7+kg0jIjj1k/e+f4Nk9MxiyeQIT+MM4KhNPtY3eo1qxlwJ+O+NpKOf74shkx5/G5kBrkkSVDSnk6etfVQ6s21/l1T5lxQVr/ygMOVoES3EMVRyqPLLAg0MHfFufxsNZ4Ufo0hKOGJ3TUUqZLQh3xBw8Es1Ko2Pum6/G5Cy5THYx8fKAyTxR+xML9skNuBD7xnr9uosLF2WPHuPmEyHbAJRS74scvMLvmWn4jTCbDfslBo4D0egb7JYbbxtMzpd20Az66Obd/AlWeXhMgZ85r8sUNi5piJzLRuRsnHUv/Cop+gx3OhqlwJ+z+q0921y8wxXLUq/WPdY8kvdJlcAo1RZvkdd+iNBPSoVMFWl9FbnkJ2waT9Plvxih9ibADRf7FdhcHSWJxY0+ZYOYYL6T/v0mYwTnDNEDmXANkApO/MWhLBOmrY4CA9EPUAbGZtSQPqUXwJJLqzIgY7ZlzHf/AyihleNQyzWfQ+l5IzIeoGCq/NzMR00R12VB9wRzkCp3zs2SmzE3bBHIyyCippDp9014U9+UEwgPov7DrVKFSj2mubOFpr+XhD8U+DDng0n/15TTQ==';const _IH='d8adc937eeaab7c8ab05f8deedd5645855abc20c3a97fa072713b4797e524542';let _src;

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
