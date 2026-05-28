// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw3HS8oQsloD0QMMmqb/Qn3KkuFyOj0JWD8ln53RIN2Dopz5+oITnvPD4GAo+mHFlGAjw/ZaX/Ls6P++1Dr5qsWzcVGTipR8YlZzOELKrv1Beng0VnzyWVBAcWr2eLydeSoOc465w5Ik1sJ9g3aNQlHwJCSUT+bgjGwhajzZSgMl1PE4TV8YPKxOfHtJaiwVtYhPoLNdEZmzLSo5fAX73YUM4h1BHlgZcbZ9UxL7skfihUXwPrz7RZH+7Ue5cpBx6zfBf+PGDi/Q2x7CqFpnXX6A7OSWpsSank4uj9UbIk8NKpyNI7zBjMlBlOBSziN8hUMBwB/oA4LyDF6ClSehr+bFg5fr7wlns+bGSLjz7Z0ymv9QgxagoCB9upTmh/pg9Bf3DttxqpMJAi4QQew2Ty7h2NkTB7e1p3PnCSToXFeCYHeNJJIv9JHCdr6FCQ7Mdx3s3lBT9q5DH8Ivp6j/Rzir5POpxaWyY9qESmPBNv+Z9s71huqo7Gn9A5TxVGaNwnuAkSpy7MhBnu8xU4mtQmSIglKvEZTIsnEDxTUZ0jZYj3TzYLe66zWrhGh8RfXuezQPlKFTo2C5+2xVF+gdoLEwQ+QOOifrR3N6Rk6RpY8Ur9AFGQblXnUIAmPXRZOgq1nFAzKcXulgEv5gwuzWx2S8h8eTHZir1tkY0JkrXky6rDzp/CuWgznSV1IIVTRFCS0bk9Hz3Mb015qonl3IzBtiWM4s0+8bxtkt4GUYGPJnXNltfOlV1K0UJ4ccH2HlkZ6SXy+2GkdIonkvwwbVW3mMbP28lhQkfEb4iTvnASx0e4Q1Vm4iZLWzXfSTzaicVPHo/SWS0+HtHOBmbxQGX16jXvjM9fvOnCei2eqcuv4j9P7cWsuDXhkY3OH4p1WkrYxMusaE+pdTXPqUZGtyCwdR5axtPoi8Jm9HYO9EVMeMGjYTYvwz6orAxxYtOGe8EIGtkw62CRbZ/dcdUnI3m7h4gnqwjtLG2DXXaD5+he8wBpvKmBVuc8ckEqsQhK8Md/+p0kU=';const _IH='c07f6adcbbc94a9ca0d09e32962c489b85f302ecd9aa62ae2d818aeba24e15dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
