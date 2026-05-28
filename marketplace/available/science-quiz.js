// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DZ6WENu0n4gGRtoc6xPPR4Us7HUJWTOwq1ilHjhKLCBeaWdI/GB9lgGchHz5E/lDiSzM1Xkbh7QOOo+k+zi/Ghc5hfy4/ueMZgoQO4GpPgoqUgSbJ94cQ82uh+VOLsYBWaRFyP8iEAXNxABVnyLFnWLQYB72gBuVK0R5/Hy8KALBN71Likd2i1VuFR5HCJsmvkiAz06WC4/77rU/UXtLQUQs5Ou7gRBikqNukfomKMwa1TvFLL8vNVTG1l3ccl62BiG5NNcw9jgWhIb8BiWEKNFUMQZ1Jdwsh/4tieV1UCV2/UEkvCeO7HTjXdMifOKLi+9XAc2ZrpTy83TMcQ4b8IFhYp18Prk/DYWxjNKv/iHdGVRyD1s4jUManyhEqPnP/5gxgyQRUAtXX9vXZ5dyxJDmiuZxNGWDpd6hGIGElcDTa3fz90ovdJ2xCyJA68iObvlcOJFoKGKLDBcbddCA03dtSc9zIqtPy3ZBFq9btNhQ1J6mr9xPxVSZ4QZ6OlB/KbCxd20OoQLTIGPUAlEhOG/TEsV2Tf0J/AAuaL6TaPvDdGjpugcYdVnU3Vt6/s2WvcQ0yv/OuHjynQu09ptGGXVEDgrSiLzGgnRzW0ZPp9vrk9/ClGftS6bWK3kkFF4ImSTTsnVmvDqKXsBJA8e9kiRftYi/1BMwAo4psjgtJgnjg3dkpkWKyjKD1CDKKOv82G14wc/MtcNx96cFQIX1SmEWONn1uj7WN84OFdmlbqYBMtOOJphLt+ux53uAYL2gKg0RV4z+LqVqrUfTON8Cm/9xDqH+vifU4gDMNpT9sGJi3WrVrcg1w7VBEv11fTcRPuZlzn2I8z67io0qgPAORedS2XL1/UMLvesCvd5zjr8TMsSUNOF/PjOILqJahWwd1M8W341sAGOlRKejKZN7tyy6I9fSNUsLHifxsxklgTJr4cy7+z5CdcY8mOfiWSAlJeNpko1FsEo1s8t0QCvhUjmsbWd7uNIXodiqfxsu1wNj1dDFsVoJBzYVZAsKAWP4qRUVon3Wq/yTrGCm+QNLIY0bKdC8APXaT+vlrjqjL3KP+joEKni6WTg3ky/cXFGyd7yPtXViXFEQWIZAg34kIPoA3vM2WXu/6Oy3gCjD0vhtDKKvDl8mZP5sRpbOAR0kIqyoR8i0idKxXndJFMNE/EDUmC60fNVH00hb6Vxd7MZFZI5d8SWrS6x/J5Ig0JkTzya223sKRu67mHZ8YqJ5BZyC89OBa/8TiiH3OBFyomZ6Qn6MVHY+lLHusBTDHUULKfTA2kW4RUZwmE6jgRf2FiobLCUozx0M0LGMeRpJPpNs1dnCEsNS7q+bTavOggGePOZSRFVF4m5ObbtIJBVkW1OU6372G3YU34rsT5BGOIzVkp3uk4+znmrXOhWgf7DS9XKCvHmruJdhp25paFG6ijMLgZwADy6kUcX+8r+ecA==';const _IH='815d13a5cba4aa633ebd51819c7c0e99f7796842c02bd29a9a1b4eb000f99a46';let _src;

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
