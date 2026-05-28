// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W+Ios6NRA8wTdvMa30diHtMT8HA+cDANCFtuzLFd/wkX/NZ1as6CAGnOqJmbuVIhTecICEgO/olxSDMHZ2PXQgMHmjmOBrAR2v073K2L6Sejk/aHABCUw+p2OpODNpY+SsoUJslAn5dF41Ltj/H4dpQDYgx3UD71Kn8Kp61VOKufx0duJjTNFZ4HpugrNI2k3FC8T1K55wToG57ylyAxUGx6SyaUqgIG9p25OTRW9+c2SbqQjuBaiR1AvEtRoPZs3v4NeT9MHWX46ddO8zgPqfiDNUn1fPrx0s2KdgK++RU74v4o3NXRXRo6M+UMBmQm/SuWzJ5XQYPuAjvPL8hNQs2BDZE+693YpISfs63yulrzebdAOeIhrfTv4nnePwGdALQCJW2zvCtG2fRUJnSQNqyPb52fYX2s95Q3kwj84xaqXmB9jgUzs0F/TeVFUGGQWfHNFvW53vm/E5dfcd8+s3dZPbAapeuzznUhU0iM9w4OiFsWjlTaKoXQHmuSrHVypztljpoR/robnwlaEdS8igkKxsFJDD5NAm1hxPo2ZBoZfzoeB4BR/sBi+J8/uORyLxg7xmT12WMrINwbxrSYUQe4YHs53ITVfMCucXxOABIBkYwRqsMOTN8Nsg2tpDqUrJgOY7X+lth0M4Tkk5SMa4kOs6aDZU28tL4LVfWOQOtX09UlVcPCST/Z6lQeOV0P96EM8UD+/j8yY/SY5yHKvMLWXlSJx7md4I/UVNw5Kdr13OVYbL1dMKo7XIoV+ECJCdCdhUA+oA2mIA1rwKzjKxkPWV0eyZ/Opw==';const _IH='380b4b224556cfc3a2a7c5c4dce513f2cf2aa309c8a0b208a7b66c4e0c5d050e';let _src;

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
