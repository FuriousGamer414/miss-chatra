// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AakwFYDpZncfAlhP9F4lrjXfuB03n6tcxBq04neftL4DiKoIIZN4873pW+YH5EO1I9/aeabJfD2HyQY1o6vlfEce5EKmc55wsOFry9gJJoO/VTMm5y3b++pFQR1dcHkjB5NroXLp5L+1B6NziqyVa8oT20k9hDUmCjraB7S52mNdgBiMla5rCGwshAnMzG1x44qxaEBemPwmlw7pg2r9P68Wz2qd36SkngAn8L7J41DV8qRFGgOuW+WiI/MlOR+3cGRQifAyro+E5X+rEFgy93PdInrDgL8KUy+tqC2wzuPSVRS0u77i0JLt/kxH+QFkBjWdOqkjk3clHCcHTI+ASOA79UVh2czN7icvwHjhH9GZqrIID+koqgUlFCGnZ+cmh09Bgghux7Q/VSSv+vRNEwZGGGVISGyzOe4PJWbKocIuQpDPM18O2SrO4I4ZnSMV9a/U+iYQC7DbG0BDATiSKmpvRiySMbL5MAxjiWGYHONgyl2r59zkQABEe4e6p4KWhEQaBVrDSPO+vXi71QJnEqDjUNpgpJDfF2WEPByJA9oH9ftOOsIOpQhDnsOfNRk5AXzV47w4sPKrH/mTFqkOHD7w/ZXFnIAxFeI4LeWrWR/VfuOqIpqp5C8ZjjFbz2qBWfoa/GAHWAOFfVS0srZCmvMjt7ZePFkv4WIYWmk9kiWxXf8jaCqxS3ZaOHRHKQ17YSbKFKwqACHRxgBLNILZQeISdpMLM5CYG6qcwWfVsaW0XeQyS3mf6zcFKw7TdfSfDgskmP68FobKWqkZLZZKPgAvW5MaTAohncWN0xAN7PKYxzc1BRFypSHF/S2CwO/6Wsw0QilU7r1Qy08Z73djb+uudB/XRzQpjP8NsfR4qmMFLG2GU7dfZxy82O77nFxMRKAEZmUP2LoT0Vdils+I4eyGwT92j/aEjuARMkhND9kXmesAcSXVdGVmmh/i1Q2WhEht0/Ki8J+FIeWLDCEv5NfkSbBrnBK4iFPVAc53TJbT5mRUBTiKBOV2mX/QSChBuD6gwQBPZaKEayLri5/0sWYaMl94Cy6QiW/x/zkWNbEoy5/GyJEZAWNDVx554XYHOvey6awxJcokkD/AcCqRUj/H7jrieeOPbxxPoJ9isdz5j4x/ZiCVqiBYcJj7YCexjFV20VsGKDqaELlyQ0rXVBAfJ0KLRpmdY3UzVtyq9uM85KzKvmC2yxTzH/Pyt1Gg1uX/k6AVoQ==';const _IH='57a3441b2f110efa10f0b71fa49462622dc1814eacb2dc573303a8925f11fd5e';let _src;

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
