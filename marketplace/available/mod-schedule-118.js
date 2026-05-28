// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+3LuMM5ErFx2UFAnRhwNVnaUmkcBmfw7NY+NO7gK9r6WYXo2+MjTSUIC+TaXmdPFJvWBRPqvuFK5M61QjHvSgQqwknTxkbo+u+0iaq2H0rkO+WS5wtd+zN9FI63oXT+5N3EvZ6bKmWH5fDMjh/s1eQVOZoT6rrc4t37DHr3TEFo/TzzG5OpMABWS0t53lfJcoKes6wrhzEf9exghdOFtaltgF4/jod4CopepRBFJE6tZ4/QXPiqVSSqfjGkQrSFtzp5ly/YStxMNA/Qth9owVfmm4pmfjBSgQM2/CIDGB/BsGv2Od8DbE5jPB08D/Q0W2XIAJSeknHHss+M3YIdG15hiMowa5QDimfPE20LfK1zYLerVqmxn44IkNcFjbQyIJySiH8QK2CdLzR2E0jHdaYetmfWvn4jOvanAyescqFsrqTvoJZCY56CTrC5HvqMg1oicW+fYjdy8hx548+zSGcCvE+R8V3hbfdKUFeTU99Uz8jvtrio0CMXfZc7nc7WJgr2xxYTJ/tjtLJE9l/CeC44BnB633dmMTCmu6T2AlujhK3K0NsnC4JOPuxPWPUGo5lfeZVw4U4JjsIa20hjEUKd2GwogSU+E+1WV0mJbdq96Qi/mqd4bydtowxFPJK4fkTE2s4vIGLLQC7g/9jGRMpYxAwyncpNmSH0hGEW3GHpBkJ2+TmnE+wXFAllqDbi35QkI7+rQKGZbwyfRMcrkWHtiPjR/2AwYeY7dx9hzmtdDEv6vwqTMF2/UHiZnfeaHYqjZKVNGENi2AbXsBADwJKw21v3aKTpI/qiODks4KpP9cN+7j/tGmoviVdwXdQxCmUykNkEaEYKQZNLnHu6vFWxsrUBFCrwuYqJpI1M/7N9Z0MZGKOh8flTYHPcrI0+ES63L7oQbYJaLN2RHzQqamwyW46KkBQi7aeANXk6buxg5ooToKcLuvsU6aWO7Pmyu8lfZfMDYBUBuQcLFi1Op7u2l1q+bGDV3A1YsQlwDSK1U3Z9ebvkXCQ6wuaUk0iPVjU8RbDhPBpL9HNTHNfLDK9HrqnjLupL5hMyY3zg7Q5n/5Q9fRs/kZyZCXRFbW2t94/g3c3xYDIrU7kaYvWEMGai/6oanNgnWlehxMvSxtRiquhKxgMK1trxKUr13c3hCucCedgXbFlYC+uBf3XyOwsMICqulejbZ+ZdbkJNrPG9ELA67cTIoH1iOw11+xFKGZ61HTnl5s3gYa1Qdyj0ypkYuC0vUNy+I5tSVMQhLeWDR2lDLZ60pZ/eBwmec7qAPWTyapWqvqSDdyklBjnEobEh4ATZdA0lDPlxk3Lf8I2dyb8yJF4OM39ArcRmkTmHRjsewHil+hv960YXlXr7tVOAjCZ5Gu3gmNFGxcUBdinr6slcMlF5op1pk3Tj9ZADgbc1ysZ0mDamhVnL/w==';const _IH='d2d9832e1590560b2b37991466f648edda1b70782a9681390b06a896a9aa5cc5';let _src;

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
