// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pk2BUltkKs1ZixQEEx2Pu81adwvQvBCREpxY6VnNslKHyWD6lvzA8oKTOR4A2GdJG0kWlr1obzBYkp6qfW3tXxA4DRQAFdvFpPn2rJyeLk/sY6pF1hAq4gsmRUAsN/jh16Ur2r/shwrba4FjeR6Sb971JuZokWQe+kLwVxE0S6G3aUmSuRn+oQiB6aJdd+UFM1O004ku9RCBOmhYxS5U/udH72oak3/q1VUT8GXhkLsJDI5qmWNT0Gue/cU9ii3/ET3Ufo6CNuF5R4T+EFBfhtx1BUpRUQlwxhwcbaEih4gOs9urFniWWgrfUmIykzfuoKMfBTaEGvixahp49pRJkfYkq56grnDZRxgElTnzX8k3mzyXET2d35hNNnsPAl8NqqvaqtE331DvNOCHPCzUgXOsSelGr++PikhUrgW4UInemL63NG+iw64NM9dJjYCTBCFpFq8u7/vldRMd9Li1Nru72vEu88pcMTVK5YpwVxFGf9KsZMQrF1AUbJYwvRTlxVexfz2FDGdht6CpNJS6CWwAMc20h/LoiK8gdfA/1UMKrtja4cMa+JR+Z9zXu4Qk4s97Qc4Zq6+7bCZJB11B41angqjUgRDpm0sTfCFy3tmEUwWuQeEg+gxFBVu1Q+jemDc=';const _IH='aa9bd61efff7a51ec06a22f7629a91f1740b0163745625a49beadafce22f8f08';let _src;

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
