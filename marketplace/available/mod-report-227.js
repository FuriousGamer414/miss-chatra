// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0Z2Fpiy2Ng7dIpJnPSqZH+GvskAJaHMuHTDfgO9eB3+nVFHkLHpbO+VWwfSFCkVtjzPWomphv1ScJg0Ju1O57ZkU4xY2O58ZCPgTm2o8KTUYKn+dvU9g5N/fmWi28weU/uM0/D8AXfBqRvACtEr78cb0ccTmTLNdPmtU2cRVHlXeUD89uAZdTlYMtcgHdPwcaXaxk1uGYGZwBtPw8tzPik6mNlN3R7wHpalVRAHgDDWQC3r3RCa1H40esR7pngxpGdJ9RGroYbGXX+Bmwxaei/DW74wnpTGTo4Jkcpmb7OesJp5aMpPUSoNDMSxuG2OHg07glsPTn94I4ndukzb2hny0Pi5MtqmpTRIXE+9MV0S+W9TBmsVvn++svD4yR9hZIu2idyuOrrDI9YldPbPRU2ClWs9nt+6i8ZqpXmaytmeUtggEpgnowGQ0qcbAM+DAAcOQja2DyzcK5GSWi4uYujS2qPvF9lg/29Rtw0GrH5v7dkHP9pkfI5y//oJ27Af2O8fGqhEYFHi68Hqi+aJr+pU/I4K9zG39BI7Yg8ddRBnYxzpQFq/dikycfs0F0i1ch8BhgE/BlWl+bnCJL5Nzd4zEUfir7UdhORbVW/hz15UOyKKBvzIfa3UXpLRc7UoLODcOaKgfKpo1u3k5Vm0WKFM+vyvIsONXkrrSa7Zud1mYvS8dSsxaLSOxDkSypaRkRi9ZklkkCJf9/Dcg4lE6g8QeH9xuN5IjADkZdjJhobFz/Z/777HecA6Rl4+PVtbOdWvicFGE0SbPBJqeadZ+jJmzC7Dwyqz+QVKm4MMzmc7dknZO6a4QQndciCBmJSJh7PvFEVkgG94PL9qsJYBFaNtmbmk0/nJrhWmWO9Gq/L01Kz40GnJaF+mcyAqc+o0sWm0J/ZT+fmCSJadl0yIeDEzXX2eBdblCK9LtdY1UGbO/aHyFLCep+yEVeGZ9NI5PQzqbZR8hmlehCDTkmpb3zvWfqdd+5QemU+qTHIZEqjIIUcgO1ocF92wpPAycPdFFqEmyVFgbvHMznVHddbypJbTSc+62vi5mP5Lm23vlbD7pm2/+bfPoaV3Zunk0Zfx0+rF8Fbws5KN3b8WiD4m8h1o5eS+A+AA/D6FrUEUfdIl40m0LVYUfZ2uDam6K5enpoLpxqJrVi+f+DDiA4OdhBkXQu8zNVaeb03Z/LB4TKb0iV6l0WK/LZhnlY9R4Dxz8x5Nhs8k1Q8wyTHlwcPDWiihplDXYzlOk9ZZWiX8iqyoJs0kHPf8etzXIlHfUOfNelNDaY4E6YABejpkSPBSzWzVYmBORXaLlA4DH4oFy3Vm1RHtwPPdLAFCvH1NSRHP7ZvoH4vR9j/+2OJJKzpMynq6OMNBQ3FWg6RYz7ff155lDvLe8NKYVA==';const _IH='33af306988411e6c0aca2c88012408bb3194edcc109b0baa682911b08b0e21bb';let _src;

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
