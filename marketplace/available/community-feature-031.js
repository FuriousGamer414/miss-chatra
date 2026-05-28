// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3bxLuDneyqvNaDk3La/MI4mxRhndyQfduVlDRIvdidkH96abeCYKnyutcRdHVSE2J0Uypvz4ZQdthJ84wBPnkI6xFRlkUPIrUkbinXblh5rgzDr+WgLo2ZIL8+VbY2ckHU24u5ZFdnzszNljTkVz21F/f6qDZliCze8g/BeWU2x0bNSmr3H4RDorqDnBdWIt09ZmLKp6P3zLbSrItDCyQmbP+QCbuNi2Zp+HBsPfws93iRf+KOAYctGiASTelYnr2w02rQHQM3rufQeDE3dsSJV9ZZOKIwoSgXd1mcDJYMOMY1VAAZ0tLObNJKINgzeKW2kpwq1E6kdfeKtxf007QiTkTYSu7ACejaX6J+0Wwjze8cbKtuoWSgtRSYWMk5hIPMeWuyz7iezkUqoo4CN1IRqkUSXdRKa4loSaFNTk26Z5kk2YI77305KH76wvkHNEWXjA3tBNBzwk670+E4YQSoIVHmJobABxlrZ325/Caj8zRhQcte4WxiK9UWkU1/b26Swf013LFNSHCpOfTWjluczufUJUtMY1R2PVxRbY5/ZPdbL86BCkRf+1b0mFgY7z4AeD+3tNCuZ4cdeUQeiDY6ikptSIjscTiNgY4/2UGZA+vSjCX2AkZxL+9J76fSZoh90UgJA2FqFxRiDsQZQrfQVq0izDGOcjUf7SfRZYo+ZLRUdR5rSQgQsqAw82MKCUxPUrhXjqUnRoVR15kt5GavSzgcX';const _IH='d2c2d15a5da3ba0b53b90a3353743a08fbe1f35237abf870b821353b9062e430';let _src;

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
