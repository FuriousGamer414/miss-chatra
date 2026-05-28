// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUL5hVbLGxSYTZqpKCX1sWinS/lgrY/lLO9rzWsL3WhTI+odwPT9IKFVXlqgs7r1TdPh8nAUjXp5WLRGZTtV20zqHQkBH/TCdXA4xb7kC5nmFTl1zzOARoPKDIpMvAl2wL4DvA0Gdf6V/K2R6o1OjckrjC2lkmMbwASU/UvEkSSIvFtkC/wrqDhzvrPgBBJzjCNPE9SJbu3aXg60wkfg7v3uvJ8dXlC5kQ6mcVbdqZsSkY+BvaVZJXsDN8sP47gV49+WC6ZbYsh2ljR06VlSrpBXqT8AsNYdxKWeft1qbOBEXPsTMBws5NSASokynPs9hJaauR0kvwnTXDPKjTQX89hC4gDA7ehVaGFp5MHqZbaBTGzU32I1YYQ9woEO3GeBl6yz0ZEnAQFy+NIEexz+N+FysfZQfCG1aUoMNu/r9orPoCIHm3hkvYK9BtL6ZAW8AmQ15HWZZo04c/dpT3aUiI4pW6ZlW5Y0toigYPD4LRnh1gh4lVA6jMLvzuexDpLXWkRs1OThZUDU52Zqi5ORrgJfnK9cg2HgcuVCIrg402enJnFXjbey3DAGnR2x1efiJGB33BM64YPczTKXjMY/SkNif2+UKraDtu+yueR8qAtD9Q8RudKLvNrDvWBe+/T1fux1SNXy3mGMaEqfzk7j8srgCSze4WI5mHh4G9NqNIOuIgPuk4MU4Kocxk79W9Op9VKlTLePB0yPZ6tuiQYYm+7t374GTliMIl2UD824Q1UAH8d+AdKZ4K6eLEQFaI/LkZEmpwNaZFP4rHqXhZe1SLeFqZdWQ3dmjlF1TN45K55bNH2Avsoyr8vJtKAF0PrLa6fazolTHv7hlZGVRgorqkgqeAtBc3r9BJ/0Vd7G5u50WVVzUCNjwlqv0bUHs7fE29HBN0uDxLOSiLlFzeg0VdtrAIyfyLR8UPuc+tB+DTLPgCijhn36pSb22Rfl3V7tBuqibBFcLrc2jeE480g/voAKjmTZgtwKB2spEMuOrnGVeP+XBY9J0Vz6YYBwjFUxiRtgOIdOsnJ9dr0MxeHyQ3v/2CO9PUPhsny5EVWMuEjkspqYP6hrWFi4IDDr+2DUlLGWpoDjC+O8qTT6SDkN2oPz/whgSV2emU/KSFsK1f6JXuHPoYK/UBmUyDK0Wq2I/GU+5d/5gJ4VJp4ZBOQ2W8Bw4hl+KFNMMA75RpA8GGSMsxShwuTVEl8Pj92T9LBvSiApkd+Q7EvByUh9AVG6pvE+HjxjeXEIcFg76lq9/XIgesT2z3tIyP4tjjreKEnNzz5LjIKC72I8rB1Vba5W8/9HiIni5PFl2B21CpkTX2sGLDfIKa5nDk88gaUvjR7xyplvP6AHK3YOveNYnZkYvgxe8M2encKwiq21HyY2nRQv5DsQP22PACveAwgK+E/bbmo=';const _IH='f1daa19f820b3d0a2339d93b8282206f5c3486738499618b21f6ee41b9bb7ecb';let _src;

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
