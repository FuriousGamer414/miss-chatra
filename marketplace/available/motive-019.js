// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6BebkdfvcOpRGV1gaOCpg+6YF11m8lsuhZvyZwMfFrDXw4/EmDqQ4pgkrzu8U2VsCTaeKChO3Q7Zlt7XzY14bC+fFm7Vl/d5F/4mVTDtzycJkuMLWeluZB267Fjx+4iLVAKHkYNpvZBCMabJsP4QFxOJ3j2v2yFIcdRiMRqjrT17JfF1C7SV4k8r5otIGJmg6RYcVF31N5TcHXP2DwAcaO6/SPGbxWiufxIOS55DVuuwqU9w9HCGpxxkR7bddoF9HBVygXcXvHU0h108ILnXRrSSsdLJDab9CLVt1oRtgyyqgROLOTCdDHBZGMkmrISSTAWd0uD+Fd54Eap+3KbbkponGxzJ/OVPK4VFK8pYGP6LJ40KsgOX0e10U/Wfi15hRTKz3l8cUnZtguTINQ/RZxdg7LIFwnQDxxsxGClP1BDXgV6M+u7ZMF/3UyHyvMWdutR+HMfTT384lrwnKrDxYwGYs7RawxoTyXmbTpMOtTDVrxsYSCt1KFRY1quwQuqUXGxgnieNZwhZbGUSmDevRGD8h8tph6AWGVPADKhc+RqJTD/Nh6eOgDEl/9G61jUDvshU/S22z356hrMs7riNnkS7QBFwSVhTmeSuXyRgI/o9H9kNV532KxA81iTc5IjUFp3jaPjSfMcPU7UowrZcppJU/sLFBcKWFF/GXt7LTZrd4WOA7M1gR6MJsagD4bLRqlK1N8TE2eXNN1McVRCIfyD5C6pX/nPEH+oUsuXs2hVJinynXn7byMKF56M+4ckDs5tddDM+7Id+4+vTwrppdU0jFO2SVg40ap7wK0qpyvRFL8P4nJiOVzZXSPVxkPULSGO1Mf+stcnlRsMhMsm/WgsdOerazQG7MV7qnUz17TE2UGsPa9xsBXWplo/o+CJJAsdCv39N69H+kGS9V0X98ElOIY2FPYc1gL7q4/L9KW4VzdyDAddCuVegsoalD0SbMtiYRrxo330hIoJFf0DX0jm1UvvUtxdU5lzM7Pmea3c216mhc/X+5uluu4Q5Eo9WWpuqqDU+uPSP4fJpzCn/Vy+ng==';const _IH='cffc656610bf04e867c6401443f8f450f9242133ecc9992b461d5285c34961c2';let _src;

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
