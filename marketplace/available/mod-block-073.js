// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7hjw6bTk9D/c1wtGGDMK5j0DKX58umgMi7UkfXB46H1uzEKMjH1EajLAGUiL41WV3vCsU/yjkE38/guqDE5PT/QzgwmKI6wDgXpUbqMgDw+WdyOewjuMGOAnSOr7vuqPo4i9Ta863URVJ9NDBGxAGmveg3ogcldDZfD3ubDwC+KtiT1BqEGC7lyVU7l5C4W5cRdqI3XmOpPWB+Ghd8WhpMaB5zN8H2AxnG1FSwrCT4FXlIAn0NA0alwE9eNU/4Q+sVTWdz4J4nhuk76bCvQ7aSYoVBovAyqJ+XGRlFZlavOtqhGKJAXVLos3li2ZluFNADtVzRiFXR3jIxJTWzcVx0F8SNpZz21nmJFJzg9BF7riOXe2qOwxwSH7x+dsi2m02yc7GZOedv96WOcdwRv2IaLTTZ/zEHw9T7WI8B9isVsIIhhW42jaPJunzIjKk9NgGhHwsJ9nJBYsVtPa6hPQKm6WUA90eAnoSmDs1IWlEXFeam+mhREk74Q/c35Qr2jhbo/cKkGSdgrMusBmqZQCByNQrAVEjcZZ+p226Z1zEmPkN68s9CGx6k3SG32UKOjR8nzeE4ZtDyNLa4pBgi1SjmJMgUhG4pW+55uv1dHo7yarhLLkgZjs0ffvDbPVFt1AU8jaOMnBD6Bz7O2jdhVjLPP9gdEMaDGghPf6cScaYzilJtv9nt8SE+dZx1BwvYd2kl0GPqAC4hn25CtOCRyPrfHwJ51Zeeo7cU+sImPngE7luj7jryAMCFM2wyM7sDyc+lz4D37SqXVRABGbgbJnJznXBMVQAmHLgtwj/L8jR5q2AUgJhom0lJX8WdhCPzXCf+qI/ViiJGh6XW+QCHoPpOCnfhlxm2FA6M1S3JyAlruUMaijss9QPa3RW6N1NIdnDgdQ3tMuN78qQoKZOPhF2kr1ZLU0qfRYvzflWg9VAcJ8zlqq5IiAargpFefrkdajJjuQctZV/djxExlejckI4hYhr0FX96kfK9GJ0RiPeeoPTL/NDnC/PP6B5o/eetKNZPTYla5H8nmu+4Aadld+V1zTlu0l5pdVA4Lm4tLhpGABza0rPTwtWDMZu5d6bScJIZBZ5Y452ozxZTUulPYVzUuIeRck++I1oUEcZHBq+BahBssQidICiSKrlF1Cn4uemtOMO2P4UBjTwQQb11l97djGnRHZKSvf+5L97T6h1YQFjUaeiwoNe5a2lNC5w8RyZ6oqvWfiQod7v4sfr3G3YgO6Qpyc+ja3J2gzW0+eYORLF5MhSrCG1L17dCbrKUcRFYDJjEqEEoFKyxe5hW4NQ4vn3DEEGyhGk79ZvMlD1S3G5RlR/LbOKDhtxX43zrBN9WrVRr5MuYO+Y8sZj/95VJfTUcDC4Y4SLU=';const _IH='559971dd0aebb210d00389c2c053acd9a2313be21b2c156e743f6455f96e335d';let _src;

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
