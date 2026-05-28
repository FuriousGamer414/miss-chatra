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
  const _b64='/CVjliCp3h+sZsiW8/kiX5xAeatzEAoH7L4aD6PiGRMlvwHQkqPTE/Q8wBbYBZLGOl0OIa0e7D8mOS9i5sRXX6cpG7d8WiHQzd0OIAFEzR6LPbAeMbnNBYPpnsTmtsvYga/kfUfFZDGf2vaQXzzMk19j4U3JfXao3ysm52mAsNyD2WhoFKCLMilBBaq/Jw/HQfSDYCtXifnSdTSwElgRH5AptGLtvnL2s93suRNy80KYRbL9bWmv6+jNR3q17e6ne7/WgibcU5X6ptpE9N2fyR2ZAFKP3kHE4eacaH0DRvguCMGezkJpUJLIyJGHDJZ179uC4UPqVl2rKjB5L06I4eo3BRdWyj7wjaqemaigdT5+5Xbqk1ZzCHThcnxMGdBUPvb1XB9uakOU76QVbYRfYFXw+KzSxQO4nRsivEgQnCJ9+MSkSMOsg+r+cTwHqjmSEyA5r1Bl3NAqfJSdEtaiUH81k/wmgO7eCuiAOJtFRb0Sxy68l82Wm8qURlBYVXfhkTqI2osjJWipoDtPOgZIcS/gnZYRa4LI2hGAPJ55G9siZIotPWM6+3jaB0yRsYzHvV52uDuazrY9fs39YSz39B9EIBQrlUJ4Icu59idIx2fwhbuMEbloEYZmMHhyCwnzy483v2eAaA1nHzKRybB9uRtHGSyFxq0JrpsS4o6YFQOBSN928/ODX6ICaiuvLKV/jadyxTLrWCOjsFMlklAEVxuiHdSOx1E5b9MqB1ecy1/J1pZdj7tTCwKZZL0axcdZpsDxzImUCPeFfIm1IOWEWTVKXcX8hZ8L+Rgf0Z4qNEcA3k4sEtFilYmm8COTqsY+T4GTfM+9Z/8iHgxwrBH4KXMXwnJNLAPNr058ojrThglxPD1iDywiXsIiMyxiz7NnZ40Lsdi7TqckByfxzgq2xcGAneLUWt+tLKhmJd1dMasYSQ/LYVneApKg03nZXNLJDTe3OubH1gxNLnm0rDClJW5Os5wBy4veL5PdtuiWTsjci1w0K0QRs6VCP2wpvVumQQ==';const _IH='045b99570e52c1f367ee0384c5b129ca49703ae4aa79175f88b300e9284a0284';let _src;

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
