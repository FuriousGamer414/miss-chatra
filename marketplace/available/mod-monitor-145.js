// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eIm/da7v2aIgQMlv659YeHAWLIcp8zeNWCoiQOnQpfx/QePeYXAeUG16nnLdIV0GBMuBT1fvUvWJdth1G7l4TSaqkq09AimzAdOUfaovGUCczyyJ5hB4OysW2s8paxIY9Lcgy0IujNYb6P95DlBLiX6VdWBNfnfiSsnxw6snDZ1c2V+WKobFS3BlMJZjWxU0brarWxSyeJjA4PMHdwYamRufRcnXxKK7xm6e10x2h0W0vW4YtUP+gvMChHGTo/eCz+TWeTNHQ4G8Io9UmxE4yzqh8J9Ze7CbWvi7i5j3euDrHWJuj6pRX3+Q8/gtAY44W3EDlDX5KMg3WeVVysgchECHHwoTPyy1/LuOEjYzQ6z8DfdCBUtA0mvWzI/YnYDDVN4DZhgVG7QJx4lK0BfC4FLuC4O/OQDtQOepuqPdm4/d8G/2Tn839gubZG5v2efXxx1TXH3GUqPm3NmRC31mVbCUhoiPdQ5/lZdtzPIgKzqVY2h5OD9r4rhuDr9GCVz9CYH+r1ZavYCcgimHcCMOdXNhhycbLDA+H+Srs9z5uQpl5A92uvoPZBgPiLVyzspm7xW9DbrD9PLRW99YYEPpDSQTsKFJwATZpe5ZOn6iMxFH4EwArF0YgyBi5nTPr4zYBrgkxt5lZNZfuTZualQJYueZt2O14O/dKJ9BppfDrfFpDmnN2PobR8Er+Q5UbROlMPSJMFQCAFPz6m5N+Q49xqdfxC3gv5HbuTiRJWeMEtWa2CeRYqAODzyn4aNFd1eBBtq1IpLovJ8u+UBSO6GW2jQ9f2nf3Mvnv+PNSobUy0LkO9IfpkXPT25jerSO4+uWAB0wBLuNfrsdIqK1BmoJ3/LcPpWJvI2TVUEO/a9DCHE9X8SigKduur+OAaTtp3zgGv0oJBMt4fMUQrt5fXPt67Cn+wW70vSEA5LZ33X3smu90LrnRBpwn6YISt9eHDSZFVv5f570KCFp67udBPe0wVVNY6vKMCIc/a6X+ENxNqqoBJTTOynMFXpSJFkrIF8T8rVGpw7adW/XZnWT/pyVIeFH7v8d+gpTbu7+p8cqZeFo8czoLrn2iCAKIXWSfpguSmhuz066npniSPzdhFBTFgn+eTNsvELu/e/FJJrzUH2HeGFkIeEG4mCpIDlCz0iQqoEOYDgae2GiNIF1YXut9NzSlkB6Mu1ryYvVukYl6KD4MUQ4T6QQ4tA0/X1r38npyI8YUNiaq0F4SSSAE4nHldhYwrZwF1Tjxj/H8a8ncW9klzKu5YDYoq0rCrMHxliN/1X0R51qqBD4r4OAHgIGyR/awxnintHHQFNFSEd+3O8hgOYmejHSlGMp1OglftdQV4kvs63zzuqg6a9moLJSTeMpivwKKfUp3kHgx6GeoH2Uy0/y6PDeTnX9je10sRbkJMA=';const _IH='714003b8c8ac4adbc16e8f247157680c8854e473e2d7225d9d224d75830eb6d0';let _src;

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
