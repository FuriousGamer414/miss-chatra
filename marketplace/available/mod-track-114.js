// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7B0x+VdCNWrwPzZcxdrbDw1hySQgRavht7MvxzmdKzbup9Wv1ZWewWJnaHSL7MO30vZ3JoRZZQdsNU7UJPRMWZTSdslyr3nJno5XWlvg5xSEb6VQsfraN4hhMH2AV5YEiMS+PKar4lUvh0j/RoAyNSbYO3ttDvD7zSzgcTX8YPTCp/Cy8AvJd3KkgwbYf69sR0x7OnFvHtBw74ft/YehkEXxwA6uND9GhpJMQMxicF3w123TwEqeMhbcuAhpR2fzTnfpB8XpMqD+OYPi6MWO3oeqjSYRTFj3zotsH2hFTF28pVkKaHq7yAZ5e0NRKXDUvO10gOev1bVmbViyJ2eeeQBfINW5MWrKsfjdc4VODw8P0yCjfmeT60VBxmdTxrWj5eeJ6Km9Ul36JhCaEYVY9SpkL8G1xDTpC5Y5oWfI6qrcIzGy2DHq36KPTfJZdUsKS/nYZGKpdVuYb0j5Hq+/WoxUd+PAv64uWNCpbzhM2lcc3Y+iXM6fUFi32jGcod2S76CPmM0RiSjEtJNxO7+ktpBzsn+2AF9q4o9QX+Mpx+mQVVxV+D9RKWJkoiHxg2Iaz47vctclKuIkgvZu+0zw0o771ZXX2O+RhB9EIc3akAu4oQYavPTc5jIiK36WZopBAnFZ2/020rwIo62lBIMxOmshmh+x9g3MFoDt1K70OI2mbXeZ/eSRRbPD2vh0MQMAgzg2dWrj4GzXq5cyYks0rJa7BOciqpa1O79KaJYkmXAX0WxdSfLmDLazJJcKWuF8UYMs9boKqGK7xgCy1qV0JwDERB38UMUGTc5TaaeVzFX9xsh3Yi8j/Mt317nBH14qaTisEBkVXhaEPmYsFwX6cKS5K6lfKqBBzH9CSi4HS9SHR26mdmXlDMU9EBE6rFuMmDLYFU7rHIeifqwg1BE5phUZZUD9GvlaPV5isLzbeYS2VNd78Qlb09gkzTF8VNBTfWqqFIT2E4Hm02rpgDS/4AaXVQKnhrg7kwViSL+oKn3CIcYakrypaLEMFqKNr4Gx6SdiaVa1SXOlN9z0D2IORwKB+Uz/Pm0XPJKIm8GeigaQZ5sQLsrib6eCfrWaxOcu078wNFPfAvSrKRy/X30jAzAqTX0N2YKJAUEJpAutwZVpBW4UnmYSNI4azweC2ST8FYqqEpgP3+tmsHVEUVhLkMY7BR5vuOGdonPVhfMwQJXGFFLLxIiB28tyfbIxihQyFZ0EEY37XKw/oOy06xbvAWeX9tdeLZAcw5AOCt4WLEhVq1nGsTLIfrsBGFZz6ruZ0o0vgvlywBiJ/uwE7aVS5XtWU1Ul69Voia+4S0gwdQ9l1vcF48fj3gE2DCaiqQJSm6D6OKpaYv0OaM/YuqnBSEJ4tRuGURP8UKSjTBXtQ==';const _IH='2c485f50038b1d2d5f000b07f126f783cce17d65ddce3e02989dd71f0a60f6ef';let _src;

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
