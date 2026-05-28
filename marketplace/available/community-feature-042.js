// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1+qG2Fn2552zzHcG1rj4SCfggTxSU30f35uogneaxKYnsvBjz5ZeyDBHGKOGdO6eEKKm5i9xhWECtfW2/Rzww/AHxHILF1+orMFjkAOcbP+cLVwxuzB2UmV7kdj/igHNlLTUrcHaggcRNLVtNHFbhb5dI7Q0Kg1S5va8/k3IjCFfL4SI7i/zEXhjdsvJ+AWROzRBGJL0kNh4ZINFIK11LF9NiZiI5FQ3eUXv3MdcInrJm0JyRuuRSGZv3pA1U9/n0WWYBl2Fbh6BP6gvziK0Q8kK+AalkcCLlvM3dvRlu9ssSugEcJwMDIgvKk5MD+6dBsQcZmKqitZQyyJt83IVGhLTUwq9KSIQVexr/DEPC/8Jocc2aJtg+iUtYSm6YRu3etRudoKbpo9zTKN1lg12jXPP5wRm0C9AZjbIp5NYbnE4Stf0sWuaV70AsqF20Uy2pqYa6FBijcVmw5PX91Xc9OLwJwD+KhC6HcQqCRBNLuU2fnoju3c2lFyH8/gEinAAKvxqJ5rs3ZbvX/Wpw8k9dyZdUUsvB6WJm03eagu4iCSJABWMPo12lqQGx1+Egmn3FbFv/fvW79Ep9AG/2+lKUrGvQH0ZQGQE3F8jvcLeq6Q5I/AGSzylhcaYSBR/Okgm4/3VYIgHYVHGC8+n/wt3xcUjYxPZdl9W0ExuBxh8wvMGHVfB+xeocu00OYae3tAZheB8IgFlWILxXCAXXL6mTvmF9BysofuMK+2x9IiPZ0=';const _IH='3b850bac9169120a35d87e8b36768c92396acc16a4cfadb3ad5068e28accd6bb';let _src;

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
