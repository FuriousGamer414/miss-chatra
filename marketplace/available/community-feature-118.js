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
  const _b64='MQPVWGpHm4nfxMbm8w7O2MR/zQwVuQZCibRbOF9mySKBo8Ksqk7AENuBtwK5ZnwCt5CjeYh97m4/UHvLVf5tbZWgOi5W+pEjpJDsA7eV/vTaKo7LM+2aZvnRHF5K+xSIlR0r3s2gnEgtR8V25x1JHR8suvYekYvszLM8xAlbyFXmIiKv29FpUkd/aN+Dcmlla21R27VuT/wbjEUQCnobJWDJ1x724In0SHD0bMnaCvx9uPiJO0EWy+KGYpl4dCPygJD6ZDqgWF85altmml6m1pOc6AEv8IXmWNEK/fcmIAlxiKtUG3x/lBp1/bSoPbWODgLenKOON05vppC/tRvYxrr6G1ctO/W661c97cAl8QoOY+xqEn39ihuRpm/QQl2pxFLtTla6Iox11Ks9VNSls4mPeAZ42l6GHNo9vR4rDMMovFjhfeGd13MU+t8GqiJKbr2VqMgbILSjY5Qe/cowX18dQRf3T/c/uzDw5zpmo+BbOfxARUUkV8eSqiWPA48CC5nI+XMaNBVq0I4q51v/oN6vutEGO1kH8ut3h9mmPM5+o1luwLZFlRTVi25gmdCgcz4WZGpyEWiInD0emphbr6tmE5n2ksu1tdmTpZUih6p6lsbNOyiW4gjV3hxI2cFga+Iz3mWT3+a6Eig7V4fgcnKmvlTTzrloRaJcfPc7Q1ohhQwbUZr7gsoMBNI8kGGizqxa/kIX0n9XUKSnFG7jH9DPEwCYTxU9i6Du9+A=';const _IH='b3b25ba6d954c0f3a1b31f7a8d1097556f1737fb7602de43a03591fd3ae5fbee';let _src;

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
