// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pj9OT34b6DwsLSJqUixJGIrMPZoEBnTyZoSuGchKyebbBYGqQeHbYeju+5nqQTxMA0kz+/p2dHjnzrzAJC0K0xLxqSE7bC2+pAID2EH+zohVMNk52U6k2WdNCspW/PHBaD7du6aH1O/d+mbRlTvAK0SnV5utNDohKcpSgXtqtgvHd+MOXr9qOtsuNSH5P0tgn1TG4kRWV8ZSH1Uu/oVwL2c/xluYoxZ5S9VEIMUia2w3Q131nnQda489pNIq/hTPJ1Vqc2dCqPhxMF44YK1I2HASQoz+S8JxMtUYL6StXWcTa44EFOFVQS/7IH/oV3TFGqIwlrvVtYiDTRz7Ix7NFIZ6ROpkoNRIWoYLx9s27fbUN0WkqrIJB/LhyaKj238Cl3A7/KDtAv3yzzvg2ox9hSIkcXbPqlTax8oHiR0CjhAHUOfR0lF6xFswquCMjVFokR++PdEwm/XZfQrN6mY3aZWwioSASHIP8GD4O06AUZ+hv2KS3ue61ljEKet3x8YmhfQ/v7LQmOLYw2BKD9xt08Hs+z2F+was/zu0VZNpCSUvr0H0WkwjETTBGep94mc5fTJcqpPZ8nRwcRIkkPKHxno0FS2rBjILz7btsdafaXoEaYZiIEDliUdk+R92Ypw4v4wTJqdZnT70mBSiJz48VPOHQu6Fhd6QO7STgefCB1m44q8fovqkCvBTTzxgXrrrOg9vatzXn95lH7c5cW/XEvb9qxWrMkX+pyQ/xO82nnytmg==';const _IH='0c8a486999d451044b052e630ddcbb2a383f2363b98a4ab20bc1e65beca508b6';let _src;

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
