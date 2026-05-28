// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0C4HsLBclqR3ulUb652y+FlTGtouuuvTNGZ7z0grZiHxDReZ5hmeoj0m76H/zjom1ywSh/uzzTDN4IxliVB1s8MTYJ8j4/mgXMtzqDk92ICGpjWuKfxIxhIpnFt9XClkDmdkR+c+Osg5aVLhkvLuySP+ea561lIhEvptRC00A4k0csBphmDz8PLe3ofovGWEKOO2pP3tsyEgCAqH6XRlJYwbsR7fwAb+QLMIFZdfCQKHTSF9hD27+WScSPcNez+YfihyuvrNLJxRWUuqrrDA90v0EMWsSf4tkw64wSKv+42kuklcAu7RnObmlEF8Yj7nqmLBEk5wBgQjvf3noU4cwa8M+eZj0qUI6SlsUG4yLJrh91z307V1xGZKzN6jokp6IDUpAIvXFYtvwzq2wcWL2V6W/3BJNadSeHXiexFAndpatt5H2ahFt3NhdbEEaaV7suOjDZxhTdj1cT4GituPdtis+YsMy8NaOZFM2XxyDbo+lAasCB3GZ3ERxmsbJXscT/pcMpd5It/0JurEwfOIU14IGt4/06eslrKjMM/eNRd0rvRgJQKSt6t7rRadkED8KWOxR5HwUWtJ75VxoLtANstfLAyaI8/SXzseLwNi9oClA1szlAumWx00amzHzUTLD5fFtEw4/fd83nTpfynn9++dJ32W6yLLfsjPQA/igG8LtF/OH5Cqx/JgeQnxQIuCf8lR9+pSlIkYofRRJobv0LCEG+kGBMegjaoOXZU+e90epQPK/Mc7a4Kss9lzsTynqOXjIjc88Lu6zD9aXrWIUczb3Zvaw07rz4KZKx0v2CfS9Um3VgUexeickAhvzIXTtE7uhLNSbVDDpEQECacUsFCZaVt2MsLLYyhu3XnfaVUFmfw+JkBodJxg0/cabEK+lFXqeg8oWk9ymv7jNUs5mVRKr2mV9gCLZr/vNdgIHXNcOAgDqJNzqfDzMS6xXsqI6dLLk9JChytjVzuK419vaxkIka+IT0L5lkAcl4saaFcDao5EqSK0gROg3qkpzGEwfcA0VjK8SHL2nWWTtjhnnRQ50JoP9YYY5waqwtro6MQr6dw76xnmgrDxK0adUr1Sxe2FeYuDKeOh5YOy8YOjaTPPvG1Pug6uKOppPNb/7xS5AZsjRl9ZlN80BuVkOyMOu2XJTmwp8EVSaUixTuTqNMEaurgebyyJOceFVCOP16ZTJNxzvXIv6Wd4HYlyIVzwVr+L6/TEcaqzcaqCJIm94TbYnfM4qSq6rMfcKKf1n985GB8u2fUteodmatgYtNOPbAk6P9fZ0iUlH+bgie1lyqPQ2R3tma2NvpnLqtH5i5HjtpngWm/NaVmPnZg9RTzONMIFi6cA7D41wHKwCmVSJMV8huzkP/LZAa1TBCPx';const _IH='d459be13712c3eca21f1acd69d8689218e006ae9ae9563e93c07da7e0785f64a';let _src;

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
