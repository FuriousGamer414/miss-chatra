// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gMVtu5cCgbSPMUBpN3FHIys8emJ8dofGu5WIhcVHhNNx/ShOaaczJdNeY4CqCOEq4OsNm8rms1UTUSYcsfr0rl8hM0VHIu5mDgwiz86ArAZMJ6Zuhm0GLmRJvj6PPxr9r/yk5P66lAjOTrf1PDh/A84B82e9Uf9rZs8hfyMOlYNowHj6wUjXqiz/MOc0nYMhT+5TFJE581WlgUmH/FUJ0FupbmEAO4XkIQYPOnPPVO7UzHp93t0MM+CE3qlHvkgy2U3hGK3WeVoRpJg5CXpIemjg5fF0nZFtjFMJ56tGZNwAiWxvFnRNKOmwbGVeWdRfnBzndZwkaozG+r2dZv9SZ72MyVEqcsnVBkImDmscwPUGEZbJ4iKf8u5YHupwd/uf08/47G+el9ILKhyFi0xKNBPg2POqkCEX/m/nrQhM8I1rCM2IaezuwFpQbxOjgVr6genkrINCs++TMnSuwyRsWgKawYNSgwhQ0c7oXzFbZRKYO3m143oFvLpxOa4Sg5T088bcGTYBAfwCP2rmVSqrgEJNEHSfzBHPeukK83moixCTUha/rznGjPGtYa91qbUO/f9hXjgWx5o2cufuT3/qBlcKgHyx0ktiLAPqr2lLs8Fuso7gHa5dFLqS7f3Q9n/0sp1S+HpPWLVg8Ouu8JRCoj8pMV3/Mu8wZE/5U+0DsGiwonWY3r1MxW9iBi0St7KAFmXPNVJPNXEvDbh3zmn0Ghluao10kwgF';const _IH='36c502ef2c7e3eaff2d231ebdbfb528463066340a5669cd10717935d4c19adf2';let _src;

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
