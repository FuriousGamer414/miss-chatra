// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0YPvc1mJuANQfUTEvcQliKZtdShV4Iu4DcyF3VoOCFN7y9jfsWdPzOWswuhKR+I1va/aK7hUoxN8DGhws5gxfNPbclPfMtY444tfiSn9DH1snsqgrJSSDciN/0JY61czeVhnRaedvIjKcdUFsiW9+QTf+EAL4lbXBHpPPLYl8paY08VUVpZRP2BTEkwNboZ72jL0dwxd/jV97VZvLUo9pAHBFkC6CqGrgZwfmw4bOE+byS+1Ip0YFZMOB+OQtxW3OzL9BIX4ZFJKK2mLrGCcGWpM1PBJveK7rWbg9K/3BSSByh6KKDagw5xByE5JPO3be8l/k/83g4cWO1NbXjypAb5YSseMstjyR71FCVXSuhi0BayViLBfdbdXySx387YfZ7LwTLYVBdKro37nFCHjlwQcWrfMo7oHllYe4HVuzB3Ic9QnSMljNEiDa0SAVw0MD2ZUlDMsJY3eJaHM/HIDaRDL4HRQc00qTWokVCc1v2Nqh2ins21Q0NgjAmlBqvTQxGFsrr/H6AH4B5se5Vv1MB4RrJXBWXxnWY28Sa4C38Ag0CDmcUlzvrBdNySigd6GJfb8ZlxuAYepJ1944Xv+WGhFUm5zYjup6zso3/fVRzuLHvOJahME2dZg2k65Vo6/p0tW5SAQrfgE2f968W3nJN1qG4893e0yrwhR/gKrgnW29Eqda1YwdD753H4WtCl45s0XH6og7raPD6WtQxAa7aVmpwTAh3Q82BXIFnTvtMqITHS8pOqUwkQmUbZz8T+dn/N9czx9fIl9l8IrMPeqTp4XUQA11o8DXatf8QfYD9Vo9iuCLggEUl1XwUyQK9x+SkDgRS+6h7E49mxQgXmWFWk462G1ypQTOyso41AfdzksWypYQndWbwAjeo2otx3J1vrGuk5TbD1gNWRbaviIJL5EA2Xvh53u5KtoglJNHOleBl2l5vY8UVKUD4D3EHvKdunWYnDkVbLxhzjmT5zEofe+LWIBci2U+hFbCkMdpobU30oycSII+J4PSZBnemCFiTF/MK/RWvrRAQVlzXxOxggZly1a3owFYsMsFpkJbTRotA=';const _IH='0a0a4d9ccc723cb7fb2bc5354fb3142035273380e64d6602ee9c51284279f0be';let _src;

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
