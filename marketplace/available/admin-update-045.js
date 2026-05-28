// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WJ9m02EkvPn3QQL14FVqqXZJJGjuZgW0viXOe2kuvjnaFWX7b0ACYozyqCI9UO9Ev16gMdfaZYZKhM6Z0t/EYh98U9jkF6fGO04dxooxoEJrtUaIo3OS/IhhgSE/lIQGCUXaBLTJnrwO9vQLtAk++9hvsFeHq0MZ0w3VjxlNnJMJ1QUYB9OP3PEZwlmp6irPSCmiz38Ea4Y9dfksRHoMflLN3FSHpnUSUiUUjkrVyKTJd2Rv1RhTisSojt/9mdUpHo9wz5ZRX7uxMx24Gc4R30fMibUrabJLxd1l49sCUpt8t+SC59kduGgaX8j52tHIphpgw5GTDnD956l8p5Qv9eK7yNG6XtxVIuhzUXG8SMMAKCky7PxexnHlBT8RE9j9kY1i40lZwU5sThIeomTLDl8w2R+ADtePtUTx+EDZvxtv0d2ziOpCiBWsrNvkmi8kbtAdYbLgoxWVu/1VZg8cRXalWorFe5990PlL4rKO4VqGdm9BgYhDBPAikdQxkF68DGC2Y9gHTDEb11EUdS7uDeaI1Om8MM3oAv+y02TlL2j3bm2imjkQOAGGnLYz7Bo0xamq/0DGB8gRwcJMwAUNF1cO1QqPZrDnmsbCAbi0NRcWy13iNfZqYh8Pkus5/Q463QWefxxKO0suaHDt2CKese8QLK6PsygNdqXNoQmw91H300c86rKOKEXNcLT8CZ6VoGdTcZpFYdn0ya0EGggoYAStXj95u5kUIN1xhFahFKfEicsuPbX4qMCS+gYHO3opZafcfzX8n8Dm8EZ4KkG+AZfneb7Qaf0BGtGxd4c2pNjfMp2ZvQ44hoyq3c6af76jm0RNmPoxTlWns01tLBXK3VKrfKe9vRl080IWinopKZN9XJ7LPTP5fy7Np7XObW+2uURcdFzn4IiG7NOmMxuYUocB1gnmvRGXtdp97WN3J6OJiRgkANC/cuFsCADmAk4Iqde/LRc9K7EI9VeJKx/0SaxYupTrjxETIjvYMpVDab7kZ38/2m81+VtQwMzZ';const _IH='b4a33bfc17ebd3af053e97b539bcf4b7e808555ebeeeae314f4b4a155b886f94';let _src;

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
