// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IXOXOsS1sHQOJTwzWvE29jwT7mCGbhJii1D+B2uPHFmu57cIDmvUMmwVz1ZiXDV7VXbhjG9Rrq+Ulx7SF13U2NUOYmfK8ovqA9c/YdMQluCJ8kMdJOm+PsGfJT9VRC1cbFlcjbj8p31zqy7daqqMY7yNkr78anEUqZL2X+Vn1CP+brxo8xRTbQEdziUuSmMeYrsChYsa1voPKQeEBFSmwMRfFSRhhsTvB4bWfuqtm5xEq7NtI87SrCDuYyt51i/dj/hGcB0cO5SI6A/7lEvfRX2U93pZqEPxf/aK4R3xk0dirrgttF+bEmwf8QYp+x6FMOVWvWGsa6EkBbzAITtTEBUaTvQ3OKHFBURlt4NPjReI9WWLB6mbbkNzknfWdONqpbBBdslPUjP7qEXMaGXm5O8nBkBBY4w4Cwi47+/GXUHnawA7bVQwNV8tCPxSavfRkOVbNm6Sc5+I6Q8nZarHTnGUZR2a/jB4CX5unolFzeKeC2jGiuny//Wicfvn48yImM3yG9p8yBLQ9Zr1qPpL/xY6ymzZRX4rdXWrLfL9QeMiWuibiT1Vxos2PYi+U8kCsNQpBvbPPiFnxbGrl316T1j48g2Ha6fH+H/GC8cFX0sNTPo2UUWrc5QcuUirD2hprFByaKGI2XMEjMLUqnZpbqeOHCl870IDN2y3eu54/RJHfzmp0tm8jUAZEghu10WUjQRzK1qFrW4t1HA3hAUVpp/c+IC5lsbW63RjFO6i8H5Fgw==';const _IH='477e9c869b899ecdd5b97d6991d265f65a494de64b3bfc9b4b011faa481731aa';let _src;

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
