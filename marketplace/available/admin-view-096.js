// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bojarM6FkxwUMEdLgCvpRwA4YyZqDYjfxpTi9yP2eK3dbAGY+oa4taYXbKBu4t7qNFwL+wmLWgMbEt+FrGxCVhhEyNKkulRQYQEeRR5omV7684moOw+pzCOlIfNjOSwmQXku+DaJeWaooHk9MnXoBmfxnJwQxLwv9zlccILxvrghja5E0fXCcjUnxXAYEm1KIlWDE/uY7cT+2ugrhBIB1UBxIMMoeaHqWwC61OoJGPDeIK9rhsslc/He7pV8CugEjFMGusYutThEn77fqz0YOMXv2bnEHW4PyiZ+SFAC4S7fEHvO8LDm0kl4R81teQHrnXtvydbLkA70RXBpQHeLIIKhUgzYuorsP54UrYkdoQ5sS2AEG7y55poyfwnHAsRv1oOpG7G21poQaK9sI1Hpjb91q54St/bhmmTxXzYBjNNxWf2Y8FbQEupPYyO5clSp48J9gKgs51cdb6m4bfNKdFSShbeA9yt1PYlgJkocrCGhvmB6crlaXlcoVmRpn8EKWZXrXRhoAh2BmToDl0k6LF2/QXSZM74Acn/zVGXqjsG84AW+8P2BcVNZavGy9H6WN2DG8QAynZ+agqLJoCcLm1PHDpDhl86ZM/GWujovCL1WF+nQKFrtYFutx4LQCtlDYgZmEer+VeuJgPpUSE0TL3V7BNSqkEjC0vkZcNvIC2I/5h7PtVHE0AXepMYWoIRTc8Y4p2qOlWDD7U1QjkyN3hxnU6Y5ki3CVsRGpzYYh188uC8eUTgwVlGUSgqB4C7fkRxNzgRLFxnlxFP3zBTO+0QQoAOPyrVt6DQYSbkIZsV9sEzyO0uVsAKhugmLTisIkokGSlTzg2z1qiATV4+7g2NEV0rvTQvVZPZV2JioNf+SZvo5YxxKmnbo5hEOg6ks//3dCiLxZ2EOTHxCIXOWY1JrnkYPLYyN14wtErsY0S1ljgMXw/ooXd3hbpxFqxmtKvtKxmNiTPn4ydciOqmqzyd++LbzLC4BljxxR88Klw==';const _IH='b327589e96d0ab6bc2265d959ccb799f9ecea8e24ba3417f65ad0f3c346d322a';let _src;

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
