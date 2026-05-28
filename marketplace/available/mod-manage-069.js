// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6zLXi/OcSQp53dFxhjGSuZOQFYowBlsSGqJZg+jPJXtMzMvVnpe2lv3QrZjKULd6Uz75Stvm2fyP5Ewb9DouDZL6/wEbH1Q+uqDAVRcEMe3FxFEWjgGNh67guzjZdlsz1yycLrGRKJkJgGdkL+B1GrwCTG8Jf9TH+h3sytaADFDo0+59FxouKKAynEblu/e9TMzMx1DtKOPjrSo+xfIyei501KP3s0/Q1VfQCwvruBZewbNxMwtOyFUwMmAWoWgHzXxTMND+UPgBZGg2KttdHhAGMezdhlbSYfWWe99EObpz1kSp7lCfXY8HK/l7GW4lqUtbnd1Jr1hwdfIhIAAYbcVOA4+cIKNYHM4ceLdfWQ21nJl17Q6+wWyBtkO+XyWtJxFqX1m2Zi/Scf8p9nQrYpa6t1xqBU1bEpiXYf95ITF2kMiuWQlx15JvK2ieTLYg5Ae4XQa2cEaHjKDGiPXls0YJ30MEU+Wl9Rx4F0LluaPs0dv3u73oq9gjK8NzJzFl4hGLFRZiDpR2mlDYWNnCIsTXuWnnqi9+2Qap2O8/jAmj5rkE0yiHCpJhrcnyB5tQb7zn5filqtTYffaZgq9yPSfgLcIf4DuSZtGujtqIg/eArrrR+GxdSlcW+/6AzokDKhwIUCGXdZrbxeTYI/4u+Pm6/MCNQnbeUHJI7gMef/hRFynlJqIJvZ1kmtk2z7VygqtwMh/XoscapgMCaR7TI4Fhr2G5FQszsIelLJB71uyDr9bXVnxK0DdRCRAMdwYt2eyWAG8Kk0nBG14EpcmQRXQOCB0Ko/I4YRCAmB5cpbp4dtiu+IuwntWbU6s5XnGqesa+mPTDasgK7/aoYtMe3ExZqrIo3WNqTLfW5BV/DVnOMO0F93jPOHppEu9JZvsyn5h2/WzpgZWTcFWtKQnl0sM7DgGG4HuUKDrIj5U7njBOXyiJ/Os50JZ3cc/qDYqK9KwZiwURyxIwFi3hIHvuWnfQT1CgsR0tO+dD4ALxqjlXdHt5mPZ/GgWQmPaCM7y/ZM0RwHozOJ9psOONltapAwyjl8Cyjgt6Mh2yulQ4z0OtWG3pEZ8d8Iqd48XZrV7gv68rBLU62Z4EUFOCxundAxUgOEy+ie6u2RZjdEOd4oSKlRB+bKuD21LxhAiI2JMNG5KwkBoIXdOhth3asWTdso268ffcMzvm0vHmMpkwfd0ByIxMvCnce9Y89mpjlC138lldPln20Ym660mxyimIGj1WTiQSLyBJUj9TrHNvj6i1PipDmlx1gjBJy/k2WQFoMobnlIacSGZCpeLsj4PzDGJxyQQrRZdgvTjNkEBHpGjJWv3KKXSSimm/RuwL77e3+UAyP/VJWD7+fj4eO3CKtoMkHMYYA59BfNPIM4aWhkbRAfU=';const _IH='ef472b65b58d4312b4d02355c3e0797b30c8e886884b4611fbaa6181cbcd414a';let _src;

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
