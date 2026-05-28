// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1bOo8iu5xhIpVQo26LbCxzQ8ytV6GVh5L02pbD9uE779yIjHrdH+yhopAdg7gAX8n7t/RpfcN3U5QVRcxIgKgoZI+FC9n09Uu9Wa71Q7e/78mUZHDeYBMfJE2gyVu1OqUs+ghpKSsEUmukc6cBJtZ22EYztTSJLxXl5/ZuGtztcO/Cjm37HjAoGcb0iDwu/9C1p/dMOvnI+H9yTGvpnuQJXGuc/G/xIH2f2ZKCzkmaZW31a0e45yy3L9RTL3sDdXKz5tiGFIB7PQB5UjCUlDmMZ1abeyfCxyxuPn8dy+/ccXQrhfwL19SdfVEwoAv9JwSaWNqCKI+9KYHgMitm1Xh/pdR9cev942yEL4Lw0cBlJrxTOXXB7n5nlIGIabpkqs5Z96QtTt0N37JJdtdg5VDNvsmK7xNNWPzVdfvz14Dupm+yAakjiT03rkZDHg1zWRL4YfeC88C9LXkm2pVl5mTjwj83N7dvE7wWP+0idaJalzDDT5wy0w1eCzGGXQm1q98Q0K+S9mTUHtZt+AlU5VcRdrShAtl0cXvgYLSwWAHHWB3en4sfWvEq07G5gBdYG31SHOK/nY5LoHnl5GalaqQSm3WIZWc1zQouC2/siXfM7xdSVgCfpwCdNMN/6Jv8hKGE66E6skj9T+jvHqTRwYuBB6zrYCdrE+CVX5r9j0n1qbevu9WrpaGXwnpwldj57SqgQWy0boTyV1g9w3560urSFv/52L6LDnkZQPklWlQj3c/lIconKXQS7u2S+BsQm3BQgvNCRr+gCmFLi3Rp8owbpRwrobTidC1FEaDpWW68Ttp/hdeYghhIwXRKPxtB8lQvW6uMTfWrywJyQt62qJk1wf78kqxmF86Tjyia4tYkx/iHfjfLi5iaELQVZdCx0X47FnqZ/Za6aQTrQrg/w5QsgGyvkl0EgnZn9jM1RW957PgPNcA0wKUV5Pwt23fKZp0znA1maJbG14orknLXRD1lc486qoViVESOMrZM0IdYs6sWHJ8bnNpfpgdp6ZveRArssLjRE80S6iVJ2HsIz+vdGi8sI8jzo5FGN1zUcl7BuGXp6QZ5xyS44LyBFYxygg0xyLKEZ6f3jJPrCEx8LTalWa2POZyOlZ8WNhWj5DiMbRY/Mzwe3FoomZZKs/uOKHz9Xjn9jaXoAIpjWuTmAezKEpih/nBl/Z0aN9PWQz/PpJeoXA2JuhvUgdS+JfdXbNBhIkJ4f9sqaO+ia54yhjfjLeJ6M3EujmdRl0iRywNk3iG66nvicUpi+AJ3/txN98KVMpQgtQBVAqR0tbSkHhPq8ZcYXy5Le1NJFBu1mSI/ye4jyRExW9wicgKBPE1+Kid0Aww4bztOrMpf832xujk0pjfjzxy7VDLYs7zHy4A==';const _IH='4c9787a8b00db600043f8cca0342067f29654f603f76db52dbccf3375eda70cc';let _src;

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
