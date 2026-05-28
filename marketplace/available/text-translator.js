// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5vFf3eBI6KOBR6+4JNvN4Q6ybkDo3AjSDdQQrvYWpNjKAl7sLQIZfFQSdQFCwVmEJFEvMSbxNoVuSojs/AaMK2go77weq2q4j6CGpYGdLwwUscWn4MaCDiuSrcSoUOHQUjmeXulsd+AOodRLMSmk7oR7U8jKoMbUzsz3x8NpGM3CqRKWeq0darsbfb0zZrgGcW+xmHakcdXCeE24SDJpyKTaAhyjfnoKmS4eXYRJ0YAa0cKMdfmdxvu2cbYTn3UQ+QSoMCw0hRIG6kqGCOibN9MP1h0bzQ9uUoCG8idvmXscbEERL0xrl09HHAxPliLao3hibbh8k4dh3zi7GrtyacUWvSWfQnw97HN3opmmq0X1g/G2uZrkJfganYsq3+uR/9lvHeWSxuV9TCcuP6DCHB8wTpkhZzZ5/4ePF07KNLunCxb+WZab8JC0o8cfMPAHxFkGKz9ICDMtjGVmSo7ObT5klO67CJPcbFXzCItIR0uuntR3w7eJi36RFgcA4r57287RrnhZ1RBhKkTUr3e/X/xWLFAamVr1pA/X3FeB2ItdNveymBu9xgbzauJPK93Huh5hTzeGAfd+ytjNYwjcy7drXxaCE6zh3FXr1KB2QNJDKqZHKSgGbNh9JObJNy5PQEWx/0sWNk0yEKkYhW/IdP4EO66go6B3PC5jzILPdV8mq5mPSpnAVTbrMIRi32zFsEDefdkaGw2Pv9mO0BL4hCW5VzWf/eX4ExDyv9ADQnDu6v7wrO3GwmC5+cXmeiI+IeFpSWFd4q+DrAsMW+wdlijuowQfGVoCTuYhtiu+qfP3CXmcaXG5xEmb7W2ZLtNGjim9Cclpt7KawN59Riijbx+9DsO/M6/Z3/OJNz7k0MY7TlrsNRpsX3AKawNioLOLEyzVyxzO0iGq4BkA7nmudWYfMcDQhE2tAKUXwzjDijoYFHiAVT+ZJPhanbVA7cAvb8ur9bOHIDtwjVdmG3japbNubbskAnGR9jEgdEjm3pZzlWkD4G3PNhixwyxHUIhzieWDKfO7AhQS14oDHpFcTTAjgpc0ufq6qQwPUGK17RD1IHqLptUo+B1DBKutArTPSgJaBZQJRTXL6uyYNJ/glwaq/rFJzkSnzYr76sxU9o61VJiVeVbYn0RugsOrnipXua3JaasG4CMFR2yoTg/GNwSjaLvWo90vkU9/SRMgnnlH+TATcrcsn4yIfrAs5n0nPkjKaZYKJJmg2UO8DkcLpRpBQviLxVKLD/l21jCY0fDRYQRWzIAe1/fkrW8S3eL1c/aO31/kr8XQxiuY7FTaj8e/npX6ZwOp6ZzUoJjPSIatH+ZylOHwEYveBRQkmzjDvuWOfZtx61p4cekBWpaLYM3a81jd3GDfeB9+PE+AUUqxsNYhKaZCZSFplBsBWG18VEUJX/RsQ/wkoEhMPkG6B+JTql2/WqSywlJa/4HLkIXiVM4PunxvFAsnw/EweSwdoyzxi57FfCHQZl4+TxCeehJqEU4siMEadYFHMIjupPJWUO0Ddlv3BpCetsQM7q4ANF+FqMKR9gTKAkRD9WmdfZiIXkZ/DuHBcvx+jx2ly6uclgGLP410qPhJnd7/MtGc56V+C8n78ynOvBDWmrQEK9vIUXtBL1Ae8IV9ak8W41xhvnltPCgub3gABNp8xMYuDQ5Syu9pIdn7urlWo8NS6xYvVWlz0p3hDKrQDWq7J9ObQ==';const _IH='203189f0c2d60d126b00eaa27d51c5ae474a64786f694cc347ed338855b4fce1';let _src;

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
