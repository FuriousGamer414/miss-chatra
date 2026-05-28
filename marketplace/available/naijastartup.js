// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQ8b6PAqcbiSSC0/q4ekyEyrLglZnLy9Yktn9+LBrudShQUPjhlYtdublxPT3xMpZZBVSIzpIMfNwWM/voDkYp1QE+0Za3i7kJjEgvb/T7qDNLSKZXzCyDOeSyRSQeRP4a979KVuHR67lCq6nfWDcO5YYfbB4wFiGYa57nuC5qLbtUl+Bzt+BGA12LBmwCo1a5p4Ht47AX+kxksvAU25B3Maz+l5HJHn4yizywfDZPyEJTLF1gAEd6oJGdvh91Cgrjsmin+vaLgbuH59pnaQ+4pB2S+r360Epta1i9DYPQgCbKzEoUVthaAaUU9Nu3xlg9moAy29UqduD5iNlREK73CLlLT1zzMd/Z3a0fjegSRlTnm+ogE0EVNZOHVWY8y4P0HUt+uW/hpAGOpl5DiPtN7lLkHV7HfBwDdxbdexwk8m6Ao1xbVN5/SbKZ7FQsdeN2DoHkG4tVSjh1gtdSRkfsFgiz5zX4AGqkdBByOKOxhU2xhhqFsIKn32Uzyi+2lPa7ZtsZKkbjiC+kPEZcYBLKIDO+BmN94HHcQUL7y508kHQpHa1lNHnT7361Zgldm3fgqjzRxcko4+XT8FA2p+2pLW5y6mavdT3QDIIrqCopsYZmJGnPK2CI15Jss0nP2/RwzjCDeqhvooxzOZVckyVXGFLOMkFHxREPuZvjBIJ+ipkcp9HL1kn2X+M09OKygGclUeaEwtUCZvRPKwtH72dcgqql/5ogKw6KB4nsC/Z6pppWpbMBzzXFAHJsWq+0My6pIdcDSmGlc0JfCxZuL60QfZjVg678Wn7AHvu6ggRtO9s0d6URZTZ0/TglKh2lRzBJzvrzNMRnaA0yeTCS1XCF2J6oxyROeyItWbfTkZlmXv8LDYlwGoMoTARDmemybQIH4VwWz5/x27Ggp3xPm2lwV+obPn+yTK0hPdD4Id418nnEGHEDjjOToiEEYJoHeNGM0X89+QstQZAocmELmF8cTRPvncXNO0fd5/OYHBzXphPwEkCvr3NuD8z4sWJaRP22TFhtsTPEIqOiwYLMHRzzSohNCyRuo5q1sPelZwgcjhluKH8OQRj1Ev5PzmKAbmBJcPjlVuD+U0h8wlpiaj8fkktQOmSAvnFXUWNn2zwBAPAjFCoQxE1hTlQQVMWXYrDQbg+e7+BNHY/sXRs4wz4pyVmm4E47i454k7WHb4S4WCCJSGXAx5UdcBWOUfkZuQ9tIUbqJa';const _IH='f7567147fb52887e4e100980b4546e6f4d8942b43256ad399ad014a9bc885bb7';let _src;

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
