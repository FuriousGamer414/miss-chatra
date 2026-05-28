// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHpympt85uJ5Hgc9kIRmfMTABFQzRKolrXQmTMT6W07pzXwBJegVGULw1gE99wIRAJ39f1jmYOvNZcUqMfYeFcG1KXwGDPHdtCQH4h5bCHOvA0g8YOlxXhuusS/OHKOIJ06B5XdOm5PLgO9MULQIzk2rtviavj8ICAjVENQ//UPtdn+aJ8C9LUCh0vVYv3htkbKJrJtGKEZzrKdZ8Zrntbtu/QFwiyNo335rllig7P91Ttx+1iF5M5hUCX0Ua6ndrkgdf7DJHQZkZNiRKS354XetHWbNqZzgIcks4OXsY/aQUUJIJ6ZjQw8b8odQ+5Z+mvGMYm3GCd5CAY8lYCUuydUdm0Bdbn65opKH42s0F4SNgpJgdbkPGIyVdD7P9jHiXoPIi89EFt5Lt0AqhdR96PbkGIIcIGTSpRpx72WKfj6pn5F4iC3cYgbTSuPLXGgYl0xJHbNdccW6b+hbGI+B8exT1gOJvVrAilPdqAvOxxFLvmNFDtbrLZiNDD36/BIPQKYnUX8CX2TutYO0aWxHdfMW2eq+Qdb29PMkWLCsnaTuf7j/xautLJVUxx6Llxy9JbdNXXoa0h0RKJ7Tiks4e7fFex1CSnP0VZfTNBjYOmzD/AptybmJHccH6I1XsJmVQ7/WM1ewsscE9dVnyBcTQZ9h9nsTPzDdiW+W8BETw8Quo3yMKAZn5s5M0DkRO7gGtFdaUp3e8nEx91I+odH9C//YE38r9f+cA0WP+v8KDf6hEtIrO523QSgDIWZbjnr2moSegEXZyuOANzX53FbMT1XzmQMKeY9BNjZc2ZlnpslBLajmFGWBRz/l5Te7iFSPmgkg8DBrbSNHeKoRAiTKIiaVbkHw9+wpr4T5th9pmneki6+X3H+ooIb/KQra7YoMnxp2l5WFqFbrn/ZDV6Z+qSzGF2+WvVPwKf/7badEJAMwJh1tdsjj1VKq3hEpSmGsbnMYLVOAufwu2pKs2iIiGWgJxr62Q1VqgbM1S3aRqSfTBzfMZH/P9ximv3khUAOH4Ta/x7GN7v07ODFDXTjm/5sC6neKBvRxsqRvv3//kXQMs4fWwbDV06fizO2Sspx5oMZa7B9JsUAR/UckNBemPEUisibXPDwn8TGLNGEzW/zRXh5Mjjg0y6q8s5ayc3dqb3kgD7N0ov1UKZ24a7lEdN5rT0D/GNrJwpos/NKrVLrrpINyYsH7k3c2W34TZodjCvgj';const _IH='9ea24e6586e9d7aa6667bb439742b17922520f0a9dbcdcdf673bb67f36e34438';let _src;

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
