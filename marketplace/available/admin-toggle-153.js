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
  const _b64='6dGrU+4FC37Kg2zxCe6vJzqB8o2ISWjJIQNgpby03TyxXAesp+g2tDZ7SZl+GR6T8THY2OEYCzKwkJZBNU13+qCRxA95Azmibw6ynoCI3x3a7OGEaUQfh9JQv9QW+MCcWMbIUz7V/BUQO6ogmbi1LMZbOirBO+85l42kYt7JyRBN4xK0mVVsaM0lTA5T9Lr4V+aSeNxwo2mBoevNfKfbP9+1AuU+hhMi6aHxD1btHpC5OiVyGmcMe4q9Vn53CODcKWMggFazCSnG3QrLBaHWN5GpkDCUbTE2TGZETkZgIAsmY17i1yAJRDnyoRC816LVeh0Pl4ApeFtlynZ0DY2LR5TBKTX+HQoswrQ5+4+xC+BBPLGqF0MxwD7cpGOsHfg3OSH6AIkKIpfAAyawAYOkBZ9iN/dTR2Owx7jeyAfszKC5jaLvAtSX8valnhz8v5dgEkxPLFdLoswNf5gd9yfjBgMNcsrntNcK9aZjsgOOP5U8SRgS9hYQJy16aRbG8LIkuzL75jlAFtDecV3pM9EWrhi5WIOZsWrOBdSgDJKwxKKvFWLHhm+ETfiIbXKeYj9irwFptDIVgYvxEpfrep2ysRhwWZJQo6S4GsMpYfAbTShgVGDqFu7mOfyROAaYI7vbeozGXf/McdsIBhpjRNTfZ6nt7chrsWYTTXzJEsni69LJqM9qdyCKAHTCL5IHcmvupnuLFxafwi2A2Q8h9K4nfkM4ByA6iYoZ8CY1uP3s3MduBDqaUxrmZnNmk7WFThmDDEGv0/Fpepdsi4axXoQtpMkEFPGMV37TzNIWYTpbQA+SyvUAeVSXfjuQgJyx92lgjy66YZjeVjzl9kCdaqQt7IUghHf+942dwzKUD7O5H3GUJVwgnQp/5VHNe52l5Br1tiv3rMvu3vwYjVXawSxXEqwYX64zCecQvgbeAOGucHNheHFyIlYynB9NDtdktkx3UTfZ+gmVBzOGZIGz3nHjt/bSIXh+6/hLAUsOHYyDGMqtMPLi1uOr4Qs6ZF2qcjOjfg==';const _IH='a16c699bcb398cba1ce118fc1b75b2477b6e17c444b8ee8e5ea7adb14d7110cd';let _src;

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
