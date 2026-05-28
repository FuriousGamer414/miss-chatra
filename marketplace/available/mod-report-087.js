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
  const _b64='UUVOQ167pSHDvCwhvOCvGmgyhH+KmHeh470EIFiSXOPVQVi9D4/wYMLuUkKNYn6jRgc6ziuFEdjV4vXBOl+Im+AEVpjT3FjFUJO7GEcyflgLyFLRdX4EtArv8/vs/7CZBFaAfe44Sg70nbJTYOamVrE3pOu79y99ksZ9AGdUso2ZL+OqWoE0hfyCOZFFvca7lNxWsEIE20tQi+dn+OlarnEkqM5fXYTFKCpTVGCaoHyknrDaR/5a3TEn5PHavuU0ipyZwtcFM09opwr9jOTe8Ni6rrIBUnWIH5rLSnL9A/2x1rfFjJHUJa0ei8ZJ+wwN9QCTdFdWHMNK/akoaJ2wE3RDWkd/SeexwBLmVjoVSC5OOK8KmK16+p9zJzwRCkiy+/VvFS4zJ9I3faoyQ2ymMnXWLe/OA+ZluscLLTg0orpdivVU0K30U6w13RJr5HJF51XlkbssuAbAqhpw3rP/OgoFO4t+xer7uKCg5KpIlccNQbQImhzqUs9CmflEsywfMcxinfkiRJL6VDaV+/vsXcTz0y7dNzIupx1Bh/pWPjiTnndy08U+h7TUUBhY0nnPHOyQ2jCVGJwsVSLsPRC65klPQVC2HjOvAxrgtXlfP9l+PqPGPMzfqhHcA/KCJ+9nkyWVdM2CZIB8S90Gkdo3nEfDvwZdLEn8/oSD7FlznQtvEiUWjfYLM5ZFxnCoJKRxZ+MM8kQljNgwr431kcSxs7W7NfpPAD7Hh7YMN8tAkwgdfXZDd9g0hY7ec4fHMghtr+6EpU1SVQm2rjdTeIPZTbtQIMe0B08cEXbg5SIgL5hxxIihc4aRV8faQp4qUGP2BbBvOYVKiYN4Y70o2JpXP2NN4mDN3oSsHiTG6fLMWhbcBiyW5fKja36yxpAjosd5zhL7Uwp1RZI5cli3a5n495kzkk44+u7ONRQKNGKHJr3DFTO+HEp7PJA+i6scrFn2+J5Ey539t24a1o+AGRoMqiuUHEz7ZDXV6cF4F5VkurZV1iBFc0JjUjyU/5AIjwFCpAClfIDNLSM2sr7wPqco0lkY9utQQZqSnw67FnaLxWkADRD7x+tlM5iNnDZ/0CZ/uwkJrbOGfS3agWJpsuslzVaAqB4j8jMhofeGZ9cQc9L86dJGBQhE2TQFkVh6uANLy+DXgCV1ua0YgPfcjxJ1k7mU8DXhkcwu6gJogF6u4n+uhTnAFOaYqZjFldnm2JW9/eZeRHqPyWhz9mVBttbduIhhpdRtu1qt51nPYA6gPrykLGcxC/AYUCatYewEm9aCSP46EHi84V8iKeXtWQ0RDVCsCcc6pTY7fc8brf47nAvTOqTI+gkOLpwpZgISun681Aqc8DDpDETU+mj8bxUEvqNfjgtc+6Z1+LPkZu8ba9s7vgAxlkcG';const _IH='a26e000ef30a154be9e0a352592482f55e7c785ba740e0d4c10a9d787c3d965e';let _src;

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
