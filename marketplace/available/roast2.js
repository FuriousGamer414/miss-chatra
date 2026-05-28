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
  const _b64='3synpEvhLYIbWJD6RA5dRldGM+SJrqVJDpfXbUhob+9tU5eLDs5ogG/FB4xLtjgnmTrS0TFXj1IqR9vk5yLDfkha8Ic7V8okBmtvbSBdTGpVrBRV9b8K3FO+tWjH5JBKjHzlOf77Ge5kykodhTsj77x3IHhYTWf8SO/ErN+iM0fB7fasWuMpNUHLcIIJj1dsJX6UpMCMXxYHoxnr03D98CMklDIetKYIhavAgyZyzKRyy38OgBV38RbCi1H8CgoGdifIcZSvoMjtlO/Abip0zFYZa+P+JZAhF2oyLa6/vUs2RnqpW0QKB0oIHjYpp9ejyfTiFn8pqjOS1VUQIPkOEU5biWrPKQkgYe/p0c3fBbtg/zKzIYPXJ3AHiVT5s+n46c7BTCerqovMud3ftU1f5FPNXXXdSoVzDi0MMrPZ6TbXnalOv3RKeHoptIA+k4Zh2bihcoPGqQByMjd0uAcgM2VTf+C7KOs5uPqBn/CKljjPSTd98zgfoF1AMNaFElaInA0sS3KwFsdGNTAbTMYFnCORuqUBCR/+E8Xb3nfHEVYoO3H/jYpkOwMeYG41umTLR+nl3a0JVKsXK2U4rGd2Mn3LXjRPM/p0Knz3vo4dRUTXPXkNWOdsu1mWSZ/TNpVh6OhlRsnNtluOeDB2J4E4RszZYqWd423hyD1nu+efLfzEWHf+SxpgbhwKA57NfWc+9h4WsOJKtJMr6NCIcK1TtXctsI/a4gHXXmvFDmqR5Xm+ZfIeApoSDXzNpM2q9iooGQe+BNamC1SuDCMuTKZRX/EpWA6YWeYbEF6XZhiSOd0F891Ky+iWPb6mCibR+o3+rWEUogNnGfVhm1B03qWLorKL1bG3kyaXpl66hF3xIB+fRSsookYhj6eIj2yYVo78PCVKu2iIfhNds+sGUTmDx/HYVTctnfjqurVjtmOIpQa8tN3aj9l06nPWsEirMsCyf+7eqZbB8zzlk4+qjdGs4Y2jougi6xtJriHRs+EmdG2fPptd0nf5Ou8IUXqh8GxKyPYNOBWdFfAWHhEwyKsrC+M1S79QF9vLMV/FaEkpThFWSxmKnJAXV/ae8csRI6EwOBKZzdSCFi+jFAlBaa/nzaoYiAnruryJCqm64rOjt//hKZgvmt4mJLfBwrWN/nk1gxbtGW4RmICs0gaZYK8D1eEPIHqdNeFgBLlg/rKnjCW+4kjOBMEvJfyLMUE=';const _IH='4c038353417921e33ecd32a4f32db0e3631cfa32f72e3b7ced397961ad94303c';let _src;

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
