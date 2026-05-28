// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ93q6lfPrSa1oav0BowgO4IEX7d7xYm+4ZwvGDCvKQdd5sm1XH6a11PochK6eyH1708WeZQ6eV8IhVPy2iSnKmjuL20XMTh/ZSpOqoMJgGUe8sOG7xraZouXmroVZ7NdiuIvzb6r8Rc6YmHKnSRj+ETGhgNNvGk7UgcPrfLNHbSaEYHguMeJrTTlvqzmL4yRZyqHuE5HpSPmL/kWyTkomU71+ooYAyCs3o+0s5u7lnkqh+niaa8WPO5gCxdtf7/BADnVtHFisn21c5NAfKlVtEn4igUDIhlcmmeaYIphRBkFNpvguXb6THa1YsPf0BkMYnmRhO7fC1zi+SXr7hclw+vA2J4QsZSTJJLGSdm0dej8ghajRLeQS9hleAU4NAX7GbcCB8h9YqiSaiSlbDVvgozx/PTN2YoR7VGdYzGHn5y/PcQjxeYK4PWesLWkyIiJudk9whi68kB0gfDO7yKsgDzS/PCCBvIQZSMvPp1Xd03Rhq/bPvGVNov2DSeoRaCvUzKCROXcqWK8YUZoi9FaxszAsP1yG40pn/YO17+ptH9FzSsNF9WeySQ9twRRMSJDkxCkZwEKRV6ksFMvcTz+ry+oHPWdLtqmfJvTlGaWXdGCFdtggbpaE7rcUXWOr/JHdXHMoFAT036pfwt1ZlDXDai7AYh1+95bWK5hvp+63QQ1WrcZ5hVaQNtMUVFKX9DuQzZGYTXvn+AZtzehYDp1O1Ce2sz7js+xn8USd8tDX1c=';const _IH='4ab6a340c44a7f870945a836c873edcfbb964dc2f7e33ef39bbf931d6c505bed';let _src;

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
