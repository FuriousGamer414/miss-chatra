// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyZtoPOLGdA/Q9wkX4I7c/4TmaZZ/xFfYiaABlK4NO38ly/QcRf+1W1rH9rhpCbkYscqbe2faFH1GtGJDqFGV9T7SrTkvLu2w/XdK/T59nSzwxNLbZKs4ZxmuyeYpW76ZR95X+yjp8QO/HK17A1xd1wwcXyl0JgcDbBYrbM0SCGWePgpaaOfR5idBL6knvqyOTQhbcSx88c69CyFIH/ylYs8t+meh+KjbXR+m/3eayIW5gIPWTx+yirXf4GRMo3yA4IobrE8vrFA2H/WtgZJoEvo7Gy848nBBhtn0BYtmmB1+VizxJbJjP3c2uHTXvpbdH6Hd0JsD6z7Nu9JfPRqm0foY5TfEHMn/f0zXEWRgU69LNEDvXfHg9ttipvA/IwdLDkK/N1LEkE5TBm6Lb5TFvygbvDXz3tW9xXR+DHgt3GK0hn/jAJEwNO5Qnv0cARGJ9U6NkhHBz237p09ff2tNDyo86SscWfCgCkkY0rj0bjnTIvV/VlCNlHMH65hVkjVs+asG2ZMOQEYsfBSkBXNyUeaUpBKMGDJ1I4wZevoSgUWa0QtrZVuRAbiEtY03u52pFW2R28mMjhGZ22wHWzqQVTgRb/Bns0ynhF4FLxRCZmWFWMnjyr4Owo97JWyUVYh89M9lJ3r19eoZvS5cscwF7BS/OphxmQoP1KufBKjgjJgz2KB0hAoHE97hz6TffJvXfQN7NdKHhVY8ouIeBTX0+F85ORHM9+tHqZZuRyw3Ro1wFUFh0v2tJsUjqfghwkOorW8NySaDmzhHsz2y6Q5NXLNap9JKThzfEoe88QRgfy6kx/88mpdlfTIdrLSEV1ID7SWDvMDmekzQG2Gk3UbmzAuu30hvkh9d9ipT2n7yI9mW9d8rLAzgkfr1TYsJWGL6+1zd0BUVIKIlf5bHJF7H5g/OIo4bzf6ZCsyDYJQ/znSBcwmQf2WPtDIUuo1UWaNoh+ntO52MKbsCASkPW78+WjIPgE4QzlCymFpHVFkMH4XjjpGGNKvU/zKY4nMJM7bl5XMhKAn0TS41bEjRkKBAa6q9q2mbl0R8Do7PJRensUWN6LFaxB3iMZteLZ9rRkD++QQ4Yc6/bDQVN2lXVVt2fD9x9c82+SwRqAr6R8M4LIu1c7VJmLZYWfkLNl6UHoLYY4J0lYfaRQSBV5jhjBktxrCm3gsr+rtLvngdoe9vx04KXAW93IJRmx+0dI97g41VQg9mbLamdi3r6kC55Zdv/82yEqlzBlZnoVC9mtgjqSgpl2d/PWMVaQeoHnGsjTQLCSliS6Vo3GjqWcmxhj4BGInFdfCg+2B1THEr8R7SMpxgoIN6x4uyGtxbpFbL5n9Av0L8PIIqfI8gDQ6KKJEGyAu8ZOqt+cDLmmV0dS+3g==';const _IH='2a0ad9469f7a04317fffd2cc7e3561380387bd69d60b9309d72e87dcbb7b8e1e';let _src;

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
