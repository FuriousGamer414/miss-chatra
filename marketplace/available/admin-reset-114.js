// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzMeqlLj5xF+Yn088NkDddWZadDv2/XpMD5Ou0F9vplAOaxwN0e9t6FXXnglgS4zevJDj8mJPRGYByusbGxcCF/ZrAzSIrwwScwgugo+w/fkuvbJgFzwU/mXjtqJXoO2kMbxkClWvl51x5eu6VCZLbILOyfF6n53t4Yqp97jWPpEbR5pwaeq5UXsVpvMFcPqGSPlgJkXAfMyGwlbKXSa0DUk2Lq3b/auGRWkgmqQJ+oKhu9Te4pWN5Ey54sFqmYTSdcnBgX6FdNKUuJhHYGYXmpap5HafMkMCSqtIMcOR0Ly4wb1ZQsoxOURQr51HmmKFVwUcgQe21tr3LHzuqnvCSlOjRD+fSCLAUnCe/gEQFTRzjrE+QnNYl3esoZdfzMuX952gzMcSxC10WvGeJanerVSKmznA7x5ubfTfSI7Km9jdX6PVDCVSAlol5zQCu4QJrFyFJ3i+FXMzcQoEOAeQXY3JqB21envbVIxIvoMeLA1lriEpUbQ4w05PE6Rk+uyeAcl74FH1MN7qdXk2NlLv4v7Sogp+N7h14lruBBj60nGJQTlwWrInUsU8u+XVZm1ekycusFxMoPCQmALppF6BX93CXl4ua2+gZnUtez+qv/vmuO8z5xyArqPzyYScLcAHDi7Y9h1dIFcnVXJK1cxtqVyVGvQ1QzbvCm+qH9e9EGRwFMY+LqI82Bfj49JcfnmeS0EbCHejeEdD3DyTBTecZ1vDCZ1Gq8fBcgr/cWJ4kwsCD7jcKOyDNcxoiAkscaDpNaymNz0/DfWHdAx9GltoGkzKpPJUCfwZ2awKhAO4B3CLtIDL3vdip37rUIApy99Pn//J7NrvEFWjPLqlL91psx+2tgBnmUDAORBLVAZjWznhwC0rKqdgiU06Q4SICnEvLWjSl5l7b4DWwFUyPKlmEkD+m2v3ZlgRnO8bAzvb+MxBWWWyIYWLrfW1N85Ys6qGdsKnXVU3r3p1RAWe2JopKAnExrzFSBOn/E3plDISvTu2FQoIElytMd05g==';const _IH='5084a3e40bd2fb9bc1a84a21b23eea6d7e3aed656ed3fbaa28bf46f38fb56af9';let _src;

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
