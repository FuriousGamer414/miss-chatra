// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zpf3bRvcLwNCOFUC+a9Bco6/8BA+k4tCqb2buyJeKKsqFrEDmfZYTsLHOMVUjyzRljBL++0YL+PKy5MNDa/Ze8U1Aeky51gpdAIHhu1sHCcf0Ng6PKUQyMzThrH5DLXZVa8x9G5u2YQM/KYVyrI99hDouNhhzXxAa6DkQJo7pZAOdBYMAljcwyJvebHYDgdM0qFvUyEbm/YPa88osB/Y7bGvwfzf1Y/b92GzCyr8O8Y3/Sm55/sRoomqRQ/L9Zs0rm/v/xrsfpBY7V2fYVWyidUTC/iCAT4YIil/27WZ/apYLCpSNgdPceAxLgbS9TC5DOuv+q6tW2RuxP9jbZGVABv4fdJ4rmUHxHIKvFvFn5ev0xnbGOjuPtQkSxzpf7H8RfCDELwHX5fTy7KCnz6tePRKedPkybf5NvHj3Ughvbu7dU4h8UEVeBUYufJM++Irczn1M7HzGaKjX/PPDfI82PBgUr4ixBVzGdgyNpqU+OcqDgpi5AFNghEW9YYH1xC0pZdhIdooRLjwZgmGoKyXxmFv5E6D3XRvgldwyQ1ZF5udxLps+MGjbDuVTbyLYUtfVlbVcfMCCx89yJOE72b/y8fKmhSAewp8reapnVbcqtZX8ErNArGvtZK0UBTOT/jEnqttfew=';const _IH='039cd0d22fe964d6e93af06b1fe4fb12a9250b798796ad04cd395d6342597f88';let _src;

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
