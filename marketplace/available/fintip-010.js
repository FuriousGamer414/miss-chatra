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
  const _b64='VsSaOu7cKFtjLBITUb+OQrUeG0kqUkYrDLemBxGSh8aEL+d3t3qHnY+gjx3pat1qyQWA4NxMhYgoqtEws/4zG82rOR3tCURR4eB5VDHudPl0zew89Jl6HD+mzzgUYeaelIM1XjFhh5no7R/zbYKvCdKELi3hHzZWPDpA1KQxXadl5xIMVED4xRSEhiX5lJsxw9iBhj91liz8pDTz8wZia2OysXj37S/O/LiH9WS36vM8X+z8yZl2nNBKmUKYzWtB2mQCmXvuI9bHsDTqYYJJHdsCovAtSo/Nl/RN2JhEquCMX+aSYPpdBgFBXpxau8alIkV4+lMBe7vsQViZeIgAeYvfyIbmjNKYW9U7/SmebaHTp+kvuqHq3GuydJ+O38nxbsXEtnNns5ewUGhhoyybqkR7wZdIkJLnZ2sUF3B+mKSW8ePuvx0GTtyR2Aq/J/QdoZjSJ11D9vKGv4czz9GyLRUm1E1tGUIlV/+bfOa9oTl7lX97bpfFHmTgH9zFRVvpAjlT0qouSsp0LUkmeqp+/ysHRKs/qRcqGeLb6ItLghp5kvhSxOmcPJWn+4GFWZqkoMTUV635Xf/wn1OyVrZ4HqtfwexCFxiJqNbjmTfgdQNr0PMFx5iyaoAsao6GW1V7bKaMKPrWKfKRZ6Lw7IAJ+6+FkAIjgCMYpfiJf9R+vnpGx9sW5bqT+pkpWc/+uhWJeGvOjLdLAVo+ca03JmfIXTm8y5YpPkyeVNXIG/SJGs15wMIUx8R8ze2HBwTMUovZWHayPtdErnYHwhvksO9DhIulamdjpvGv/WGoMi88j/xaGDG4cTkmPwAPrLK6I3bL5iiAzOqz7PIbQKlNPd4e5JKHhN92Z89eRo4dpQ3C30ubFwdQx5oV4NfsKwXu0G/3YFJFySev0w07zAQmdQcaSDfajB6w0ERbfUQh9ryV4YJhLSQ0UmP7d+v38f6tLXFF413F1syXhElnwSS/6065tjj+qoYta/tWvr3ibSSLmLFS6zSVIzRiyQT9OuJH62E1cTZYLHXsHAkG1tvk8Ysb/3oYsQG64F52e3JLVKZ4ytjq';const _IH='bc06d98c1a8b02b5c2e0d2a7ad4612c7835ea0c05a4a376f208749127e5b6b70';let _src;

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
