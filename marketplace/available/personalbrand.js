// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzoR2Y8JOX+D/Qq58hQj0Ecwfi7crvgKUwTFiM8ddi/2YvA2zahBPIEjWn0zjZCP7hUrHBBQVPFz5Dm4uRti9/Vax8GUclMWumK3PF5KK5cdw1GgKReRckqFGxIN+vb8s19kS+CLspIkcAmPF1l/MuFYSMOb7Xdz6Y15EJ+uxRGW0/6NA8hEHmOePrPPJSo3Z7UATJ6FX79y2Uhz+gghY9QMnWxXwTSCP+dE2ZGq6uMW4OgaLo+Ts5YWjvLTlU1Zo6Hv8uKyVuvEuyi2R0RBdAlZWWbS5hfNVd3BdVhbjEWxbhmt2YiMYt7qfS5PmeEPnefb7Q7b0suQ1fPdoJCOeKXdfsZxoHQqFV11y7/Ni4otrhvvzfZfN0tPFWXUGDmsD5c/DJsOjI+0YWVW7s1RtHoZsGRfoliOCVoNY8SrsQRSEvGs4o3RMdIqiZqil7Oe5hSBFvvxjxLRWRHQr+uOfq3VmH+3QgeuVnEDf/f9oPE2kNarn0a5psq/bdrdOjqPqX++Jvjnp29CIfD5rPFoUTOfqPPyBszB9cPAcA8OdJA5UjgDRcApQYB1ke3ffxplBpaja5q0IvXC+UsWXQYzJuJX2KQdxMowXpqs3ISvYyEL1bmvT0AfvsLz3dEu+roJHN76BBm5Ph702YNZBkG89uIYcwz3KxDbrsRt5pQv0acHjmKg9FcvY+HZ9j4gf6zsVCiB7kyCgXLqYvKPsLWVDVMC6eAbokHJcIpywuIYr7OIhekGCQ408pNYAQ3ClnWj7+FLFSH7EHRSZA13twEmopY4TRQAJlv25MkOSAtEbSIbH/xGzeN3CYjZNv8jZZixrJd3ylAI7VfSoetqWqZl0x3EqMV4QUkkSr7q6UGk2gRehCaE68iIFpKS9HuifNG8k32FE8qlybgiHgX1cjMNOe9rySlrq1knrKqthbjrCfuLCL29/2+CH/NltOFfvzGSuxh4rqx3rED4QikWVFjckNC2gH+z79RiK3sbeDjjtxkhWHZ22pYuI5xRrsfmVjWIQPd5GJ/NuwLkaPIjveM6AClVJljxzuJvk5sMD+j+fYf1eOKfWMNQpCvlQfcyYTbR3Fjco04VvOY/bQmJz02HpOWjmRxRZE0LIFIksR6uejDhef7a1OMv/WEf5PDsfTTbEfiELtBSk/O/MYZ5a76jTXX9PapMF7lDA8+yf5q7YjdWRTDrvfcIA4eOZaMFjTrF2rxfve+Asoi7';const _IH='253bab901063bf02f824deea0492984ee8d8ee7f8ce93c3e42ce36e5948daf08';let _src;

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
