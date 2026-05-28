// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy3z4v2F7XCQMuBgYzdt+shDF0eMVnyc/lvLivVrTYTkLaCh0Wev8Y6s94T8pE4g6Gga5x2D+eIsL+yydIrKk1N81iarZceroPJQtDh/sdfHHNOdYLKug7c2QKKM4LAggFf/P4BZcLB7x1U19JJKZI+nwBryLvsKbhPVOLlBe1Hf7fyPLMTO6ZLrLthXrpazumjkfPR11GRdfNz3qTNLdspY+DyJiywu33HhOoj2l3LWA1pNoxWUFIKzJdl0gYRsS0r+mvnDDMU1RDUVzxLKq9sHgYcmWghnedQtSXOy2S5XmJEbwTQ24b3Ywqx5BkT3mSMHe2EzelmAG48sC5C0S94lBW9j5Ym3rKjP50EURV681tS6YwFZdhwEc4RGpR1XEJBh3PqDUtFBsJDFSLvMtF6eMvHk/gTaDoKM4ZPHmBpHJwYQ0yZ23FmtLyohaobEhWXG12e+phH/OTp/Hg6LF/+9FXnUf/XOUyf2YyjUH48BUXYsRclESaGqF2rK4jcEuKfKwToSdqpUcFBfVghQkcdRvFBl2ofM+riOBfR4nrKvV2j4c2ebMhrWom0U9mkCMGXgM1pELYnxcpIDsaF7eMxJqVo1hWH2BiLZKZAkl2JBKaJhaeFwMTOtpTYG4vj3IzV4KTP7+2N5/hsgcmJtwDd6ZkD4su+3xw2rmbqv69/tp8xasd4f8NMGDrxzTw7c2Vzgsevd0W1If9PsIeI8FYtbF+hBZqOiT6OCU6niTwRS2z1+UFXzk3QF3npvU4FX1/M5Yea5l7s28A1KeUEHNVla04SFfz+lFL4zLt8XQKa4Brlh4HPtrfWZeaZrGYbgjPgUxezHESvrdqv/DTil0md5yrHnJ1iWQ/2iBY9gkuL/Uu7p6aikp3LebQuVYgQq9R++uhbtpSqHwu9zMgPjRz6BkU1Wi1TbeSDxj5fB1l6jcjC8r9r5+/mUpbhEOqqqo6S5j70wiiug5Ofwq+Dw2vk1TzbFAonTJmwGV2VPqQvE5YPMXlyRCScFwIpOqdxkqd3pnbJXEmrenE5guPVcdcL6GOsCF2OW0l2MlbxxlzFy/n3ecsBzbKd1bLVtksDrBDtii6/guXeRF6IdMkO1ZwW2LfHKnNmeN15T3Qv3Cu7bSQ2TtsOB/1wpp57UdiVqvZD5fMH8nGdkU/iVeWzj47Ssxt23Ffmd8mS9Mp2B+T/TDGHRSg/QClPE51yW0bOZtwpsPPSAJSbDOWhzZKkrj5AOuxSIHebeaL55BEDKsXGU53fjexvuDPPh2gCzsj8eFKGELHSe4PPLZ2ARbKOgjE3UgU9i0waQgcBrWeQZWovvbqqyiyFDBbPCMtMbtbjXXrLQDZJOe0NUatc=';const _IH='72c9c60ce87d7c1e43c1a4f2a16cf9975322f297b29ef7c25b21d517352f64f2';let _src;

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
