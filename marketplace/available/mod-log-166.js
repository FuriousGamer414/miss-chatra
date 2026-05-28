// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TDfRfIlJGuLmIf7ygVuCqObQLcSZK2I6nZoBtYFITjDCluCQa6LgZKzDWwTMCILu1BhGLIjNmaxJw8xllmuYNIS2yitlOXFjgJO3is8h7oqiWxgFbptrojjPz7/da2XrigIt9anVtDn9FF+cDeke64rOIULwW9rvuKIVRGYha/BCZAe6rl9Dn9f3F8+hZHxJpowSPMzogOZjP0UEz7Ux8qEgqCN5kmXD5rCLVUpeHHO21Wf29FUxlrKIX0ZkONj7FglISQiTMOCVcHFgXs+RLziMWgjU0qJ8aM8TK/Krfi2MGn9xeH9BIt8MU2GnPKX+MHg8jE2vt9oRDzDepWuOgf4kSW0oS8xMCkwzKCQjV1d0F6rA3rqDvv0zvSvN4qVn5yGaKwk0mGS4Qx0ffmbRih46mjzOO31Bp/6yc5izBxUTC7fmD1LPuuN3UM9dUT6P3Hri10P/IsdwimZyOZtYHpY5qrgYC40ocgYrdMkU0Er7JNzweAQA00yNd1KYEsEWrnpTzgHgO57OzRrDApadDMagGQNUWaj3qwbKN8xHjonTIO6pJ3w6oRMShBqj3KMqn4eGvgo1mRfGhoEZoHQgnkNEAVU5xBEOJq9K+zH4sqZeazu0R3QuGguKw+hHzyszhxA33U8a4uxH9gxrtA6TpVI1pPDxA0JrztvM8tXYIbltWDXLOdFHm+jB60TcYleH7u5CFFdTMEeEASaAfqV2oN50wCaPCy/okVlSw33wI4kYo4s9Lf2iQGjfCZV/voORCt7hawxlVJ0T0HZ3fhLnwxVEQG1EgX+dGPwLuNRB5hbgQCqnTJDZh+Be2lg5JOPbR2r/IfFaE33dUYWAsRoGgQ5g5UpH/Cs2dNybomdKb2Kib470gNGQXJqkw9qlgCElMlz2v/gEStcGWeP3On4HJvdElT9YpX9fWLph6BF8dSN9XSHL3kHxWOx4NLdtvvfdOCAgrreZxoKes5Hx396p6aV2HY9WoBHj4cyV6rArgseGVPca0k9LwaNvoD2TNqznIaID2wgiPyIZu14/Go2xqw+fYvEi3ZmggL7W6hk8s8Ycjx7SAxhg/APe2XwxlfnXjjrd4/MhAsoyW7CTJ3o0zK3x5jk/lt/84Tz2COoumyvrpVqIgZJ7r+xkEyClGUYGCjiVVLQfmupNi0KIiBySiaiIxsktf4AXRhqwD0hHCMKulMESpTZ7Q1Bb4QAQezbQamjoAPkwcWg8aOeQsiaxkuGGNxK9P2KzTY8h2hjcHbXDrqlcfFJ3g3j1zkqs8JnEKLain4IOGO+ddwPTxutMQDDuLA7dN0VAeI0JnguBIkqAt5JuI6LWUkIP6m3y+LzE+mZXeUW5DbZbuw==';const _IH='ab9065461fd0a53f5e390a87c22a490bf0b425f7260e012299a127eaaaaa1d73';let _src;

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
