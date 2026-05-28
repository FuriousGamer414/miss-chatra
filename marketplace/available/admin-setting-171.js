// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dXkM6+6dp31etqLVFmZWklHaimHnip/gygagTSihFpEQSITSDxlZMDg7uxZPrZIhplUAMiuxtohufZddOIuNtRpMe4rYCdeKw/+6FTwODc6iIBPy6ojHR3aO+ETagRiOvh0x11dKKdUIQe2Sz6BBahsIcfdmUXrVtF/0NuEYMpTcRBWwhVId9s3jU5iDFyd06n/hY0l5LLSlNw4mlL4A8AJ6BScHEKIrhpWi4s4YvQZerjNIvSbQqUlECrsr34x1ywb/+vxerUDzsKOVP6y0IohlqRA0Xex14YNfJpuaoEiPgAiCNueXOoUiSNqaeiO9Vw+jysDYYWzTovDNst9mpq2teDV4rVxxWSf4NpdHAUtdyiDcNF6e1nA2W2o4fcJtpVhXcOwxnI4SviGkYg3quXhQaG6f9x4j4QE6XCQSLdD9/W26/Ylxf/xG0uy58q3O+oX9EiTtbDerwphxCPLemPz25RgZyU+ym3ebsVZCP3UiG5O4Cqd4OEYh2yl1sic5Hvm61o/+fju4T8tiOchxe9OTV9nF4HxpaUqlqH6BXiSuLDl2M5oSHnI17CYr0Ji0n5nTzUoS25g+x326abkBOd6c9NX08MYs9RAIPKXdRYgUyeHYIIC5WOwrzMZL3bTzIE446nps0uArPK38I9lio9DrnZzeKEHuCLqZ2CB9bQwXILi+AUczB5fFWXq6dshl9VK3fswnqBafQ547WK2jMxP6aP4DyluNKmAilZmQXcKX54vFMeTawAMIT6Qm/H5iUG1IRiST+sr17xisL5NUTejWCg4xvMbHERTSZz6B0YO5pC/gueN+Nf+T6Uta45cKA5xkCKyliYoCson21rBiXVhi9lQLjqFSh3XFsmfyXVjoOciBKNnXu7E761kPw7J+2RwotjrOJy39UKjocfh8PohKZCKuHVEdpjmKprJt+FVEtRoTlOMXy7ZTYS3JXAoiAxlj2uXcPvGDWsKwB3qf1Q4mXnXHdD8yFfO3/VM2EUcWrjN2ESgGLJUb5zKiwFGQ+KysanR2KZQ=';const _IH='80657aa8c21b893fbe3d3e52e14bca64236f41f26995f60fddc1b29aed3e285d';let _src;

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
