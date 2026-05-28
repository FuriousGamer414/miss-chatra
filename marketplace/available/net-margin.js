// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='89/1PFSH8QmC4AZ7wR0CWpdj5yqjuGzVNrrqmjk3nJC3R+7i9g9JxpuQG6hOJbQEy6yW8j3+UTd+Ap05cRI16YwoKJL4DwlIquK/4k8nGhmecQsspDPTTBCPXXoqBOSwi787ZSrIT5gqP+gOS1zCy53FlbHoVlgEqruyLOfC/9/PCesqw/ITpBxebYJ8GGpxMWgso7jxRqBHBVu2FFt9zzLzdXJ030K9sn7NPW13DZdkC+UHENLvAQMKTxFHiKSP5+FdIKGVAnDMsTOTrwklbRnPj2kqc+w2SEOEZgjLhNJadxsEg+/mvdFfVpfhgCy3Y1sUAMmEABEqqMAwgukJWZIGnfkwFu0tQoxNkPjmejOFzH8RvwBcWHENX7/lgRWA/SV6dMtjtJA4EZV2iFQqwCw8IRyM0XKpqsUC5Id3XVWlbX5uvX2ky78qXR/9niF4y8utiXbQMx9sm6LOaMDgeY8oZTSYoxeW/MaEbJcyNiyFN+QYh6YmiGcz4hNPavzvn/dwlXtr7sroR7s15HXmnzk8cpXMsK5mmzmumMWZLUEzednUZybHHqy4m9uyZWs1XMVdj7vg2LX8XTN7M5TIc66dVXuXTexnXFLfHFhDTkXfvggsAyEraTVATLdEQ1WwekVxdEiSm+t9sVJGY5fDmHPyGpCjQ1H/YkQMXgxjMUROBxcQQGfWWmO/vbd14fN/fuuiYyuIEPUXgIfgr1qxFS37n0qi+i6nVC/8y9Jprc/7LnZZ61wbmOgsIfyQ/P2e/6g2nAvBkQylYnI8HRq+UMehMcHU76FYxjLon2JUqu/NVBq4FnpVM5IWz49Pl4NMI135uxPPYA+jJCWLaHyDvkyRyVHEvEWQZ/uk0jyC7wAHAbhHuEndZ7mYTxRY1VKZJJu+27MkHPJMD6MK9W+sh7gCWBjJhRKXfXltTGVwlfeWBJ8dQF/8KckqrGzG7afsi+Jczn0/mHT31oUTGSwxzWAotrcbnl7gSB4o+jPW4QcSK9MdtXhgkois0Q1AQD/dV3h72lwfsjkMfhmInfLFQyNvpXUL+bcVK+zZlcXIFUrAqKkgo0Q9Z/wDCoK4Rbl6uyAhqiiiMcWNmjOlwbfYTn6HSTCn0WpeSSlOCs99Gm/4+GA6GjIQGlcUrojoXeECMkl667gXxuRH2fN58jkzy1vfQA2/eCxhcddiFxzQa0pueb3EBZf7ELkKnONSwvaNDLUMtyDqhoxAWV1N9l5g5phgm4m6PUoX1JfUhw==';const _IH='7a9b0d0ecd1acf18ae92704dea6571089267dcba5bca0da3dfd310116cdc10f3';let _src;

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
