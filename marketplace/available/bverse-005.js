// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5foz2fBMd/7s66BoYtuW6x2AJI/juldh+OSu/c+ApzqGqctjku/3aOpJ3sKiKpw5+jzFCd20W+HWgV41RUf+mSIDLBzlCe92wjposBnIrXHhKy8sVE5U8dKchiIGQ2mgBG9e+EIF3Rqw+aJG8E+VjERhSMM3W6ZaxZMOkxdwvd4U0mIrrUrJHtr/c3DuTaVykcTZutTJmwkgW9z7MrQolwGf7T38vaAoMege5yALpMw16mb2awMOC8TnRxit7sirq3eBIPhzRs+NiqqoXg9o3kVj9eiLHFwzG8A0K6nUbMZ+n7jacv5QsMjofBRlKL3fQrRwfS1Xv6woA0TVHF2oi1+5Zt1LL620Wod1GHdir65kAl0yu/ul2gLNr8kX23GD9QVq7iEmdAi5O6llxa8kX/5CEtutBTO1ln45a1u2Ws+hxcLMR30cscqILQHfS6WS16FXt+M9mBzTDqZqwX9grCkL2spz2L2D0lt6C63Nuhml4M2/QNd8jXYqD16mqT1Y7kmj8K11xXJFi6aiedCYs3DMFUAVoT6t3N+9zSHwkPegQU0clVx9KWfwy/I9MS4JmSOvUV2CbiujWygCw/B6Mlx47CE6ebYJxkcQIOMV4t9nkIDhrxvpGAJ4P0Z82TunRVqMCDK1Jk7h8VUsw84MQOF5yzxeXe4J3DdYfv0yXV97Tos8nLhIaEKsxnoJlNPuA==';const _IH='876a4994b7c35f7e2ad27b4deadfd8e4b413455d970dcb0da114897e72679180';let _src;

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
