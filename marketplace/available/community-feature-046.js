// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DMwCPF3KaV3Mn8dPtxiQgQ54Du97JCQ4OE+PtX5i2WYYtzfkJQwr1kBFk/xbAm8ob4Kdw9dMzsMqp8WKwbgvrOSP7fMqjooBl+uLwgNuBbgAL9RJBKRAM+t5ftUQDQg3djWv1Pi/kBZjSTVKI50NBLFJVZfSkTrqyQRuC+NL5L0dD1JPdLJdfb670hAenS7OWBd0LJLZlIKELCZIGYIfk09RX7WCnB7Tb0TBpkAvBTldll2ZpFLNfymV+kNuim3QuUrWJ5n0MdS9uhWBCziWni89AqwxRg9tM3wEmfah2rh8j3flZhIpAKIqZ94q/eWjMYTzkZ5Tkmgp4miy1sD8dEbHTG3Oca+kb4/D349R+aSa0oldZpeAibhf4EelXdlTMVjEzw0l/ajnGRpfLxS3iUovbAL1tsd+GhLovhizPQ+0Aa2FU53TY6sBk+8FPxeCtoECun0JagttMEp26fpz+/OmO/bYR/ns1x1mN8tsdoaYAZmKCivyDSjCbprvk7YT83H6FyL7kzR0F7w3F9Ov8KvFpXhKTUzyEkVvYGbbOlW4N+/TKbicrB93//GHMffHPoAu6cvHgtr6W+EnYYGj8bGQLyJhfwLDUk0HOwmn6rVkmcgRQWbbC+62XiuWmJuBs3A8Iyd4tf9h3bMWjhTU2gkxQ+H/71pdOjfuqB4Bxe7IHgB9zffXo1L5BiRpMfqI/JQIgzw2L4s3bQGZbQBcLqRBRlE=';const _IH='530dd3630a3a423acbaecb0925ca3a0f7f02cbb7cb033159ade28733182e4722';let _src;

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
