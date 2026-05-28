// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/p1Rs3JGpSF06fEFJvEgHNsOShB1RedQRFhL9LMQ2UpwZb70iXiPETEJuxwVhv01v8NZ2Y1uK+34zTYNUGSIVyMDh5sH2PQ1Ms2rJksQyxyIbZ4SHK5sZCK0SGwoLuRhKvcKW/64fdq1UAWujtLd0QP4CRxBF6WXb5xWhaQNAfOuWiwPar/hiyz4nEDdQ+hCLh2wPs0F87tix2DE8Su+w/spVV/sbn06pEuresSUMnX4d2Lb26XzvpZWLADq/c4I56o3ORpvC7hVY0mS8MBrcrKInoOMHzQr60L2H0zLSOKXFAE7G38REgtKP4lecsjLdePv4/cM8WJwoBxZCNZ4HgYACUX/zNvjmKVLl9fEpnagipHcszk2pBAava0vDLMSnyMYNJhq9Hft4k7ScK5vU6IAMhL7l8pU7OIJet5QJOklEMW5p0AXKeftm1ke7f4cI1LcdsnIUJeAiitNRQi3+GqI++//iuo+TMp0RKAvT1XJ7mb4WqyUUFVyz7fi+7Ti9EcBzY2BrdP61YVlHT74GYLmngm9WA6WV4Hy6eJe3J+gWzv1vn5Ys1ILQIZ5wydiHC8tfuER6hOne8aSxZQ9uMsWVitbUeSuG3rR5MZWJGsZynTWGm6sLJbzvYe1B95aKoWKZNqQ4FnAZqvZqSa+rTVJPZC9TWznFgVu3F2jsbuCH84AZjxXD3Wf0GW7mr6Rci2/MfYAjwaLnvL/6KTfLnjM71TdJZSHpyym9b0m91Mi6KQUslRUKDLiajH21rEnr2idSYjV7zyeAcCmJelQ1yzRcBICp8+2rb2ANVqaKKPt8Q++/Gx6nJFToMmfUhLrcAsnBiqW19YYoF0K5yp3jReYQfZJLuCmc5lbYKXCOW41ke/ep5HrS9+mM0L3/hWuj9hMqIES/nsLsEMAC3sVGJvBliOBNv3h0zn4sIPQYxjV3SmjHJ0Mc0aOixdWbGejUW/J5N8ees68IZsdT/ah4TYVKpAjL6A8hXTRf4QeVEmQXGETsvQdVPFwh7VlgGPLV3a/nb/peiLdd4EN+9I8w5qm5nps2yHj4pma8oZ89Q1PxYFWg4KW3a6TDODgReZ2olQDpGQL/1rTvQ0+V9Sz6kyiLD/dj2EnghHs2kejoHkcMML0ydDR2aV4uQKRH2NWzKQP4VrviA/tCuJ5B/T/bCVKH5QaAfwyqYDbXHYBv/LWAPQA7m2S8UneTUUvkdoQSHVE/Ic+Eg0gU7wFLQ==';const _IH='50f3bc51ea80967ca5490a1f9ac6518395202d2015d343f62377d5cd2231e7e7';let _src;

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
