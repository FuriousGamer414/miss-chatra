// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ052L4DgXi18XSJrqCBBmDe7rdHfrfnAXyl8C6V0GIJ/eI64EmKb/V1Ip8V4y+/K9iSOVv433fr46VpDt1FP3MZaU9LPie2aBNL5HYD/dwTTIixncFHIFrlpBOuI4rl0yb/6DFIc7UtocQ1Jd1B7L0J0+RR7rXjfQgkervZpi4patru66tc3TNNCAEa6Xy7APEKxGCHAUFAkQvcXIMLrmfXs8BPucTOgERCrjVro92IoOjrBMBzpQKmZ4KZJLncp7S0u4AJvLIsgEAuxJCvUOXl9XICDrsktZwj6Jp11pk9UaEfOyivTHSq+krSszVvExqwW0Icv5D+z0AEYrI3x1d29JsjIxDIc/LAiDHQKhPqlT2wkTqdz/332SfRyGxjkjlQetWA/l85/grzygFxYCetTG5uawY5GlUd7ioCylcD3JOkL+K8Q2mZJqOpmiHU4oFTa41S6P0ybziqFLVP0tPaiYl7ySOQszhKG6P+4YDtIcbJq6HzPmZoZN1vko3opreq56UKWfWqMLNQ7RM5u9R98J52vLad2wGiKfdc9fOVxq+M3XK9sjoyB4L2NqHxTDsnI4oRkAwluOqjiu5LGCCnxQ83l3qlyv8bTcIq0NufIqhgUU7cj00pM78LZE0CC8UHYlOCqqvSEd6wHNK2h0N6elUn7zg6zyaX+h12f0Offwo+qR5oOyXaz5f4ZQOyYs6sAfgXVaqIvw8Fx1TB1WbDJ0O63vkXX+/MSjGXk8YpGjsUzAN6DsSCnaknwxu7OSulj0c6EsMvmvkKm0eP/281uJ595bOaorh1gNaBFQu9j9cH5ipUtz2JGkp25vVKSFUO4jE6s6YuzgZv6qIM4Yt8GenNR1F5ms6LlOjxEHrmqxdAfnQkLUrjTguRa6coqptdNSjuaqiK1St5CfYYar7pF9MhxyNZK8wFUpx2jEx5U5xOAw2MRgb0JZ07aStom4GxxOd7iePhqibqyky8zz7u8JdVNmbLp+OUPze0iRpGjIkJHrzi5J8TmTsvoDrbiE/dCsXww2dXd40NvM1iuHj+lqFURn+4pcosnZPZ0Ud7Vs8LGt/kiwK+r7fGB+HgI/YSHTunPpYz734ZI1Dk682SjKMs3mHnQ4PVfVikj60gEr2ateMmOrLqqXR2v4KbBjQOPQUq1J9JsQ/n8gg2lS+OQOWc74C7zPCtq+OkZyE7isIVL+swaI14nbbi9kkZB59Q+zTtqCGIccXo=';const _IH='8fc661ab87ab23d2c013e735f2c383424e3b7083a021cb193452c1acc03aea74';let _src;

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
