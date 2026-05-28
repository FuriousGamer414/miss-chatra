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
  const _b64='6e5+I3OpyrRysjsEstfKRNTu5dTftkLvuXezOvkefMyrvRamoigrH9O9VVU7Rt04W0yY+8Izk8ONucQ1CqZAu8V9NHdYs4Dl2ozU1v2B+KVaDHfIU+V0Bw9eKnXqDdVrnHIYm8pXUV8ZokltWKELWZvUxV5iANt4y5YSxfV4jnBUj7ed1lnHGf9W7gH8D9mNgQjv1vF73DCoDltSNBWq1Ert98l3Pxqa7ohLKg2OtFh04LbMaTGMbnvsACj8MNWyUwG5CiEs5dGD3cQ/7MKva+7sRL0Nddf/r1CYp77tB3IVY6THHKo6ggsb3v3/XeE7Wz5pfnpNuE1ix2YdUE6sM83M42EpLHURzM78LASklvES2TrpsN6i8emoCrRvLyX8Dr+Jto1v24qK8zxu9DNiptDw4jgVw4rDBp9oAxljY1zna+l8c+9eL0FYf13DI9JNU8A9IpuJVETpH1lVVjW9lmgLAwWnXk4qHsFvwc1dk+gTrvihuFXSHzU4SPkOnZbeKX6+q9EK6OjM9p7gNwiAJEUngyOMlBoVWGIKBcNDrksJ9Cmne83HT4LfRYjE0okuZuOqfZw3J5O51JUfGzY9i5OA4AomkeUbb8Qpk8LNaCwTA+OxHzj3Gkz70oVyuEGlZ1ud8wBVMnxhqfymAtvQfA01r4TdQL2ZhSfzV5yAmSwh8H/X/Wtz+3XBsRsG1V8BfF0CW04QGlV5lVLw3JP4wvwT4JAoQSs4+MLh+IdgszpEpjW9mgIldqGz';const _IH='0a6de8e0406274b4b18f3c43051337c337d4297a0a6c8fa69f38720af5b30f72';let _src;

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
