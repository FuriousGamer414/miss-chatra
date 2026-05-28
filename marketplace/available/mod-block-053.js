// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4/FhcDYVkq00e4/ocF1TYvBZJaZNMF5J5UB9809V5ZAia6IBolIJTYDTCSVqBhKQtUhTXUEg0q2A3jC+1N09wdjtm9RBr+bM+GJeHN37hAxxjzaKZpQOLyuF73Zvl0inoN6bAmxUOh5XU6v9s9hlNs3JFVJsAOCxSMg1Qah126fiCB0QK8i4pamANTaJbcUCnsxNuy1s1GacuRoIbmPP9J9cpOfyNsUFvJD7o2UWL09JA/joPlwBnHdRDUQ0zuK9hXWBmyliR6+7Ho+5QwLZkHqNW+AgXSAZD02hUZIhMOb6KdWaFYvEuJmeKMg1n+MuMC+Ln0GpcZsqC5DkM4cjXzrXmm9sQKSS/cqfPDIqRoN4P7VQYApsJ/fT64BGAHWvwfILitFzTikpPGKrUbd9UqQ+YuIsVpqUpnCCGpuynqgY7sUgvXl/B4ds+ePRRR5AVA/Obdvdp8CNroPYE0I++YAl++JJjfnRiwdpnFWlJi1rDZXdVE7BU5Fl2g7hzWBrOQv53ZOj3JyeYNG4bxTbJba9QGGv2uHa65u6CLMqcrvDKogriRkbk7nmj9a84RXQlDGK3u9kkYm3e09zVJ4i2v5Vily0pIcOntNX+gwAWbf/+wmpCMvZe96yUzPADfgiM30+63RwGoprl8xn1IgoIA0DQxRjmlsOl3NtoVOg5gyGSZRMWpNhTB3jKBzK3WeECgy3isxxaJOurvKU7XkOBXy8i6InB39TSQkzOi5PAT8NxySC5CS/BcTDfYYKx3MIhVAJxkMdj92SUDDUZV9/J70fYQ6b7dRoz6tqA34XVRRbF1tjTSCMTmPYp8saFdSWk3nrKlHAHyizzEvsvOqxXmCMy2mJF+iavvhuyu+lg9HUW/A0uq6nx2cT/3HQ1CNkpM4TO/gRzr+CUn905rbhwU4/J58KFuYKTCHCIBVOoTADTQzmbq2tvkpfUIzdsFCzDZw4aiWkuEuS6cSNDvLKoRx7B5zy6RfBWEbGJsrpm7xFYeY8oR7hD85ZOuv/lsjOdTjx40KscXeF6MMyi1PF5CzdcOJbtI7jpSe7n2PaGDcvpu2fXiochIPvn+fGEvBAXeB8Mb5fzJG/VROrcRefW7doOMWrcEXpHx8Cc5xtWq3LaGCLpYW+v6UvNTk5kVL1044XACYI+6yEKKjgjZ+NZuu6pmoSXCFlgJCdxLN9KlTntlcNVKt1Df3XVl4taR/I8siohoFEOVZNFWzsALpf+NP6ccSKSjoAql6OdNIcUG79RvI8R454OC8FSUV+hyGL3V5zFUAU4Tcvp+x40IOULEIC7I17EYAguXCgqBcp6nA8DF5meTXRlfhO32MzVCRmXVh6+vl4jVDHT1t8cwD8SvIr/0wjZMRwgA==';const _IH='8269979bcfabba32250e755a98060977bbe230775ec89f373724db42ad304b4d';let _src;

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
