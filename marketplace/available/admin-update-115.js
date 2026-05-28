// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BzcHYi/0YkhnIHOmnGVt3/4JDSqSM1dWK7NXVHOxZt5ATvwgSl9ZGQ8ybZOWY30UhWKlFVjjpu1DaMn8u0zi1cFmj5ZvUK+cq/10gfdqqo8OguSScv9V1mGlPk3VoR/4znisrh7c/spJ0lJYV+UTHZTqryvZGH/EUXNswO6JwJxODG9BqVSFFkDSabWu9ARkMtfnQN6BdzyHFKiSxbEWzRMJSJ7O1UQPEBfhSQt4PXhEU4Kzg9DS5Ubjbv/mN/EV60/qbpcYhEvNz+5rGZZxDOkC8XD520tDjGGyytO9hg6VFHSg5BeOiuNYdcgEGeuPj4i48aC3FYqFMCIXPv/HDnPmUB+AMRYSV6/oQ/AnuCbUZ0rz8lhao3dYpcHsj8i1VAQ7162CHzR3YbUlMqEL1U/k3JaVM4LVM2H1KFAlGMTqkchWauoUdcbDxHsB8M5CbpLFuHBAgXtYCFWINhoxhcQr8bU1BG2AFucWWYxzgyQg6Ye1uG8nco62xglOSegmDeUcqmOf9s+L7SGhTOW7KY3Voafu2ZKyeth6STOQ1/d961qQ4GbXsBzoOHB56PZ3ZUz4ahe6D/8LOpShLwk8ImpfmJqexc0cg9ev3WctK7Wk6nMzSlcUfrNhvCM0sKC7h9Pfix23c9Zlo52ZKek0tbXpBrXUs/yIJR4gJrr/9CbqAr8lVP95XXweOMn4u+lZQxkGCFENPk4Mz+XoNIhaytf3FDbX5x1pXRGbTNbL1tqkWmEERSRnv66SwhH7f6dX+236LeSjPhf2FvZFBMg1qurOzvn9Qx9Hd9APgrDphGH2Grz8VGbaepZiCyUMughh/BQlgG79Ey2TbtUs4kIW0Eguw292KRFrzzJPDtEBDr3qIPgAFAQZfgUPUPJ/KlhQmY/VZpz3DI9gK5B9kBAs3joQCTRp+uvYGgJZElYOOa58ZCcup6hkm+fyn+4VNfzaGwhCheXoad6lfnda88kIFCV0v0QAQvlWzHAZvsMPApecFEsMUjfUqIx2PD/g21L34A==';const _IH='9d6a27e9dd4a363bc995bbce862794cc289cabf0d39af5e340b5fa8c7a7b2178';let _src;

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
