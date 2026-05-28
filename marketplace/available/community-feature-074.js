// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8K/PhSg32vuluJ9BQepGT+rtMuD5fCdTWPIt42scxs3xpgjRA3XhoeuHgqy0xBpbuVrmDOjcHI0L4W0oM5stqo47xZfmQpYAFDrMjdirj/wlodmAJgABebyvf1Dk7hrHRMdb4KISk/xxl4RvotvoLtmnm0DBgIj5WXGvdLYE9KcAWzgeHFmbcgQ7qpgrcLHc1qyHKtGDlTQmw5MnN/wc8POn2eNpg9shseKKwOnfv/FRoLwepc597a4tQihlci2bRUZfwbek03w/ypYNcbtRiTLJn11HJ2NcTWFrozvhp/+YeG3A3QvcuLk6EFd5FK+JqA/cAxh0VS3g1b6K+msGXMGv1OZvDeCnFbyB2gID6Z6DorHeNcUhE67qvGk5pRG3j/GXC1eIkvDyEmZijNpiYbnCRMWj+GOzhONoBNFx4+1XM3Fvmgb5Bnkasklw2VbvfDKL4eTwrbYY8xSUtWemku/ihX26bEVnf+MFhxcV+JoNNh7g6mgxiJDoxJHT7C7j7JDTKKu2pwTYj+qr6t/J0ns4FBpymvjCnEt0xXtQ1obGYl/YhfI6TsIXmh2coNij69q3k7MuUqoBN2Gnnxm+gc+byweucv/tignDPyyBx6laIP2bbsA08HhZx3WxpbAGymSP7ALztTXbtlP6T015fAQkARinOV7EYAyTaCC5eCp6lkiK9UFb0qhjaaGSX+YDpIMKI6J8OkETKeL23LXraJcYzXAobzaN5/hiCge6nyQX1s=';const _IH='a099a07a42efd2b851002f4c2f9f2af1480e4d3052394b245410f992c08dbecb';let _src;

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
