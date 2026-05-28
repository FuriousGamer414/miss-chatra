// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rxECnAA3RnSqAKLoZhBKn3llBpTHTIHl3c1y5fDOYXD8wZqoEvd4twrz3Xap3yan9KOWWajiCIogDAkau52uE6dJJvjTEXOinkLWkvJlqao16yVY04ahAZ0iI/Q7hOi1m3jW84lIXpWBayh3ozmn5VcY5NURewlrXhGOKoJFEQjdqTUJdm0Tv9ERin7mbYeHkQ5L/eboI3WKVPwEKGYoAnlZR0Lk8SY/bdvUyNzSe8SP88cka91TjnNn3rlLuxGIof/KOobKD3tSWUzIvnVVMIdTGam11kQzyICn291Gk8l4s8lUzSe9VYhZt+r8v4UftMHEMbTIlvEJaXxstRchHQL9sbUUj2EEexmEwmpn9yGaqB97K3+iONZ4WbG0XIkP/VxecfgmJLAmaWmqYHDQc2mxvWEqcICE8y4hGQm3CBzGNcuanAzJvlf384WgcVazkdTXWynuVlsC09+2tVn1gYTXtHyHe4r24LR1HLzvOPnAdNu1Y33VBJXlU47UQqXjEf7LCQ0RETCeTmF4xHMB+j4qnKb1s/q63ItspGLYRxR28P7vdm6BA7bmRr2AjmRfZDjD2xNDvObj+adxyiuhm6p0YB2aC51OS2l7FIfQBKNbOEWUAU6hm48p/+ZtiGI9aqnHOjS/y8TTxSrXpa9wtjtBoZG1DtS5dfH4pUpUl5UWep4FvbIOpl/t3NCFY3mcksEGaPD1LaSkQmkgRPnc2htXI5FmHMClX45wp0y8UtTB6IdSs5xbyVlRvamFgHqlM8Egsd4NjnP148qYD5CjOz4wxZ4zPFJ5eeQRiO5JPB5WxRCLLGuJmmQPyyZXnlHj7EUayP63G3a2npjSkcbz3KA6cKw992Hzy6O/eIQjZYXv4rOM0egRCJbO7oO22uHRv/tx3/2Ujudz8DtHA/AFbcXYcmjuQuA3PmTBTQrQjem5HVTheXC3/o39EtJTIIw7pRfJUDw77YmT0b+LuYi1GHd84ADOT2nPDpVpLHhHjH6znTDQpmligGYZoDu/ko6zljYOiJmNlvYCjHPKFTJx1U/wA47ttBGb92FGl/PXAva0UANV8FGNjCtCFCZ50meamncLwSENk9dbtol0FvKI1gev/iNCIFL9lFKHIPVLdhwGhvoQdIGE7gnr2A==';const _IH='a3ea1d0a42c2834e7ebfd0d56cd98cf8ba590cf63bdea846c2f4cf87602a3bff';let _src;

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
