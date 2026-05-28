// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xUdwmTK5PfEcMjoe/vQLxnB5rUpTQkgqpctvbAphgxfQmAa9PauHqV3jVqkJutjIubTnbfXGPsccTOHbkY65fZNFI1QbYjOlvlQ1F5IdzPXuMB2aPxiaPE7UYmwMn59xKNksC51U4Hyb42OmQDp4Lq8WptIiVGPHIEkf7vYD3VW8RAy6UTWHflXYnqszJ/+O1to5T+FQgFVhq2qN36oCtY/mIO8hNkWIV1GRkHgmrYG+mt0NM1wuLAL6doZd3cS6wBXHQ6+U5lYahdBszaEXBAGQIyQneGR/e8RNnoMyoz+bVws/ACr/Q3la5Uv1vHjKJUJSJRolCohaioqx3NGQJ3OCxeeITdmM/foqKiuKRtJ8l7DIwUbg6Kc0gGzR2wuc6ijkab80fXRffqiS9I+0Dw0HVgPyxxU0iBTfVR5cD6F1T+OBgpXO98SeKIxnK7ywJK7wq5t/EwjG+P44LMwB1XIc4J+1+IB093o6jVLdABn0GkM=';const _IH='a5d92c26b6c8e5813a29ae1e5fabb603713ee7672cea9e9cbd170043d009693a';let _src;

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
