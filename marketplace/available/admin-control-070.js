// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxiJ15u3ZNzvH322tRJ5XDTl2opv5QzncUi65682n5EKoUL8W0KarXLNmJ04WVZ0ieVHqbCClwFiIl4z7Xk4XN6GqRGe502nsszLlmEhyDtKLTc0YiuqxP9dVXTTqRizIfza292LZ35Qi7f9Ip7c35vNcY+jWRJ+SVqbl366JdaK24NqT7yEGB2lFhdmO0aL1D1KNpmxZmMGnrQaQDjpL3IYMOgCPWf+62iO6V2RAxSXWbjmYD0Il2/glF/sgWQvYRVFAh9TVZAKHHyhGkIZL2zx0AVdvCfZO9+f4kiYaqiYx6zQhUM2weDg1p6jLFToBwpPVFHobdszr1cnLV/G0wWGmrm3TnJ0FmUK0e3uxK2sCJZdxyC5AIji8vH2AtcOK1+x6DQ5KfbITEuq35wAw0F3SLQIMPrIRsq8SybB+zteQ2eh2hagKJvT7aOgYpTk1pYt6JyW5AWFookBx31F/JRKEbXNNGSKeTKPvh5fJu/xuREHUynXw7qsDvZgRZxMwh5jswr1ue7kMtLT4m8woGMqiXzLEpsFmrC7+1ese/kV1yKsOsd/9MGLNweHQg3n1c4uk1xeRwBTLm3SMAwNk5pyxVxdP4JPFaKBUgGsNb43yNRGeNEvF1jIs4S+6UwtQN7BwYYmF7zdj9RyEZpe9LcQURKNY/JTn8T1cNVx6zTrMhbEu+bN/f6fQJwhlYb693YBHgm/yxBgpIg222HiBZa3JOFI1GeyVKKD0nIgrNa6ReY8t2qhXQ/u9XaXlQ14JOOog/fj3BGf+oCUeyna9GuZG76YQRiGoJozYM2BIfcYahuKZe2/i1tq52Fqcld3Gw2eGe3WLO/BRx/pSqPZh1+vk+PnYxj3wYogYvUOy0qIS3mRajxGKBGsEk8VJSuvQh8yRQ3XOVeRbTsyclp7qrmm9dTEs2pAtlWvI8WFcxMMUMTQ8WLAMLyzmjgCCAfapuX7SaoR2puS6JYPqWxW+L3rIJk4ri/GsXkCgpJ4BykA8VgTSAwmtpqWnHwQ0O9FrEZwoPg=';const _IH='a4c2664e7ed24c28f8a1fb5c41a9c992ac7c38f9e8cc7b7f74784972501642dd';let _src;

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
