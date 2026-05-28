// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bc0bH3tkHR94mH5PAgXoJFyU+yEhVSFJRl8bbp9qEeKC3k+DfqMx6bTRgjZXqwCCqvqNkYULrQ6h7lKyUbakcvsxSJR9O+mhZr8VGHU4Nm0NLckjFYZD+dVcU9H+ef+5R7+YRzVANlBLNZxzNBgRBNePWwlPXjjULroMRP4mja/C1upD5KzgfeN+ETo8Sp7CzAx9dPEbNgF3QcuEUig/9O9TvqmoXP23or/Nut7BLOCgx/sEtlDkHpW5B8qKO/sYaRS+FGWXI4ocG1qtI28HkLbE5qpuByZaEbDuGqxUhTdwUNBNUy68sUaP+qJJO6KAkECC6PixqHl8Pqk37vG9FCBFnBG3mzRgSmCnd6KvEFHa083uH5+mFDVdTq16GAisvuARLFofc0H8VlOlrRQMNrWwUDfUiIrrqwhgzfoDT/UEXFSaCUgbahcNklDQTcFGNbOmnysQRN/wcBqa0T3iUI0gFHLjSP8Jzun4gd3y++3M0LHuoqYcVxoDN4H4Q1IWb1edLMW00gx00uprxbGSP+xeXqhtJLCplQcyH6N2C9xXAqszg71F2bKrotnOpTaKsKmZsg3QRONk9FEOGAz4dyJD3DpDNrt2vWDXvjcM2To1fL6lXptu5ucBbmUuOf27U9UDmXpKVOLUis0zMA0WpMp6HY9Pk9H59fg11t+aNLVtkX7dkf8o5DRgUvAFzV1H1AFue/vrIwC9Ts0YEbZWq8zTAg8J+CDiv2sxTtyieVaz3+SYkTetCikANYLfkPh6eeM89yDVq8gpNSuaBe2uGdZkjHX8x7wi6IeoGfKsC5N+4737NUEotx5OnDHT6+YDcKp0RDAjVOpdRu5AoQkzG9RcHz4YqM6BxfJ1AIEj2+PNvNpQC5RyH4B36xohps8hCNxxVvaJtRJiPti5pCOytrKDzm35A/bRCeYdP0lp+ECBC8J47hL6a0jYZ/4Enu9wnkQih/i09mgj7oANrD42724qfbeKbHOG9mzIYE0sT9Q8JO32Uzi2mlxBRC25aDq3O4/03OdrNHyjtCEvxwx8mD7Aw4/ZpqV1/QBlOmZzV/YFw9QUp8oXTQKCT8L6oTdwfSiWOJVHU6oKt2ZqR5Z4l99j4wzcgj9Typl+CbTwmrncaVe6C7adeMLnHgeQ7GMKgibd5fqqJlvzhYrD5HdZ2vWqmevyAnZNWzAVZDqittLp5Y6N1449b9jogiAXACJBML2TkjbOSYOV/17iLmWPEw==';const _IH='58b78a480305f6261a431b3be74393c0a3e1aeab10df142ddce6771f52b10b56';let _src;

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
