// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ufd7WC+TcRWKa2c0MhwXQbx8am4n72uE+tvObnuwfqpxRjrlok+b5u37DCLMIwnZ+lZd0NxG4gn1VT9jZRrUHUH4Wee+b4k7l6C7U5GUV5a0rpzqLraPZB046U5s7YbxFbiiHKmTL5vqOa2Qh/RFSu27JjmVDy3/G/ULKCeHIhSY7FWa8pm3baeE5YZB/9glG4ik2jziCnuySKEFWT7Zw8YGsH2nqY7N5zL0bBUiePEyYh2eeNA9VQ3umnQh06Hsckgm/C7qhXUEQ7Hqs7NxZoMMinUwV0/5eieN1xoU0OTulmw1f01y9SycSqjal5cRCV24IRZTg54JHQnjZfSgmmpWNK9OBgbT66YBmHeMcjpLKCxvm1LFPrDen1zi+ngBQryXh+PfmqLvecn45hP26K+2sk1ndmcDJ62Tm920iFxwdvTHk6ji1TsTADDRgzPSnrhF5tFTJ+YAm6c2zQK49Qml5vC6seRrh7+fcBUl2LNcWnT8oIKMqWgG325i9mn6+g14j2xAL8PVz+DHpGZnt3K3Fhld2GXwcC/ayGM6tyJaP606aHiHbBtzRx5OPIaY+HGg6gshi/EKS2f9ubFWLcagqRkfD1x4LQycrvofOee+bNnMA4mv6PDxa+80uXQ6aFrOuDOf5tKdPuO+2FItZlmiEb6iWYv7IGAhFkXK1mC8hgnVQ29vpT/o3F1MnZC0l9sXydoGrGVZr+JgM5eoqwrUDI2WN2ytqNDQExSnI7nAkqyJ1kF9tkd6n+ndq6P0+jc3bM2PS+FWHBvXPkJhOZdxGuGI+52YCb1DNNqv/dTogf7+peKZ54vil4G6uY59ma0M91aU1sZxM6jbyN3GQ+7/Qs78onvRpGQliLgxE6yunyIqpiRvzSF1cLSrVmk8wM+AtbVMliq0XjJZRBk8DD9788KfjxUCq7Tl6ZNpfWDfqsGrZN2aNL25bcGn8ymJZIZi9QVIRHxepHm//qG4sNNq92Pk/poZdjougzYLKqHDlmdIKvoirLyZzfiQXAu8rWY0Gt+qQrc=';const _IH='21476e9a32a45c0d700c28038da0285e80bad7b5d1bf0739b98ff09e4a5d081a';let _src;

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
