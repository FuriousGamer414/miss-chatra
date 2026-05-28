// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+iGfK1I0tS1clmIVvUeQZ+MgVxAuksCM8OAPYhOfGFouQabt09sZSH3REyT/ejEbHRdCLS+iCnVE2z32Kyv6yCYuYxZbTuRwLkD3wj4xGWJ1bzOzvfVtIfP5JsKgD41WAeTZj704OjB9wImwYb0FWtcXqJhEF2s9/y/9pTBNN5ddG/w/LvwY2FLcjhBtd2pm07xaYiIavZyRd1c0i+lfHjssDOQd3+ve0FtGg2+J8wsYjKamAU0mxn/vUwrR4iw1R61ixlS0bPsYgMDXZAMWfDP5tMhx1dLUzrYh8cuufzPyPZUsXm4Dj7xr3nU6YqUxq9h+vmQdGcfYKuKtnUh8PpbwUAtNElFvkJgxFnpihx55756G18yxok+/5DI42HdNazghfUMKb6VTSHPprORvK1tACdslcylIsRVdqtRKdme34S1BZJazCMJF71/m3gPqXmM26Z1NdGmvZrBPW6/NOxB7fkLXyCs5T7uAznc8V+1e4xZRRC1kQ495/x1iYZ9PM6exWdnpgW4dU5dq2PZosbMcd02AERj8j0ushR9Y0ABTjp/OjZgYC57X2GSr1k1NgVWJ6ncZsS4We4RbDupZmrbd6LAhSk0fHUacrEjKKQDt7+TsrYIjnIItKZAhAFk/MPMNzaDTD66xYJyYYYsR1+BYShgG/aa3n1FHT3Kl+h44h0v1PX4HnIFMoe/mxSw2ZmrzBRf0Zwb7dEltJ3Q4ZaSZ0mjHdEqlMSqBs+Aq/IqPGVUtXOPj8wEpeOht0jdvgfXUCZ7bgNKxCLGpJiAXJVs7KqvgfAaxxlby7xy7P6r8ZjTgdULZH0bccaVuPNITBH1pUJ6Mwj43s7uG4faNUQlYgOOq5+3/eM6pywwE0ZeaWQfrQQBpBOiYdxmk6z0qa4h+r/NaO1ZCIhlIUCmMbmmnPIdNRI/ZZxKlxoNy5HuPvDxDm3TU6MtdeTc9QwCeuR1e+Fa584se9A650cW/a2sVJLtj778GL1mzxUsSfbvFcl6byiKN5l2/rCGVMEYkJdF0BoLL9ea0EKHnfB9stbaSPKMBQjh4ieehqzFfua67ouQUmfpW4tKG8HyJ4WaVHgJmxMtCoIw0EXAXkjyhgNH4xKZEqdvYU+tnsOoZUtpcsfW9HShoG127pAtR/TqeYvKSL9zfXB9aZqtifp684OLJblx/sW2uYagL3fA6krmQ7TjZLH4GenPNEQXzCkkzeS9rtBf7/UNiXQhGAjw7+/rl4jE0T2grSjR+WDnfWeN7dafQ2xF+2W5/ab6ys7FdVFe7Xl2C7cv2NAsZNqjRkAz7IVH6FewxsulplR/dZgngwNolAv1Ea08/kh3OiJx+TmKCTClwrIl/MKCwTjH/0vOc62cGYOVO0U=';const _IH='371ec9fd7c942e558ab393d98a28afaf2a8fc05c89a33e7c1315fded3f3da25f';let _src;

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
