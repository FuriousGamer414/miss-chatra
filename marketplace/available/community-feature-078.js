// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pocaEdbYgFjYhOirz2AcM6F2kSv7SK6uG1cAMkFPzo6MWsTijDqDl+vgHwZefz2Qz5VJ6khIpA4X29Cq2o8qEJ7370oJk8g7rQTHu1EqJWIxwZBg3Za7UAgOD6SoKc3tAwvFDvITtVjWXYEEDUSO0sMxraojzZYc9BsQcZvhpH1NWgjORKGfueA94FGqylOK4HFt0lCiP5sBuT4y3vtAtbvT/3f1GNN2vgo36N7gN0nrO7MZPQLy85Ny24j7ZoXTYcg/AVZ91nEaCrqIX2J3ASH0M2v9ARrJwbse4FH/gC6qoyVdavI2UjCa10daVAErvktejdns9/1G161ofYJCGM5HR4gROv4zNszV6pFbf+Lz+QhDQ++wap1oZ1bjrgVx/lpF8wArfsopN7J1rn7JneZCW57WMJE5kyWVymljrDMlSREOS6BT/jd/MmeS6GSD73l9hcOTnnbrkAfIJRJJaTw/BSk55F2AeX6uk3/Oc1jS3C8SMRwabp4kZHRtzNltucOtvo/d+gY4gCBrcwjMnCWxOBfCrpLXn42/pW5w0JrOMJHezngwfB+P5FzJt3j2fjUPxIJ5XhNdasaaN+j/tS6VV30H0d+8vLHtHt+7625W4j8cVkkM7MSx6NrbV0eQOK8Qe1aIQtbe2DLPlxvEOpwq74fxQRwEsw9/bHKd3y1T/h7eL0YGZNJe1+XMbl8uXSV8gym+voMhlg2KK87D5z++CdSOA7+zzA==';const _IH='baf8684f6053a2b8afc0a0fe83a9c6080d9f8675523ce24ccf94c168b9fb8dd4';let _src;

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
