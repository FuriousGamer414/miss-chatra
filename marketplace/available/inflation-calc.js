// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ebvkVDREkPiE2MnzG7PCHJrvNUi/PZlIcQvw6laC/eKLprkeeyynAbsciwSk/VCuW43f7f/hx6g2tjxf4PtK9OfpEkLv8ci1LG7aFb1IgOyVqqLXWX//4yUUpEjcVrt8JjFdV9o2+iKOISqSW5WSB/5uFJLqcAwF7wlvrnS+77APZBhXYo5f9Lz+3TEDRySBfTglhRYOMwfdOBe0CwJ0QdeOha+DI3TlMA77mU8rxNG1VUYj7E/PJ38PJexro7nwvaXR019xMV1BF9xBGPJ6wPsOLEoOoXN9PDBhv07JIBrap/QcnQ5g1cVLtQOagA2dXAF2PwhXmq34U7ASSruRC1CiOIUtFTNW5+jAbc7ZanR89cYGg+A9VmbdbZGZ22NnyecQbzqxboE9n0BvbvPGcMuDIy5ezv/PYPakp7/Prfx8QSrTtR5ERtAo+z7ImG+vs8X+SfXzoEOyb17qNcfjYPQIFaDTCl1aoqhqiggpEdUq+xKP5Ox2/T4q9j2Kqjr0WJsaqh9/ElG5H2aIDtWtIzDzrzbCtv3qXjhrU/8ZTTNcnByCti2rDQO89IhKEzxx6yf0dtAciAsIfiy8B/MOwzWW7E8wJNxXr3YBwb37PzQshEMvgI+28Hobe9T9r+cgtrWZaIm1wfrZZ8jKrQ1qEmyhxReRjlgitNfBn7Mp8P1dkUONS5gl3T0mnPjHkQJ/Uj4JN/7goIB5hcglwnQZw/SW6OkCDv81NcMnKv+DgzNHFj4hKocKdvQDAvFu6t0qmV4RC/AbA4ct6RXB50BxPzxCp3s/c0eE4xpskfS1AR1F7jP8ZWEfzhB5l17yT+mgJlZ9Nq0qW1GrBEeKcqvSjXjagv7EEirMkcxf9CRMu2dUBQ833g2xYmH1CeiZBYAwAIe9O+QV6fVj0m5bld0JXmQKzLnsfg/7vmX6Oecag7hybwvyTbulJwae5Dp3QnovL4sQGWuGo6MD7nW0ht/z8uLxSDvOb8YpM2isQQ4JA/TszG0iLHBOv5VSD6M38EBZwSKMhhAyQPk4zXlvRiXGt+vtQCFA5dm6kY0VI/lSyJEwhGngTU+1BEGouc24k2PJHnAfRmqI12svcILZ/dg525OUlakirxnDA7DhAL//1mtsg4fTjyFhGCgoQyNh0f2MeQxQzLCNC6G2T8uBoMXqFqia/cVbiVaqAF37teXxPmRF6U5o/BGDudF4tjH3p25pBUiD70RZ1QDhtnobGGeRFL+ve4L9sIU9znxiRd8E/DGNtrxbducqe+rFCCfl9G9NYm6PtRc7RUiZms3mFEZS8OCkXo402LQZBUiQ0dmmz78actUWzFW/791aIKijICqOPW5jfZEXsSj+Rf3WSEueu3jexzuoYz4eg4jTDlp7woxleQuS0sCa9g4RdOE7CzF1SJUq0GJmvvR/SkItL4YzQBipwFjtIfnpGq3mFg8ZRIyvFI4zIipj3E87OLCz3O9F0ARwtxo4eyvQFUZhsL1s4eWG5chC+vF2/0alst7IjVuhVybJE+QLcxBq4eVOQnXSh8DpPMrUT7I/zUPIeT6cAbzp7oFK5mT4Wsrt1RUp2N/dxsipPUmDrdkj+MAtWGfu1A9pV2nnzbMaNxAO8vYnwBepikDxHCpvIDUMYYwmFUP2bF+VyumtgbIX3EHxaEkPElc1+cu5uha63dlm/SbVeLbr3IOmODEwG+Qw5akOIRo+7udNBtrZNIIZEJGVKoibHpJICSNBsCrVaJkXXlklPcH';const _IH='5501dcef69cb4bdf3f686a2dd3854ecc5307d5ed56d078f10ca794ea64715324';let _src;

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
