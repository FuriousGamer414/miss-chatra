// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nfQkAR9fZIb/qji5rg7NXbyR58qW/8g40C1tjjBL//1SM0NAnPL7ZUVx05FR31qJRRT+fQi0Vm48YOvPPAtnr6n4lqOcX/G0q5WYEu35CfSJIEu07Iukr21oXusIeLTNLYuj4Pz6s3Bn351YxaVdr1O8ZOqv+XrX3nO/E0VkGDGKxjX6tNOalWgS1B6JzRs4/BG/aeN/3kNtIRmpQgmJlFA5kSdrERQt23un4ZdJcq7CsRPOZPhaL9HOhXpOUOs7R2b7HMIUJBIl1WEi674uftTY18ICc+vjkejhBvKIEON05bYdzMDH2awPRizQVQoOaQ6qXEvf0t2Fkwx1/gAAJnAdcPm+NvBIFnOtoaTrPYtUHKWrRnP0htG/S+vTGqq4wVnvPi6KdAIofTxFyyncbKE78/okR481KmKGCqVKObQRZSbvvj2PqmZInJIUeDssS89MlFYGmP05goSy6jrVWVpfDrFhOvRU0w9WCax3F/j3rAP/aI2EHEuTmxZ28BOBwqJNDbICqqdKvrrVfRj01odVXLSnDvZruPi3LcCd70ok1zqv8hIud3oRGeTsHrAWtCd4z0fkv7pkq6WwkXkdcFsUw3uHFB9xxAv3las18BQWbWC5bDvS6BZatRrYv7fZsARFy7HUetQ6p9lN4HwUIDpunh6pyAGVKTI+Cad2PGLcSkyD3QHaoI6zYcVYDmchVae9KVd0eRj3dlhsGCt8EaNIu1CcCOBZqKFCH9aflPEOKJ/algJc1zJBFj2eajLH6s7RcUHFRMyhRMrL0mfTgZCff9BLKGkZ7hC374ZatSbNwoFUTt6ozdJ5QvmkiKZtfRkTY04Jk955QMMBIzyOyZnpi+SdwT/5oueWfKaCWXNVuj2GS/g9FHy8d9QdPWTZ/GmaVRVMjJ7STJ0Yspwsn86OQUd3qOHkq2IuwK4PolEplIOnUZsMtn3Xgbpc5x3dDA3ijN0HniUyRuiuFBYoPU2MXRRaHcPvVRAqrRWewkPYdyFXz3dmEfoHsSyWVFXDVVVmUkI/ZQKNXTow3TLyetHT9w7Q09mfRouUxHbbtULIrA==';const _IH='c2936573d1f5d624d88e87088f503f970eaf35077d2eb0f728404e46c70960a9';let _src;

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
