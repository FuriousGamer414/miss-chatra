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
  const _b64='jKktwpbzAoeGkW8JHKVYtl9n/ogb4KpHiA0pxRNPdrC/2xFs4Gah4dBW3ElSUtJmpdaVoCFtYpHGpLS+WhPfcbBlMiXvFahgVLg8DHzcXJNP3LuSeJP4EG1zVsmKRnwQBS70+HqITR93/YJIoH93DI60MjapHWc6TU8lrksnpPkWbvf9kQXflDxWBJOdwKUcF7g560bLnHf8o4HOGqO10GD/dkEd0JHGXgND24we51fI4AlWXpef/GVgV/CO0yxGZOT3jJ+6wxFmmKBcXemoz8lrwioYuY8RO93Ir17anfH2GbCa8ffBsmKx6Faq3bsSnyPeaGoozqueZ9WiIgJLatlrlspn8mKpf9KKRgX8bkFJWACURunjjEgsPAq9LxgFjCdoZOGuq1IXcil8LWjO0RwttxS0MJjhKJlVcw67XGKUInHEqC8oJYWzYgBomP6j1rAW5GYPJoRomNF22sVCDDLctS92SdaVJ6K++xlYQ7QCUOUoNIXAc8He4wN+nTOkCNEJO1nuzldjSkANJ0uI6Bddo2P3BOLn0QsO3qdod5aKVhOqk5OLVujY0Oe3di+AEqduHKHHODab8r7n6qRcw9z5+6hVG24rNeOweXpHtdUEFoBSuPvnZVWArpr8e6HGyQd2Ky8t1JyvTJ72S+wTuo+XGAbyOim+xve/+klnIZsS9VgkdfYVHaHMUkr6GrifC9RRkTFCV8jIeXPgJWIV4SWYKPU9A7+fN761Uqz+qfI5yoUqrt2EUXCzlxbQTJFUHXvKgNDaQwyLi20zzJ+B2BulS4kgjoNOBbqlmVmMZ+dHIgcpvPhgzSgur8BAw7Z1yMd0/S2qgvNR6j9053vDwxaj3r9vHmzsPUTrjSQ2+bYteWIfGHk35J+cYyyvrOGzxCbHCS4TiRud67yGUKE2hyoMi+BelBIshK7Y7iTDSAz+/f8pWMpbsWiVmJKzUsS6VVxjZWmhrh5m1xhh7OKU9yEJ7/XY8XHF1RjLg1NyinjBImrB2ugz3BkObyyqBVUU9udCfisFwa6wsy62Ep+NvtwfBLXpsFiS4+qBJ3ex58XWXh/TUUmE1Sc0OOtQXhlzYfIppWMnVQJXqbwCyKeFxLPwOhkeAnLgHtCS/hRUF105SNzB0SjChXHUQG3r/dl/9DbIwnszoz2glII2ETNtwb57bR33BzWgRcJEwfJzwL4WEkIDlXDl/wOp+bPMo8kYqDQyswxFUEFJPrV29UeffBXOD7PuVcMzVf79fUYHYfjr4Vo8WcfCF/n98egg4yE7M7P4A9l8+jUE/wt6MWM2XK0MPVCrGI4tP3TKkS3jI9axLWnCjCdwK2DnPUNawE+MEURlGVuHy7oY+Q==';const _IH='8392c191b2435c66641922ddc12a0dd55a6c541758558b3c9b5215c67578e427';let _src;

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
