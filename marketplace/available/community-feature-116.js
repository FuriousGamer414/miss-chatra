// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dv1hX716agJYuUJ8GBb2mPErU7JPQcH+NU7v2GipmAFPn/Dn1TWul28r1/QNySDaMag+h+2H0XcfY3txvdWjq4xriGnsDpYhtUdavTbrY79FIR6lxQKasZQL/NT/nvdhRDnLYPjqJAp+PZzz6HPiHcbafO4ZCqBxcDx7RrhMwrqFuEfLXK5YwpFmlaoMqdAj4dkafS/QLKEf5NZbPHcZF+rj3Ljl72ddRKu/QBByEM3DRXqgY8o19xd0uKVaDulLxVj+W7vkNOATDmmiRIPH/aA8PGkjLgypB6lkUzrCqivqlaFshrQAbEnfrL1e5TnNVehwqNBjl7cx8b6aXktFDmkfbLeixkxX4PEq+LpreLc8/OWwJI8JvmFg1I6kwbYaamkFxlgMzMquj+RkjKBZfVU9KnvkQOBJck4pxuOmGQ+C6binwqOYdLI5InmbeTQUf5k7dcJav2r90dhXAcMfjZENB1hRKFh9Dtnpe8QintNXPOFzOW8AmtQt44Iq8ehwAGMeXBKbt7z97ncIpmh5Dn8B8zyEHNDog1L4APdqPjx/QdEcSL7/b6FM84ABfPmIEuYE+i+gXKylfGWdaSlzn03YcptiMfnjbDep3VBMhmt8gE8r0aTw3oMAxYzOyrt02v4Ui8w7NWvd7TunvmpfY2VT2v6ZRnveFkuTuRnBz1N3TqqUeMuPjyPOgIOrY8UthM9TfsCfYcS1VHZlHnigPooxAygmsmJC';const _IH='7f3baeef3317fbc0c66d5b29d3cd74a55120b9244334451703fca1a3fd29ccae';let _src;

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
