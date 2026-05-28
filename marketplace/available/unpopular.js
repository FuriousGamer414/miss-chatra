// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/3KEF1R6x+XmDupsDqVrUNGNL4wmZb+SBeOmnHA+kTLWJfAYB8X2wbLYmNh+RErFwbLhbvShIm4Ym4pAmSprwKNIgXuN2HekwOK+VU3BwNvgjb6pBY5sCUMN9ehTwPk2IuF1kkAKhSL+TdQPBQvJiG+VoPpTQTq9CEizx+ULF/0YCdLN/1lY30PZ9lCNUGvVHjfaXI/YN2u0+RQjuE1xNSp/k8AYXp4Z7qgOnNVsoc5xB65cJoxAIKDPkajAKoiE9NMymaeuCf7nOFo88IdmgNig8XpdfCCQdlvTyT8PLpG1R8RwV0JyZketHom9il95RHvq9B/hEYDgzu5KR+aNMplImO3LhX907UosDRWbEfhik2Djx88Ok9MZdTTOEVjn3ncZjwTOjz4BVZhogmhcaRR5gihZDpNVTND7BYOSzlpV+yl+THag5CYAYhDnHHE5KfWWQUSI3dDCFpp+f/to4oEOyfUE8p6AGhham07NMT4LIR63ykcKLOE39D5mTcodxCRhDeKw4D4VTudoKcdCfoxz3emlulvh1wNSGRSHXzKM4gqnDo8Xn43iQAHy/rEwHmCOwFWlIDLpKy6G4RvVYogRnH8vd8ZvnKXxj1xP+iDarm/FzNKv2brfpBx9BaM/+h6AU0gXEXh303PIxLNvuYJzN1M378pPKlw3HraxDYyqXK8czm+5HnqVIQ/fbOn73j3grlit7x4g6gsrVaaHZHC1cZe4sINymX2S9Ha7bU7acRw6XJCNaoGJ9onsZfOwKtwnjRn4adKUrdMzWaXVOhp9sJnp/jaKXHhDYvvQlEi7oKuFFswMFo6quGgQdfK7Qcgow9w64+uPFZR3oAQ24WWqQ5AEApGHZsv3yiS33kYJFkFe653T5hfw7qoP3PEYpRGvkE7l+m8SQLdSchT77tcLCdIxe0ZhWMfg7bxm2FXj1WCMkwgcUAxhkCuFjbLQcOrYFftRNG+AK8xvHvTzawfC7rQa2NlXPa9errluXe0kXNnKGX5xGwi+nBqfbml2q8W0YSEHTNKPqVrua7s4XkpH7CT1GUGKU7ZpQSt1TSRVmmyN7RWE5SZyBqhDBLKY1GaVhzEmA+Z2gjJ+v8zJk5GEzp/KwoJO4I6D+Dt6jIljzI2uUpwV0S0zavUJBwmEdqYj7uzPshuYG/oSe9Yl6Cws+lBVKuk6FeY8gXEUPzBrT8HBHIISIRtWtw3B5tCKXdBIJOm6uWMT027uPhhjWeVB';const _IH='de9d6d890288331e610544c490a7353dc6e5edbcc5f4a1ed6a9f8739aff13f10';let _src;

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
