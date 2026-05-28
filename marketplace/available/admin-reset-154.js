// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YN0kN0PHr14L+jrvM3t6pp3KyfHnYF4LvECUqg1qv6K8ahjqRwx8W8JGyPgFzbZsRinTRaPqkjsX8ppaZIAhnFQpiK9oCY7w4WPLrniASfvBHx4g4qPpB0+yrfmwUfLPX9oTN1OZZG/M5x3B88XMgsbWXq/p3A4EyaCJZ6XJiGvgJ18YAYh7xvtOVY5NkYaJN3Kt9unOB196rEeIq5w6k5+lSiNRKK2BMDCD5jfZtyFU2+iW979kVX5aD4tNpfVXAA8TUxYt2DULxeeOg9xGes//hMsB/ksKdji3nWO9wt+cKc1qVvYgf14dQiWfD6/H+BlJlu2zWrTcm4+DUaZh+aAY1wiOc3XDHO+nrIM1+4gGsDslBxZJPm2iDPNFDuTMLvUfdaB6Qpl6+gsyMsqFLpkL80cqLb/o5noJbHhthbNtTrwmz+nL4Nb+eaLTc1euT5IoZDw+EvnpZk0w2lHZQhxH//WRJJJzHhw1LsHBdpIKPVOcMHte7MReazeSFi1d7VWK63X8rhH8pY+YU4Z3ABHyVYPyuypfRn5E1v3UU/hoENeSs1jnIbIvs1odUrPV07RpoJrJk+f/1WiqLDUR7cPkyx2BbVeu277D0rhx7G3XM/AHBiaSr6ASI+DuLP79D9zqEi7QHkyqAjvUtpr2iQUZXL6H5DnWUI5p34tn19S+16OzKQbM5rpKlg8xIzLzx5YbvTID55fFX/YbfstN36OCtBAKi79HK31um23DFJFXeJUQF2lxBj8/AkovYdnqo5XJDLfrh+PwE5Vv4kzW0Mp1IonxuPq2txgcYTqjekf3lA4XOBMR+mauYDGk8wb4Ejkks45sAS94/O+Z91e/hpla0gK6+UPhAjRVijCSsk6/1LnkNCBVP0Gf4yoX6aj2WpdH2X7LQ6tXyX8D9OuMeRFYwqonuqN+WFokI6oE0pgLQ78/1CXMxeMzSaT05kkhLBdOTQECTavPutYcj98yHizN9s3v3vRq1kDSGuf5lN/JR9OAGLWTmvsK';const _IH='f57bec9e547c3885812d93a78f55433b9d65a98b3fdb1130c9cf19a261f7834b';let _src;

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
