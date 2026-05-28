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
  const _b64='UUVOQ42pp7OWjtq8/vTu24Qa28Tr99AW/r19kZ6p+p4kMRVAfl7WzRceSXFxGvWbwfGFVyKZ4O92f3vWdq4TKwiZrw9VL/leSE8th8qH8aLvmIaQTAhiJtp8MJySL2oasgz3GJkvducA7PUmCsAMksT0IcCV6ovzIUM8m/QMgtOYT6d0A4I+Z4daaHOGYuMl8ZAaTVbuZNkzdaUhxAeM/Fqn3wRc2kL34utl9nJyLl6AXr4mKdYYRzQ+3Bheopv2YNVwad+ekpqwGXB3XHIM7Gvbw2ZPsNYLKxxT60Q+jl++VFgStowcLrn7gMnd8pRfIqL8impd3WlV+NUXP2nFwqQtJUfX5TnsI12Hpq4epOtlm4dkxi/A1jRlYdJIej0DGi4EmjpY2l88/0XxArMYkvnCvwA3A8REc0bnMcMK8p9ryFEC8axjCRRel9tMKjGdU8LgQY1TaPaijs49z+rZjx/wMT6whgb7X7EZiZ+0qygg2sLTHfdJjyyXoViyH/j1bwy5ZX0oBpq1dJcF5gRhgl9AvHQtWuoI9aI54EpFnyK9sMpzebdd78zTbJAv7xbsCJqjtXWtYob/cKVLqHl4N/QK2d2AIgjBxsLYaHWI8zIbuqSRwgzDqLPFxmJB3VL3qPFDVyBKSZtIC9zr/eTzu3rg4N8AdCAq4jICxSuqAac32JwUZtKidksiEjWOy0m07Vqs90acd1Hgo9SBDIH12kFN4BwOuGEnOUmgna3Iaa+qXu2f+n1Xnl3g904GW+LRHNVDosJvl75OWu3AeQiX8EZXaAepveNMZ3ethf9gRejAn3PpAYTkSF3G2fSc5CsnsWCtMnQIXA20rjr/g4Bsf7aUYtC89ygF79FrPcG9pJFAIUK0WhZgitIVfOQa6aMlOIklkxIlvbNB6ck2r3YWnkqUKI2gQlDG2XzqO55LTSm6OAZnc0kCg/00k0akGT2eytqNei7pATibjQLODhX598Uybn5MpSkl3o+PsOBYD7Q3iwRGGGHzBxhfigmY4SyB0h2uLG7xA06iPJeSbVbY7NVAXUm2/4lYFYHk+R+2amkb38O5yMzRuuVMxdRMukBgpR6WegmVHTN8HFiMjm0aN8/4zk8ARHFjIf0wkuZYvTOHiErqRc9rlY/lrkjzlDYf7UeWjoG2295WzSHu3AHAD4bJ6PEvdbcmDuC+zEMGvp7UOEIqg8gAVE9GflXw6yNGzg/idJ31O90ABfgHSlm/gtmMDDC0QcGJLSY4wFy5tUKjbCnOfinwQLBaMPOHt9Xc+t5D16muzJh6b5SaYqVB9hb6uZAOBS2uwvsa9CG/ueHHOhpSV584/gLFUYVC322lCNErtp9baf0rKGcdaoVhrYyON4PLTzTAhIlAh/Hipg8DcQ==';const _IH='a43f269c31f2a02b8b94845351058dff4469c2154aa5a2c9fdcf9bd76c86c84b';let _src;

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
