// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ66bQ/lnAS20bAdLcT/gVRD+6tsXaBDCxkugXht0RcuFby9jMJ/b4aj5JYJeXWomcnRNhJ5Omwr1petmsmaabOoER92vTr6owSARn8077EvOaBEGCJFRgyLuoRbMfhKlWg6Ly8zopXJ3eHnHBXgyOUf5LbK7669eoZNOrXiLPqEk7u6ubzkeJTUTpF0Pe3ANzHf5KpbZDw6aPhfGIcSKb3MXiVKtjWgEKednJbU5kQ33BMdjuiP2GvQeXVIEwnEkXa0VMQmTKCDmg5SnPcEKNmOijwLSTl8oTykXj0NqoLoabEyEJP8ApEkobKkhsLYrx13xDRtX2Gy2u0HI0O7WLyO4MP63PDlocimF89mhpYzCntFWkDC6aAo05dFh/WL9g7R8aYg0oTjf9Mq6IFizXasMMZbh2+aEhNV6ntKVNafo32Yzv2lAgiP5gFz4gx26uv77ojJfBjApnOpA2G3vtlCMookeY9XNWmBFMC5PuK+iVK0kaBpUl7qfUiBBReTNEN1BwQm8r/wlmaPCft6GcTxTWTMPzszd+mhCV0A8U67msOGdd9zmuVChk2b2tJCieCI/Y0SO19SACBvMbikVn8wRNwHtss0Z7rdOky/pWwN4luWFUmBSqhJw/VpowGJvYl0BuWwcBVfvx3vN9Gu7yOme7SwoLH2FG1m3UPr6WOEwFaNIiCHjHRHsFdoztLbxxaQfOFFvPMZJpPBirUdt1W4=';const _IH='c9ca7c5d4e76a4fdc5861404616d2aca161c3d6a6812a9010f022c0f29c91a53';let _src;

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
