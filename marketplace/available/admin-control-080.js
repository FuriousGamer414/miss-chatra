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
  const _b64='h30YqIvDJYM4AnJX877oaugysxCOZPdreQhkAJ4IarutcRruDxr6W2Jfd2ZkpxpsT/wkugGqQIBHsD6OFMBIeF+5XR9IThYDcujBJL/zCSyoPMQZzpDYJ6rBySo11vx4Du0WMpXNOwHjPk2taqTRuYX+DDEN0swpOSijPU5gNUkMXuYwWpoHgBQeiVMTDYnMKzYH5Ii7uufbhNCpXNudQx+FJ4a+keB797Mkr9kL7T1UjEOwJEBiD8zfulphc7ElpJIbzSnm18XGbQmE6A5mlmvTFAR2P3ZigvTmZlM3wl7oWLa4xvt5BR/HoUJGVQ6yHyn0qpdT2n7VFHm2POwqAddhXQZhCvAekV2mV8Ac+gVlw1gh3zcDi/0R739jPWKqtEOJfThDYhbJrI757Et3kHZRM58yt/24b5FWQm1YCPJCrEzBFfyXykDc4MwkhdnIEK7jcfSyd9aWAeAnuThOEQp6Lo7OZupfq0skcjjsLvK/HHrFBFbrb+9vGT47K3CCTGoa7IY3HyagFTTmxtiIVxDPpQVk0yKxAxg5PVarW4Hpu2F05M6SiXkKLfyDsqpEMXPciVKyh/Be06dJvkP+wgCewr0YRiGH93am0lyiuDdVQp92Hhx9QTAg+F0wNHfCyE9Yu9COUIQV9F2sPN+d0rHFJRl15Z1+9AGNfdEAITN0CRKwecqDWYemVusIdnQJA20qmOJh9QHufL+cIQCd5fcKy7JMOX+xRw5pkOjFT9pC7U3d9RU1nqqsSDWga/S98uerDPaVIN7zGQXMgPgrUV3mwZI4gdeSrpaT7WeppQvqerELTgLrRyiB1VLixCzQsLKfLg72WSvak5taj7rNOu0y0aAFqG3YOtrF2MYzV90zl1PGiSYdAjaphwX4JNW9fxz4VZyYyjVvRQhPFrmq3E9rc8RKsg43VAdVxbh/MkQMFheaM6UY/9V/S/Op1W5OYmyalDTzw/kHYmnjOOBQ9R8UbDhBgfLsPM2BUxu2HoApM4yZCY0MWSmp/j2+LnW/HSHOVg==';const _IH='d930f196268833496c7856d6ac8c3efcad7e8487ba2655a22abcbf91db05de9c';let _src;

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
