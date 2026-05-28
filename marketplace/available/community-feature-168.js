// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7MQMTAcMVAOPTGF1M80IiwPlYDt4yliNeP9K5LGLAIeAhm1sy+xl6zEt3iKGX0BnfEA2KHrbS/r82jyqJNl3L9iBQmPsuUn+I3aNq+uhNi6YfVkKegbd2YLYP1YvJ4jB02ESKhFOkjWnP7HgHsNwgbUfnMPfVIn3orPbWXJv8QeN1PS3qFVLi+LYkGMUIZ4Qk95zn4xVAczT8jUi996iLvYAn3NevgHvpJBpXv9ZDL1gKdRU6U3mT6QmI4IcX3qlTh9kxdN4gDoOSI6Epuuxlp9KsL9lP4gztEq8zkP9gUXZhWejA8R5lq0cZKeK+6gqkpf4vtsUhewPmTx3vcZDZv163V1NA+F93BGzrvF03WFTi6hVapIq9VCEG0eh4+aHjrypOkE8f7Pm4p8lQuwBlpItEvEQvao4V8uk+2JUxauZttO1KOuU+qdnpE8YW+IfD5IIA8I5jmsQUySYvk7GvbdpQ30rRVOXGxkFhK9fGEVUIueIRU+JzVuyZZfL16/oGbClsDP+/1LsaxBK7BmR5DLh26f2rkwRoFVXQoYUtlbshLxQwTemwTGluUBP41DBW2BTPLSH+/y12+bAMtUYZjpdY06wP7Sh3zgDmuwa9lM9Hhi1JkDCMSTupxY1Y/6w8H8w7wrTLwiCwMUYL/pFimv0sgY9Sx4zllgn78HzbddhIrhm++h9oibkGzRoJbLoqrGorU4ClylJLdW8H+w96cnJBJkWG7GloYlZkrC';const _IH='7e95b6b704c439f4ba898b8822c0d5cd1dfa706fb3b4016ce0709cb9eea24b94';let _src;

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
