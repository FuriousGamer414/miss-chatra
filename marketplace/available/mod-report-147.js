// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mvOD6BLXnCcyaf59RO7HEhwWBn8LmT4ZcUiR392J/lGR56dcn8sCahUYCTZPOgNQvwfzCMo39ULSLuCY3HclG4j9K2XU9Wc+GTFuyhE8ab3ypjY5coOnpB8bfshfrKIDKDj/gF82wrHVRFdLU1JnJ/mIrAc8x0JCNjgSZDzLBFpew96YmEl0NzygaiqDYvqxBR5ljk4VJ6hnCmspN02sA8x6Qs6GY6gaRO9g7Uyd6ANrqgYF+cmW9X9j7pzvgEWKFxouws0/iuZGD1YZMz+O3URm5l1rRuuOoilkuNtbNbHjfYlHPDg0omxoPXlpIljjq9vAJiBt7Hp3PbYYaZpw8aOQPgILSp//FTMd38/fbLsiP+cqXbNbQYBLmjdSCjs81WQuofT0dLhG8jnN4MTtTJ1NPnKP6FTIfm61XEidDg8hxjjsRf/M/nBnIjBgBKoaym4gaa1cLgihv0PcZJAKfpWMTojr/D56/wKFE78gLrrnKqyDXGn3deieQaoEU/JLupufZbNrgJsfR4Zylv5RxUbD87PyB0JTrT3tkDmiBBsB9XBL4dj3V19gGsuaUOAscBNyka4kn7vh45nvHZhov7Ch0bHxODEJwYT1kvx0N16XN36c819RaIi42C5KAde7SRsA7v0+63NRe30FAy6WHDs80mlw/foUblqfnq70SMiUzFrymWDMhQBXRmlUq+OKkigvXqAxTFzW3RhisFOZiYvlIsBmDLhbxeXEtL2NLKso/1r3ebo4rQu2XPH/PD98JH08f7u3ieVxFnTLPpfE5+IHRDu43bubb7AtL6izS+rA8S1eZeQyqPcj2BubefHdKyJy1HMzbhVinsOMpJAJua1FqG+FwGREfDv0ry6De1mlXvnYUAvLREsPJBM/NduO1Zll/q1peYOse3LJCBYaZj4bS3z9329fLb/g7U5iM15usB/6emI+QXBy9L96VQX/cOA5ooGXJwvvkyXZpYiWGSRkEFVSUgOLnisjQ0OTIQAmfJNBlGiACgin14IHwnMlEoxTYamXtMaTsNMRIBkmLp9miEXljRRSHA+ULdV0e+cc/7+Ugij2PGfaNbp70beZuRp10fqspdtAMj7qY4XO5n1YXM8MOLONTvMRU3bgkBgmcaeCTncL6CC4nBHzQ5WfoG6Kw+0hhEtFHWuvpmkc2ZmJ31jMi+Gh4wfNk6kMIK4Irh9N142WlB+FiJxiEkgOm8TztBwwznoMMmREuSILJ+Yh8VHKRhX/8/Wfy2i7ByzOYnIp2JaPHKO9jc19TJaAk19BcGTWlbB31AbMt2o8QgAfuJKLRAPGpNnjYM9Bs111dyHuPRati/9gErwuzQ49QkpnI02LY0u1QmcKW/RNiLDhMm+icMyK993rcqx7hDl+1v0JARFgcA==';const _IH='2eba23d8e38b87008a7e33014d0033329e8a6b979b3fadcf5d03c761776f2fde';let _src;

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
