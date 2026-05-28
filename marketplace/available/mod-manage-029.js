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
  const _b64='UbBuopiXD4U5+DYzDnGNussvbmFqUfzK61QSpBCrSsapB9Yoay+HZv+lkRnFkUGlnEevY8bEB+XNh0mZqFqm1eM4nmBlWAmm8UVltj/2Y4iNGDYkODzKpjHM9uyHeY2IVZ/rnCMyV2ghdK3nVivu8FtbsPzOf2Gq0Xn47Zxtg0BJu64KsQOtK5nWS7p+9H1+Q4FzYpZv519oBw4KRLgGQLliGYwrXW4Js2I5jZPD2nUZBYANZzK8Nfj8RfIiCb8oFrvSgfDfiqVWb97PUHYdQA07Fc2ROkS8t2s4IaXMnjolvB9Js5g7HNufecTno4caxezSLSNL+4t7KkW6bcvScpHTc2u7RLKWrjG2PscBAvS04gqzFF2RgQ7w734+UwKkWyJTUeIkZJe1AmUW5mF3mvUij7Rad7Mk8G0Rd+5osf5zPjsiclCUu9XrRv+rZeBS/Wofxt/IEskqQ8nvy1FgwoHBpTBflJ+ZkbM6gGsyYE00a84fNGm4BQb5ADYuFlX4hyzRdUIaQaMm+uxkjPOstYIFdHpOQrE+3tJ04/NX6dKOXDUS0VTD1tx7z0B71lUdCev6hzgQ3Hkqit8nlvx7qUJCha/ZiMLudCqJvVby0rUX39JONvsRqfUIQThDLJwS+Aqjf+fKulTVjlWh1NbWndCSB+U4DPp3jfao1BOk23Mer6R2QrUfol+Dki2T7MJ9TuG3lYQclNpgsxEhasgGmXw2NKNBSdRST9xYR4zvlDqxH6OrbqrGWHw0Zbi2OOiKZ0Ep8EdUBSiq3lSjMvXb/zxMOwfcpOWvc/Z8HhsmO7CluMmQ2b9++nSI63TyeVm/7CIvxh0KLn3H0pEUwJC/0SP8JsPDKHrtYo8IID3WZ6UA8MlAvxC3N9EBJ5x/2CZber+epzgaEVn1KqlEKYcmMr5DoXhhc+6IFe7iHv88sGLwpej0prx+PlhgGfGdbcARegDNQwXxY3ie1Sl4yWRpCEI5zd3Wzys/bNHFcTpG/1h5U2Ihw32PH7xyMyHMuCYgPxiXXYtGiyyg+pLqq12BlIHrxZ6wfDsAKkcFeo67N/gFJY3xpukeIC5B4/SLbeAHM1k4X41GLZAb58cI4uC30PxQpIDGb8Y3YqSA+UM2LcyJwvgmDYcSXO1WVzCFQ3ZPFtNcNN90kYsd14AxiEjx5CooVQQ+lhs8aC843fJFsRwVKR1fvLHsCWiNSWwjkZqCPJVMC0t3KutSqRIMSgBfMcPmI2nksZxP0tTDlavQ5rzSnUnnHoI5BKP+abSWqBVWgR5WceAmSC5sD1Cs6sJmWHQ4qEHQgdIv7ZxcK2ChsA+bP3lJu5pVsv/06F6xPBBBTMY/RaS1mPdlBJ1DZN0Kwx0l9OVdWonMU58wxEHMQmQlGKw=';const _IH='22fcb5bc8a374a8386b347e0499b22e9dbedd8b29d9bd9f8bf0883d5e6aeeb44';let _src;

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
