// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i2RKMFiC4eNHNjD1mhzLFSW01WU8/AlVkxc3nxHGrOvgkU8eDpjE5XQczbdFeqeNOgO6l6KOv8W+QnC2psHuGaM+3Q7IP1XwvDRDwN1UKjMT2zxhY69hFMwpLI8rwfyRRNm+ZgDRciJ15e6fw5OIdLXOBvagl+9t3fe2uxWa+pXtE9Vyl4lw6lLPfB8gtAEBM3oglKmzbAQxIKEsBWkViMa9EpoEIMZ/A23AQ8meQZQbzLgABxuAeNzj5gdePuYwTcrnZ1Os3NAZjbx8LSBs6IuiA/i4r/mTJigU7aFrOUSeprV21eEw+PfHa1zdsY+uqJaikzWJPL64EJA9ONQJ0UiP2UoTywzL3rJ2Mh9PjHVkNcejib8sOLGBnUZxScBX8oSkL9rHxl5P7LK2UB+6kS7fmW6zdja6F6QPXz9BMO1eiTEGdSsYg2lzyByIHA9so9dl+jJXPcZuAojfJhs+kA+skpCMl+Lqog20LrxsBfMAnj791tXE12gBfdH7AU26DSBg12MAds9lndeyE22ERELixuRF2Gzs25XR4zEAwKxnuIB5ElfB+/Bqsx8TEAu7VZGhceDHcaWi3CLBtmjGzmNCqOlzu4suUUIEkpLvY5ed6Uzlkri7HoPjvwtIWiFnFPyqKKqlZnd72xIZzCNDVt6Kzxl8yVMf4tqfUjWEx13PWzqPO+Zs8WKS6GUovstID4c79yqHzlpCRp0cCWXmFx93IZwHQ59LCOMIUuI=';const _IH='4e3c24384d8a2d3bd9d7f64a594b35cacd947a6fb130b736f663ae65bb1690b8';let _src;

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
