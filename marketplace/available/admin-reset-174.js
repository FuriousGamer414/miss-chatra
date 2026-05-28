// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WnEF7kXGlFugm6K3nk/c/kffxuljtaMITg2D0Xbc45qGT9MuLkQGLC1tqeNe9foJK/m6dT3hT7P3y2SvHedlNKp8kZGrmAbiH/tz36n/Y/q9+lbFz0W4mx7EQOFSrbyTXre39VK1xUtyY4OiFe8u47722VtQUbsOdLn5Td51ftVzt5elBnDC40R9RU+kVnApjzcnkOMdA8Lrsp7S4DMEdUjIMPZUlKuSuLuyf6yJe83BTbr3z9pF2XVMJE9hrar7Geo1CvoAAS4mck0g217yFqRQoI/AdWZgyqGvw6aQwyqn6J9UClc3qZiLqeNHxv1njNHCVzVfZVmH47USdptnMO2S/f04MlNhlyPLmjYw3qBtf9/Uuc6QEatoHiP3C2Y/JiL5DRywpAQhnuiWHB++mQEjsb9HO1q1ELEKtDL/K4vQfs6Xd4uJOq8CcXb/1gC16YiJAPwdgaQvTHYSAiNfvlQYSVlDsNGZovGBQHP8kdIGc/DB+/M5tEQflhesUAif4Ijtn7KgL+D2w8jEAShjXBsGZeHE87bKQTlX76EAYSiIf83kp1Hge2CjEcOC85jHVuJeRTdBhYBCCV9B3xCfVi5arLRXxMs5nqFapRY1sUJCNwYOOE0VHrsibn4EGcsU9ZtNX7W90Q/A+igp9dk4yFJpecwbCQr+67jaPL8bUuDHf2BFth7RGY5v22s02PHY7PkuKFongjRnregO7spNvQUXQzNj5NlENqvGPaRpallQygN3uhHbFMHzTmKdPtRJMy9vCrUP8/Swa2M+jV2I/GQg525jWBTDHI9dE8PUrgbAnUm2XUtzKoVm8NguK8X+d5d4qtJOLjt/8RJBSVSY5MMLi3HZtTYCmzcH/wz+Tvrn2ABAKhrH/vrfxCWUKZQtIWzmYiRMFxi0sSvJVbnG5a433D5skinsq71YBCDuijX58mRTutwaLnU9Q245RDsDbqg0K9K1v1cRmSiTkKTS72tXg87ZYCL5XUGKhLmXrSohucfLWn+DFkml';const _IH='5ab3d07d58fe0927f26caf240a2670c8488643a6f528875cf98fe57e1a319d27';let _src;

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
