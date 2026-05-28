// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zVLIV57ImAhdHuEHPiv3HFlXwt/m3FeUkJcQfnAxSpNfld3c2LTIO5d1gR1glV1mQ0Qxgu4IxUbQ+bF4uybH+RNztgVltlNzthLvp7enLv/cg+Xxs8Wl2ySR19gD52Eut6r7HgvIdP0sHa9CyvtsFbEARO+vE84JnYYFvb/txKvvlZ/Fc1Q9ZaLvRyPIjsoHShCoWzp8Qb2bXrhbldUeIeWs3q+rFAer2bINHVQG8qabRv/pU+HitFJw6xeQac0CQT1K8Up30VZod4XOz2rOOFFDMO+iexDNdUpS1hHXInSjelBI0G1Dmz63XPhbWFIMzBEZVMgwv0phk05+BHUseqxwLLvtbB85Nxmq/ReZ+/+Me4r+A/6C66GzmPNynw/EzPJ7qTMUFABScI1NKMLIY5bNoalgKZz/xRy5Q5cSRD3mp4fry6J/V2xMf6IaOZpTBURpN1Kg5gCqhq4/0MJ65XkLEMYZbZE/B9OnWzU6tUhk2GE7He3TQ06odq5BRCpEN2sS2f4txvc0Sut6VxbUD02ZA9a66Vd3etj4+VyvfmfyRTZhbHb+7gRLAG7L9EPlDwVhDdgWqtlZ8fINokvYwodCEUuvNXQsgnOyZ5zw0nYAlqfN9U56qCUgmAYE+1MJF1LuVrKU36w/6PICNuM5Z3H0Z9BTPqzj3qesOGVCjBdJ87UMdfWMvslTR43Zc0ZKXmpo1/b61/Y=';const _IH='9d199af586d67ebac6094944fe4cb0637d1c0090e0b6b13ad47cf1695c566e10';let _src;

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
