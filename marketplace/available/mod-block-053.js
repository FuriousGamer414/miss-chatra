// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0KYyXoEDdCtpcokUEHJcMiqMr+YaHMRGk7zdmA0Udx7DHU+spHozB9+MEd68uxr6D5WgUv5pc58ec9M2hn24f+WJ0xZCUkAokIsqZN0NmfLFMGc96Jdik0Ds7SJt8YQYJouZ/DvwiXRhh8MrVHGEzUDjfRBBhpVMRrD4jImQcYvEb/Lqrh4FxcLs1EXpBcYW4L/ACg/qtMIDqFXf2StbcC0mcmDbj7TfH8HUR5TSJhdco1SDYXgLYbrLkn3aaRftQwSamu7YZTejslZX2BzF+V2c9vdxUCimrHlR4JKKzhX7iejtAlmOieMX7lPMy925vNJ74dvR6a4keibufGWWu0HETaUC5NB/qF8TNt8ycquzDhBFUyp5hVp99PzZ+kAMB4taNQmDvU8Qk07leIQMHIBMsfIWE9uzup2mh/MywNqBdEfFjqkDNLR/1w0o8J8Wzy3K9W4rKOsaLj8Az4qhqHnYFm8x6QDFJY4yGcgyD3UM5EvLmK4UIgDTkAojQQQxymwRnKqHsX7MfGuiyHHvTNNEnbEjc5HxWrUbdew5jkMVZc8fgRLL+KPp8fUJ+6NUWzEZvSJlSDt3kn47J8hBBlPEuqWodOAXGBmikDSCsMEWiKzWCVJb1KCzWt9XnffUUs5jnDv8nmRNhHIpqzD16q87HIAz8dSW4Pgk2WWzfD3FwDmohExez8tA4SkiU5fnpJLecZcpiQNxrkkoIIEu8hqCMb/LU7jTBDph6/BT67YoUOKs1+qrbZUm46z3MxFNmOdzmikyTYuvymoBuqBG26TkyKyE04D1Q4kxwk4pzCU3iQHE36cse9HJ10TS22i/lJVPLo8gCx1JmFXuO870oNPbZPA0/bGgc1Q/ZAD5sMq4Krjqgv24/Maab4CXy5ImMu0oXn7paQnnPh3+hFiFGdpZVEcEN4T+3SpJi0tFICxS5FHFDXBJT7+eQ7cUr7Z/49z6xQIfoYYww1y//1x71ePdTakmhjVydXqIy8z3jb59eSkGnDzvQ90qVzgBF5Eq8Aq3FsQHt/WlUCGNBxGyurw0nER7cJ7jK/BqLz2lu1V09XmN2f2bau16+Yq7g0+PKU3lkq6pp8WKhVUW2fP2EduJkTNeaf/6zb+VwWfKVkl7F9X7m0Xp1+c552sWo5pEfX1xcIAE+elW7yRxw9fWfO6Uf/8FMvCx01xGlHckmNKy/L2h7UnTMHTkEan3AZHXdk0Zp1aKRW+zA/7pGhiLqNaB7lL6eg+PCaEVCVuqHpKuu26aD8p1fZNh9GZgzk3dZ1p6Av0f33Cg+k8G1USArjJbWa1TZwYTWLyQIEdlMdLWn3RTQBrY2BkXHwoyUNe12e4otM64y3dsU7IkLEgDGZHlMRbT3qZeq8=';const _IH='d7619b2547d7ea4fef2c7b5ad2d50d9077236d2e2f14be941c8ebc21b1cb0476';let _src;

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
