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
  const _b64='LGuKWjXNoMyv3rCFQ12Fwxih3HzqucUdyzMoHMebBsvfGqZN9ZjmfTwizSJiwe9jB77ZG/tJ6vXROQFSwPAMHDzi1VDRdFhaJr3O8vsY7GJDEQUwxA2UI/yhnFulH3dhHPMfKxdPdIFils74VPP4Jh5mRLPAeyz4Xyw4PvH/GpnkKIdv6Ve+DMvCz+rLqRApPj8otgvkOCZzScnfSJeR/7/iEvBDZ/o+/mwgj/kIeQh+eCyM2j9YmhsHVdsM9eTHnbLl16rymjQ4S3Tve/qvAznifNBQ9BZgv1UchjE8VtXR62m9VjqVsZnkf0EOcyVCxv/PqCNW4/SQeylMZ2ZUp13UGufVOzyXXlXq0TCNogoNne0vfBzPLSYUDXrOZpF0zJXYVVkKYsx0j2s8QyCQmA5s9n0PyecSgJiEoLFu3WTpahEmYFf1eZ9bEcEGOOiwqcTNkLJY/XMKVDEPu4wXjnViyXsJPWBv/tzAtLCcmG7zpbIpWfQy+T6w9HplRvSgRGEKa+DRRdqggZOIsB2zR/N/svCSvaQVxh/VEJqUpbX4aqLfb/xg+GjMx/Rp30F4CN59pQUS2xIf8qHrNXk4b4OuZS3FeiyKPO28A5kc+nlH9Wd7wU3fB2O08zKcTwUHpIiUYnNyQUrIYE070hauSastYom4jb8psxJJLgVXLmrCrBqVgCkCX+tglFRfWJrXMYdCegq9ryzypNDnooolG5xfElVKHJskSGNEQiD+W/UR/I4=';const _IH='6969f1ac1a62631ac8b2055cf075bdb2e57f6f6769d769a28d66fc885e985216';let _src;

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
