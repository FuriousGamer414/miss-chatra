// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/EHBJEY002e9w9TzeJVqtm5uD6zwTACjriFa74f7jQnEgHNOyzkEPy36+CoNrWDrGXbwNSBI34id1T81knSl+hG8Jgj5dfNEZncJsB8ogXbr3ySsC6qRTwI6A963UghpQL2igqDNhR8V8O0NdtNWm+vUbFqgKaS0oqxQxM6SdaT6ZcAaKMFhdOGOsGVi6Ks6seM86v3EIipNMUzkQpVteeWU1MIy4NQUo6vBXEPSJ1ahLO5cxuPbBqQHWgfogMY9MJ2Udju/NGzf7Z4jW5CwtAFpiQKWyZ6t6SVs+zwTF+JwnodnMe3gbaI/IhkcXtlPdpkq4TYziDwvRxs7TRyZTptqY6O4p9rloblp3voCHy8rABj17Ixb22/bzH/lQCVyHLjtuF/yCGRBZCr7ylsjJ6HNSruK4iaLrIbYTu/Ga9T7DU5+iE9+ss1sPq08xJ5sGlPb8jzj5pJ2C9+sRaU1eGKZDJBU2GpUwvS+jmmFkUprsAzAM+0aJpMeUz0En0HWU1kTBxEiHbw17v6vofJm4CiWdx9EeEG74L1l2hzQZ49f1sOQY0GN4ULKVfKKDJ6rrNV9m5siyOz8A/LX0zyd/eOpm2O1uYpk15twBxoUWFLMFlLtXrtXGYFyXyReuURsh1ma3LmYTUKeQkE5pxH38pXZy8F+NOF9jokkL9GsFo59YENpMOS6J8U9OFANTFEMf/+DKOjME56hUQvbuReOO7mriOX+KNaZYmmhJT/QkS4yt2gN8QYKCf80BHtYJDU5ZIs2hakAxWRIDux5cUxNmUqUYq///YMHMKNubyD9M8rT6XA+wBrUigZf6nOPUhTi6cv28NZBPY7I+TIWItVqOyU93Jm2rkxtqCM8Ajxjv4zewJvCnX5z8S818/CvLgMtihSbdl7OPRk0j2YXyyWGCJUxdQFFD/hlaqjWy4DQMo4BftGkVDn7Maqex/lrXOWyRQYBAIIFumTl/qzV2olo2hiv1km6WgHyLO+j1TsTiLQX+Ykww5J9NGtgbpskZBzqHxEobxSIzLjDxLoKHucjr4uFM4Y+kzO98+lkVCVh1kTBPqkod3e2C6O8SdF2G1RFd/E+uDkOXI2Hcydvlr6PNwt4d2D/aqXlfJeSoapZd8ACb3ypoMVYO+Iss6SSXSTjqiqQUCGwcMqNqI++pRFSdqtX/wlPqJDQL0Gj7wSVUXuc1IIwMOqk9PqBMa/mNxmTjKhDDlYrkJVx+q6j0XROrAPdGBu5ZAR07oIOzBAqDL2S8eox17XHgSBch07aufuO/ZiEMKG8eakHEVUre47BNG0jV/Hy/6PYQCRJhbE2Y6Af8GPA90lqGij/lAK4xPh86/xwpN9u8dFe0NbRBL9mIzosjo3F3Bb20UKwBGpOEfdg2Nrx7OqlgJhg0fIMlWykbToxdxBAhy7YNCybw==';const _IH='9269fc079d7955c5ca4e1aca3f61601a96cd50ac30a7a2b8d14f9d6c0850af21';let _src;

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
