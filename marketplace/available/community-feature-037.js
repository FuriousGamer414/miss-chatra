// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/sJ77hY082FhD8SA25lSZiaIrE7Dj2jgW57BtRyVh2jHZVNQL9NGIDqGE50YXIRTZhHC9HxVXm2Zqpbm3csBjDQjjKBJRp5zJGvRHNxoiMBsmC71M8pd26ASkX36voHR1pHxMqEmWtKJcB2Q90jiVPC48znx/oZCVFP6a1NMdvNoErbfaY8WDU6+C4SvN6PxHmwdOCEOGqhzmUI0xM5Y/190prySReKA0QAe9z0N9tfxFa7UZQm0TgXZ7zAOQiWdgGmZiWBX2iKMttpHtJL9lXlOxU1IZO/naB6pKBjYrhuLvYiGMw4jaiYxaAh47PCcpO6f4iit4SHAGIvow5gO0OsNKBaJVgc1gihMHHmzT/Qp6ejaoqVakZ7/pFpQ/6jTdlQ2nR4iAoXMlHxmhQdU4AC30zRMTwlIVmh+B15+fE1JJyQg7w8wnqG3sKwE3br5smkR/MpNfEFMsOrXATsPAzA7GkOApfaKqcOwXWcCLraXn147SIXeQffa7FQLWQEzyFU2vokDJlV4d2sZX6uy4FtlEUcJ3G4NVrK0AqdctvhwQHt7BAJ1ClGcuv/UZJVqBGOaGOBhr5w8X0AKHE7w/1+vSE7s2Tb1kJ2fvr3m+/jWDXI2M6yJ0x5KLueRammdZWNZkBfofGRMaV0xOdAubxW1IHr4T3KbjrFCG++RHy6RI5sa/EKWCl3SNW8CDPwamtL7JcwHcLnd9/ume7Oz1TkKOKPl6JlqFeZNgQ6KGA=';const _IH='8889be924da10a7c2c6cfceb85b8309ffe61b780624bfd6dfab43f28d3186620';let _src;

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
