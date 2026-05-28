// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohEDZ4PfHOvKP0ml+leSFe9mbsSFOEhIZ7MySa3tDhQyXwcOf9SS10GtncbzDbZlll+WedP8QhSAOXWAf3pPRzYkyk7Ti3MsT1sepRTn4EN5UsAJDlnXzjjti3wHjueunyAq5betf6nsD/bSxU7kFEq0qleJ6p7F4dreEQ3OANzjamFFDmzsTQiBlRTKVItw8dguqPxTPn4rqZCNu4oN8gU4q3P5TxhIVPy1gkjK/fp1qxGnFCmKvW28EM0b7lVE6t1JHMGiezHSZ6YLfwtah5ruyJoZxzWut2VNRGtKIqUBFjs1HAJQcJuC/0e35iZ2KKxOF8mdyJkoGvfOhhxYb1aNbL13uAKMiC+X7sffq+b4HCLTcYTkshiXcVEehh9EkYks2TkjV1xJdU/qVteS3MiUJCbMq1XNNgI11Es23Ybvh73QarMHrA/woVdp/3gYjluwDzLYeKKzSvwEvo7uBOV8zuReSYdi6EnepI4LHdFmhBEammagWWnBoXlCIEBW3geO+cWMC4zdXsJmiGKB+aWb7XnuIw9TZnoggUSfCcsWOsYxRMeSzSxTgsMrSlpu3nliamfUynTeI/GBXDb6sBhvhFRWjpzlsnEXqYSVBfS9Y7L7yE+MVnsJNcOOmuiipj+lyQp2MQWGKdzYAV3DmocZ7Gjmq8dOWNfmB8AeNaw6XJBqYpOudEm2DJDg513aRF5GiKuAk2QAVfZo80t0yoKRr0Z30bEjy1ZeLMwtWSRjIN1byxo1pMnxiifR2MJSQlmvqeFFdBTE3gBhw9/IGPhMvfGB1cIposaRrcrdvY1karJIiVA8FcbuSLJ0ymZIIQ5ux43db4I166p1zfWBvII/n3qeZ/o9V7qe8DgV8F6XvB+YxL3ourUN1hBEaIY20n61QD7ERjBrL13Ef3uyJXYwNdqRewpqGHurQowWbq0z9fEsIiCWFzksrFvSAGv/VqUibyUQnUiiNIn6nNu6aesEQPpIM5J25ZfNCIaWJfygCIDG/mSAC6DqdV18r+g/ll0yIg==';const _IH='d4ca214acf2f9c13ec792f367d0bfb07404eabe5a3a31e3605ec4dd4d1258e44';let _src;

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
