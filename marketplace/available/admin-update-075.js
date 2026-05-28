// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/npEPLfRDKI99eLxb30tlLpLMTJNm3Ex4dmSSu7RWE4ww9Sq/60/VXQwVf7RPFX2iTUkDbc6E0Q4jL4kj06ox/oeL/rQOS0lLJiSfb+TxVKx6wriXRnsghpY1g/RhrKGjoqmU1/Kj9COpk/jYvCBMUFQ7m9PkKKyT70rkIXL3fEf/77xwrq5DNdAL03wVCBQD8qm7UZ+7xk65+RKkaZG3kaEFD85JEruhzq5rJK+IWeNnzV7YLyy0CGWyZjBNpiJK/f0z0Lvglk0hOps/ifUnqQSNto+ukzCrE9O/puKEa1xEqp1Vujnc7i7ukLh8G6ESNVfE5W5dJz3hQ2l/BMjBWI6xJI6KPrp7RZFvX/HTUaNJhcdmDi046E5q0vZZXP9DI63bcZXL3kHnqwjoz2NF/bJNmiSbionbziQbkYF34uYmJvLPY6z3SDrs6GMID8Dn0zrPbcJtgQqBgVcsWi5zhMkdY/PKAabxV5OdZm4YK6J/6jq8PvHsSOiYX2sYHX5UGXdm9v2po25D5zrYN04rFW83ng3MLNaDJ/HqgHwGC8hX8zCorm83PjuCGHhv6SlwM2RklwZxDLDTVJe76PzfBUaBSGfTPTdzVDD6bTAK8y41+5qNUmE6rj7dedUqor9cDIcYjpiSO12t75bCPxVZEp2eKEZJneOVcUHHFHSRwU6Mp/frlhQo2LpnhAfiX2UaGBMMxFbRhzUIqIWn9KfQ6XRBqUgp27M20cbwdm+9IiDNdeF0Er1VkT6wFJ+ULPGQAQYMIC/gsqi2eZyjHGpdqTq1sZkv82/kl0qwIYfIUryeGp7RAXUacCH3+uSxXN8kTv64b0ZPScReyr3CbBh5nl6GlcKq2FI0gxBhAxMVmaJyE7jkKMdEmw8pN7TAM07P0kuu70I7fUeRYpr0AbNHXHlS/mPFygvZVx69TloWHyGM+Z7Ey6DYYILOR7Toq7nW0FUwDcXBDA/ht1ewJG8D6bJTyoFgWVCR8Sk/xOq0EBS8Q2a/roTC38yKZrkQ==';const _IH='74c0e906bd359632468fd57a72863345866dc8bdc98217aed328cc02b8abe48b';let _src;

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
