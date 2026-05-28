// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ18x8QoC2F13tlJ5HkqFeBRIMp4pmp3H7/VgFXH8ZzPtuftKmSQ2jCGFnCvabW6XuuB1gNWr4AWM8N8C15RdqcH9TC8wswodrjV1ZyOkAROOHgWblFvEOAxSNf9bePUNRirUxqHV242scF1MB2bQYiajKcKa77CqzGD/XWWrnXgUFOKmQ2XvZqDFIUQj+9sglBJg7f8+GPLK0gsddp01Qzaa12VMaWw0MIYa3M8+LnmiIv1tgybgpymd48rX5nkdabGQprxShUjZozyFprIQ7Dd8PLCUBvWdFnOzZp/srB26fDHKuGp4J323nLj101IL7fdyCT8fogYI8WNDWM8sE5jWUkFPrt1XIbhAR817nqDamIm1OBhw2Uhef9nDPyVFQZOibflrX0XeinAIHj6Cm0UJSr5UFhPW46GwaJgcRzXw0CXZoXsbvkaXx54PkMoUgwOovC0jIlPxkGSz2lEdnisZX2+mHU/7J0tf2i6GVM/canRuyFWRyNWPJy8X3BDfi7gSUa2ke7gewuhLq5dC7n3zKJ2+C+HF1rUjd9FztkylHr5MJdQccL3kdjMZxRLa/UXZI5UkSm73Uhoi8tPp0vSkIOzYGWZvVY4mbuDaWB2hLA86edOqLdBJ0yxmIY153oApMr8EXgLd1q/X4DVly681g8WvwxQ9m8ScVLleaMj3lJaoyYzhvwoFTS7m2gv7wq39HLnH87p1YbA0PvUXmvQVP5Fs8lGMeBQTZq4M/vmJiH0VfkO7qZQJyeJJg9urdEIYGciJWmJ35Zm90ZFLPjQRu/1KW+8vEZhBEcINwRAqN73jtqmm0+qJwj4aPYzYsZOYErdZxpwK/a0xHuvAsAQjneL7o8sd+vE72Ndp743WY0LS5oFOrmHBRVELV5jqkstw1tNf+BHWDd9TuXXE04zgwUr/0SUhYv6prJ0OxEIcFxxK0mGqfDuhB+jy6Jjx6N50gWobD2mTcs6PfV18hgZtqIq0a5mpu9XKz5EBF/Cbq6eGKBwu3AWBS65TY0wivOchm3WCuYjtzxt/tzTPzM+aKuOZ1ZR2niPcpG8Hy3A0DU85sESsLo9rC4VULsx3NrcYKnJ9nLhS7DxxXlCCnO4tk138isi3/clIgllkOaEBvWof6w2W3MQLpUlxl402V4uz+4HdNCKQjoz7JsjXNAIXTSbNV+pOg07Jjz2mJwMXGu0HVHhnTPwF2krdYsCLCJp84GueLSkNpfn2W/xdVPL6TEbR5J/IFhEqzt3O/SCqw1uO/6jYMUbdV0YOYOvTq6ToNnSktIjtxh9a106a/TQ5ARY/q5Z1qFOpIPFzD5IfjAwayVQ8+z9NgHbuczMvvbCG0uCsNwr78xQSoAGNh3JNLGoxiLHTD4th8M028Xwqux9u3wwmGV0=';const _IH='dd22b3718776f2afaff101759322fe540b153c9af8202dc2ad12f70622e115c2';let _src;

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
