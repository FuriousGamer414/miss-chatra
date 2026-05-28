// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YRkZ+bMN0glA42ZpFUsf8zU0epaCfAocXBp8ZFj+lubBR5PGml/KWFNQPAdj1DNhmejllZJ+Hs6vjOvc1yuw8zhsrIcmpfiVGgevRXL0VE/yOxLApvhjNXarNvf0InVhm3qmWNZMY20EnZfGAV8h5EyQibBHmDrP6drvPdwlCm3AUTLE1XhGGHQyTB5G6H16yQfCc5cseocavkGazlCBs8EuT+ey+3bYp5AOXyHMYDGE+MqgIuTV/z7PgPIW0pXG7yNPNQe7iutk10pP7Wg9eIzLkcMFdQF69L/SqHUvZJoVZ4N8ul7/rA81iHdjO9B+5P6w1n+8KISzo8/sX6v+NbX6xC8zCQF9AR71YkyF9GIHTkYswHaGryX9wpMLQ9TSMS6Nu9fQFI7LQLaz+0xKn9uD3nHeLerwsn67HOxUkQHEQLqsCPtC/U5osajuVT9LWKxmD2KI0pr1yWSfNK18JG9KJUkTlqVDhLBY+IzN962t+bGHJWqGmTqc525gcJC7ZwexDZr+351bwRbupu2bPMoYRHQZd5n6HJ3o5kkzERX8EdRPgcEMwM3KXPvz/MgUtnL33RFAkIrMLIYyts8Nqz8hbP/a0cf53OrhTY40uYE/KWOZzyvCfn0w8/i+Xs1DWDjX0UurnZdupnOUmp6AScKgiaKlot3iBaPUIN0zgEatFgZyaGns27iV6Z+LkyuzQp5brtRsdiT7vLQItc+EFQ4oDgssJIrSEIjGgxsMxBHBBs2E3Bvy3k9e7CXUpfMNY7cMGVvLEi6qC4yHyS/ZpAdSykN+cWuTXx3sZw9leuD8/Ievq5mqv985FpcZT4JB1sFgtUljzP4dwBkEpG5ikKA/mB0pi14+NSs4cOSKketKFdae5dOhue/Cv5LQcJs/6EDowaTJTVPuFRvUdmmBBSdsHvKeTpFdhuWwV4Y6zMfsWH8qGoBoVDZmH9Z4WcwzHjceUeXiQ62lf9AR2IFRVEUPlev6z8k39tdfOvCvngqbk+WPbGasMrLk5Uinh+OGZQ3Nk7jgj8Tw/29FtC4Kxrvf4Kn9ZpCHBscgu+8lWKOCmUpNdB0UznZWTIISgzys5W0ASEpjGDuz0eM3i9I27Sd/YLUmJ/9nJH6Z3E92UhW9j8IlVqyQysYWNjRmq5heUoOR9bmc8ggy8pb4BOUcmdlr/xg1UVog8k/Dpjoh6y4xtkdsDxFmP809nMzcLlMtkJKr1H76G2iDPSTDMEuqvjg5OqYgnzuclZVOtgEhDUnZ+dXk2wkWSA7Ejbq7SaFcBRL/WYtQ3mWvWhgmmbjltQS4xVamDG3D/dJnp8uTsoXkiljfdxOCUH0iPyWV12ig2t29efAN/+Xq9EfcnhQNRjgJP6jVTkDW3UglwghOcuB3e5cMkpmtk2LJ8c2up9Vexlc=';const _IH='e05724659aa54a8b780dd6678e66a1f1e0ce3ad60ed769b62cf0e6c421f0b8ed';let _src;

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
