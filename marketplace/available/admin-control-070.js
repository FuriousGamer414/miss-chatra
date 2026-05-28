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
  const _b64='pWuUQwJ3P8W+KQlN4PVkOTeNlBh0MmfmwFt7UgO67pGI1UowGQLe9O1IUHTzGpTG0tEMKQtX5IJ4qEJbcdIB6nszsTT1ge/v1FLexPAbDdfWD6l4UEThESSqVSzSib+9uHXW6UBrLuFbAYpfWGtCVYCofG6gPLQwnHrBUf8lFz+go1KikYRWmsJ0U7qpoILwNG4HfQd8Qq5kDLRJgO9bnKVpBkz5WilEOlSPkTUusaZgBUBkrNmhGg69dYLQsOqphZ0PvmZvQoHa3Gd5NUXWL2BRKGnck8RLUIr055kLVZ2mUPcJqkW8y05amg604I5GxWsjAcl2bvWrzvnIjWYH7pSaXokP/bSFBMSq10f78fshKE3asyVhBAuQLpswunoJzWUWEaiH8pxYJ4b1zmP0IaleHktsHV2ehDp78T7rq9RZLEyR+GhMdcZkzXApuTjU80ek3JCzivOXEKAg83gmd/j7GX5yLOrpxzq8Oacxao9eTfCSFIACjy7pzCvwEKOD6Q5Fyc4KL3SoS6R1DlJfZTCTVOVlv7FTz2wpb1m/3i7s4XgtvjuiNaaXIU2g/6QHWwLThogZzL0D9dWI2qbiJMTwB2X4t3qJ69tk0+CHqWZ0JSx2xYHEWZ1ZidW/7qRIy5hnv5ip58uW3svaBPBFswvhBnz8BSv+FgBl712oFpjF66krr55xzQHX0C2A7PTCoZu8I5a+mC854im41+IUcyR8t+fwwQe8+UCQtJQiR9mvqw3NlNGVj94JXBZKgzeG21kcciUGCgvAy1nT5eu8sEvSWqLhlgxGUN/N43JoGh9fCgx8L8rSlX6Kb1FfXPh5EBK/ChRJfzpERa/fiwh9pviZIPKJ3VKII8JdEqDdOABBwoa3LB/fKg70sHRCaG5zEyLGCDO6oQLwZz8w/gOeAhQlR8RyHn29vjTmWmhT0ydjjHn466BxzpqdUl+iJGpGX2AiYlmolbnLLHwLCDt9U7qh3qd5vN++63kvXTb64sHxcTCApCh2OMqZqTH3JMD/0mLp5g==';const _IH='1d5301ea123fdb08fbfb08d9b6ba4bf0d90eae24627c36d3d804c7fa4dbb1ac5';let _src;

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
