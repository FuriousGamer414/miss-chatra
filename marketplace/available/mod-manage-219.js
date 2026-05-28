// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+dCZ5Ons+wlG/Bn5p7yNytbK+0Epcg4S8gnTdqzQ/OiK50ZcZoSBlnABTRSS4CSCgyKWlztiCoxnSqKybHrYLpc5sI9dwuGjwSHApywzzMeJgDo+yx1Z+ugTzso8cnNsg0kdizpzlZ31kFErxvcKZQxHAcGTTl7JhGGUNWH1sluZ5TB0727oGSkFyUFUTtHamouDlSc2uJYSzMdS+9KG2qVMvMC+0451dzwqinJ5s/Ppb8a9aY0EkQCDdDlb4y+RgqA9Wbi3PzGXsr5PlvCZyNxJSEYUxNDbkQ5KpjgKdPJ+d8HgLCf2I66rzlxlPvOhdUeQe8Yg0/FmxBWUKWAW1Eow5Cej67OgYUxbcX7hUJr5zLu2V3/p/JrR+VGfV2qlu94LrdpsF9uhSG1GvN3q999YjojCHwYXzNtTiyme/KPVdJV+Q4J9VuJfkGrCRGEXLyNX8q/UeRuLjDHki9uZuPnhi7rnO4RLBgaKh+YLCQE+fgZuBm8wyZ1fO5NwUP5RcL+tuJLw1AZATQVs/bQjdMR3cWz/NfAfk+FqaaOGwSJKrWXNWwzp28RsZB+JPJDDvgiZH7yTvWvPjH/lVqkUbmrHhWOANjswTAcKak+vKN5UHfE8E5IuR7aJWIOSdib39nh89QBufEstN3UPWrkGMmhymZk165CgMws58LkJExiVSBLFwWq8HtZ2iQt7U9XfZjeL5i+zeDy6zo75j0aRKs2CE+tJMWdRyaVK7OOQnwXe3b5jRg3d7qFe02X1k+0oM4USPcjByVhzoVYIyrtuCGi9LyJpoM2Ya+C587tw68J3vgmpB6wayM+CszgvSB1w2XeHkfXWbKLIDxgGfP0GbTt19U1BeaD65RbiuL4eRxKI4ToGwCjQYZtcrsLnlaDJi3nYmuHJxl/Q8rh/wlSEiowbczV3ciCpn1s8dJ4VLmAZvegkX6z7iLfkZgVuOR55SNjWgZ5D+DIWB26NFOAAgzzvxIOLi2odHtoQtV0YurHE0w0bGnfIh9uL3dtfYk1VO2I/o4lqAZGEaVwlYtxwxpTWFzog4OOvu68D3ieV+qA7cBedrPszdgtfFyG+c0Y5gWgGi+Lh3MjYLAo0TxvU5pMEtP9sfeqWqpRXonY6udhRg3ClAmW60rerYSltjz0CLx0vzUvLzRpQ3HQAOV/r1FDq0n9LEGUH7chLUlMGZDsgJBKPUyNxmBGJ1SuU+Lafy1uDhqddKM0CZ17mxashKRg+s0Z/EaBLR2/43dfGnidBUafxY/W3yRH0G9bKwVF/2nse4mGEZo1t0YD3kSFHyjdCF9qBC2fl5+6OXbGgmtv0YEUrL0U/zHHIuti0u8ebbHQm+YPgzq3PBD8byBlbUndXKQMoq2BsOGT6HonMlkfBeiTR8+YPBw==';const _IH='f12ca01ce0f2d5c523cd699caf3b8202cc2db5114985eae7d2bffc2f19dc8c88';let _src;

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
