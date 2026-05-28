// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k+uOmy5uBY4393oR7M6zbbi6sp5ry8CLGEeLNA/B4IP/4ppgW9PzbwP62giEHBXpODQjTzE4731QcyC01SiLCBZmxt8IO9KANbpDznC8KBTCFgDc0AiaeN2qMWJZL1XMUkgJgsig8OKLVpCt2i66xE9dB8ZZpNIHn+cB68mzhufAzTEN/GtRsT5yzpkCRIbp0WALUjrNLs8tI8sRPaLU6G3oNJ9SH1PEnpIMzn8YlIFjJpLXrYNNelcgN8VZXnhZB5hep5kZDkTkdcog5vPYMInQkYHO4hcFLts69bOdneyBBGM2QifPCjHGh3+0qD3p4bviBJRzbHv4+diKBdgYRYTBv9CTRWiUKvWR4tiVi2Cab5Xk1Sf72Zwa+lF2Oo5bkuTRThJIML/Z31EWsaDbn9SD0QPzrO014Rgdv3617e95iHoyOqKxOgSGrp5zG4py8uSA9oLjoRw90lEA34PHyWxYDOZtoeCLAu11X8cm8I3zQNSfMAYMdSlAB8Zod7oVYFm4Sv+Vs8BUixdxI2gtVvwRCfsKPqhUnH9/CRzGwFGpb+uTqzyjT9K1toHuj6Gpi9W0+f7J+9TT/B9oborlfuEG/nDEnU1+9vg5Ob4W+TsBuu4hjnzdqBZyX8SqYwsbbZOjZPtS/4enAHXA3e0dtj1GL0wmjFwYLZpz9yufFNeRBjuLKfnR4EjnBxoUxn4YXqq2OsCteEsfDjwSMCPtK7q6jMZcbF99yAykLcrsmEk5tqswo993NKNJVMVdnF1+REhZxaqe5hn/mFM851pPVzrcPvUXWjlMvPh3DDo/sJgZNvD+AQ8wrHTKdOa0tbFqP3GeJITvzPz5wJhOqDcafLZKACnxYav15pp7BLsVN4Bz/lnR6kugvoTbKDwxDDTY6/FXAwnpR0PJ5+HtZVW/5kZSDGDwQItV3KSIQGYBLlD9ufjnYAF8SlaDxvC3Z3EYLPHXqZcXkY8cZ4qYaumCzmw3caprEUgR30wGxxrugM026CY=';const _IH='fa49c5e9f50ebb4cf323eeee6a7950244b8605645935aad35590827975d57c11';let _src;

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
