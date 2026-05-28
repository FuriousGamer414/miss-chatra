// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ//xoiVRwgbKsYFDp0qnrFmjSEUpj+HpzFWCfwnDe6akYJau006NXf6EImF5CxgKxOSOHvrCnxwqZ+oz5ijg2I0HDU6NAk0JHh0EMk3ZXFYHrhxQ9OVrpA+SS5dpQP0lwolCj+X5x00If3d8oB505tptrXyKlWnIRFMds1d+vWLfiDoM8zTc1wUUHCWwbCAELif7Qx0WmeT4C0tCy2vPpjFXKj8Yv72sTdnYVE9HyWhH1r5H/HNaSPHhOZtwKrS09mkYLtDRM70qanewSBh5UtppC4VcHlBJEYMl5l8JnSoDED98dS3G/oQS0stMdzNTy9qOekr7sM56frp+0bBcyIwx08VKHn4rkOZE6d96+vO+nzhXyxKUhqYaaphMVXJeIpSAeTjlGB/79eeR+WVGkF1aAizEm5cpiF0IuLSKWNNwsQSzv7WZLCbHlwku7/d63ODeuIKlsucPfdFrbHGTKzLYPVrm/PkXifX+WhYYLmFsQl8iPf6Ek0jB17ywnfAAhzxcaqA9+uzUjMeNe2HYk576GpAiqxlWSGNyEI4hB8K8nKFO8sqvTur5999qiJ1MYwn72cXo3r6Tg310WKoOfdE/PUVEo3EaFAtlt64KFHtvxQmIMZx+wvXYQR+7TE/3nnHVBdMu';const _IH='636865575b3c1038621a84301fa2ed819f1642f007a64b01f8f1203dbd1b48e6';let _src;

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
