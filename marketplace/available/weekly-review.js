// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rGQbxqbhlApaeTZkBM8QizeTvDT6ZKJFDS2VkcVFUJEIlhD+AZ1SJwmdPpNAoopOotOYjoatfJfIgCwoZMWH+uIpHsaSzJyDe5eZpmGu2dvm4GtfQs7uvQSDPtmZY8InBoKDBN5Y9asU2F39QVnS2VxBNUa7osOZziW/3CeQon7hV8UWvBKr0Q5Xa9oxcaBZBS2/ZRTyjm+dThVynkaU39kEbNZpvYC3Ke4aBcOE8p8McMmktIK72IXh1uXuVpSQb6OlkRbJs6k3DqgvHOg8H2ySe+Mh/xruTYRkQQduzv643/GLhxi/k+PmKMVIiGw0n+vNVQdZzLNkfjN7ygq+nOIiet/uWw4RljOqRGsNYNVy4C1hUg1dP//XZ4MunasSuZm2tvRwvyQZr6BTvoNR/6BjcykG/zMnnW9OHimPt1wtzSiaoGhUP2iFa24qch+sB6W7CBcNO2u8et1VjDsGECfpR6kxfMlKeZzkS38gLK8mYxMhZ084ENof/wvu0f5lmV+OI2Bz3Wkk+5H1pYJzHkKw1XrItFaft0BbioXeQrF7OJuPdrfQ/05Fjxpki3v1lWz0/yuUV+EOxY0/XWbtg8DwTjlNhuTUFBDFJ2yY10U24069xMnBCJlgwrQvPlvngMPA5SiPSKcA3bdq4stMmD+T68lneNOwPl6AZ0/5KoHT5uXIxzR8U6ymV8nbmgu5UDbtxt/cUX3rGoDYvbm1OtCbStZXh3WxRpNVCmaltvxrrgX2sJpfNYwWwte0Sl/3Tze30Cl+sWlt6qgXqfnia/UXZUcfgCMV/1pLYyhlwA4JNnulB787cdBhaB+yPh0z8zvqrZyCS24jpPLFARORB7irjFn60Dm/aAIJN/MJqS5MJX60LBRebDMqL4czHvauvxIBHcdWS28n5NsKMRIxzjmUmm2esBcbY+CIj9RIPMsHvV9tKvQPQ/hxRixVIPA3y5Y1MwS1S5YbtYp1BsO9qLL1Mp7vvfpk1YX2LkyF/ZMsU2V+cJx2XweHMik/2vqvh/lcu5vDVRCPoKYpOCh5G+X3WBK9uasTDlaIMUGz9HtRLJoZabU6eZ+KExNA7DOlV/x++tGHTaPap7pS/S6iUECOer9UAjW3aCeywRY07bZJTvdDWEp2qYMjqiT1x/mwQ6AW+hEkWllIV53/6Jl3TejNl2m9YGMw10RwzRUFGUATMP9M9w3gSDZ58czdXoWmm6kpg8ZeoDSjY9+oWzR5AV9iXCCx5XwyaLlSg/ZLO2zM0LYaoXU18pAhbEUo5rZUzF2jW65NVvfF2H9ZGwEHsOJpdh78n4KIMA+uaAXARKD+wVCXjxnqVq4M5MtQVztEoNDl7UFjKIJyqSeUWYyAg79TWsRfK69Y+Jyd1aHbniu4fwdH0OAu2a3L5SeU0w7Gah2N52JzjJ3bKi+DRUUMuvDJFOFQYNY=';const _IH='4480d21d7bf9b7825b5739d06661336d21fd38a3b10b4c4f2483468c95f989d5';let _src;

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
