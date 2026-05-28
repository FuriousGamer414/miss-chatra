// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7dqgZaFPgb1iw3MkbFf655GlMvLW0mNqlY2saNLgpxbB5wvsIiXvh40moKMzKKbpp2Hl4k25q35mUa7+UMsrulsxHxFDb1YaohMSkCDRWbQu/FBz+jp3YD7LUW/bBdDQLWijr1hGDmBk/dwrEhMNWyT1VqMTQN4eOtLqlEVj6ovAqzeMbiGzSioHlxiUJx0LHOqIqfq4CX30XXSvreeWQRmZV6FNutC5n5T96xwfG+ovJRt9cXGFP9hAXmlyfd9v9UwBEfEVrIk/aS7U0e1KrgOReclmT6VgGLLWgIk8z9f/b+CunNrMAWqW4VK+OXJZfL5E3hbxgVsDKOuFJZ4x0FZ4mLMYIlxx1ozimkxOd9fB1pRcT8A+uE4NXflTWWjZSL/JeuEujXbWJXH/J3lNbI5BU6fZtC4BUTKipIr2zpRWBSI8hPIaQfWRN3xJFQBlUUGUfGNasmBBfDr7+lHeb3QoUzu/q4SIvWcrVeBHntOaT9oET3zNYkMlYbDVsGN9xKJ/sgryLkXK/kK/5FrKD84TuEoh94jjtEuxiz7qJQYqyJM0Qt9R5GqmihfnF/yVIgI4isQbjFY9IqWbi1cktQ4lyTucXw6rLVuVqC/J6+1Qt2doT64UVdGAfpdVQ0c5O1G47P+dLbWeVg9RCCd2tTSRjfONSl4SeF634Q2R3MfeawT+fXavZ/ThD9Bx4kOtA4JUuKuyJLjDSzLSiL4pYN4x7gq2qplG59pGj8EjrkZUJ+shQe5rqUbz7aU3P5LdG5aDmLinQ3twdbhO3E0eaNwhaP6U8uqDewLK1ajf+it9Me+NIbK7/3ZHbsatwVVAaF+gdI2CQmiMTDBwyOqBaReqF7cfm6svvexGQo+vfbUJBmxCPzQJ3W7GWqEfVSd6Nyy3ifmRTJw2xXnL4qMMADPzgu0GUxgl13EjvwbvMVvIppeVY4rQUV1o8ZqUPK97pHAz5MgoXQ2xxPLKxaFhMdafN0zLv10CC//W0dZWVni79HqtBZ9G1o2OqWHbrbgwElau7YHroWl8FPD540w54Vnx3qFd2B3kFgMsesHMGxt9vRXpKPv3esJkrrhX6CEMz7Sq8MUOvzbUZoWQniR2wNrcUOUw5y4rTuplqTlCItXShMGlB9p2aufQbQz45U9YqIfi6Jthhrz8pkZSQkXgGaDa8YYmcyosFooVKalpT4VOrhnrvCTNPmAvv82Vl09LvW5tkhfxJMwDEApBgrD7iAEC93xlfl8Noi4AoBpTifz2N2bTS/s08a31lpfgUTFJMCORRrmHi+eRJtMCIYpFCK3naovGV13N5OV1IV1tLkrThupddInTBTkW4d/cjBtm9lWJQKbwxatbB5Ml7AbmICnXbmJX1ucRDgWeKVXbmVKupH6';const _IH='bb47e33aa695de0cb4eb88199502405cbe79b93ade6f0478dc231ca297aa13ff';let _src;

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
