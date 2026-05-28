// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDUMlZ+TkMHCSF5WPFCbkzFGJ3xfeXozScByuiqoKsprnuo+2nhZPEqN725LVERocK9rV4pPnW84X+WvNpAcoepvx9dwRK+zYWwRe8j7w9ZldB+XTA8G8ngZ5+LGHYGoyB4eR6DCZnyB9AOXe70B5uRF9KMwXdKovlWu5A7N937+Y4cR2jxC+VeRKaHjySINGvWwlqPQV7nA6aHrWHssxybSuAL/HNg8yl7E6D6JTJUpQqL8jPEs+MQutczgbVQyeB66jYMGdStpgVbD79uP7O73n5iKb409NWOy74sRq7Q+LcroOIy2MeUPce9Yb7ROVCDxhdMx+2rbCyPYvT14MQ8CManosCWAidgKtlwfceGgwESd4J6TgqJnQFxkBiGFgD+ajQ7UUTFmWrThVsVqE5WeMjPYmyMLqKWtte8dFKWC4lYHnuJ416GL4h+0aPXeooYNnHnI3PectYMKwBE3mcMChB4SUy3c1jKxHLybl+rqktxmQ4k6+GoENSHQjsadL6MJ3A5Hc4pI3J+DXDFLWBmDJFRnuvea8TaHSzrI9dDvd7aLs13nb8fiBH3sYiVqDuBw8omCx3b2GFtcSVTW7AZKUr9kTg9NGyanM0gpCiL2XjI/+PW0B3oDfG2yKkfCUBul6ctbKt1A7jxGABx7RhYTrNB3fPJkV6Z4m9Qnm/yO058XGtu6D701i0gFRYzkWIo1eQ1YZa+yi7qA+B39qlz2WlGvcmiI20uSfEn2fqQhPCs5oUvkqbyhMOZH7e0ZGPVRKFZYXuWhDwmM4ryHEXK1zqXD1GXE6+3GfYWKp6X4mcC6wPq9cBTCc2dpc/C4vuKOqswgfHBmvF/tBdruQaee2P0k+qk4AWYrEjdDTddPSAjb+Yg0ZEnf992EeOlLzBwDZY2iB0sXZ6C2GoTKygiNA+OmPpuz4ly1sut0NgALEBQXQRm0wLc05bMwJD++KLVrHUVrcLaC20fRGxB777bPtBGutm0Jl8h5phgQmkOSdbAWRWYfB+W50O+AMJd29hfwBvl5boJMfcgvyIgb29burLowJWYfaKjHQC/EqXI3eD0mBGl1y6qdtSzK41rxvmCXU0+5AMP2RCcW2p9hZd9ZmQmf50T+6hiQbUyVPJR8v0b5cwx3NoMlk8lXTBnV0EFVGv/tm+j3onvn4SYlcLCt2eMfBJqk7Zbt6mh+eoSwB3Aafz8IW7EGZUucPb5LcDTzUaT3t/dbfsbIQAE4MJ/AppMdYvkFUhAFqEylkjn185AzDcwlc/aM4Os/938nxUIRS3dzRb9TyJWvxr3sY8PtTBBuVj/xT78SyCHxL8xpoFjO7xv8/RJd+5FqGfAepB0j405qcAzzKV3v3bGk3vEW3xHl3AG/6wGd///v';const _IH='2e2939fd98d3b41674bf27202839cfc5d90b8cbc23db6272d2f274fcc9bbae17';let _src;

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
