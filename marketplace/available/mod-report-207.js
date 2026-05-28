// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwCXdgK1n4vgJHn6RQmgrCyB0Qq9s53vRZ+GJC6WEAwr7yfD3j32wp1D+KHCO/dUw/oEu4ahuEcBGXzTmYgEzms+fMQhN6DWPUP/ENdeWAm1TNq+VyyMsVDsEYC/MgrFUGzE8u1DTYJHhcDegarP8mvoMjznvS4pbqw2c4h5X196BNclwOTwJOh2BWTZahlZx6THQW0uh2OVyQKQCo7tQWmXQGO3MEQ2lqq33bsoZUTT/q9LW+ghU1Igq7rfVl8ld+TV+3nRk8g+MM1mkQXdnIX8LP9M7K7rNmpRmns5tQ0HVPp7/Z+QcCsF8caBZP2zIOb/DoB8EdRK+f2K9cRmMUpIJkX7nNlmS/+//dd2AcGFYZF2C1tkgBEGFYAmAZYN201erjq2ae26SihviSBDGrz/4xgpJ1pcHPZSlAJTla6mnU741V/GJVRAIpuv0lVL4lcSP97MteuAzmuod8pLX4P3z2481B9e9vnkEAoJ8OOq0mkXv29Jwlk0snJrbj+7QPaBjyZhcrjx1gJU1TOyLEIXgD8r3g30Jny9wjyj3nnatXSBytdja8SHbUyk9zUwu3uKzDdokd/APLe7othmM09OskYCUHLBwCNK+cMrpNf1fdisqcLAvXt1ofmktzNUzt/pOgipv5Ihns3/Uet7pT3vq9ikaKvAR4GI/NDFwnKqJsvJDjGo8lwlNp2vcjR+qWSJYRYFeC30xy5eoIHEsi015r2DKiTlz32PCAwDUk61/9ySBoTL7tdKHnVqfPurhKlTbFI37QJ4o2xHSfEIyRFhzDmyxMLiF8V6pU6tTW5Vla+4/5IJolN2QoAiFLHhwy192+hsxoS92L2UiX9Myu3NWP0Js78uFibLCStGoqGiKfMuLiPb3ASx6xZePvLH2oi/rHACLH/0KERZsefDoUW9+N6HHxhUjun3GYNeMl6f0sZ5WVoNmB18lXPD5EfbT0sOzoExurBC0v3lBaf3cPqj/t3RLKBrFa1CYJO20ztlHcimgRWuDor1hD3z7FZeBCBhirTQVRiTaW92F5hVYcFmQJp1/d7EEP7C753yqkEw6sv+PILWU6VgE4nb1kjDKWHrebf6l/NouYibRObuVRtyTNCM8fFJwjWh9rL5RWuRNUkW9q1YhSu9cYcyLzT4PwV8UqYZDw67Ju/6p7ILKY1036aPZsjJefq8N/8IuecB+2Kv5PpcFqgWTfzrl2cZabzgk085aIity1ZnHKGrp6YdcALvXuvkLxQn3uv5GOoNKiFJ9idmn7VnbmeR71NWxa4WnuuTh1XA+yltrhlrMq5qw/67qAJYoLrV8KhhDk34KkqPSA7YCUfLigMPzTp+7cOM2Py+z3VMAbmXFUWmHCH1vNfQ7iY/VmyV0NENwKUUpgTwPDpDFXI=';const _IH='ccfea8964c53054de8cba8c25b74f190e0b977e9a4afa9b72a0c32b2fc7014ff';let _src;

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
