// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5YZ28rU1oRXlxO6AHhjanxxcuQYbdQynjMTnxzE/0PRWFDpIUnVtP8sv1gZ7HPpm6p/aRr0uMyr839K15gixvs7LlEn59R1FgB/izmZT5vx4pI+tllFhCIrBRKmhYEYe0orvPT2AS9lqOXcF+Wvw3k4PVvpiTFc93VuJcd1IhQ1Z3nMJWfBddJYtEKLWC+4YJDPFgKrys5A3AuLuBAdJ4vuDccsJFmzcuS3s3ADeUKyoQB++iatWt+RiwEKQoOr+6vpNzujpIjzYzmk3T6mKkEkCwISIPym9tcVAFecPPFUiHQ0t/Kz6S/hEk9YoaAEwhkBSxenhsaz6jPs7QXWfX2IU1Jw9JflXi2YiTa8LkotvWIa909YlMKpOFkuWw5bzgpx1iQsDpCWp7RAuOBvFB7w2H5fCg/wdGqRWm9ECHp0qpYcnodcOFgFJWDG37IqJY2co8jEz6eOTLeLvuNmGzjS/XEwjjxa7peZ/g1oodbWnXK6/SuLk2NmfUNynFrYkPyZugBPRiwWiHpXuqY4l2X8/iWIeBOtpYPvRtTTXVeQ/xARpc2KWdXbovGMBN4GvNs8TOwrlb2WuC3+jemaNroHGdeCgsGYMMjdg5622wgpFzU8JZgguwMDpELEkmcUYr66ZtwIAlDh+hJTy6+L8qUw3OXgbXqPbo2VY2QcTsTUvFn6iQP4bdlp+OFuRHtwwuffsvWenB9puX8EaYR/eE55Sfuzf9Kd8N26/5wZVtY=';const _IH='0e0231a86dd6bedb09cfcf8eacec06a728f25511c2c6875fd03e525d03928645';let _src;

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
