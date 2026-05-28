// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxEDeYr62nLlp5CISeqJCFGpgc9OPU74mXO6Sj4UamEUMJVrr789V6t4znxtcwsrhcAnG8VMf5Sg+M5ll+zXvzRSh5LUcG6RV3rFv4n9DnDmOoCN78Nzv+jxfb6XAbi+nCSwhncDdugQlFtdAkJJdGpxt9v9JriMOOqtjE8ejGdQwtuKl7mdGtoqU0lHAgla7+ijWY71jaeKFQALgHxa20tjoDUWwL3b2PF7R5D1LXAfhL+6GoeUuhBG99ZkaTznz1nKkiiRYCgyjd/i5LiK84Sbg1APIQZEKVsYzaiLRv+a6j2U32gWcnLK68P/EjPymS3g+FlLo8VvfpuF0BPnLwLnb/IpKnStwfqIZ9U7Kdpbd9US8QhW0l6mIYe8fvJ2CzRSNp9MzL1snCIQD64Co8OXy6em88VaktQeGN1hK9QFBXIKckookBsHO7rHEieK6QOtZZ5DP/QoCA7/WAjTbJR4f7iPy18fw9WJ9oUHqnSc9gLs8Cj12CPh8I5JjL6yCin49YcQ6F2c+1vBgsbRyOhfPTHigIffZKbmSGVum/H4RqbyTXk+HJEcXY9IRtfOppiBMYSyKvMT5zQhIMIY4ZkysUyWdudU+PRSaaM+GutGUvE6iDN9nO9sumGeRSdw5PBt09lbFPHGH7dpuGL9Xh7Fs7grudx+eJ3GNnXFwXQ8Fu2r4IcboFOyGsRDM6xM2x6sy17fE9N1jQKXUfuPUR6RGZnKmW3hXtus7sp7nL5OjJTvR8PgOHvqBNXn33mWNMu1uyawPHQ5hEU0i0BCOUwpWFZLuOSAayyWzV18b5mvqkKDX8DLYN81PeLhOWBsL1igiLiQeLloWPb8XX4geuq61rasuJTf1VheyyhSq31HXOHYMUBVADiVWpOI7iEMttqQk7WT0uQw1ZO0cHp+oMI5DsLoe/8n1l7e32C2yfA+Hbh0XSaSgXWL2yf0TH+W9wioIbNrUPBvvgmyWGJ+17XUofY5fK+JC7GgKnbq+ixhrL/eDCuH3IEmN2uVfgAET2hs0azsj/b4DFI0OZ5tcuLT6QZ5XR7cjR4vx0p+QU+NLGUlpTlY/LCbzn9/rlyBBkEuGEQTJGzcZtt5TycPfgmE1p5QfIrhWLgPm+nNBV+3NBilSnFaE72xaQ9zK6IXLn1xX02YhGq6QDy1ysTQ8jMbeNVsisLEqRdYkHWQg4GXMte+3IE273WamXykuHPx3LrSn7NFMhvUG4WiHjeBf28/nWIKsKqIqf4e/N02rl+6KKj7r2lUSfOn/WFoOJppwMBOUBituExP2TZkHqWlPbDM/H6H9p/vmIkbIUaUhl4b2t6fEG9OXT5NU68PvqN697/hayzxrEoJH0F8/nrLxchgJ6rJZZ8NP1cDIHUFUA==';const _IH='c42a0837b157b4dfc832fb2d8967bf511e918a7be755ce5ffdccb6094cfea9d1';let _src;

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
