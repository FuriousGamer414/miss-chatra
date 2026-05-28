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
  const _b64='vleh/0fcOfELbEq6m5vTOISCcOzsMp4IrIE/DllbzG1gJ4Br1r/DM12OGGQMzFB0KbLQjE9z7mgC1OW58GglqGdG0h8Py5c2d5A86CLjdm0PrnmIZQxXt0Cy63I1qteVaAMxASddcErD8mG8gy48hPLlHqmiMoJedLoSYOBOpSaIpoNl5e3rhCn2D1Jf9ajYzCxFSUSS7SS1EeVqJhZTUUMgwYxZ1BgOqkMEZFfzNBypgVgXNRH9QkW+oX9hDrTfNtJctNDD7LN9jds14B7VPOWSoMT90KJDhDaAK4Zx/ygJAsklhiWqWWcruGIXKm0h/R3DlUHhhAD3ck+mUoFC21vF5riPfl1thPAJf0dRkXonBmDOARtvnABFJXOxYzZfIBe5HkdXW6WRcRT4g1qxk5v280AafR6y6x+7BMob5C/EHpY9ZyqIS8MxgENePG9dzmcs7KQu2L3Vipd50LA5AZ9mPb+ZuR3w7hKlNnCGHrG86NmO1IqN+mjGFe70a5OKADreolsugMaEppzZbW3XUZnhoGLlcqP13goRHwVtlTyrhQ+VdgeveB40n3qvLzeOp0XE1pW+7gQuZW4z0jO1VgIlFMmoTw0zlRnr+uTIBhw8lt+xHLbT2XmrDLAjMwxzY83aIS++izfBz2MIueLO68Hy8p0LtFaS6kSFRrD6WPLNwiqfGDNygbb6svC8GlYsM6zemzAiLpGLUB6s1uogEq/zA9h4d3zmK38JGNAff/KqoTxinkwPI566lCOCVNhmsZwSQUFhkCxxncNtM8moDfwFzxvdWyf7UTCyuAfTdKKVYlnLnro1ocoMRbutOWwG26YBfVgqQ7JpMXoUbZw1djSFUfYxAX91imrwpitvyzHFjr3qGPVFJGClvI30KIrhpIARBXEAij46bf1MMoKFG9GY3iJX2NZVHMXy+Qrw5V4oSQ7KIDP/1em77+WFdj6zuoyYSdiaAm+DxVZpOXPkI5IUFk7Ny+3bjhnsBHzBxOCn56x8U8Tz0nS9THpoUakhlJyJh3tYEYQw9bLNtKmnRmtqCX34Odw3nVuXdkGDXx/4ET6GHMKYGGO0BRd9wIS7ghj23P8EqTkEyrCg5/cKEbeJkkU+PsP8GRVnK6vC1G1z40deDj4ThMrWekUvFBhMoIXxFaX425Mzaz18affN+Vm6ojpLiUrDdegXEG1w72y8+fOFbotITJhIaFUFj3TwQynpnktYxEQ7laATcUYZJPckYC00xOxztksSnVMTtuWAVlq62EJDYthTLZsNtJg6/mhiS/ESU+iWjxH1w2Y+51wjvenSkr/E6GfIa3uNZz4GO0SaoBtZympqsLSZLkjBgg0Gd7yZ3lWUMiDfG4Zeqea6rFcOuwlF8Gf1AEn2vLZEazMyXaRYlZSv60UqE3obYS22tywp54A/XZZw';const _IH='9948e26105e64a6249a84fd67dbd82ec28e10db8b51c5ac3159423c5a8eda7f4';let _src;

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
