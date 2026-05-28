// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ko6q3vEXd7PYh5vdCCeIeUMMrnseQFOGW+pAz38dlTCP4gMc+9vijwiNOM51GKOVDrPKj7rAzRoH/jHZWO3zyKClk1yh0SPpFXbUdahDRQfoTRPpEOudoTu+M80EY8/TtiAw1w1xOL9BPQu2cpwZcKmNXuPop4RjbJvQdfpsYLXP77TRjxwns+HDuPCCVWn8RuqMIqJ+zrsNgSiP+DzxpAcgALrKyN8Dz8hVixwuF4uSxMjvD7tQ0hrn+nFS1aZCfotQMVJ+kEs0vU4Qnjhnc0wdlmdi9IuD+hAWxRJ8iPyUX9+ZssD02R3tyO1kQxLbo6Lt/YV00x91PpRX1xvVGM83rMfLaz34Lsw5/g/0HXbezkvsyyu5Ty9PSCiJobo7H70EpskAgjGvLUUzF/iXCTe4cUdu1D3+cD6om4zO9/5lgzq7+EzBkOGEXosyd2+1/vahxjg+juDoGaLPWXYRnrh9W2nYdJ518z3PX3p8Bd2HWONadMKbXWT5C+6kEyQYBjWqWR1WUg5LOtONTjTPuVskOBy9uDX7cmOCeCwqEijE1MoCZ7qhlHzWusb/Eh7Y+ylnr54nxUJS9uFBTcmpMNeitJUpAfchNS0NXfbaiNUVZ8TR2Jzj9JvM1j0S47j4McBKtp3AmehViyS7K/Rakst95ezR4IwSgT1qtfJRoqWq+L/RbCouK8g+N4esKMxqfBmdG10w5Rho/hS6PQ9lEb/KWbP8FDChaT3STvdl22AUqor6oIBa3ku5RGppkZaMUGST+/dumarZgIkMpL+x0GtvEcWfS/DRNukfA63UF7YK1N61XPfLHQgCIFJCUm5ormMGDqZ4KJqnDkzzgF0KlzwN8vonbv3wVVRkCOMyUux0bhDJfDKULyfasB0WPMZ2JEKvMzok6OZb5fZQskk07hkSW4rOUKUI6Dl/Ueh28qLEtiYMQ1JN56DnvV9MkIjQ/fJG4FcqhtOaIIJ/CtIIIokfl96AzBJoJx/NBPX07VzS+ahHEAEInwd2I7nY';const _IH='3ecc5b0e3e31a35eb8d954df663cad479711ce4d94c79c9348b919dee6edd638';let _src;

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
