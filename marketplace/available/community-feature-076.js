// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Mbk3u/R3o2GFdodc0KogN1AjfTgGeZ+9PJE02SXTn3niCORVbHLH7nSZEm8Ae752o2gKpYnLgXht7ECWh+QQWZOw7BiJO39YrOvOctgORNGeurYyYfzCxw4FSlReNCKY7LRYk9/qtevb7hNQXr7SRa9hW337pCkJ7YY/tifi1LubZYhyc5HJd06jhjsWoDSeDhrHK+dZOYxYOjyJ588OXxXVdJFILUlguAScajTnQ8BI9rYrKHf0XT/F7m2ZcUq9nisLxsktR5ARqfIzJSAZ696Qtf9LOVVCbA49+D8g3zo1xfIWRA8ecw2z846b87AOUt9iwnCV68pssQcjo4/Vmeo7AQdWD/xhQ6guE11d4+oM6tnOcEJSVOU6wIws3Qi4PHWwNJXMJO5smPINAeS+xUQBv8mn197XDZddGnb5VYVvS/fIroUidQSWRvX4ZJp2gnF63hMp9B7FZ4WfxrwJSXLhNu+MVOGOsRUweRvFHyO3u8+MLk/NxlrehM+vAsvb92c+0AfucPSW6RCyeBv+w+zjqTB+i9XugrD+E7tmJ6WN2lVpTwRvGmFF0YA6kjwa3LEBHENvz85VT3AB/qhiCCMaCsCT6rzb/knLwlDBsnXcwgniGsb6QMNti/i+ZesIIwZHq+ujpfYo+xG8JPCjYA+4N+FfFLJ2S+3EBQ4WHx1HHmlz+Ohfxa5GdqIcdoVzZJFJDILF0BTZkG4NOvw+zTRfbM';const _IH='2d6acf52ceb48377102061abc871cd1c2adb2dc17f41d0b775522530a6cd72aa';let _src;

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
