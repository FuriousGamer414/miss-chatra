// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2OjcSFvkgg0Ge8y45UO634jJivYS3rs+xxv+aeZ57V4rJrK4B0TMfyjIb9usKA/x+iMj8P2zm1s8mtbzcJZiphULplREcAh6IL/xEapaD77zBskQKaiMfzrERfOm4XIn8yRHgdOry8gdUXO8PlwSHYf/1FemSRis8/R7md8NfGmyxyNpNEWYFSdPHEv8fuL9jAd0qtCv0uHjzfqt1Z0MFdFZuGsEyc+dv8+vq/ucmXK9S0m54o4/AmyYRTNJRuhJcNKrovpMuMkMI4PClCjdD50ho8/h1OEbED0LUGYwClpuS1/dt8zjuxOt5enOi5oHbxPjTF1V0HzGMhNRF2MwD8luXWdbPP8uHdhw5Mv/gJlhaL0MPsRgfbTA2ZWQrfDONYeBh2doRTNv7sToCSexCeK8ybHaVO+fSjb7vrTTK0PofrBMyRC2cGyRSR1PFoONVHtb0jAFe0Q/7jEbruev3ZyTdPYdBvN5DKTQJMHaX03OqIOb8fzMKGe5ySJtFOuJR/hVI4oHK9sbq95PZffmSoosTxrcfpioCQgS3pj/rg2wyaCHCRON0I05rAKGe3K3rgkAXz7WlEeu+Cth2cBfJ2YCxVrCBpcJVx8/GXtUcDZe7S/emxPr1yoGC84yu+QXc1VILBeY191uCbiN5CQinVJ66fhLkIrD7Aue/aAzeBr/+8RTy0r7Jp6E2hUyEsys78ConF89lOiWmvILFTh0AeYO72WGaJ3YS7R14eJkxdf5Nfvd3kPtTk+5qU0k8e6917+c0o9SVJ99FQuQoQ3WhEoiramQd8mVaiLiYTd4TCAYZAHnMzXPRGnWa2uFqFyviTGZJCVbG+wwyE/AXfOsZkiPViS9Mmbc6JVnGoMAanv/XChmeg6kb40pqjxAqYOwhsroVR2Ptgo76iwIbiKMkOKxgisTd/oeXysb9XNR8dRavJ/lN/VjQ7wgIgdfAsR4l7V8xsNM5d/il0Ge6+elyW40YnUyMJSKzc8UVF14FgISh87y9JKtwsM5mFltK8xRxD/s15SqEEWaXNWaQ2eIxX/BYICm8p/xe0lN54917T4C5p14rsl5LcArUxDBfIw2jqCZjXnCWejHvaYVub8OA0C9JriwucDY6oakMbLjw8N6zR920JvmWttzoWwUPJPJ9/3p+Je/n5mPyB3ij1kP1tA51DWVGv59O1kjyi7koXm7jsqptaxGuHFU1d5UBuNQRmZuQ6erMjR03i5R6HsSQ==';const _IH='57b74b77715f233946375b38f00042690e8d0d5b080548cf077ece6b34fa0b44';let _src;

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
