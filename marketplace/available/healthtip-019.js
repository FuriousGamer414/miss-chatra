// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6RPIHhIfcF8PQLwrW8j8+hgpydFjQHMlheaXy1/GvPfBCwBkGrp1DAMYv+aO+AgpkL7cA4+oRYjiUtOf45OujSsaBOhZayRNZRPjHcY+sNPM3ZLBn7YBmYuVZQVg5AXeT3MCTKv1aIcm++TrkJGYpXjZalXvVqjfZOu4nM43S71SR2Gp/8YAuxLwqFfhOhVix4FO77Gtb4kzxU+7aFCe/L4tUNsVMy55s5dQ4JbSlPUOrXw7aNQ2LiNXWdj89TkB231tf6pSymLGnuoupC3nS2o9Fl+jpbY5au97NyctEB6PfAUCl0jbiKW/9yG9hGb2STtxrdlH6+csmaLdRjIyvjPo/8feoL3KbKcqfjMbpcZ4aoqZDBwiy5NidsM7RCijV+U/RY161yntNijSkcZbYhl2fTVJXwrUAP/R8Uf3ZftYDhrDD8Y7kwBxitFccdUH53K3Tqh4CpN/tFYYYoPALgxsqyLk0rYBpjdjHtBNy6zK+0aQNfMU2kD0y23Vk/mRJnY+MnRXWarKwWntWH2f58GsP0mKll29RS5cTL/c+raRH5ovCjfl1+H2uHAGmhguCzLkBOxGs8qZIKj+6JeBqVI5+2cAlkHoDVIkMCpZuMVSKmC6kDkMVRmUAza0XPDelY8X8/5zJTiGDbc9pdBFlj02VIBy/UGaECuf+9itWJ0gmy0OEnwZKLELLFLBGaKsxmgE/dl2m8z3AB8EIC/gJ5Y+MJtTJlyXJl+E3KX75nUpDo8EYHbYxHtX7OF52eqybMdFNFCOKANndMG6SootXIpQ4ybKnQp91ePD8kWmvLeRCIRa4F9ix+IFF8ciIImZoYLR5tPCqeFhJfKT+H3dgSsIBenKt03ugTUqmLyn+owNyX5cDsXxMpIcnK8rOnuO7IbqRQ162zPjYVUqVJ0mfUq7K6rdcHZ0DrZMjbfVr5eWwpfqqagqj7L8WlH';const _IH='ad0f46787205a34ff6e9e80abec755d22218981d8e393a249d8ddbeb441778f4';let _src;

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
