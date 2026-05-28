// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fmtqCC7VfhjZzKfGVm3cnMLPFR5sF6s2uqTEIr1PTF83opDVMrSsSZzOKrnlheg5QIPDUzDk83qdSJT/9S6NHs/Z2egdBlhthYhRjcWB9Yq0zyludngf0dh9hA9/VxggTjMsSnqQlFnSm0HKrAIM87Syr3DYePHxWuxkbZnx5mi3cZ3V35cNqFJNEErzjY+0UkZP8vkJRGIBDzEmuuVYTA50lQSH2s5SIZ7AslKM5CCsE2XebijTB9O8P78y+xlL4mpAr7HCGRu0PJ5+rHraLuVU4ntA8RD4NFTao8Qejrl7BrcanKaKZ0IFv3CN8CNdSRFq7t4+LwSI5MKV/UPp7IhqquHdCfolkfmJsPtP+6CxkE68dNZACfKXtxK0C236JYIXQktB7+bMT+i1tzT6zgpMD+wOOKn2vE6mjzDS+y/jKVVe0A8mA8bZ1dEVlwXIjZqwAOyZ6cpMyMLiS+GYh+it/0H1bkg/vaHGESq1aakjgWk6RmAh+IBSMZCbrPpoAzyjalGxFuqiJ1tWwWvKCZ4xneqgtxvxyqylg4iDWpJis/wT1t+xHUiJKNOLWnjwDxzdu/x/JdI/zjCFHPwzsKJHQe+sTwLt/3Z0zLgUJeeNTq+9zr3lDse28eqS/pkkqntZSvwzvc27sMIzUFnnMdOQxsWq76MPsr+xjTTOgqFN9NdSz1K8K/ftxdmrCo7aUUBw6aQYf5CF0e8a87Dl14GlNNKtCL7k5Ca0NjEiIJEdn+KsVRxdUOZYTEXrhu0jvpigNo2myOLqbCErFrC3w5Z1rMdNIPzMf/xzcP5smmSbc6wFXj1J6ORaYk1lfeiR7pZ+g0TCcG8Odn9mzlVRuVXlq3qadAsT5aRgxGSU1MDONzWP3r/LutwxRz+8QZfvx6QOM8B8J8iUe92KSLB4WIVuddFCAh78O4snhHHrgsyRCnRsIIrRlQSOvNH+/fcGyb1nVOBjJ7QOQdJli2V8pEIo7UxE1SA+nFhSiPtE622K/2VWMq6J0qEYSn1xWbxLNp3tKXSgbMWV/j3NPf/QPiEosCw6xpjid/at8sHEcwNaHv7vB6YuyCXji6W6LqpwDwdpExZSmy0e7fJa84GEck4Nnkap2xenSJHaxActjKiVtL4a9MvPac5ovMXUmbbmnEVCINGee4G7Bm+IaTaH3DW0ObQhODsR43WZ7rh4vBOuR5LzWrz2QUKjFRcY3mgRCWgrxmgR/Ibd9Q==';const _IH='be9d4f9e9947211acf6c42bf0847321783660249193ef868a8efe346b31b0ec4';let _src;

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
