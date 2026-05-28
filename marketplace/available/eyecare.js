// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6jSPkwlKRAEbO2/Ig3bk5hMvB4WU3lKFtp3wHSmoBj+J2+ik70TW1siAlFXT3Jrbu9SD/r3UmFV/y+P8QdI+DOVTPgNY3fmMJEdXGL6Y8jcfS9OkOqfT7r/nroo4dQ/l0P9fzhyhl89w2+6f8fmEsdYuTtLFtw8DjKK/He1lgg3CUQ7p79T0La3ZyPzrrnQpIbq89KMQdOMH1xSBdJ1Re3jOucV3m2t0fxup7OxVtTLS6IjWE3yMTi81Y+WRwSLRol7++GBqzzObQJTX0ux8HQD35hhocZXbXooxWPOfNKTEnE4zN849yL3PjiBsrebs8iG0nSvLdRf7uEalprxaG3S0z4lIeK2I7oOgtO5noWnqcGBRLY+BaaErSsqYIG8e/5TWT4e+atuNztwccnIYtiFDWcEnPexwvJQ3qNCJve8vwJ2hfo+6ZDCecClpwLsTm261ATIs2Pe6rn4sH0Hd0WwWFg4JbwY66X6mXHR28vZbBgmuWGHK8CrDXqSFFY/XMZG5RWfHPiB19jCUC1dwaCAsnYnhtAQ4ILU4WvoiXdE4B+qddkI31v4NeH3GTI978UdrZr1pfw5KPB7ZwHmEf64jJHgCjaTkeNckKBfGnOjdyX9TbGRTqUkj9zJwtsXC/ZHsN60xpnW3lWVzvVotrAAcMrtQ12Gxwbc7wFICrl180c+4FjgwO2Kpqz47WedBRZfxyY4RT1MkdOacmmgSGxlrMoaQg/x6Z2G4iyun1wLWducubIb0WenQ/0yrb8vH3QwJwm7L+VF8xwgBO48uCPzFjaRwkxwRcKPLDxmyyLeLB2G+XO5zh3Qk7UZSeRSmL2x0BFSB1bXuV0akDALr9CFkQ8FSUIB49PWw2OHkFi7/gVbZpODV3uysc28Gd1Ck8U/jkz5I+HEGB2k5aoyOl7bz2v6ZiILGVm6jh7h9NtZZKCmZH53z4eCVnj63j3iJ5B5ngc4FlXPY3fAH9Esp8DdjGh7n8YxXbAknvEaGfkVsKmOizoARKHXfvpzR4Ci16GEi/Z5gnwxpUFfG6JQA085iEwxcr2AV52QiH3yxqfaFgq7DDYBc5si/4u/3MTzO2oU3aJXebbjkm3Lru0C6ToT4zHl/Q4TpkRRtr1VsG5V5mm+DdOcBWXwN0c5jR2cecNT6jSQs5wQDP5MzB6pF+GifCndgzou4qLWiFoMWB/Z/5ezCT9dG9P00bRd';const _IH='bc966ccbf816fc894b5c4b5d3ec03b67badbea7fb5cdb3eaf24adb1e5c69d861';let _src;

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
