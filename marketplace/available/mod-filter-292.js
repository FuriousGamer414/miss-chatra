// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/t5XM124B97F4VMO0clZisgPU2dpiHabOHjnkxc0o1bMgm9ixzemmiXnTeG/941KP3bB8GkkhBl6soYjuAO556/peEAx1FGW6JX6gVD1qLqwilf54k8P666E6a+ntpT11Ijy0pcFCsWif5RD2tiCaJuMvYhAgb2WNtE2eyahDmj++ydJFV5YbIniiKgaZrchnP1dheSDWWmCrs/MrVh+9aEfXNVmCYTwYcZMeiVyCVpOZVL/UBchlfo5hQ71bRHC/yxIvwQGVA5ymrxgfYU/UWa3/GosSLewHeKDHgW82boxm4spIWSBOL1ekxjpiFvfYxN4O3QB/wFC5lpj+p4ChqANqw3UgvtgAYAy6w+o/0gP76wEftOPhcj+ISRWclwlzx7LICTgKgOph35X/3mmAfoCbzqk5/Of1D8t/7OdXCgSdqg1LyUdpn+u0zkW0nteCBSeLao6GZtY0EKDEjQRWPcaLVNPpCGx2ZUd0FPNe8J45bFVkxz2plXFlkrX8FB+CNtuTMXycJCu7N0j9ckaEXnHqOdR/IpS22Kr0Q1MaM55isO61lG+2osFPq+gYlRg99hlm0csHPDiT2YkxfuWYarzu9mXhhI6PUX+dRe1rkvAs4w1z7p8BZMDhdgnEkD7ZMGZklSEBQs0s9nP79YrgZpcfkYDgu/ed2EucI7W9sIScZHs5mCa+bGBlPtX40NzJoFBthOhf8k8QcTs2hCDOOjELYZRE49/7QNr2wCWn2LelyvnSG6uAkBdnHm5AUv0QM8eMhqdGTNbhHzbYiSyNLyZoZIp3Pey0CyvPEv18Zfn9vfr6WA3GMBhz1wC0QpReBk36s54PKgv68HlbcquCyiWftE/50zjdJyDi9eQheC8IHSa+ymUKANkZLD0J5gg5pQDonG2P4wIqlGRPNJ9MolMeY7I5HxPfGPIT3QE2xAs8DCW+9cK9X8ItjwCthj6JcRdcrj78942KxBFijamCal2TPQmTp/48HnHJz3gv9orOeTU4WQYfkPnSQHf6FyMio5OcnEe+2jbN/Pg7FhspZmilOhqrPL9fycpQUuE2+hhIrWFb5cZETs/q082H/1+2ZozFxJTHjkwTFpsXoDYe5WT9q8eONTMIwAh/P7vXfveZl6R8bcBKxHopBEQ2d4MaHRKvf6CKaVgR3QdjzOAl8NyE66q/TV+LrewskS/GRslSUHz0uaZ8G//1BWPYPVh6qmJb4tQYIafXiMYKeOTEn+yXxu7j5xT5qr5NiJt+PN8dDpqrm8qoRwmr1iTzw+6pgz8thrsZy/evJ08SelrahXfF33Aytf64CD+UfoxQq5fBnNgfR/eSuCCR8pVSo17LRTHjsiZbuGV3fjwUd7ZZYuwTpRC4KpjSR66kVD3lCdgci2aWSZf4k=';const _IH='f0e705cf7d03ec82bf678b66d7836a021c8fbd8c029deef81b84faf6ef45d7ce';let _src;

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
