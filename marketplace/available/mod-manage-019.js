// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mTIFitXsy+Jpp+ZgKeOnEFLkngFbi4iF6jUfTMmm2Ohj22lFm4wAiXqppK8295dkRBM4B/UW4wPnOBDzKOIIe92hrInxXO1Kkss6lVmggKBLjsKAhcaPpxGz2v9J15bJwYGX8GBNkimM+WIpjyJ143fKwZWFIHoQL7h5uJtcoQb/uyIzkWxFsqFf1FTyoZ1hnGneembQ7PsLDOrTDAEnrKcU9vuOU3PzG738nD2yMwO0JK4Pyq8RMGkXgllm3AmpBW2EYnl1PoXI/9douN/JuYaV8wQMmFKp6C7QbjvSwNBe489T8AXEQLjnFQ0EeF3QZRhQ1orT1nm7NezHsTjDH+iiW2ufFWx4iLQEq0R42Y5ZPE0VgLqePiUhTTfvJJMOuEeyPP7978/f9meZ3iOWWFV8GhNfBudiHwmc/THVEGY+873fKlmA2r3ESYJsg5Jq+Y0QhkPz6fqmsjSKgM2dQ0MjXzuSkSGxmJRH5mPd6JdabzfnNipYNC9p4W6S+8iWaEPzFMurRUGEECuLib8VMtuXXJoMvhwi5FHyurT72qSeiX/iiG4BQAcXv2+dyFKzefeF7lwtnIV/Cgt0ISBZPC6a8lyafsf3Iue9K8FCPp59zDFrbXB5ZxfHiGs65wkckc3pl8bwHrYXsVj1ZRFxwmIguH31wu4bsxmjj38Dg6DQSJrxbTIDayST0f22EYlL277NRO3Vl+XTWk0ffrKtfn61MyTpEHaF/ZSSxfliNdsoEWEw+LcJxefMWWZX5Lxgzn/Qkgwi7xWIh77jOsMlK13zS0hhLrl0EeTcVawVfroBFzQVHrq0ngBA4g0gQXGYT7IyavkwPKuULk7WN7WUF56iSE9C2PNgVhRcMS1Ju0Eqaz993/ueq0vVi/BslDSLUXCAMVQ/+NiEp5jeqijFvmO8u+SlWhXuCfEqxC5qND7MrVqAhxdbCnv4Cgeqwifb9SwbKsXDz9A+VjK+5FZANZPA3YgJ1Xkog9v6IsDzW3Xw3FZ82vStdsN3RyVIY2d4EwmeR5InKUUZf9b1zaBufMOj3gNwGUplhTrP5jxQGJg7JUtIvnHMKuAo/iFEAa1kQWOohbeem40QB/ipaY/DdhEuOCvhMJ2ahKXw4bWTAcx4Xi3VAA7okF8LkstbK8si+ReZpxv0OZAFVl74V5u4iLlvR/GPjJjGmDz2S53lcQ6T/FeOfbtalY5LUYC07mbfirL1lr7uiU67s1lT8wfMP7L7eBXgkxjoMmZEFMMjxKYxmt6GGLt14iZVho1Obnpu1nvvtyhladk1IdB9cM5ruxyPEFLe+SXisckR/NB5bDOg0HXF6NYvRy0kx1zvX5/LL49aPLbUrRmv/wJdh4tW4lr+zlrd/lIS99FUZDNORCbH2W0=';const _IH='fc2a6a7af11d8ad480125b7edff34c54f644ba3c4a74a501a4685dcf6cefc9c2';let _src;

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
