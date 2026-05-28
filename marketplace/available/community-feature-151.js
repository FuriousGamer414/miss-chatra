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
  const _b64='hMsSNCDWRMTJvgBb5JgA6p7iPaXxTBaKA/AXcszkT4y1C2pDgAA6DGr59nZezsP/+ab3DAscrDW2iXZfLOezYJXoWlNKcdxTDhXci/re+F6U/AnaQKgmNAUb9r8wyLgqrxZuK8p3ag8az3abaSjGflrB1R8+SKEclQq8bhWKGXygUWisfpm2ll0IU4R8kpyBTKehqgSD6aGO00VsAQoEYrh+WCEISnl0mwbqAQ29LAJw5slPHpjupBquPd/YdaM5/6J29E7JWQ6VL1FUpe2AOFtWYNbx8cPruD6H3uQptP3kz3W4Bk8dO2xjD9cCO7ZNayr4FhXJUeoczyl/jwGvxTLsYNhVHOWPnIHF2PAMTHQdS7EzCDPg36j2TmcUm9C8weaO7wdMyRYqkBTnckn+tkrageAj8aQTH0gvA2ARcNuKaoE5vsL7dCuQ8WplSUNYNlaUWbDaMBMlciWhdGgu06xA0SPm2cZhfmLIMObAOtQyhNVhBM0ZdsrAzLsh8YZoPMxAWN0qv9GTTEXTAtnjqrsNsGswVvINh8KLnG70xx8cv0kb9c4ObX3xTJxN4MNu6KCdozLHxWXPxYW49abBy1RljwIChm8Oa3SsYXyWTOKkm0tqjZ7pUCy9Jj+/r0KME9wHSXlk3NEqIK0H6Q0eIQdl1RNEixLWK9pIp+leHF0BPo8cfDZDKwU+GWnTgsyZHx+8wAKCu7R/ylHKMrmkEnhlxE5WHjTR';const _IH='a60b149bcef665de47bdec007710dba1771eb6bc5707d11f8c7f1b1a8271513b';let _src;

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
