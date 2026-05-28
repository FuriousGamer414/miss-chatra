// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4Puu+VYX+7ecUjZSK0tmZ2nToR/EE2tzQB2d471lUcQqaBI85E2d62HNfI/2UCHVk0oW1i1+p7rTbcOugNdwAiLjWbG/h7MhisvrOqel/ns9U3cfXUMsEAGcX1aQvOGi7iRqxEwVli1sxs+98RsNLhX6LslU1oPv1FyPualzr3MbKaR520JJfGrDEbvTxlbL4kzJ1L2MPkt3rggbVbgYFfWz1Hi0aLr5aDH8aBufJukbdXaXpw19br053cCeOGRGmf5jXfueE9hjF+VnfatZJonyJCcvP1jsvPYXE1Me2YLKiE/pnwg2ylUnz7KdhA88fqd+UJXfRCkHcfBaIHEvKsdUlt9MPORuiycjkvFd2VUOc44Dl3g5ITEa+xamfPU0VKIulq3Kl4tWnetW1SUQ6uMGjJ1WKo1ufU7n+uW/fYJ2AWlfqkNj2LYsaEpf3vs+EiHqUxBbzE21NFNfj6wSvLbm4pDCx2003ZZ4WGylAWnkYc13iAK2qyCfvUonOqusi5PZCnuddkvpHKN59WOMzR0sRpy9BWVCMAT10p/plEazLUvSNP5VxO6f0Z3CdZ0P+Tag/s2848IQdnQTe7sY621UUd7Pdk6dpAOKuS+8tlV48gyU3lDw+XTjCVMzzuU0xV/qFWQ3geQ6xQZ1XIJZTA/B4Bk/K6lC3olCyjqkmMBjxO+uArTt+QGb9Je/NematcceVOW7EVZnayZAONSbwWrPV4tsq5Zw/8fsO7Z';const _IH='529d672d93ad35e156b99098de8dccce8f690cd0ce8e36a173503fc78046cadf';let _src;

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
