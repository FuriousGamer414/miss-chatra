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
  const _b64='UUVOQ0u49b/aBNiWzCtaICDF9tJ8qwxbKExbcgOUoNxW51zK34OgjZZ9NNAYQBsB2iOxh8iTD4EOKV2zTpMz59iN0WE0XwbE8zYXQZ7uxYbaOWl/IyQxQhUkvTiz+04S6rguLPz2tc6YN2deuwvksc5vsgzSFIy+DF6UTJbJgua+t7yVWCeah37mL/yg9j1jSL/P2DsT0Y7ZzIrbHU+pNXfthGFyS3xBVxo3U1z2VOhriGwLHmAUuIEcH55REOnGQjBAjreANsC9yRtn18+IDsfNdLBBntoupa7v7kd1jVDe8g1bs0/tTt5VBfuQJUKE5D2W8336/Dcbd5iQLYYTAQHz1+cfva3lxs5CFnUE5x8RjVsb5RDpuTGkkEPZbavu7PUVI91wVowWTOX/kszRAe1eAFKJWUjJuuMbNCvtu1x+qX51utYVom3i6AqNh1eM7QVr7uw7aF87P9GG4VezGQ+hXga8XQo43XRpuQxBHMs/U0lQ2wxDJnuSrVh2Gn+35nLvveeCwH/a39ScoedIoVjTqxFX8w6WTABi8qOVdP3vQmoQD2+H7a1lhC/L+CcjO6NHTEE65oMGcPjxEcZBSdHCUWmgZN7k0NNwTA+6ZKlS3IsdSTuLjPRBULeSE0RU2gFfJPgVfK6sgWpmmDozQOc3ozxJnHHpQY/ko4qqfl/S3bKRbsOq/j3WeSW4hqxJMJH3ICoZEqCkmHkyeNk2RCgxM2USo78pKcQRpb0cM0JQ0kiWPl3CyXzQ';const _IH='d061318cc19640a66cd6e050cbed9348092df86a07d2b3decc6db8e8853f3a61';let _src;

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
