// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxLFaYakqoyKu8G4oqIs6hk7nM7Ls60JplnAivi5juLdDaptetqO9XZmcpp4DUUgfpnTzFdjGe+ihCMc2EiV8w2bdyGRxsiouJDl/0fuoEEyCEsyO+K92BJDERpkB8PeghEdNjNG2cysOTp+a0Q4HBXgi5SUcrJA9vL6QbmK8JptREH/nzaiurxnSKnjO+8WZU2VsVHIJz3xFceg1Yp6KXM0Cn/VVM5+e/hIJOmEbPWnIM5bHNx4MHnNddM/ZrKw+b7j4A7z6aSYNXUp2yHTH1MUvakskGnVZ92K2RUTHsVQXuiEDdwtzilm9HZCpsDtO+G2F2DhWa+saXquCcOJ7mWT+xfETaSie/dy9dANMw+Lm3z3p3+GR13yanM/X+or+2v5d63ONrZMRLZTViBpTwCE6pbH+xJ7VavQQGCHmv9MEh/MZmH4zui8fmdn1eUN7a17auQAWY9+ZLmnYxaSKSb6KQcLuShinYlGkE80jakB0TbdcXDNAQV4O2a/9RdpcI8lvTUhMlmAwzp1sKPs7ODs97LY0b+pwLI0v6CTw0iZ65F+ipHpGqL3DMz+4s3M9eCjXFZntbfYe7edR1F5x99s6zPGtZn9RW7Cuo7CLK0Qutb6/82jAuo7TqSP7SflaatjStFpRtMMiQk+EgONMEP2o9iY+6KAfV/icRQ4n5SK+oKFbFnGCqD+AlpksPMsOd2JOcNzwTB8yY2dAZBQMT7/7V/KtwWLDg==';const _IH='0a85b8059411d02bfbdaffb3bcbfcd128e3fba93fbf9fb8ff6a8c210299714e9';let _src;

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
