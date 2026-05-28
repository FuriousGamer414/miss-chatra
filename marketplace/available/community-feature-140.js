// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RRlwbfWR5aEhXjAvT3bmXO0Zr6ZqEQVMF64llk+oeFA6X9pZqWSu0TTgQW0+Veh727rFmfeGyq3XMGUJ5FIikWOcJxtpdn77P2LQgo9v6Fk1ADjIZKkP2X3XAiVs+WZtq49DFDG+YalIhx0NwVJW3rBU8HSLPnda+mGmUvZHpVji0dJ/6xR2EYQ2TZVDZFG9MC4kliv7akdh/DvrIo/IO300MTkE7+B6EliZ3uCSuxIPDvPDcmJBEgjbFdsk0KSaCvmv1StvwI4iy1S6VrcoF+1j2L28WwadSdrvWRbBnT78P+XONVcPjQhf6W6ao27AYWvbhDvlLr07uFXZO6j4swkWLSQglZB7DWwMocJEjr4M67aLvUWLKY6zmkDjG8pw83XUdagv63uBBZbrNsDEfLhVij+DLgDG1CoZ4EAcGr3nwNVlSbKc+69BUspr11isaLlYr52xSgtiGrdDg3a+4f8dIyqGJ8g7qCfgGHa6mdCAkbdU0S8uFTKhurl9X3KQ9nSzKHMydS8k2JP/LDkbxlCnYFgnTtPaQex+KvuiV6dzq87naIEFfAsr5FJ9BBy8cqXpwnoHnGgsZwEBpLefgI+m7AyeAKoR/1fZ4wRdpC2WZPo57TtnW9a7w5sUchC1KTDDH0lpKYG0l/5j+B3NmtF1BYabSqdolJ6UVnLJoYyilCWDJdBhtY/dY2kLF6SAvd8KVz+dKOHJdKu+1D7PSrdohONKWWC7PEKjiThpE53VwjghUI+joS7t';const _IH='49850bb40dc9d3789a5b2f53ee769f117964a47508bc1726c4e4c2b8cbd3684b';let _src;

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
