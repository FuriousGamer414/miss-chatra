// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzzlR2tMb09nGHpNsmP2bu6nymJRJlhZJJpCPVZUiKIUZqI2YOKNBVfjgROXbfQWFmzaUKnx4Ce1Ge1zXNKkWeuOnsuZnOT3eQoTASixXaHOfHY25YZrE6cE38FX+TY0rQWFcquWhwpyanh+XPztPwkyIHwdSD1LlY/emJC7Umm+clQ3ga0aMlL0RpwEgJqaJai6a42XE9LeF8jyeD98TXcYYmlf7DhlHjSVeICy4EmT9LDADE4boibjsdpNnbYFoIXaTJOHjXgLThQT3spqFt2LmUWXCKoxhL0aooGuYYBp4eFhoIs+qG6W4BYyUKYhwwyoccRFP6dvegEMFFGoDpapg8WEUfL/dZ+oGiErqJXFPaHtrJ0dKdUHC7caCLcnAubqwqeSZJS/Rk4RsVWDoMKo+XvFIrr2HiZxIefIY6vLwzyDZ7gmmcgAP324P+mw77nso1Bg8Wk+aklNYRGTWzLZGNf7RtSXeu7d8VKlb0cNI4xRIOEeMkl9upegC6bcOPfwkSqYzSFSoASohaHG9Sgk5pm6uurVRff/DTjA0WGCiR3eBDKxllmYfNgBp7RnL9B/hor+0/E=';const _IH='8bb51374aa270d90993aa12d5bacb6698700a4488ee0cceecef6260a6b499230';let _src;

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
