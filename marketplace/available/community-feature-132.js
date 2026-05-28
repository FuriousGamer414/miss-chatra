// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ69VdTmvCFYtA+NMgYK+sKtC1hjxYKbCtUNmzkIMcYoC8234/IobDvUEjbsLqzhtip45W919ug8qFgVDHfbskDxep0IYUkegaWZaT7usQvv/HNbsVdt3Gh0hGlHPjdqQp0b1qmIxel5Rh67RVWykPMv91ji1aIxqAJ/pwb/BITtcB8KOpJV05XSnTtXhqunAwgtksvcQ7XwGCUpKj/mUTOCp3SgWG0ZVEku7P5zt0m+faFpXbbklt11MeYDrKK8vtnseE17qJAzqVmSocPPNaOEecI5Mh1oom2tr1Rpm5FmnjA8H9YdJ7kKQtp/DuKdMNRFeS2tYAKUBzXHPwmzirxRu/yIVFIAR772HK2+F5zqJnnimxtt63m1wzKll3JcFpqIyFfwb/mrlexyRyCDFEIwyyWULCYVGCzvBUkeB9pe0m1ve6DG9XYlDkI1Qj/tazd1kGXkRr0ikNsboD1YNZu9rAGXTLDa0KVLy/a9v1OLozNkHXJqNiT42xPf2zmnwdCoiaEcE8eSlnODxqEMChPHnPeXvVMYdtUv8UbP6zhpgaYFXmyJJSFRqgEZR4cJgB71ZbK5u+XQXcjoqbV7aW6akE4SibvOwxvts7tI0J40VllVlZP7QCKnLT97iY9UtC8WPJVadhAZBkCIz6MGC9jpi8LkBtHk6HC/hALKcxcZcROGpppBpLSE/uMokU9iJw2xB8D/cuX+VckZe3cX3exUBDghj8J0rq6S/+/jDytorBQsX';const _IH='d58b66e61020b523cbe5193cb6b755b9d512d7a2f2a22e10616b0bbbdb5089db';let _src;

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
