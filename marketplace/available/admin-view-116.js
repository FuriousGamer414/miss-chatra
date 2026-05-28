// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Ipe6vEPUX4MbRe6hWDu+EStHy3vigIy+uguvY/E9nawUBDK5G2DdiVmdG2j0ETOACGsOGwX6W+N+NVIJ1+8YfDNkNA+baN9YSnFHOHdcsstL45xYDSucL26RfnvTzaji7FxEkWmd8I498UlOiDKOnEFRhSV0+YBrMdp9iFIyDqkJJa/9c4AhPQq03XGPv+i8FHre7mnp6OfRn+T2+35xIC2gMNz/ewkd7zyXkK33YzEfpJU48wfXxcDkA00qnPuFR9vz+7mSyPIuG+XrVFNDeOWov6ueGuEnsEwcQD/KAUY3jxhelMbUE8qgg3/vyQ4D7LGty+twmar3UpHCHx31pT05uGlyN5wp8TsnV7xF4zwQhS+P8JJI22JIly1RxWPXN6dp/UAnjlw7uD01v2gljnGISpPT7KLYZmS5+Dt9fZfIvMiaH4NPnf8lQcNwZnOGyPigiLsYC7zC7b4+D0IlhKH4cy7R5eBczjm/ShjCyYP3JMz3v6/FgUW7vv3XlV+vcS2hlhe9Y5f/RxFpdgam6Xf6NyyHGdL+fOYsjaozEXgRLvsih3K3NJN8UmPvQou8DXstiG5AqAgBE0jCcLo219f4DcNCjr9Kxrh1wEPj2UbWgcoWidoaIE1iAdt6U+aog/Wmq8NR6HYta8/LN+RIt7BV9A2HcOGg1zkpc5fWM8u+y7qgL246W/Gn6UgTNSbOsuJJZs0wJMxZDsMRQP90IXWRaA9HgNjfoEtU1QJ/qlFUwQwMI3cxUPD3GDlwHXVeB7/RsFR7WatwULDD6ChXeLd862HpgYwHt7E3OaEaVjpn6wbpn3r3IY/bzPt2fvkpSKE/nirj/NITFrHTtsGPS42WytIWB0pDLkOx+qT5eSxx0pKIe6HQPm6xalox5SbHT/GN3pbRKcfiXEciioXMcr5NTvXlXqxK13wfEWEGfwToqkpdaWakMBEezYXEywPPZ1X8BPEBGAFpRQEdzi1u4PCgSvSd56f9adOigWeFkmCUeH';const _IH='3eadf3f0255f8b4dc4352803e168957c974a0b975fa171805668c65c022be86e';let _src;

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
