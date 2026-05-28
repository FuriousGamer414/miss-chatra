// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9BHWzCHcQSxURTcB0sw8mrSvvgL44aYFk50TPC5O3eDNpWYuygRkWz/9y00U5Hen2OQ9UwVwwp1Pcl0R/dp01OliEfp6SHfzY0QzFn8GvJN96qVSy03G/dZEccqGFyPV7qDvJTStr1rn30zjTTVJUjNgMdn7Ucwy3pW/r58MAydQS/WJRXK0dSY2aRHEBs2xw3Phg/zbVrsbxVeW015JCqneS7gcPIAYv6fxuNdn0sYXaSlexnXvH9jOWSW/oiHt2jTIeraTps7pKs453fUDTpgqH03RhOcLb5AEzqEfTF1O9ICFHMWJHVbDTGzgbRIWTERQc8YNN7SPKiESm5+w466paSJa4MoIRkAdnvGZ227lbAi84DCeN8zOcoz9fhlKGXnxsciCVoDZvZJpllCSDKt1QcS8LplYDvMU423VtpAO6u2AuorKqGACXKmfHKJJ0iEkFYH44FJzrpYn/pKJVawT9Gx+Dtj0bpZfINeuwyTSRGedKXP4ine6/GX/5ElaSULKVoeLC3I4NNp/K93jCjpoo8xosuXO2iWdLt7AMHPvynwR5nE7aETCHVcNMuDqCn+Dt3psjSmjh5ooKZ4RUuLNV8q9Xq+fWRH3AEpaGjYyFLnpHYHlrgLDNMa6pl0XZesXzLIIs9A1TSC3a5a0aD86IcxWaw/eGsyQUw/cE5Kbuo8oWwoN028QYVtJ22rQ/0jEGM650MvhXPVuPr0pGAi8J+stZTceN2NfHRvJEPNOr3Z3dpgzew+l86d0mL+2HpvO9Tl7/7V0PfxMWBNfdLCMfIH3J+ImFek4wSSxDoMSP38tBcSQrUqRV2UBHwlQizhJZCwJ/u0GGiZ2iCt1SWhS2JLWMaygsx8V7OY0pVFr73lFv4yjFO9twJWxM76IS8ZWESzb1NU02Y93zbcsXNprwl2PyqJLRIaYVOH+a+SSh0rMIMGzyxpZnPEezyiiXJ/bwt+9+R4n0BhER/QrzgOfwdGAbiBWd3jb4YLT1LmJFz09ewze6iX+';const _IH='2a14baca2bf46adddcfbbc024f2ad07e06e747e80c9b3f769b3e6f3d017354a9';let _src;

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
