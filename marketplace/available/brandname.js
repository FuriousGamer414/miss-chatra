// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzPTsskfJdCsZExNWtbYDt7zCkJYDgkUUTmlgVU04TOyKZ8FL6L8awfwK7QpjKYZCuxf60njOIdeI6eFni467HtzeVuSPFlgEKPS5f+wdp9ANHuKBuUI4kCQlLylUmdFKFUKV3Qaz7k1MDmu4TUfbTn15VuoorTrGZjkCzTtjtyb59P5elvjFOrr78PPw/NWcu2xtV6eWZoX1F/FBpwHFt/QqlkhR2H9AXWV7ojF7R+BaZBjka5KgULcWSUymmnErbU9VgHcGn2Jl6Zyejx2O/zcELm7tKjld65hl5Tc0H4rpO35wr5N9gughJQ51oTVgU0cwoJsvm+wU7CU3cjXWLfO16/JprO0CcRqkhFkaqj7bMd+XyQHbTtk2ZS5NP6tJe+rmw1zH/WPuUEiUDl++TyUO3ZdRmoUvNUqRwSquyfMENUypxS/Idkk470EJ3b/CmJSY3bF0C8xNFBVR64wDg2zKfWQ32JgU8YbmpZNSrZJaq+1N4UVXPbnizC+Vl8Lue6819Df4m9Kb3Lo0o7nV4iISrvYJuOvutStKilRbcYKiX9CafGXlt+LvhC70tRM6HXqvTUklUQdosfegYZ+zi+iktaG4qnFC/y/YGGfOiTt4vGDz3b+ce16YSvqn7Rhz/6FbASaxfaqQfyO/6EGBzzFjXB1L7zZFruUxLc/qIAFvG9qI2ineeZQrFeHWBM72TbBmSXELk/IId//rs8BXbpBhiAJn3+wyyzU/G5rFlpHrJDxMS7SwNEuLH4ANAwofNDCPaKIiTQrOhTx6XdPqmMUi0SKm10n7IZm6wGR2Z8GshATxPGjEWeC38duJK0kvFi5oTvwdP+Ejufw7aZE9mpY8QUuGnkDdV0xJGRnsmO4dk9A1D6IwZdFFdg3vhrUblnvnGbyOSU7RI7dl0vNAlZ1HBWBJxIK+jJORU0az8POFWekMPgaNq6JZE/BjIYkW3UmAWc00TEB+QDWFwRdwxh0cE7Rkq/SfFBR4xLin62Tv4S2dm5O2oOgYxY1KgxKGaUjsk97u7aXSUj08cjexRVpaJWHNB8onWp3w+E2apN+QmGJLnqIJvGBxWXv01cyP4SggKchm7QO3ijhq1p+J9AOgw4poLJVEwRzJBMpewIAzFwlwSXIdLCITHpnsx01WiB6MJNLOocecySG9O037usFL36xqPF19vG9uz/RfwyxptIjd0Vy2iUjoCPUbAiIUbblkzd7Kw==';const _IH='5773fad48772b16d7295c3b6b29150e5765e0fc1bd6aa7ebe0ad189cb6d7ec77';let _src;

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
