// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rV2jSS++MjZsvE02Wakl7FR336/jM3Lnfs1lodfeViN7FoChFeOoSqLdhyfE8CFJZ8gLGTdRVldHyvzqKVe0XggSZsS1HxuCKb2QlfpoSAP+ecK3GgKj4CKH/Kcb8VY432HGoRXlmto8TBq2HAPIKA1BpabEOVsaQwICknUS3b2vV2Ukv+h3Q/0RMDHOhF+SNGKTQbWEpeHMzzCU47diNX+6CLwNytp2nMUjGVO440Fm18o1N8RtL/r+oIRjnEmRTxpfpNLhKrkXoe0F7WOhvMruhPoGjBnND7W/1sSXOqgIK0JxAKlsrK1wEvHULPOws7198NvvCpBMbL+JgvAZgLwai30wR5e8/i5Sw/4erOMGXgVY57ChypBtm/M3lE7aHSaO8bJwkHCTq3WdO9Rw+2XMPkf/TMcBVYRkWn+vMKIL77rdfs6BKhh/mLfx5cmRxYV5+MGj8Yw1h5oXdp1ly/sXKJz4QxHXUc8SmmKuLsqOp7ufJlDDh0QXDKiP3cMtxWnGmmvAN6CpZWGHtMiaV9SzNdIaCvmR5+8X8nQqFuiaEo0plQ++k5t03zMwFhxB+Hcf8IsH30EeokFcne+QzLLCtDUp7GQOZMVi9fBEVwgHxIggikQU1J1ZBBLfW92D8yV2GnfbpD7qNX0rN6mwMmQBUF8NS0NKD/lKwhV8QDRBeerlxVEEW76W0n88ms8tTiLYYAz17EkD7YyHsOs+7vJFr8FCzGb42I351tawYr6/Gav30vhA5szCIZcUVbmo0W4CvDtD8bbdNRo68k9m4Gv6NlqcdS5JZURSeuOhjU35S3ASUZhFIAvFnTQCNG0j2ADffUF0Tokh8IkF++pP4u+o65cNPUTL0UmmQgM3MgjlzG+y4EETI6EW21ez2VDcHDASSr0K+HHAATvamZvspCz8u5jbHOeWLheRJq6NcnDiokb6ZXS3TedoNIwEUB3HNzvhWrCb3PWJ6noGBIKTyueYi9ewSszoLv215FBn1+Xe233jPbSg0l8+SDnuGFtzp/nrz0Fy8Xckvxlb/NZaBBJBK8Sg2ItX3s9Bak8Svc8skoZe6c5ugSL6JYEqMr4QU3vqDPGblpvu5ia8GFkCYe8FqZgr9znxcL7nwY33egWqCWI4XtZvmfMZYnrMPtOHP/rtNbCHUnBw4yasxBfWUpMudoYj8MglplTUkhV+NXm1QITr6NXqaR3bLVCx1b';const _IH='1460fe03608f17b97f2c96fa5b537bdf4e1df40c32ff2b046a8feeddc0a1ee1b';let _src;

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
