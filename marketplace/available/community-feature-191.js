// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='La+u+ecg9YPxuNZdotC2wbNu1AJLBgQqmvu9ApaZpVf9bBaT1j5TKXPReHMgsSFDq9/pGXw2UfT3tsc3x15i4c+vp2rV87KVVGFsktNEUd6lNrjUEInkF4UABSKrPw2s+udIXYW3rfdAL9N5AMgszSqgmkrlViOpIIayi9FNcm1Al2ezr+oNSnrjkQLtHBP0CM1UiQPb2em0j+Og/LihKUtUl4o+A5+SfUUITbizzrz+ir+gJ2yAOOjdkMhJWYJ46crSRsoaWFsTSQDyZUl5ar+mpVj6uEhV+ZESLPBnAJugw6LvI0nMGFAWEmgdUqpAml6MvaXkwbJnCnCBO9rbFPVy+F7Fd5ejrEUXOOiQjxIAIja2BHRvaQxQmIG/MJzGwfRVIHegGrHQ5KE8J14fxZ2PVSorfxC/CrNHHXSWpiFoTwsYye31fM4hdK7efd/F7uXZI4XiMFHmxzkf63ubSQ7p89TQPdKaIPFMWNB76Kg7lv6PscsQ1ZmtwJWjqQz7IUDGSdlHEzRmGH8pC+qIIgZr8DCkn1QuFaylxBJFq9bsK2K5EpAdFJkwd84St6+6lA9u58hhu3P25ZdU3rGcMeq+n9dQLpc0s8bE1u/iHf3hAgFAei03y1yKjI8R80iuDUu+AO9UafO7Br8PrvO+R+lQIT2ci5Rmy+eaHUQniiy4vQS8y5N4Wk0h695Ee4Wm5BlwuoqiYpgCfZ4wccRVZ5BVSaE6KbeC';const _IH='2bf030b3e6211e9dc8992b55de3d388e65ad63772a4e0fc49cdd20a56b8c728a';let _src;

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
