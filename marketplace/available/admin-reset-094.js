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
  const _b64='JOTR4ULjyHRJQfrQ0VjLZZbgrtv/8NR27sVXwh9kjQX475K0ONyIXvp0xjmPJiOmrB2oJhEO7YVPPcbl/AgIVP48NBMwuBI76LbMiRwOa8U4Xt8oZlu6xZMnj2iG393lPG5esUu9SyuOm0Y3B+BvX7nGsDXGXfFK6sidp5Pi+i8UAXefbpG1midArSUCK2UizNbmASp8qDMZ8xuOVaRZ7vofx9cpMH3x2p+8WZI8j8Whqc4GgKaPvgYd4/EV8Alm1yp5u0Pw2aKNtkhrAEzf8vFuRcJqvPy9C1Xfnydh1aJnJPuUexuRyq45IyU0A4Y6sj8GdkLUemYTs9rqadi3NU22/rixKqw+AdXsI1buhmCZt7oymW5osxAboi7b4DVkVTeM8H4xOXpcUdDE6nP9Yc51r2G023fMpsiXvNuy7w7U5Fy+vsEeT5mqxDIKkxTV5JNLnEZOS1OoJvPVP63akqeWC9eZaTjZkOS9mI+gleWL/J/1UorzoEhTf+m6+cIeXgnFO7idKmOkpuq5ilo9H6W2jvrGRuYt2wXZRDSBNRZGY5+T5hkDtNZx01kNy7/hjsb84kmzDI1N/+sqGMarMz8IioAknbfal8JErTJN/xuOuhxpdOTwc07zsDmRqTmQ4IbVbzudxVenaPfUL8gSzWo1mof4AN4qHNXY0gI5ZM8zQlXBPSHbaaCiAYAQHbEbuWh1yr/EkFtEW+F+JdDHbs3pkjJt13LxMyXn8Mz2Sw4HdF1cTGM9irgqX9MJ2bd3MFp6MWNa6oKhhDMsPZbNJ2uc6u6Zr8s1JydOyQ1lglQmQULPUSLQVxLgEhuZby3wgT+GIJhhTmEzHUTxS02QeUxrt4SGJyeYj/6akjdBcVrk0sWw7zh6O3OfprGnLV/0DgyMhznQVObO4Skk6vyaQ6QZku/TyS8N+Db+ORATH0MNdxaZeei/TpgjTniTxSgC3VFV6oP9IjtDMqd4W0CvdpnWu8NiwpB3TeAkZ6rkttYMZKdgX/w=';const _IH='0f7a4c551e567448bd4331d927111eb06ada5991ef5ee05d5a3d06f2042a92a3';let _src;

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
