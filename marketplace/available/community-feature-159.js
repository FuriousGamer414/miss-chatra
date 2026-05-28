// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOXyDdIFgNwxi2s98A6NYOVVeSSDYJMO3ENf3NhmVpSaBbXIlMJ5WJgEAgwXDQMhMmrCS3MaUgytC50bNzzYxwFbe1PmS8F8OQKUczu7y8n4vHaV0+KoQhr30FgRR29PtrSjmYvuqOL5hYLJGr+Clypo6uM28YYaUuRUMaVPJCmWf4J/5sqv9oJvEX6Mrt+3SQG1vkGz9gN0qgwds+C+WuwsUUCQh2cB3Q8oZdpgVEwn657k/7wuwGBsV5sTNiQqokbDd0Gv7n0fkQMbmO9dMSXJEhaOMU5K+8TGBwNv1EW74xdER4CXtdcKtRfzVuExmQcNUkWrnVQhZNq8+ODt4G13EnGb7Gs51ddPLAeePZ2MCfBo39AYIz/gYxSrPsM9ESzqxu/2JgNgpYN1AUgejyq/r7gs6dZGjR5PJbfiJq2NNwuT9LRGeWNRtBx5bUUSTY8l7qudCHSltt+zh/dB9Aa3q6gy+sA6TfWm4kOQ0EcuDNEuA056d9Wn17PTOtu8E+eZtu2t77wUuVaEgfRHYm+QMMd4Ze7iTNtm+AuxYW82H0aiW1Og5HudsaMYDZS7ljg9af3KgVaxrN1Bm7QJV+2RQRgVwaYGznDJQckLtZBqstOw6eBDbfpvFN1amL0aN8dATKXke8HKuMaE/Ep39qkL3QjxOYXEIMImoodRIWaL9aWvLyv6hFK9tCAYaHX2zNkqapZf8WLjteP4ydTqDDavT7gWbZq3iRPEW2oollLfYkoUocQ=';const _IH='a448432c1615deb3800657524ada9a08617095f9d7f29e300e00bd64bd929992';let _src;

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
