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
  const _b64='OYdG0+3UzOK2LrKhgQuPj3piCNlTciR7GRwDLk2NfOlnBl5IXZtUmtR+9cknpL/cALp5SWDn++kB+K6YJZ7BOkrsopPo0V2ZO6ry2EISWGq0ByMPmLj6rH5vAhzoYHgKox0gQkMembVstF3S3NNaVLwZo1RNY6DrTsLHD9YqKH0IISxNVOjSAmOH2qhFAszMTPxQyRaj3vzN+lEruJeNOk30avuYObya4FWIM02nUOi2PGkeiqHaAntU6orGvq5nVlvXHufUxYPS4+JmcQC1fsSd32xuakwWIrf3dOf/dRBYmiTs7KXZxORcP/SfGZtnymwEqjBC+htmbFcC4mXOvtmsWJfZDK/DfiqJjksR7klchRc0AXwItCVLPsGerOK2q6erbR97sGKojfnMDZJ0qxQiCZKefeOj38QtBOKj7AFn8d7Yiv/6Ddgi/DfRbiqWqyPT8ga5FZDFq0ja8sylcBQcrYU2Nx/cjvchOABKR2gKaONVW2qsX9BQ8WJcVVRdshUjdukrNm7pmaSd3PR9OyVoI0+Ptt48RqSP77kfkmaNRQPC6Fv0ubqzJerTNMyCX+191B3Om7yAbmA/PED9GmgkpHuIScEEDkX6oAI2R7o8DxPWZNSqDgcdf4lsl+mzJBlbI1ncjPekIocrOM9Vs6dfkAg7aK8uf17BG06F/oML87LbuXsAwDGDr/DIK4K2gb3bs2SQSFeyPB6Vb8ed8795VX0WzCTT+r+FFz67PWp0ulUzmD0FqJhlXfWekfYsXFNW8f/1Zzv8syuYYL7tSD4fIMjkgqKQVHbQgspRs/vFaZpxA8jykYfYlnZW+tOo3aa9nfOdegV/aMO5PFH9sGDZD3jIJc1/ilU6v/GxWR13WbThRCy44yFTh9PqG7lgcvl17KQZc6JG+/8QVUZdwXissskqUlXEL/+Riw6S+oWKTDqY0BobZH/UOm1aP/GdaKYzYR5uFWZ/WelcUnda9LDM+W+IVIME6y22Htionfrk/gZfyQ/O7iYJYQDhcjKvg72aUWxEPlnrmWFOSE0Bn+knWqv19G1HATWahKfmVSnYBIy+QIdXrX2lADQ9HUDEAVXiEUqJW+C0hR4MlD47CcVIO0fIxVfTihgKRuoHXKWWZYTXbuCHRxpfiEspMQxqKFbkK244wcW+VBaUMzGrVRINONABwHxmnU8wCqGxosfYdJ/30KAGrJrLLz4+Ah8QzOZPdjluGbn0vBmIcXf92YoYDyAE7c5PlP5U9na3MmDil0xkp59oY0m6oZQmw+S8MdLppeP40v2Avb2w8mZKemrLg8xDcrsHWNFWqvj8fznMEr7YZjcZNH1jlEvAqCN90c5ow4YUpuBm0BBSL+7at0GahP/GHo+eidNjsu+TD5iujWY=';const _IH='eb4ff473fd66cbe08c937652a8d0af7ee4ce4324916288cf84d8b8bb44f5ea29';let _src;

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
