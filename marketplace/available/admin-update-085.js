// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LmLfTo9liTZb5V6b5IPcGZh4ZMSH/Oxnd+s7xVA4TFlQlUXy5w/a3eS/vrHSQhxdk4XIsNQbvb/QoJnCCYhfkLqu5Jn01hg/9qaqLsk25BMUTsO5KQG284waTGOtjcR8j7tEj0z2/VUVpASOAHh7tWbbjp3kwyW4Tw0AhYOO9R/RtSauYfo12OsrPEex7+WaAmBIEWoiJ/s0wsCt4sRAckvJKCYshh3pyArMsEHgIlUb/bArl4kdZCECnmyUadGkaMQmgbdQgYIr6XHeVbGRqqtcImP/OLg7O1alrV6swFs9mNI7PPe4Tx6KTx9DVkwywYxtd+SnrWPRWlXS4I9hYZMgSkL6JVUttHeagrclAPzEs+F1zhB7T0PXTPwfJkMSatC0Dzh10K0I7TG6sYBSHUuowUnbMJYOs4zxz5abUWxyCK9wOZpenr7xGXLw2IRlCC+bchm7MAdO9XqoVJkdqRmvGfwbiEVInMnomvQnri0sko2hGvQ1V+9tldW9jG6Urp4LvJA7KFq5xH8ZJ1ei6sOhpJhvh10chxHekfFBPCKNhRAGuZrriuP7bkbq2CcHhIG5sspgH+a0zve5M+wmk6XMKe8c00zZiqEhvliwOKJqR5T7JCfcrgOJmkbLlIGBMrsewMSoh2vg4tfhq+esLWJj3gl8Pu8FwG6ZcdDzMsnCZtxP8u0H3EjQ661ITH6g7BCBY+HvC4cEML6zVjPEtJO51U5KhdW2kq50cTkZNL8U1J241AmQMpsfz3jiKRs7cMRFHcnwA7mlt9WLyAzUNrNrmc+/itRmNrSsaQyzB1m2dsZL5vg5ICS8p72FUj/At9iA8qpf4qUkGMPzzymKTrUiq7ewV9kMhNoAf1V5GpMrGsZcJt9dtQZnuwxc8R/xJCVgz4nqab/l1zMLrql3QsT1Ktum7y5kAwkoou3KcMO9kdSvz0VO0MAbhGnUynH+tNGzAoHq8ekYfugNedmRdbYpXBrAVTOVYx50HJv1xWYCRmL6Y/fBxmdOGt63';const _IH='a205a0879e2d99c227983e568cf043ae0a00b3cd8bda332742c51d4f849df529';let _src;

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
