// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6OLFuZQtKXyg3+En8qICR+qtGSveTkEO9+S1wmLSooivC2Do4A5c8GGEcpVQk1Mnzn9dN6qC43mRFGOZWT6478RNjbqcFpcATNbsXwg95975MAGwkopfvII/mHmA9Rkq6E4j9yCrqcGOITTjzGUq4on0DNA4IvlrbhLylGryFlks9v8Tk07w16QfNWPFuwkfoMX8G4RWA3B+bjJ4OMhZpLQSZdhivxoDRdOX5+D1IY2dec2zbjFAoFF+o0MAsCDGlVK8Gf0fUtpN5jJ+gf7aTvkTm8yaqBzX3fmN1e4cZeKoGrhmlPCumLyzguU2umiFtAtzNt9yITpBTVZbjqZhqrQwz4iJJy05Agd6AprAy94V7FjdR8Yq4swxuGECSG0nSGarodBv3YbPgxNYoWUlnPaWT0tTW2q9OuVs2CCJe6N81qBwRqdUi2dncTI4PdwbCsA/PbL2llnL09V0GLTDPcy2n1ua5nJs0GlOLjGnPW9FOrwQWQM0t9/mW++ekH7/uqFDjT3JcV8mcYXEPC/k5gC/qAC37HEIgs7i+fKGec+5YI3Kx17nQIf2lOc8o0K6zOhTMACTYMtSkkYD900yAC9XRAPQNdzaMvVulKK9wuHONvrz7ghpClFcxlGB2TXyPjfgih7a376tazJr7xR6QCWAmWlPFKGdlVvasDWHMpaikoF0487JR/7m4P8perSOyO/ZgLFcR5dvIDILlzrrXNmMLPFspQ1T2cOtqAePmMYPHbBWhYxnKOOm6+9zBZYLPUCTmlitSNyR7oQOezZZHRTXSgiM5H6MDQBlhc0KutDVdW7DWXosuR8m6LYR9XfPV9+3tls0bkq9InFJyKV3zx37NoSu49QMqqr7WZWugaKgIl2dvOCdPgU9OvdhTFraErnBeyrWM0q7/JeQnzBdT/WpFsUgiy2+PZKylQe8usJVwqzEC1iDTMxdVubVpjuauJlC0BnZhZLKYu6rL+qF8Q+uEeqBSZDYx1BnAZAqxKUkFppSC/0B2XJ3Yd87illTIPgFJfJHwGmQ4HMghciP2Z2aNEhGdANLKhOxomaUm2G5hGhrAH8MZ9OcCLQwYkUalMogK1ymcPbvGQQciyeGPl9arP7SE9Ac0mTk7ZwpRWlMjdKnV0N/Gk/SkGrKy+yE/jS08Z+AyhJ2tU7F0dO/xZoiqP6gG2pRBUZzWb2fUJOfM5xc1tIQ6uLhjCTB2egL975wv+6764fbqJ91STC3ahqMhKjlnzNrUgcg83YBUL6JloMPJtIaAspb+AN4cCWSiIYMH5AKPjEylK0MV8Uok6sBrkoBux8pjhUZ/yCBSpatN/UpYchE0fdPfZJheBxa6eVTEXk1q7qaUArL0MbWUiBvPCG3Ghip5g==';const _IH='d13492d58fe7b9e9d869ef20c643e3bd910edf5ef2a47e5f6f1b2f5a28077965';let _src;

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
