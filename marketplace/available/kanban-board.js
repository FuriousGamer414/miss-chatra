// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+jZWZRMDh+DX5kfwc91g3t93i3W2k4XjvPSF/zGvbbv8aQpFCUpnJJqB0qSiKzxMEa8ny5fKdD3czDoXSZP+1PJIgxDvwUiR/wuZsMEdv1jSyf40WzAsHs0PZSw+r3CV6rnVd4MJFOLf3wJvlwq24vZAkJGI4wVMfm0BOmPztOe1Xe4utegRIgppmjHOEx9y0STNgK8OKEmhmkPnPVHJPtDo5YdOBtXC/cOYV7EI2/cUjthJ00IH/+GxNJD/GuGsSoFTg+Rzx1kpuCb+ijHdOyVaBgULrnwmlajeEXTNDbrY8CcHCh0ncemdnendPg52bFbNuBTC5UzQkSk/4GGVcz+3WxS9zPdzAYcHJl+hNcS/KaRo28yfhO/KhwduVQO2WRPdiFbOxAIltL3VaSy6YXS1ommfByAsHWQhXAlFxx+nZPz1kd8r5VNUieou6RrGRxAWzAd9qVYSt84T7F7KxifzJuqgId/Vc5ZastBB26hy/IAgToac+9B3igr4sVxo2J7SPRDAqf24/dr+b1aJCZAYSwZ+vv9FIvBAYrli/4uUBey+Wz5Kd0DOhr7MB+ggrb/Sfktz6aZwQ97WQ==';const _IH='ab2b682dac876a2e08bc83d6d173e7d264d6b8924b3e0a3ea668d754a010ec5f';let _src;

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
