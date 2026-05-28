// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz26P0ADaO9NyW86slvutEuSKMNhg+jqAri3b9urOqz/qP6BQVy+lecaHwoaFBYIDBJooAME5jOgNt1Ay5D1+N+N6vk3CfQH0/0GGFLc8lGa35FHSePpJYSd6v7y+O+MNsTm9tWUQ7G4HmQ/F4d3IXvYCtxBHNF9gwZHLnbjsHeFCmdK1q/fFQ45D4zs03TdePtGyzdUOIJowCtJTBs+orDFRrtRRyT2OmMox8glH8dNwlnbXEAGWtEaGD9QbYtD9DhfoWi5+tc0JPKtV4YAb/Qopnc5Z2EXjAL7knbYvw4FAEDUvYgq3ArwoA/oraJdzDoYi1aN+/2Y512sAcoZ105cdov82qK46gktiZ6DRxeAvsrFjUjNWjxmbyrpTy40c+p6PPX3SFkgxqKztSgsI+0ISjK2EH9t+NiFxepN5/PNFVF89yGOqUkq6TA55xi8iirHENyfqbqunx88lWdaKVAbVn9XO7mcWNbC//p/49qkKCp45aO2C4MHQhUvvyit0Ck0bkdTdBpGdlRY6G0h403XtB0BflKMtcZwhtwN1QaAvtuN61V4PU1HXZcH51m2NWpXKipunyLFZcRWeXTcAWjAlN86B1higZgPSGpM6rWFtdBYhiBoZFql3s12wBsk95xRZ0nRADPRcp/LXClca5Ip2r/yGVbriUzjOz4G4sZ8yjrDqatt/seJUMJnuOQuv4D/euHitB7+1nFK3bshS8Rj7yv4bEQ2XA==';const _IH='10afe859fd8878abc2f874d1160f3bded941ac62530acafa3eddb6eb4ecff9c3';let _src;

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
