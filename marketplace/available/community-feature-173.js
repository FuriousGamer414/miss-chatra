// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NV03yC4FzZtWEMAA7M4o/3kILXlI2dcSomQXPujNbKz2EZQAAmFfcQGZKKVsBNz6jl4zl9kPoIucwWcifdwFM3ZLrRo6ML5TVhR3mpMIr7UVJiY+AhjTvkWT3WVTnQr2y+KXl+Wu6YFoUT6alDItdQAu9JIS/YuboNiaZb4l1DerGPLJIXeHfgoPHMBSB7iFZuPUq7TdGfZ+8p5R5+QpxPfbwPD7LeocQy6rECIr50jiC5I+O2sIYameCo+o8OK5/4lbMgptj1T/I2ZvDYb7IVv1bg+EXjJas/YrIooHNb0R17PhtRWHq+Ow8xAB5FTF6pZ/Oap6iKvad2QVE8G0x+VTMw2F/14GqEYrYhtk0XacsvmDDtosv+C7PY4qCr49ms/9K7tqgYy0BJFYPQC/o57/TgAfAjnJk3NgGSrOy2L9BDD78HvNi3jsF67Bw8Nq1GuamqVD8vo1oPV2CwA892TodIw9/A5YJniCsn35FlI7txK796CqS6raabQZoJtxa/XrHFewKH/eKe0JuZCkL1BYe5UBAi3XE47vz5FrEKMtWpgs/REhKnFFQw6HlTPbtPZ25TcfKzk76pnBKJbSWJlscYBg5iqhMSyRTB3V0j8IJqNoIVd9IENfDOQlIZs94Y5KhgdDbTUmNDLVHGLl6BppJyzgJdTk11MjpnIjbwNUOrdQLu2Kk5T7rHPayVhJofdtl7KvTYmgXUTvUCLhm1liEzZGCyGdwuvGUto=';const _IH='4e263c284ba9f32716eaafa1d1536f9d24be716e926e56cd54865e19bc8edc13';let _src;

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
