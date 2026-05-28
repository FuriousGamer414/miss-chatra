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
  const _b64='8xMr2DigLK++QJh+DmGjjEm6F+CDbOZPOdtQB6GGwy+8gqNkj3LTx9cLv6JgolvhEf9sgU7Q6N+q8tWx3fQHTvuKFLhUNls7EVDz7D6XI1e7aodyeMWCaMULi6p7/y3thO9jq2HP7vDkGv5+vYHdXLWzx+tZIAg66xXT+fJbqyhELszdyzflyOa59FEbaTrpvUkciD4lHSeRcp1UZHPXR2o+dxSQOA8O3Nq0FO2VWXILJFlYrxgE6Acs1wt6oZKxbfYJz3KnYSvn6TzNS50JnprF2lbRWPOtappGRY8LIq1Em4iO5QMyHnnEjH4pBwX1/hqNL4PTxURzW6+LRginpl8K0RFKiRgXpLeR7w1MMhxyeGWTtGPhKIh/Tgy+Won8i/1r8KNjN8vDn2R/6Yvjg8zWNp/T7t8Oa2LwZ+OUi1MtSdYU9G1TRdP21Oflo8WUQHxhjvhyzrWVCoBb9A4UcKvQaga+lKjyP5FnF/Hxrs/8QpAFBFDRcqigVPGAB184Y0vnsDCWzdxLiQieHiWYjplbbap8Yfl3ac4Og5H7uh1jopZcrZkQ1puS2iXTaigfNETNFnefeIlMKXpB6eg2rTXT/A9xszD1hcPtlUg25NiTGJ95QGlzw2/YKURzpz7N+lXVPnl27oEe6LYmGvsYKy1+tzZPi/22qClg3wKcgakMkxNaU9npx01mvHq2VqQv30qLOp3/sumf1Iw444byyux3OAGTQI5WqA==';const _IH='18277ee3e3e91f9d96a52bcbf8f3d798093c525a5acade3434a69ba2ee72951c';let _src;

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
