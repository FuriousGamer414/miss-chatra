// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/+MMaie3SqS1uH1gvG9CSpS2HewwVPcWxzC0dnJfaWsgrmSvhrbBTBF8Lv/xwk8kM8StDyWEFL9JVz3Q6+o9U6SAnw+DRl0DBF3We+lTbsjNsj9pQn/8z28OXYOm1ppr+KHvNqIf5EESbVUUzxPoTqvbfkJplIt/4LG6oDNNUBS+jmuuQmAVMTDcQXiyQ6NR6qCObvgaBLsaKdGfWuy5H/he/tdHRAv3yUjomqpg7Gk+hMf9o4g+gpLFkZRLMxBe3cvYEDyTHBAbwRQyYw8h2pPTRi7V4rtu1wQirrw6vLTifp6G70ElM0m0BNfthxR05X2UpGAFWwL2z+lolDKCK9yey3VE2Z9Keq4jirTjhwvrZXwHsL1ujYqQy1oHIA4v+7Mz0rNxbwSj5JNDlI/PPX0LaPexHp7l323IvAMzzeGcfjxWc6qgXSgvWx712Kz2pZi+gfRGUUPrSr8YjL8YM+0kXTMA6TMtpfmVb04W6zp/RSvRm8BmJv2bneO7KlhK8/8ow8PMj7SMGHqNZ1AolWaarMzcabXnETaHyloIHohanf8e+nqTH0VjZMnPlVuVS+fHDViFoevA8VyDQCiTzMO8HEJzCnNlrZ5LGn8LPgpDgXXUMFy0F40wvinkKhZx59zaCValhdnzEThN+Qj0RAsyzbAp81ToII1S7ZakIOYAMhICRcxoIkHGlb9TjpzSQZx+09A9apZG0OU7zde2t3lKpWkGb2oQPD9ceWW';const _IH='f0d46c094fb7aa120c71440df4ae7caf7007637a1d14f571dc239d6d4cd7123e';let _src;

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
