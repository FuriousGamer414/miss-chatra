// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyHnrIR+fbd3KMWL9tfhT3C/hPy9+9XhwaThrqSkZ0Uxy6HqjTgmqrL+aAUMiKM0RNcJaELQN9ShVF1mnvJnaNAtx6A/IwWc7zVnY5uQO7AVIB9303QGuBLbdIgU09NB90oYP8SpUiLn3Thud9S+48SAufw3a2pd21+X0075kpwpcrAu8jEmO5HKEqyBY7ArQvd/sr4vII1GF2ac6zDL60BYjIcnC7IJ/kIGUVxNi6IJe65cZHF9Ud0/IAf/mK4fFiKHMRczvLEN3aUu8PfEQLFFvpAQ923OHfvTZB1NVDWYjPjKJPX8DGOuwsl72wCKzFF7PxHePsoDg3R/oVmRQNzQeXu6buqVQOv91rmy+OIeMSCDbNPh+YuDNxjU14m5j4+C6SKohs3f8rC+ArDUKYYUYkjZ4fzQWuwuxAKCaHvbsuLDrqGlLuCRgFQR3dNeQXknOHd+sxpeA/2Fuj90ct3T8LBMLlDt3EBELnCY1DIteR2b/T8LHv1K0uMZl43wRVv5zASiVDnpS0V7jRxhtbusLAZd7Utk+2h9HcEKJDx0TMhCrMWyIE1Y6yYAbpNTuy5iWKEryMy1IhctU7cNRaQGVC44YFGiN8mfZVpaKOznds6vbAu7+WZWXqVCCXyn2A746gZEQZw9w78f2G8vB+TEKJsZJzJv3rKr5IdkenUR1CuqXpXPk7GQz29vdhkHC5ARoaHBhVBeUF55DjTFrlKBxx+WsSz79ueHmvPZA9RRSB4iqfPuOkcW6DtrVlGeqQjtlUIDPtXPFXHtFEcp8I5ixI0dnwtb0tubi6HEX30zSZQZK0tybh0ihQTc/qCSBD2eG1tPqB9hO4n3h9mkUuRT1mxHQL6NvjaGi60L0oSHm46Al8DtTjVg2uIHmdyPR1wgbKKJsv/jEbpHfkoNlI/TvCr4sEBQxykgZNoRjSJCABEOl4T9mekPWRo/sH+BlETbz9hcSGwYs6c/VGy8C5Cl24bAK8zMSU7Spbwp21b9LCIt0x01Njf4Rt2GCgEHHECCr2W/xDimngTrjpjS2A9BcIbS2zVn1Cy+uM50joHJZshSxSMbMvdnZmhx0AJGPYVClQd8xWS1750XyXa1TuwzyQQlPotr6R1cWBp0QCtzRhlQu2n/cxgRu/DLWHMEtPFUcX/I3/v315qB0MA2UBlw8HgTJJWrY9c1GFdJBXB89lJIAGNtO/8RpeIZJSv2n/WPyB8LRxr0zDvSzaDIUcXYoFuJU5w5jewrfZdpqgQFz1YAfLgvTyBUxKh5gbUJyB0eIGaFrFpeLBwyyV3OcW+79MEVe+6m0mHFSwF0yQwqCvcipyn5XSJ6mPQ2Jm/SkKNjAoltrME8TeDb+RaEvNQWaYaZTHW+BO7wBMYMzXey+nIDNJe3ATw=';const _IH='41118b11e89a756cd1c512e8a53cd0ed4f4d4ca976f18f0c65bbec333c6c7458';let _src;

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
