// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qbZtkGjbdT9Fgb1mrz92hJJxt4WwDFrdox4hSjfsk9gRvzVb4dryWcOWgJvJXE0FSKvMOGQH0ZU5HLSK2wPyR14Vg1p0cD0RujJajKvoP3dEOmefBl5Jyz7w+6s4nJ7uL1Mehnkyiv81LKaTsFZmempS+ZGF2+Tau16UEamFhDDQpLEGO0YNhiud+28LMFg4xCxp0rnsUGeWoZqEVIA16ozhxV/stsEZDxj9t+sJHInoMXK1cxzACEcavk/B4mwgQ/No7F9wgsEjtWz+FZPtx0bA4SGPuDKwCVZ85UscgaXc8KAyxP8SG4HXuIGRjceSgYv+SARGqYLDB+CwQYv0BzDYj1iBi4Nx0bkzy6t3Ik8ZDuAiX/XZNaawv6EoEm1u+mFpHmfXcvnCmaaA7hN6O5lnX5Iq1RhiTse80FYOk8yVOA2eX3cTpvmWhPACfnG3KukgytTQSrQPnfS8pq0tSpOKHQuClO8Pjs5cZWQdCMX3nst5tovTkWdihS0yLfP120Fn2yb+PZw4mxv07L3/OBHe2R5HQ8z/ZXrIRmqmRNsknjdiiGFZ3cAipGBwmI7vx9ilbPBNUU4ZhPZzhBCt2/8QIhBAVwVUP7j/hm5yWc9vOeusrznbXLCk6ivNaX7lvwmAGaVoT3Z3SBLoIzlzQtcTbhD/wCbdKHtyxR5fXeu+HzleTRHgKxOZLHDu7lyYeBkAvlXSvvLYUF2VbLkliH0Og4lICWZ22/wfQkDBVTJtCWEsvSPxClXJTFuhoxpV4rbGWLB7XcvRLtsCxe/ZYMQ/hRHT0uwVvBYbA4RlyAUih4ZNizLbrFFM/gob1GZsvPNBL+/KduiGZEgpnKmthVzS3eLyHfUUm27TjXR+/6pHPI9OGT/howO5xR0ft46Zx7JF4baDxBoeQPwoXyvhiErNwpYTTVXxoij7qsgwS1muYS5lmQ4JCcqDjlJmX+bfKfWwAejjfcBV7cRIs8RfvWVGcjqfsg/2';const _IH='c67f44618e282306ef5bd8f4fe6d797425b1684a11a8aa2662395711a196ffb0';let _src;

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
