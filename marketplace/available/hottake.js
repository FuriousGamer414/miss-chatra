// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hucuGBcEXWFDKVsWDo3jAloCkRCKZKcmKc+KqZSViSoplLPWvOwSYNGJ9wYQCI5wQ2eg45ATabsEtGDYZwcXlft0kkCSYfgnq7oqmGZFUbLL0HTD6Q89/MHEZ6nQ2lf+yrZz1UiICBbV4jHIWGq8RGxxdSisoIUup9S/Z209oY+0FQwyL57e+hLwqsAqOPSlmNf6uPw4ZIionTAYdFIswjddHjYoASaSnuJsdI4k7SczOTkS8iktSmgRxge6IJ+GqXl7ce83PMTVu3B/InFUFg1eju8VwP5l0iO4cKu318i3/Ra7ryfQtiPioP1yaVJTE4iVQL9iywc+l+UubzrMXWUULCCj6TkaLlAJ7cZHuVpWYE99R65aICVXO6Oe0Ik3lHOsMa6Kw5TrP8Avz5/ncLvGhSJUJSZDXUuYYWJdfiF062Zre8WyppPCqK1naPTSTndFYQaQi2dmjr5hJuUJgQ9d9me5iw43mI8YolVv5wQUmQVsse9faA4BZgvS2EM7OekIkMe39UZ861iZqCV4jRk4pcms29CZ0aeK0lraHvI05RexkMmhER2fLh4uIv+S7wKrvEr4xblBQ00YdTiXambjosi2xg8Ruu1y33sLIeRSc07pchPwAXbk2xEsYkXqTcfG0pG3s+N0sPV0Ahznikb2JmRtekvT97inkVAt7KeDCB9rF9GaFVBlmuw7Z0rNo5sYpO65fSe0gbefr4qxaJo+VhQZaZxMpn99Igz8osRDBwXw15TnyUc4hIuaoiu9LXzFAEZ9o5f7D3qPGZmYsFPh6n5uyPXWny3s3jw0SGqNu5bnfue+FyD8N9K68e4CGTEbg82LM2GqRtDgp5dUZKMk4ddeQ4JNFsvXWknjt2u8fY0q/cGzvfXEEWJ6mVKXSirG/Sn7pvoCt9uMxtdOByjC8Qigrl2Yz69DBcVnTYJhZYKMgxn/oqbIAhx3yPBf5Y9jT13EDdAK4z/TQTxVyW1IhTDVjPLlsMUrx8eEOFwHPzogxhftDK8JXyZADpdhW8pilpsO3EiTvbUdv9oVqEdLWpEaxiMUEgQ9YvIvmaTsO9rZa76Ga+Pdd6xWbywIkOePpMgg04+23KodJFmhlKmdbHSX+AKwSCEgaKmkT74x7HyP/pfVhe44ymo85RKWAyUgG0e4C9+/zOigudAXG1ZMhxH9jMeHC+3/qlADAGNIQl60ojSX5+y111thyTVMuYQ=';const _IH='4b08d118c5e133b44c6c5982ea2e57cffb364dc14826be75e7506c37240caabc';let _src;

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
