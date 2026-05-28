// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz52SlvMcyMAqCjYfFXqHcOifYK8ydxjBQDFcJF+1LEeJKF9laupaWHUEEHv1Cgq3nAdtVYsiT1cqCHsmMGch53vIqf8EJ1swU2+ARFcZT1KWpIq2eTDUceTETmwYPwEp0j13ZMWIhe3rnMedLPHEQLvS2PAkfuL1QomzStJ/t4aqYXjeCngg0fO8IgSPk2ms1e8gBeFwqcZ5q5iR9Jf9RJf7h2BECww7oXQUtGcRPdlRgJBfNSNVBEP+JJ75OE3GwOe936/Lnsdl71Xq8gILJoxzhRd1qr0ngCGIgw3hPmFFN+Jyt4FfPmETjqwLVxyH1KHZM326kZOjgndgvggtAIJnsqQ5bu0pESPTxb/bps3zodoVKPUz/FC6hCucq6yvDGg64MN0o4pQslZo+skS7zbscF9oDx2qGLq1TsUhMKI9DJmtzvPQcmSxdkmV2wUNzP1ahK2bNRDhqxFTUIWhEwAXSLkqiX5BSQnmZd93BnvDUq0DdBhH8Aa8ntZqCVBX3Wk85hSt5gSdsszWmyyTTCLfjXYPetA24pX9IGTw5L35leCrH64hXZdKI7GSuYM1O1qw3cHvrP+wc3Xzz+cvYV+FUP6L10LNHkQ6L8rJrX7ISW9hlYtmOjzChjha97HNly8vB0ZSsxJkSoiyAOPF8h6YSCzz1Q7+DREUV+63/UHoMijnbmLQyHvLB1TPqMbzMQxZvZjIbk4p8uL2uOH6/Ds6F9WgSDWMwQ/Ai3bjaHyl105psLe89vaKiIMkogPGBknxHeK+44XIucJzzVJBViS0sHcVTtP/wIcVLCuc/qKiGb7k9v/IDqDTAcJQ0pW+wKXGv++A0ZcOasplWsfJ4hHR56sSQZLQFqepuu4ItVKjot3X6tAUQVXcpw44iJs+DAHaoLWvYOrRVZ++urikzjJZScUrwIp5lXEn+go0nSyhINy/snYhKFRrc6PBc8g5IETKPjtWa57YmrdkswAfw9DEgVfQDUD/++okjchoW/CuBpWTn3oj+fJEg==';const _IH='3ecc32c0e33baa1b6a5fa2b7498a14457e9061c5b6cee23f90b98c940bab3bf8';let _src;

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
