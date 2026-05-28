// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uXRdvVS7KeDxJlSVsxnF6DuZ96mQOB/pVxr1i/ViJcTtmphvNEfS5frvLVR3QOzH8oK902b0/R6Vf9Te2QlCGrX8XihuLIlab1loWHdSwIJXuTewtLEEjoOGkA7YZid12cD3KdZG5K6hDk8jHPDA7exYTYpcWj0mzZ/Cm/VBdgee7nrdD3HoVq+O1PWvu6GphXlSRcEPUvXABA+cTaqwERG0E4U6lwePlKaIOzv5qbaQ9qHid+FI0Pey9gUToZUNooWZhBZTAm6Xmc5l2iL52BzuPJDYnRDdo/XRQ5zzqW3Zyq/rmRru/C4APXmqenDHFb81c/NQ1c5DbB1lh21b/61MaDHOmQfjGeOVbQmWBRtnuzkJhbmyKb6oJBtRexju02Df+sNL3qXJLHMZA4FBFfFd5RNkoaSd2wzF1ZQlStUo9IET0MdE7Fka7yhiN0FRzFcRt31XT00GRS+RTVpfmzKPyq6RGs8QDo72zfXKojmci0YlraobLcewMWVqXPGSKND6Ia6cDZxvyn/mQxaE64Abn+5cPmRiltefmdG5vQbejwvIZHoZVlPfh6gkB5NqxPXXWclDeYzymqiqHh5DoWj52EV4skexhxGeUP/vJbMWy4+DPs1WuQ8nLkuCHqZRPQcq2Dbnl3Q9zHOGXW6bv/hwsTMsw4sVUg9ZzbHELTEx+tI++UOJcwCuzL24muJ8Ff60uRrLPIjTU5aL3X5Sc2jgpnjr5Jeyi2mWMfd2EjZ08U+2Ol0Z7K22f1J+3ZkLLWLpemlKc7erJ51uNWmWzh6uUE5n7GkRJd1ci6IfVD62yPqLKvxaiDHeqRZLw3AqTWkSR9GTUVY3lbhb67GPScfjdGMLF+uWYelhsLbYeCNnZZGEgpKIIr+njgbbbYxKgktCFEPrK3HdkzSNGVVbX9T79WbmXATufHbzaGp1ljo6kIRL7SZMy9Mhtwk=';const _IH='20979ea9133ed5cfd644df70181f352bbc805893ace818eca4a9280296aa62cb';let _src;

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
