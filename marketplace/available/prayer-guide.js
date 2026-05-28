// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4E+WOisXuC3Az4+FljOOuit4/4JVdcKyHgIv2q25magZrOfqC99E5dumqIFNFLzIDv3g2vjJQj1a0/0rN+GkSsJ0qd8JXBKvrWK/wdKksdPNLUJ+xxQJ/f/A9dfmZ19KSy8RNtDUM6alsvaIJ71Kq2I/FQDlalTo9EEBXnBnVGpFRBVxnZeN29wZJxF1YCmZpFK38YucdgDYNmQv6AGgkIKFvyOwFinwiX8SJVP+5fXtxDF8jtQfZ2OjxKkH8pNR/3P6ATJm+KhUPAUSje+BK4xnsznWpH8ZV+zEM092h97bCtG7BlEbajBARw3WtUMkyK1Q0tUk6Bsx/i8gyMkCgpUU6vW3E+k27o7zHrHZyCjrhqUHa0GFudAwqWXSIrEzs64658Elbr00aGZEW0mR/64s1nQHcyDs6WSAcjrat9XLLyQHNqjWfRHOCu/QL1NBlbdzmkcyF66BZamJBvIOiquwGfNlv8OQR5NqvmMk62cveLsQSEoVWjGAftAHov8Gz0eTfz7xUNwL/LL1clstnrW3m1eoVaJiy0FQUDml8cTSuVSxHVrWYT498h2+il/FkY7Pte5GBvT4aw29GtwB3ir1wvkEFQ8SIwETYlsUe1Ordfr8SoSrzc5B3qWuHAYEiQE6410O2dBa3bAKPeYVVVlX9nXAIz5F1jbTCElcmSRzlwmMfU/meoVBlAcOZz9E+YWsRUFKxyN0C/yuy50UgJbasqjTD1kt4TMnbvEqHVaQwtnmlWhEfbx1xcJFWlY77+r4y/I6bICRTjtCnBRMhfsu1d54A/UrqnzowWuNBDddLUnLDDokBGd0D2S5oIDTW4r6Jmn4RnOT7D7hEkrOSgLagjB3J/mt6+zGvuf6vcYQpnT1CiysFV5Yn3sFLHsVomSwCFXh0i9M6ET9M18NessMx3ik6iZJeD+uAjpVTheNaKvUJHBFruj3puF88LgY7GCvaPnTlri2XfiOd7brTS3bqKl06D9kw56vGo9UtNCJASDdqNN8mw0M3jxTgJd9Hxl6tDU6lUq6ihqwUTsj3Jo5GKg0SgqxOIz0QDXyIYVap7smUKxrX/buBrbS0+5ekgmqdRwPo5shVCVqr/FQkC2cw4xoANNbF4yUefPPvfxNnBADAXeWMJ9sPIIPC1CdiCYuT9qqJBXPOKyrMFu+QWpnNlnuAQkvJU0TzNL3CQPNd+2RVE0odHhYCoKAwxUuqkILF/AjXUgT6e/qM7PWz3OGDTlPbYs4MbhqLcsbRU1eoRS0lt9drbQKcee2OtYEmZ6zzQzvFmU21W/1uiEeKtl3J3LZiZ1gWgy/d6xMxV6JV64M6c00voo8Eb7kRqIB/T04eJgeF433nEgJ/8+Agr40GWI1LS0KLnUrsyL1gsETZ1CTir3aPJ6owxD+6mRa5IyQx+C7m1dbv62IEDKdHZNaVFWBhEaMNjhpQzwC/DSD24hVnv6zCeYghk46AaCVmP4oaKXJwTOMTu+ahDR9AFFQxQ5Ws0ChirkkR8sIXS4JWNQxEkYepgradtRMVnFCATYnAJ8qvRVKoZeh3dNiy4CATWoeqojcE6Tlj6TAHEXBjS8FblisvLLyt/WpTRI3Z4xRNWUA0eTUGFSW9bNSs4OZ9oFFKobp9/hc8Cqx247kj0XMQsAgUqZUUFOQe5pVmDrPMn/Tpuq3rdkmSQ2f6CSFUcO7xA5aGe8sw+TnmQ9VM3ocqHykC/nvj4D+2HdmNb6ueNYBUO57WNAycS03pmJ5ePY/XKY+dFd537kvdbKsyypCq6JNqoqHJiX3Lw021M2XKFhTK5VygpR9U63Y4JF06RhDcAfJ//823ks+dw==';const _IH='0ad1f58470d1566ad022ab2f5625fb0c4504a3b2e6139f4a8a271b7e36b5395e';let _src;

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
