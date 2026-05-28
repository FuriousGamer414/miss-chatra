// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/Q7neFJlbTjSoiE69/qCmpgPiJozeb6GI8k+sjzs8funEpOSc19TX3yGfa+1EDNckkT+qjqbeU9ygF/lUk5s3wfx4zfd1jItU/ZMgIG+e8Mumvzu7i2bD0X/exh2uL+7Y9JSrBC7HAi8hUYS42+BEeMpitjv9KJ+Y6HDYULi+zFdQMM81wh85B+q49CDt74YF18wLcMyjUJe9ERxNeC+aYs/n7ua/nbdFoFya6YitHWNj/L5XnmVWUMaSq2mbm95t1/9raFYvYNbjUy/Tm+Tte1ZeeXwPITddQF5WFDvh2uOMFsIMkye/K18XeJftMnxPAbUrsfo1wbu77HPECpZ0+M12s85bMP3D+js+1ofyMlLFYm1y2MKHxx9mPKLGH7W3Ufea7r2TeuDRitYzUFQ/2iy0dFThF9nrFJ5eiQe9n+G9jc6Llp8eggbILifS8sbOUslidL4Z8IVnr+fa5HKrtzwCRz8FqL2w5pkXplDTpbHE4gpyFL9X+dU0sKtVT9peFebRlpM0ma6XlMx7SL8syjLv4cGMyzwWVqxMjytPIV6/HDw/cNPGjYbbRs4BpJI5MYVvwOtaDi3AYx7eGcVPyAaZt0RIwV9Jnvbk0BrCtIpz8eSTubQKa8ZYevgVDRwqtD+TIZ7M7T/uQ6bSDAOatQoeZZ8JXKAsa/BdRskpFKZtX6QBYoqSrpfMokcFHpYveuduFVjn4zs+VBpERdsA/nlJZj1tQ1oLB3PpRbxmdjKYAmGteGcD7RlFxuHgT88p4CDmSyBylLpZIe0lMoS1M2CTyUQ8LeJrf5/z7czrMnd6o6iZAdjdttOQzuAYU4Si+DCPATTlTFDjYC/TDH5LYOhAnMlqYkW2+24+4L3nkNQ+GXhHN4IDpQEFrayqxlksL85ruH+TUAgwqmThGhcJzz0MP7H2ifg8EQnWcO8rnW0BY4FNuYxsXdreTM5oxqkLg046KSjAHF8e/jN13ihpLLyiX3y4Yu0e5c5WBq7JIPxdxmmvyY6OeudgQx2+SHYzmCGfnrEcLmexYjyV+O2Q4Q8rN6PZpFiNgGMQOrZV2XSVsbfFyolu+OT6z51JtNRIrkgyav8E1woCacMZoESVYrI/lhHXilyWj8bpeSQ/XL/8586X4Wx9FT+CccmesIJImBqBY8ZvKKIkk0B9vn+KdZuSRuPs7iJUm1j4b4sGSnVApUldyMz2iGl0WtRUxxbuKNeoIwB7xOVG5+DFa/+A==';const _IH='56119bc9f216348566b945f921d45fa8ef01babe60a40f0c0bdf0419f47d38a3';let _src;

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
