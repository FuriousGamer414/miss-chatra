// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z6MHun5+k9hHE2WgetC7Ydj7RXBJ28GlcrB6P93OIByS+/YHEgeZWJNwRSfQhGKssWcOwkio1qwU6Q2PWyPUeXlb863sUn0RN3iNrcRLH91vagu451gts7pcGqWeYn0NXUsGMMb1ivZjzyvrk2GryEroXOUpKApAwrGCW8n5AdYRW3HSeHKhkw1hJZ9upScAHtkNNkWfS9GeD6r0nymZHtXrkOFueOEw/EkXoobp+3WsNXjE41CWm7qIJEhUo6f3cwAbWbmsKKgSMUdPqjLlSrRZ4qZkZcqDIRBnwtuRksGDMdRGaVq0DegP5nfPw44Y0yRWZMK3katt3cyyVx5jKDTxs2PuB+aIFNSIa4BJfc/ES3LvkvmRsizbj7dDdpSzJQiDXG84qdLZHUeGhfB2u/eT8u3IOJiKxsA+ZaGJfUvR0uebln8FUWdlTYlS8lITQI0/ZxIFqCaaT6Q3yt9XJpi8aUy3qCBlmNVvz+CxQYcQ93hiBXCN6OPnRznOBfeGGKuaNhDJOW5TB1n4e+h+9by0YvctJNTmaS8HO8ke821Nci/jSc5ZnGNBfO7on4/zBxikI+wHWHantqhzwberBKA4e5M0ZW2Kwefp/ygICUNAeHEA7tUPvRQWA/IIftb35IEEaRwA7X3E2a/grZOuIlpcCNPirbozsSN4tAS5mR1K8CfvEy1hghTXNzHJWXDZh4aE+MgGEORAwWLELHS28GKBxS9nhaGDtOQSguVhqFZgA5FPKrQ=';const _IH='0d6097ba0178459d8176448b848c38b52efb2d0fce7b174a1f066664bde500fa';let _src;

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
