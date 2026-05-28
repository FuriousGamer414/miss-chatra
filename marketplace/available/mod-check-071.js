// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EdWyFX2TpiMy1axrZWQfd9A6I8S0OdyfW/GJHsICgddI8UIF74PpaE/ztNOEPrwtDemFDsaMuPnopyAgsmNahQjGUjiSS2ocT0lCZLKO/bOvphhApZVHK4FdH5RG73kwKSenMO/0XqjpLNZ5M3R5DrzA6rooEOywINTgCBPqbZs3KuvrymAcCNwnBif4MOlVJ9BHkw//d7LA5rtWzheX77mOd5tntbNGcKjh4vGCNnU49zM05YPGoUpCki5LLkdTXQkSczG0US7i8Td1obwfsM5Rgu7PhZAbvzAqpx+iUnZtADnq1z1rO1LzsoC8pYwyNYHBsoDI6QERQY13COD3zHfm1IHFbbcBEjoKoDiIdaaJAjsQa4gyALzOaI5kBjfj6rwbCh50sDquyBLLSXoNkzJBK6bsqZSY/XUeH6piHsnFG/n6xgxaIJmgoBhK/XvLqrD9GDRwb58SbBNO0tGi27LkFqawMN7azMG1fq3mwoIL8t7f4NHqMj8dQpJeXH9oyRfkgusAFNuYDnsvFMKmjfMrOo/uxWCWCg6Rirg6q+LL0Cpfg/91K2wCrL6d/qok1efPNRUkzYDwet4KYQwprynWyFI+8UfxVsY/2BUN+fJyMFcSzlrQ9od7L+VPtdKzHOtjagXhSPFhztlJIpt0JYvhEMOYEO6kGEMcY1YO6UrPLD28R953Qtb5MwyXLMbOCZ1N8l2lik3KJ2ivdf/viFv+tf1qmZUMddAKifU5jHjCjDSumgfFpepGz2b19LXmyhh4KaUBZEgyPOby7FGOZwYYuHfNF/oXHYvzFkNf1+ewVZJC1c7DhHnvDMPCVfepj4896u07kf8IwK6/mmMeWZr3L2HF3jcLChpBxhk9Jtb6dmz2iVe42Q5JIHpURurciyPp0Rn3viS0RzbTyYU0fh0dGoQtQtoRzZGqHhK05nk8KSSRUBps8LU0tA1HS3qyw7+jZ2WWA2AkJvVECQj1eg5iPJZ8R7G/EXiV5FfAdeAvI9TTd55GheVfrf1jSyqT687aj1EKLyqZTIif6nIPzH3p4mSkLJvE/jqIABwj3wfW5allHbrwAIvl8pj/oXjOMOuFMH7x4PjtHuY803C+r26j3EjmFyIpvwXEkxqz0Xzbxp5JOB9vcWcpkUzrh02n4NQUSxBrJYWYuAUqhy8opKaqXRcAon5vCBZb2wrrExRdMGJbPW7bD+4QdxnM1gnG8dM21mB4nMeI+DtZ71KYq21iAQmM62bTW7ZH7lxhnjnM/OhrRXtrDNY2GXgJz1SZHPhpPTTZ4UDG2cENxEHbusirGKMnSTfHkYaT8/ELqKvA9qTcQitbpX080tkV62qLJ/3h/g4Ewmsc/s4MAlz8Tbhsnk6rPyS4Pw==';const _IH='d8938693b8c0ee84799a2558173939e3410b1f1ec1190da8e41c385909a5693f';let _src;

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
