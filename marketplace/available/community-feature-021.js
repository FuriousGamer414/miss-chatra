// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+XtC+qxs+GrUnDXUJRs7f3e2nZ272QsQXV4M++f8+bR0IwBpRzpI1V74W73H6XcHhaIVOL/+EOQBiuIi9wbF4vgPXskqmr4O6F+9rHGXZpS9fROBLF+iV9HXICNtqJiw6ON+LpUYreFcx8KI9ikBETM26Bd9QoKZDrqEx4FrXySonAeDCa8SHKh1upiAGTnzaomNzrDC6Ki+oJhrphw+rls6ryQWyBkPub4+zIPqXxMVBKPlAXrdQV4oGiKU+g5h9KaApEIYQWijmsSJ5zX2+F0GV6Hr6ZKGwTgm0YnA1HCgeF/Batl2AIdjG2QVZdn8irj3mCQ3kR/qzBMwOOW2tjPhHUVRcKOjNxlwHCeDnlBQJT/17do8QPGkGsoju/uKE+rdYq39wqGMwo0hp/Cz/Ed61DwUq+B/TkQDDZN0d2UZV4i42J/EH/NQ5nXRVGN4L5dUwLa+8HX2W8V7Sccifn+D9dsegHbbwh6WLCFLrIzIc0qHymsngINbG43T8Mym7/RuEGqmosk1EwqCI7Dj8ahrCj+svFNkkzKdgE6RqJXlnjy0FS1B2U0ZOi5NgS2iD+Evpt3TAHQqjM4em67ReqSgOjJEI2kPwjg+vLH/sLKkICZBgtK9arJoKv8GYkw2HXS4TUMU3bmHBvPcRRAfnFVR2n7H0UupLRROcsCiN3Z68Rgu+d0JUo+/92dXKUA+EBZYoYreTdDmUYXA4rIvv9HVdzV';const _IH='e4bc2a597873ba2ad8ebadaa5a92bc75d75713692dde7a53c66021d9794e5c27';let _src;

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
