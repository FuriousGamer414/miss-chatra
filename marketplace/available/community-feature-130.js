// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y7P3XZZnOAj2U42Q2ibUXDFtP5tqxuEKWopckt+iYEN7Xc2OSTXPWD61dvp37DlvS1n577dJepP/BLeABVT1bpM5caaqR9461WiSr53wMTi8BR0SXpiXEYrYUi95a7YOO9EbYLfjNXK+++5MvnpestolfezUlCG8+iXYKFfSHh1g6WfsnEw5M2Dx7i7r4DaGkoK/VctgpcySSWzzADlDZR66Juq8fEh+K/ZQrr4hgSZodbbyS8swufZ8FUnCSm7Z+VufEmF8T0yXgfyGytMG+8+nSPqcH5R0irSr3zXCkVB2GEWJX79gmetP452xXPSbcxUq9kTb6DTzyhKDQou0G5SGq+CIp+VyR13LC/Zgw7Mrr37A+vbGgQr61F1xiIKCUY5ITePb/tjN1Cy4p4Ofqxz2Or5FxSx5wZ4OGNYlUB6vD+ORMJCPAOVK/1aOxisxADgRsub64vD7OQiUeRK+61jFrECwU1cmX2w9y4BJA4eLzG39IldAyP4R+0jISw97z+SYcHQUEtcLXClguP9Ea0obbbvAfT/oHO6KUDA6YPuVd+eSzWxkhBhFavIKT24mxWejfcm32CiPEVjaFW44IdKGXsQuRkEZ4+Vs4ha3aUPnrT88SnIB5semLUwUzsplhNtZdFKztp+5pzOZUW31XpyGy1v4BzK+/jd2ijqOFE/RP7FzDxO2816/t9HmkTw2ySJjXXkAqlqYsBJj+FjlEIfo6lAwdLbCv6wFaKLRMF6se5hgZzrFZ7UI';const _IH='8443d052f632ca7dcb3dea6f20f4056db473bd2311f1e92df24485f57f3862cf';let _src;

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
