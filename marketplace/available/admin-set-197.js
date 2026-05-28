// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3iU5GvIbDmozM7fzEW0exU7lF4Mz0or9eJMWAYI9qGiurfAOxHTYmxjNCS7z7Kpa71bMkIqNqsiOre79bSVz4TJLMYbVX5ZT+uwL4PQwcsmrlFDK7l6/Hle+7AsFb0bKjwx0sASn7JbJDz83+QnGCPiPN9lxgAfgmQEVkIC4MYqR49dQ2wxY85D2yro1F5Uf+C4YFNqc3GLqsQ/QmKSnAEN369cTVzJ+NSKGA+/3eHE3EtoFOmgwW5Rj+1PQL2jw5ahVuyOdTlSpa+aQ1xG8diXNgASzVrfF4VZucmmA2ougQ8/TdUw1poiQFUck1lO8hI7PjZUTKVpIcXlD6NnDn1BlOMFMqRl9FAWXLLZqlG7ekvEoKvYZDvQZiq2P6IEXxVwvygwoim8jDXfb0IHBSZQmOAw8e2srblWi7vo0M4zSMmYojrA/OUM0c37LyOvpwwDgSELWHXRrQB1pMZUb3vi6Qs/AzcHqI37IX2nyqcWXbOl4k1s41bUprxB3CLyQeF3jXaM7XynwksVpJc79dnXT+Kn6HoG37YmZ4Ik+arThaa7DoT0a4oJ0FdAyuRfxm/7yA82T2bGIxu7zaf0z2k5+LKwnmuiN4qArxWy+uSjRbvr3ZYHxuz8WVTp2yX5ZlLqSe8my4B5oBC2iLpcZEAnC/9PpfIC4zY4PtrRQdKwR2ExRK5dgjJDKL0j6pfMSokA6cHrhxCCgQ1nEjHtQBPTfdf5C/jmQqijIiPzIaKJZFJRvAxgY+swxgHdhYrQIp9Faa1QIzdi7LlDU6ZyBWUwL1VKk1poHHii2UvrisxQ1JoedCUHA9w0FvfhriEhZZHyQCE3VwTBqibaBcKCxhuejCpT8zR6aQhsQPaLky81HX4UjleQZkWjkeI9goXwfXlv/OcuZ2UBONyt39UPA/P40uu448M0VONtqCT4BbKrWnXEJH29x61BwC0UQyo3sU0F4ivc94TVxsmxwrTYAsdGE3kDccIB796EMEI=';const _IH='c5c3a8bb51685133bfdf007a4cc46d2a8e9adce7e5a0ffe728b0effff1d0f62b';let _src;

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
