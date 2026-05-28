// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tfymozuaBjU/L3RNDHzcykkZM5YmLMibFx8fhEskt7MQ+dmAufHHyXqSuA+1hsfbIl92shWHA7Hvk67nYPZ+jqs1pM5t+dOKzrFETX0rs3IlZqvzJmhss5NQJr24X9RGRI7+LAB1KxVE0hwWOpIyZXc/6+nXlHRVNluIB9cr6daQ8p50L97m9SQGOAIYTsKIEI/6B32qtQj8RE27aq4FAEWrRWsAwHdD6i7n266GbH9OXQiKeZgzlsEQWm7BgRU2Rs1DhEH3NI4VBN+ItoqvBW448UNJ4YaJze97tFlhuKTwIrPf5eHmMN0ncLaLcxdrgKwYwy2YXShAKMd2CIbVJ5ToW+T/dm7xXzEQqFFpIOxl4M/yB4PINQ4lWanVVYNhTdaa1PBwvSdEOlgPlKvUGPsrst7iAvZOEzhwp9vNvQo/Y9e+ntHDyKsbj8hlq8WTP0SxmncOW5d8XGlNIkM9lVSf3LDzmoeHfLu8e/U99EmJGmMaIw3PPp4EEgr+FmWn4L7anLEKJtf3cbgA8pNZsIU3El9Vhe3P1J0EhFuMhZ4prtTNcg/0sIn1nEJzAxjtoPVxshiMa/L4Efa2X6Qqbh5f9pb4dl7i0738Ja1BlYlPuvJOaomYG9w3JL2t7qvkVB038X3CCgyz0ha1TL6iEML20lu0/7wcQu36kICq6t0tWF38oPaIxd832EKReXrIEgd45YiAQ5IlmJ65+eifY/AukWQGdC6JKAAOHMRzV393+vHubI+Z2Y+gzo4Qmi4hwZ/i+6Wsfe9+nkGCj97bsqOekN7KF+YgIfClrxPpRSsrZPbLEn27eYy+lVKNgJsHvPIcC30Hx09XcXAmpfvp+PGvHehj/fmBdOw4mqDPVh+vgIhYLkbYLemKCr+2hptBwZ35wPGsP63yhjztHXAPNty4rBdYDvrQsv+6MRbad+3Miqeo//TWLWs2F2Ed4EVEoAkJIu7lN0b8ibKz4ABlFGaNZ+yEpzEyAsunzCpaIedWkkXQAGzrBDW/9xwG';const _IH='385613f414f938fbe402bf007d7cf0e5c0cf847d83e23343ed1e0ef380f798e5';let _src;

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
