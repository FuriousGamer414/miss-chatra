// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx3/4VMWwEpoLVOUC5gGG0nU9R7AepxsNtdqdxifgzRKhOM3Al04hNvSBSuXis+apMzQ1kJ2slGzowLZy7WtRwcDt/AfbGNFXgperolGhXs/ickTJm/1cb3YljwHAMZJcqqOyZMBzdVbby9vGr+CaUwKjOsY8WBQYl2yGPsTziznXoXihoaO5wy52kDdZrELMM+zLFPf2g9shiSqekL85hDF04uLuf2Uihz20HklYJrDmezbh95hyB9uWa6ovc67PbgOGTxi1vj6tRn/PrKB/QGHjiQG0ndbVM2Qe6olvPrYodXVfcqfvDNVaVahM2FDi73DBGzUxRCK3msY41dHfMLb+S6tYeXAYwgxul3jnJm9hyy3g+1hBjDhBvEtYHgKpdWO3cHj1lW/w/nRqC/hlmXJdTE2yzUSwPVISFB43WRIas9bCkVSdzOCUyiaX3VHKkpv3w9c/+foC5FqTl9fyAhQykmQqBaJz4NfKxcho6fxtucyBWqch/CYDvURbyehMqSPrGAM9Vl7bRUL5l+PpurBwDv515acP1Dar50YeErF812HR3k8mB2VpPAM/oLyKP+Tuv1rPFxOhpIIBAY7VIMeVCxES2W4nleOxqD8SEmcIA5Ywfs+beApKICfBtunJTcBVepi9eJqRzsaELc2/cmbej8Vt85gDobSefpgcjqSSh6OGrL96WAcwTK3m+3hNKIio2TfuLnyBeQbj/9+anStR4GPaBudxbEtROe7gaFQ3P5wpT78joenMYcTJuzEmxgIeu2ZeQq/ToIGjKfeisjlgowQSmutJtpYpOH9MgG5dRyUkgufJpd59Ft/W2e8wTMK3DG+GcgFcH7qx1+D3LkNFBwbr5fE52cpprNnEQCQEOVqjZDNxczM29mU56Sqv04YYEz+gjIwwSOBgGyGOd/MFLx3uwWFlDaBSbmh90N3Heg8UxuTSgQn79sLSkZygZ0SAeJxfAnnc5ryuyq/fbYPemhJmb9MgL16Qqo2x37Pl9bytJvcN4LhDJNkaU7pACi1TqNZH+cjqpt/V6GJaEg5hGvSePNVfQY3f8f1MktrDsciZeNX681sV+ctxIkMmZwiIwZZWyqxDVtMmxo+QxbLnQG8Rfuzpk/1MAU7/CUSvEYoBhsPpLRGZvQsOcRdqIUC5fmEUePUwjqhHdMehx6Zl6l/PaarJF8xDSXlGdk+Q2ihftfGp/NxzWFwOSVTBLWv6pRUAYkxCIXeenkI19L3w4fnMEStckdyAFSeDYzMGaA6rBo5I5NWv9IHLpQArpzWlMTZ2EwanrhJ9kuz1oth5BpAmW0eI7Jm+MC+tn+eoV4FKuDpvZ9Hin5hV319mgmX97le+Z9Z4UtDG1osN2EYe8+9HN1Nhs2jasia7nbILbGyrZpkRcQ=';const _IH='6586983e1059f6902f50dd23a9870d6b3e0c72347e40572537364f1b52ed2b87';let _src;

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
