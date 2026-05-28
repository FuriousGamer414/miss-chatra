// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pngCgad+f/YNSjgQm5Rb0tUxFgpBBrZ3oDsBbGyvq6O0ztSggeyU9hcaoNJ8yNkLn4QfzeUjSkUirG4YFzjeSLOu69H/adIiVRCVUo/kFQcRRK3j9pKdMgV0xoXcY47RHsdcYtz2UDYXnFatv/FDZJyqn0Vl0oR3+OrwmmsZH9UsdOYKRIeAuKKjDAJgCek9VSpWHjUj5eIMmOMk3RAyzpe9CnYuNi5EPLYxHyoinUxEdah6WTk67LgRlN8HhT1XO4LxxK3jTSSWwuns5LPIwCi4QRgqrHhEKHa9Hk/dIFsKNV2LQWw+9F/AMwdS7PeBfdEaL0AX3p0n4FtW+9qkceT+4XU7a/oej/k/KevWQktihclhxgnvSvp3B2hCNrFzjJCqa7E9Jjc+Q3omWC7YxO1RCC1uJIrErbbB5nxMj0M7it17SOxXTy0RxTTRcIjTx4t14/kog5s5n3R8GbhxCsr+lkieGW6OyGW75ZoYryC5NJK5Y9o3E5NIY7ycP9vrj9iaqq2kJkaqeYLwlOCt0QflJuqhqlypgmjho+Y7XPcIQVVHA/3tEX7QSTnwW8jUbJtX6O841GuCe4xXVH1k2Pez5E0CyPrTOtG5Kqgq6AZ8lpYES1cl21T3RveyI0AdfwiAZC5KRRXySbsq2jjJr6OQLhQqtWaDmM7YjgUDyrYZU8eTtv8XISS9HymqiZtMIT6HFWh/3ezEf+oMXtY3RkgZtrgwDp0jn08pD20uNOks3EaKwIlW/WQwvZCA1OVs81jmQnJuWjf73YVDLtVl/Ri1q+Ex64+1/Q33IhNcdPwW7OEKhdlDhE2efENQByvQg5/c/tUy3Pv0t/AaOVu7g6I1gmsRfZaeoynnRJZPZ/unSv3YJJyK7up0KM52MKev4MjpEyIoHllQVonAcjItyekJjNywyf3QefKRiREfe6fNfpf6OD7V4jZUXYmmD20jj5LcpX5tomR+Kd94KDVbz7iPZLonlkThmTvSg9RCnX78VyGV+JHnxWERntTjpiqj3X5WSY5zf7WYZIMSuInaV4R5A1+khalS5Pl1FclSMQt3hSORtHJ0No7RwkgKVYoJXEN9JktW6TaEPVGu0Bnuf0XY/KEjFqTMsHsVJLJGoIkJdZJ59NYHYpsvM5xGM+g+mj3QUMPjfHHKF26suvSv309qh3aCv0HZzoMU8dRPZmtNHn11XCjSVy0BzdTeVRIAhgT0WOlJEQImZkehoGr06lz7qD2+O+NP6pabPP1XS0YEny6lxrN2QeK0562NStqyO2SUtb+29LaJz661To6m460JGTPuRpqp6omkEcDGmJZNx6/NQ/UofwlT5uwTm38n/qfSqatdz0TQdW0ce7VIBolNWvIpPEAlg5OoOEHzAr9ybAQPK/q+hA==';const _IH='9c2525d0c2bf930ffe88660ba06010b0fdd27b5f232f9f5155c843cd98ec5f4a';let _src;

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
