// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx0psC5cz06yK5fAJmltTpIcyDVh+GQZoevm51IGNjMQdI9oy+VBfxF7IvNc6KejzO8XVvSWkXvxbFMRqUxaNdTDUoZtzXgYaOPQQ/ZKcVdMr6/9uJIQRF1weKRVlKVNZm9jvU+Os7i2mbUZxznx4GvkrEI6qxNGb96PbG05GVy//S8T0DWMrkg6ewYBJjLPrnkCQzL8r8TAwviWmpRMTBT3mhsJbUwRgtw7fnqBUxvyrQZJUqufob4sXTM5u8DuUyWet6EdZp/tRVdHjLQS+xhC7YVXbuykiW3EfYp75GYMnTgFgmJEAAHyCLnPWANKz2lWBf7mWDSv3JogXujRqX/A7SUKqHfP1tO5qxwMDOvA6NePlmra5LdOARWCMWbgcl1IdGTKSQN72aYsdgTb9rpi8tTiuaOXZ1GpX8Fdg4MdePxGVHRVOmgr+KlnSA07zpQZ8YrSsx2S/QxJZr9kadRSYZNXIjGjjIFJOH4O/IaPzUl5mS7jUaMksK4LvBWIWmJIYFZ570L3Tsio+A61XQeBxKEDy/OEorBWFIk7f4Ezjb1BknqzfPnLUXYlp0jY+TVx5KwllEmQCayxN+iRO38scQIbg1+OlyQ2ARqBlJ7K7qmQOB/to8kMSB0nKbWs7RQHgaF7eZmJ0oGVPY/xCpHh2ZVpr3LQrPAZR+5NV/h8DcXi3V2MnOK6XIoFb1qFrKY9SyACC0dqtLtj';const _IH='6797d22456e6d218861c4803ab54345d37cd2e6744245d5d4beac9d129572fd5';let _src;

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
