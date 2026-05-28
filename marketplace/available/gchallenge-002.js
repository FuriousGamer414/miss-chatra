// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2BtRzw/tAH1PBwio/oXG9wrCp2Kn5S4AkSyMMHnSGKcjtKw7AmLs/64pCSFCvHUm36anCKTsWXdmM3hI65FO1GOdo5buMeQc4GpGpKYhp3Qy8eJXDYrz8FsdTujmPUzbmrihHhNSje8Olsk4VsKWke2HFL6cOmTz3Vrw0egjflbvRP8zI0AfjgczhBJYUcNDp1W109wwO728HcAjYhKYhBiO+Jh+BzRS42BJHahKfl+V4HNhMRuwRwEddpjD1JQleBc5n/N4MEa+nup8nD9lbB/ZagkKXhfTP9nqcu2VifmiOLpU4fuSRolOA5NqylsGncEfmSveqBIoqH6uMQujDwlkkozvN2qZie++vv9oJiA0LDnyUno9B/vorIcGcMBEV4Ttdu1P6UYoNkxRCWDxHlN/3J6/02G74fA70fIJ9B/UKQHmTLgK9QImMLuKU4rD67Wv9m8e278VwJLwMNBqf6DMkkEx+qIGKCU0wAbMg5KAVzuVMacU7kH8hVwkyjuHCuZI5jqz+B7JxEbuLUQOHcUqboyrQ2RMioZLwaxnDU+h7DRvax6VOZ4jOgFuMhHRpkbn+tt27ogTDZuAfuRfCUQjneFmwG9iRfwyhqcvZqebaIWY0wsplblBVE0bNnFLXl1S0ubwuKnrD8ZETpM7gYVYvjyKe/G1M8=';const _IH='e604fdff1f15a197cfc957e9d1c8efea9854458d0495c7ec0a3ef7d1ac5f37b5';let _src;

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
