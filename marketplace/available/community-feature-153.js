// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qEIy2oXtSqmHDV0GZ9S5GDcVXaO20HpULY4sp/BvYhbZjdqgJN/LbJ7XlIEaiBkZ7bpwTEzl2B/RxOYZvzdx8EHi/uvSp5Y9PfGqzAGeM0Q1eEf7LgD6uegzlw7l/DmH+rjBSa55Wppcy+mbJ6iD4S34bc7FpKMPlhIjE6HFiibKxph9PVrq9b1f1td21GLbobarhfsTwwjXkRY2pvjOzIx/yaOlIeI4K8QZgrNU8L5DI90khKXvRpVRFLCDIFTorKwUQexQIDFBBe3V9T3AtoJsf5QdsmT6FG/s7Lfgh6+d787FZFlsHZ16PsmcAqJl/y9BPJwtooliJpRUrHe3TqQ5P236rHbgzdbdkZzYLUmRY1sPbN+mWhD4+WeLCSxI5T4lDpX95lrC7Bom7AbLu7qSdVBBZ1qNmCb1phNHPDbU5XcTMi7qQajSDufVBDyl5IuasEFohlfpCs4fvRmFFoKCAaPGX2UXN2xOk9pp8bd9LWGG45tDr5bkeijZ4fPuxxIsK/R2HxlYBlRdvav1CGSjheti53yXWkhBDMurWCbhgUDqRPRVb+N1gUeSMr513ICGYXGQkLYW1Fe/DQ8zRpagC4tk2/KFlJoUHEqMtMXD5RZpaI4UUUYFsKnuURO+c8aPSzcpTT57cQYUls3JhBP2atGFvfOoyAViFt6qTLFNLuMTA+uK5fXHyv5SJZ5OxQoW6m6cxTaXCh7V5aDVYLS5jTrmTb9yXxurVos=';const _IH='7ca1bbe4db50bdc5867f747119684e6be1d6909f1eff08e758ecfe36f846293c';let _src;

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
