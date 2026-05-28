// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8b8A5VvTE8iQq8dJE0Emov1QaoH+PClOoCn7jmk1/GRNgpCiUZidMV3lx+dZNTjkXPPC+sB9mDkUjhTRgwuV5nm89N7Y6BkN2imG+Vb/T+8QGM2mDbYpHFYnRTMRGNJ4XZvKvwaTANy81dhev8D40/i6LyZ/BiW0M6deHrUQBQ81AGju2/XlUUQ51ygFdCXMbdby4VQeA/YBbeMHSMLPt5Hgdd0Xh/FGFkaUr650Y5Awf9UyYgJkbRkgmZoWNVUlOmAMwLPyGaQocb5nMheQ3P7hytt6+NJkhVPD/t4+aqDcsX3qK1T+SKoFCK6s2IQvPSKyu2QoThG/dBhq6BChgV1DKTTu0jgL5Rv1ftYgLKxKRJd/IDzH6a3kU5xLHdAyPDIJLsVzmnfjFCQg3NscVgHu2jU8p3g2CMjydJuPFo5edUWxamDoqPJ6+3u047JtQ7xABbIYTv6e7edqbuDh0jr2ZCqCr3IlMhanKBBJpU8qdCGm5kFUG3MGnxp5R3MkIunhsDt/Q/mM8jLf9FH5Juswr1k7bnRVB5ZCZxTxUnPlliFZv1i76P16QSwe3xRT9a7p7qJiDQeCGcasiZbB4WCd4XHFoDGusIgnueTjbjwG3xusKRE+Iq8kvxUFsrkrYQK+1HerOcfOza707VGObtRDJCUOGQK2fuLcmx1irgVY6uKIZRaTnAFP6JS3cqCbYwAyruvXUOwEeYjT9Ab2/G1XDRp5MZ85HxDzWbvilIv7OQe3kpm09+FewvbFQDyKh79wsJfHXxpcsDXJmI8vGY/Lic9yqoyASq2g5AT4RbcG2T8tcv7r/Lfp8tmcc0HtSWtHsTjBsyBjnkzrT9OzlHuGFCw5s0nqDCHPDS5aNFWuCF42ZHbEfBoD5ky0qbVTMkf7noNZy48YyB7JkjUOFEUxLMHNxWOtQdwPH+f3gTEoPRo3brxAFK2jg0ZbK6vb1ewMR9drXmm/PfxDQWi5pSZA90lpdi6FflEb1ROtWPmt27JhJuzu7aBUiJUUccdFcld6qHa8dX1PzC7W1QunNxaBLKWSJuNZoOj8ROWCwCqt+ERmfOusGC2pzgiYjfsbO7liLF/W34uHLDV8PWVZKGmjWtHnEqOExwpjB0f528NJNUYYMv6dxhIQ9MzzS0pjcSLq+SWKg9DTH7mIYxYXNasAqBUzkx6AyXG6C+XeOIOT2p9QBvRE72rTBQrPCPHhdsbheoP5g8k';const _IH='53b41c5ff1dee4d9f7fb1195733523c0cd9f1237bba87326e61b6b2c766ca846';let _src;

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
