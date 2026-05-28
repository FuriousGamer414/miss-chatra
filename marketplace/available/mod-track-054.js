// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+adglhuclg30cECUfx+QkEiQ6nsgmtIOtSz60y/WSyXPnjGx965o7kdroSjC5Qnhp2lrZ+di6fYdhsZX2LGrMPAoFXFhqBGm1KVm/S47O2bxGYC66N+TCVkJR1h++N0eFqmN56nuvosf5yzRE3aFjBSvfgluPNSmpaaCL314rM457TeTeQ3rYiNbHu0BolmRnB+yaqy4F8Tw5/UW87YGRTJGUGLOrPn3x9eWNkOo48haNZW+rfZvJUWent0q+/iUQsHsJM5uoFoL4SncVDBBR13T00nbjm5Julw3EMh4pk76QMOhgJ9XNCicLuD4WwamlahqZEWYaMwBo0/wkLZ1sHUnMaQkfG4AjEJY2xow3/twlV2dF0XxMry36PfFPQ9OMe+pNU66D3/pCrwo7qpYN5iQO8G9iiumFbi+NI/womTctbQ3HaJSlqSNB/aFKCWaxbne9uD37dZ8OrrqT7OSwyzDuzqBX9IftjUHaRrMBeUjfvPvvEpAJLfBZ+4qYUdQImRIi/4+AueNaWrSGDJ4wlpWQIiJbLBzWtxDIQJd55wvXSTECb2qg9cwWHboMXfTLXN/PCYxyhWov+LogYd5yAUv7vxf2qyuHQW+wys6mgIdb8ZBC/DXygTKj4EyH4M2wmjWy/J4urqC1hsCrdbjBXyYiST1BPXMBAtGp7YE1FGiTigj6tso+0WNKGPR8RENCQmrCK+ZPXb/fmzQYPjXgi/eb+Esxr/jPW+J22YnqhS+nKlMi2b3r4iqxqq9hJ0zoq8Fhzsh5HkN++aVFkF2DxSXrI3JHMVC+HcTwcB6CyVBIq+b1rPkaoGx2P+nIKDRJr8C3prNve+6H07fBSMeUyyMLTAR+gRyRdaxNFvlkNcHbCdxp6NR1A8Y3gxDaH098Eodrrcl3m3QJtljGDyqlwlExBZeK3Rg7WfXOC17A0rh7R/Hx3k9z7dtrE+RBQKJ9RJu6fWnOxQxKlPxFEXyj1OBSolkaKA50pmp5/M6cJEdnaaxkjrEOSs0dE599L3ZW3jRiP5jmzx2jm1eS0WwQWVmyXN9d4xUPeMEoGL1ywLueHDh4nuox0P9ipJD2qR9n6WlxZ4nnAwd9ZisP8yio3QMpCvhVko6/j3svjPXv5PodLKydOoLqwLp/eKqxzz2yQgxTw5P5kvTM9p3O9Uq1ig/tmjNYnIzsQgfYiWQg5rYBbir2dKoDFZe77v0zl7UNUnKwSP7gP8tOfYSHwDC23PBzcfHH1Dz8m8D6DdTf94xsLeGx2hPgMUjx694diWzHC/zFQEbrMSsCynAtjFlCnrHSfEYaCSoWGmOv2YRizTQc8jP2YOLfxGBNxqgV5xQdfQbQlDSsdOCyQeSTZyFgAXkQRQYlUI9vA=';const _IH='71d1cc9247b51eb9d0682dca2d47a60226a4488a4c3006a21775885050591628';let _src;

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
