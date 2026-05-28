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
  const _b64='e8g+ka8c48dPG7idNcFqGSpcuxygmjtqJUXfFYf7a4w8CpejAk9otHhQjjZoPaDa6UTMMJ3GN9HjungiVaEq7pC5bEPe79tuLEJBgnqf33zxaZnPuGyrRjBrPdXeT+ZDupJdl3prbSr5J2jpnn5bLHyUwXxNLgb0u2CHR3esWzvf7cV4PSRRiOkORs3ZQeUBivEs56Eb+N7Z0cYl9eaGt2/gb5EDLKDisMCdV+kyve+6m0DtVJr/g/eDRCqfhHy2KmIu5TBhA33hwkrIua1NthFJhvaT8yURcpNHw3ysDXwoYuZzHOkQeBIvVq6oF2hXMU/KcrpwQbOLCzE57ErlWTPLa/1GhTlWDkb5kh+AcrpxbsyjSKlQ5GT/0ORSC9VdnhUSNjUIaUD+jMTTxk9E4RVzHQo5ZCSuEGcqh3Sh3bViQXtCq+9F6YYfGpHmJ2SqYkGBaA1xkR8bjk4QvlT5V0xJM/QyhupfnLk5bt1PHxk7x2qAiRfaYsQpqaG9DokYPSjNrdDqYbIXem0tOQz/MO2MNXGqPRZLr/8TZ/R8VWHZGPGuK1WVS7Y/ZY2Ct2IKfZ0tnWwEqk/12CVBapxbzKUL/zoTc4FowLQs3T07TNAf4ZTOqvwrwJU7POBq1zty3NOhk3YpMplECBSY0Zm6r+nyHBFFqYjCBI09OZVGlQDwNO6yNU8sIdQUStivplgpEyax5xfrqiU50ROByZAia2QZDmMwioou8Y9wn2bCt0v3PEeRGzcBp80FBVlX30TqmMe1txof/lWdyMbSog380ee/1cZEBCZYPAvXDfLdpz3FQ0roGjMhHnN6gKOue7bR128aNms63n+T05nwWwZyN+E4sfjWY/GIM+HH0zWx9rOWxkEEFkjBqc8jrt4JzxvSsPeWcJxsBDx/T0qAA4lqzzPvdfPgoHgxyujTVzNjocg6KjVT7X7ZSLpvOE61RNWbkSJU4LFqECTSs0g97IxnMZGSeq/J/zOuqzXQJeaWSP3qeflNTSE=';const _IH='b374a9c570719663bfeed58b631a625398ed82e7f7e77279a7af9d2c9f508950';let _src;

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
