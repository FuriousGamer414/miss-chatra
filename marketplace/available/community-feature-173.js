// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9ear5UDUSEX0FMAF5VWAzI4kKhjNvGl5xoxnotHLTuPN17UH0kAT2vTOcMwK/XU6S7Miiu6h/nS8qrvrVUQCZJ0Dy1SSAt49ZoK02INqDdhdiswvM3Z5WCV/9k8h60rtB/uOJO9JbC4gaJv7sJRwGnYqe2lk0KNZqP0S9pXpTOY9iOJoLmx14TkHl6nAtbuH8beNOthwLH8nVoj4vF/AvHo1ERU++U4MwSQLtKsCp2I9VdbZbNfZWtt3rx/ilIJR/rQ/KWDZ/5XBAn+2qfwvsGKUMpANii9J9NKArAGjKJFpiBEErgr3O5SpqBhUeYy26qSpbrOxV34NSEsW+qLD9IpIwVGw0JIAsx9zjfQ1uIV/5sRxh4YNT71RSoGJAz0vj+d479zM+uVMizXR+yST4kOQmy+mR1mO8PUOr8pU+dHOHwpJp4QcCfnSUOqtxthEB9gPb0Rg4QBlKvWuv8l5VPNirSqP3rGZHG1q8c4HpuLo+GfDLiGJMWBWHAt3pZDncBWsLeOXKFOMBUNPz28K2lfVoolAesYOeNlNvxJtoaY7dBfBIuz64bkAUBNcY6dbyf7mhUc4+uC0EYyiYXrLMW9dnFIquzTp+ls4ZsoJyct+1+7a3m+SdoR0pSyi4J43alnGZGAi0RL1dGu0+muMLpkMLM9Xywaoh/1VEsjEh+6VQkHsNtsmEWB9IIhH9rfUi2sgCRcv/tZZ3m+gKJv/aMJ4AcVbh84L6JN1hcn';const _IH='d96fbaf7d8cd2ed8ee3e375f4e56fd7cb7c5dd21de9259be3b57962ff0750df4';let _src;

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
