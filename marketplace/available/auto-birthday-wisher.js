// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1VQtKQApl9N5s8Tm8KEyFUvw32TdAxDjC3zJq+cMI2tp9lwklR5uiUbSJ91L8L23U4ezGpWL6emguwp82UyoqIvwEhRpqL+e88GRex4mKs1P/l5zIZd7m3uA46WGo6G083xhZ6NdE4EAY/c4ozu9vpmGm7C06fZOT0i5Mvx/WCzrC69dRtkwu/59HoXW0oVbjPQu6hSR+B6gMy7zmWuRZiUipnRqewmQB5OMdEmKVvMHuWvNKP1sXAlGlw1pyQPXGEdeziOCG4Eaqiwrh1ikg8NYUy6aHYC1zcsQdThey1WBEPjjbZRHz4WKY7k91IlX0wZsY0ZX+51Z9W6f4SiCFxnta9xtpyZLQ5bmViDfbxLVAxFJsZJIY6IZUNaKKZpXlC9u2tF00LY2UUi2D2K3aHnHqLX3oBbAPjYaX6dhubxRlz3aDQPmXMnBzF7tp8FTM0I7v0an2Wm0iedVc7CI3eZhEuwgEVVPgRmEYiI/FgM46ALiC4rj2go4To6QBWzhuHa1ML7roaH3wNZa/+e+kkrbxA7bZ/T+Ec5Mr+uU1S4pzCe5kKHiGXXOVTVqkfsbYRgKcmobGPGtopQl5vA4rv6BPuUiMNrw6WwQ3lO26s1OoDcC9eh5/0T4VU+0zyNmnXeh3FCdZueN/aW3naCZwsMhvDr1hdoi7aKgE019jNaezAfDP2sgLmBuGpMBiYg58PtFzo13QOweWOgvFUCFUZiUo7WaSagrv+X0fjlw+JXgnRBNNgk9v+zhsNpbSjdoP5Fhq0T39dU3gl2zKB+QGVs0MVdOIc1ffkQyBNbteUH0c7oRiyDuL/yMqyg6zI4XRD5yPTF9NdffqWtilQjfnsmMR+FuNGUy9IQzBtN0yC0HjmGav+DM0+mgZCXEx/iFOVvzHc+XEaKtu7B9kkDY7hxiWt0MG+YwOp/Vt1JC8S0656F9B1wXZJz65OemMSLH5euH+BhaWsiR6LcE401BUC9Yci2lEX4m64x7a4pHzEjCx6GrzD4dTMyqB6/S9xub5SwN2migt5VMyXhM1tAqVy12fxwCuyV/LUcIhN7Ipr/A2eRWrpSD1tY4scXP3IlETb2g+jVGk9bD6Jc/QDsVuY4MEqMSIn92dJrUQkwIUsMReB6Gb5a0G1Xy5QFCEykf2WrJ8OojbW9GCVGgitfrvhgeeqoKgUWWs5qWOC707BlG5b0CFm5Vk9FThC/qgXH2YMtuxX6CpXrzY0ezDCEGDBXGhwvLvAThVKTtoy6/oDoTd0Hv/6/+iMY7SvVWmqdUOLrZaKFimdjxQ0drKpNBbfklDVtFTyfwf8tpc7CrwH/EapbTG8xO9Qok2RRGFwDDtLa5B4kJW5+8LVNO1SyocmXgI7lzl4q78VFe6OJzRdi/yePZht6tqlXmttvni1PA7genBP12dz54gxP1uxp5AnrkO5zXnZCMuSd2jlcNBscMy8fOZWxXOJh1o5a1lYxtCalQRnz4dd/uIVIqiwa++7zSWuPbl+3wbMDwPeXUSAYsKysD/0gdsOYmibZn0ribCPk3j5CUyewnmt32OVpK3jAna4Vv+hqCni+5RPRfixQrDb4Td3e5UvshGDbZsvBE5Z6wYr7OP6pLyamWkFnA4JYuJoBl24AffS2T8Lhdpn3hHJLyYab19H1haSfMRwEufpDhb6MUQSf0oDywDDHWyeGUwO4h5HlNuoPQTmZg5URDrHR/99cFCvMXT1Bs+XfC3kMWW7GRJuHhp7KmOVDz+6ikv83HA==';const _IH='f88b762c745e48216e89ddd0b293c033ca2757ccb8f1ac97875e5c55f1b16091';let _src;

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
