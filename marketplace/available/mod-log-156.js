// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fRwhXBo9E0OV2ps3xpNHJQQ4EE7xLi6AvCAxwb2jPXZfQQb1+fVMVZDwnQu9cv0q3r6tYGuRz0qFk8pNvPZjJdxgqEVKewk52Tz1awjwuy/2/VrHF9OaKFaAFGOebn7XEArmi7FvXCiefslexEUgQnvkeprgn/UejkxXEQi+vDs+Mw+TubOvnVARiOJmHPQpgkerSCbICNAyvOsQ0iz63PbwYF2c4OORYQrQvrYGhkqvrx7UgVEEQK7ZkcFshbeVqtxiziercOSE5OrdILJILqU2trpTIIn+cet/xvLWHSQeeJyQDOISz6oVKHHytxZYyVjE1/Z7XVtpsbXNYmqFIphOOUjzxiibxlbDHBGANKAjFgua5iLvO9vNy7ziew15HfygaZK5trImQZAsJqCC5R++HLxNGhDN4gCRu97m0/Szr/fPPs2GKzhWrrupTI+OK5xUUhD7CYfFk2FJCZh9LtQNqbOjoPYTmpn6lwcTxW9TxM8Vk6Uc/xsTTR+WqyxEnP5jA7Ts5omwhRtwnoy3eILwMB+2pxWnNUkK4YlGFoXy0upjxNnomeqyFlDQH+I2xJCRUWzpQWz+Cuu8VJDCX4veiovnxbpnB9lcR0UJpc+7723r+5CtfW/rCPOcH+0HBJIvjwuucavkkzcGeBnWglHns0AtIDwbqcr2it8t3PTVKgtPJu+3moMJ3j51t8o5bI6KmxlrHTpGpas3YqIMLPcMag/d/CStZ2SHNIxA8OxcOGPqIqopECGarVj4TSTVRUp1l807MoLm0x13Xvdgi3TmX/VjV58CZDAZRv7JKmSX7esryeYhFbLD6lUBY9KPdHHEmDn+/eBnMJVgmcd7/XLi4lyBTjfAbY3jcz6f8HRGP97pc2HDV617NDF95iS7r+6xojshJsl8QZcwcaBa4vBMMy0srfvkQ6p4U2Aq2RDCeWKxkUVC8YHKiz5W0L2bxBp+rzsVzLD5vHdTJmSv2vN+skVkUA7Ik5HLsvvkHvBvjfqdbe24Q49iHP7hUOrdlm1pXM4Gap52K4zJKYaJmKambOijJAk+7dyE7jiaH6fLdCEesQYHFivq4m9k5UnuQm/GR9sFgpi8bu5Mf7lP7HuolYPkrbt1OMM42Ot6oE1mSfTKBkJehljuRgpSC6dd1AH6tGkWpUjlC3WzcQQP/XGblsduXv4KQBEpBI8ZRvPeW07wd8JdD31g5f4VZ7PQVJk+YJ2+OJygrEQPN2Hma3Nf/Dsb2+NC9c2sATf4ne3IF7NK2sb2s/O6NN019gOevb2QbYByzLW7zMM3Wby8iT+1fHQQph3VwdazJFnZay1o8X2hFkwCzTIgv62tBQnH8e4hAJsk1ulmYg==';const _IH='52a5cb7fd6b32ec9ffb412a646b77c7a2a734140643e5fd04ce0663215d9fbdf';let _src;

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
