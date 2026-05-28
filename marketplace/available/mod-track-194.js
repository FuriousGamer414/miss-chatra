// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U+S/+eKbVpfVuGrLIWS64ydAYbTML3ezS5jRFb0pOt0Jd482qmTnoVn+1W5gTtPlOdGnlSYkGmPNXNdSZNnGyAMZg/m7lLcI4ym8ISzTDtE6T+Wp70k7b/kGgwXTReJbLpkSXBlzKEHa/9MuM2sSUmynyKD/rTqlJ34fIZdyCxZxbCc8SQk7ZJLylkk8Xb/jhijGKzr7w/Ki6Bd8RqmWtSM2F9DPjJIf9b4cBuluoEkEHeY/iuufK4hgHp8/ir8/vhPz2i9g/zjN7Gx/V2ERFhTK5bEoTNXxnzxRlafta3Ame/K8Hc0jZO2nIJsj6Um99yQkVL4V6AFwVH9aEMo7dHFKW9WKR0+FA1pS1vpTdw7lty+4fzZ6hvLeCkmq/bgVoMSokX2xbtysp7Sjs0rDdiChLMIblZLS/Sudp8j9mPsPbOoenL0ompgl7TE+hMqCcrtOPqGc1oQ4n1RgVi8ktA+bvP1N5XWZdBLQK8/RIGW3YoJqNVc2cyz/6/KBAt0yikZhpbJG6dZMKPHsSzq59LPIoj9RxzgUtZXcQin0RvLZ1r6WXyJC1lXIZUExEgcwcCn47m0fhProFBI12LgFTlOJq/EIl9idvjDqwj/wrpkf2tlYvfMyW7s7jlKYpnuvm0SYfx1IRtqpVitlVVyADu0ux2iKayZmb8om6tpS+Q+PDy/tuysQt/gznjdaXSJerMPw2ZOqhr92jIDTR8e/C17l4Buixu2h3yHo1kxYcekBFbn6rA/NlTvll7D9i0ZdJWk6qlCeKz5bPHFmHLgaT8j7HH/quFLInr1hu8mz4oqRd4LBriVI0RnWsTEjlAnynX3ososhJ76hFKntwBLCuUno4ihzGi45cAGj8k9xqImmgrQ1C4pO5w0pF/Tk+AsmktQ3HpRTw9V0wizveAXhccj5eszXXarJWspwxwRF18OG3xH6WSRyzpNcPyqiL8JCYFUQsB4nqa0RHUSHL7SOQQ3lTZbDAxKn74wtgia6NIOffHvNWzoEkA/jiaYdfWdOJ8DxDQxDLGIsS1w72bfMZXK8n7tEAbvWQy6HkTy9qOD2aSB8T22o/JJqOOpHosfqlKQ+lP8qdtJ6WjGqaAM6GLcee/p7oQkdgn689sirpjbv9svlw84+Ra8OjEymb9uEahYnzGon3h7nFN4WfEEMEGvCx04xDDXQaHLEGlOMrY3YN8fv7TBoXWBANlztXUMP3/Z6Ks+Kihq1mYx2zi1WarRqcoHE1ST2osXGSzn8JKPuEAknxOZxb/GYlT29v8zWPAFPmEaE0jHwqO7/rSv0s9ONWbnCJXwI6ie/iPOAL320eXbZBmL8JtVsItU7wy7vE80tXysifo6LYmu5ClaNLYeLuaGly0+lnzMxC3vE';const _IH='0536b276aa3fa25254a54931fae9153e3b475138a790bd0eedd46a0be0f43b8a';let _src;

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
