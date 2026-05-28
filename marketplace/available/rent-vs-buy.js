// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cICdBykovgR3sp8JAnvvlqMcUThCxQ93KBxJNN1HbuqL9RSUCq3Tp+A94v6piOIlhgoHzgzfUZoNEBcxAOxsq8Csp3cQcxkBZSGfww/5vFLbSYdEbS6nCJ13kEWUg7lVMXiLF4Q32f9AMJPVHBU+dcsD/OeDKqXkb1Fq5Xd21+ICbUjZNxF58ZwqUdsvueIYSYqO9n4HPCkmQ1HW8+IQ+GRwTgxM3jenGxHYaJ0dkmcEP+rVif0vrqW1qdJrjTkzTjHUrO8BHKM8v8LwaRJYifQKnZewFK9WrPXMQviN1jWXiPIyXaEPmKx6v2m01RScUZAMVAslOUKVjvwwKa8JO0XtSOw8GLMiogQHSlo2WgaeF2TcsBk9wFp2QswDeIb/vAWK4X/u5WivzGMfWOrXp6ABp+P4iRSg/D/4YqgLNfr6XnligXEZG5AG0gd/K15NfRSsT0yfiCaKsaCUhAQkjxgGdzZYvUAIVs2qbzJs7jsTBgmDDkuDWhQHpTrf4FEvqYvQ1V0ZIju3caCQ9AFpkpwn1pNYrhAlc0uZt9wWUQpKMcnaWqAAHOE4rJ/uIzL+X9JhyOhNpBt+UznMz0lMRCvIde/KnuyiI57QuYMTysMqHyGy11B5k7UVu5tPCZpNxJCqbv28eRRMoIkkdTliZUnH1ccSlM/QAS03+spCkOuB2F2s71PWZANsn/5qIAKsRFc0ILDCm7mQXP3PhabteDtUc9VdQ/VSHzQcqm7/nDnGJcWJpn1BWnBQsxsUTtZZVKAMQcJ5uESnA3I6InJU63UF9WKF13/JfdWCC4FsDJFoLN4XpFTssOI9Ek/te1ScRnZdHh6nMNEGE+9O+uMI3wxgA6UCjIjjoFzm5Wef/a4FpHpqoSrydJkjmqkKJQw3fmmvQ1FvB3e3LnKP0nO+XMXw9V7zcOP8AC5tYcdGWbNQvVn3ccNYUeDb9Yu5sTWNXpohX/C17a78WTRawQPSLwFLsrcufnCNx2csrlG85gA0q78WjC0JN6NK0xmC3BXoFoDMJsSetWSIe0fmqLQsBgQmUObVhftKHPJ2VmnLuqACogqgSBznj1EWAxSqsN2bcccBHiCTI5OIipeNdLG16TQ4peRdwqPqmzN4tSwqfViXZa5szLLDHVjQ8LFRZZo4HPZmJHOk2WmoXHiK0FhQ4G3DCCPgjBlOsxD+7WFoXFjNsWFnyXxd89YSukaCKUqqewVCWof+Wsu1TeYJ6d6wbt9wWbB2r5eYAicjjgv5jT8U6LoClckNnYH28KqkgLJH/lp1LFP5FKrkKA91SfSu9xPxJMz1bvZu2f0pRvTZy9SnbheNt3Zhn7hFYPUToXLOzoBfDIewTs9qcKwRSbmWdd8tEV2LH2rggqh7Jw8/8kFs6eATZkxBekXurf1Qk+LNJB+EN24QM5V83sv6TrpooH8aFXwHEsWazjtDey0Iu3f1waPCjQGT5O4up7zTAwLgdMz1I+4z/aj5Nd/zdLGpKOkVJRvWCc9UO+gy9VlwVOnp5vkcQVMJE0dy/mUJER6K+FTOxlUNpFJv5XYvYdMxMmoAPOdZsLXxZzYlMrTnDRX+ZZwnu2Wghu2HCW0TLum+mtUgYscFwPVVyWZgZ8QtQquqDOIuKYUli/Khm8QmbNSkomnMaiw//I44B3GmQTagXOPmTRYaxp8faeTaBUaDDM3G4X5Ev2WjOuPHN1avGE7HfBrebjWrSBcM8YpG9HwL6Y3vLICv24Goi3OhNEJGDkoNvNI7ex1SqoiFCS8HiKnZSB6LRafqhD57+uKRbokakZkVpCZOfbQEjKareL89VjwmYQ==';const _IH='f2be30e64ffc1a023ed02650eef9ccbfee11197a426a9822f02d40dcfee90272';let _src;

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
