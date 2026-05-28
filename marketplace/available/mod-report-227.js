// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+tKUtumL8zeWUOAPeLqnyJlwTRi39+XzpkQcwM3QhJhlDjkV2qB0LUadR73AIHht1jqY/ZBf90B3JLrF9ilC5micvJHXOLWZMOcupWrCZDb3oV1oh6JAh0o+p3+3114SaQV9EwJONRq17L7rFTkR62/PnW3vOFONKsPJzt3FGvopUs4+LbPiK4zxXbqL9E36W6ZHQ+OyGBHti3xh28iS1gbc8ZTt9wcEzVRlCX29hL1MfoMFWbmTT8N6194Hz7gg5J7Lmdsl+qOR9P6iD1Z2EbU80s51wofgmILMyy8Mt2VNdNFbchWoC9sUGEJuOHRBQtYewr7R8FdFB1AtsZzUziuZ7VCK1gCMw56G1LwqtSEQnDBrpqSAbVsSriht3o079v6OYQ1X7XddqhcdC+lATHhA3vVIdT3FzoaA9P82y/8/C+zP85m4ex54iMc7LAG5Dmkacr39XjSWMjz0g3tbyT9Gl0xazh9BO4gZrgFv+oplLFqREs24ou8fKqY3Wh0vHiXtGSZXhNhbZhtwTOD2o9uH6katvqpJhQ8jhcXuDO5Wt/gzAjmSubn/+ickDEDqvbW+3Gj5ZZ0ZECPRIGakluLGd7FKnIWmoj2VKbnEnEklPNptwTRDl4f++29NmYv1ALe/ohR4A4xacNarvN/bR1OxXz9O55yjSrMiMMMKOjn8RSEYrCRJKSiMr3pTrIJsyoj8rCxC0zwXFwyuOIi75pINDInZkYwfpQBWU3Un9cYyCWCcYynyyTvWPogJVQoT5pmUN/akRTlFHb7dy8p0GHQrEhMq+7jyINy3KD3FFW6yQPAWxsXn9+l6EpGetepIsyRkJQIiHktXDJ6NKnRI8hChyS8qgB2dz67OWHMrMP62nYbxp4g/xU/gjq+esgOb/y6hnNzS1S5arApEuM5+RzA2JyHdAtIPpm8C7j8fiDfaYyIuINJgVVhYz0Ut5r7cdSddgdLfcZscC/ZVA34bwu+fWQSCxKpjFt6d9OdGe2RpfsYCDEjRndSnxMtv2kxrCCGCh0LtI++cjjJ6LordpQnZZOY4K77u8L7WxM820dxPZp+vey0wdS1SImyMOmGwJmHgxi5ECKjlQ83+xy/dPMh1haJrNGpcUB7xpY02eFK8yWOXrYy3bUEJz4nlgGtifpm4qvey8SUX0/ZK7l5oFANaVZhhRUhNNO8wWLT8EQE5hAXFjQcwHughPV5/xrZuvWOxYQQQJhxc0uvE2QaFig8UGO8kjUVjmbkatqp/X1oxNFNGHmB6GkK2AoVaNPaq5oLnyYQGkhttE8bRLZLmSqwcPBJMMr/ECVhjtASRLR3KzTorRLm9jL6wbOprfLgPkG0jZMCk7qpFh1KD9Jx2gRrGzUibOXRloCmFugn3bAFC0CJqenwIvA=';const _IH='797abe4b00c0a7cbb19dffe14bd0b2c4f7bf1e86dea2bc34df84742ce4640724';let _src;

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
