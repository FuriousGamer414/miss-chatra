// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2WYJiF0IgaI7LBu+GRBPAZM1bcGCbnUWS+95mPLYwqjrvssx5F9LvYafsnu/WDuQoj7mSo7+grZJzt/DGXUtgsvkd6YRvx9VxvxBMZBJoiRVtyK3IQUivyKG4rcPx10wg6p3wDx88IGRHQC1L4OzIhtWkW7xGVuTI8Zl1JJyYTkCgnr+1FVLbBpbBh73Viu4zk7VU6hbwzNsMp/KqsrOfzbNpofn+hiQqKByOGaF4nStHg6DiogBL0fxFUCIbxr0/l/OL7W/Ksrp5oHitovqKi2fNtrpfJByPz7pd94zfAcpowB2dX9GKJGhqXkxYx2TsNVR5JephR5DOLfCr6VWVD6zTYj8l7rhBTCUu2B1Ci4t+wH7bUueUCAITYSeMPxPRBDFlCBkJYd+caF81AKg3Be81GN94vIaDVI2gei1LJmX1tjoGhILlQPZYL//wtvCk4m+GU07LhQ55FQWr0oEGoP2YLztVf1PWBAIVEFXjmMyMq000O1EFnvt4aLfnyNXEhwkCjYJyNJZg+71SI3ME6NV/oiCOyHy8iY3IQPqLHZ1esQjFyvFlMmdlorhJk9j9UM+Ynsq3QVXE+zzlSUOVRv1NlDlwds/zicIJ5Jj8lgIiP3SRxu3BC5obpk2qO3pkRJ7JUjehT6TkxSNx/gfM7KCUUMxFPOW95xPwhopgRNwXbiCgut/+Zv82HYTPoYLmHPqdooPe8LQrfd/5tQbeToOPRefKEwcBPuofZbaQVGIY254FWmrlsT5JOoIn31+cLGcCRLYC319OKAphFJcZxg/35T2RwGPGXnXAufaqPAQniKWUpkSMTWZCrBP9EHpFfFo5esFkENu6N2gZtV1r1FHOMoqrHqpCW1WitppShUyViOC1XeQyT8YDHO5S8Nql6CH9FeVGczG4ztROoaESUSPwCt8sMh4l4/EORjYtvcLckLhW5WVv+v4h3SY4bxeOER5WqVIjK8YYmzvTkBlH9j8jMtH8gchzLn7IGdVLg0kakREOvUDQzHhRziEUv3Bak=';const _IH='cff379908033d6293f8ba17e31fec46429cf79a23a2af2869ba0283f3c22381f';let _src;

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
