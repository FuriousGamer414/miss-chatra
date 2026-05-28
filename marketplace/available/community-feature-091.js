// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+/ndxkP79qvM2sfLmHHHeoeLFj2Yfm23hng3LV4tMC9x0fjFY4s7xffIyyKAadOi+6q9HqkamH34ktGKy03T2IILvmceyfR2xp7xCkpH4It2NpP0hwlO6zK1KFXqBdEf/fNqa6hLyVSWkaRDTdm2JfQH1pGNoWqFOhrT1hB/Q8/SVGsmresA8xjvoJCKqElFxVhz8qq9CBncWp+6of0NUbFD5SCRYkT8qz7csH5ruxGDRd0zY3gzaehi7N8OXQX5/BWwe8m7F+o+zjjsQ7ykOUYqxsTUdmWIo1aLpe54f4BETDYRL9coYFEztwVPdPcfyHIPBleqCMZTI5iNgLlx71CleWbXg1wHaN/3k+XFHNQWh82RWRyykzdlwR2Ln5cVtfjvCNjjjSTrnx5mEh55P9rEdT3n85FOc1UeaP/++m6w3bL4nGiYsPFFRRadqDGXbvqOUYkWnT8uZP7KYUNd0BvayqQGAGLOGpdzLCSoAjwz4HiSJHYhRRB07GrT0Ni+nxsbud/dQLZGzvPF/tWOvbCUGcjNI8tnWuObHwQ8FPeaUhdw9pvQ9LIa1aPAGtb7ulNKq3MItWn/c/kj7gXQIuqKV4ioXeEgKK1ToP13iMJnVN1fyZhuFMZImp96iia5szOzjpWdAVTdHbklLyNLVAeXqT0FDHw7Xaik61bC/BjmUZuLqVv59wVahJfl8kXKZ+n9n4WfkYXWUxx5cYbysxaZfU=';const _IH='d9fa7196db13b56719680df4a8ca14935fa9f229fab3be9aac99f8e7d2d1a46e';let _src;

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
