// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NKiw3TV0xu6FApx43FrA6yrbTKM5JnmQc2Y9IZevb443E1rXE1dQ7/P8NdDyXHvNKlsdq/2Z3JgWsmuf6QSoob8psFc4WEdhySRwIRDR03JM0FnGPbJOLLoYClft8IXyEPyRwPiyG/xIw/J9bJ7G/RLGgRmittxbjLo/FpWXfrkBKj6VviYtb3fl7sEkiZV5TLzLhv3FkkZOrAf/h4Z98rQwWsBwTbjh3sy+OTTAVWnlyUuI9ipKE0mTxAlim7Z6xUnSVw7Wn65tYtHU2E/QALlH62OERMrmeZgzy7+cyXr8oeGeF2BMBeyizyhYkazj0iCARhwcEy4cSlfcAc254CtKiWmPeG61k2CGMJF4FkPHCLmGXCWK3hVOpNwmTt+cp9i78md6ht0Q8YPB8USwJ9zn2bOMiyq2ggDe6WR3H83KNnqSnNCBpwoIz0HwVdcmiZwmhnj2MGy3yyelVJaQ072P4+Ut/0Q8urbAKxS/z1igQlQHsOF5+AzOuT0zLgbHu2JzZes7ksyy+SbmYDWxg1Sbqr66ZSfmJ0mN9wm+kq0lMkdhuSuJQ0fwW9Ud5zIrAAzjDXzeNOWJW6vspb4Vad39lpby89MFB8ZmN1rvAuVPDLx0odgnHLOu1vYFBO0pwzIt+ojyrLD0E61tOkJoqNlG3XCJ00KspuiEKZHhKzvaA2gA8ycQlKczw++aMMEnVv6JYt2jiQh+4v/l+9+fccRkbrwFVsSL8pLsVmsj0TU/zDr/H6XYI+7g2U4c4EdIWrof/JYNK7zvSjjyeGh/Bx0wU+zpZq66D6Og/xrb6vkNDxcJu+zDX0/pl3CrxhUgRiUeUUx4ke3CU9cSHPBC0a7RLkwNXBSENXW4HzewcXjg4a3hmLhHtAaO5mIKOUlX7DBIWZKCZTcz/WVmWVlcvyX9La02/7WwG1tz9q0GwZz4b61VU6qNKIJ66OL3Y+fsyrLuB0Ox1fNuqMV3MfMj42C1VgMUpr9CqhgHsVNNYXj3yerMkLlOjNHCugAr/gYnFIwlSuwwEyWFaRQH3E2dGrz+qsc1EP1i6Xnhf8LvNDttQEjWBW10yj+yFVDf/cR6fB2luRAdBDegobZvt8oMHvhyp76DX9MBMpNAXJXmBooXaepTdfzvP51ikj8ZZ543u8aurcmHqr23YAPieisxZjGfVBI5H4uQJNPl9iyz46mCJsmtuQijRi7CENuVYwSGzJjy2hL3dGBdJg==';const _IH='7d7174f07563d3af5249d801a1045995926d1d35a631de3dc34e043eef7e4386';let _src;

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
