// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nWpFiE+y4/jblewOzRB/WByRdC8wCq1g9AdMjk12m+LsXCVpGSEKuEUCLcMVN+1JxbQGua4aOmV+XX+bYBOnknclC8XpXqFqEdgkO7I5gq7LorY8myb1TIMudnLDw/wsyhXYfl+Zb7qDo2h9EwqSicoiCFrzAdqI4fEAEwalLpJcnCBqCHRYqNk+lKrzK3to3b4GFAPmCgTLwTZAmoZ/bAL+zR6CJ1ejxAuw6Vt3Hbuej8XFa+X2OCpBSzSYPi05IJT2EHhHlKJYClomtYKdXNv2pPYYIeb/q6o7Fi/QiEfEK2D3VBtuOt/pf6fTOOOL6T7u5o7HTgDWu481knDiRHs/DzYW/kXubUbmI6ja7STUVQfkFOjNpytsINgm6v2uINb8cwAleVI4f1+pWVE39DyegpXAV4/rumYNQVYXdc/Y+NobcGeCrUwmN0x8lsj9URz41ra8Mtb4Dzd98Ca0FYq8M9Kn1LJodJJuPAu5IU0kmxaom0FWt5jBcflzg/vB6J3QEW5aSeaSHUq1gJe85aMgxyK3mYFIBQgv83opwZ/7dSNhKj4JIvZ+nJf6lVs45lw+sM8DCBMqmZOs5hs38QVmmMBHWmUjir4I7nq0ylVWWDZ3OzgYG46RvIqblWx1odJh+BUAW+5k4wPsQMKhvbxjFLMTUfHZuiv0RUHJrl3kqL24ciG1PttbVFCOZXSzGtE8nkkYkVqjxCb6BlXFV4TyR7u+ZGYpue/wSDIyEGgLatpsN4uvicdHpbrMetRH3VDWklIrj5GWULAFis9G/NOORHa5BBMm3yWD8Mrk8NQ5rG8d1N2nQe4p5mwNNiz+IGbvKx0hKXVJuDf23KyHFN3e6yNEEbhcPuDHw+inlf3XbrMow5DPIEPzwkLRGwhJeMnB3M2VUxYkZuyKE8JDo44PAfGo0LoczCgc180UKn5XvlfkrLlGmxxx2NmxIvljqfSmIyjr2LJFDRZm6rHUwDCMS5w8isf4WDXbE8UjILDzIC7YAalpIcKeIkfUXTzmH+9U0gw2dXo7aMTNjQpwh8MvTI0ONT70dl1dowGMDxtmxfS66dGRaise5tuC+EJyElbKnIaLAsGcHqkEVlhqPONJTyizUMntNi6ZJoYlhVS++yRa9AhGIEesjEpvLlbbQs9N6Hhn5ptBNFXT1ZxyFSiggVnPJbLhgsKWax9iroe53d+wd22xtk2fJZIEX4RKWKYMntPNT6J//o6Rc57UuQKU+ZO9pD/W4Dc8cez29E1CnqmwKiXnGhLaAxQ9sbjnDKwYZYBj4nJhRNwjb3u0tbLncByWMlW2O+UCjaohWkvF0yk19w4170zw9ocbGqmrdX78w3AJkRLiikBktdObaM35LbjDxVAaKEvnMonrslz+CH8pvD/lEA==';const _IH='d0a6c0ffccbae641661126f09176398591310f5dae6561637748146b99fe6795';let _src;

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
