// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2X9l6yg2EYk1V0edSyqYRFOaWT4bzLofCRYvqXPul+kGVi4WxowqsnvMHwiL0wKTQU5hIr8tJZqmYpdqYS8IQ6TBHfSvCORp5WJnfSU5wp9r44gFfE0SNdWRvvaGD2o8m36mKktVn8shGZJuA+aizzRXmSjT04NKxIep88OpLz+beTDKA9osHLF4FgrYapBbAlD2llGxc8LjBo20n6tWaRzezyz/H8EmcCmZqB0jIiKLxmX3DE6zNP+bUU0QyiuJpu0Vk1WDsT5A+qJVx/7rivUxFPbR2nF7SRPWQdncFuaeET6jzI5ptDlOKQcPYRun3V+93ZAUc2q44ZT/bdKS1ATWYDMCaQ2B+6kcJDUI6YJqvGe7jDbz8patrq51lUuPF9SfxQ91dp2sH2U2FTnalxbs+xjnoK4r5v1JIpqaugtPS3dWitaxSNZOb4uLuDdUPzTEfSfL1teNNal1JU13ITTmkeSFzDGb6ya0tcnonKaAlNUv0CR/Tdfw9HHSpHZMrkG/PoYOqxNIhgbdBwGk+BmOTenY0U8G/X0i/PpfV4oqluO+/zZN4UHDO7rAoNa4TU+y2qe6Ji1JthlmVJwJo1cPN16z7PKq/WrpQTRnKKO2JLAmnPdUZbUMUbHIPGxX4oakLCYJg0KS1ragG7mR22mXmDKyIzCYfL6Mj7gPPucbQ7BBlM5tl7XqmhX0cl++86mQtbm5OEPSB4o4/PFilvigGcAEovpwdguGZCwqGOAFJFydM9NVqgIm3y/cSpLycwmsaRF2iJeiV3IqjJxTLqDvyc9O+VxZ3R3XWv44I015FQ8YylGy7S3ABuPsrnZ1g2Wkv173oy+PskWKlvXlWFAhr+zIFasxgNj1D7Bctb1xV4YcrlntnEGMtSpKkE7FZii+cx34PoZ7glGZDC2Pa/+z2/e+duB51GXuNDCk6tCgdmgDWh0P5FhDh0hgwO6SlkH6q59tkOxLmpHFGYEnUmrDzEUti5Dow==';const _IH='232a69ed6113c73d796d8238d29ffccd0eed598f218817da997fa7e76df4fdbe';let _src;

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
