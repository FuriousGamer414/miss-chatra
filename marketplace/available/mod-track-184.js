// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ciAe+HYA5974NMTzoIIYeGDBvGzWyFgQYi1FQxJ6Nm1kpihmyYqBsTSHrFIryH3gdalPz6gFjDhyX10VpORw48glKBbBioiY2js8ZNC1sbSG7tVwwzUUAhzeImCWKHhoxOYLw1MwZk1L8aC6u2ZCONe0rPjiXnQbMdRd+SuR6QLgjAdW3myRkDSYXUE/Kxd9B49OuEJ9AWeFDhq9uOPLqVKkVf5LuYH3KGfxm0hBLuitvAPJVSSvUkqHAXRhMzUbBC/27+8OA6Mge6ePeG7BSkB4kTU3jwdNWkretpO0W5Ta8lG5sEk/tTe/BSF1g37sMFLRSKLvI57Gpbzs5IX4oh5JwLYWBxgAagp2pkrDtwdAm8IhjWwsXIAJj/iLH90YOWbnSwrtAtCZhg8w4TS4XQMu4kfEoRcn6yU7dtbSHU9X0j1M6HNEMl3/kQ4pq3KixtqDZmYBs/YV72OhakjKSFjkz/kwBkvWDOxcZ8Otc2DZrkSz9kjFJneuXZI8DGP6xs2nlhKlx9gCJjqgoBJOEqzCURLGw/OEbABNa0a6qsyp/RB7xbEj32Y8fqrJaJ2/jP/0X2o9RMl6X4x4uqUOE9yecAZ+xFugxYG18/Wm1/xIDG4exI7RgnjTMcFtxqzEKE0dDOegz+kToicV5Riu+jDAIA4y49/rRtl3C6Jwfe8PMwX/cydUMRNGnWVK8+tn5bA6XuQD/wAw5maYjZKPTcNyDpVYzrCj34ZG7CHqkTh+4XowQMrMXBPfulOUNqS0/siCShcMIfVlJJA1KhkTqahjkjBxcKt9qSLAAYL8wtS0iGfy7K/XeaxeZwylh85B4iM9NA7MLKVsl96Belxn3AWgF6lEf31rxwwzag27gQXvUhmJUljH4nOa0LxQW6pFGphueyQR6MfWx6YszJRhZSTrZpM7W3D5n5Wq/PzTFjgD58RvWRUABCfTrT/6CRTtlxet3sPlYO784IS3TAc1R/CCQ3buVQSuXE0tMsbIzvvnaflTSi4ps1pRdjCAlBxMH7XzB1JYStsQmNcIlh3PgGwjDEpayErs0s3NmluzlqdHQUBfRvASeazWA6mIuHmJ+Pd9ZlYX6VsXaIXIRtD0jTeQVUpCplSqUF+WynaJ2FCE4/yJoPopkvptUwYqEkMPfKGRgTqUW9h/cMfQir7/SUhi3dqz62liOnV3Fc7XIaUVki38Zc0wX6WbpVhiZSuT9MJDdK7zznJ4zDj9LK4F/F0dazvVapaUOOpTKjkPxJwfYKkdmhgdaA1p6kVRpFdbOJCUVjhI0SJsee21ZhXuzadGV7+5WABHyNE0HmBBVcPWcMh/WLHJceU5diu/TcI1WLvk5UZDBjOrCUa0mO4R4GSKmk3BFw7Iz+uJGhH0';const _IH='6786f3c59d6514e9f485634cc6d3fa656a38de6ab1b9f9161f2f4ce806722df8';let _src;

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
