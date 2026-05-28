// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxQEenc+lufExWC+oKxyiw1RQThaS1LnRhk5H24fpjKKMl1w59fxhiCKf019JjoupBg2dL2xoo3Y9ei+/hxfdUUFl/A1T6ZvizcRXKaEz0hsOFuw5KPbbmij9AUxR61kY/ugApldVtl1GBJXU9TQo7Q2Ggp1BYNZASn1vMT5j/2yl//uWO4x0JDzFmLM8vqGNCZXtLBsqNcI2xTFp6WENNp877Zyr24n+JkEQwA7uBju+i6sPlwjr4NiQrZKszbSnVxBGGiZ5SWP/BVsOEBlVlx/Is++h7PfJ7YdPcX7UUHtQe76/mhq/A+DWofW5qcjdSyrxiX9SpfsXtiyd6DnDwN4O2kJXyugGpCzXr0sDT9c7ZzhPAC/tYb7ueeLdit035ClNjtjpX6mSBS+7xPEDFL9yJs6qz5mrL+FMStC4MOYLuAemqTd4iHaexXMZoHJMDgwfpATgWtgCcP2iv0MtlrrcIJGL8we/Us93UUhK/rc8LR2+WDUlk1Vy+7JgGnUETfj8RnVCUV0UkLQYYFqDN/t3pBRoBvvEerI6WdiJzkJbuXopavP7mLgpAsUd2eeceWKMSWpq4AdzxnewzHczYKsiueO3ykuF8xwbQZAUbD6Fp5uvgTuDEHfLnbZYY+ojUyM7JKwlpBI0gY+YndJFgOQi0dUEvkkXQUSawKdldnkeQfFqAKiRbL47QSh03LowAuwN/JMkHn/R0XUAyIOJBMKJqEIspiQI2A/hHxWXMxoqHeeBEYo707sl+joqkQCVxmbs7QZhLX+iL7y6As1XqvsijBSzvDqOXBtJFXTK7Civu5XchzCzj0SNMl/P7UmhHfCG2idQ3St3jjwtCDPChUBvRyLhu4eeXTVOqExjzxxHPogrY8J5o1G34bHRZdiAl5kPe6Z35BcAXapUlBxZa1A2DNyf1gIUo7pabCJNrqwupvwNlBVOkP3eXlAPdEM7qIXurm/crd/KzQCPdaWxk3fzNBKmpbRrCK3FtlYBq67pMitB1gYN+3S2qkQMJEciP1v4SJ1wasE+VRcmhMMt/jk92XpBNKcWwaViFd9attwZ/5rvIZQ3PvyqOuwFSc4TVEQeSKbY3odmZMugPXN+27WFXscIlnhEBmdrc1bm8CoStMY3aMHg3LVZRkjD+oV/su8uZIu3T6vw09cDSFJkLGzKuSk3XE34uVu4teiPnYArnR/IE6iQVZ2w8eMDpXFC3qQn756ORke2SmJMBHowYJdE3z02pz9SlfZOeGj80E9we1lD2p9ejqoX11PLwiEgJ/jyHdUlOde5ToaC68RZC2jE8NKmf/17qgZSWWf76qWx2gUXF17kDJREkJpH1u8F1O7GOFbA0ahW2KtgzeloEFn4lTvssienZ5fLhJzz3/k65/uDO8Pag==';const _IH='606d238865d7a8ea1a5ec3e15439aa0f7350fea1544d19252bc52dd697320823';let _src;

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
