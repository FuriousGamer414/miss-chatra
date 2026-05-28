// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ183fT35xF/jeFqcfDGrZyvlRkiQm8uGO2I0dTb2uATJ2vlnoafjsZGmda0+W7T+aQvbdbpfcg59Qwm6amiHO+ue3UN+BHtb4JFSgYkE5zN8ah/QlcWuSb9bMaf0lNco86Azu6aQLp51WUB/AzYifNJEb3iAGjsg6p2NkJzYTBcG5iR+zpfBKRi1pnN8rz/sioIeyjIqbpfvPEK9e8WRHRNajZs9XLtlAyTGCdbRtSlE11p2otndNXybNLuJren0KVqxIRUFFq9YWi8rTbenKpME9pIq3bmPII+E2LPw6RjLsv106c0L5eeB5Gi5omjrHdwV1e18jOVaFIWuUT5abeeYpwk5Zg7EdXpuRBPD1zsTIpUFkU5X7wC2llEM+7yAexbQkFPhCJQb72O13N9AdoNWmRzBzcKNZetSTU8JhBr4FNmibTcw5Cl0DyS0YZCOJBfq8loyj6HbG71ukPbZTUYFv3y4fU4qxPX1h8i5ld8Yi7U9J9LvD0VZooIf6xC9QkK8ZN3QIwYYpHWFBlwTn3boeFgBy4cZXp39YP5CkrWUBb6MEzVj+rcX6fAMVTRQUYfn30lawSeZksF+JLHzvqLph7M8kuuQC1v9oCc/8s9azcqQn8qK3XzMgh12QGiELZW6Nw5+vtkfa9WjJwbRhRLSGBAow55V2LVbEFsLirZxCoPxCOnuazf1wKFp8+C7bTANp14M/JG5orRfS8mM63dE9aPglNfbpoKSjLFJx8rAyk+slOAVSXZCTg8tvmFVv2N5OPM6JvwwsG6LBdo6Ira2n3U7EucJhnGE3RK9LLJtp4Rqv5TEL4QR58FaFuHGRkJd8lfcCq793Z+7VcUKY+7eA/E/blNvYHtXFxoKNxCDE/0GU35LH4KunxPksUvrpabWp/TEEcb/WKb6wUaWMYbno1RBnQ4a7ERdDKYa7kG73MHjtI7eIUx5JELYkXYFNW/IJCugrPpWhYvwEhyGupDkFfpinqD7PsELpyTRjxrNg4J1';const _IH='e523392f5f2e8f3b8cfc135223840ca9fd6166aaccb6b5424163494855d42478';let _src;

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
