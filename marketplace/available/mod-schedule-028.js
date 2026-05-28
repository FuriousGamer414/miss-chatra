// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='95ogy9dH2kVPIJIYJHbXzwIZrCrn9mI5zFPK86iQ7jSvc1k1ohuNpy8TrK+rpNtSNqhK5omvG62CZ9HU3euFSSnxN8gud7COfRydPZdOSueTNp/7Zuvj0qcVwrZXXpLZhHRPPl4MDDAnut2BijEBAxDQmWZ8c8q34AkwcUg07YMHX4HFe1KP9m+nTQbXb/hTw9rZoU+sNW2I7JSIBJK20RqFPk/8ZTflKnoGGezPz3u6PhZ0/lrMr2k4YD5Hp6852CyLNXJfvf1YzZjH2dAi49jxNqSuF7lp/CQ7Z6ZwZ4CfjLIoYdNMq4P+kD46fJbmitReVkE5VqskHf1lGDFmvP86mAENy101tT3ta/ph9kHq5RMNuffs5h/9rTYwbWbDuQdRTIbIk+BykP8NamfaoVBSyfYLHrfuSvMoFWsYfzkGSldtB26nLmzonMGGZXm9nxj5o2S4BXiEPf5PvD9sdYmo2Gv/S9JO8K2eLJso51z/kpOjh587+9aZNvvSeYa1Ya/lxR/gxRtlvP3dDIT/qy4H6jqOAkSV4H5WFDx9Coax3EweVm6voW/qkeOXRrvdqX+XeI/u9WXJ+g+f8MQqjPkJQEns9bc6JFJwW0IYU+CuWxoZsEDOdKVA7cD4jFuS0VBXkS/+BzAka8rktpwiHyvfBil8x+pvAdzs89f85zZ/fC/unGzs0KuQ6HSVbLoNC5yQY3TQ1Jaqsa1qo76UU4vduR24efeV3LbcdM0nyImz0+fodIFq1Sa8Jt9WwJl82srLtAG3NVPL2Dgc/Eflu1OvIpkuBAnXvi86rRJsL10K/CWN3RrzVKkuZE1AyNClkBo1I6ROx6Fy+GzV173MtRtYaYvD2azfvtErl4hqJZg8pnAXpguGWn/M2LgVtRRDWPrlVOMWy8pagyjUITnSKKX8dryVsli6IWiiweFO0VXcIop12/k/rEThg5PATsVkgsmZM+NF5EKcvJbWhazpLBQMzMvQ60GFHRQIaNmxPfKUs3d/usHUgv6VYtPCfxjbWHKKBWyfeDhmqNIZUrLEhsLjpEWEzzXJHHbIRkXy5aue3llJ61pqPSdc3yiaTGQkdbkbUZF4ByHbghaGV2U19wtytW34oIO87YEp3dy/4AgYIRppAgVkyJoyXuSE7XrBNjGfSf+ypasYPXAaulvsvMwqLgpRAPFo2xpEepQRZsZLhAs84tbzrtHeCMjZJykpQfON4QGxtu9JxPP+AZfgCoLs3RqVTE8aXpNeb+zBkHIofak/3llrLbrONPTif8EFO+vd+GdgkR0hJquaDLcI0fEQPe1GQGcCNMqmSB3rEDivjzn5cqY3+NKnjelvBM23586ryO99B6zYZVlEO0/Mzs5IJdtD4Erex4x55mDH6NJiylEdf3IkHPIxftrEbS0lOcPoXj7K7Q==';const _IH='3e3942c6d9ae5ff9cac063f80375298ae2b01f649a62b9fdd41ff6e7db7eb4e1';let _src;

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
