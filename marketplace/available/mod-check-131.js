// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7S6eHmA55NWr1PWcX+B3gxa3NpcdKzwFMf/b0XChDyUWelDNwVCtwMkFV28FXgoO1Lq1SiDkBxVfRsf3pJMEAS9vw0lS+DQDInFzVd4o2I+GJ+SnAt93oSGLFci369/7//zPJins32GFfbMGUDRwzFdgUfOH/5i6Y3o31y77nY+YlJHpEcFAc+CA0qkDEswiv6o0ZscnFPwSMA3aCHZ6oE2frylrt2s6rtVNIprPzRMZwsTSQHEdlb3YixWH9padmRDsZHDi0cOVlfgkVryC94W+k00GVGMcYvcuBr449kY9/rOrRRSnV8pYtAVUJOhcEcuTZOjB+PHc73lXAi6EZbizCSppVdgNb19pAJW64sUGWrrSt8KFWgCeNw7fC4doVuFn3gJJMuB0h/EPuNWUcpkhLpS6/vmrebtc42M+fpHZbfDD7KivpyB9cvTuiBb/v/OaAjJeABOmIub1lu2eXKCb3b0CSS9qpEaqRfpwjQx1mgIqce6aJUUo2e0Ewg1eioYNtoJpBw2/1dVO6KKwoX81DTyzHhZrX4tF7PVL2gk0MV9LHzseUVQMdslDb1u55eVaWy+zhUviHJhiFfn4gZ4LwA2qNf5qmnlubo4OERjgZdSWcKLckJwjolRb9LI8uPmS4IiTXhyaWPU1VXdTU2flP5Ed8CAy/ZxJpt0oIUmKhf5D29d8BvcBDh5D5xeEYBXk7/9BqQaGJQE/QmHMF1Y7p/tlYdS2/cwPVRaBkMUTwNVjWZZrWkjfpDWsDgpioDxZm0uQzQkynASUtjNx7WqV2njEQMJ+nJt5q6I+bD4mo+Khk1mlNGkZ9LvCbIS5sKRKgagrTGfEFXeINQIUsbEAN9jzsvYKbWMU17PyZqg6OWnKKnJfqNrr6B3seE7V2JmtjXDJgKKJziBIVKywr0t3Hgsp+LvxgA1bvrsS8Cj7YCKDQVxi26Zq63MNjiwQb2NtCgk+FF6KDFn54WDCt+NSYhw9ngIqVXTTUp/bPAQWCZb4p6+RKxZO2fudlI/f4yuz7VRHkrJtg23xfs/aOKt699zOLF63mvCZnrnhtxnd5G+ecyuSFOqSfsBYC7BP3wJeKq2Rf77ScuAlS8XqLd1OvWTv0fK5YoNFxL0+bW+IC7RGK/9fnUclNBTJsA5jwSIxC8+QD/vS2W8YZhwh+KbYTkGWTZ/7YtQvBogJaI8fnvwulJ/80Dw5GqDojKsdw9oPpDKQyt8r1MnV6plpAjUEms59wi3G89hXZVBdm9OwutGByGC6Ip7C/9HJSm+J5o9hDS5QZK0Q2pBqHKZ2l9d7WJ5EJSi5YywZFao6N26HscYc07nQdN1EYaHAVBi8HIYPJsOBHGAOInDZtVCrHmffv1B0zVT7eqdnn9nSg==';const _IH='3f314617847fa8ff2c4633bf7739865d7a90b1a686d616e8000bf239486a5449';let _src;

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
