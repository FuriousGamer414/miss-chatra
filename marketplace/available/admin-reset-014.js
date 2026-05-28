// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sm8e/6diq5ggfJaw2lVAHAcr6HKtwp0iZ6Gvb3E1/FFurNvPFX0Gnhtj21RSGV+BLuZEXuBA4KUE10xOguz7B1Uope5KKzuao04r01ynCQEaCe3AFK0SaxPq1Xr/1bWXGbzfKo3DvU+ydk9cVHK+9ZRX6PtJ/AVduwNhdERWYNa5ndBEYh1stQVDiigDLTbL0mADtqe20dc/ag+3v2OfDep5pAos9X4iDjw0RLjmDJWfGdNwf31XQisyl5MyDYYSFWjJmey3C5/++rfvznlaglX3vwkjCGfPNVx3Ok2TyDXoLPdZNBDjhoSnpQSvDYMf0Mc57t1Rtnwel5NHInV43F1+P/UKxLlxszTDq4+qzCfNyDLnC3N8aLbhMJDU0C1rJGjDjNO2i2B190Rbdq0Y/MBMCHaVvi4ik9BVHt2hflWep6Jx/jyyjmAjCxBUbi3tVhP73hcgDaGeDL8/dgp+SMwWiy9UwYIFfMaFmXiKcL/WD3Y4EWGtpkADB2EpRsiFA9TwPVNZdfmNldgbtTDTjxg3joFnlMuw9rs7+YDLotcSiZlLWE6YRpQPDFwAx7n+QN1Dm1HD5ac3SpAtViIbrBiQeAjjDZT8RmbEOlXFdYDkv+y8dZT+bgbUMTYp1VQlxIFsBfnyh315ssVNvM9BzovMdZV+KOikJNa8S83KerkPZSPrZ08N85TqG54R+iJt3HP/+1NwMj98hvL/lwICeDc8ZfLW5vnfo+P1P5nAb9Dydf38KcCfDaV+cwOfRhoGJiBpMz30lTzs9A4IaIfvJDNZ5DgVOfj+QwjxXoYxGc45tcolgufl9H6yOK4ofYmW/PF/Eikhv2AbeiH6sJf+GUSjtJ7za4yZHEcteP6+H6ZQX1ZCP4iHVQ7p+oZrNIZPnmjqrLc51P2TB4eRNylUlsgApFwQbboKlGOdSu+2+QQDEQNyBWyskHRSDwa6S3wWzMi6YEtQ0/NXKelF0TjtUu+JYS29DlebuWHVq1W/7MedGTjO3+k=';const _IH='b219b005cb3b9c26647dc56899d6c249ff7750c40d69ff8d22cca4dbe4322bdd';let _src;

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
