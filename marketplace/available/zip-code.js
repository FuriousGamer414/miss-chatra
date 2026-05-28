// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ63tKdvho9hwErQ66tpSEkE+MN5d0UL0lChFAokYCKuBGgyRlt3lUD6vBNMQloRp2kL7bhVT/8fg1kRUMDQeiO7EVHFa7kBc3ooZeWQXJQgULbFfzk6i4q+VkKi5ek+o+e7U2d/mLK3GcT/C293kbLXYi+qUHun4DjJvYOaaXe5TZFmXr/5c7NIq/BxdcxTNTAbMFzMzwIA+jlPohzzMsBPilOxy31WgCQ9E1+cachKWEgXSjaY6s2kKuvh34pALOs2vLoHjvG0vqmGbAu0ljf9mqRYcj6gjcaekgdRi0NAckwFTbnVT3WfWzSG0OFieZDPzb6CLUYoK3plaAdJgmCqwwrd8IrM0ajN1KUFb8oPTeEDZA6OJe6q3B/6/R7AbUuJaylwaoW7qVRXCJn8+NXLS1/ZRM044qBBWRZiMOMc7b/OP2G90VLJUBvh+5hBLQ8Sma0T3/t89ok5a6RYdv6CBfVvQk5Kb/1Ez63cugPmcvxUC7CIniAHzzIWeo/h04uZfMrYlcbMwSHVJ3pI4PB/FBuQ3jD4KootxhNqzK5R1PsQ/m0C2YOCAx0PAZ+E9YXq2kWBiKdQwdDiS9aqlQzp2QTsj+bF7s7rFNdMjuRFlbd8kKWAf48IL6909NVVDV5U3KH5bjBql5ozBdKCUhswstg7KE/M8a3qVFUXOdeEWkCvzWMWvrQyDvvY5vLKmrBV7Xm5nVTx3emAxs9xWr18P3ZcZTReI1YCWsfR6+2Aj6yzaCnJkfqbMUWJAPKJ2XDtf0LE1PuUXVDG0fQqTy2c/z3H3kcJU8kCCekUyIgKIkmHPzz7XeBKUWaAMfffKP72GanssEAxm86EAmKRHpCR76nz4myIyMBhLZ6YebFaRxAIl4k9zZ3K0HOlUg0CXIACdTXsPMs46eWDGLD296Gzi1kxPJrSTwXtLb6D8hFsT8aHBF/dQiNwfjcqCV7x0bpAxdrY5vTQCfLem9ennxAEVrYOweC2BRZnlrNijt9C2DABMIySPy5AF5KcIEB5VtO/tRxiqTDZZwXc46iUPxgBElcSQ7g482bHPhOiCu+uhORdA2UeiqslzFD2RE7E5CvLHUzg70COxA8N4vI15zFuVmw30e0IAFaCh85qB+Lq8//mywdp/fZ9efVJpgIgKGKw3OkqnaR+E1op1NApj/hfrDzOw3oOL9IWO79LvVXDtV/ku46L8vR9dJeuQfipCWDD4pAQyIW3PV81gsRcwn++wt+N9fv4mGCmWKmbbtKkZaaUeOq5iCBhKuOC7rhddi51z2mvlJjgHSm2vqzhEwPpNjQVaI9yhd9HLcVi+cD7L5ouiVoQSQ6m4Dlv2fS5/KX0mce3CCBPMY+Vd5eWevZEU8fn2oeabNwM/nAGj09vrPMln+fMXvr4hlwwtqaW6u8W0pwLoRZaoorlYgxn5IYYcwgfu3ejzRubVJ10qddD8RMWvmUtOcmXVXjwuIdc+dX8nOJYKSrAu5bYLXMAi052MWpUjR26M6gtJ36qcdYBYg0ybQNacjF2A51H39+DcUeKmS732lDKdhpUAiC9PEwssGWQCwg6Ouq0fbiuuAgp76RNnCXNL4dMJEa+XYIVnOWHKxawUo2wSc+4=';const _IH='6b1cf9c1151378235dc64d3057e147692824d8044530ab9effbda36feb2c8366';let _src;

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
