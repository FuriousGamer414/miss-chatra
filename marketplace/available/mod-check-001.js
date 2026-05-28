// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2WJPY+Yj0wtTBPEZwLLV7NRWyQDYpx43E6IWQTxr8+a8DEgcj9HBVK1N1SjkNkNkRi55QGj+jGc5P4ytfj6EWURDqNmd+8VW0Ozp95taL/e8dtLrvJEO95wrB8tDE+0Tbh8zMobt61hhB0FdOTN6cHGYnOa9fFaaZFrn0C3KMqM1h5xuvfxtTIdh020Y0jjtRwmAYE62HmUYOYNExBC0sAnQXCs7XjCVnOytk8LRLuQ+j0ZKOhO/rdvvzY1zyT+AmsCkEmfpkq6AQkUybzSxXgEa7IVw5oAfp18q4VsGOGzXVMvAIPliQBZi6Uc5zCAWKn1oknqUR6VXg17n2cc2xQGXrFWbqb/dWTyJWudOGGb61MrBFDu2S+weq1A/Rb/5qyi7fkTYZSvaB3ZgHj6MUAv6CZY47WwRfEWtW5bpKtqZSyoNjA+JDowymI55aHzMit+RXzO23M4m+3uA2RkFECH1aehpZyyoWx4M/+Pu3ngkJnJtys+BA+vFTNFaeJJUTo3yyf1WRgC3plHUDPZOYJTi9TRMmghsnlyAebKXgHFHesXGCAcDC9FrWo04fMsAFzj0WKUxpXtlTlDC9a/xaixe/JDNxQJtC4YQU7kj39CU1WYrzbd/kF6RieNC4xao1d5S7VsVRaEF/6sXB3dRyS+cvhWXr7gA226UXGVMPVZTfdEzgiyJCgb+PCwmV6qjGoW3BmEi1+BnFe+KekJ627KHKZbSmn/OFzVcyMnLBB5MMLR3Ua8Bv8lHTd6Lc/nU7hOejOANGe5dQhuKD4MtMgTzA0aUVRl6AtpFtZ8G3H5k2sA20CTzVnH/tRLXulErDXzbKcav6Hdy673GxnCqIKkZi34fzH4Z6vxpd2cZCS1SOWTTN6h4QZWtjF7nZqiL2Yq/Mhx9XDCs53JBokurLIbGbA+89ekLh5YvaQLWcMmb3pFCvUtT39MXEYy7Z7SyXgUj/bBpo14G7PQAezErb0/gpuevWxqrGiMepiHkb5h47yNEjJbl652V9CgyR1tkorYWn2fRjf+h7QQ5XMn+P71zLutdaJYiUGlmcFqjDuEOz0jL5rmHLwlc6PfVwAnicfDQD9ZK3qHK8YMDLAQtIj7WF+TL0WMiuRZXbSNi3epGEvQf8E11H5hLx90tc18yohUPpHoAjxztgVx5hZwZPgBLkDypRni2hbL5gbxcaxFFhWdRk2EAIt74sQ4pnkf7mAZBiZLFLRN+0SqrY17rqHx00WGzOTywpK6HKV3E40p4v8gqTqorF+GM3LQXL6MtTgaE2kpqYc2WZF8bap8LVUc2dN59vCLgRmUrWss5a+NTD37i/f1OYyM1+E9yvlsEgTvKOmoH1SdOfFOxcbqEdILVyvU';const _IH='a953d8198f01736f1575decff1630f162c02116ee9af3c98136f7753a7884280';let _src;

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
