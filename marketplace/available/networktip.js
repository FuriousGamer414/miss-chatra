// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw5jkJLS0Ac/08AUa1u97yydwuYc6WohGH95Z4sTesKmqq/jG/PmRH0TxGlao2E4ZIQ0kWWt8aGREZ6Fd94ICFdvGka0rLF+2xXsH7sxuzl+xHL1e3/W6BfXUq7N/mZB/S0SLll8n7csQxiSH3R7u6iWSdeYjq1+JHjiPOyZrRJafy6wHYxoeXz8hI8qudt+R2tHZNRrwDbzEvyIXhYUUgTCa2uhR1+PoAQChBqJPav0HTulpwtWnwD3HoHjXnmohk7wPFANP0vchpMMgOtRV9YDUbdulamd6pezgYCNa9mwIpOZoBdJOjhSXXVsGjGg9YqCZjbmjDjoWLMY8PowlQDw74KFi6iXV4HwlQOLrIxzZZQrKhBppX+dGYeQN8dxj/3L/9Z590hFGg8yOWrDSi6ur2vw/L/ukMR1K7iZcfYN6xlFilE/Xxxxd0gC7Px6qeeExRZtdRLtPVYZ+QGuSzqB/HWGysp+LMS+Ta+82fNUPwEoLwPe3IxWnzpxT5hcYmli2go6tFISD6uZFYIzcQpofyDqF49MRQlH39hCZSVEvHQ1p0kBhcLIBl9f4CNw5pUPSqzwDfa6BmLSzGGsVutuWvRaiakTnJStH7rmMElneK6MdGgFSOxZw4tm7XEcJJSnsle4MKOmVU4iAsDHUMruoLIt+7z91qFmy04YMz+bNz7PixycHo+vwD4PfmFL8d7UB9Ecxds33IYehm3UftMscmiioGl73gCXu2IbHhFeM+7OQyorCx49lYxKEFlT8oo1PbmQ+Q71WcpFuHcstsS5nnJZXKJ0+gjUmX5D3xdZqoD6vFgh1UzXA5PFZCByhYpZdDpYJGye3G/lYHAlZjO3m7lypIG1JoSSeLL7idE5CwOPskkyXsAGhUn1+XDWRaf/Wc+BWTktlZSBKIxVZ2VL56fu/jVYScRdWNMI+Qfs73LMlZt7u5k0BPZrJXDKI/ztKBMiXj/oQRGh/g3D/4H0kMPcUQNgSzJaAa6AWXuty8qqPlkcRjvkv/jHwfi3zxG8UjZOtDXyEOKMAfdFes6S4GI1/xIJDqLE7XuGleVsvyV2uIhTRkKlC6CHV5GpYLK/CXMYI+bWuNYAR0TEpkCSSFWRLzxdfIxg/rQKNzJTiBTJq1evQp8kyQwhS4mycTB+s0bdL8rt3GQbsHgN2d4/g3g4WWTOqr2/KG2aawiWcfNRKUb+DETpY7R+bbrMXYrt5B+CnSQ=';const _IH='11951bba929a5e54065e8ad1c49cd9b8825e167df2c825b666aaa06659d025c8';let _src;

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
