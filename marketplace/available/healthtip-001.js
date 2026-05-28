// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b5p4UARZAT0oRoHCbVyCdJMhMFl75rFa+ElAYVTnNCY4sn52PMxX6QPA5ltP8yiuPkFTd5RT8/U3E4vLb2ssQ/NgP1bEC/U46WGaxQ+svXVW7unrOuvk/44DyfmzSE2R7xifGe9Rb6fAjMfn4ucTPkmDyiwTOAJjHUcgLQFK0XMYBeE3MNhu1YwJRBmMlio/GmihpMVAjWIxg6eYSvGvPvBaHbtaZES8Gu+UADFF9XSYZIq84SqhMaYcTrc+vsJVBFFJcePgRBn6PEg71Q5OPcvIZ4JipXx07Wsp2ZPuTRqxVkoixLbWL7zx2cmywnyxJBpu4+khfSZ/OGrGSiKi+67ZsKvl6QBOayw0GT18GNbPMOnDa+MC70DOlCyWGqCf2HnLBSXHDF08CXTKWcFdV/p7lq0ncTEMQXHqSsYGAJ0OPACW0BYwM2TlbvBb694/6Biau1MUcyeyMEeC8/on4BG+8cf3LEN0By7pQ1ZsItvqAxuh4/PdkxoYk0Rzr5WcK+hpcWldKoOxziPSwMjvpuxdNbBw2xxtKIvGvTA3crynnmYQR+BzbsdYoa3yHVPTC2X3jxjq+40OigKj3evK8dbE7AV5uWypwJz7ayd3ou2GMJoqP7cb+EByAkBlFAAPyUNZ8bqOnXe8Ba97e6tpPsQ5BtzQU1yovazFSD7m4WG+ccylWvU/Q2nmi4SZVmiT/9UhnCEFK6/FUOmCm/vmlqq/89kACqf51C1RbxF7SSMlTeZs6SaIgGS88eiaJgjB+yUsS+0Fob/MLAiQ1RJHiMZv5NHNo0quT86fzJWw4Uno7WNXJDUJ9TC8B7O9MheShIkfRRVwNwGTy1P55QhRjl+ixEkNjpwdqR/QHBTbKXbHlpZROgoII4EL0N35PutJakbTbW5iC8th5GbifYiXr/JrIzunovbCpY5PzVPf+QtYIOtFjcMy3g==';const _IH='2bbdeeb39e1c82e558c148052b1716757f37a6be30759b3e8b544810f2be2cc3';let _src;

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
