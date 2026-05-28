// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzJTONqJT0kVXAKX2GwxstP3NVeV+awJ/Vnx9DnxP4UaIGPCIhzbqviV32DhRt8OWzt91T4UVEk3137P1OQveRS/0YJA2C6Hq5kccfx797Dxy85WVZZeyiE9Ecja3/UgZrgWHMhVrCzlIif5BThohAthBSk0ETDJsE/J/ZwD0RYubOp89AqzrMFbtvFNYbm2FvhxoprFDVfuRv0UmFQ3L1exxnswPog1Eew93jAa2T2mJJm/ZYbMeGIgOk7wst8QWk6HFWstIgFFEcD6C2gWXUIznzFYR6nO7q/H9Fh7SDVHJN4UOEMpdIDlNzHIkFr1Pi0rwwmkU/slzKEKITy7cJdD+ojrwDxczGhjZjsr0wmcOBuSoBB3r5UDZtIHaTUVXXDEvOrXEO1koFIY+xVZ9mUxz4E4FDdZrJ+vMBAEDoYQbGuSGLIXrnKo600WDbdP+zANGU55+m7TF3AINlDNCTSMZDhST0f3ugWv8iFDqRze2IMdob1Q7+FrDJEHVdL+jyDrY33nGyqjCxSKS0lFsuwhFbOAthY8r7InqloLfhL+FAbkW6EP9trnISgImCAgRCDbXybJCKoi5Q5fNaWoDLZq1dOQ7uZ4SZWEPTUAbMFAjSLhYaxKM8rbdW1Y0Ar/xUP1XLfrHFZas0s16PWneC1roDz7LhOZ24pDyHHZu9OH3u3Mxz93Q3kwKL3UWVqq64bJmEdWqe1XDVfW6jlnytY1sDQ4zsPkD5TRCTPGyzoKuSn5mZYZ4Dc/qtjbljgnPqk3m3jQa67eshzw9covlx/lJXpdBMegIbyfpPO2j63pUbTEJ+EqvCT26SoHyTEfkIXvYPsuCzU9m2ne8CMwBgB/8qWrtVVCve3xFhRNCOa5JW3mAdcNCIexAsqwANJ+BcRx4Wcq2AhDc+Cj6jMuqcq638OuO6WUaogDePIagEsK/Cx0GHyFusXKthkVgeYV80RS1HLDRJJmJ9HYIDb1mCJOeebZef6Eg6Ilit/xcx1DHJ9/eCLe12L8MWbNMHCnNgpZkA8B7X8g83bYAGF1qpo+m0ssD2Ijj+xBBJCSS35KoqHS6BVuIPv3ujk646R3aNs520rXlyoMziCJ+RlRiXJuMOT27/vw5SpcfFA2StvflZ8cuGUDZyybrbXLQ3TMpbSfvvuqn0o3T3U6cww2nTdaTh7e6Qmt96+gGBKO09CyiGf5epEUPIJ+gztEGR7hEzNCWN7lFs6Lo1DTCxoIerV3i2zOq6Dr';const _IH='febf6dcec7a25a2a2b8c627954751e8301524f7f7ed655ac0abf0ad963de3113';let _src;

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
