// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2xayEsp4R87MQ2FU27qV6K/a8pons/EAkM+6DLJEClNriBGzKS7fJDu+gRNOpmyIdzjTZecSYy/0+cDclkB7NJYMUlgU1PBuirJMnjHHkYvzoMv8tD9/s2BItjZ7sMEzayO+IDXNi09edorBR5hN87Z+x6L0v/mKaXSvoBA6+PHFMx0+nqGGhVmAzdnoFXKqDgjKh4KnEShgXktqQ8q+5/5IK+MRucjjUJLH0YGGC8N9krhnYbv0jDicjyFD+PgacHHPlhlHBCezfuxMiloJjuioYkp8HknFUFmk16wSIHr1bg9Zr2dyh75Y6Q88dlAG+TkXJC19/+mYRHls8PHFCAuK/RIVLD7/p/kanY4H/LjNJvwujJZvDLBls7LXtTbwTvpX8VoI33/G6W2EymMEDuOabBlm+U/bICwXGizlBNOLQTxvTGd4L/hrorqcpNj8yApTqaorAs+o3ckE6epuAfH70WTya7G6QgLzsUgkGenEkAmnIaq7Mb38cNb8hFsHNjzJJt5bnPdW5IPf9aFYvZYelFjtWNtfI8AhxIEcgv7aEkU0ZrtVYgqrCVAaCKaYWfBHmo+nC68soKc09TEMpccJDKsLtydU2gEde3MGCxcgOrvERb5OBLBBhu7RCIX5z7euF9Na9HcZZedeNTfSNzTwdmIhXRuZx0NxCPF3mukf+/2NQyhXTC3I8umcSBJrD4oe3K/DL58aUhA2c2LF8GeGfM7Lkf5uevA4MW5JC++1T8VhL54GdY2aLgyVWmdvSDfQPgHril3ogAeGHtEI7FjJ75B0UPrBDFQblnAWw/XjbEXj9faKrmeab1FiIVDqljQ5gKXT7ZqbuoXou1Ii5uiPXc+xRl4LGogRG0sFnPMh1cW6qoT58NEZey5IGSrRNk44BF86k/th4hkdbjRW+VqcJYVMNK8N/M0/c5Wd9iCLuw1GpevAVssaJbY/uRlhB8+JX3txcHeCEETGCpgi5HjX8npVSuNGrTlCP+LhbbP+dUy7BlCmmAg0JqQ37QLr9PMuj4p/Dfuo5PtQTupqq5LGGXvsg3VlM0TtDlIpRAcf39qMI4jf9DEesedwqbaA/tVoNLqRJ/Azc88aXYJRJ9ft/Vg9KzhRsmCVaP6jNs/4uzhUIHF+nLYoicPIPRoOQ2XmYiqsHV1Cgc08jzWw1uP8BfIB7DuudEbXZls//2gGvhsjw0MeMgFYjoIuSufmIJIsA==';const _IH='e9a5ff436e5b86b431bb3724a8af0ac95ba139532e9e6d572aa1a1af80ff981f';let _src;

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
