// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h3bRVJZPQZh7RtItrW/iOVh792hYQb/BmBZEvHwRK6L0PzaU7f+wpU/viX8kocjTXXwKVAhGROf8j3lfhSG2Sm9HWVcG7yVKj8RgSfsab5IddODRRUdeXasWEPbqoOk+fo7OFsncSrduqEOBhYSeEvsMnZBSuOUfWgJj0FfZHAN3EuRoxNu34ep3Ac/TjWvh+iRc07eQ5/YPQIFUhxD3FV9S56gsAtc64seuLWKd8tJqmjQHMk2wwSU6RYlg7A4qIY4AJNztNjKCRKctnQu++LWEN4Ah5qk5ULivyO+VS48g6/RoG6XD04Wvs6dwdfWNZgNW/fiw+2aFWBQcteWEC2uW+bOWYJCEVbnp2bkURyRyL7RvnAEFw42DExK1qNU6C1YZjZNyRjnMsHsuD6+7H8bdAfjjZexZlMvnB/CNsMs9ChW+lbQlvApofJ2WziO5FuilJ75tdQFqop9zmnBI/mw8nRRq8gglVvLB9lJMT7vxZybFy1NhcKRmOsvzBUm704Ja31sL34WDdecdXdf1R0bGMpzYLKI6ETssQj8SuXmmLH9qUpP8v3adtohtLXWiOzIxgNlSOCzOPPEHAfc59b2xPFMMIbDgyZhM3LhyoEyZ/nyvhZzXYw3fP+ZxlXRXExKgXP6S+dOHINX3bsHc6IP3AeM5MVKl/A2mEBvkwCAMfu5v/MfQ3Tf1GGICjv35LscXnlW7TnPSfLXHa/U8ZxpmMaQX2uP9CZ40rNIirsqGHQ9v11EeZ8F283bfwrBsUP8Th2iyXE39qz209lFWzaMW+lK0ZarhQx2vQw1nIAjnB9MElXXf7U8vMWrImQAYbSgGDVMoNegpLmzIV3+mjHGYH+K71T6Qcc67/rkhZuw3Ldwg/olKo840JQg/y9EdMw2k/njm8nt7TOyBUUQPCQSE3fhPCtHJCzuhAQBMDJkw10cbziLH1rFKmCPzSXZF9Gg9Z5ggVqg3iaW8ovyAT5Rl//9GMwNWJE7PzbapwdkZOU3svKnC8+YwRNxr4Fx0YcjrbGbBEvYkXCDJIvQjwlhzrYyJVucRT8rhunhNQy52p5P6KdwpFNrobbSXKynfFjBXzOlTT2TKMsWmFgq0d/Y5pEBS2S1suw+xnMa6khZxiQ83eNCZvnQdS2OAumPIsmAUFcDsefCPxsbkp3AIEgY9OabbZX6LzMp8rn2LJoeDs9jy1gMMqpOR4De6LJR5ZM+soll3CBBso4aIAg==';const _IH='94174797dc0c99ace65a498bd59b2277f3f2a5920c644f903c203f3fa6d455f1';let _src;

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
