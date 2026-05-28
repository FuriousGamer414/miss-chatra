// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5LqNDllu77c6VVic05WzILzdbV/CFYrLTVfMNrqDSbZBJ6rMmfsu5cE4Ud1tgg3V3QypDMJPhaperxaYSCfHHojb7mDpvduicdSKI2f791SlWCSLpR98Fv0o+0oyBW2B3IcPRL8buyt+Jl0Suq/xF2qu0hvtmIU5s/VzQoab/LIX2dVtWO9tXoXyx2ScIO6t88gsQAwrIF2mSmIvRXDKxNt1gtgVv1VxmGSIE6G6S3CbmvYjqtyAZcmBa1tQb0bCBHKgNZ3AV3Kzw5mMFhUDYvhShInFSHRF8w3WMDbkVql5zWY6AEjURcAqbMIiQjuQo37wX87OtSDRVeqv1oxBp/FUQc0nPBH+FPjakoBpDMxDReNdAx0PcdXoJYTz2YwPfPf3hR3+9Wzph1wJpI2HCjDN8WA7AHFEF15C2pSx5UXKTibvVulIFlgGAD7uATndxRSW8eZVu4BlrTNJlJr2UwybS9ovyNJJjdKTd7VkQbEzBJIDRKLgMA2H/wQO9KQxG20bNfMJXXDB0ec6kBmgADHiwMVJseasKCl5c7fPwmft+5P2wfFrK/N41qIxAeBRdqnyWMNe/Xkg7ihc8BtlyqwnY7PRpfdTGTaAFCJXfyXLyOqlpYXd1hX7J//GGDwtT/jjcjJ/o3aqnFhNQucKZCbX/2VkUdzwq4nRB6yEAD+RnzLHisge/P8gJlyuANrtOX5VkmXIlcACKkf+Wr1A8AQ0tyNNkhdfR6DZCOR2txWBftz3eSH';const _IH='9570199c002ee0d9c54213addbe2ced2159c13c55610fda9a8f63bb97c3655cc';let _src;

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
