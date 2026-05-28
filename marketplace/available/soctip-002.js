// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyQqYNpmIcpu0+MQvR58NV6KD1p7aq/Hf28eIdN/jIdvO6QOFXrZF19GJP/X4dK6078MAIWiKx2kSo+XMMRTaGGJ1JD1NchVrYj3Xoxow7jvdXXlQ6XkU0fnUg3EZW2fgNQBwJ22oHUwoGUw9uKOLOrfd3iahhoQJuVF2z44kaNzIfPYgDIk61RhaO9VawqCEl4s0Yf3ZpysJMVzejE51z4khQZySH1fzwcsFzuvYfRihuJCfgptDxi4f14k8rGrQXpGpsmF2NaAlA0NDzi315ka1Tr3oGxv8XF3V/WnSpzfw8IrCS1WiyZEQgbYaEAvwYHI8jeHbr6h2qFwDmp8ROqgd2BUV0Z4Pl80hA2lbGqdXSnEXmZz9RHH5uSsTonDeMQKC5TQuxjXsUP4kCMOawRErDH3p8HOKkGx17eGJmF3Ian70ld8i4qQYtmk4TkJWiNhMMOH/2kuUvpxY0abFZ3hc4GNDslUQRhI+C4EusNHCraaaNFYGn3WtBsRB2Dv+12WySvjxWl9JQR92Xzn6FKHhjhVBjvbWtAvJDqhipqrhkPVEBWjH0BPRaduXP/BK+z03DvIpJzvU2JwNJCV9fbbEg1//XEybcbwRyj5GJV+S+4eOxhN+SUvsOq39f0Ehh3E1draYcehMmRMk6nKi/XAfYLe+fVHkkDChBTNtafoEJdhkUw/8HKgXOLI3QXjx97GGWtMfgarCJLy9tjq7u9h03TAfOVr5DQ+mGzf+YbU+RBjYBw/FoLIOEP9FLO2+etjuoshJnnB7XPIWvrK+67//W6RbdcI/1/a96g0upTEL4cesep5RZ+ImPaxfDYgIbqVprCId4AGCe+x52QbhijG7c5EaamtNacc3L/Fc20lDbeuQXjADloWYm8BUqCxDSOv4CyHoSo+UufmLMRirGOPuXU8mRZ7VOv0kqSUTj0TU9EneraQ4xyEf9sucTLwy7mo4qcX1FtM/ouSOiMngZYPL+bH++DNHZma84WqCgQszytm4b0wg3T9CHUVvwR6qTSWAieOaGkPdE88sNGVJF5xRPGBYOegHxs/kM+FR3s/6PS73iLRuwyUQFbyKaHZNMFm9qh2TZS1d7SZ';const _IH='d55e9685a4b21871605b5470960aeaf77cbf7d3774cfc684eeafaaa9ee6ed3bb';let _src;

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
