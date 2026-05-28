// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7XOy8oGpeee6L/iVzcTClxkQDxMhsAB1gQqSiACUIsLUf/tvkb+6Y//ictQ4OR0bJWAGdSl51Zf+pSIP5JWiuqtq9ZpxbT7ghNSdxnStjCyQSwqLxAvvngqccLB++ZuYHNY2QPygQxV8ZMTxladWMqYh88Wg4J44tWIFdTd+R2ZWI13JhXF+l6hq6UnD2ftTtQ4Ryr6PvfUEePbN8zAMCA5wHFYtWfgNIFGVE0h3gRpGfk3AG99ZB/tUmAkLj/vczlShyKuoZiQHgWnhXCQ39BvtZigNSeJ3Dm9QrTGj3KolmVfNTlpCfAfDYstUqyo2POYfO5Xf2NhS8ld5aFkT3cuq+oCL8GYlPQw5x7Cr1TMg3ato2a5B6S5nHeEI/lcY+zf135bUK7eywCdjVspv9Bpq9XqVOsyl5tvnAr6Qa7AkqVh4z1G9JNKvyVQB5SRheLME0E0HgwJd4uV6gFkntu6/sFxBWiRecSSXbH4pjx9+Wie6Ov/awf53mVTZPkMIkRMGyO8IqpKyOdthNl3oamkO9wqwwozgg6GzZuAY4LjrQgy1DX0kr79AkkwNcHUf4/BNFpfLPHNzEYHxshoHg03q41qu0/DJ3EYRapuH5EseKT5Dcv3agFs8gqjghOz+7khoVtWVgcBxi1UEoIKf4qStihy/8ZT5Ynd+M/QsJkRKwCo1tk7mL9SFwJnNHyZHDUprkhnROdR+FH+1dD01jpaggPRexd6hOdUnAgiZrwQgy1oQGrmA02tmlLSdzOgNcxUecvjTffL0yVzvmaAB87rrgD2ij3qCXhew8BvqL4/cgRDgVdw5YUoEV/ePXcPHodNFRBpQrLikqiwajdOwv9L2SSNLMjW4oSassW/3f6mMX7se2Qd3Oxyjk6Nqq+DQGt8rkDeSbN9ff3NuN8lEYwcbfioiCjeW1siho3eu5wyJrVJBA4VNi9unOIrsLV5xBAG+dmryQtT4SywpBdA615NuREAulx78fMOXz8LM9vmOcQaPCvI=';const _IH='9b6e2c6854e59757be093a7bfbaa56fbc544dc3a8e35b75aa9d8f8bff40056e1';let _src;

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
