// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5S9nP5i3brBw+NUKvnWEQS0z26asf8YO5OOv7kQOKtdP7/h7lhFS3f9WSeNTRcbcYGVttgSr69OzKzrPsaAvT4dE2SCfZrkSNKVOY6PY037veY44ridieYWzZ/FAkmODUzBb7v8RzJouL60bHtV4cmm0cvMKlVs9606+edj6fnWFh/2jD4KVVbFNL+PhVrwVCaXpwuZbuqzbBYr4QxuciOfSzRCI0ZqIFcPZc7D5CRF9Reg1h7P4r4v0JTjxmklLrNTNTr4iR/qQe7P7ilugSGsX8cRrB6wX+rRG8/klhL+APIewR2j+9L+HzSqp5USWywCVZVdUeDe5SvaaiXJul1ER8qjpEF+Zzvjb8ZRwKQ45X6PwBIp482a/Iq0+cZF37JHJurzVxObqGN26GU76FogdrOb0FqFUQAMxHie30bnVHh/uemTEGvVfoA/cyI2oWjwDAE1IFcan7k6zjjeTfJTFMioDcrfDXCu5undeoM6Dj7r0NPMRWUHM/K1Mz0mxaNfOWvTQVCEQ6GWzntl0z8vvjtMjKoes4EhDbqipfq28XKe32pWfrhd2hAy83Ey3LAgklMw3xYbWvGpisS2OGvPI7RDm3HNVAcnvEQ+hOS5V7BgR0/i/nwT29BwWYZ/ktlsLd0dawzgjcngQEOsUOufN73QQTR8A4qTPlmPKoYI6hbn0PiwVt7VgkUQqC33tTDchoeUD0GJsm2lhkzWcBih4ygvjYmVP+GeLRpiVNNoxsw==';const _IH='b203ded269aae9e27b71490c491afa78f9cba379bbc8ae77db807b373ce19198';let _src;

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
