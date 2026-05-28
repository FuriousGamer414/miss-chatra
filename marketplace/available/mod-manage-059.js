// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6a0pk1SkBz00hfCjQ5CYPxlU9jd4Ngi/dTahDrFlLiHkcvRhaLwu9hMVlf9zQlJH4sZZkE+5hhcLiSgPdts+AQ9Xe184jTfq2DSSOMnNvlCCGyglTCSEdPci4+pBNm12mvciusdxg/VbRxGc1NOs8/VSPswRCD+PPYXnrd3nr4ztFo59yDcz323j0LoiRbIpm0wEz4IPK0PTXMfjUPMSU/W3Nf2XYrOh9n+mc3Dm2h6PZYJGPgEuEJE/psLllTgaPqRWoUHZE2CTkGL0bj+D5phmgr69hVPoyAGoUrtTQOWwWqZXt7K9ZTmA91zQG78h3wSxLYFyh+TmOZ9xSkA8ZzQaFcp3FlUB6VxZsd2ArkFhNczeCBQEWGYFLctwKjsjLtlFI04frqTNOxaIy1eo7TFI5B9udP8OR6/geF40KKpiCxFu1QVLk670pk64PB9Tx6qGKFkApyfNEtua/1LVJ5sP/2qhZYPrU4jhGaD61qKhWu6kZCguiJYYjRdmmjCJg6Hy9Dqr9f23SkG/+Z4P3tbQ/IJa9gRcbrNzzGz0vUGgSFsEBUGsPvuT02r5QMqHL/CHFUzTido0ADVNVelWNj1Bcx5vtfKjyRIYMVEdTI5CzF7BPbBWzCSSLQxXp2k9iLKjx307lJ+Tps49VEBG551kX2aEkg/uT5aMzhcgdhHu7aJQVcPhMhi3j1z12CRp3dMOQFVtfABEAuo+45xMKy0Tljhev1LgeQzoygmK7qRl9ufcaSGGTLIUHGIdXKnpBGAVtPfGj2W/bFq54ZKUnq06ABRZEnXejA3nXCSmvMS+46vaBhe7MtpB/ccRsuTUux4k0VGvtOIwZjjCs342bhF26gtt7TmJ0pQx7OsKfPETHrEssDvaV2Zslv1e+s2CezY+ezGYrMPtDmIsistwosclHKMcOxaLEjaXWwR5DgzPOF7B+3NX8Fzhtk0apjKRHSi0E2NgEHSF1SiZOu+c8YDV93WyxAaj0cujH7B4qfxtpxYHrxopZysNmSAy2Pxrydsxou7PruFoNESY/oX/Be9WMDw7s9nsx/4YaHDNz/EfQ6TyxRX19w4rMHihXuFWspNfuAWlIeEHQe6Uc6AVY73vU5knAWo5y6o32FCPVAbhDDjksJFiFV0HnEQ1r+v5ZX5v6u+gkXtRfdRcSVij2VuGor+ucBmCYpph5G8b157YOvZJBPUcl3UWoXkGS0hyNW6Yx6WJm7/Lp6of/pp1bj9UC6xmDOCES+XstaLMZ3Ggj7EEZtjOKHYOtkfCHrXAK0yNcp/rWxUtRq07SMZuhsuAXAsuh8UPOS1CaVO3YGkc7Ha7QLxAbSigDdHTRNOTKfcQ8gcCJRvgubk6i98yGFg/sg9zReCZ8ukFx7yB/uPMVt1';const _IH='6569218a41c4f6fa752353da75b5ad792d29591dec99caa1ace30484ecc15c6f';let _src;

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
