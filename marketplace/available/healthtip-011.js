// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4DnvCPpgday45o4/WIFe7Hzu2IKWTjdnqDC1Bd+4jKV0lEf+CXAw60O2TfLKYTmilIOkPSVh7/Gggl25+CxA1UhYHXXqdZWKZbKVDczM0hhhUN0npxA44eqdx3ASrx8Gk1ErTbfIhHgiY/2udaC2FTyNSzgS2UTRkKpXBcFsBFXXBM2zpcRnOWmgn27Egqxpp3Sx2VP7aPe1V6hq3YMjRiI/GRM/+Y2lEUviUpLlP8c0WW0OqF0E7EmV+GvpBNj02qca7nWGly1Qwh5E0PkyOoMxAlHDWNzr26hr514PYfWGwTLBiwMMP93Ykt13r8/oKZNLRR+7YIDKn8+fzCPZyPzHHmfFyF5+ghAgIxiVRRxNh5a5FcjkjpTavnsZ/i3OGqIDvlYX995dk1cNo1iRvwSYnealPZ3YOQ4xKNcXhJp1fYfHmFN9XQKDkYcu/dCacnPoXWmHOuJ7IIHnNeqwEnMMB+IWG3Ix1A4B4jcerAD2+G6/y8pYZjhGgQzGrnDnVgNoVEOJKYGlxaW9d8tpgni1Sjm/Iyju+LgsEyBxFjzjteRv6gPfg2Z9OXxzL6UoJr/nvi0glkYf7XpdHM6/OfsTk0LkBtV25tXhUMqRwcACSHX6jk643kXwFhBWXScpzZl83Rja9yzmNV6Z5sbf+Qh02ZbtpzbS7RtmR0x9GPIldsOuxnxCXvEBGGN8oV7rbKuvgiezuci40t/tcfanrymueaMwAnC5sokN7vtU9H2/Owp84oyxMFMMGJ7gJDbLuy3J/XE70NOsrxi5O0awDRzU1r6prMP+8q4hoWYJAi0JO7UFawUuaRhd4fpufHyUDDuNICEEdXyDv4XrCqceo/gr3sM8z81LU77fI2YYXdIhTbfhD1X3PioZ8gmcqxXyfgorxRwBRf3tBrM2T3mDPOgR3ZeLvhJtBd7kDrxoXCuj9UMtR7crd9jKUb4';const _IH='89722e67dbbd5e2827814a6a97e515b18ea145ccba7ca5d5f381014e609e43a4';let _src;

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
