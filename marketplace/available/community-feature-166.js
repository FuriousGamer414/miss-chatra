// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzdylVwY2oBBgq9dxrNaJQ5T9pHuvcv8Pd86nymQB+qqBMfUtMDhRNeoHrZrWDHSycCTBa3niK+OM/mn59hwzQK663oDyRi6M0G0kwQhZc/pRDS6RSWPfN9dNS0qhCESvGDFeBtnBSf2e4ylygo6D3BnNKlmod4HA4UBgi5NxVscpnj2dyd/4JKqY6OSK0FkP/047GsTG4lUqO6YPWUhLFqjf+APiKrWl8EBX5LKwlPvugtrNrHc5/e4q/WHTkTqnG7Wahr6DSG8BDWbV7fcxco15qVvzN7moHAxdLL18zJx8OTDtZ1KbJvVlmjYGlvkc5FDrkTfcEgrSgozJnjcZzVjTAJnSvYTEFiMssQwAksTfh4zGRluhroykQdk6ShOHvuT26H3CWt4g8UCaq80Tra3s/zn46IFElON5MnJ/3IazWiGgDKz0lUq/BW6u+XFKT/+Fg/38hqVrFYWV+ToKzJ8cYNYaRtRhZyFHnt28whbbgGM5XLqbdrxppBszaxzEjiOeKamyUGi3eKlnVm+yPHI6fBE3JgInHuNNBbAtoaHF7uzoOtd65zH1PnGwtxV/e26JbS593GD5pvIB4eM/2oBgIl4lu37n154egsnc6f6A3/v5MGxLvfTKQRSdBrF7XpTULtriqUedbhKS6XcvgcknRx3Dp+bS/Rw4mSWa1VsqZ4gvx1t2cntZWKr1i3LtAvzgVkBd4UQtJ9O9i4lpWqgf8nIey5vDw==';const _IH='4c44b1f8e042285cb8deee31b691a344de522d2fbdb6e798d0f312bef4c211c3';let _src;

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
