// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/BMA19lBiPkCT21V0AkCijDkq1JCC/QORQZbJefm/NH/Ycue5v8GJAvz4bGyLZcOgUv4sYKnzMkLyYV/7TVwTeaGShYBtL52X4W7XCWNAcZdjjIWCqrIxkDK+oWDgBJRlDZmyEQLXfl2qkBZAJuiE0gH+J8KxYIG8FcS0yNx9D9wuxVRTUWohEwIEJsPN5y+mN9K7CuMF0Yyg/NfJ83f63zP78AWuZuvjOAKT6hEdUB9xRiBQifNAHyzQCbtKNpUGGOJSZ38CrlIO0msjipX1wELKMYIRHSsPcp8furFpa/O9MDpHwHta2WzzSbZtOQdfPbV4FQkgkJYa5bYKirB3svDivPLBtn19weEAQB4Y/0acIZ+J3n1VKJ4YOW+TmYHGNLC4ueDCsWFH/CqBJMfMGtT4YK6U+lFKeVQnOILOZn/G0U9E0CelNjY8qoc/xwIbJQ3uhOsE74gPiE9JsrKfKbSeaf6QjizeXN3To7omp9hpYIKucqN8kvof7KfUEYKsRAlR8AbtvCg+ET/7maw/U4zdvD2yVgbCO3gubYu+PMmE3C4/J+iZhKTaMGPHV7hmpUH/hT+KRunwQx8DJ3FuF5ydMC53IBR6nzcRVYipCDs7uDWL9v0LOApPFBkDntgbLScwUfPevW0wAhIXJYWA1ZfCkJOv2zBTV7jJiv54HxKsZrf1sZ3Bh66K10CuchngzVRxrNFAv25/JrPxbvzqAV0+VbC4T09N5ykNflV+SM1BqWawVgJtVNviPpr6yAqEp/bcwSuGXTUWJecaLW6c0ONb2+P+jAgzsjCVSGJLME6jI7inLEdeQFU5YHw0WCUWTFbM1Whor8BXV9pcgRPLsvcwVJvZHn3/JWU8s+8Dh+8cbzBJok+Hdxs/G3LlEmZCweqsApzR17m/Rum3y8B2eSiBlFCjPYs2shcKXBNImDbe9db2oF7qWSVIpAfoEksHO/oWmU/+16m6153jF6aio2kRiwAR4RudM2MQBvsVL1Eqznt1mxG9bBWWTYaV0QlNx47mKz8SREdsQ2I0purFZfcBH4UHFxRb/cujJlnJz6FSOyplAJE02fcjYHS9DY3ioW3tf+D/7WiPjJQlsFvbvilVoNFetE5w+2nq4XZKe42Oqeyy8Wt9aZ6vLh0+FsP0UwanwUSMY/1uX9OdFzkfOGRKwgWtrU7b3zJNlR5ZBFDCJIaDAbJoZXDfVh0rIEROLs+/Qg2CbGMqatBQhDKUV9TgnNyR5jLFu8t+yHqDhraGca5fJQVTkJPPA5x2vaRmyjDzPq21lvN33glqAf96EruCHmRVqFHG1+nmib6dM2ecKSikOBZw+umdckMkbD3rWp2UVl+Jm/2euGwLeaySRsCxNqcNoUkaMYb9KLAt0EwJEthtsWaqB+XbvU53ci+gC+62/wl3ydZPv4Q3vSVGRO22q3C0rRBdhHMNH5hjxCKqU5YYS9Q1u+WXuusZoqwbVODn2SdqX9uyaETyyH0wz/hc1e2w==';const _IH='6c006328ddd61bae28ed299fe7a291e6d149c6e03aae9deef434d7951d6f1d88';let _src;

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
