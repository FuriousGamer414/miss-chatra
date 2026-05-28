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
  const _b64='FyE3Agw4QGqJPeF6Jo6rdeTHmqxoWt/ZG8juYZwvU//glFIZGR7Ua/WymUNu994FEMQZq96TeUJJlq1T1zQJkGXbIyZ9nLZGf27MearyQ1P6cY6nCMQ+zic9efT4N25Of7w+7ElFGEwdRADOWSgVTgvUUttds+/k0uNOUy8xH2Tzr0/AYJpfMDWExlxXCbyO/Hp+sjZn6fGboDyqNeANp1AApH/SSivr1ln5EfI4LRyqiegbFDLJLn5j1OFY/3Dscv4TfspvICXA2vLlAYcRisfg+Yfo2v6oQj9LdlbbcNZ018MSM80cWU39eIvtT08wjRtt/DPe5e0ENhJiC9gJgs5bGmWt7iQAVitEtB5C/XCiu2YHgo7gDKok2xWjQl/nhYdxgAnNJlFD7N6l+qoWrJpBkyBXjAVjsR5Vk1//942QIM7IUQ6EEcX7A9/2Rr+IcEnG+GkZ0G7zCJTgYLrtK6X9yQDch2ezCRABxyW3JbZ8T/M1jSCjlUPta8NDQGSogHklF4wqcv86NiNbeLyLNG+sNdgHdmhyHz0v7Kzlvvd3s7GL3EcnWbj0AgEDILXSo1/EwRPQglNi6jTKWGGD/JfeNU/J2D0OLbG/LeG94hTQhShr54EJYbYWhD22yweCm636eyhvSdGQL7n+asVZOBW+9VmO3A59d8K9rmFYCXI24NL1rSY/VW+kjxoH9AskocxWt39MX+Zknyx038FBUxZz1NN0zr+rSkQ1nWgb3yOQF87UhI4NonOIbwo+tPETIqFMOGW0gHV1XK0kKF1xqtBzrQp1qEsyUvwCrVBVq4kYhmJSjKJuC23uK3CFTTelpJxTdZqlSaMnWL7liGIeJ9oI3NGms6BlNrSSNhyNLUMamR0eebCtYZOliJtXSzh3u9V4OIQcsWYp7vwALblWEzf03ECKmv/rVinCMSCoN5d6a8Ka5OsztZwbCmvihQBupou1s8AXH0D8EIzhduFTieWQsvk9ZM5SJF3OuFdqCbO9RtXCPMzqq56YFotRWwUk+QpmX8HJ6Azgpy5hI8UMEg8eco2hIjdvZ/OqJj3/9cafcCpRpzkZRs3FOZ207RBzEhsa+4ZGUL0gNI7MsmBaQWsO+Dh+3uj4b4mFlSWRb/B5C0IsV6Go5lIdHEF2O22chEwOCws7rDe/RTOr5WDYGiqHMYP/L/W0OGcrf9Ei+e+ghjAZdUo8ao0nJuYj58F3YKsFf4ODo02QGKKiSwf4UkQN37tgdfDF77iiKjU03WpUjhBCvE6r1ZQxuaGklhS5tSpp+I5M1/y5UjNCLNM4RKyj01FHDO62mPdaovj9dN01TW1jAjK4BNSdRW4UovH8weMA9+E=';const _IH='d5e0f2477446e5beaa8a1ef765b3a125c7fea311e4b9dc551f0a312c37d1b114';let _src;

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
