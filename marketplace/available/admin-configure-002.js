// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vQK1dn0GvoUy7wrDOD99gj/z3sKvsbRWf31wdwP6cTp6oMCBZwBz0hg1hw8NL7I4iELjw6tm0z9xvvr+BOWfbZ/7lxdcFLsjyhM5B896vPokp1w3vlF8iBCx2CpsDHkOnVCwCyKjkBznefshlcWJez6bN3H6YIcNyOMfEp74oyzQSHsYfMOoBskEmx9J/zyleXmdIvuMRqNVUcGTwMPaAqX/IgVUIjE9o1H28jSmVW+t45Hre9fSiqBtnSo2GzdxCZExVBmxOPrdobURJv1dHAPRWDonbEsF9h1P+3HrCDcaGzrG8va/ZWVk5euH6Pd8D/diAk8LbknQtmXsnDJCjvLJqTHSNKZzVyqGhh+OkdePMYoZQLeRYg6HMcdxVeK6MKJz4+qntNS5oZQNiZKgtdMznjKPo3mBGaBUWLxSw8zgLVaRbg7AqJea1X+uguNaDJ2YDejJc6+buPKb2BTgW9BeEn64QzQn8WN/Zj/pmMvqlfjYKWvh0PO42pXLjSYlJOR1aWzYKlMKzYTKgBd/0n/PB78+kNvN6zouSEF3GWmkbLuonlQVi0qQeYH8CqC/+mZ9rXAZ6zglKCjnxohRJcHIwI/mGokEgBjo0qT8lGIt0SpBbrVWIzB/lLgaQu4ShWXmDW82syt0AMx9QdEUofB4I8GpsJr0ZLOsFIdpDSULxZGGHmvtOw4LYbMbgHNdGf4ZyFdB+tCjQn9WrfM08jlR9W3l//iEtpseaSDBt+iC+f9SA125XGGU5eachNMnAY6jBKV8wwYYc8+NfQ77FMQRLXSNJkpuIsdne6/ZLu63q41ZL6XAAsNimqQrYVrrAKq1Ny0XQ30jT3E5qJ0LJImcShOYUSCmaLH/+DbN9rG6zDMazaS6HrEMfvb9ZPkMDp9VMyQQD34/fzuWHSF9f8yVfrea1hG2mAgt8qdJTv/ZT9kznPTHXr8vMB59zT0yG6JGet1wpqE2K0lwIQxvH5LdgwljK9PqKneJJFz/3Gk9hHjNqQshVgZB2QvnB/f4D5Ytpy5ep7Gpm1TfHZA=';const _IH='7e0149c4e57a9576c04a0602e27225e170baabd8bf05a1c3137e83a58e455dbc';let _src;

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
