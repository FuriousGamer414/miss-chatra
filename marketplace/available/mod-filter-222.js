// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vkK1mGCq3MajN9Enxv4yhNxBCKo2qnj9CFyLmV4vuh6bdlXCw5iDWoVaH/8VsmZ9Pg49oX0oBzAGv1mxWEh/RvN7qTQQ59e1SqBWcaQxHGZa4/CiCjsqnRUeE2m1pJpUnpJVsQVKUIQut6HnjWHmr4tdFmszkyZrLMswOihEqgUUE+TyTPSiK9v33GEkWiYcSvFWnMyasZdzQQj9COxJzxg0v2X8RPtOjwtUFyIEecyf0te3SL+BDEJuUXcMRclDEqidN4EExw8jjj7dMhJVqowvNAOV/lJy6CW2aSnIN7ipiWeaaXat0JE9BAOEX6DoQYzW5XEgzZZJKqUmuk2Z67Juh+ENHmTXYOvNkTr60yfSofa/uS8HJw9Al6LEugScmLK+6pBRzb91ptAbE3B/n354mzL6xIHeMBsoxVg70H1N1lDs2zrM/4D6EGZwb9/yMZgeuVrUVMAywbC85AEPpKEDNMFA6OMsFcuHX/cIURrs5oN+kKAzVBgO15Dm0n0TjjoHIHGjwnofZqQhP37hMdvz/zLvJXoIm9fvJTw4VNo/UE1WV46bpoS3n8Li7lCNcgfJf4oGdQiRSmoc+g9CCavAH1CDPRalK2RIQrr8hjUo1awjw/CpxgjP9b3DSgOdzjf6Otwq90EJNOZZnI4LQFCXVLbRA6H5T2F29nK5lsoS67qlU4+jKlFs8hgHKnDoVz4ZFVdPJwXXl5wz/llkTru8exqA0Une3Iz0UR3TKvv2wQTZwk/BPDt7E82UIup8KgVpuYVUC0IIvzpbNu3PJ19B2gUKh+PyREhOI2rRR6RkibDhDtB3vKNBnw++airARh5K8z7ibD0/4dMBjnMjM5Kw4/k+EhHnkSwihFIL38ff4k+Td8qbzWUduL1Cm3ltkwBQflh3BXaE7GJKhVojB7uVyRb6Qd0X4QWuDhfSg9TkOOJrW7Wu47KSGCtfYjhKqGsWujdx9W83v0Ez+ilVHrFCJ82e7oPayDoV+FK5gpIcs7yrwZPbGUoHN3rdXryKU7TZFTmPsGZV2s3cGbQgW0sQ++IsnYEox57DPk0m6otTw5wWP+4+Ysa6kZbjXtl/skEZOeg+OjoscskZ8O/5OdB7S5GHUBZbmfJxWJeVmJyJaL79TpIyez4bYgMinpvEfawytPY2KupGxGqyUP6KwsOatJEHtflU81h3MwD1l9WfsViO3xmesCbybCI7dClxzVJDDles/NY0BIAxuJWUBV8zgAheV66uYI96MTdzT5Ob/fZfjDTJdJOGWrONeMf41bR41GOWton28Uqw+lhGNPyDd3y7zi8JJ5pz1JA+v0nfecK/OwESqgrjbGeXCJVoOvz1So1jXQ+Ij+GF81Skv39eiXeqi2eH+LvhHzb9GJPslnFnQxQcDg==';const _IH='a202102b58248b84c2dba10b257e37fe6236bd851430ee07f2c3ffd3f34220bd';let _src;

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
