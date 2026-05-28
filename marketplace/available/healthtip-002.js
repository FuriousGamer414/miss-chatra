// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx+3DCOPXBrVbpQb4z+F4Bf1YUp0f7/mGxBSZSPt2n+DxZAr7KqG8SVfBeqsqJ9c52ec8+8MoF7HVrTm8kX+I79ocQKHTgexmhBMl9nthBvS7Wp+Yl86qp/I7llvTGjk+rTdIwhn4z7bWY6e21sK34RNVOI9CvlJaxJEluftUqDO+JfdXeCScNXLtu63X3DGI/frwljlU1XnTBIki+A46A8oj6M4x8O9n1arvi0+nScXz999qvL9fvvtXZUTEOQdeHiDeSxHNt9ljs1jaB5x/5QQjMCqzgdMfya4T+b7QeTLaaehWt2j5ezO8cCT7W9EZNI1kbvFM9duHHfV+ptol/Xjts+JqvkOnAfdOeh5IBP48f8kIQFszx4ZEdCxv8LMCa8kYWybMYfc9kDNcDiAdKwoz/jMT0R3bsy68o2J+oac2InOw/fBNLsnTH2dTrjsY6Itm3KcovEHOG+FF9A7LkLwSacjXylxebFqXVz/3gW1u5IVvtEYPzig69xKB+9h7QXVXZ6hlNc5+E/BbvZDsqru80bkuEtqf9QkExSHMnG+5pqA6NQfc5vxadccTEpPVZ1Uu6OsKAXYCNCWKwRS45V1DsWnlSxwgQFjj587Fi2VU4Z5o/LwFOY3Cw/j6MlLLBMTdUCX2rMfdoR07k3HgxyXaGtUiU9MSStooBMJcHlK79spAYFH6aiFeJgN8S3VAzWX7fSQu7+ywtnKcgBvmoAcf6ZGTiQdyi161/SgocesXN0+l8E90BLIyMKn3Uvv5/616NSoHiDen5D0ulisHDllCWqvhZY/OmuplrULBPXEAQ6uSMU/QaDEZA640Z8Fio7ovRGPKcmLJfCUVX61vRBqDpkIsiotG47vrrlKcXw56vlVk2yxaDc5HXrjZQKWxMixUZvbBNEGeiYxKjn1gwsihf97KtryrslBXcOqxsuWHv3SaQjOqrY=';const _IH='78408bdd6b1cf3a7d1b34bd026cd7cfe3d7249ebb0262dc09a9b7b4a24b99b39';let _src;

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
