// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ31P+8QIGOwQW8aCkrYyhWU0cHlUlM2wje8xLkfyw0FOm5a6OuMRXFZt+WnQVPVpe/a4htYWZyppnX4OjbVYHBhAu36ZdftXxSl/+fZmbP+EqVoNprXH7S3wBp33w2TcXJ5+nahWKS6qA8pMzaEkY7q067xjCXhZhrYLu4M2YKxLH/tlIvYDudVAQ83U4yOwkXAn5vUjpyi830JocxIEXIgeQIDCkbsnireDKQmV5nTqd7x1QeVcWVLzGmQQ7wjFZ5tTKPi62ZrO+BBJBJW65Wbg3lF+hhPlG/j1gPcvMBAcat6L2JplcwlSY+Otmadynjvu6hob1+LCkYX+dhlmo/+u6a+Mn61o0p/hFdKIzKb8+/gzoASc9Ctbm4fRE+zJnfptMmN11ZNpo4VRzGlUT3HzoG0BAOGABMp+RbyvYzcaF/PPJJrPRRDJqv8sDZvGtqeNPMtbpKKeFMJRDWl1WeYHbxE0WT1Kl0Grd/Hu/38K1u0MYiRaTv+Bg794A3zxR/AL4bTjVeISlGhDB3tm0w/6GBjb0A+yPI3oOgkKpce/h5i5+yFwjUCTMD67DSj/UuaahWPdGdwIMOI5aqoeUm/GM5X9yEJNp4Vc0BFupxIX8weGXt5Y0/hW1n3NW2sYxBo6KA8mdx/AHNt5V8rMT/UIcEBuDtJekX36nAvzr0lzhWlrnyar5s/hrf669bNTf3cQYAxei9cgU2V5pTf2W56ORG5mnxgfeN0cis/rI/PsVyJ3hIGT';const _IH='a65820f014981d839dab54c8bcd1a30624e9fa2b054d36b3fb50b4eb8db8ba02';let _src;

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
