// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ192NJOfKv7TerOqerWr00CbqhOgcrayutxEzMPavFOY5uNpNpXR9o/c3v5HHoqNKegfthqyVl7rTllszxLuJJp+JzeVCIEKv7UhJKx/yaDtLGXez3NDoUFA5c8Xcozpn7Mkt0IX9rHDUxcw7wHk4VK3LHpEvGB0q3g671aFetFW2d3zxQla5Qg+jZ7GtR5gnMi86qaaWtmjxZpVLN0+QnkEPnYTV8G/gNdoOdJXzjqoeb4ECgVWV9Jgs0ySbBdo5ozGX8h5hPagOh6sNJRaF7x9eRQMUntru6lbkWpcqDq3UrAhpekPz2zxL+zWlsJ2H1yuQOr7kCPS3PBUZQonawNa8hl5OiFdC3ZANkxQHKJtXQpzPaUqDIwkJmwdDId3i0pmEHCsGqdmEIM9e9ewXdVDAFtre0WX0Oh2sSp5deAqgDEBuvqAqGZTVQvRtKz4M47DeNlTYGVGQXBfErcX4LY3U0i1UUueyWX6VklcDPJMNQCuTvZ1YrkGu//R640LvdunCeUA1wM2BXgGSt+aEBiwxtZTHzBaB4G5cQR54GzXduSFGTx5czJ2FDk5UNc45ZjxlVWRPG04ndPc94U4v/nSfnTbW1qknmCAo9D6Jrqzzey/AFJ87eJ46PrYualJeeIl/uH/Ts2wBQdPlyfNtYqke8VPJ53pDPHUqg3rAJ9PgyzZKOUv+sDEYfd5LDsscXo/B1C+R5BIrQClD2Kfi69y2kMzym8hauT6XkSIHVgccDYDC1daWzKd4T0uTAN5q7EFKHJv0bTjQxn3r09NgiTgMBcMyFqaYSC+6LL1JUEG/g4H9xsRX4sLiA7LfkchmMpAS/9JSSLg/uYEsqv79z2/j9RGFAnTlSLauOt3PN3drfoqyAGpSEsLIgG/o+jz4hG9krrmRD/gOXQXfauLswlybIIUI5nFqmVg5Bq5o9ecLIHpKgXfWYb5gwq4KxYws/WndXxJqntD4M6q4F8oYRHJ2LADFUl7w0W6zgSBTdWEhMxNbXVnbDwP7p9I0jh5R/rW9R+eRqHuDUYeD1HOqw5I7kqHG7YObO8u27LaQf2mXbXlJ8yhJQM5mZKTX4XcqIVuWhwZgAn1dqgMkhrkRrZrDtGQHE0mBuc1NL0+9krG8cZQgEcrx/uSRvh4MyK9tCVhFXfyhsznd/a/B4BpCnWaqeqgVnLn0ZvbB1Gvidgfh+cmYNVdkH0jopR7XWot0CDteWnfcZUbb+EpAmdDjbiXs3VLTkxKv8iBhP31pfnV7JtOqVl4xeAPzRB8XQCT9/BDngMTtV/g0Uhy2TV8J3YTzkRp5IUpgH+7JwuQ5PIOFI3IyTxu6P/jO1Ty+bU3IyGFSdz8jwG1nY6zXys8qspQ/Fu5x7paRJ4=';const _IH='843f6ee2ca6738caf93e84a523c1a7fb86acfca3750903d650d7491f614aabfd';let _src;

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
