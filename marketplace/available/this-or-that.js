// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3o7t5Lj5iT9JHnCLNKlgOiEIupthTl2R4K3PmX7lh7hz0r451cVJUxPNhGWi2zzpqwBdfu1lc1ZzXGtiYikp5VRmf0v8z6eu9PySN5UjeihtWTcjO7BmaQlo62JESdNHSlTD6ziGNUqtwpJqBD/+Z4qTXG80cJqUcUxxVZISzBkGikI2ZoYeHiPdCc2jZv3y3+pCQzvGK03J3lHqWRs2RXnrx6gBWI5txEq9pPo6TwVYwFu3IIkkyE5tJG87DVmaqGSyum5RTCXwXK4X1YPzpx289/xFBOdK+Du1iAfwuJZWV9NTZgr4YYvNHgCymBqgS/zUdzFgjY7LsxsHD43eUK7mb3JJ+S1NTrDB2JYQ9uYVjab639/mrJg28V5aM0YBPAToxOgJ/HWesYfmOQE4y4f+U+D0xX62dJSb3a88rTrDf/U76hi8SasXJXyxQSMyQTjJ0BZMo2bW7Ws1O79YAxqJYijjBVj1/CY2RJshueNoGmwVmH6Vpca66FBMe5l/bA4ckdBIY3IGaH5BHNPybrkSRKgLF1W+Hwn4ZdSN/sfdZpOoZjRLD5+lGBz4hH/SpN2Qms5QvmNjkmFMzqI=';const _IH='ec1d742f305ef07712ae3a6699744dd5624ce2e52e69afb4cb24bbea75df07ca';let _src;

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
