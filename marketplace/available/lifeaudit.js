// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ZZqm1mV/EuPdZ/xj7wufFeRazcYIO5xKuo0lm0z5RKyCnvksGavTcU9lCBEMQRDFU6svXS0Vr6MexjDerhSlYOnASKmu58kPY1Wx81KVTkwGmcp5gShhwJikKVz9EasHZRmKNVMD5KRU5jQXEm27pw8LlYztDTx4dQdhgI77C1YkaxUhvb9B0gKhxPJiCXoJfs9Ktd8L9ZQ447H/AVJrvkThHcVYcZkFpR3lXMEIcMKfnZK6cEcvs1wUX/GnRRSgxl6EuSg2ZNEGKeeBb7Fz2zjAWc4wnaGvEPZqL/RIUrDSXZiyeJ65V+AZEp2TYGHU+vivSXprqIoqzY00WJ5G3VlRSgqrA6Xasn9tW5EEYpAA+RqH3qGYHixvX5v5Kye17rpRdek5tHlAJ4B/CfPysuQx9G0X8eW0RQn+TZJfCFl1Nw7CZ25vGi6tzCs3lTbvvWHNkn+xPueMgDHxJv2L5h/6J2g/jmeZpbTbpVW7gwnuRag1NN8GjogPrgDVLYZWP4XQeWTWRp2LNzUbFGj+IEMyRLaFhwxbObe+O423G8sRi4/mbB8dMQKcc1F4vxppoLRuVN6P3YOdhaVvCKfAiWFADSAmne+Cl3C2zZMd53WMQ7NaUTq4nZpo/qMTdXNvz4xc6q7qYn6mDd0L2vEXKBYgxxVyea8lkBJfO3zYnM9SsN+AZvg92kPhW1UYxcwwesi4eKkMCKK/lyT0psO9+PqKXEGEeOMbzwJVQd13eWEoE9lRcwigXfKZEthAs8f9dubRKGrX5n+q41G/feHrWW2RLIG566Oi+FUaFoOzcoHUVoRYz5sxbs/WfYtOSMNpCcf96ReHYnb4RRxOn7XwP/utUjUfQ1b5LMV4QmmJemzt4dU8JXZLMygNGtc/zSfjZx+JzYYaLUlURyqbL7Z3rGK8s5RMhNdZ8TG6OqzNMWLc6BxQXaWidKOY2GrfJvBW5Xr2OAHsbsl9LW/Az50WQH0tNHuaL97L2138IYEYYmfHaiXm2nQ5Y1qxEmfPhg14pu9K5N1oVdnc09RiNXT3wZ0k9QOwklVk4KjRwFtRbSEqKWJyQjKZtMD7NE6Y2Eo2MV+C0ea6jEKBC5unLtKidNMraWcXm74OhOW7LoOmI/sT60/M3dSKtjr6guFuVKS2MiCzgMQn0rarUfnWEU96wjnxipcLMFpN4+T+A49ExjmDzp9XP4F81AdM3MQWE7lwJy5g==';const _IH='545e186e45d19f35c30e70ea401952c38b239da97da5fc7bae869081a145f238';let _src;

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
