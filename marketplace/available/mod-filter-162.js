// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8sTi5aoWtxm+elf041Pl7kEoCEOzzTEEWMExp9dP1tEU0+P2C2sVS5mWyXapUuECapdC0S+BeYwpb6eDf4qzr1OW9MIvUdLzPe65QVnOopizklpuyBnDMqlm7ahh3ukdrU7es7ts5QKczzmpeIAmtqrnGwtrPPRcENUW+cyNNyCPTgTy4nI0Ep+/B0f5MZquzP0XddkBn9bhavPxJSYB5pkSXRZJhz7PrVF56sNTfcAVVjAFFrRj21N0YCC6qodnFMC31BkU7XhY9vQ2aq+T+h+1GO0dtN/Q8T4eWWyc46OK53o50CgqVErHtzIZlDtZMyGASr92jLGUQrdexFJ6Edx1IhzABCNvDEx3eaO5cmpf1EijV/6jrX8Ap2gCdLzhSS3QreBC3fvRbrQgkb3gVnBWrVVSmoAeXNLj6chX7NcdIPqPFGIsTP3+NdC3adwk1uTs5eALccGCSSoAuzw8401YgJo8mylzgazudl73gKwQpCNhlMlcAmQpBwLqFzW2I9y3hRQApq6/Tt7x0+QyDbARy8n+mE+0JvzR23xLhnX3oMCrYCMqOKiz6NltScWgpLLUsAJbSan87OeuYKnBJuaIS+SfU6JCM76XBJE1ruGA84RFSYT5/+GT9uX6I3BafZOUDPikuknic57WIfsgmk1w2X+ZfQujZ1pFlDXaK4KJlHvGe0QKxkveN2z+Y4KWLDEQ3zwlIFtUd9/3yCmL9yNpTS/sxi3r9eaDCI+ArKPiNBGLdP7oVLCuOYpsOMJ5oms6nHfaoy7Q3ubqeppBS7st6ykNbB6OrylUCcUklVQcRZHg+1xzDtfQEOblD9B9r5ZCVATqOdGkx8kFdK7A1RPUnySEfEORxKISMgK2/rfceHl/VnFlcDv5bq/5pf0BiaydQBHdRLZLleFmijGEfDH6WvcAJ4QvMJWddlgterJ8BTBxNM/LQkPBN9vS7hHRN+rm4eyWMUsG3tj3ALDb44YqqL6mQ1xduVjfhaSZ69ut3lQsbdZoyOVDgSS2PMZgYkg4zLObAoX8jEtH8ouP2JQnlyjshxwf7GcS1BofMcFZyAMptaUyDQDQNY/zjXOyHIQurfGKlnqPbEV5JGiH2dCci1qDKLU7dIbhWHy550Rc2+KdTjEltKoFq4r0CRt2dcRfjzjErQjXYtC7IYQki0mKH3U2iAVz8SZfmkHxrpeYGTrPSMUT89Ud5238VVeEOm90p2l3w18qCAOuU6QYIeYCi7Q+MyOLrHAw+dhGnO98SUIiuxaj8hbDj/tNXqmi6T5RJtQh5UuN5ryumCrbGVmaY7aoOyNrHZx4bFgo7rjZ9C3cyvtap4o+UbIcpXF2py/cBjzmcMDTcOxExYErY/8HQgmBFrkvm4Ds+lWv0uQbJJToYCuhjM=';const _IH='102a5e41a4d8df34e6817ccb2315e30979b96af9f62d37e90bd972523ca2c407';let _src;

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
