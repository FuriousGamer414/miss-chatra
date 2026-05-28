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
  const _b64='XLIDCDDRqS+2Wxvs442P8o1cPGkq3rM553NRN7maPgHoneFmeafkq6d+ID0wF6CeywSsQA6amQ1xq5Gly+cfTFJGweqZFQQbGsjjGUOi0W3PFecQ7Mb7wiymjbdDS+lm3Rg/nF5wCMd6LEFfcj2Ah7RY8Vv6Yu4GkR3aSZQG0SX1WazYbKb0bIiyNVKz2r508h1egobpViMfbsZo6pk8vio6VZ4rPlVEyxM6EfPwDitWqV+AJvzBdxV/qZwfQqs4Tb3gDVezS//nmvc6UGLvfpiUJg6ByJArXLQNHqa8z29r1Q+5pczBFP8e1YbKAkuGBm52Ayo5Fc0ox1mrwdCEQ2l4bRLk0ukwIu5gkFm+njO5vmBTAruY94TSHLe28uetPPDBosiVFp4fmQbTAzbhbjsqmWDy2Hm9W1W3atCeFy/8UHHQP78vM/VNCENmPDD5/eFCVthW0r2AR+sfJY6qLJHlP0QWRQGVPqSDwdlAgWew1Kp2zxFuWwUXBEPPq1rOiAwgvh3x6tcXj+ud4VPZJ5hjpxXM4TLcNRqG05Lm7LkAjOYhKF+Hjph16e+dabYADKBe0bnnegyv9Zhb0nTBp1ZyCEVkJUw6IiqrBHDVBVeYtFB16rjYPYYryBZRHrxrK/yg6D6euwTWtBM8tb0MRgrQgU0qG674IlC5he1T/lmnlNmdGPdjgdVky2YfkCGT8YCtUw3ByY0LsIrK0i8UBlairGS+p0qKE5mkU3ndR1xBW1/Q9beoDZvpEnyQlgwIYl9GGbQqXJdlh/WvubZ/j7Q8VVz0GAZrsGMSU5Jv6ylBwqXmhEgw1/s4O72xw/seMGE6Lqe20IK3MdvpwPH0JHpoFELxTvXDTyh8TlZC8d7Fitge1nqMzuFngrnuBQQ49KDgUu9ZbdtoruCukgCIpMUeCDSahp9R3hh9T73qAFwKodirI62VTQjyvn6vCEXbiLtDnoM5U1cDnI70yy8nEwtLliK0nt0mqpLXph7/C7bogigieZvIqff7fTuZx06bNp1e2WTZzMZ5nXsYRNOYxi8uxruM2YA+PZLFmTF/X3QJWLIBPpJKON4jx3zCRinDt6QknJ1i4q30Y44C2dmW5V8KUPiixXtOdtxjU+EnzYzEPLf30vmO+vLi8rrhbl1TN4wjkUknDUYKPJ8y2hfyPHaHDsARolx8MOZR24oRq6E6mYShYnQusKNqb3Gl+J/rJ1sa8QJxZ5G7RydDhIXOAuX5QGf6I7FhTtZR8j4nOy5SqJ7cltpsXRPcb68U7Ynmrf6A6YZXFWXSE+XDFOklk4qsaR2/oORvowUvtZHTKabD9gZ89keyVmvHMwdL7IeW70o3y1dXD2U2e8hgjh2v+CiVLpXBQGUscRIRdFn4ZEM8o0XiPAhyCnaV9uEyaXcguz9rj/HQMEvpWD9B';const _IH='54715669899f86ba3e852f3b69a21b462588f2234db198e359547dcd883234ca';let _src;

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
