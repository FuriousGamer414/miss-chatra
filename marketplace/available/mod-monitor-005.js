// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHoEHBvMWsRfRchNzZUyxrD3McepP0wFWh7pbAoZxbGk6HZYG0ATZjkLRMlbha97t+3U+YTgLv0+9m6RXDsLQyhAwFDQwO+2yYq9H0qzkbChmCTothRI7KnhqKwlbzLi2YvqvWO7AIicTLcIL7PYgQ4AxrJUP6Vcqe40t2NE/4CKEW2tUE3eWGPZSKlKdFE2mPX4KbvqnErT9XY/KM1ALFSk9POyRYHdCTjK1TGS5Sg6Vgf/SHYcevJXPepnAjbt1c8AOk0qOgsBMgtfSADdxStgYsHy1v0GSaVMVKkW1BHmUFCj+NaTgFpSqOL0n5mI7aSZCrOIPo/QGZDrvSFsvtiUx9jsdeKyT9+dCWM40TvowOFRkJGFBoKORwsyror0FrwyOLq4zNbn8JcMa/c/3Aait3JYY264i0wnVCv4q1Es8rnnoE0VZ8zzTFzoAt83ifC7GzCGssmBHnzfNl+rKFhs4XxMB8S+PUmShHSeMYAaDyS21SM2xKsgxLatc+L0yinm9a2jHfzdj73iy5+VQ8/mHAqYCueqzIeNyPgQ5X29ovbtunfJqsMuSfBDN7qrp5nQnHKkr3eFqzfVOJ0Zq84nJ5yTHJlZPmGJn7fb/4YjQHMH/fThFZ7gtmjjLRqLNouhNlBswi05d2BV2agXUa3cytZlEujigEeyQQeWNG3s+kdMOr94sTgNi4GYJv6I2BU7K8AiESvPbJaBvIotOhROO7W1jy3OK3UgCetvcZc3Q5ufg5ueZw+MoERRdZG/QGENkzRJHFbmAvA00CUmFRfOESivS1E+ouzOvIDEs+k/xDYqtELYpYGP0FnKHxFn7XkScwRJDz+pzb1/5k7YMDrsDblZAEgx1v14eQvrUUVdkqkYK/UeD1oD629avQhQViFlY2H83GmuDv7pM51tI8mF6jcoLeiZSfQMJDglpdVNCfXK0MDcVDBamsdvbKcMHlNIfvwQeBOcSMiZB2ZLqx3fRpRuYIAAa/UZ2fcxaHuxMgtBpg7BnNwP3vnTwTm292NjL7L6ZszNvmC4/0jfUl/+8G11fHFH42l1sX3eX5GBiQHX2f95dJGA4MjUbWyzuI0/+0WJumQV0AUdANZtiNsRMqO7w4+Q0cUlDZyOr+y8bzXesHeWplYGUe26bxrHTNNip4unvFOwZLiXhs7qgD0BALqpFwexLq738RztDCNJzmcQxX4ISSqd3QyZ17a69c58pJLfZoGXei4xMZ2hsd2/VTLVAiwxIit0EZQkc6SwW2qG8Zl6SbjfpjWifx7gyaUa9Ng2DRgkc6+d7tmXRDkMCFtytTGeR8fuY3YnNrU5xTfgr/OT2y8cICnWQw0uLNfiGN+bk0mWhJt4r9SqhF+xacSmvj1hehZOUgvMhczTJz/4xbEHQw==';const _IH='9dd1e7a30154e129592c5d39b7bb37153f16567310f952054b5f20ae3551476a';let _src;

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
