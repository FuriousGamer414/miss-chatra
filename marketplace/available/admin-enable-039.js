// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+kLJJ7MwFlrbXjfYgN42kXzTOTaeqL8NE9MdefGPZE23ujV8YQa1WSC4d8IHVn7MBK43Z8TvSvGZIlLiQU99J7hHIv7+h/LawvuTRYiTS2M+1uDh+R3i9D/j5rJIqFf2Q3hQLb5epbfFB27CmB/DxWpTWowPYOuqYDMNm+z9oX1GTdlnoxx70qE7Tu+LVFoBXDgVi/Kwn/GowATQQsVj72AQOvpcJMbAI4bemRSSE5qP0z/EyMiwmc6u5IJo1qxJarieD0Koiz6SjHtDtM7cmikpRiWtmtu/VpExl37rDf8WPW5Hw3IF/ZMG47yB2lU6dGS5ubzo+5sPB5HlOVSNaVkhKhExgCrlASlJE3xJnzka39G1rzrfXCtk0RHvmXa1HWKI4eCpYQl4OHzwksHSAlhmYZxFyGck56z4XTvsRZhzd4+iNX9Aa4l8hCXowmTB32fg4KgjsMfuyWXJdLuxmEUNSniAedyyXxmMXOSN//p7ioQ9iMFzWr2w5ptSsQ/IKBX8lSB19oYjPWnirMiaY3Z+wh82eKVst6FS6KQOGiWcOTf+2oe/dYcCphHDyjwg8hYplKgU9Hm/kh0m/Ze31BRwnDPXZUdCGZAA4UX2AexIu+gjAqHwPbfd1lssa7nA3V/Q9Me5WG8mBjjmni5t+ZKj9kvF2jKBtpC1QNGfHMOBSBXanxo9HHmFdcFlDwmBQ6Bvm9vq27qLOGmVsX1Y2TB+QGv3mBv7PjYOc2sHgue8L+Z0FM8D5Dggi3L/mOJCQVFBkPgEoYLfUzNHtyjrcPcfNF+IJ3i6HFLy3Y1HhyKF+fhy14UG6P82skS4f+sBhF3+0TGnzUE1+Xseou3YByp7jTcyON6iavnojEuiAznCN+YaJ0WR6UOowjgjFs8E18FAc7f8ByzoebibOXEfsdXY8tPFoGGSnxDi0Mo4Qao2yKX9mC+cpEmvtMtvDJB6dDg3XM+f3TvWYcze/12h2GBuvQtL91vc/SvALBuoTn99F7YId+ekbqm1jEGAQ==';const _IH='d711775ec7416a1602286443351f094fd9bdd8581dedc4e18eb51b835332ba95';let _src;

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
