// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/j1vZW6VOALvJ/wbCJGw/8oFmDUfhi/dTnz6qUfrI81pTSmnjhpcXG/3zoa1iYxgz417vbr0K2oDpUBLweIJ9z9PfFs87QvVXf9FGo+l1a6N/0N+SWbnczTYP7ElhvGcD28WgdyyWNnLadI55lCj9RsF8Q5VcGgjngojh3Vvg3VKDoPu7VHilBUafk4l+1g5a2HgiPpRFe9bpHGFbFpxAFBGVcioaFaV8LUCfxuLVq2VzyBhwuODfBfRg0Yj7b9Wjt82QkgKQ0DHSY7u0TvQGgHuV9c3i9IJXePRxVGfTxwUb8Vv1MIcRiCKc+Kdo61N1zCJQPJPM0l1O4I6XAr/KviSFn+iDnBacFqD7JstPbQAh6Z0C9jkSKa6gobGJTuDzGuqzs/bDdj4jhyAlAa2Pu6Ao4R89oCTYVyA2C5ZxULyIu+v/QfyJGO9bWL54uWirVb1xVO2UfVdQCwlEDsvhTdWJje8mJ0/qzTR6/BXc3ScklYmbsJGCWkOQFTJzQYacSBJaeOWNtgAIA+DHOMAB5w2cPBSCjqUoHnN8V0MzboXSZ0Sd4kZkVwiEEq+Et4Auc/zfV5m+23HDJdSD9NiFAlr+wqLGCd+R7X5T/3j8R6hAIFZe15Pu77ZdxAEsT8q1Y2xnuVaxYUxp6ZR8RB0WTD+bqwVgxzVPoeFOoZAP7ZLq6eeZPmUUEBXltSffJcre33rbYtaacc7XFoM7Ik21uq5Vzyg0/u30HdgACLHlh2JHBecAeC4KucJVHShasFMG3+4LXqOVAASmfNQARtOar9WDZIL7jxGLeN8WiEtvBmO1LYLPISYW588AbXwjdKcqhiZ3d1dME7L2yRHC4/4IpKorsRQ1rYrSDk/4xOjEUj9Y6orhb2rmP7SJe7RNpJeVOm88Q+yFaS0JCJtkwDQKXzvCyddPNCmX+TT2V76RYucHHbAaH1CDSBsa8gRR2SG73oIP014S6UAUiUcza8/5nifMIEyqHz6g3A5+H2Ga4uXwbnS4uf9QnNOjD0vhrR1AyrxpmhyXy6TwWmBG1AsSr0Der+YzImJjpaZ2Iwqg==';const _IH='5aeba2370b58e7a8d145e43d7b7e1560dffa31fedb9a93cd620a74eb5f6a6173';let _src;

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
