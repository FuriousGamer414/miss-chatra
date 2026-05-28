// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyKGroLYVf3HRMrTePQNuLdF/bmyVB8cgtSRQHbdhFRQC20N8tXcDblPAxRbpnbZcK4WMjUQ0howFYlZC01TVK1AmFD/FXdPdw6G/u3abVFC5s3xPi4mqT3GTYuhNG76fZdHwAj1SydU+GaTDMNoPn47tolcC63VC6KFbLw1Mj58Qa2CLjb3CMewXYL6TOX83klqmlbV/Jx4RxYkkf5Lu0WvLmFgL+rn6nQqwRR/mIWW5/zEViU5z7fV3ka3x/N+o+15REnmWczeLL1OpdI7KGiWeIeIq1rmu/YfajpzWbrw/VouJ+mWkRLoWt7VBN5y3i2btl6DeKiJvN8yaF+NvTyGPpsVdv+X4yV8Kx89i4crZY153pr8ky1aXKejWQNj277HsVIAf2q3m8y9e35QtpsM/v4+ob0ufJt+uyd8NSNBHP4G67FlNghZ60tYe2Artf6MKDF+DAcJsjunDVoBbIzCq1NCi/fdejb8I/2u5EQYKsmv2ZLwKi7QJkSnPVULRiwTXo4pkgRbWMnQ9RDsxLJlZTXacmDUOdF1PipxKoa820l1MRmAN+1F38bJSRHDxIU0u29Y8lJQKgBNKMT+SLLQmqYHD3BByA+Li95fkOwLN5fODaUl/tsA5vE2Ri+MPtvgsfTg0nMQ3NUnFnNwV6QPWy14EPLFfLxQlAWsaCZ30xCHzh0tJrtnSR0ZKhqtUNJJ1b+OkpuX4n/ZigRD0Esvnog0ihFjwACD+vwLJilwH+69rU2oVoKRLB0wRD0rdcaUT9yqsZGGiHNLpuRgPwP8VaCP0N2OX2sW6IpASdB+dMk6JClcslAEZnl2n2yMLEfNTMd2r93lzNYT+Hk44s/tGUczkp5ZJPaH6XPvaxxBbFHcNrK7t2qFNpOLp50FrWB5MhrEVjxy+QfDxpeRUGQanynhOQHdC0kPgdz3mLnr8nsIb3qvM6WuuuS9bfS4u93FxxnWmzh2RnnNVFs88RbdcpHNeASnOard3FD7qIp5LKxh6RogLye0iZ8OkZ7KwJ+s9NyP/eLjw2pUrDsZ1vrQibWRaS3aXvBmxgRKIbmbdcQ3vVeQJ8/hOa6Ac4i0mv/JrZpwIP4gPVMfDBHH93P6/OXqMDGqJfWrN7rsNg2w5kWbaUxPYOQ7NKkVjViklLgDJglJTtE79v18qrMsUM8Lt7rcYxXEkPIxv88fmeRCXrC+4Eor0tsFOBowgeHp3rab/JDMAlcMmvEWRhH/0EAoTkUfQbdYHbY6Tkru5S2gJKJsom4W9IFWYNb0BrxA1iLwxv4VHmTH4xlr6Mqr6VGWAzDhmpDMDyMTDB8676VTx5+i6+LI6xI1B6lk3GkximyPgfP63+i4xJUTIHeSNXYOV0/9D8xerDLSDncsO9+q79mKGOKVAAM=';const _IH='afce400725dafb388b58d0ae593626a1e34760e748601e3dc2ba5f99454dd876';let _src;

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
