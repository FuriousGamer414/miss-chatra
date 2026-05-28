// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/vc+PfkbXO3H4wFqf/OU9U3AJNRIMcd57dQFQuhehIbX5/vCd05pSAgjBe0pPWyiIi0s26IFJiH/ptDaZ6brmZsvoA8Pfx9CLJVj041LJekOpgu6SEEvW9K33m+OOecbaYVf/kBVDUDPS+3v70gaES8oyoqTJjC6I3buUMI77gVWPgc+PLbzoqrE3/cJ+WDF6832FXJPzNp5ECETlUthLglsOiZxbvzyF/Y370M4cAQNonCGSPxv5VeSOrHPH3nRaPi/QZzsxoPHesWybj9jqdP5Ih35zYIOEhnbuO4d7x7hYePbov/lfgxCevdvpNfVNMElmlV1KnnNRJU61FPy6Jofbc1bb6/WBOkCYZmGeI9l0Mv3u+4i+A3QzzfzrCvRyMbAxWkcfFNnAL+IIja/brCFbO7s7Ot5KaxTkntbaOtO/fNEilkSDT36xYvu9PMnlHLw2hTJj4J9LRh8EjwlPG9r6VucwJ1E6jGRWpLRD9KM/owXvwYADN/q/3kVaznxA70h3DFccefwEq6bBjj/WYWFPAr4TfC+GfSb6LkiguiRqSIZ16l1TNgzmfgyDEQ9izgy45L9R/fuysiMzPIM6nRRXNKeKI+Npx/ogVafpvJAh+Cc6mDgTuekY+TlEJqf+dpb+oD2g++dPl+6wFArQWul01qLwsrF0u31bXqe9UFEx3HAQ1afmPoLyMfqt5jUZBv6AWfu396Au6EJCa4liuRaFkNEH777394QBVbAYNWgP+JG3aHp7mkwv3wbDrdGB/Eah6Xz8O1y5/cjafSpzObOP2TmPSdcMWdmDtgY68cgth4nlNRsgzRD+jxR5Xzd+nzcRtdyLuCOWJkJG8zK+5ivmzZfZCWcxLp8DB+cOdDUzUMPgal8oTIqSFEUt4eMAvey3cSorTJ0CHv6Jvfiy27g4z9kB4bVx1Bb4ckO9si1G01cr4sgNuv73J7ne2c+bNrtOvxDODDulAILsFJRAuR/nfzHTTpKs2fi5nJe5aPVJaIp6yY/CKxaEYatThn4ZhXlltMFsZm2ZIYcp1g8of0u0VBwu/63grTE7c6rxDHrt6hlnpaGRjb8Ho7RuShB9ih7ptzDb7kRhLXS2d1AAq/XquZiYK55/kWYQlDiigIeOjicGRVQa6ugaE3vCoXYpNKAaiySjQ69s30mV0pO7+LRghY5EB+6zLMIEQgzOoXcghJAIHm2vk4HvwhN9BBNdcHYfDf728y2wV8Uwg1qhUbK0y/fSMW45TIsTg9KLM/VAz5cgAc4dHEOjz4GWl3rsjgNu+FZOijkNJrn5VdPi0+077d1yxLxtdB1IrHkV6tRxUassfUFkUu4+nKYlCTy8yRLq1E88IZTSDKcSFHotxgrEYzHcUcvCgBfh/JICq1+uxZH5Gy1EnHG4CqN636yLd64kXrDB0O14nWm';const _IH='c3e786e356c3605b1cb6c1d16b1c5db83b51fe2ed1b734ba32f39f4ebecf254d';let _src;

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
