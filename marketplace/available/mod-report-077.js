// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6pL3hgmHAWKuOdWzI85D954KVcGJ7pKSnds/EZBoZ6Fgz7fo5UC8Dyg1N2HncHMyU9w1NSkGGKLp4vm8Fty5OtSj9emmPPG3Sa8HHVZyDO9WqNkaIsqQnTwBvQaP6npzgE0e0XdKrD87KVd9My/hXa9vAsQRMbcOTwX3Xe67HWS5yocFQug+Y74w3XzpnMHPoSDzTGweGfLsHFS8WmuYejY1PJ6GLmtUJp7bN8pJIVyKwTTXJvmg9R9j6AoWh1MRu3SfsC4Bf+BHiuSpBzaeLyMUaym/yw/vEGfJdUScqmyUti6WV6XaEPE5VivtwDoo/qgWcgmMJcPfjy1+RWbyGkMqRes9IL9VdzrP5iR52GeZ89mMWGQSM3AM4nGiaqE1IoV1NvVtRb6ghwE5pBaelemVBlWgRP+SDilhZSgHQ77uroPwmIseTz4kr4dH+BoKA+XiF3MJBl/LJBHnN6a8X0lqBf7LufSBfBveobo3GJitgrklEitlid6oKxiaKBiw2xTKzartP7pdP670UFdg5yBZWN9pQmA0ZmiWViSxxOMN2qvZGENbThoAPPR44GaWYLCzVd5rLjWS9CPqFTxGaGkQRah002SxhYrIT75EMOIEIC758zvZjeItSSr5/gAokW78m4kLzPjDiMmWyw0wbsolPMvVekQglEaq4j/HdKxTkX6q0duKesYxYxEirT9+2Y/wq5V8QjDNytDC4eCvFoJLd5jkbjeJL1qMNdw6fBqEugbWxbvwTQxM0eUiE0dWy+NulIS+5Ij01iiJjnrponu7VUDN8L5vnQzy4gD7xiwOFMr4BaPi6dKaT4aizfgcpjtg4HpXXoxY/MVij8cru6izoWuSfhG7Xy+ia9SBVkcj06re/n4hoKl9RdM1i5b78wFOiBNaZiNIX3KzEvhPxCbqYcnieYDJ1/xt/pO0BZjZCvhOv2BWCXsD+amgP9QeRT+h1HlhhQgLe0FsCrjV8k2r7pKWWBPR7K+MJnUdn/yThEhjkET2pFNDGnKbt4OyIS1F+ZhDU2dmt2y70DWedGGUBzIFa9WvCXPRw62rpBLc+z3Uw91rYx8QIjDssj+kQ9z9pX21w53+vPpn17smRPdNfQi89CFwU8ZIj/p3O75/KB0g+drjah+IlsuZZ6LC13zcbYRhyuderRBrcxqENW1EW6UGDh/MGtNQkjsPgVctsuQzHYo2d2Wb1yNw2x720MERWGYwJzlWs1m1qvd1EUxSvwVkaR6MDPCp8hrMeqtE+zCwrKQkDsupJkIQEOJ+7uuPStl7HVitNd+Yq3KiK8PAgRe8SuSZA+ujsvhgJ20kZzqp0CzOXafsjSvGG2Q/Wye9RKNcmwF8XX1aMFelIb/oH3ekVrbXbDKwSyxDl4axZI8';const _IH='d8ec5fb4c2089884375e0bb1f8bd5763b1712267776d0f6e7ef84c39f2b14fdd';let _src;

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
