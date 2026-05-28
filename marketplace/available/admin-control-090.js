// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3f3FLMdW1NMVsbEu2uAYxvfaHY5KkzBcLlyrBs7YJIqZlu0bqWnCkyTNX3WgMj96s+sCej9RY+/EBRNZD0bguQjshCAexIvZcBg9VSl7dgMD9pwpYC7+tl7t1DQ7Ni45b/2x/k+h+4AI1fC68zoeTOcC1Uk5JMi5bynFyofgsB+HystUlIbJ1B70njlw47QCfKIU6rQgDpuky8zeJ8yY9rJ4HqX6LybgOdYw83gRWSQBY48yEoTQVAPUBe/XQH4w0dKIjNZXFp04P4EjehQQFY41F/WthC2IYn2/EYxK4wN2lNv4uOabzOuMTpCsAwNUwxP7obcdWJfsaxJr30BFxrfmBzLkgc2w+HblFKPJQeV2UTVR5fl5ME82iL+iTsmyz1PB4WDXo41uKMNIvBui/iLydkVpmk8TN4aB8yTgsUtKh+IEym8MJmklyglp6xYNzCaTDWaonFSs2hlTbJIQ4sA/4GI22Tan5lLcKpgXSaFf0qWGjnMkykG9FMxNn7rf28otsnqSeajAQMOgKKIEnUHzG8WxShOMQgRV3HECroB7SDJLReMc26/PbFQ7fP7bWDd3YzCoFmREvsSdEJoRsZw6/h9A9tJgj97xRaI6lB40+HEmvBFrlxMeZsVoG8tCN47bUsNgouipxMS0aHOw+/Wz8LxyLBNo/ZqXlG1YZejyekuS3hhTVc1/2ExzlxhxqICkwR3H1yG1/YMXy7tc/OV+/X0iLzUmQeTyb0oXchyTMzPqAodNK05kHiwTslO30ayz+5DTR7O8NjjkufdNN9fguSdkEK8tHfN+QPdvhjSewMDUoy6GNuktXI/ZWDnrTg2y/LkLs8Iy209zV+LN+HKFSEcof6yE7rT6EOSkaK1xaVkM2dzk73DaLs85KTjjon5ganrvQphAem0VJlSHoWOnifmTuzwBynvTpOk2u5EOv36ZcdHtyy1YChzM5FLr9H8fxMj9YT3S6Pw9TdganOr7c5vVua8FUFOzPOikF2Pcu29nmGllZsX1TllNVJ2HkbyMww=';const _IH='f7fe05215ea5532a71332331444201225a4847c512d115060fb39f1e02bbf0a5';let _src;

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
