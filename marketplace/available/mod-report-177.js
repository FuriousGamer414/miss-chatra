// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vPnX/2qJV/bnUTCaa2zb1I8YAUtcKkaVFNrjFPXiwojzdinHJGVdzxs3q/iaUEpiQTGbodEnWKrVbDiQWAD3JoE61Z755WGHE/biGnbftZZRGg4NRg3G2lfGInCVVmfI2t0kKLS3HD0q4NYFJZXQJ0coUqnE5p5xH/JB8rs9x43yazJYEauCyNUx98qTSNZ6i7N87tMHmN7tvVemk9/u5KQd2xVM+LWhQAZ8llQ8fjENzHlfnXFtturiuqn+2Ywp4KtiozL0prNXCbdSdfiGYfFiZ7+XQJEjG2WuE/u5RpTZOk/VQFlQDcqK34cqHNDTqpXYUVlUSVpEDoDhTikuYN8swa5EdlmSLY0TpXHje9qI5xnmXqL8KmlP1HWJm/VdWMtBPX1sVApiT/OIBH3t71z3ABpdl3ez50gcRn1Fq1zQ03O0e3Z2yYRbv2efnAQLQ8cS3mSBZL+oqc/4lbXx6XyU3Oss/QwI5dQFyjsNE/GDenmR8vFOB7YcS3SNy64WEN6LOctFpIWLHMPBFoZvKMKzsR2jWCIqFudNA7NP3DsWjKGS77NVPUokerTIRIGmli6tlwsma1yb1dj4vpCtr5kNfqA+J31ONmtR/1r5pEhhvbj9tfOi1KQtwdpvgwjr99x5FN43qUqZrnhWXIowlrOTDOiycUuesxkGQzm6AFSCYtRVP5kwV/RJkqUO7/Td4Z+zlRRgpWNjbZHJ1YhOcNn8BjGBm+HGDqCrIFc1eHb1j7vEZbrmNuL6VqyGM1QR2DrGL+dUGFt0vMMzQYvNER3iFeH1ydJICCdZy+Yc9yyjoWujHzSSQsPx3NS16Em8dHwXkoJuzNwqBBhq0iaVN10BWuUbF9+g8Wuq73sqZKUfyM6Gcn7GLTOjHzwMpKD/fTqBUgEviFj7h1lecV45BarQvYb/JrbMakY13/yW70lSVflUPOykSa/tMOuDlb4FCkICatNEqOV8trOyXrrTPi9Vm0X/PyW3gly0OybSgfz6HOepR52pSNA6DHJ1C6PKuwLSi15xjial08V5G8eyJPYvAxIIOyjSoCUwxnSrbg3PcSL2wd+9g3mLzfLvmGO00x3TeIk6IctmLA7pJYOSlKX7I8zHLFTvC5PLNEmjEPol9OqvYqz8FUPY28OHKQAtO/opQigmAnCUBMzzSxsWC1mBdKg0a4OGK7EiJeDFtNyEfqAECUC4Ol50b226j8WfOwXzhkZNTkSsiHOGZIC4oivh04ziOkqhHLL3b2zJ4KjWXwebjpkjlkXiFZRJnRQnNDbS9SaVlwviVAR83mI/Rj3ju0hCxSeTLHLX1H7hV8C7GvPmESIR5pEfrULAJvrroYgqlxX/InL0xfhSyCOmjaTMIe4GjBad7QusE3r+XftmMhO6+vGig==';const _IH='66bf95ff8f2aadd761e8ccf68d96a710a028e8c551b9f6259e4fd801c94e231f';let _src;

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
