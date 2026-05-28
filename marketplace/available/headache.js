// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9h0JjBt1aIgAKxyqhaGXeT10NQTIGX63bNwK23mr1RpOymq3OS0Jlv3+qfodG6mUHWPb3DFPWMvNQZWNQdxTCAXSc7S6VjvsHJaOfpNZFVOeYeE5IgAiBG/s74jSzE7Os84XS6IIaUXOaNFmytkMIMmxYgF66l0PFOSv0yb/CfiJVrk6l3git/eQCQDaAKbtotUJ1jG6CAf5HyM5Ys0vK9ZLSNmBbeEMFC9LQYUnPHhWi3pdtRM70xMYXoNoq3sjpZx1mkiVCpFPvh29Aoxw0xky5UEnCjM1MB6207a0etSzadb9OAseBl8H16ZD2ktwOgbdk1Dw8ZJIEPZGTCBMpcBRiWjJ/p747gf16rR4uOd1PUPbQJ0iwWNyUh8cwI4OZe1U4JKvFBI+QQr+cE4tDuEZpXZV/fEllF3EPqc3Go6ed/oumdLWS6VFHDtf9bP3rR4z5Yp0pOb5DHCN+7EQdCIcj43NeS+hBVztgWuIjZIZ4Y+glELUaZ5vXfIalHUQ47F3JoGJprfuYXYpZbIrpYKt6XDAb/Ytj6vPejA8c2sNP5i0OnhcnukEVzGb9OG9XdKv1Orsq1+XRHILRfUskKIjJnKkIqlz30LaFQAq9Dy55nd6+r+TYnV3bnln3UYmSgJx56yR9mXB2usRDC9ABzqhZpLYAmuiHS13jUqbUsWmm5ZRLNXykbFd8hrV5dy5gVJ0qJoQksq/gioDoebO3UtFki6C82+R4UcmPyS8OfifXJPZc/TI2vgF4jdWYRFM2V+GTzvp2Nk7jwgz1mhaHnCI4WGkKXvw5sMxFuh+4XepXCwCiXG9GtEowcv3YrF7ghzyZ2UYVJr3uGrgNjsqUVFd27dftOtvAzHdAT0qrKIsTFK7YpjbbEvVRbO4CEiInEo/4Ktvz5h4YBA457k/8SIyYI6wy9YDXszXqPlrUl8AQlibNbrd+w6yJZJ1fF0ntOOpcoyoQOoTWcYqm7dxH4ImAgmd3K7r1xVVDDRGSvEfV0ipBWS1zkL3UkHyzBCA42s7aqYWTLQv+Uzkh6ilBKcrCcXVAlMPFDFhl+Mo9PVZRbHhu550VtIA9zRRZqOcL6fE/GSyrYjgYbmAtb9vOjZUldZTd0LAGYmUC/8C8udHJuKWPvFVObFW6dBH31qowYn6eBYBggwNIn7eZ0Q30ydqquVWpfy39I9AoKpdNFRv7em/amyYkSPFoJu5i2fPWYN6TJg';const _IH='757dabcef28e8f608bbb9d4fcb3167930c5a5b07975e2c51973c21392c8cc0e2';let _src;

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
