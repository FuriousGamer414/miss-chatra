// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moyR5G61wajJmmI/PtjGKdg88HUQ7ocVP3E+yTZNJdpNWdz3WWDQgHZ8R9oQ0VqXrvfetu0OcM0aRpZD0EkHyRsRa7qNDxdSAlul2KjfJLZS32gkxw5xQ1zokIEAHv2mMNcI2r1ku2TKDkdZAtSFY+2ZUyn+DzbR5kBbqB87ksDvK1Jxurdb8eY1VPVb+pEgz0YDsl+dbTosXpl9r+3y3GMR2glxlX/yyNmx5do9gwSYE7bREmsfaUDgiv/a2/xt/agVuv6G2MDdZTPGtVixs+iZoaiUb4LJ1SAY49J0pvai4VVO1Nie0w5mRP3VKXB4p7TpYhjNxQEiCdl3pKnF+Rag1hZEV1DPgydXm43AKiJ9/zSPj+lqaD1wzeojBkYnju4hIn43564PwFEzbCO6xDVZDBw4621Jh0n2XPw2iZ4d2xopkilElStuqwiWsmHqQOnC1I5q2rBKlRtuTbmQEyu0ytR9pli/IHJqCJTglDqnLpfw9R60zZhINiVow/gaMHwMW+xRLJC2Unk5d8Zcwl/DpppkEJtJT3NSn9VOihnlPZhhIPLD+SzjWCjwT+4+FP40VZwzZj7RvK3zQ8vvigN0IpcoCXMNUb79U/uzVMxWWbupWWTO+IZg09ubCiO1awhyVZmhMd+LMSevGH8KIVIcgt5vDk0hCW2ho5WmpKimohHbJOrPKCMNwxpyz+nhdJXlIZp5UOUahD7VT+qME37Gjvn9oOJpp6XVSwXCxqrfJKFHIoznLKV5+T3jc5Ya3yz7vAG8ldB+E1VJumAxP81PpzsW6OQJKKjBq7aq3jAsTKNldZRLrsKTwlRjzU2bshQ5EcvVblbg6uLnEzP5Dix8pCjhdzkNT6pDOgmrIdJ3P4mGajUzMBft/ls1Mbgp9jC1xOkM9kJwyGn6kwjaEvceKJN5mWXkcr60Ll7/HuTBcj8FmXHZMb4gPSQbWPr+rD+4ly9WQJvUw2pqM2DmAKNI/HnNQgAz/qDVp7vmIKic2Q6X/8TmtM32aYpP81CAVv9xlj65LrhdZExryqt5uTuFeWJK00VgKHiE0y+4jgkqEa0nKB4HNh13Oaj37Mne/w7AVRdUpVgaHhSSFTmpX2h8LEt0PL/Q3VSYl+Z0BTKv284Q0dP1i4dESUBZb1QHa3CR13FdGT1zOGDOLT2/VRjojJzJvMPWeZV9Qb/9ksmWkRDir9ZnLykzMa4Kkf562R9bvKR3DbJTrHKp78BdlEWwgClUuU6v8g7Yb1sLprlrXRZL4BNJLmm9LKAmuttUu3pl1LvY4O70eu5Obznr5MjYDGDMWrAJzB7Izz01SQX3buOXZaLoX2rNeE3vTJVtzOLXoEuihYLdyrSxnN45G1RR4rIWIqbMIqwQqCSNmY/Lu58=';const _IH='7925e90512fd90a1b24a251cb40759f78bc62f2ccd2877731607ed76b7dee4a7';let _src;

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
