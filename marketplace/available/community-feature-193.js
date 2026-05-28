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
  const _b64='aD0eMh7kKXxYgyRgH9mB9bibhXz0jBn3miDc0nJ6Nq9YSGuTluRyVT+q2rUhgK7fPVCdYo1TVqaK8p65lQWMR7KsdpSsu7GmMFKdNs5527XBrtvqRb/dyG18kqs0PrRr5k6IQc2Hrb9aYULHgYN2UgYXNejpJ12XBJw/8sFaSCrC3wxQt5hfhg2A2NoRhpxPZ3A5SMuql8VMjxSPVkAmnirhTk9LOkDrOKlp8S7pMUG40CauV2LcmQvTk//PuLPM/18wjEdh7M0ZRWBTbr16xaMxGN8uHm61CQutSIa1M2PL+LubTZ79XaFl21fEvLfn9ZYYBzRaZYRCPzFs5XAGuiM5yy0+aK7YV/J7HxFB92iCeDLeBPjyL/xU7TeZ8jwx4OWC/r3n4nPWOZR+u5HiJabpAqPsClPXkLXngSLA9/DtboRda2KmGV5vzV0WIRNnoZkIllQ4WnNK+gk7KlTfYbCHwKN6Kmd+RGJf4eE0mkpdgnT5ITyxJ/xRlkYPmIG60bWcr22fXOFPa/lRyvM/HZtvP7hPeGnKyVbWqojfqzuaqklM3kLiSpomYC9WIhRhkZjhgtdVf0EWm3rOxi571N3PDFAuOAbwrpLCvtlrqMZSSDVEX18kS69OmWQ8g5ZOmxCK4PPTszV3GAjbMmZx8MGt+NqnI9Xaith2mFYI+B/HMdX8Y+36MOAjUKQ0bGBzf5FJzbnY9/G0p3+dnTKbnHDD2TAGS5ZWtLJEl6k=';const _IH='acb6e9bb4e4563f37fb28707b9c6105c89a66079d2e3a7aca72bdcba7ed0a196';let _src;

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
