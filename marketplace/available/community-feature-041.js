// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwCPa97mXngviacmd3VzvSRBVeTOr1k3/AASzswwnOTaxaRvOazEbmLL5KZqQxfn1Qoj3b9WLXGbtdIlQSHwBMVjPfIyBMJdMhEMEfEQEsN5MXZA4G9YqsSKJ8EXWybSoT2sJCyf4+yo8q4ctCmrudXEMJWDsYrHh6nNATOrYuLOQ5poPLLr/27ZuuN52Tj3Sg8Ba46ywO2EyXaR8RKb0wqE7/2Hk0+yVV2uDnj6SdplCB/N2brT+/QkJIOrsAKy9H8+/ezGFJ/Dbbfz09tcqu7zCMG31ihXFAUTJjk0hBow9gniox0z8ehuj+TOAO5zsDIPZqP3g9cqK8bRJvW+dcOTywezF0TDs4qpBNZMPy20s0OnHwYl8VfaeNdjmMkjHKq3FX3kRl3idzRETblR3hYfX1TvDBEgm0obEDFrHZ/F2efVL/RNaVR0Ryg3NnKIvwI6T6nlDlq9eVvJKSgJwF7UH1IRLAVVGu1W0/q70JJSyCJgMLXQ4fIhqfwa4GF5iJD4J0DfP4UQ0IohUVeEKmKWFpg9kI1tDaQN8rxnNXJMdGcCLnrJKiIPtrVw3jzF1Cnoa23QkaBuww12YDwscOMSIbcsHp164ghdkPeZuF5OqFR6W/J70Bto4SBnDfmS+f4BOM6XGwH/FvRbHJvJrh9pE7TLJ+4QqvfBCdNDIijRk4dBiEqdKHQot6HxZ3swSph3P2etygZEfmiT5ceoKvzaJEeg';const _IH='2311c09127481057a133fca75bdbcef16706681b69360fe97b074b7c351b25e1';let _src;

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
