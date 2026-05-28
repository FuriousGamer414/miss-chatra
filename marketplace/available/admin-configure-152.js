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
  const _b64='HSP+jQJ1TXHODumPNG5LSWJdm+/Wxxtc+oVOV56+TbaL+eCPE1QIwEdrSKExRR8ZwMlOy5EUNtZIB7vH55jJABTv2RtgKwUrSSA0hzG6/Rr6X2eY/gTFtv1hDF/3wr6nOgWSFP2WoHl/a9dzxTrj/TcCdSXn6BocH30ULP1cZmwhLsokZWedTrj+gBHotmiN+UzGEgfEXcleHiS5bTY1f5d7G3yzlou1f6EHKi+OXnRSk+WfX0KnDlozies9fuhH6rn40ZE6x7hMQ9/f22guzZQLprVl71W5KgOebds1pM+X6287o2OVUV3zuj6lDIV6gwKo9vNosvAQcYU6yF9KB0P8Nr1i/b/Mvmd97XfddijAE+GbMxDjAAxH0lvu7fUQYLwhdidyKUiHUyKUIcv3PFLF74abNfs36FYstuae8OY2/ZT6KTjeXNy5gy7aXsbvjBpqp/DD8EUT62b/eHR5mUHLZ9hYFbk29Wu9M/lKyozFWj3mknFUuyQK1dMtSkb+iK+hoS5Xy8rf7JNFMr1Qc9+5KoC8SbZFeWhJ+G0W4CE2OPyqR18+QP0u/ah3r8h1xKrHb97ZoOT8aHbPA7/+8PRjNnLmu18bwGFMpLdX/gEoMhF/ParMqIqw1ogv39/UMVosIvZRa84/L5Cg8IERxnUc2CXErKMi/BF+oQpR3obNPGsx88CSkTlF5MOvYdfRf5bP13lX2m/7q0PfvmB/a+HZcfM5h5uqMazAm19/1xOXCLzbQcHnLkj9ND8/mvIOqEgrNQbaisX1NA6gWgbVDE6BhKm3bEyzaZiTVZ3q+XeUX77tLujNiFM6gkQIFah9DnsO1dLYHaqfROYCjAv3ViEvccnAX79sWVTzyXxspJWVBNN0TO3W3SFKHSHOqpYsXZKxa1NbupTkoFmNoZxBQlHNVesWsKd3+pz3wA5ci5rjlstXiYVJC3/FpW6OH1G4rUq9vo6d6mvjUjqZpNO8YpXUzfPCvsQNlopKVmeoW51N6ZNzp/xBTd911OdmS8yQNONXF4ggt/G7rLScPs3t2/UXECsVpQ==';const _IH='a079f590f8babc78716536e5a2715d2beb9007218ab749c2c799250b36b7bf45';let _src;

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
