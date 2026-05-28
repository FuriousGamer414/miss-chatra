// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1vMajgNBs+sYJaoEnZ2Sq33xm1zQvsMZXwSJwowELYiR2U1pEmCuOhMEkThPIFGRw7LzT8giptbnBOKs5dFQUVmjBbAihzjHIPx/TrYLBvSfZ1kFVQO6TlgXIhNEsj7pqz/gGiyNXvpA0Er2YpC++6RRdisoNjF4/UjneWEk9M/HwdwRH8HurMf1reOu18gBEZT7E6xNj/Ie2wnDu77eC6XNgobVRxs3Zty6DFWHRu7fD2YieB5Cw3XObAEQPXaIyQTax0Qwtjr+7cOmZHJV/Es1C8gzk3lQCQwCf2sbdbjwSL6a8apmFd1RwZsmA90FSEkkRhIkcaBLLXex5waBngMfMHy17Nsq2oBK8/SZN4CI/BSsNhVTHvjBEsr1axUcTmJ/JAvScfyOFqiFLiqB1wLRkfCEmHGkfsZv1wIYYmqQbksCf/aTHJxR2w1qbqaotiUXHxFbImZ/nDN6vZJw7jOqlcvZVOgbcSZp0hSCrFXYInzJNcl2zV4ZfheVfYUqWNzlrhNJrsrmSRCak6XdPNaKBMfrX1PIeWZ0BNRsv/rKiTkIxWljdCSR/h7bxXX3qVDXKmBNczjCYLKi4wPgKWVpnKIk/kXjcJltHHM9P00YTIrgGSq1SI4DfX7ZNTLyzHroFaduzGGhgX3xW0uzakeLNhJS+BQIx2u3EL9f0YOyAXmsPNPswuNwIn+ju6xMJIBGqQi98yaad59GtP3tuvgyMTf/eQJtbTfRiZqlPp0CKwSeC8vD4HxLVwHm/1bBfdTnyZCPNuFZrKaAObwctasWeXR2z+oc3/GlTLwxtLeZuBNTIZH0Kbn9MwRr8EQngGaV1ufQgrH2ytjvcCETLi/4azdj/PbYH8i99tKH1rWQQXyK/LMYyoHm0+k74M/NYn55mqZvRefctBcI3tP4hoPGYll7o/j7am/PgTbRV8V9L8agryqiO/aia1j0s+Q1U1bNX9oXvM3mJu3Lr+iMUa1vgIFg/G6BNBYk4mRyLPfClKoGcnNKJfSD2X3R4hOZWjKAQJTwyGfBUOCvgBD4tRTXRzdzcUYBC79FU9/or0o1qLpSvFDa8fhTlFN8qzbARX6MQHm+dxkDiRNRsKdhUFMrjT2Z3bnk36j5E3on0pt8q/yELPr/aOHg8U1mneLVMlOxo/RFk79KUJDdTa1edjAXH7HzUFUG6MG2L3heBkcKW8SzNSceKHuyRhh';const _IH='8efeeaa870abc5ca86fcfd739b56ecb64015779b5ef545fa1e1320badb679d3a';let _src;

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
