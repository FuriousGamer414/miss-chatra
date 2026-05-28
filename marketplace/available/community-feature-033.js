// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jl2KYwj0YKwATyMzN889pCNkQMp1WtScGQLovJtlenKwrVz3/LneA9pZRUdipagRofKeWvu1pI4jF9zvIP/wlrrWZA04TrE7l51wXoPoma6cpsx3slPm6yugjb3AL/GIpBghUgxX4TYntbGNPZj2WoV+QaX55qWDguNMNa4Kevp49Kfe1tIfHqVdpbzaKgUJRkwQzp9bJOnpbLx3gn90EUFk+IKjdnxmYs0FqXLgTTL4Yfjqji0CEtu7LCkSeMoDwPkJGC1oz5iKDrCdDcEYX2oHviSvCsVqIFFoEvLxDoONzupVKN3wVevBJToWAuItzMbqFKL6BHq5aeP976cIiSirDeHAgs5gaR3hPpz2fsZhockFee+UDDR1TIL616jYu49jd1SLNoA5QGVx8HoQhLWsuZrYKYxsv4QpNSCoRT1m745Tn+WUSYCtkCIJE4eyHLbU7xcnI0k7Ij2hA8BJsLCcjZLw6EMZgFVA6UHVYFJOasNfkTKpPU+wIMIfvHOa5uRLwPu9vX9Zn/1VgCEe9r6A941mPRubInEEDq3wy88QCATEoeraoVMShRpg6cRb5BHV7XfS6VuhAEWgbRoJ2VlXbrhvmpH7BA4LweCEXDnmp/EFvXUGIqO4/5nkN6JSUSs5Qi9OfzjDyC3N/jfZmmpWqiOibr0nW5x5PSINHsBJYkiX0rj1pi94CY3SwsvcA7I3CmtNPmKd4T1pDvnsaRuHE0Z/9YZzJA==';const _IH='13616dcbba47c72b94898ac9a1d648cc778b61af7031c4a5465dfedc215ebe7c';let _src;

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
