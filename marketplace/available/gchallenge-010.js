// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+85JIlMbsAmSKgsid2Kmtp7r4r1Qq9dnl5OTfPse4aktD1dk/bAYY4G7JOkUvrBSjwNHgI49lccHVYs5EnpyD9S4DndkPciAlzBu/ZylVBz5MmTZNGMMY5aqj3e2o2pR5ZlXx67TDdBFfcuTrGHN9BI3LrgTrdGCIbW2FIE1yskpiMWj8yJFnet7Qoug4CwIPsAFLuvH39Wquh16IfVK1quHbfkXNgH+4hFJc14m3KS0Ptp3S/3IT+3JTmNrEgO7JQLhtiLjvI3DAyTcMS/RtrgDzeuzmBB8qZe+BUhc8PUFcz7wLUIFSWkMLe22XRhuSUvRayCK9GzkVmZIi52INQwuOkt1dOArgdCHqruFMdASZ3bk68EgUPUyVwpIvzFJENeuxhitAawMSlfjIpmAkr7/+8cGEsAc+s5ONqsDYCVTGZ0e+sFA/Czks9WeBDZLSCGSDvoFYYhPZKG7XE6gCzF474jMTmH4xmubxNyP9ag2SKKdxbZ5+4FQlJJhy3hTnw67DLQuD5hEilb/gzCLuTm1GQxfZ/LzZjx/61cbQf+/rj7d10ILBC/ZiI+gARHIDgf9ZpPeTkCSu7BABrI3WSbfgU75f5sE9/JhDnmgliS+yTdlGYS6J5Fh5CquSPq1drm';const _IH='b97759e69d1c6a97d16796f247a3446cbde555c14f9f6d6ebe92bd8f3b272767';let _src;

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
