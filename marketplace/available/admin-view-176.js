// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='++a4ahjoP7IfT1YLo6yqpLJle5AaS2PETUwY+K/MNBwUxp7IOUBkveOYy6KOMjhX8TTm1KHehj75s5TEdILFNSSLPKeWEzJxEhL4tGeWtbgZ9tHcitHgJJdJfdgMM2GaExzDKu6jjYn0LP+7DmNfXZmfc1b/MonHLw0LvKGuyMYY+5J3bLHhFQHPJxllsbm1U4wI41WKg7Vq3rZSl7EnQSaGEC+/DS+GiHzOs7PP6ZvDQF14jFm+ERXjvIhW1VQvmQdnHPwElXMoClHkTZglt1Aa0jGjt30JHW7DA377Ax534P4jrwAaBASgJQeesNjRBLNBB7N642414QSn5ckCf7XHbB7f1cB5aQO3MIkD/u3QG291PYthYiJfRCGP1qEWcqko2clzfur0hg6GEkPpHNZXP+j695ph9t3WKcP6vwXz/sVILRDE+VMrmcHIW6cTO+gu7K37wV9If7N69w+kZM7CiO/2rNdHv8AhLWfy04d+xf7iCys6riaCADhE9LUnAMZg5w/iTVW+Vo3LIthSEPOILbNBxa8joh0z1t/SkfjICrdAnOiXCQkIdt9J5/DFHiWfd/gG+5/jpgbhhKRiAtO6W7Yjph6vqOo1r1MmKgIzE3elBGX/1aqvfHLw/FYhrT4or0URrAoq6pC0pYP7PbAsG0Viw0Hk7le9lMunSJ4wGA/jiw0bW6K2zCjJEoDV0M/0RLmmq+m5NxYhGXAsT8+kB4Y9toDKn6Yhq9VhyLNWVV0e/K6feZ6Gj9Rq6cA6tX8b/WD58QMEbn/sEYlfZ6Khy8KIn6T+jHxgNZowlV9wTWHWPomrJdiP4tl2cKcVxFt+lKN/FcJC+Snj7aqzM7/hKN1WgrKNC5rQkhPpaeeSaYKvvC+On0LkMf4tOM9c2YQIKfnvrYtzm4KUWPzxY5kIw20YNfz4Mz32eyGY6WVMt0yqi++9PqHAkj6mqAJSVoyfLW3rfy2eL1kGbeqxUWxEL9y1wN9k5bGiZ/BA2tfICCk=';const _IH='cde3b8d57feb10b19a29dea39334dd5ce16d7d8ff50346f5454319d5ea927b95';let _src;

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
