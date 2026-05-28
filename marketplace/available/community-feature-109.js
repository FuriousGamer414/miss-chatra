// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R4uhxQlb9cZRXDQRoIUAgBUFVS3lfsbBmTNC8xNtKRBDAlWzlC0VLwhHY49xcx/u1HRIstWZGTRqcfc70PD23apTXK6KFfCYMOFN9+5n7/4MdAd4CImMtGqAe7EFajdut1e4d3la6gxu4ZuIX/c64vJgoTgueryzIIjbc3z8LtBKQeVs6as+WzTI1EtywfJwkHFp5U97vKRufEoNTTcMZrgFtwFNlNX+XANeMGIp2A8E7WeItjV1ao6CfM1TlkCW3rCcELf2blrXYdEF/gZ5xv39IhnH+3hhWjMhCThd/fpSAJe7NB5cufPqBMwsduRhwcvhsiXQ1Hq3l01ct08oMrysMEfGsg2uY5pBX7Daw5I5SL5MsM4wi5V/eS8f0j3UTS1BpgRXVh5hm5vUJcHgBb0eT9YOWSsk/9RusGnmItOBYbZvGC/ixkwS8HXxOZUpDaSaeYb+gX1t0L6bFOpYkVS36Ve82MqDZkQp/j89h+PKVNrHUuFrdDgTOkk4V8vqffDLjzuflupMCnl9d6iVyXiBnaoaE0pZpdA9Pobge9DGNKrJjK+nhvM53d27CSHqd3hoqZ3rx4jHTLHiirSYrf4Mm9jDpJanU9uXxVm5POYi/r+jsHPg9JNHBdjevYGxYen/tGwFKX2U4UTK+0LfHvoMJ2W+Uq1ki+q1IsGvJ5Q8RfWCeNUn4l+kAEwjgWg6J922ku3p8fvdA1NdIU3iDLVKNz1F+0tTpNmPoAbLCspSzXmoirc=';const _IH='6f347e5b38f9998f15c784648bae2db750360e2501e11efb63fbb09892dd6daa';let _src;

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
