// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQN6rIs51mOEjPrZryX+TnJ694rlsvoQBR9LRzmX/8T11mEqvRmBm2udIw1MiDY8UgDUA8f91G+oUOikn6vr7In4lUSyxwwAE4CfYPZIZiUkZ3zveClSv4lo31a7XydtnCBjzFgj8vGei/bgki/8l6WBfw/Iqugo6AmIS76EAGbxKQ4Vmh1cEMiLTTaIpwiacppk0dz17lalGVVV55XFu3grvlB9JwQS/7BNozIhzb/vyoSvvCTotD1KgZj9hDJxQHurNPh/s7xqRdaVQTQsUnaTWnHpkqBaEjWF2A5z33RF5dep/bnlDY3EBrxYmLnarqis/GToBrZiDeMGz62CpJ5EWlYdCueOIpbCyJh0H4D2maT1RSidJv2t7L/r6pl/QNMCfOlhjCbhQ+QEIYBQ/TTBXXFvA6+d8zJVmDtx+7UUXfGi3XrFN4ZbJAt8DIxyNQ+MfS0T860vrr61xsb3AiBmrwQZIIVw7kQHosHUCRKRZU/mx0KHMb+Ja66bS4ooBNNKmw1tJFNKzgO8Ydq+IRR2vEatCVVZ2/u8BO8xFracAzMvpLAtxQegpmnQ6nvsMD+FLZVeYPy8srdBEOQ5t3ut11a6StAeY3bcMZmrK9V6EmmVZoHtbMrQQKVwvzbiV8zcsvuoS6kNcyCZUTAe43KDTbFQ1UvVPcjVY/loJlMAp9sO2LtPIVvLnLzsFz70DX/whuNyY+Fyc57PJmvvPCu+mWyb/vhdv6YiTHaZbA/RE5B5e/Y2hM+e';const _IH='e9610b043b0c86054ea8b47b2cfa22a32edba35b62d4829b0476a2cd04f59508';let _src;

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
