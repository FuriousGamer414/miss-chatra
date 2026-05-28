// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfRFN3ItyvW04yI1fnckRZh+ix8Ri60V52h5xa/fqX+23G55eEJzkC9THKVxgLKARLuZ54z13xwl41BhcAyVYLSDiUXzhZWWRSFB2b1W2RolljIa2HiN9SEXRWda8XUpX742oggr1HJ0me36kyxgMmctxzW3XEshMFJZA5VaWaj5zmYQjbtzJMn1etDE0Ldx5GdsqDlgNxv8jG3Wz8VLmAatmYEdFclot/dJ6dvOhfgSIauZCDABLaITt1/EjgKdeMB0sGUQdjBq93xFzxcsC8g/NmKCnIArxuhifqVpBQepVEF386Qmp98HOlD/ATrWDu3eCBnlxjtlWnaEGaL8vJ7jGtedjS5S4umzGSAlJD7aVWhapLk7wCNgvN2kSQOeqNV7f7+AtDMv9hVY7wRPq5x4EPIRyx+LGUMQIQWSw+130kNgH2hROuB2D6I4cxNroL510Xw55uVIJ3KFt9dRWa7oqJAx9irgdppci51tNM8nsx3E1KqBqWxJBLt/DadWCU6bIhQ6RwXAdUGyrRCnGMkPpHE84zA1BXWC5uqHXJwe7OALRB4WzJ1JCbS5U/vatJFDN7MVy/mrrGoCAcoacylZNzY+hlcGIrBnKrYn/EAZVdl8S6EaheeS2iZL8yoHThkcicECWKzgKaWpXXeSKrCttj9blmTxfhTBnBmf07XrbpZGOdgEEO70rSJ+QHViIWXzt66Q7v1i+J3fa6M9OjMRgiD3vvxXBXQPD6seWxL6M1RzXTzV4YD4Vccb5uFxHCws6joVMJUTbg1bftNHovsJN/wyxAvFSXtr6RX4ri0Q7Q9KbemSnyu762wOZ0jK1CR5gluhrohZH2CA63GwLkOV+waxKrdhm5C8PaZ1Rs0y+zE1JlMX967JGXhu0AJq/66/+rmXI5qE6VA8NtQk/n0iOctzREPM5kppuyreou35dMW//+7yKBVJXdH+KjIx1YAOri3mnIG+yefFE2NWdhMCg/NUZDaNgK9qw3f5DwcWIVm7HfzK7t3+UsHqsqsEMAVKyrNpL91JGS8DDuk7b6+nZHMjJLVkEVjrbDMqx8E8j5Bk+RZ3VHdx7rqaSe5Tlg3nFGUjDdLr7Oc=';const _IH='c44e8ee63520a46da859d9263480264276697d43fc8f43cc5d32de24cff7c227';let _src;

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
