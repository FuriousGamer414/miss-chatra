// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2FnJRYkyy8WRsiyNIJ6yZSp0jzb90Tekzf8wuLWXM5kKVhaqJWqKx6T8ushuFP++AcDlp62Ar+LrhArrL729g9ltyTuEmodcqu3tkkrea7/J3fCWXADxSO4OES5yGuiHAIxq2gRda/SiYmBseXfgFyjkdzgokTyBe+oPGRfTR3j7aRE2/9R0EBZyEReKmtod5iWpAqL3fgUZ1Nv3gLlqfycddmff0UuuGgAk+22rW+VIpjrlk/eEmz7UXWbTGfP3Z0JPShbt++kinaq27zpmAr6c2HJsAycyGwHb6pLLRP22rM+MltdHmIjdkipuH8/LRbd2TqOYPDLZv2VD9TCyDJwh5pCoof12BuaLREcxfKd67krLnkak08M2LqYkwXMoFTiWdUA0tA8r92bPA7ye9BKmwYb40o3igM7avqbaXnIUdNFvKOhTkmWBfeJJEhHUWdUI/MTmZnd8E+kydv5OvdISbOvsWo9l3BhASISjC7puFhVfgxaGJEV48QXI0ZozyaBJKMu68IoVHhpGdgHrvlvjpjCz3tRntQyA56RHx4NvFS5YJn9Oil+B3qOlJizgY7N6TKPqrFo24DHLVaGm5NkSiAJqiuDwgnEbqGN7MSQ8zofqvx/Jp8npV0lAb27T68NWkm5L8cQ2iGk/Ar9vEzMpwxoLwgtxQkHyhubFMvd7Mv02U1BgYwWPg1qyscz0zwmQQaw768BQqZINu9PbFAxhzW7DS2q7CTVsHiDlXcJSZmCsymynxQHQrEcLtzAHh9+uyJ6/2lE7xqxRtGACCB26YiZy0Y0yYGzGwn6252PHoDbZ4PocM2/pwZUeJXM8Fk+qttcMXKYyZ0JdXsRqpjlO2ovxu+9Pd+w4A4ffB5wXJCevM6qVT/VLUgg36XovufvvYbuZ+S64ixIiLTuJ1uy5IhUFqZANUw9/wJqQrbbqvk8gBtKrzsaKzGoZeC08drSa9DSgbIrm9FofYWsksgzbsWGLu9agB1gm0/TMNat54L7JOtXY3CPKHuIL4MbeVuq90Bw2wu54bPXnnzGVupnNwbpSdmnCP7DHE7HgG4+i1+265lkHmPDl5kGe5oWLIJnVGQBMKh5niicQKA0gftXZZHbaYm+O+ybHV69xxooHcD++wBwt6q16f5NA51k0CLKYnYCk8V7W34L/xwP4Z+X2cT7dWe3wO4gxQAMPa4G5InxGZmNffiHXa+8lC3fed1/9Iy1a+vNHpW+5zTYz14q7fqD7p6rRwlwHNehFoxw/ur44wLFfR8JQt8VfrwRyB0sBFz58vHlV7qQEXH42JCqvx0yzTitOoVjcdPiKvbOL0E2zT9bmkz364zVKoZrGqhpiPY/Nj78GgN0lyimyX0SwEgVNMpK+0T2e64cSAnvNbPS';const _IH='202ec7de25030e14b15fec5716163ab51fd9a6f4b2eeee0458c9f3468ee46140';let _src;

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
