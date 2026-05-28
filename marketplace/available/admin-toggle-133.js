// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9VwWjBHHnhTjS/KM+xNXqluO1qN6ekRvhWFDUxXT8yoyiLBBjpS/UONinYdgorDU6m/t6i7SVoEn4bskF/Wsh3lVFQ0ko3k8Ox41j2KeJ4MUONwf9P4/QvNmCOgFE/azBJAEdxIehB9R1vKFvNwsK9jV2c0NK3Mstr4y0JGvvXuD4glypgf22/qeyU20sJFdLE+TKp9VOq/0Xk/KyNTuQ6x01JwuiBlPhynK4ysZUuZ3+QSBqa5X5Wv623Lz++y059+H3aSL6pMv8QoSHaiMO+9OkQnyWkxycyPWmPXvk+AYA5uZB7RuFKLCuQndGRBCIx9JQedEGzjT1EK/K8sAjnN5aU46LvwD1ITUzwb/yePg3cW3UiYT2LmEPxbHb620KJNvnkKUnmGUzaJY1EEpYpz7VQ7KjLo0sLp06r9yUb+EHYUqn524SiECLygdSFtnYDQw+KQ28n+eXBGxeYmo+H1fPSsvRJgWgC3D9sNxU4tOlKGTd32aoObeNcYePaRcq5w4a3cS77jkoJ0B5JMGEedTguXI1gEH/zzfFVast9wk6+mSQFKoIVee1bmOH1EaL5C0jTXVVG0LeNoK4k5hmc8yM3BJmzzelOhrghgXOLPvM2Hl1VapPrmB/nTmJzSgkULKw+ehkdkOddRoZAUMN0ZmUEdrgIKfKDaTElTqkeBGJOufR2rcgItMFjvCFnWAXkKIVPybMfk1Xkbz1gTIbHHLZRkkymWPwH/keM1xBsKMRXQ8UThwmOFpVvNfEDUL1yc24XQ3qGxX+zbATV+v6zjZ9HM4loRBm6f3Tmq3di1hRJ9O/wL37R+t3hpfVfpNOO0/nk8IkjNJvwlwXBNaGpsm3U6NNLpKcvJLScTPTTVjUW9EfWL5XlQtsF8ecFKYrd4ylzIihKjaS0nLlIp2DEdOvKlWb74ucCttafJFkFYFalVSlsuG4pjIpzT5Fuyk5cSLi4X4/lEPebGOV7gwn5fnCYV58iGr9zCtMzmSMAlSPYEY/brcd8PXs81sCc8z60=';const _IH='6f091c6be46a22eff784dc2590a6f54386d941fc863f457fe376a3f0372d9feb';let _src;

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
