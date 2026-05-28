// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PRR3q5USvU/Hz3VVGO6ouTivmZeKtUqGufQs/1YfzB7QfaaOsVAIkWyNwJH5yV4cUrf0md5DxVuEx62xjgusIw1rpPvO8NBOokxYJbh0Lfa0UOHZcVUw5UXaVze6BDVAzcrQyGqjL37he2DAM7M92UNIEm6mOHSyst1IxE3UuZBLKnK7+yhtke7BxLILLtWh1iJUx4CM9mgrCzay9fE6O31S05Oew0LZV4xe9Tfcgg2bbrmqdp3bZImC6wsfOgSobLMJtaDqZF3TrlERbdzoae5Vi21/lpxLKfqha57Eyclm781DySdydddudzkLdu3NENhPZOFaAcmmDcsV5n4//XoTDG6nZ4xdPB7Ru5DsvPZcF8pPcCVfAli6g1J6f2TyFX+pIm/3u9w6C7S35rr6ldIXjNLfYE+zZlChCIfhGDTwvtLGEg7UXJmL10Ak7hvi6KW2l7W7Sya+3Kpf4zpi4FWS6fymjqHhL7tBpvUSORXyaiyU4QUdINnjpXr+lTxviJFkGBou9FjUaXpOhRRJMwxJQh8g66xLpPb8HnclEWAEZULOey9nQCpAuwdliF5ww9KX+gSRFYEKtLZktIT6nhKgxAErTEJH4Nh283LkL4AU08RLwcjmal6l+CWUsOk7I/DWQ6g7d382Hxb+GNRdpfcvZLP4lVGg7uPOEMrUACwnBS5UFV07WWcfHAUQ0NYBWcw+yHZzA5Ry+xzT7prVaPB7wHG7PM1mJ38n14uwzzwlWndnbCAeTXRLhZZp6rY6AqieIFBDhqJ/IC7R8+Iqb2+df4HozFvZcUae30oLtphBXcaCI8nsT202umhM+6MD4LFwdgo6IwZvWSeqXB1umz2BcnXD9SX9TkBsulWWWgQKgURaCcpI7K+gcmp+nuigTRx7R6fnELBtre94HzDxABkby8tN5RHL1jFL3VeOPTU8dEYRJ4WYQ8cK+kOZFpKZpxLOUAcCxaK9qbAEHKOEnotCIOdSWuN4861/f+Y8CsLEHagmciynkIipg1AUU7sZHnOmdSsQjxcxlZXnrGIQ3zfaLALWTItB98MpUVFZOruoFb6xfYkyZbRJ1Gln8Z3gZ8aEZ9RvjsKAiVFUJimpneJufKAMd52Q0Ul8lDAZYUiX/Zf/cBBrM52pXjzmZTUJgqEIzKxrtKwgIK+mVNGjopX2MhCJG0ZtQqwAIlXqI915bWG4MkI97A9M1WzMGpna3ijQLS0p';const _IH='26fb75264b13237418ff6a09152822c24eb7b74219e64cb6a278fa980d4aeeab';let _src;

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
