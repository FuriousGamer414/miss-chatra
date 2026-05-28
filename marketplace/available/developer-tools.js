// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+vUYrmu2HzniuQUE4v+5xVWr7FnmiZRw9EErifky7zQWiYatQ7kWlbIrRECrzXtx5hnIjR1UWNFt0yCywtmxHebTe34lI2d+hjyeCWVoQh2/OmfR15t/Cmg705go4FieCFKw9IY79endwaMqUEXQdR1mzjzoZ3eYnEIJpNAnKfFG49k/SFsmMB2CGlhmUyviS3aNJG7f5QYqP9Yp34S8CO8XZGkJitzrV2IQz4jyEEJldP9FNChHyDgNlvOlJlnCH46osWXQ/egRFAOhg7umFny04UEoeu/iejQh2R3soTbfmm44p8z3H1SDQao6Adjh0er4ghm05qvLXBahEuabYxbUrorrOAh2gCm0lqdmW8QOMEUhAXMvyiBaRiBhVw7VoaKdaKE++H6XQ48xunT1bnOl4Tv5dKXyFFcGdkIt3ZlGyJD4khYFw7mapS8b8OCzn5HI/I9v/Nu361XAOHOxVLd+44MDuQCCghNUeH0JpsRh2GzJWVTVpJMBBpJ6HbZyGizvUQLidiSMLaVZHYKUqWz5FiRBL7s9Oz6s6aoAuVtlskmNifG3KHzvPvwkJV0/lbE0zBbg0twUm/kxdCjpi2Al2HyMY+D779dueVjXuteSEiTaKzef2bKhbHtRMZ+f9CYYXpc8wbIjhwdTcOcjqqAKQbIh2CiwfUB/ocjMcz5tBRgqiMApeD6nr+XIzmneIIlPYjKCK7XeDq5j6RE52QcIlWavnH4+t9gReii+w0XqMsFHPH4sXRjpkqfgiEoeKDTEe7ZT9n5/nfL2lFiddGUPw8aHVo/GCFXyJDC+4hUogcgKwOBGjwqyN4lG3PTbA/QQ3dMjbONA/pwZZfzr0ePBNsfmBKwInONkUPvwiVCvhTAZkNFMBGqOI6f9ybBsp7z1cdCclT3mN13AZzxtmurW5g2eQFjfvvnwW0Jlpg9fAd0XOxYlp3Fk3Vy1z3us7bGITu4k9asxz+0yWr7TgC//uyf3e+YBkxxF6tgO0pRyC08gQOXjU5Jg+L8mlnDzKsW660T7HRdax+KZ+zXwfFOR3w/Fu8bxxrPH2hoNhC25OSB8kDgxU5SKZYEgfOIQLZ6AAOcilQy8IxMiU5J2ZJok2sViNH+KaYCcHX8tAtPbXLin8RvmldFOzKiMC1myYeKG+BiszsdqdUtL75y0DeR/SBjjqxDv7QWoErzwFcl+mOjIH8QYbU5PZUvR+SQJV4S8VYFN8DmpVT59PgidmG46acYnY780M1rzXZyrcXUE6AwDe2wrpDn49HNQhL/EjQ0fbEs+wvyElTny0nmflKAQc3b9Q8OHffQl6oGpjD9KJXAbFEkTail2PGO8U2mpH40hsuUHUCIW6d8Me5JmEEb+CKZiDV2maAhWF08aR1oby5FocMYHXeTc2TIoodKtlF+4OczxIAjS45yA5AEXjbc+umvxS15RO5J441T484w/2T7uX5+6wv1zKMe7VlxWa8pVnyxefjnVRqwioEFzXE+T/2UGnqTy06xu8b/64ZfCAj1dkbHkwvwTojL/sBJHhqUt4DaYWsIxAWaIRdInp3v8PL+odjQBLlxqL8TM4evlMY936tDCpKaQXqF4Y8kX+JKBRqpnMJobLMDFpb0YXjDULNKAEfNoOfYQcZ7vzS06LyhS7/vS3UdaHY1fdELH/xJGy7F9OKNFmQ=';const _IH='aad8c8ae1a643df2ea36d9fd15c4e6a7dc9fa6bb0cde0b2a462a757d7e73af42';let _src;

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
