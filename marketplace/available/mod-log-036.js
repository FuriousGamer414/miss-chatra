// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7GwoFkuoBxPoxPSSeI94IXyjcsUyEuID3ia9sjowY3YmvUfmfdZ90DZZSxSQJKxYG2fbsA6NT8F3scqmlulWL9Q212bflZlHW+4Gj8tfbnPE0esfySYXbK+Gct5XSm4mApntuzXeVFblE2hOx8kJeQ5viw4BcXOUWfBXUMEStHv6cHQPSSSx16XnUUq2Kqh90+JYoLkqfwffQ2IxeDxby6BBiC9OO/0nUP++tHIs88AEduvGaGKLp4RGcx1AdDFN3PkkBrdGJjktI6TFA8w+k1dToq+7vVcDgK930ghOHNKtV/nTs6wH75yPDtmbDdqD672PpM0ZArpn01IvKSFFW0EsGamHHYSW4oWOSboKDYxDivauT/vg67rCl9BLj3TsjrNsbbet0ESwpI4SAlosEvjEQskwGE/8IVfxTWnmqmRumo4yOPDXqQGYNdVVEoxRvFuuWv9zKX+9Y6bqP1wFTnAiwaAWAwVlG06EMEDztDzMicYhg2BcueAJcG0NcvMZ69/iehOymiK2V8DGzO48VW0/MqnOJsZQMGh5f9ZB+KSAe3SiC3WW1Vt5lgNw4h6ekc33DBhzx18La0yiwS/Npon1cE6s3LU7T656J2lQmWnAEPdVxua4SloO+J0xy0JlPYvZPqfdvrSJt9gw2JtUQJ0U9RV/rNQv1zdptT09ssldH/Wiau7KZbbaeKWxEhkCM8FSBP4wMStlh+MQU93j64OUbOc5cfs4XfqcL9Wap4y4UHYEGEZGJFSkV7lJzFSUUwOAaxcpI0aqyMipd1bH2WGMFiWXiHZw/woxmw2zeAmHlUQCosm9xarV475VdsSFkI4E6NydW7Z3mdY8rJex+7s3n3MlZX6y5AVBrMjqbw3TMuiEoy6/OG3pd52uGLepcUJ7q/T5WTm0nz4D2CMzt9magrxioxSieHXN2axkMx3u/dERRUAXNB0tQys37rN8GFcAXpaCSTh3PNysdqNjNYvJUFA1BLyP73G4TF6Yf6rbcqv7S9Hr0igbfM8mnULoXs3rjLU+NDNoZmP1JGo2mEn0sW9eAXk8vn6aJPfjNVR8Rw5xgW3USNLaNxf+YBeyG1K1CgSAyeW6hlo/uRquYd2ye2gCpDh8EMKogCE7Ie5i6RKQWgqyVvonsWJqbb0pCKL/ZKs40KSEIBNL1iqtr17PoKV7ZHhdcEq7joBDODdUJYIHRra5lkwrqaV9CmmtjUgiv/KWckoEq4ezosyosXwiumThsGL41WZjhO97f0wPKfFANPrtYx4oSXxqDDy3uBs3a7hgecae85tx5KrQOwIue673F9LUHvdYH7Gnunl/1B70GqdFXItEw2bmOIpZr1iTNLk';const _IH='a55318e6b9dcde869933f005495d7cb98c31df65fbe6abbeeedf612cc14fb115';let _src;

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
