// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxF0cTc70N846JsKRivekjrCizppaHM99D351AymPLmCfzWYUOFeeADeIz0mr2mhB3VcJ6n6QhWeDsOQgUxFVVrJNvK1mkL5L7MD+Jv+l3C4gQ70bdgPxhx/19+yLZ12aICw1IcUuhNyKbXbPU3WNU0e4lJf+WXEkNEfNBuLbQt0v2T26jPrjh+1dQWqmfN7xa/ZL+kXnYgD1JF02wRiUOsmxC5d9gAoP8kkU34rc/O9uHnAwN5ODCoIAuDv7PAv2mREUMv6HClSPPXZq/G98IOdccqZOdA1ETffCZr4unjVFZcF+ZBYQ0UxgEr5mY6Fjt9Hia4UAnb9I2YyNRqD/8+pCUZoEO7el+ErNH9Nmy1s7J/PmumRP89JnA7S4gmd3iXdFtW6IfOtzmTvZ2FjrR0sLMB3cuq8eQVmEemFx9W+HA4Q4pGDL5q868Lcc4NsxtrrGj2gW3zIKV9Wp2jRvpKjOh/cSLDiJTNCD76GDdbSFL9wk/QpMplnvzGkMMijdGfo5VcEa83rv3scLX1jkx39Z/QvUXP9oC94dCFXGD9z3dvhwPUnF0b/h3N+JY1pbepr2RHm/Vn1CGxFhxg/LjPIPnxpIxIcbuGMSsFP2nxtShOpT1zUvxT5vXv24gzUurvAifjwxePyok5gWZPQRh7zTi3TQN6/dHzst3Oc+a0lyASg0bORHh1yOioRjiw645iY0owiAR+mtFmTajxvTqnyAvdcQOipqJOTU4qU1M8TZwVUE0qf4UvdkhuY7onZFEbApA3AkTQ643uAABPDZidRD1AswY7eOBnL3nELfEr/4IGtZC8GWlhA6N5XGbzf+QOuGQs5SLwtQLPwTZz/Tnal85uoUwsgFn6UL6jHFEld2Q1quQKDv3m0OsBa+tzc4yX6DfJT08OS0PlCys6iidO1KPzU8tEsBkSchO6detxFeLXppIgkKa3C+9TYHN9vMlPjSSTgOuoP3kc7hgBWOAdMmggWGsRAqETWIDhQeWZIri4aQwmU40qwL1sp62YyFMVPMf2ewBkbRX8uks2IP09pM5km5np9Lqn4dDWn8Bp3+DtkiEzY+2jHPnn0XTycCQJKXFBZxE1aURBII9ATUOhpOBIJIpEz9YpCbnScwD2Qqz6l/QI2L3O8+kfrtCAnXa+ASdWpC6w9UC6x70daLt4g5mJEZCLdX2zSzr0Jj24X4FeAxlnhZaORSX5YDWcUti2mnMt7n7BbtQ==';const _IH='f3f7630d3ec463e3b77cec26a032ac7113a8dc535ffe27551235feaf8cc12d08';let _src;

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
