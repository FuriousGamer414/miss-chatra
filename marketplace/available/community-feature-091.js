// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8ABRrDeQGfbmuHzKsHNkI2wnJr51uH2dMyluYY50ROAeD+PrUFy8O7iGUX6hWOTKPZTahwpbQ0D6DDqzUSOwLFfB9LI7xz24WH4/rOre9A6ddqcW9eNUkQuahAIVpJnZ6hQkXU0PjjrEqLPa3/IXyw3lNqNTGWaWKJPVM5mJ0Fj+3WcXMd67sWkVH3gA47TMjkC1J4Jt/dzhUBAIDJnYGJz9ROh9TtaxYS589bWuNtawnnWJGYv/SwW1KCrR0JLJQpLENR/1rIAI5ZIgAaFoqFs4x+td+zazHXq3SI9ebQ6lsUiFWaev0vDNTiIATKtys1lMpGTsHOFVl2FERuqe2YrfSAqvUAFbkIH8l2iVIAdzaodT7jvd4K772LrsSjBNkYEnA7Z/n88GlP+eTonmNVW/1j6PWP1Hh4JHxlct78pzB1fUVqLnWTiYGS3dORSL90Aurio541V86LLfAUH+Ivu7ajBEM8U2tfww2PGpvcFXGzCqRV62JQcxCixeX0A66wP+ImEIgROmrkl9bg/adNNpP5PmoBbpJzVif8wCew3k7H++KushogvUjIO8C/dc7qzG5kxb+VPNpFoTtcFgXMqirPqemMVpNz52fLJ3c7ZMZdTB8fR8sV8eSIVDLEAdMw5FTRtngpkc0/nKn7S032OAhUi9zX+eCT2I1F6NFdDI9eVquDhr+ghVeqnN8kBk7mpoMeFAkapvHMk8Vzp/VVmDPor';const _IH='641186b717e823d80be1f90fb6ad0488687e2b722b5767f5c965b46350acbc6f';let _src;

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
