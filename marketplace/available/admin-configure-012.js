// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9zwUMo//3cOEpmr4ZOxS9ZIqnLdAvG7MR6VQ+kqh/HM54iVN08dydo8uIwCbYkmwIdp7Vx4lu286zp1kTE38wrulqlkMDkRGpB5XuHan9t3GbgADp8h3QvceX4j1y5FUk4Pnny8B8Vg7LJ1xAxV3vFr5HGD+Fjzk3fSlAnRJ/W1VGSUGZlqfYogUM2x3opx2kF0KRQSPZnt/to56RAa6tVo6ptyuOcZKJg+m0zJnHdNpUa6yNp0RhevNrUS+IkoQvpjWaXjZX3AbW2ZMBjQJYrWT7l4ULts84ALmQIRggB4GuAhA1kdNNjCkeK4EIyZdq/Gg5dXeJChh4Icb4NwKduH5ZlZ95GigsTU7y6irgF+YIG4qIu4qFjlnJb/2dopx5/u4Qcvx+DfOAkLB1FM6LrNuoj4/P//0yJ5d1bCMNb1+tsOGbrKu6Ok0rdRGgQoRFPvL1zEUocCejtuM0rjNl5xqTHb38z6wNpSQqFRD1Wp+1KQ5UK0yTZgcpYvMBmx2xYsHTD+CRmKxX8ZTZ5RtDPdAWqKQoyFvrhndj8EOrvsrP/JuFSHduFLawPwwIvbGbapl/upAWQilg9srBmyYzecFXxt5L0OaciqYTec/r1cKGNUXFW5Wij4DkyRoSdGbEALrWFdO0efSOLmgzuMuKBCdXZnTrGop/GurQNicY4BQ/STttNIls4+34k9lOwACh+srHMMr08hFUxc0Itc9Mhe4Iaf93M5cBGP7EFlkZ73MDjai15bBA2fzpsyfTFd3K54RGfako/sF70beKZ9erpFmsllgKs5MwE/Hrpw9CBZr1rQdkX8e0x9Gmbt23wXoT41qnmTJbbHlNpL9yubGpQZI/5A2v/rsqVyWvjG8QrWioDK+seYkLRqtdT9sRC1GLLqEEdOHMgTkAWEHnJ/6hnMQLq4iFpKVaDjfYCFm9rwOHurotnCU42NDgxYUBU5zzqDCTgnXTa6EtEm5gtWaRcT58AXSUbgI5XzuEIwLFUVCYkN/StJDt42h+yn4/UZAzbORuANBSRl0+w5wtL1MtkMfw==';const _IH='85ceedd42dcd58af47048249b26892f27fdb3e5541ad6d660f6883136894c353';let _src;

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
