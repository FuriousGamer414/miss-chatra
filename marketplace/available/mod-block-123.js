// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YpFVHO6lwg+3IeIyBhdo1PUYpJY+sw0b1og4/9mIf1FaOAhycuHZJNgP26EFQ4HnAkAWCHvtrhYOtFdmlC3U+IXXUia/0sWpKn6RBDqhexhSSercK+/Hqctwx+6Z86AJfiP1Tqk6q8uzR2TVfhuUkIIE7LbxJNUDS52fGMrSRq2XtMNgM9t9Yufkc/T6p+4PEa/rjz03yMyp0koPnSCUaRrgi4I3ZVYkoLINgzZFsdr8s6/BXbfBseiSRqKW+4uEzdMQcWALZhHZZxrS5+cqg1LczfCZL/lC9fyWHNPhAFPzM99mmTdytYS9pefVDbrNMeYoD+zdra4AAqrUUvjcK0v2xD5m7sBckVocCKA5E+1zkbpBpmiOeAsy0RSspzpstpgqezcxR+qrQRrWUaXenjuY+TtJhyE+oltVaN2ymhkRlxwLFeRkFOPdA8jCMXzPAL4LfK8wXoPNlVtM/voGb8PAs98wav1GKkKqtHbYcfj3htlrICCMgeNzw1z7ihC+G1q43I+S5dueeh8tDuD/LsWtLl9nr4uwfrU17PBvzGCH4G9x/T4nK/SkuXuowWV1WufVs7AXyTM//PYFJNA9RgCsHl0Il6VZwqUNysvPjBdtiteQ6U/VaRS6ez+gFaiwxiPoFlK+HPRXdjW455ePiSL2c/Ssjc4CYeI7dGTQkwgb+85yv/3uACm17zZzRcQ2c0zBaEkx+wtRrYm05n086k4LlbJl4ArU2jBjG+3fd/2ep9RSnS7oPc7aLSCBgzg0rHZY76eOehnIeNGUO/y6cygT8YghH7Gf9WX8de0KQj1f2oyien0Mdm90MBr23z6qXF9nwqW3BnPZa61z/6Vz43p6N9WvSb08SAXqdZxWaRzeRmEYAaXKO+TDL0VmG1wR4lJgWvg+4X5DTP1QjPw27TAl89fXEYWdjD2Hwu0CyTm777ly5OnSctkdvA1LVP3S9WhZgM4bUBnc1F3/v+ZTd/nv9A2a6QRsnPDXDtOeSGaMDqt320MMn5CvtODhGEyQQ4uJpT8BYlS8cwweyZCvoiZVjESbGhBGQDdZi/a75PCyED5pF8K5uleMOUqDNOpJYpwVVhdAcbFeLxAjIEX8vdBtKxhKEJjCZ14UsG32gpXq52zG7QSpb8wi8fBOJAlYmgSgitV7QFotOigdr2T9mKTmASpQ0nD5r/hlqLyOVcI0g4YNXZ/8gLIzl7ibxc8HZeF7DYdT5TikBgQ1ht6ORtOXRQ6DKk1Up+4pIvwfigJBqV9AgltRZ1pzdxFQ9nyt5aRjeUvzcRVhJlek67I00F/Kjnfuw6dCQEe93rDL/htQ+uXsQlWOLpyew1QzCPZqj7AA1Vk3IO+XkG5WDzofcn25RqoRNJ7n2uq+wXDb';const _IH='a90a4edbb2315435fdfd7d86e176460f98fb2c4d29046932f50cc181c631ecf7';let _src;

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
