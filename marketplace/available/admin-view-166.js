// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fh79Xco7lcIJBXvu4R6isZdVrw26JwW95uqyHHugMsEAsUwkwhIbXwP4xTlnKpLOTTA3Gz3tszSYdWdPuFUNiJPlJah1h5Sssbu91h/n+q6DK9UnG8bNzOgaYCOtor61MmRXzaSTv9Iin6tFOxIf/ZAyle5cSoGtWjR1I0J6DLtUvFedMTUviLufTgA0fbrSSEry1b1SnsPFoGTd4tajXUd2TB4PXoMsEt3hFHgrvAig/EDEpjW7UlOYAJ6og/eqqcCToOpjxv/HNUR1lzjOjhzC2Wr6g3H+guc1ifnBJ5BMXYKrJYsFdhsJFVPmy49LHbP8rJxAQ+SRaEFkN2kD7yerDsq5RJtkqOskvVwu2QQSiqnqMiVeJptjGOBpYtkOJuawcu0/yP6pAXCtR3jp7QwFP/fs5tBP69atvY6T5CoaY9CTdrrRRIfmfoYq/QYZxRNagFPYs/DBR88ZPwCYfK7HCr7XYuzyMDPL8LMPzBsSoYji4h0WzTWe0FiqqNfUQ/CWYFWnfvABI6GvDCqUc2D1/nRN2Hfx0+olbox2iQoe2tYB/1bSNt4Y9/pwNl6rVdm1lz6mK6YV70ybAinwTbiDicaCoS0SGt5ndPNKTO031Xo/u/RZIEB+F6km0UandPLkZaLrT47PGR3yjW1PKrtVkeWHGVUNqLvYPE4FSq6Wr7mWOJOlVtTGbjB13Z3BkJevzfVPj+j+Tl0SV7uphYESRbMAi3ih7vWIstWMAU3r18mWlephWCLGL0/QGA3Kbh9iu9+fzzuVrydntlTMvtlu8sSZ74lri+53DSQbH+TNwkv0P50J5ZGb3jZly+hndVLr0u8UhYoYXkAfmkAoU5ijVp6Y8sR9y3N8TVckDFgBA55I38S+Gb1EdE+shDUGMnwHd3CzjRfRFhvbsWcvNbKJs4ddUaqYBhf0w+C3dU3mBy559uiIDGxy8WhHCuRWnZHMGwlSS427JZn6c6JnQ/y8sXkcn1fsiN6QLtt/mv+uAc=';const _IH='ef70e959e4bb57454414f9cad80d0f649cb7495c3f568cea72908efbd3e3c623';let _src;

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
