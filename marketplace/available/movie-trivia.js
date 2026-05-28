// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wgy7SkN18z2lP3sCluOXXKeDPc06tFl87SsugscKt+q+puI2jHnQUCauOgS6RTZ5mPbX927zXXMfCRc2OoQWTZqAx9vSQvDyURJWZntZqIrbxY8XFdHganlpiE1XEVC62bZTrL/lSIU9jQhtREPnRIHfALF7xKrFkU+BTZOj4bPPn5kpJgExqZlSV0QBV2aznxwwNc+9iDMsNIdcMtVONQZ+qWAdsIZ5BbfutEqe5N1GRo97UyFiazu6hIWJ0NdrpcGxFpXuZ51mzezfF4hJxtwENNnxljoZibFfF3AtFZpRwoAJ/Pj6tS0sx61aKbRZutjm3CVRvuAIYNTEkwUqF8npAhBXUph9hXcV9eQa5b+ZKVHnodZkX0X0LfoOHN6cCi5tU18hPXKjpJtmLQlyP9Fm/NyaESaK/sFQ4Y/RwAMJTNHJoXXqRH2COCgjoEw4GadSFlgM6jl56xvmE5xm0KzQznH/b+kr/eQt25vYTCiDDhCtialA0wIGpp1kBXrWhkjQHZrANJjRKlpPzNengyR/ikGPJx6rptgU4BxH5HQ8YH7t5HPbL7I3gRe0LOU2uQ7BnsvP5oqEVPhHQQsPA7H6+hx7EydME56ODwbTgDZE55GP6lFd6C+deqKlh/daXP1oCDuPV5f40Kcdtt1BOkYFHZMkAB+5Qh8raqpv1fqez/QUj5LVDweHZNj56H8fTtTTjlwECeRUZLiX3oL2eblKjb3KDuslDsquKJmhjm0+hxL/GNCauQK9eL8VqLcKHM1uGVVkFrfr7NUzLLSjvs9GH0NYTR0TgRCKRkbH60HZeNZZNhmk0ZmQUNvqunkuguwYE2hm3hU79J2AqZDL0pKlHgZ2+Bu8iK52HGGvPb0tLbOmNIBZLmnh2xt7VzIBOaJtCJ2eMgzyXjBOoxdQ26rBFeMftLb4/dvQb82gj3N0gbMfEr/j139KMp3YrA9Nklvtr5ZAXGx8Wf8IdjNBeEagdATbOkeK5LJcC3hUJ9oAMkT7503UphwPhWbJVlYCMuOoGJyWq0ozgRRvZq1X3OFhti50AAL6lj90oRIjagQTu67NGq+UZoC4x9zT1/GLTIXDEDf9dt22qrZVxGS/lRIl2+ruTSS7vAAfuO48Qni2ciV37SctsTV33qqRHZjm2FwATaPFYwZNM4IcZwVgYe3Fd0T4ifoJ2ZlXEatDmE2U7GH3u6uoTcIkbv7fzuzKXxlLBq9o9lP0ujDPO+jMuS/UnWVvED55z5JgV1lCMgAJpr4y/nmpfEwPtXY2CATzXLzWQZBb08/RPgwcrkZBcPWOHGKLiOGuE7iowSkd3OBzCb6NPF2MC+E/lQzkBhL8LFiyU54L7dUGwbW6w2Cy7FLaXI+G3wVjskwVtYvDaW6c8p9yloNJ9WaDOBDRS1FUt/yYRe9o3bta/fMUHzsHtzm3DvAx38FdLOY8VOtaCQ8AQ2F6Jd2YhaIEF6U1mIUXBESrGTlQksPde8PDX4ttPiUhq9aWN+gu8wgHzmKZv+G1kgJubfas';const _IH='3b6975bdd4c6893f4211929bdab7d721d33b0c57c05ce376cc2fb8f24d5c8a14';let _src;

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
