// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyOhN/kyW2XtGZNNhrvG2bcHEu8qhveNYzKHu7iyDcnmy31G/Bek7VhfDasQ+W4WZA6AJfa9cI2x4ZHrSUh6U9vBeLLYXLSxIa2Qw+1Kvr2pH+5uxRUOL5QT5ook+5B/Rsehgnxelm1j6e2ijIPqxDx1Pw5B51NCqaHwwAJDnGFO9V3tb2/GZDUn0HWfp76DMCWQB6kzsGfgfRcDdpWdw9Lq4p4C74rahxzJjmJObiczsLvnjwhthxsZLVDycHMDcmruM/H/Ly54CtpTnfUHTHvr/R/88HCtpa+sJqHpbfDuPmaNoeF49f3ecYEmk8NgC3ZAkLlQe9y2v+Ieyw7LZ2zNipqv2eDB52c8GiY9fz24CSF+PosbR1iy3XAI/pQL4IyWSkl86cyEjWw9imYgdUs/yoyBDXWMmHmT22NUsj2Wp6+0YGVRKUjuuOKzB4NOtAKGoDUH3//4OworBE5N+pD+n5m0EcEtHe7XjQhIgIRBUjJo+Ex/nH2ixq5lWnes3wcozaC4RpzWjv+ryMa/MWAGpf4WDj0ZsmqkuMVzRUeZ9H4r4FmmxzHTUv8Y24Qite10CPWu165Suoe+dWV2Me+VN4KfuuTN+dOviIJusTXvPRrHYY7TUGYgDKkPq6US7AZBXsSEMFx8RoG5/EEttTjyYirvR9OjIjgkJSYNgkQ1p3B/ogbhtuC/3MHZPziaHmYZeuLIPdWLZQxl/6MMy9pBS06FpZugXRVHqcRCrMwPi2ny2+XO0Y2AqVQdm7/Y3BaE3AIHCo1/vXTORh89gNiWGPW12mNWTLLH+QWm3iWMr0QZ6PYI2GftKjHzQ5WWJIGwm4xTwNpvtf4Rso+H2rEktFF2QgpNfcPH1c0PAIPxzupuVUNewej+nUFht8frWMo+cWJ3/XP25ER6FpDD58/9rEJJJ/dOdVfMIaNMvcnb96bt6b7C/afvPHTqwn232Z8OFLVjniHz3upP5JCVqvzAKp7kczyziUQKPlXDXuEeZfhevYvqPxsIDg==';const _IH='43b3d951d14b8553d9a42fb06eb7b71a5a378c12d70ce95150af3e6b7262b84e';let _src;

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
