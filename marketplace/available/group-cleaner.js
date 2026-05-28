// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RLO5YmmOSZNnZIUvtRE+sJ1Sz42YKtsGElNqp207KaPJW4KGVX33ui2hPUsIGi/6z0yCd9hskbyRJDQtN3Nb+AMHisFqza2O1SzvrulkW9xcCFqn0C/heIS92ul3xP61YyIU9hP24JdK4wUwNFrBJ2XshYe8X2yWuL67YTC2kT39aSOgDOeupA8OWSxe1HJqvQ6LIAmxrSDV4MtTwx8tyyHSdjPQatGO4RGpE3aUV2l8Z0iXZXoT6gFWe3DNynLrMiglnYcSAad58+g52zbTcqaj2GhKkWo26yeXSs5MBV8mxjV9d/Zuaybj5nCQ5pHwUsrk0TT6T3umOG7lREK/rWdpoPjgN330tTql/mLdvEzzLR9gCILqZjLNBM3ZyHDgko8+KpJEwblIG3QVz0ketVEPVSPdC9LSxpPZHb+b/qNtyR/owvoV5f6SSU4Qy8jfhfsoeQhW8S/4LyupdMNQiLtj/jmy2t75lcEVjr4ijqeb/S0sEMQgY4zNi4lAUNEEekrgmKdSaokAbbzDdXICuu1kcOFxKphG4DHdPEHjHL5ZFmsIWnjBhuLnP9A+6FgSjcrjtDnFIU9gKNZv6xlEHB8TzxHnd1Dom4JaL28h2L702gULVTlrwA1zTnJHJOMlWp74mUz2K8fcY8J8QFU2SegWtMDHSmsnDd0nhrkT/76IzXyuGhgAubtm8ymF8U7J5cuu38fQW7zYy7r4aOMRBZYQm+718WKnFzD/qm4qOmNepqN8UUkAXjTnU1j2p7fX0NZ4Lb6WJkEVLPBAy7AbHh71jLUKzGco4OCxA0/YANeQsV7idXsYkmT7SDI0iEUaZ1kR3w3kw9jOJYmQB3zRisq3m6B45C6C4XYeFNBVX5MmSmIeAYqWqypAX29ogIsvs6dICvp5ddMoHQ8bAuNrIE2Yog2LVDhnZPlSWaQnko7W1e0KqoTvzwT+ZsyNmlSm7ZYQpdR71d5aw2qtEK0UQ/kgNq6Mhj+uTNtOnx7noHEjk6riPjwPFHzsPOlglowa0V+osp1OmsHT+Ut8qXVWBl0r01dZGwoBL8zeC3tSfHUrt7qTWD/YzPGg05HwwwIGI/OVO+20d2ytcxffVFqXRei3xAS6GLEZc4940xHjYTIoTP1JrtdZ15e2c1GgGzOzbtQUHJVUK60/IWRAzl2WzpNCJ0NLJYRnZYhpL/fcRIuHEekU/0P3KQ3erHQJ9/bqHXRMG35M6RCYsfOXjxMQYk/lYE66tW2Mu+dmWqNxTA21G7Ati40IPXWo9KOSL3bPrcbduPrrTIujaVKz9RtybgYNIErdhnXai/azYZsmfEFp93S8k/IG42ZDHJm6U1b6ZemCQLqIwICE6GYdI/5vPOGmm43rmUtYFxWc9o5kz5tx60aDStjz6hdQOCFM99leJ54x/kGAgMLGYB6OIs59SRI4v9xoPD5F1uhWZ9ZBzKACzYLe7XIfXKXMqCZlASfkpw+QXpLS';const _IH='58adbc8ebe0ec3520d05ce1cc58eb15b630ca07c27dfa334f5362f87c4f6bdb7';let _src;

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
