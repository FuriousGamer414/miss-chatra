// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kh+JCXRQt7xnR7tJBLuvsynrITGnNsJWMr9p2AcPbZAW9j23gwaltaKvdn6UfNcazoTbe/ZjvLIMnCpb+yHYK+QMoOCB21ryIibWHFL+pswZenuA0b93D3bMcLVwrfRqcGwNQzSY5KLbnC3jZq4X4rllzLb+W0on5iBCUptuOlcwclYqhEdL+qMW6u4mYRuLLdfh4wD9gPHkloySzf5pz7giWYI2FFuny5XSsaI+68OjKfXqFbkzV1nsdPNSxnfWvtq01/Vk6ryLHmiD594HBsINJbMCx9AVu0xDQNdKt+Gs06+rBiQxBld3XAa2ZS5fsFczDlHk/2dvy2ZtdA5S5kFvvCaszE3TgWvoFnaC+OjjNmGzhNUlDtAhfR0Rl36vNGrF4DJHISSrvZbTkjvgUSrNd/28WlscLkXtB6Y0kDOzPKGo9vr20zW9AERPIIzfggaO/3V0YUGaxAQ/x8AngQsZLDN0j7JAGigpIcFGsAm5V12pwMjRUaoFttVXF0SSfdUGXgrmg+uFBtlkjfDbPiFDIDWVjFvSk1naZWx8tsb4ybN6Il7mQrG2a//IYriju2By0UbyFrf41zIBsdRIkY2eGXqBfHdg62gpFFTcJ2e8niVK2QI0hO3qPr0G+oJmoMGmIX5ikfbWGI9eyESA+8DCVylki112NzlOgK0l4vQyl/uikLAuDqC/mN20AZoCPADW6zMMe+4Z4Ybrg5dddpqIbZS+O+M6HCtijfPYl8m0Zci3dTYHsgVCMQwe7eMzws9S7tpeT1XzVrn7shkXJexdBdNZLZWTnjdTEbuNzz8GTUqNll4YAq78+un+AM8ECI3y6meltZN+tMl+JzTSc0qgxtBfTqZ4+4pxXdWMG/FaEzvK6AuhgJ3t7vdINpiIt5jGBFGgSO7IZ74eeLHFth58X29vgZ6udvmTZHVjL9PslilxtUaX1yNbyY/9ftPCMq2xirr2NGsv9QseUdB5DW48ufvvzVgjNBqTAMfl9XL/5aHuPKBM7IDPa0wgSmqPp0V9Rk/a7YIxbq6zcKGhEdtIexPdTfr+tFB+FzLQUuIVBWEglIbigOZnFxsmpJ79if9ZE5pT65ZZqJY7XL9pt6orOBpxgTFogYGS+LraqfJpr6OmLUuchP+aw05xH834FFYXQovzz7K/ujQXH3nb1Cksl9TzDPULnQHAwVhQC0V4m2gjHHGg0s2UuZNg9jNh5JGFA9g35AtXh17ZWfGSQtYdAeRLAi+wBtNfdb55Tm+Ig2zxBnPheK5i0tmvUGm0cnhfxHhVWLebawLqXjUlyTLA7aQdwIjPGKLXtdX+AeEulsce/KOEhA25ZSerFHQEWdWKDy1+0pp9cWlGVeqXBqkc22aywPwQl6VdlG2D';const _IH='dc28a6d556d5454fff822c16d455184c41256c6dd12f6ae5b444e2b998225c70';let _src;

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
