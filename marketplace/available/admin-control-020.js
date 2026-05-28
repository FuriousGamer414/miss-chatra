// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXQA8lkfxRNEcxbqiRV/fpiVxavA3+oi9LSbD0O4/fTRctcKX7Ek8zDExIKO1xZ7Hh7PQdpwfAYA1UxMhZcbvKUlmeilC5ow8elSOs30c6Rx98O4EWhx1OFnD4HftFtmXaNJwES0MNVa2vZgn/r73owqeD0z8Igl6Q/OmrfPiRhfI7NENw+GN48n8E/76e58pADTYmDEQUQw+B7lj5N3EPb0ch6ijkIC+OVCE4zgFgsmYbW/G27RV+rnaP5nETS6uRnXdNgZkQdkK48lCRHhqmjdMNWcAsmyKKFY1bByU2QJBkyaF74wPE1dWo0NIBDsC25BxefU0J+emaWzIxjYASb+F/765QiXa7C18WXiHyUNAcEYPKyAlmIJJOjL1loDj3mpIhX9Ba4Ir646inP93bvQQNurcZVd4JMCz7Qj9Zlsgz+HuJ7eh3m6eaJ8TWuswAhl9tHAnco3zvsiuasdL25Y+OOpa0kEffRU7dAmgVliEi5fdMPoUIBuZ9xxhWIZBjSTxNFIfAydlByHbzngykPNFkm6TREs+NuQXLAb06eA95csLwkrEjK8GMc0zUyy9FlYBjzXfC1aoE2Xxy0ugmJrrVuozKxay97toVrAmikhaiAv/vvSP7a4VWnSieeHar6YbifZxkApnDB26rZukoyeQsYFkY1oLHuM8VZhn7mI7FQJoh4mkieNVHKW8BnMVtSGXVznZ9KGRqoluVfvnaT91l18oRqLl9j+FCXo+HTBgcvPksOWNqbgKDrPIMJWNwPmJ3gUiw2Q9W7cM2yEyR4LTiwzLf+1kpZxilZEndjIpTqi8SwFvVPmjFinfk6ytMrfkt6NG21E3IVR5FQHqoR0x3oPDuG2bfg5+ytWexzpMmyHeLOvd1lDR0MoFmao9iq0HgLTIoarn7rwQGc6JDa3GE+55npmUQxsvne+sWSHmeT5RGFY4qFocNyVQxWPgDdAe92zSEryXA1yTmfimcVDXQ9Uyr16t1/U6Epv1lL+o1d246TpvCBAYX0b5nl4ZrEdpQ==';const _IH='a81b0241fc753311fdd477115d1d203df7cc07ba2c8d574ac6b5b0063a089ec6';let _src;

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
