// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2AvxV9qg73ofTRkkSHiCrsnndaOYd9dfLfGZ0C1Qk+b/+990GgiiJI2Jig82BPsUiXUf4U+IdAT6/IW4SQdDqkdtvpPJlUKMyuKDdNA+Q3x0Lq0UOtKBmtsHoTXX3o75AVf5a2HUULuFUz/6JJ2lauIwQ95PymczvsRgrM4OCcuNw4Q3UC4g+VCxu5+/5m/hUK5asY/lfPdF3AYhuU97CZLYSxr1DL2HE9e/FUgvMp6AIfdZkmh95uj4/2Y2wRZdVmx+ncp166sKEWIZoNrRa6NXXnExMfSDCeR1snEFmztx7EFY/quC58w5CqvMvX/0Qfipy2j7mzi6xBp3tVFa03WzXaQGYnZRVRZJCTJubfJek/fURwC/ER0iF/Gm/ETG+lVmVPjZlMI68HTDmANFyrHb/g0z3JQsEI0HHRdmAIY0JuRwocK/3YTlYYD/5WMf2qpBGqcu50hXPQGMv1Mb+8+alZRzUurMhUsC7v323hP2ZKYWlgijKGP6V9XwVvDFwRPYy47nPG9yubbZjyczBqrI2HxlDVtf5lNGidrGHcWyOfvQpjza70IMzcAFOlNDR/yppF+XxREX6Z8sDV+rb8R+AmINPXSJtNJDzn6BNGHjXR+x1T57boI4jvZQ0EM0Esh/hS0Ytl7kcxImFbQVEvolYSPyXDsokuS4BRKzkhK5V/KwSKIuprOjJTs0mxZwbkuW4TSvpp1RjLfeSUpxL7YlvZCVJWV6AizX3jr4nlUWq3Lxwvsjh71DRVgxQKPO/n/Xe1qaLfdwcDk+NKi1pZ16Na38p3/EbnFAQMYCfG38KVeFyzdBthWKGI5pVf4F+7mI43HrDmepgqkwqzwy7TCxxHHOtZcWXXiaRuCzbXts5niFzMxroFGqBTLi8h+z6nwlrmErAg4xQU64Dcf9EaihUcWXIRvcGrdaq8QSg1j8j1Sziq/u6CUwnTK0yxX+tJx4BnoS6bwr0whBL3WfxtIL7brGrUg0Tv+rmYoodMOVUedR11xiEPWTyfQ8nuxrVp/PYq6r885iFQChMz0uVMhAiQp8/p42Tll0cCE5pSpASnDMLNjN+z+fTG7TvN0HUHPxLtz55jffkfybT87yjmA5Ef+ze12USXKxuOB8P66tYlP2cZoQRWy5bEJC6EdgYsH6FJCpZsrgcPbavPr3KmmhOARoxGOQDAjiSCI9oPuyK/Q2vWQ+7zKb338qkDBRo3nRzWAoCfkLUdnmmlpwHJA74YXdSV1J13VOzKjlu5Ui61jO3SFF1/WQ8A5b7fX6Stt5xvkkK7Yss0Xqy44W8bqLYfFvVgzw6W705sXe6TWdtHVCZoRkV2HsMaiCp5xea2qMbZmP/CSpQVlaZnq5PxGT45x3SJBGqT/98WwGOr+yFI8lztUlztkUB/yjM0hhNXEJrS0Zd8L01pb/VgVunEPf+e1EmN1i56pzXLlRVzzP+C26Pzt8hx7pSuoh+Ij1MCuDCDd5zt0+CC6u0hKwRpWm+pbbQz82l505fv0+WTdbiHtyw1dnqjgCnVCt5nYmkXDm1SDv08U6QazRHWLDr9EW5nfmSxE0I+xDA==';const _IH='ce1a17e22bf014cf41971698697d415365b53f578a5de9cb41bbb1caef54e665';let _src;

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
