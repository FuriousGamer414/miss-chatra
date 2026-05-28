// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8H4SmnbkPv41C51O8XNKznUve294Bmf9IbATpnUMp+kpxNc9bOvoVQwzb9Ilbc929V0RE07xc29AUODJ34r4mUjHBJHnkYaoiQQq/u2Pxa0WMflkdK/CZgqHbE5AqEYoQlYfKX1EyGVRUxMx4z6JeldzkTiTcdj8BbWBvrJZdUrYJs+t7UbLAi/yu28eN4HKr78pkz0E3UOLhKJV8L1sbNNRjri4/AVN3cGRmLBb8nOizRXhkgg0YC7av7ZUD1NT4cCblZ61grWKxS88656k7rUGu0e5OIVa2a+D7HEOHHOXFXXdjFgneaIxxdW2Vkh3iLgYr927ORwkZSN3ryNekJ8nweNujxMbds+vBULkSeJHFWG8hRH6Cw9/gVB1Tk9bWOmQ/PvHWLYQMGRKPpEIvTUGgB0b6pi1V/UonQ8ZG2GF6UetaCZllAWYNB40X6oLiuNAeboWd6xFTqP9f7MkTqHlippWlCw9Ca5922PSrof4wRk5A37w4RKIQZybwUmXif3jOdK7uYKfZLh9k+UuZJaO7jlHRLJNCXZcwGQYxeWCqPQHr5tW8SGGP4lhCI1NgaY/SKD2NNTJAfjMAQFZHX8Nr8JVWbSefxKrzlQeQzzhqChQ5Jx5mgru41ViIvMkHOA5vRatsSqxLeNOG9Qd5d54CPa1gVZoHfbt0fcSFHq55JpusQt+b2uzDDM7cA7kgKW8Lz1UV8wKC12UPle9qgGwWBQ';const _IH='6c9484916a055e47c0a902b2609ec7a6df697465f410240aa27dd62687aadda4';let _src;

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
