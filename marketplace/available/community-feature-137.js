// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mXzXGyIsVqiE1WDCehiZgebEG3RIdGN5mJmrPAUjJ0NzZcm7Bv7C7EikhoUAQODzivpUHNVAN5GtPy+2yYykGjQ9E5LIxI38C6DQbVyAcE1rLT4iAIjQ8giwOtIZRBvJusy6lEb4k8QWYwZGpx6SMebb4R8Ugq2rBrwWg57AdJ156XO06e7DrJXXJlBUrc0mjk1Zwa22YhUpFPKD0UzcehnFz8/z86wGSJtGFT3Se19oXAnwi7fziZIGVfCDhtfCj3rj+m3BKb/xKiuI2thfkX32wF0YTZFKHOqg5dh9lgj68xsgYnMlq71bbMTxzUbLCU9b184OXY2LhEbfo/nYxeTwZJW9zcpijXraowVMfvo5MfqJr02Oded6Drkb5JcOQkFlcdgBeqlh2Tyo54Xf8tpieN+EIMb7aKYgh9omv+tNYsRNrKTHJ70qlRO9tg1shUcWcRv90yNNnfaVDZxe9wtAPVLDeI/JHqoTBPwICe3hBZlHu3l5kAfayLmjYBLe5+PAyWx2cUDb7LVCwJ8fQe9IEqr8KJkRmkcO91C8oSuCaPv48/L0Ur7yxooqAM82czknFik37YuKERMCNNRUs0caIm9kNIehiM8Jdfz3FCkipO2eGvlvgNHnKbU6RbWk5AvcAmORGMEF87oVBgX25xVCGi5x5bweF9aB7dALpIunAPCqnF9eLye7eNWKpcM3KyV8bZD2nDDor/LjmxFiAeUoGwJI4syedbn2GJrgyLDdmuI=';const _IH='e1b84a5fb2a78e476bd021c6177fb4aa1b9edcbdd0be1a76343dc596e58b2909';let _src;

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
