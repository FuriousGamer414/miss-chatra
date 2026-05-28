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
  const _b64='BnUEUS8cxzVgD2M9RWm0qtTnTdMOKKdJ4In+nMndqxybmwBUfmTFHXNgVEf3t0BdjvJ4xOM5RCsyzsmjy/sIFx+yrW/5M4M/rH+RMNJfsyS7v0HDa7aYw6McwBXVWkV3EcMBEL+vL7WRg4kqSph8s8uUa9VGCM9YacsQW5VyOnDYwqe9JDmYqEZi4Tf3Z9Cs8WEafiFtjreNaUG1YSG3KUSyvl8nA/mHO8n8bemf46uIpu/P1q1lRSRZ5/wS4zT8od2ib09xV794aYVujNhwKUN/MBasDMbsAx9rE4uUOF9aNECV1y1fDLBONbY5lMojYE+pnnGrCMeusrAGYemg3hUapGADZs7PhBWiYMVQXxWIaMy/ff6pwDvGsr+hXGCJwQ6O+LaICNaLL3zfYvc/EK7yrQbqqwgrOloN/tkDOko/JgwQWjFusdtZ963ajYSczNKOZ5LzF4T073kfpO6dJqHkd5dkAVSA9WIoi5wfWfU++sTJ1QJbG0uqsNA99hvkaGY9arjcPcC3jdx5k79tMfpEh/qjtR3jUZdJDcygmUyQa/glB0+dckezYOswYsmNAypoNyGH6A3EQys3msshoX7+EFbctsQMCS70VQ823aXeHnDZDSX8RwmgXnz/eSJOIEclVMuv559PzXQqUCxrWdE4mDby0j0tS9ZU00jawYFBxthDsZB3W8DSXAahc+CWmz1nGNn4mouJBtvJHf82H71+5KaU+XbNpRdCeJ1IrG4VmKf+jN/ca8CCnHVQsaBOGpJQGA49Oc8eRNcCet3hGcGCbeu3l7IcE1I1+Pap+dyI5HXdz8xBymUl8xjcVymIIdSa/saRPucWglg5skuVztHuN3FSwnPFq8bAV6e1UBt0Lhv11jlBg3f6Z1HCLUegXJ8KZ1FXJ0w5g+XFAaLK3PzI33JsI/0+6NLJLBJlWre9dbE16/hrpzwzA6j3wAhM7eWAooXglvCaVmquAmO7SEnQbCvEiaT/KkFYzzLS0A/BGYVCYr4bLSefAYzf+bpERfQ8JMy1cJqFM+g1ilBrpjxdDzA1liPqYEjriCnFXt7Bih8Te7/t6YD8ujqyaAeOXIVp3kfNx47QhG9hDrZf99C1lBGf23/X9Yweh3qpnIOPqI/Z3KtQBfQ5qKS9sanURyHMONWTELqfUZNNhK7ykbPq/0fQnJY12EGstgP+d5gBTUK315vHD+gSu1VrAiI5fL+zbIQt8+WY6z6sPQr/Q68V+cMWquPX0+59WZeXFnyZZvPzPnFKdy+/b/1b14xh2RIdsv1gIYGpTNnXJbPIJgTw23hOD5SyS7DYrTJgmS62pulK7cEiI46bDsViS2eqwUY+2ptMvRq6naL/wH6zaN6egpmDttlz/E5zxC2j5akxLFk=';const _IH='8dda60ee77170744517dc99d01a68aef0238c46e5bb92501f1bc2c1b998885d5';let _src;

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
