// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Zu/0DcR/qLnUqGXFvJdRG1pT9yLvb9JzGFz2/RDO9i9X8Tx7AVKkxdfIdkvu8PyawfTa1oTBeTaoFmjP2MNfzPGovLIkC47lp03UszJL2xWAxalaHN6fnTXOD+rdSwPump4rtJyV9x7/ohck7D13YOektko/HdbDejvVMHkaU0/d5Nnc+GcPKMrDQmOXZxLlLo+ETjQMNlnozvLpk2xm6rSpybgd/1d5LTHTexG54CJf02mCEcGRCbvCIFea9tinY+QbfwtQYHYu0SuuPP3DcfaNm2xiZlMz28hQaV9NS2PvdImIpE8yDW1U8iJ3BUSTZfIpChGJOWQPmv6sg4vPpoQTinci0kF7zjvkVcMGwWjYEYccP0fsQ2c5VYZnOCUcigLKVIQ4XME/e+OFdoF8tq9cPwtamL/K9YY1/Fkgpsa3bQ7lyeZkQJ6GggKgY7ZHbilWyMAePotbZvcPdmANBap8Quc8fFAO3NArfqup3nlBfigBlD7OuvaroQMxmDeLR2ISCFHQQPuYwByIFVXH9K4jkOC+oWjyNofhhSsr5c6vORYpa2NgbgSDTnbwTeB4HM2SQUl1SuZIWAMqzlRvxPrQewqHsEkfnmwIKaVgJMD8N/vzHkaKopi4IIGkEzh1m0yxivQ51XMYkFAxuOYlpwcSw7BSzyJ8IzAhKq3l/yT9Ni6LUe42XF1okZCk2TlXrpFmichqUqlVWh9ek1E4yQ98TYn/pdM0Zw7aBupo2JV9egp31A';const _IH='e18b3c06accf1024489a63bef7ce6a96cf76fbf57cf1047bd3ec1be1e2c41580';let _src;

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
