// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='896pibmTUsKfRsSIK2RjV0wOq+zCrR9TfXVcoO3nalKH5NUDmFOSdZQa3r/Az7K2524RVLMZVjYi09kDxT/KjttVEwZMA/y6ljP7bKBK3tvdTF6KdWR4k9VR2y2ynF3llHy/gUKd4vX5cQLJyvGu5aJDvQAjqUohuuHOAiyhAbwyEYzGNJPoSNYH9CeftFBhRsI8fyG3Ba8Z9gfRhhvhSwtdaTx5hPFsB0sOlW6G/KmQdbnU4kDL2B03QearqIw2Jgh3B3CcPBxxiIBZycpPgwvK4+b+Ubt7bz00FVfmMs+Yhil4A52bc6avFClv1ULTyuZwrvBKf6QrMFbFaaHLjpfKg6BBi/HZP21SgVfqxUfVOS5LjUvrtR7CLVPNQ1k7c8Yc6kgBflL1dzcMWvBmjRyxcbTBjs1UuhkheTotMYinOtMqGQI4Tc6Uslh+Tpu5HNPMA3pywDuX2ZAWwJA3kOJW/1toOty7/V7BdHDg+MlgVL6Jy8Rq2rFtzjuF+64M6hzB3E4mKTcwFwmXf8Fx+Swpy3U+9Zba/5izxWrvn4Q/VUIz9/f5NnwaoOuYTRvsXwrtqKKx+eCssH1m/Qe4Wej+lrhwi/rFtQX0zTVdTU8Z0rYZFDFnyVeimrpmht/lCHLKDEJJ+Ybb6F75D2m88DRE1GcCzx8f+Na/eL8mLfZoLM9XtXwauvSK99Tps24mROwLNA4/N4ZHc6gGNS6+Flgfayoqqrz52kMRBgFe5m/C7A==';const _IH='250e12c8372fcb6d28dbb76dde23f630ea0eaaaa0218ac62d36d02040903b9de';let _src;

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
