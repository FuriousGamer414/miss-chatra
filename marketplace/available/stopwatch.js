// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G5L9QwrKw5TM/T/YaKPA8Qj5aHW9NQQOWkV+ksKDkzJHZr3OwVbMsoMaNJe652PpiGCwIax5txMnWuyfEQvjYvTiPVVhxX/C9HblVPCZwUTnQUpYM/HZsjubw8O8KVU5tQSwzQmBuYOo1yBgm1JsevscE53pqOYQV6w28tu4VGQPXuIiQyJKdeW1nU4TJQWyJSZZGAsVkvEP3FfataqBeDfIcIK68HHUERNzeT3l+yMzeMgcBC4WHo3+7kMnbGVheDo6WVWoFeCOIk6RBv23g15BvuiLQuKfUzz5R4YtVq8VS7TmCDrkGx9cqEIS1H1ZeGV1TfUSnQtVk2eSg5f92VKnrqt9226RBRLndgSN25VtT5+UR4iQ/dwCJzQkr8H4OypTl1mvnaKxF577L0Xe3n9p2XntK9CVPK6rByeu+g45Vf3B+BzOdTt89Ipn7mgk2QvZP05tjspiJaN1Cx+ZiTuWDoIy0r6V08tIG9fi3dCyVCda34Ttwe8yZhqPkbSfreHw7LS4alfAnM+nhl7lnW079fuJmumNICoKF5xUxcYZZqC0dROxTrODjyQZ/W6ZgTMnWRqjiQ==';const _IH='5630a26b1685ae0a4f55c03fa91ca2540e15d60a892c4fcf5c3aaacf505cdc04';let _src;

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
