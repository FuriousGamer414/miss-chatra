// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hWC97R6R2uHtdkmyL0jxGxIagxLvaUL60YT1Qfxjp2vRIE5SmIVyDl4sPNUiodC2MJhJ6Ly0hqJtpF9NP7ji4br56e1ODTntnP1/lKEUzhmwoOXoSNJZYplc7AHNubfgR3LiXYhhN45hSfihCYUhdnybg4QP81EWyKeQla7eMBAvPS750dJCoQF9C08rHGLWRGOStk2xPYKtSEpWRLXtbDIj+Khd9Yk9SmrsuHTnRjlQdkuStZgFz8f1kWlPvaqu6XUnASfTYln/6zcc4N3ARAyX88bZRMVJEACdarAip8E/dK4IDiENmiEKIpAXk7X2PYU6o3Zca5F2strapeAmq3a5wEqIV4LdMPD74ncwvzuHwJ5Mw5+rrJvB+7cYeHhvS9XjpFrQ2z1i+sgtbiyzqqvcLOC9H8OBdWOHoOrVjmaBSHL7yUMSLdx6l3aHKy7X4DUfjBTowyjsSrDvb+TKAdoENVpxsszPeos2Q/HTQ+dpHRtNICH3jb2vP+LvvnaunSU7midwHdcCD8+461TwmpqwfrHWuaM6FPU0FPM3GpwqniIn9+oaTcu2vwuCL8ltBAdWJE7f7yPaDkrP9J4qNh1/j7FqSnvFVgCJCdxHSKU3V7R3tAIbiD/SSiiXcitLN7g7jeeIqh4Rgq5YblwmCwr9qqSpNawOdKHWLFdsJpS+ha5eOn0xx0Iz4lNX8eSGYV9Ady+XYXo/XzpbJl7c6/6q8NIzrwXFG2vEPWUZXRb3K6KDvuQ8mwD/jJ3P6hhdMdhZTxbfV8gXslmuZtYIvMGt9PFhgw6Na2JLl2OiwNgekNcHMrmkHAdqTt0CUCbkzKBo4XLD6KDqZXsMjZemxJhltrspbqY7JbAbYHbRDGIeYzvEvQSnu350/SnH4BVQMFtWKDUsBeLWNxTmIe71a42yBilG4A6/1Bhq/yV+eKXcikKh4IkAYjH0v1nuVHVDPkkQ3FtrHDHoNIZ3LUjQcvSYtEw80PuUC3XUWgVhO3JUKKbDgVoh4MOA1F+dDFzpIk+kqZLwW4r7ZA7koBxAAeql';const _IH='0068b01c3e3307be27db229ff1eb02f75530713ff073f159fc9b35352eca2a8e';let _src;

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
