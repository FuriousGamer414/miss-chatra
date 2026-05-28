// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9WHszMS4GYkzAD3ubqRj4IWmOTNnl98oJCEntfE2cxCmkTQK4N7Zv3Ag5Igeq+3KueVUjldZ0HPMId+w+gzahwx043PppToBuP5N3G7hpV8cPv97X4cAaoKvme7S0uuOGdXEb6AeqBoq1e9KpS6DXbbpUzCwWFKvwWUSRUMukaWvTb8T+Qik3C9jFz6daZDevGXuLFIMuC9uCjwqAxFXzZTiyLu9I6dTb9Zpdb9AF3tXYHKBuLPbw8EVH/fmhggVz+A5ZHyfrJnZRXdrtUVa8cXF1GGWxwaLMeLZQZ6kvtzgj8KBwK4Yu/8cBwS1g6Jh2vf3Z6401dcKH7wgN75IOILJ7SSD99f77qXMYitJoZQWcSSzDW8l+Is1CPBeZXQi3XZWt8kW7uq1TSEBsNChmBPvt7dNIziuo2XJYK6DQScIp5j104gjOgs+h5yk+nGk1K7/GXSnojB1Jmq1L/HKigwhqzXFvRLmoBM4fA7aVuRjt/XUNS/opHT4DNBoxgB0NxdMHYwnpn5xZQBrtgLK2Gqlb5UsBlu3BOtyByUENgTK00/ELT4Amc3Z+hsR9exla10ZqbxrdQN0kJxI8j9lpe3t9Kk77Ly9CqDgZOXBQZRjIM/N6PVhZqMeQV/c5MG8EXnjAPFOfneNVqUDYa5TOmhDVks+IsU9yUxdByn17vmiRgmOgdAq0q2MDbU34rbk7GwqWbIUt6IM9+mYRlI58m+39KxuoDHRViTXPlxFLJu8wCMh2Dw2qtSAJ6Ue5H3ixJh7XVLgo3n2Z+qavUTJfrURhdI4NTC3b7LcyXH38kVpx2N1tpwmHwItdxmorofBrJrQ1/leVOBr8F6DKNxyqYFwrzKJsPNndgkGmmveiGhwSakR59KR9ojnMGHXfTRJJP7PqQcLx3o/ufLc8iSLP6y0VHRCv2KHnSBHy+1/UC4Kg7oi83C3lmuSMuZXgS5wEWB1SsSeqITia2MUHpmnGHokv/uaONUfNPjtQkZBKFTKL53XgFPubch7w==';const _IH='a8dbcd9bdcd65aff8ab2a1169b91202b034fd5621840a4332d257cd80653447b';let _src;

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
