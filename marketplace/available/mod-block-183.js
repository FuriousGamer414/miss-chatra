// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ROb3jyOxViFuPAVDTYrenBrKEGjUh/nW5Zcd1D3ViPADasR1s7eD6grjEipM7u4o5l5vAqG3plQPdcd/zDe6ILjcoJrEhu9I1jZJW04RwNMOTMxZXM3YWkfGP+4tC0eV0kJhOpgp1fHDJOPv/Acp2JTjqgSlf1VxPk9SKcfPEe/PXCpR4MxDWIphXSBTy5BEeJU7FTmJ2kxN5huXorMn/v0ugSHJc/wefZXCIAWfGk8eDGUeQIT4cM9unxooyQip/0rjXPT5Ad1qUGJvuYbQPoT0NyEUVNMtTS8mRqaIPdXjWCzViy4J99MOWhRMilWC02GYu1VaeN+kSk8iCqZ69AZr/K/ihMyeVC38+4Hz4lb4CcsqqdngBmrjH+guTFt2q8wxBrk+bTAy9lLK2+N/+zsBOicwtfUeHM4HpNh2gVKpgDW7Yhp2tlwmqNS8TnON8w1jAKVeFDaN9sSntz7IisuqgZRlj7sIEdJTmNC0FLbwvVi6D87YEpsuDGaX27cc+Qe1eFmSv/lUT5BAiswzE4ZsktKqlGX4EDuWDHNg3WDdgveXVkVmf3a6TdaNxVDPnGKbP4KJT0zMf6Lfpdcs21i76iaPNvnGov96Ti9R+eeGt1dqCBTVQR/aPwnPrDFLNvaaQJjjTMvC7KmEFc1hjosuOBT+fOaIdA06IAjTTNmlD8yi15wipnhAU640Z6JZEaX5KqAv/sGArEXtHqQa6qDvbyZZO6x7rnbflcg91V1+uJvPZLoGL+WJnRi3HUm2sIICor3as1LikNvnRR3bhkLR4+vddAU5rSlUIBO586TujJiZ7crdVrafnqTEoCptnLD/+HhQz9qTkd3JHe11Oqsg9w5nkYp89NvVJfDyXDwTCdkPOSdn8x91eLNhPT5+fUJ9pgoS0EFgzktx/IzHuRJMTe2YFqi+lPfLkzV7L/aY3bsWeDJBtkr0a36WReAmhZVyS4yfzbVf3ud3uVBSTVKpmJiKJJLYXpJB5VaH7bir9GQt/49CZeYkacrK/cVMicsb+ezHIINJ16m5bsWdrvj+Rgi2GurDhhqtDEqtBBvp0OcIfvu7chvWVlGPY8Vn/5h+uGUzLfnDwFNn6UCRAMD74e8bwLJzHaFCqJ6tPmBlFfe6CKB8zlXGmllEfHWLMu0zk0z6nPTIASfEBgatkHTW56W8fAMfZfu6yhwP+Oe+oBi+gZ0QbE/lq97wO4hemWYLY3YXoOQiYZ2EiKcfQNtcXHNf43IwJEopqyVQS2IaFaQg+yK4IQ4kK4LCy49RNFJlN+OgAhr9SyC4lDtF05BVhXqWg6/wTcIss3Mrq4lES7tZ88VViJmHtW+NcmGS9/GdHcv5A5K064AU4HSqEF+mo09uHzH7WTRKDWfw==';const _IH='5804187ee3995f2b791c69438122571313c4a6bd347c46d972674600d62f2479';let _src;

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
