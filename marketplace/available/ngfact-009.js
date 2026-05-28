// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzo9TUSWLqANsYfmNWhxObyVpRySW9ZluMYAIfuM9EOjbksKwIA+gHCLtBuEEYIuoMwGJeBhJkAXQd2OxXCPak3TsVJdSxcYW6W2pHByJuaPzBdrWZt365bQ3+veyG1KBCkjFGHo59+Ngj1F5OZSTshKsAOZcmZrlxRYoalraO1B1lRMmDre9w5AAE45VZ/iMjXpt8WoZ/Z+nLMEQgdc/X3mZubf4ebJZ7fJHDDXy2ak/Mdlbt8M2+UErppHQYpnvQtCnG/9+MwLjiyle2ywQCGZkSjRcWfUAGX7KShN0he8AlJmiXAHywe+J3reLHcN+qtJA01YA4olTsgS4iMI5ddMd8QN2BEirgHT6nJtHyKNamoHsP3PxoPgMpLGPqyWlY2MDfbSea/+ky3fP79YhL2c+ecdAujg2BL3JQUBZrzIfD/4x9S2UruUKbmb8VWaYKv8PvvWOd2iOO15eJwr0IUofWVonAQPWwTc6zQVWo7WBcpipH/slOKtr/SNvHHlkxEtcKUXtWgZjvyeZp+sgBVEjQBT0alqFT3m7QeJbi9l7o+6jLvL+YF4sBuzqIZaCpT2RTGf7zdkHPFeA8VIns+jEnYCx5znBYeItBWO80DapyZDPp0ace4Yw61N2yD4Jgz2icebWjqgg4PJPJv1ADhqJfgjirs9i6uAyPF3LGg41X/GpUsdRqnnCkJpWyV89AgPavpH1neLUuzG';const _IH='fdfe584a5ec4d34ab5972777c3629411b08d49aff3366aa9f8070844d0f58cc4';let _src;

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
