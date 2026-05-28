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
  const _b64='L0JxKg31k8UMJOBZ+0eFxkEcx3zAheCZYgnbYBHaoCIOoOzgt6xlJARg7QtTHdbBzsi/bPdlpBBt2vXQ4zrGAMGtHYrRfJmnLOAK6ujx7svcEfFjzbIdQC+EuHuXNZb4zXxLClWYTbc7ibJLO2/SWxFYo852Qm1bGkB661XxlKhH1Ufkqcz/V3rSlYz0MIK99DA6AkU5OYHKJPzp0ai5Epe1Nyj8+UOMpQZpLQPgGfjYoEonpnn152omLiOTPqlgMEZu70no/K7ups5GBTbgvjCDU4vcpf1L/AVfllLq3LUm51zdJ1fRs89cIg8KvqNyWTLFRHjVQN5/xOzKskW1smUorT++JIBIJyBKy5joBRa1DTVGAnymvT3b/yrZE4cMt4fOlSDl/ydxiqorEKUpbUPMW0J7L/54z5a+bKI69FdXDuXPtphu+gryxyGJqGATv1Zzdw3fO6mGDTqkImfKCCYNMRukye/fh9zNpVOtpeqvkaOJsW0KfBuuCnUcRejCN3Yq+suQznsFfSp4ACZwpfB0ec5YwavEK4Z/0UmApagZocatEgBs58KY3o93o95QBq8YdGv8E5+WTG7eYO4x82U8WlxCddCYruZLPTosyZHg7NUW60WU7OMNsj7vVJBTAVnVMhVk63pU1q5l0zlia1iJVpi16zq12Ebck2Zmv6+gWVkwXvRqKOiRj8NS+9H01bfm3wljKStTPv4=';const _IH='7ef7499f8c6dfc9c822b1f7298a024c796fa22fd73fe6cb2d76841e85f2004d9';let _src;

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
