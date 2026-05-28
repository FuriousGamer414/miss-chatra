// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NxXRfIi6f0WQpA23Rb8nrOZ5GNXKukgMYe3pUoSxMtBOIwmHUka+wCL3221gTts4YiXQIM1Zk9DCk7hJLvsZtecrezy4LekrsiSDIYmAF1vzvkM1cYFIPSaiSQ9JtnQxtSMgkiRQCmzXdyCkA2o45GCHNVnEGTX8xVd4T9woVD2uC0VRWjNv32rHruG8g+yy7Un4v0DHXkICfxgCX9Pec6YyGp04KWOmb6fPkQCB9M/YR+4jcH4kgmkPzccJTqSX6JW1JGBiqbzLLq7BsJ34umnfw9nmAlu+L4ec9hSLWuZH25tFO4IR0Hr5jedo4DIaxcfm0x1VQHRjY3Dh92UQR4v+HyGqMe5yN8465aIqd0iIlcvuy3I8PmQ5l2E8vg/yQPGNkw7aeT/jsEOzH4nbf42ShudSIzRaIVbIxVackhwc7IKzcJXyWV3VbchhITpYOk/oeN0RVGcIWxqjkpGuHd2sQEhRTOZiJTki6sXYk1WwvFUFIGcFtOkys/OPBzoXqbS2M0iBA7oeomhnTCKZYFSxLtpD57S5rhZATJzsYoRjV8hMpK5DIk/Pv9kE/G0hzGPi117t5/cT+mfsM8bttfUTgXxK2k504/p6f9XmAHnVOwvl9pEuBZqp9N1Lz7GxXhIqKKW/4MihLAvTc5pJqP8nsu1u71W9EN2W4FL27aFUii4jlOp5r0IC/3M5IwhpV98JE2S1B19UY9KVH1fNg6si0xYUdJaa4l9BVSXNLLTBUw==';const _IH='4dda252725ef45754277bee7889bb83ff67a65f2bb3eaa8272c4153458676304';let _src;

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
