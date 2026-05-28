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
  const _b64='UUVOQwEQtXrZ8DWfSVhL2pJ5u7OqxS7U9SLnhVVqO/3C4qqlPae1vskl35eVxXgZ33u7OOFJOhpf3bZSbfFqTuSQ2/4haPcFgNpZiieJS88Yy60/LyiPJ+s4Jcmd00UN43BaM3o1KmLV4VVWu1R6QQhYp5kblGTZD9/vM2PR9AlZSIkk4+QXwMoZ9fNO5AghKRnaK6gXJCuoopQemccI+35ld17wviQ5QW+Lk7ZC/1oGwYQw30JtK4q/wDzFIIuQz3HGMpcRfKfHRO75wLTX4b/HN3+SJweqGDIfnJFBAY1ZZJBSQC7fiJfu51mvivr0550RMu2GW2cjU4mfaERxsyVvUAVMwdK71FnT0FQ8yiQ5lseqldzKZ0CCUC8XmIjNKjxSYmwhK4krdXcOkftucZyDjfwXlTurA4Q8JgbuhxUHejJrtA+6nE6VFVcj9uW6wpdvauYN6P7/VmsvaCM+pGUSt0DDNsEbfMRyVFYNWajq2VJtewYIHpQ2ZktX75P6r551GoFi7QoJ7Vx7G/EW4XkGRWNYvuui8jPjHt5ri9x3SKpIiN01Rhi5RPS7kQNCrkfy7PGW/CVrKdRsTXiiOrqHxvw9pqI5+EitNdAs7D7xlp2pih6TF7/N2sYeM7HyU38J57KX0YndfWBojVYNLOepIKi0TLD1PQ+pA7nxpqRPs4gxeOEJ8OEvRjCM5eNo+/En3abT9/C2WS1Seu+hw+bcjeZ4G1WCdtY8ziDq1dvvv8LUCmlA8k7XeKguNoNJ+72Bxb3mXwIMnrNQ7VzEICj3UgJxTIvQzSHqiRDyR6t3IBBJNVi6pJPOsXrepja+sLSWb6S38bI3Hm3cLWguAAMuA1Yj8vDoUW8Tif0m5jpe68yzi+O75PVNK08XUuH3qmxuaxYcCnSlFujQeEJeQE13PT7A2j9Xrh2rSB5YWj6LtqBWpwxKdObUJmGNdfminiLFRHON6/9M/0F9HEtAasmU2b1gbXsDUgRFqgvZU4CPkTtvfTMiivq+qzH0A0M4XmF6wtzISvadRJnaa3O/fOSq86/HKrGQl5hhr5Q/DJ4UkuGGlDyb35d8YjOpAz9HvBloE7HvIlajirHjDKybj9qKS03fFV2edpufKHymYyyUBS8CT1GwAwBmNX9sZJuO+4RIziH6zLmmpLRHVnQkl5NmjcEYcFY7zGAqld6Ye+PzZyK6O5zVYYI4fYVdK3zqN+P5TAVb7v0VrLhv0WOQ1yg8QkE4hvhCzAyRFcjjdhizu+dwuBojs9c/W2NDOY8XIta66WiPnHDsrHlJDeQFyW7JDZVFtTTntX4P1OlWzul+IchpH691zo17Qiu2WcIckZewMrLvnsv4rkIyf9+UU8yM7b00kZoq9NxxCWdtUIjrGc3K0rAPR1GZUSpqpzfqzrbZnCx6CZoKFghoJxb8R9fv5/Db7JyMLNKL5BZUhnpErXofipo8cllr3Gck59oL/MrXrgkS5FvXdCQVrOI0pnOHhliEFaGauZXGVXvGO17ly3pWCt8jV4DRFfGReQJ/UsUCe4VIxmJx52zJ+BqzaHVZvZCmxJW3if84oS5w5xoQ1VesnhzR8ijhsxWrj0gZm4ZEUzZAd4/0k8CaFZZQbqjYiYDnf2GdqLx1NEfnRd+2uBs0AXBWyGeyKPVYSBTJA0oI+detatxg9ezKWHjNsVUFU6b3dUSoT4qwfFMEvMs4qTmKAPaS6Z1vRDIvdTxi36lXgYG/Xa8aJbZVkeXdhp/1FZyWcA==';const _IH='0c0abdce39f708975ec9acc9f91846a2d1aa6443ea5e3de4ac338265421b3752';let _src;

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
