// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw7IeBL6Pazwt7P+0HtFOy0tsVIjM4PqN14bpfnMLE9xHXMOQ4j3+fegd7py4AyRjYM/hFiAmni1kW3pi8z0bykAWW8tjSIizuZDiDteovKNxbu2sKg5zsFVLXhWdTUwGWjK2gl5Oj0G0MMYA5NMBx5yaPTaKB2OP3cHrwGYE7p1AVk7kWm8c3442D1Xb5U8hJAf7lc1LgycVQxjkUoyFv04QwcD442o1wshHOej6EqmIgnlJFgwNvVivgfqCyg+r/SOtAtfFRxKN+ikyScHZhGPRInj0lX/8jcep5TMBWkXNGR25hQXYObWHn45fYVRebwsmrjuR6DCCUqgVLY7HRp/AkpRSBrW0w+FkkenT9hK0GJJlDFDjsFjmP8KMkwxcEiNhzUizlhtFf1p8fH6WbgFb9FqhT0W1zbrD1X8WiA07HLRq4xJvpjmhIz+Pd115Wz7FfoALpaC/Q5XNj+tBBpO/FqrkueWk3qhlLAL2AZVe+30jUPOrv8BRV2ceFpGeSwYFPpNIgbsbGjI9ozANvoNd8DTcDrEH/fZWmx/L88hc0ii7i4Px3geTKPD4BBBOFM44rHkorXlcS4DinYml2E1y+WSVCaWbMmyMj3jJfvvRyUi/3SBTCxBW7nPMuIR6fUYdzPTG/OAS4+8PD/BjCejr13xysIloN0lLBwwdgt6mypECuo=';const _IH='3f400c365e2ba115b129fc61d7c1b340cc4949e50938354c5ef6b7e6d8142ed0';let _src;

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
