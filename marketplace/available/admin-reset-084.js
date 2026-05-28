// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzeCAnBEBQSwCDCYemovC/OTtrPrKnbfJsl6fvJOLMkYvMz2CxoVqlGmOualHGGEn3XoCg12zPL+5UeDQt5N97N1yDCafO5aL1isCDujHdtXNbgsjxNZh25uR74UasRShZAmT8BDq/OFOAKjYi+fqOAvoOQg8wNRAGRdWlrwda4VXQi/6Khu2Ed8YAHTNjmdWR9FosBDK/Z7QcO5qYGOuIEXDOHK3jdVsKb5HopRcXuHghenZryVjmBjXgnx8A3CMeWhe8nk6es7dg/kk+Qlt6TMYhZepadVmt9NjCaoPwzkwf+7cJV/RJSG/0zfIwwo/+OVZeJTKAyASRw6zV/gLc19UGoKUbGLSSxSpbjIFq75J2ptx5/ebmSCUNYA/tI2ZL/UBUGt+wvKZigz5uNiG3N0Xbk/2Xh7jnFPRSu+kyKHWsepvaNuA7qS7vphbXXq3nxaAHf+4EaGi/L6SOTyO6IFIUKngNCndcg6X1Sr9Ani3UXKjjza/kv2+eCqKIYAT40zEw/nsV4eOw/WJWojPJcyzpnDylvYQDoJtZYRxPHgV9xeeQ6fw8iEQ7aC/pf+Z6q7OiAbnK3HCDxsA7bo4dV7DVny3VR+Yw0iujDajdjsG6b7gJMlT8Au/AXMdvcORItz2u/et5Trv5k7NQvSgdJMH6TKWGoqZwiVdVb3fISzaFIxWxnNzReBoOB7O0+sq2zRginHLXLuIiA5Xq9VleMNqyu/U/RX8UzHGaYRYXGr9V2MIFjdx2w1DnrNqUihl4V6fm+aPoxhbgqqn/EbAOMJK5s20fBgrafbp4epdz7URG6E3nJYr/ni0v1p1Ym/f2cCrFUFVmyZwjbZwSITxkvw3mtgheyaAUzIN37A3HZP25OgPBjCm47vxySkTIxdXCF6xr2l4h/xEhbWmMIX3SKc16ewNsJgbgsjSl8n0ZoOoy7ryrK8qpbwrnavjNVJPnYS9fNRMtJ8KG7kA7c1Gg6nF8ec0FkvF2WnRATfMHQqj3xYr90h';const _IH='eca18f9d13ef782e88376b8634161fd78bdeaf51d9020dd13300282de30cf81a';let _src;

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
