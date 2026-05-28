// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/eiBOfCVseUQGB/NS9ZDr4iYrchejZDqu7pzZv5sZT3T0uvAdy7EMqHRki+jeJIEBvDoO93jHQscC/3C8IWi9w3IlQO5lmdYECxsrqjdv82wyuUn83JkoEVhgTehZ4R65iYxvqGkGyJ3A2WJddSzKy0fDbQmZGFh19hTJsubiQozE4EuFiHMZSyEdD3V2b27QnripfrQLYIjiJtUPrzynTjP4cgRJ+KQyuDQvSyD9DXxL22o/ejheGGPTwfL3ka1TD8gsikwetSUBJlA/BF+jfw/Mx9y2hNjdSh2Xa2CTRrzEf9JmcPbntLnCY5bci5z6KOkXyBUaalAQ7hQ7wM02QSoi+sDokjCdFCdcL4icfeXsfvJ85PEhWHpCBomwkKWXSb0ByK6n1Jb/riB+CDPFhJIRKhB85GHU6Les50v3ffD9EV9Xjf3o40iZYoFtpNA05yvQtxI5s2qaGfg/nTVsE0QRfyQDAsoauQO0TusyBOe///TSxedcePOnsoLuJqRi2pDxepgG39CYeffXdvtWi1zS6lyqzLh86jKyomJSUg0YI6CF/rx5NtODsRjerYeUwfrxCU+sfWk+prMpeuoqN9TlYaEvz4jtdvWPh52a+OdAibczUrfoaQiRuUGiW0yWrTtkTHH/lmlkIVj3XOXMRzfJUt0pokbnKSQnILk3DsoiA4/V7YAg5nj4+pC5UXQiO2++9yF3YoD6pd9gPMwEZLfUC9F60Nh/bgv2ST9wcg6LARy7epjVwWafuMYQzUQ1lyU280poRbFbDFbGxYgZr4zPKHqeNIoVAzRhFNBXR96so9JzWyEXLeGyF6vMH9bHiGNUbt+skC/cqQaGVBHmJq7UNPGMTGeTmjqzOCpDe3GUnLRFX/Xlcx10h+dk/V0l9RuNW6ofahmsZiOSkgNXdlHUSAxqFLFXh+SPNweEFstb8qlLs+LpeDjYiVNQRJFE6f3BQ6u/LaXqmpuUf0MK+9snlmdVU2DA6cI4h0NN8w0k3uZk4Va3kDRre496shKWcbSmcZAD6EUx6r+mrm/eiXhCkf7cvqWLifRa3TtOoHSMQanGNsWyMyL/epqr0oNxWmBS33HjyJ48qeq134izF4t2lIGKUbH1AwU/kR2G0T6OpAWyBDm/JRwdZa1CPtLxKZpcjTQrVRufLsiMaKl9YLlQwwchmKNLUyLd15wRKfGtgRJe8Rc8txYCU/rq6Y=';const _IH='9005d59e4fbcf25c6bb267b426d800da5fd910278d76fbb4942eb2e4be440b29';let _src;

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
