// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0AV8KLBpeqz1JKL3xETy6/dYkZAuf+ElDV+la4B/1IkBra12QW2yTh6cVn6H6jqD3ko3l1p3A2VlMjQXQGNxvRrXYtijtlm9Djf7+8qbhlTebbMcgc3i7eYv66RKcyosewIuzMEh1sIr0qzr/cwRu4Fec1mJjOQDy71HNmbG/IvEuK4TGsoEj/C7HsiegBF/YESf1dmk86tPCZiPf1rgpAzUAhV7FlUVe91iPp2TJjiy7spxIQ5bUsGHIGrfbU26fBz2VRJySQ0TntGwqRrj3dbzL+ZY2EXc0T2YkXGl2Rj2zjbFf2GsXbimTTwZqY/L7mKs/rQAcL2RdGlUPomRjdvt+i7b1CUgcbkzOGGlWUBPvujQNER0jsxQdhgmjdQf9S2S3DMucvOwzvxb5BhIrOC0tvt7N4vsID0MRMIs+f38XybSa97AEBPMxTrJiffdJIhBuLJ8y4+Xqlk9UoICcx2+2bQt4PV/1/Rk0eLhY/5RKAW1865kxofVMYSvP/1nsvGQHqGNIpMzGoIgx+8FPFrUPylqhYHsj1s1riXFXA5a2mYnxhpaUOO4euSr5I2wIbC1ZeqM51ZB9uGw3Yx2eGCkhSnMvnASgAFTZGZ3Wa5TYteOrvdYmxlYeXvbzgWl8oYbegm8M0UaYJOeLI6z0wcjEWZYZ0KHP6/a94Oj7IjVk9D2QVzDx3awLDAoQEasyBZBnJJILmYPIpnpbquYoh/SnIJvRdpr5/Mwxw78ii4jbg64dZQSA8fFfEc26YJh8VuzsUo0feZCUqrXAoLgj9XT68b7TY70TE1nw8FdKK+WRZRU6Nl7ie3Na4XZUfSGaUL0y2e08w9jmnd8F8FgnTfurIGEGRBqN3qPNhqfbMrrP55GT2IHaaZzOLyxPlhmTwLqNGtGxEl7kE6HpL1pT7TTNy1SRbaMeYMx3Ya5a6sO+YblX3nXFZ9Leoh66W9k7gncs8wCcccRNYYGO8oIS2ciJQUfzJ1ptk25vQi+5q0fKktc+ZX0Yz4m0NRJCvC7apBfjIIIoKK3Kqng5GQ5Z9KJ5OwzfytnPZYNPL0vcxlr6KIYhiHk8KRsE0HdT49IkXzf4dCPoT6rO4M=';const _IH='afd72c1a8256d521e28d19b52a1eb5ed20c3734a88b72fb9771ddefacdfa96b1';let _src;

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
