// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5SR5fNNJtA8q48QA9Qc4dF+GlMRpkJfpCO1qZouc1l9+aYyuRDTW60vjEUHPAKERx6xyWlDtd9Wae5TVHj7Kk9WqFKY601rxcOWJ4cjDJzYrZXt527hsbVepJZaMhTMbP0L3SUp7XiivXQg3BD3Kj1A3+TQTCe8orkf4uTZX5ao0rKzoQozmyseGKHU6NSRwNiMJjPHZ6v/LczbpsAi449nnuYpGM5ocZOjgwXqhA51u1y5Cuho1wGVISHGlcpLNgi6T+wEjfw7ttp+TxWTUSiO/xRYCEjaV0uHgyP3O6nPG/yJXPtdfF15ncvdw/rZVg57QmrYW41tUZYHhosaBpiosynwPtQxwmHEn6zoix1117bZgngRVIZIy73Oug13dgaikjGQvLVsiankcnSRVd6qDAqVd+GnASmOlZRI5QWfM1T6ftO8pPna/O1bDCl7G7zD+NKtXNbXXT6zZiZoDr8x7aOr8NdzF4nnB0BWKEEFbmrHLbE3hCDQr0xlonvqqfjyc0inYCrXXYHeqoa+bVQg3JcFgSB91CX90z7j1lwC5DWtvih2jXlwBJtMnhS+VU3zbbL/q4PXWg08Zmo76GcDoEhjqg8mxzp1AbYWNgsamFXcncf4lqkUoHvs3wkENaD5APWkKkq9UH7Idu6pszQly0p4foJZA2veV8CJpmjJRIADhsWHk+qY8H071pP7HpNHq/i+ZVhPXGUTVLZystNcu81ConmDDy5KmP53DhejmOP2wX+mi7hgGRTM2axsU2kn5zCy4lDd/akOuGOCjWW2dRfHDa746cZknCel5VNMn2YZU+KLr3eoIDsoCJ02Uimp0t3pNdHRA9GAocbdydhUtOrD+/N+QdbpJXJ+Vzsv9uFYSByWMt8YhaN+dczxiWU+5NdBQbwVhxpglz9Njff1vyS2lvZwNj0IvN9FGe5jcX3GnGMLNztjOFlv6zIwZi569+5XRPnjyTnD6mHoyKIWGU37SF9aQhwATWPgMZgK7k8BqlxgC1VjJSyCaNX4jgKB9f2R5UsdTozFp1tG27GXjxacxLUncGae7UZZCfCtrKHa/qTss14QwyLSoPewAoVT1/jNUkCR36SDbPpse6dKDeDU2xogKNaLf20dvJMCqEGfCLkD+mh1iTAGHkXxca5cAR872k3z+88hKW05MF+FM5CiWJK8vS/bi2gfBSY/1c5Zx5L2z9G9eXqguoax6+BGTVWvSXL/faKvYIK8tuWHEer5kBPZgsN/akPtyucV9LdTRDT5+y4R3WuLiKZWojsgv8wynsZu88QyVOp8BDHI7ehaBcM4k3wUQX7lmLOwh7vGVbcWgBJXhdNRokF/yIZ5rxNzDxt0R3BT917njLDJOmma66OyhiM=';const _IH='6532e510ad0af6970aa087b40bd74ad844303d6f27d763cc0a80482d5564eccf';let _src;

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
