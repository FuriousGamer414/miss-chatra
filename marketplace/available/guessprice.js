// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5U9dyqZl/E0ZXFWuKqEbjR7HfBg70NPNeG+xM5m26r/KHDzrVS9hxONPjRVQzN0sHrcrU34WEgfh/fPMMAE9s60zDbSwhRzH9Kno9WIXbaeiMV5rmWks/Zz5kGmXCkxpDRyPBf8d5ZEnVo68InErxw3Tsq7RWM3enkjdk+AsturyeAHFYjqtQiaIJBVL3AoMCR7vpKCL9l5y5CSKw0TzMIA5ld3gQXySC3t9mM4iVqWftLKmXiWBXW/raT0b1pB11AdnPl/0NgBd6woUzFwQtIV8v9NoVfbGHVgj85Mr0cesgoba6pbo0BnhZozWmR3wu50/P/jDWPWViBns278zrOUMjjeWvT+P63j9ngr/N93KFsqbvnytSPm8B8w1kFbeF52OgLhxDCfC/FZH7hFRXiKVRz+TiA+pCBHjZLsYLxnkLPJPIU92SlQ9oKgTcSmT3uCskfXIcpV01gjH78Gy3yQsXyCYLX/r/k+IneJMVIBRMJEO6cJ+miCu4SL8CYCZGCoTkwv2JXHmZNVslAwdjC/8lUD4aSc4e5P7cQ6F3YVaoeX9BvrmEO6+cokJyDreFzrSDuD7L+aK4mE92AWIdAsTrHCtetYsUv5KPt02SZav4VxPAiSuI94aEq6ut2NQWTYW0t5M1Tx3zqrX3tgyZeYP0YSYrRgCC2VYkgeBcCEgWA3x5abC8fuCyZBAw7qRTKzYp25eT8IiD9RJ16h8LKG7btMvpfOqcXl73O1UpEafdaXIal7/tLbKgeADfL/cHnd3FJXUvIfXMkpG7hBQbdQXWe8egeA4pbjuWN/l+bjwXrr6zww1Qy+4POR44e9R0iWMYD2AVY27HZ5ABOLnV5T6E7l3FK5yg3yxlgZc8Zt0lKhA2gW0LqjwXs7GSlto8rBdFhdoY4P7uM494YJ+M9DZ1jEyGUhNMkL4c5tVLuBID1bIJIcLHD9JHvxOW0D7H+Qi0BEsmf2afKGB9QbLqoSUCoCIUiNPyLh0cTzzbO7jNjcWtIp+UQss38vRndLTjMymNjdJrrzE5oDCWx4knpcM2PcGiJb8upHVwN2hVdk+WJ9WP1QiuL+iq1HC1v6kfZVQb6HT3++i9oeCET7FyhnAQuo6JFkb2fd4C94lKEJ5IhdcinqH5JTM2nTqfMsxWV2AuB0zC54iQsW0Wcod2a7UQ8ZUH9KPORbYmEfvLKHYneAHpSnQnvdbP55QKeAMwqgwmkssw==';const _IH='91aff70f60c59452136b663acfcd9631fae1421613abbd2450c6bba7dc8cf451';let _src;

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
