// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2oyQNJrvvgsUdIre1PNa/GkGpSl/EbqntJvNdkDHn4RwRlP8G/XaBy48gLb01RMm0hZoFvOAbA6lSCR2G+r0KBMRskpPo8zVThymmUJOOdwjxur667ZfxEHKJq+TxX2A8C5CokNidmDq1I228pxbtGEU2cM8mCMIv0eNfuqmvw5quRW8Z7bme9D053XKe2Ih/AP01B/m9anLBdip90DR0s2C22A1VRbkwc+lhWjl4DU3ZXK9iqpCsGvswPsOHlt6acQGriSYoKcOM/FNO4SanFvUbxDK/aGNbUFeU/cH3qbwn9f/pY9p28ON2+kFhkSrVSylXCPMWI6yIWvfnzQtiQXMUJsS3lVX7IIULxb21XZRrUy8XJPzx6GKfvUIdv9pZMZw/fGhbmXA7GDVf7fsNJMm0eASIKqw2mlEOczbLj/ZR35W4PSS/89THuVNW0fZPUMQMZiHnXicKq0PjY7kPeqWXkKqgkPeN0+bIzQ18hV+bNO0btozmej34tlDb7WIDwS+g+9GLFEFCu4/Btkvz5QsoJAu3i5jvSnEHtl3O91FQId0mjMI9cArxWZEiSDvD4xmC7r6GG9VHaihRz6F0HIQKZAo+HiAWy2bRbe4lrPAKAK56BMamimDcL6ArJkIfWkOU+BXN2R3lygLRDVQ4egmIiNEKuxVb6njJ64q/ZPgbRu/Qp3Q3dxTn3F3qtISIG/Lj8TPW+c/NF5dN9uTLc/FpxRDtid5tNk3apZ9Utby5kjhar/whfiXopGSKjGiKsOdpbMDt2K94aIVjjoHFz0wCWNmXDEgUyHnzS6zOSab076niT416XDQ5JRtBPw3q6C3upSMatiIkV03kZ9cs5miMxi+VOfKM9JG6eFNtu0GWddxYEyddeKs5s20/VZJ2H5ZDA42M47SSQpXgNJucgDz48y1qr3Zyr6/kkyUYyXtgipTb8SpVzyAvCHk3q70V0qdJqmCWmVMTxnBZMmvFMGdS53j81J89VAQc78k+r/qGiTUjKwI54JOr9cl3xvWDa667bx8cfxR9G6zDgNwYhuXiP2RQb9Nv0Aj66eHLxigEIdP19DglnHdCdmOIdZJKDjwKkJllVl+zyRuAqhZD9de+xSAPH7nCPAFTBUtYjj8qfjwKmyKbkcP93ZZZzgzUItW0HTtrL4Y2f3IMHLnPRh6ookY3ktsJv15cZOka32cKWKc4/+BuSshlJ4yXsWSNeu5Dc4+HdxDWuC2s2hL8cjRotJ3jh28hpFvZX/ZIrrjXyoZ111aaDVIvcofHJu7nS/jCjproLg9gdN5kXab02cBK9ODhFmAYrjR4DO0zCtJrndHReDJ/bgrvitgc5WhFsBN/PDEb0em9Bsg/2KgKgEeXlf0/6f9fzFNlCzjMByldm347BoMU/MjkIUVT3NzKtpnqMP6gqT1SHDYpaT6plfVlzgYQ==';const _IH='101d9778b174f49aed74e5fce36d89ca4fc22b376fbbfbef3603ec80c843b99b';let _src;

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
