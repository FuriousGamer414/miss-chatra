// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8hRq7HyWelEfP3CizdaHCv6oX5sUKelDgh1vFFmBAJLtHIwJuQ52MgM7rvx/2+Z0K2+Dw8RwS7bXzxdiP73T5B3quuTaqOxO+aTtOf/A7fG0KDqTkkQrk70jDrOeKWmHsG9wVT5SOJHNk+L4YZ5k88wLgORs4iNbfsY91Eu+3gAPGeKhAmyDwR081lyTRTvLS0rpJycjPv4VUgzMioYoMNBrZQdpsU2fMvbRneh030WlWA13KnK/MKZ7W7e9MUw9+0WutibxAt0thoUgdQcjeLZsGPXouNo1I5QghwiTTdYncajPZv+vGSfTwYgDPCACf2G6roSsFTV+XOU8QzRLEQyKZQVFFqMpylTkFZMqFOB/aFBIbJJjZkldgA00gK9b8cCIahEkRHg7btKEues+z4bb+EgArk9mShggC/EuJyI123NHQQP8/ZyjJX0hP5Ya0EzsvuhUe4upX7DD1h14l+pEIxYv9+VS0JMzk/52+xQCz3darQpJm6vaeHP0C18uDoO7UeMsVc1gZT54Dl5uCPs6H2caLlprsMLIyH2cNwjtkiA3zU0YjYlcT4xe9gEOoUfTBuWlWVJsUaibghXd8m63lRrJm8qNG8SPaMWAnoaUjgvY1IVf44qZtsQIa/C++ofawblItUK1PwQfTGtNCwgwkg4NV4iCkjPIx7tt437swslQlGi3T45s0xDCfFzwesKl+l2nzi6y7MQ6xWhtzMm1r+HlwtGulPyUoJ7v3djL+xBtvo6CLXlLvuGP+6+u5kqm358e9XyouVKSIqXPwRSD55T5uCDv2xg3r2FPfBgaFJYnmr8pKF4pi5SY+UyEOr1WV2KOjWCL5ZjIltsDIX0D+t266D4T07+0zCAAKKJ1FjIlfGqkLafDo5kQOwuk4rChUKY349Qm/y5VijpDVRLOK/RxktaHAgqGWow5omLAtwDwvOaztw7fomyMLtUwo7Ru02HaOZIHRakMS/wT+A7kOoogPwyLOVMoJZl1Un0+Lve/u86xs5dzen54Zl5NcSDont6l8IbFy3KBNNnaet9elURrphOi4IB922N9rTrzX6XuTaSULJWPjGm7JD7hEsCig2AmmDYgCowqjf5N+/iM55N2C1QcQ6GcxAxo7UGPTexicQUcBwhrWTDEbH151o2hF/52o8i8cTyFfzAV8rLluDSlaUUrokPkL+HW2tf4nDQnhGTm3902boujY7pN9M0U0XXQ7gV';const _IH='398456f6a41ecbf62abebd83c622785a7f039bbe52ba9817130462a404bee2ff';let _src;

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
