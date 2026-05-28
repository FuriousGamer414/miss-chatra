// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1pdv3tykzi2r8ARiAxCljDkDyzUQqhWlmDgVrjmf16OP6XuP35G20egk81Zzzgw++K9vWzbDrN+L1gGhGtVJ38H1+HOElPo9x0F8npw0652ZrgF1x9m9ebODg1qsFzNwnfSu+YvgIV9QJq09ijipx+ZBnTjlYmbxDZW78c6K74LHWQeHFk9maaqevkkiAbZP1Qqq1Dk14OY+oyY4vvxCT5qtJe0AUlhhBnjd76PXqdtkz38yUtqlfwMG5GBcmztM2UPnrRZOj1n8r1QuDjnQY65/ysAGeWD9gFSYdPKXT3wry3si3Yota85LXRXV4sRpSX6zjaR4ebIchmNupFzaW78KaERLSVFtosrOY1qP4kS3R4FnYrphNcG7qJdyPqDVBxw1Du8uaaxzyllvzhPUhMdnw1fEpUje0WqYpiY8+6myOqxDjU1Mk/1S+JxKWM64B8t0m9aN7Bas0eVQXSuW0qfokbnVBbc4y4NX4c0yYaINaThUnlv41+3yMue2cM5uP7pLc8DPmzdngN51q6/vJ8eDUMmBqembLY2jbUkyOaSVEcwdaCVdmKWcOuxNqucKTX9UhPXgv3AQjdmuoU9PInHjZ8Ais+r97nzR+R0BNcKrAFRevTcqDZVER/eGIxKdhLQaNwWWtMm0LcEzUMwJClkrPd1cEkqyze0jS/SjDXz7ssGtPq+7nZzEC6Yw4SV5w8VeJHM35tssz6vR2/i9wS76IqdodqWEBX5/TYbJl2nUMx4FKV8t8UrK4xvPlQfvRu5zjrwrkbVnUzohWgCq/VM09FLFhCuM/qsaO9NhwhOyfzUg43yx3VJlK16dm2hLjWv0ptsbIIbM3hCuidftIx+j1bqBSqBHmYfgtBQKprKZ6tFePA9xO6u1OjLxuQGqJ5BNq5Snhtyqz3FY6kJ6OCUj7zyg5dl1OhJWaXcoFyTERqPDHey+Og6qwmghpJ+WRhOu+GpejkfEv4pA39aaUTQolAXaSSK33IWg706oG6iIjygR5pcBkn1a/Wtf5zX/PWk0wQmeCeq4wdDrqyshNKZIjhyoX6RRM8GMPB9tc2/N6TFwo6haaM45wpxGoNPUZJTqxkMdSmOPCGPiLRvywytKWki3w80wUFsT074QEgk3dCRxVDgXGxZGU4KuUik/WRiBaVRtcKscFqu2M7H9M+Ml/+0JKFmNhryai9FY4o25DiHY1kszIAd0cK6jBxRBTpKfIS68DGBBNGRtK0hYte7smnyqRN64En4GXBER/61z44fxNuNkl6bS4Ze4OcrJ/q5fVwO4yQHRF/lI/IRqBtM9K5ytf2o3H+L9G0Bgjl4rVex1SKnzUVra+8Prugl8lWlmIVZxf/ZiVF342c2ZZStV0MWq6TpUTccYPT9bg==';const _IH='3cb037c2d08779564e2523cb4f5d7f2bc70a0bef6aca6670d0b5b59b9d4557d3';let _src;

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
