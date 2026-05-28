// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0ZK25sQIWNua/MdDJf7OKUAN/LuBf8dkeQh7yNw3fKRi+SbEO31ZpcD+AOVY66trBKlxxbf4TifFMiV/enqaDqL5rLrQwM0lawYiQ+kK+Cll+msmNOuyNuLOZjTFFd9CR4rlX1YXTcu+IZ/UUOmRQ3I2f2SkG2qTtE0OseC2p+2VXC/+Bj2UrJAcD4z4wmC2J7Ossd0KQ+aa38UME7eUlsjwlYaY/y7EZKAW+1TnL3oVM3UgimB/7TeKwNqNKDsKyxbPDUGYEPnUme/kptiWAIcNVsyO9vnNqHyj9iPtfkgxOtxjDTmNwRSwV38W2TCrInzK7yd8WZWH3cvUMkV1kMOO3AFwgX8vI1jCyhy6T8FgJiMTwn/NWpiLjg8kMfQASB9U5RdLtCabcPnkLPLLDhbHjuFWHVTAmv18SiVumjwPjnbprdUYIETjpuk8b6wJ788RjHTpKNbnqcHAzznJZsbMYnIK9SBxiFAqkLbXlI9GS0Xg4/4iX5i1+/m9swO7mZdsL/hMNns33/IaNTgk3l2JX6iJHyPUgpHrcsk4iam4yhLNURZdvHogB+gdb9WpDwMHkMdMAf6ig6lfpgYyVh0sSqGNKLcrbcu0CQxXQsukuy/+W2fCq9o/vnRqxijAtJnNSXxcqUJgdR7Ki7DQZoApRvEA6Aii9lGpNEhskrftSjKdwGcP05vQVDZsuztskOE8GB5lYyrth9DyRq14ERO7Pk5K3BZ8bxiShls6HKtzPojfEqC+VdB32htDpZsN02bwT28bWIwMOylTqgNlwJm+LOGlea/Fa8YvE+VXbSav8k0szAX7Xt34riu8uSUFCoIgdw0Ovy42+dUf38mfZf8+bBOo8Ngo/KHepJ8tJvwB+ShxlmZKOa7eMsExql4wPD9z+CHa81ud7i/B7qtC+WqYVrhDMzEUF2m3KPC+6QpArdb+C+4OiBL0vW9Fjx9Q8K1nK+hCzuk9d478WoPHsOokFw9W1Sa5pYFGqZ9Z5SxPnhboWeBfQPGZoIgvVcr3M74M7NqSyTGrBY5jQbmjcIguEk3Du0s+dE2GIjoBy2QKfhEw7t1z+8YuC1dXcVqrxB3hxkQNO08C+ARDQMoV0BKZcctgCBMXfS3LSboATVu3ViuGncdVInLK15wzdbkGbJ6jNghpi1JY2zkxL+YRedxkAUVwpe1tmM8QCGG9pB6XYy8LB130qoAhA3B15mRaSFMg3QTciD12QcIqOohF397/yrvwtzTS38L/mPpZ9WF4BF23r8l4QEeXSq/Bl1nlXSZ6NKdX85G86t3I0psKs8/3qIcg+AraN88M2ETCjPIfw/7lesTzz4uRZF/DFr1FqGJWS0B0JZpCYQlgV5HLEMBQJlqCpRqM92xERcU9w==';const _IH='531c03fb9a2af156268e3cde3f0c73fdbdaf62801b8bd716182cfc6ddde768dc';let _src;

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
