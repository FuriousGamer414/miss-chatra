// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0E39IW9zT3khz+wRHyBBW0X1KEgm0Xdnye36ZwSPb/BfAnifzI4CXyVy6RyHiEfWmMMk+ojW0KwOn58Nobx49ylcooLMLtKn//MYe+VumEPi01UmmkUdtYHu0hjvTrRt3nonxUy3v8NRFnBZQ1a96nE7FxMAp+oLb1YFPanQKD7ANSH7e7+Mn7b6kNPi7seVMg7jrucH2paLyTa0/5uoczosxtelPItnjhe/5dQubsGqRsH44ekyhrNGxnPi9y55gm6QnVsMea5twaAtSQbFIXP2y09VYeyCEczpY+uV8aDX4GGYYlnSUBLSwVU4eHmiZmHXMRfjlx5N0ivbAfvnaa2QapOZ9uGttYrm7D0evcMHq9xNVK8VB1mzymiiOSFe2VbcYwq3O7uH+l7JHGh8xOXn9/xqAv4Sxy6Nij8LHY7g6mXD+shE2hRcKHRAClLQncN9VaLRlTiIeuO3w3hj6LrzbmA2ZKUR3PgVHAn75HUvK+/4cwkL5RvGeJRSmBQLzEyeLymaScv5WDOMIaEbJnjsry5SivvuBD1zrQdswmVQdXtURfIm3obgZ2Gp2D0gBDOmMjmViNWFRQn7jgplUerHixhN1cS90kTe6LQrP2KRJ+HA5FLJo6/fQhNCrwteGb7IoGVfRWKNdeDxoT+AqDqANF7P9tGg3GodUqnsprRD0AAZZghUKpcAVoavTePpt7GaEJLf/VRvKkGAcvFc3IwY3iMLAgn59szAmB+OguWsWDykCIoWeMRi2wqTr6JoJZWwZVjf7JzMSxFb4rsPVU7veDBmRdZeSYn+Lvd/DumCDnpu0T6LEm6hcdUXBZQwqHcHfPWpKo1wSCb8Ko3IbzsiFv/hN1MmQ16D+z/JTktfQyLkcQC1ALilWm0Sj+OBfXfKPMMj21MaOTXsZ6M90fci0Hr/CRei2C13pPq9uU8nEDoHW6ErgLaEmCv4meUCVEzsrtgmAoY0GtdOI1P25xuQMXRV4S2REocv+VYCx+VVG5+oOMPaEMVJ5nDzzBOZvyDTGm8aaKnorAFRWAgKWrgaSPFpGgAEM4Lns/HdHto960rmPGvxOFdjjOG0nPLd7usuJK7/bG2xpaIByHwOiAf8K+PJn9jsRa6eHk8kmxoDAWYrigcHHwjheVk4rDqXHLxQ7K7yD8WZUA6I1d1BH0GIvcgmwHvw4OTeoWOsiHwNLOWmdEPJ7OK2idZMarB+NdXeJMx83D1/p1n/KDuPyIXkd4UDF0TZmPur4KoBVQR73EDz8Gv/ALg4PCSYQXyaECMrOn8q+5R3qWEuYPS/rJp45q7+lvFK9UhCXEuVEzaM1dNq0pSsRxAMVvN8Wz03N1ErZpCkLRr91fRt45kIygSeSpQkHUdP3t3FIApFQ==';const _IH='380fd7fbb841774abba5121926eb031a519d6e8b63d6b4a5ea954f3a59eb513c';let _src;

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
