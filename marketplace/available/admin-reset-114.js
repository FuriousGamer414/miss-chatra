// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hgRxFPweL068hnO6pi6LQrJCiBzgVno4qe6IQHboKf1HHlIpUBerVbFyT3W/DrlHRIJcQd5C/f4ULk1fEIj09jOimGeosLdxWTxkrmbxYGmXO4lYKSQ3Dq79nGQ59aX6SfTgG5vFSSiqPjh0Ri3eEVX6TO7bLTNfxUkFufawvQWp/hqSmPPd2qq2TGlsk9bNkUFWBER+/t3L+antcXA1gG845yGFDdxe+JXUWeZBt7ile9/MqGxiizgk3/FbAxJaeQYK9CyHhk8G2gBKv/lemRctMaGDGukqe3cYxW6hns59lhpiAbB9UTJbZycp/upmNT6D+GwNqfmBkDFtNiXY4lPk0zKjE+NgfUR+dnH0JZFKH6NjpOdwfQUhg6ys9zOF0sfb8r0ZuKUuACaYgSyHgMlBYmQF5GdLlEiNGafcgDKKEk0XFS5Xyr1iRecsUJ9UNVEibzpIZerF3y2KRxIk3A5TfsT4PoiFIs99sSu6MsnocAtuo6dnnpuIzgi+7UfOPvP21aeMNSAPppPmfmUVp06uK1qk2+lzoWWIwlgOifbpshXLNY9ROwKhwdAdjj0mLQ30qmzbvHvPqT1EWw22i9wejHCBlURIdg2tZXfhjwewyAoANVOKqwl4Pef//XEEdQctwUhQIWz0qGbZv7p/5r/sO6yKCiSil0o+Jcs7dco2e/fZLH8EM8vvHfLarAe8t9+G5dmjfS5ZotIXIvMuPfG2Gmw0xHFH+mFkyyWkGQzkRPSIgFwmOPu9rL0QUVR3EGWXrxMLr2chPMFUNjqnqG2akql8ru6EHeTGIk6+v949iyLnj41HezsNssG3hyzDz5TAbE64aia9Upw+7hbl11yEBQOVod8uvdp9Awl8uZQ/afClO+ND4CzN1siHU5rFDxi4lUzr0pl5P27PMO8hzs2QMxlHgkFYVZ/assqBNMVBwbuRCKJQkVzYhqfOfsCHC1GvpGn6WmfT12X7YG0hZin90aERTTSeZ3Y38mFTOqDcXl5VX3LG7g+L';const _IH='f07a879b192dd031dc32ef1c9deaa659185663918b7d822976d0f2f942de3398';let _src;

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
