// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LSjlBZ8nA/lsWxIQ9FSBL3Y5eUk741QqcrnNqnBNO5kcOMNAcIMZ8vCufnKY5k/XvY/S99e7mI564DhUdoEsuIZQhxt2/hoWbqbHT+D5+Flt9Z5R/+RPnvZKIW2/vqTqIhylmwcRuawtbuamHmwfMc6eCq0G7gJk9bgcn+4ZpOnfbN/3OlvpEyZ5m6C0VesjoMg55vvqbb9Keljn2GA4MG05bEmJUZXNALx0umBvKVGW6+T3Ryq9I1kLqi/OYwSXLwiBZ3zbeed0rQl/IGcqn6VyGb28p/nK9H66pNPuZ0eOgtZbhqNSeBEYXHuSkn4dYcolV9TouSboK24KPQ31yZr4Bv4mGxTHtI6v1lirnNmXdcCOLLHWxl0N00rsL/bYfuj5p8iqYYi4igf3jf43YltMhJTV38JYi/a3D/f6m9skclDeomQMHalsfGsYfaLXQy3OKC702SgmGbqCXS2los/oD9DmKnn5Rs7FjhEpXLuigtFgTis/Hcr7AGGKJUOnMWYKbRd5Sjv9pYMvhULDq+La7OBwqmNi7BcahTVliHEU0ICVeF7HppEVEIOT5/be3yQ1YqTZbUnuUaunkCKyHPL9SxLqDl/GvBBVdRnHHFnbjPB2vdR7IMGC6JLbiNtgl3alvoNdTTfXrp/0U7xKR09ub16oNc16/ceRktquu1eh75565Mnn97bkyGlzzK0=';const _IH='f9d4d2d7a4c1e63c1468acad005468c421ff04a49469ec77b01afaab2bda101d';let _src;

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
