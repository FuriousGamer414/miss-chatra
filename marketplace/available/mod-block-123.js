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
  const _b64='UUVOQ69+r7JzQJsOKoctYwtxwjG5lQr2SCgM+T073yy4CEPzZLORL7kSCpDFwLDaUJ7Vmsbg7sSXJP4dwzlp5pRXVW3bogj1EVE6r3ojGJVoAywbNbNBoiMIMsgKb1WlbNxOj+jOhZ6cpa1c2fSzJRhFsBo9nhp+T3yUuAnQs3NkHFaofqJ+Vp43fF/wbt0KaZmPGsJ/eN+P0hbtTBmx1mCT3pVar+Gmw58/7pYXhWFD50ootzfbMLPgYi+nv1h/Uzdd7QYGLAe0c8aLE+7HToeGu/oPiPL3qepTfzgLfbLPQq4sY7zfp5ceK8fBEvUOyC4HfYd0ZGy46yP2DN+KGjJ4Wszt/koIhuOaGTnmvoRXHA+jLxDranBxLnWoQripTbP5Z+BPmQSrDXj3hYphVFwtJn2dZic8iyx2k5WRuK51LwJ+qz02crCr1gagx+ZTryIS9vZFgKN1Y06cJcDHiEHcqB+KaAWA3V0tZS+q3I6JWJ6RV4BzLPDxN5r3P8JNLTFz0+BHq7JXoKal3VdQv+K5MsGU59wkWZJnLCGIwCABcM6e8DgURligwcxlcra/bzWXzaixXFN2HK9f4IVMReOdDs2y4iGzoWEGCsJsnF+SBmkMu0Nt/VzCVomYjxuAxYjNHYWbILjZGpDnB9qgblEBczEyRaK7DnqC3aMpPd6R+KMVtrcG/JNfZ4I6hF0pgH6e2rsar41vfRxnT9PUlRgskDVKDtS2BGv7fAjwy7Cu1LoZica+/i0r2MoYCBOTjKhElsa4Fe2ziMQHTJaasyuveyDoifrABAg+FiM5PRSdL4GJ8iyWht/E2MQ/Wg7+sGVJXRv5SCOu6dipWbu/lDTBiu6HHxjyuSBBj/tklmkLCBGO8QfX9vRnSlMqe6eXxELsxHJmS5bAuvfSCbuTsI0517mszjFUB2dYkv2k1XJBKvDkFVkgVjaCHYsvg+3ILivJthBVfsb8dhtdxAWjHIPzGTKmO06VTm+GNZbKk3bE+WdQ8nTJXE2efMpsI+iPCe8NYk3SbGsjKSJw2Gs0fnWyrT5O3+2dO73b/OPODOczeyaeqgmhEHEHKtktLuDAoy1NrGy97oll4avXCvK1d+Rn9zfEyMW9SOEEu11PYB8pRQxzWrluwsB0Ro8EHFUDkma2Qqd2at/RzmbDg6tLO3I7MgNtjGGrhTs6ciSpfA8ESmnccjD6zLpZEDL8sfUr9+si4EjVxnRZFm/1jzOdQCYwrozmxFgvN6oQdlroOF+GKMU0ky77JwLBVocN96UulQVSlZDJPQWgGAaOd+4pAYYsxPRfTGeTyhjFWsQC8amFQWPkkYcL3MlCkGFokUA+gB3PtrCHwdMuAnYqSdr2CiXv+aBzGTvDzjttYIEMDfDJWg==';const _IH='662b05a592053229ac81e4f2a3316f66060f1515421796716aa0cd59f197a65a';let _src;

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
