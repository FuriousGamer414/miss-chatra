// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HA3J5g6c2q8cYhZHfimFb1pZ5qIo444gGZBvL8t0+WSq3sa7W/z+J6HGc25RoTfGy//WOikk0urauIwiQvyWobGJO800y4owE0kDFdCcaEQC11k1eTCN3t+/wUnbT7PrAj1RaAxSOEJanJVkxOx3hUBoCUZYsEWdmkTzoNahHScV4pZO8a5DA5q0Qqfcmph5g0Q0VX/rq+mMXphZln6pPcALROBkszeEWH7bD4fJJXdVfB3g30qz2weNrwCgEO/eQ8mUVAlKPsSpi/FWnr/bOvRXDmHzbKcgUjAaB4ZaSspIGnfrZ6+xJvydNUwvXsN9AM5oQdpGzuajhfzpJmilvQ7EqUKnyDmfTzHknEt/255gwZMuWDpyO30QdlgwRlOATXAhE2/hEkjFO6gEy/YU2bs7B7O3Rl6x+eebbHxRDHI2bjJkoQ2q+2WlLrsz3rIh9vFIEh2zV+9+SJey8l2zfOZe1acyrLTAkUYyZw4amS19bmgi6uXullWNdlrNn52KwVmpnwIK7jV1BeVgi5wWfKrguimMf4rougOtRkwBVDkYTS60AFk2W2kTgYHSorhRhLpiWW4=';const _IH='4e952a0836d677bb87ff814ac6158935f451f60792958726b069dce93c8a7c3a';let _src;

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
