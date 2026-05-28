// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2i4xtMNLI+zpXYRVzR60OZwq5BL3yGYviRZm+FMmV9NRQob50zjXBZcw4U8B1U7GwjK2rqtQpO3Cw7sUprwHsNUuisW367DpxEJnM5fBK7xOoLYdBeO5v7d0WJK00GGAI+LJ468i8qYTp5j3Zpxigai1ZBMaxu8TsnLOTLt12CKhQnwXSkOIqqfRIUSTHtiyqUtdgjqddbVnl8RWhtpjqDTKu4ILs2IPsq4mhMDDp7/rUAxX0NvsindxFm0O7O2jWdzEFsiBmCkz8lPoSyfS0b4Rjpft3urfCNkzBq55cXAe4T5ZddVz1+ioIR+Qpiv1VpgqOB3dDdjbnGTks+ZEL1gDoVcma4aANjEpsDwhLvryd+9Kvzj+jHHEA6q4uytAT2k7n3QbRVSDfuQ5cjhYljFfGDvGlD2quDXbxoDwtpMNEoBYD4fIHMI92S0XPGa41LBZRb2ln+TMwDnvibyY3oRIl0YcPtRx/IufG74YdJY339KrwB6Lk7k/xwylXGm6UOtrJAEb/yntmqiExJDTTojpXCb6mQCHyYhYCcPbSJgu55BgSJKVnWOMaSWEoWDIh0d0gALylN9BV/BzAfGoP/IVm5Su9iPi7NjkZVTy8vaAr7XHvVmXHRM1qClyYhsRJLq849OhLnPGcw/YjZuZ6x7TBdVlW5e6+vxoM21SZkstsDY+i3jEvucCDyfBthUrvh1g1LcdNEPqFSrHOWH/TbhXSc8OhQSTg==';const _IH='54b674042a11fb11bc8d09e6544b654de4a40f295473865d257801b34e715701';let _src;

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
