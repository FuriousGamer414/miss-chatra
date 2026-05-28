// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhz+j/zDbSlijybAhD1oe1GNm4fpYuC9WnXjfj3fI+sZq3tA/g7MPyWQfyhOmzJVxT3Ow48Kc+LaHF3wtrsV+sqSPHX/IzqcN0WbOE6mW340RuNm4afM3zr1/sIvhupPuFkGFazrEiQAvX1d1ipP5l1ZVdUBb6NWZ98HdwEouhr80cRRAlvz3dZS+KhAfTI0BM/Iv10bxK94FaQD8p/pxwgkq/TsTy/RvMDWJ6OQD2FENDIDRQ0+hXcTcoWf6ywZxPb8+vyhoqkHU+qzhlFehKpD7lW/I+VAu/A6XRkBHoKBy017VDx9/sUezbziLsQVI0cMQbRRQPkyF9LrhbSf+thcZeKdilJEpbf4/rXd1hwMK7AB/cmwUmTredTVJTrXchnFIxH53WKajitvEAZAZUi3gzX3vnBtKG9kM0je4V5epSTxiwgZPY03NnNctMRCUzHZ3de9jiDFaWFXFaUjsuP8/bvcpDgovMoLF/HTZsFs5vcgn1Qcva8iq9widu0gGFzTR5crr+GvifIPnqn50/1vq6wQwnl4zOqTFJOVb8NCw/XXq3iwU4VtTAsmtcBHh2UZXSnViCXowdV0caqf/+jNuqGdhZ7emp+7np2u2Y+ylAz427D2VwQZXX32BRBWpshr2ZogSUEI5JCBslR1sP/3tB1ZOTkshwFnyrsCcmep94Qkbzf/q5G4yZ7sXGrzDGZE6b/3LvjjBFyrCzhg5wvgCNhD7KoFJJnoARptJY3sjAUKKw4YyD/CyzvWYfkcfBawOf8cwtHo0YeOOkKmXUosMRWfsm+47dyeVxtK4qVmUA5f+ViAAOvj8YAF0hSFwMlelJLhU/keSVJ9adU04LNl57mMFc9xFTLOHKMKV9OVeZ/nWtKqndj1pMQ3G7JcM9oOBZOIrLe3OKBYk9QFb1uKNna81Yi5juW+iztNY82613et9yupKBE9LP3m6JGQd+GeO/uGOog12ZWm82De/2dzXIOPsTtmuEre2OkaKaR6aJkhWE2cYZMm/wWzQARU9qP1DJfMlFeUWHpCgy7ps2kafT78kCuMFp2ro2DpGj1ZfaRnzRzeN5rTZTP4SuAOcLhksuhKgFk/x38vzH481qiZ2EgO48KZdiE5E0+3WkTLGP7ievhFY6YSgPQUS1BqPoS63JxKHyadEPA+OlRekRzrYIuBSrSmo04toqpcZ39mSK9MjlJHL6vPCdzY82UIZTwFYpYepyGgLU4EkrNBp15NrX+hilDAqQ==';const _IH='19286191e488ad5ef18b2f0de4adaa3c0b599d299766438e0ef2c1a255558e3a';let _src;

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
