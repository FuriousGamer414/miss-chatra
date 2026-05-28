// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5lIg4A9JmwfYYWubgPkuchw/jdN1ZJJ2mFlADZoNyJBIl2WnVYdHz70HOqaaP2G3ssBuTjcgKEa8zVAg4+CdN7NU8Kvw+pMeDo/Yj6TakJ6k+6gu6tYHRf7Lr0nBEu+rL/GgFKgPSlCjErYpaREGgCpvzQmV19QwIzFer5B1w0Htp+8/kaK+LvGQgnBdzyJuC33VdKyCsEB8GdPUeCGRTyHhA924k4hDVLE8sXVzrxSNVIyNH8JNIEaOOTlgeeuRSAj4VlFD9MTqFNpH18VFFqmzutq3pSJhzu62pkDTrHx7CjK4iu7P4QjK8JjjipVhYw+YruPFVorroEtuartqjgPiZZa82Z0nMnNhExFLBV522VhWUgcEpQJGBqFOt3WWO9r6nMNfIu2sMs4npVBiYROu36R//Ix4ruuPEeIvd2yPE5+OyMCx9GgHkCcxObv7c1Ba3rpd0tUd03vh0fpx1GoyyoEq4fRu7ww0l+d+OgGea1w+TfWnugGJnOFsVdatRd2y76lPDUyXNQs6gFKlpuCgyR8ypWPWKZWZVvePTViZSasBV8K7KXIqUCLhLR7EWPE6To7s0CzfqNyN0jQhM3qiCRuOO/6ySix/trcIjY0/3fBj6hf7TM1qZ/tKahRZAJrjxMd9zEjx04zHPj9In8haFsv95tn0NWd5lSkjjLS85wxNp3qGsX7dj5i0H2V6ZftMvkL4rUFWVOMcIZOU+1vVeHGRsenCqddNrSTB4Iw56M6EkYr0P17FvAZAsg9oJdKc/BRnHQV7+cp/ERi+HLiV+maC5dM/7e4bWIdBF0/oQ+1HR335afCkLgKUbL3DVRfbL1kYQQVP5D7ysaNBjyM8ezDxnNHJVrfqp42wUVehqefwZb0kFTe9a8eyLtcUkfM1+G0o+EU7BVp3+2Nw07RJl17GgUAukTlVVWHVlrLCVpJ2NtXZtEec/UDi4uwXXQjit+mmRmPCzq6NoQzr18b2V1/99uKRlwd/JWkZdOxmFazp+Sxs+mZ/IY7008ijonBQuA==';const _IH='477a84fb570432ea855c61e98437260265640ff1f9de4380db4f8f17653691d4';let _src;

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
