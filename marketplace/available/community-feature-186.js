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
  const _b64='UUVOQ0XaFk8Lol8FQ9YU5o3bGioIVjFwQ1xA8U52zsOc4v+kdSwYyIvLbExppz+UGJqNMG6XGWFszg4AYhx8+9wchLv4Gcr2mLXXyAy6ylARpSlGIhjMCJiDJUFYSSd9wVp/Y3rYj5jgclFhSWKc5MQVB+8hZV7Y2QTDETLk7QVV7EsTjBYYCJ8+D0++upJTYCImAmj+lBiBRUpQBtlFU+YE2ma4OkNpjASdbnUAjIEIZhmp3QUKdVFH+IQZic1WPHGqik+efcLoDA4mpYF2dgXgB2PgXNitSX2N1Z18pfl4s/z4yXImSXyxEQ77lxN75o2ZU0nPaKqxG6z6Ixt3BBg4MXWJ4UgXdaum39NQgL3AfZ8yok1Vj+Mg0yJZ42ciGo08WX4m5Zu1WQmkWJOyn+Fu9P5V+37XcHXQYxz/nstNH4oTFt2hyncFLRv+qVNa2EaZmUvj8qZMUp035zd+CMgkcpjlT3SZs8kiVRib3d6iVj0MuBoFu1ci04hJ3Ffkmv7zHToQ6rdBWd6uvPgS7ovUqUhI4xAi0xTA1ZlJ2rrFkV+7kV5LsTK6dBOONTA5pC7rpgtkfxiK+w/gkkVfE6p9Yv6FeH0TSay+M86pThNBdxSp4eAt0QNRfqC2/XxgpykaQ70z6DJpWUG1KhtCYuzuQ7amwvns8aRrJ00ttcB0f/AzLNgvXo0WJSPYHs2+Mjrx+y8PGDEyNODuiAYLCBF6Whb0KQF3gT9/aQ==';const _IH='c1624152eb483c6f4cda24d99bcd22811b9fd995e1b1406bd303c9705375777e';let _src;

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
