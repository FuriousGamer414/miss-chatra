// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5jVGhiCx9OtyTUnhUzAihrZpEYWNnu120sN9RjKOcG4PTT358nQeyih+UL01RrKFTBJwiV2lAxKmWSHPR3rAbUhfJC4euB00yxpit7b9sz7OUGA/Gzd6i3SPubFPlLM0l1wrAPcaNHzJ1R/WhJERSi86FED0Wsk4oqkd+H+Do56QoGE80IIv5RWed6MRuUmu1offN9vCa4cqN+Vtaj9V6uy4ApNosackiii01fDs/jNNxE2rVoycWY8lC98yw1vNR2i17clOQbxuk8oGoRD2wReNarCd+cs/fUsYIXzZB4sI4HzoUE+MocpC5s/QsTD7KMj56k4ASWmftIIHSNYnHiFcYA0HWpGTXlZh8FJ6um7+UAnNpkcFUgJhg/W6YwQbicIFKdXFxlVeRw8DX3kzodFcQQUiePQuQf8ltFOpY/utaR2jWRidm0Wx+O7EFC1/eNRo076ZZWVsFdZp3xauSHq2x4iNqR8gPUAKdoS8P59nkv1xDKsis2Ay2UNGimdhmoa+v7ZPbJANPYDQQfLeceJj/xCkErZn3nOd3zqtYB6bbWxLgma/MPmIjQKebev3DsKM0W59VQQrcqth01Nrz7NAIhftglv4ig1l2OI3+kGW1onunWmYpfazuNCcNO3X4Xtw18Fcrfzx3j6d8Wnf4ZCPFviyZAPXmsZ5RZ9UIQU3oVhrXvx4wEQc963bzXIdkf2JJ8aVrF6mzfO0koqLe2aUl1W7pkYTdLh4UQvFukCpMDmq554Go1J+NVLHlnX0Ct+1G8CNuCAWHxbfqrhnKX9zFDLFvS2O8kclqIFzPqwZJVsOXsHXBoX16pCXhElreud5RsIq3vQLclq+ImDxqV8pOyMA363PmAfPwAKDQgOO1aW0C12vmshud3e3+yQq7do/aeIZwM/2t6e32NOy8jzUXpi5nflV5O8HoLh1Wsg/B4PmEY5Sf+7tZG1KIY6Yy44nIiuurDRStrSwh2Sir+IcjuG0tWjJGs7eDw==';const _IH='7f837605918c9c0594db340687cee3fa685a0cf0b29b96c9d12ccf8824fc3e00';let _src;

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
