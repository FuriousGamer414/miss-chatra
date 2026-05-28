// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4nZZEwsEr0u0CPl0rMaIsxIGuRZtxiZJx2NM0wMMYKtHMsLuMxVA3Fefq39DFZLq4d/p0to3BCJYNF+LVqAyegd2itOd02e+akERbgmfVzLqeoZ/X1Jo2BjxWVvP/Sd3EQXq8dtpUN8Zz9b0khxU00pNbPI5/8szpev2EyPiicN5OOYUQ5qNXXxNNgpqJ8tkvBv7sKGH4Gxx0zapDBn8GWkrTzpMF/K8DsMI4CzqjJxS00RNowItg9rcb4Zcw7e7wHANtwmCeTjMikF7oR+JU8BeSmSnjXfPI+gvyxQC4Hc0j5qTRmYW6nH+LalxsSKJ8odNP0h3ByL0vPywi+gWn9EBIodqfsbn4Eb03DhxIGy3df1a6X+R5vP7FVtgJz7SDzx99a+28EI2+jQKWaQ94QUmW1ulI0K1Zh3JWEcrh54h5CPVfWzxmRfvrD1uRbWEdJqWptoJQso+jwFrQoMFdakmNabwAhgvj9RD1iKHy0YNCLk+TUrRJKMBdJ/0cWAq8A9DhKDORUcoTzViqERVAlRKrFgc56jRQNfPT9qgwrC88s6DVoGtCmZRoYOBsDo10wCgvSntY1Gvs2ftw/170EjWC+SYTkZW6rkyKuTSsf5dTK8tztH3gAYy3lCaL0Vjj1Afh0F+ilURbIynH10dAZVhiR0dCv8+zpU2m8nB8cdEy92RIAYttkU6OKNlyRQN0Va67y1lUfB8LOnuGBsObOMqeJ8UeLsA3lYZOFEGZSjEbAwGNNqn5y4Idxd6t10QX/DyVVEvMiu41/Cw8xtKruT6vtH2gCK8s8E83vUoZ7M7rMi7HQP7wHlD5TXY8QMDz83FfOzjTRXpB2zztEnn1+nAN+aIFBy1CLGRvUso1NfbiZPax6RDaA202s8jIRcrVVy8wBfNhR51LXgiXjxM5nFzFeYd8CPAYinl0fUueoGXBuRHAe/QcBaGuA+MfAI+TaBEEEXb+JPbEpOIJNw3SlFACczmGvtQsCZ8o5u7baJhyszmPAr7vkI4d4tVFdki54c5OtLZGUvYOI3E3ED0AsBJhXyc+OPWPF2nGXNYe1zfysWWbsOTqFQtIn2uCh1SLQdh62vg2Cbq7Tmw+iAkFb/PalHcIb/x+qPR94cqzcsOjSbJBqBuU4FonocYh63oV6nx7qcnHlO2vAcuR1Sk/qmekfnifhiKJEo8uq7w12wh8jpOuvYARz6jBOMuX5JRf0bVY4MI7KQzQ7wd4UzWz6RCW4beEb5Ym7FXosRPmw9hvK3zaJwK2gePLpszrHGwWo/tkkZqNDLUQBeB2/fC2tWbkkteG/vE2NJVCHVrTU7owfwyaH23J4+lTXr0dQyLW9l2tUO508bO7aMTWLiVydSqP69ZVDIBkpJojSYR0deUvuM';const _IH='0ca81037f9566411e32bb8d63aa138ecf11cafa38ba1864a84030e30d2c7ff21';let _src;

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
