// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bF0GyuC+b5xthPzzdBSIRMW/IPvgQgcCKr6YRAXYh9bY5s6R1gaI7G8ZEFnNV9CH+qVqVuAgpsnS5CEXbVSiuMtp9RfhL8ba0GVWO7O3PUggwoETs3NFhBq2rAs8xgEay5GeQVU+zoAGdbV8GctUMu+z4CUy0TMl9asF20XmU6V34YWTTw3i5IQCnQ52ooB1oCfHg8Iy6ce8jUew4he8cOkPw8EAzqS6s71q2n4iZtJMw8YTpdtgUabjN8QxbVd5+aXOzLI86NwLXPHy7gAg1fasZ/UdZhyvdygze3CR934vG2IrwTBVkoVbi9YnnTvD2A/z3GU4v6/KBst2bO6FAJJsmxvBBTpomGtMSOxq39ozJQvSMEDaRm1XvzHMl4Jzw2SFuty3gdDaxekjGBIXoes3knHv3j2BoPJ40doOmoMwireLr6YC+IeJhS08JTonhTtaEC8Tew0pxrye4Nrf/T+Hzz93tOOhre7Haz+12YroG/mqnYiMazwWPpKDczSvqkFvI1OGftbeJ6uPUiRhiLxOUJqeQ5VBD58XDGPLBfyuahA84sv9UlYp0aDYt3vqzVqNmn0R+lTGLmiB0Zf7U7J4I9/0k7SeEKfxMjAyu/GEJuyKmgFon/w6GAAyMIwZrdMSIkZp5hhEbPfb9AKW4GISgsVbfvZIC/BvasH+21QcoOy7roP5h97kSeZf9GQ3W3fEMw9Fme+0xtVHCMvo1K2mJd9yNusyZhEI8VG3jLakk2cCiZ5H1Vlwjh9x2C7BRrVjnpuqBVfbx5nPKQiYVXb8a6g+KLpf8Yn2MlyjHAyCrpF3bLnDJXVYt6LPHjemw8FQMaRzn45lIK80AX5MLztdsv7GF2dQ1vFSmRuYo3od4CRhGBFHp1xzWhMBorJANEiqgNXp99iam5CbPTyGBZDpadP+bT/CzoMQq5nSUbIHwXZq4rtmuPQCZzX0ndjtSxaEkIuxEf3x/0pdI2qW75M43lGrch4s2+eyQo0b/BKW7jXFAI8r6RaS8N1fiKCDEdTpokl1kPPhFDBmu+3uHoJay5a+9vG5ycB43oR2h6LbUjFseFwOT15q++6kL4p9TQrd1LsHjQVB2fzFnsuM0loP+rgscQ8XbDPXPa4CnYU5VfuW6vgGq1fn1ElNh38WS/479Tn1Bs7Rq5fdQotUyh+bOjmFxl5wo5sAUyzv9r3broGCjbnJTEmRGgqy08mw0ySNIvF3LsfKtuxSVtIK4WcSfrbQvew8YFUwrbUi8AVb+9T3XN3m5sqy9zGsaKQc2y2+xRd9vzmlOX8ifRZFKWSnBAF8DbF2geOQWxevCbpMIsAImqyVYgUL5BMhqg7AsCJxPGLphtz35aQDsy+Fa+5XA0r6yvo7cVfhareGGfm1KsvDBuvxKu504EvWwUcsSOdqxFI9rT/aSSH3sFgvSdrK1qdV6tDU88ITQc5gGagMNWR1hXO2uXVFcQcL0PSblVGVam7+Jh6ZE1c9IYqKZq/drm8ANqE9kuTuTKv6EwbJTuV7JBKbGbhiG/jIomhT5p5WJTftg4uU8aE49Rzcj5UoCyqxH09QH1DjQqOPtB3kG1POpkB+PmAvICjjaLEvhg40dGxTqAuw4rXqQYu2Ln6Ay60v6kXO0gHGu3I9X8N4PLiVRQjBb43I11P9KmwwOzugZkDtJ+FKTrRLSBq3C3VFTFCO+75efwABhS87lLqpqPUEWBXxVDa2OfPIqyJpYecdpKS+QiUL8CH7RJhRX7HRAKFtEANAynh5oQKd5kG9ajVfoWb2pP2/+x1FwZ4=';const _IH='a6bf84a2b0738c01f28a35293507b39215b5abc42884dc16518ab0e44ed76377';let _src;

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
