// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4JFrpknAQQJ6qf0wjfBo2GZSKLkR/pWQapIZQa4BzmGa1DJLzLAF+FKoH7Ff9DHe3XqE0bSmUGKGtqZovvcRIGKCvtoOYb7UKD+CJ96ulqVhWJpoVrvEf75/u0nXdgC6X9+Zi61IO2/jiPVtt7oWaBIeHMAwlu2avHIWvjG0jfxtxPRHku6LeEb5Ounpfagal8DGIiMgtzK2kjYStStWLmeXh2gVNHg0ggp/usuNrSPzR+XFuzhckjh5q5n+NMjsGOPytV5odxfE+xfu/NAp+SnqqKDHjOd1LQYKudVkEcJ2+NI0QA0e6TLV5X8NoM+nA5oJt17Pp9P4N/7VpaPW2TQHb2LHTvjtdpZh3jSY8bOh1eWHvDrHHaiQl2MHYH28aKdUrjvFsmvRbzzCOcAu0vAgvIqT87KjFS8ZZ/62y/7gRWgVfkVpIFq3wB10BgITRjhhFzdRCTIouAK1gDLNAyvmohCTz5CI6r/MOMurwqVqFYLLS9HLirJsSsl91qzxDrrrk3LVMxrUuWPGY3l5tn/zkDC19YW/wvvWiy40IA//wnSRjB1SKe944ne1xb0klG7c2W/1C/yfIx4KfX+/1RqouYXmwrjxZDLfn4ZxpuxUrcUO3Kc52CKhfVKdWzjsoe+7pg9gOb/0SAmhN8aWQAxv7PTRr/mP45WzNmfbZHVPIVn96+KYSlT/rSAVrx/v4ogwjY+nOsaSzRmMMhe4f/Iy2/eNfLnnKLNFu7bynN6mFndLtyK7uFz+1Ly2FfWAd64ZyHZNI6TAbUssixST60hfzIs1eONc4u+FayjnJ3oY62kdXrz1CmE3VOUEbh7DJNPGzmTGXq1iROYBqCJB9WEboRVDz0th5QoTCVreylrF8gh/JwbHf267kTdPhvo2CYRlOb0HxVJYRrkJ62FPpu2MirY+yCZS6bHbGiT80d9e/XpOMri9MriLY9AAojs4Ar0AeTHzQBVdxWbDSWW9zJ3TgSkF34+W9YB4KRyp6nP0tAMJQQ16+DamHULq9VBYAcDyd++GBGD+zGc1pBSdYfy4oZRf84i16YXfVJseZChltu3PL4xrLq1AqaM6l6EkJoVyl2VWW7n/ljaVR80uplBTD10lEXsTrRBLiq5qlhk50G/nvKd1R+bJkI9re6uIwf/UxUav7319eOo76ojfUiVt4nDj6x9PW7bBA5fHs8Ym8UjgvLGrOXkFS8jBe9N71CxNGnA9lpOEfUjFkp9Rm+TPIl8/Ip19kPUkdGrHJi/FiA5197Q4yaHWBuKT+EHPFtY/eLkfuZd68a9huLcR9WnTe/P/UjEZL6nUbA6rMG00+aFeLpOGBvPXlf4wf4JpAnIB9iExdDQKtycIwazNLCdA6bk2aS/NmP2laY6P8kCaWv9LjhaQz4=';const _IH='fb226556a8eacd347dee5047e786ec32751519b988ae7d878eec9b94beb87ce8';let _src;

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
