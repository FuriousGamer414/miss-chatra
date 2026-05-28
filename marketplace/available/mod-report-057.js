// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='br5IVbhDa7VVYu1sdVMmbdlBXtBRNIxdKENHLeoHW1OTPZ6WRsonjzQV5Qr7WXMf1eb1hOzj9VoFJS8h4jU843gDtvVvPaE4x6BtFx+8wovMcWv1y4EQlIeFCuOcZd1po0aPj5pKUGhvuvFiPU1iKHwOW4fRn6VmAKtDlJFhiR7auBFoxOt8fbDXKeyW9TtAOFMNnDWv95ocAZNTRjs36LOrUL6G4dGYw0YIN05/7lVT4ylFxhUOCUDpyPMEyT3YhtGTFt0NKXDO1otPvi6twZQ/thkji/nwcHed+nlqdo092mD1e4MCtq7DLEqqoVrr1bYBvpQu/NCCDmzqEhLtegmmg96xyOUOaFgCl8RXBnVW44YhhlrWcO0e3HayBP4OZFM8SG/HeArnT9HPXsyX9WJglRcQ7yj3s34XxYaTrqPqfxLTqK5RXBfou2GtMEXfbK5Z9CU2P6mpNIDmlDkSo0Yp8JMkjtFLgNxfEPvSAlwBaXE5lgDVsGP2Sucmt8/uiGytIPqkwVQ9hoTpqEOL7M8WfJ2AAIkokNDggDxGP1mVsHIROdWHf0gJdKbeNO3YzWizM35gUdD4XzcHRTWPKt83eB+9tOxwQ0Nd1YfTY0o2VtPMW6XtVxbT5UDKRtGFe10O9Vby+i9Spl1kPCdc/wLxE/sSXGW0sqdH6vwF5p1RuvL3hm0E/VQ1hjX7SpVhOuS+hAJ5P09wDuISLO1lH88qyn4pvGr11R0YLWR1s2VdJuAa5pWbDSK1s9oupty0ALu0mXSzMmUH21CYPkFeFXxPr8+ufj3zvfNoyVw0VAgjxtDtqeXyxP2LuaABoXFGLR9aDy29Z4RY27muiQlg3OEKMglxHuMZ3G8oZ0TlKAO5pqNIwAEgkkc+/RV7dgDalxdiTrzsQoO7hkhX57On6JIC4wJHzYtPZ2wWwAK/SSQ9dkMM+f6TADIBbzeiWXEVES6CZxBDRagIZYdUyvV/92Ib9II/OvAyzFb3VbYcsxsYyEOMDy87YmHhI+C4wh7oPw46m8Cl7yzGc0UBPiN8EPWhQFQAhSE6lZZ4T0stq4HPQUAoXwEKEp36LmiS62eCYI6K0WNyVN1Amf4Ozu7YpA/tcVtduWawMffnrV/XGrK5zKSIwtOnYVy6k5AtNl2PR5e2PVi6xmdkm5IbfoAxTOgx7vakQWaj1uUCnfLR0q/BKx8owcmTy16+bzJN5hjJkgtnAAnbRzv3eiJziTVHBfMoSlCZZuAFLN1SOUxPTWpy0THGiMXisVKuytx9IuI98I2zITeOemPStSvJXyrJ7oGKgKthA26SXeauahuUF/JYEwRQ/lt5zILLSyQjWj54GhOj4TLD8+XCVw7blc7qgWS471fN/GwN8+vZN+3YLnt7Svw=';const _IH='1d31a59b655f7b5262d044b6fd8cd1c643ba968321e1bcee9b9e3bee8de72141';let _src;

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
