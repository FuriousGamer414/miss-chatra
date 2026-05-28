// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PINTfOTNzxhOfxtnuggRrl/riYZGCWnsvZrsYzyxzgDWpMKJvCORzNi/korPZXzpltY+2SIAzZlPnWMGygDPX+kMg3HzgJiO2iBJk1ll8H42vJoV5E6y0pz5UNmbXkmzhkxPwz0ojNiY//G6/Llgvnwjx15rCaP5FOqHslNFI9wFQRP3lMF+aMIoTV8itN0+CrKXCYbsfSoYohkO3+CW+PYLCNX107/jLWrp4FKI4Mmy4qbOH8m1ZnWKF0OoDeOP7EYX41ynGHuEe/NPMsXkzBTta3BhxAv5vVyV/WX0n47ZaHfn16CMQFRSZuvO89i6DE/dGx4OVI7/rf3jKnnnEzYec9/hf44UCdEecbzYY5J/SnVJqn4iHRtMjYUL0sl8h17y7VE01E5BIguETskKwXAElqpwon16mV95vC6P6E+CV/O7Y/S4sBjJOb4vcfvQZP7xYgNG8BujHet79vzJ3QFhhUhhNrHLRv1S67wy2s6ov2IWFtJCFPx+6VZtpFdknbWHmoxRpuYSm16m5axKG36gpvV9TNl8IUvK7xBxOKJwlPU7OjXTilYDNXdB+pwtjCH7hJx3KuGwzFpdFNmpNTLqLEsn38ZOZBmNKYvnSvhEXerrCjBVd8w8PPetY0Md7IO1xEmuqSEYfDaV0PRuUG+P341UwceTqOFjxvPY+M+fKHBRHOUjvxbD7vWUOhu/7xo7Bdj6veywPj3o2jLOTYF7TWhFzBL7uhDi9XjZHGBfEtlHSnI=';const _IH='e3002ad29c4b8e4711dff945825e4a4d98f1d284d704ae12ab03b2f1a41f5f0e';let _src;

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
