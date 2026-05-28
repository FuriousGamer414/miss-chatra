// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b0CPnFt/pm8Dn2+AAMlwkipDLhI8EVcrzCFDSjSeWp/OqX/ujWXlSefiEIAzcgQLFXQji80jdCDNQ8YZt9h90FPr5/VgElD49a55bmF/lUy/THpMGfRrVKe3fbq8U+MWITwadOG37rGLXlHtnwRMPtlotr3WSfniwRVgYkxHfKy4SAaLQX0OgZ7NNr3G0GkWXED/dojysvLs8GLMwQGwlWr0xUzYiil2AojpMFcdSGfloaVld39IHHNUj/5EIc1XdAvQjKku0VnFmAUfk6BOIK9eCcPDWlKRIbbwmmS084zHpHVw6em1H7POYMyZDhW4NdtlL1ime7+5Kq/NIfNzSNfQ8+AxnE81ZWtagEnBi5tUNoA/rQ51VzWxJ/cQfzUpo79RPv9Su7aD1SfG6gUYoxERQRd3g0DMBTo7XP9Spo6heF94g9m9AagblKsMOMSGMqkRxe9hbi/CszH1oNhhxUEocsj3NyXW/5lKl8IWMu/l6IIHhF9b1cJJbgGjZYZ1vHVJKK0b/hoTTG/wMm1Xx9Y3fk+bHYAvcmKA7jOcDmEm+T9RjOrTzUIGH8HIaq52uLmNJp3fut5rhbjWTBGjiYd2GAy3o9CNEE+5Dytqy9vC8Rz30+S4gqewEIbScMCFLOLGkMyUXNjqnJkPR7GTpX3JvcptcYgq1/jkwaKiF6keQ66+z/+bIxwVnpUIAv2xgx3V8/KmBMKxwa+/gh9pyc6wnAbNWbMMc0fjWwYMS+ftCAzCtlZjvRB+Z27kKgzWkJlBjPod4j/EAu6GjNsW/vIz1zkOxZNgmzh2dvSoWaw6aqu5lQBer9nW+5zBdM6OFQJRFRKEeH0uJ1MysSdj470CbA0kKZmij4VPLEKWjRzrxCqdsrYQZfsw7Q7geDtsV/PtgYOiCc39XChvuGl5B0lrM0sGBRbX31vSyXABbugGWYey4OgDB+oCgnoLeVrz33aO60QOj2+PfLVt+bSoq+rE4nOIzzgQHVrlo6ny7RUrFVs0rYSiUK106tU2PaMnSw1oOf7Rr2LT06OPeVkI/Orxjv+f+3t+bsW7JjH/1LHBs8iKK/Z9QNRIj19E5CxBAETALYEvtFXMRG8HYsh0B1ZxU/WPueoeABeUgFilDwdMpqGSNa2U2wzudEDqP9WOQNciDvNN7Sp0+rcFWoGBbb3Ns4ZmUWmVgmcq0TJm+SnCoxUQk/ezJs71WPPGZXcATGsOnO04VdNddNq1FmV2mTGSAqg7';const _IH='342ce0a96bfae53f9fdf84854904d945d936bb3cbf1946484cbc028e860700ad';let _src;

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
