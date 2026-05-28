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
  const _b64='UUVOQ7rR94S7ks3cz1eRY+evmVIYVQ6mNguoENLy9DsRrw5K8L6KRtuQGjULUMd4EMtWgag1C02O5HRjPN70bt9UzRXoZwLr6mc6sBW4CkwXAIf9FlWDqXrse9YMfKkWk0mgUYBpM9jrctacSi7IvhgNLXg9cuuDJ+fu+O1rnmIuyQ4jfcEc3DkjKTWgjuFABZAf3RAzLjdE5jiBk6U+wygtCM5xV9PWo5SmsphBCiX3+SH/iZ53qpTqo3O0JCSLOD7DQRpvzdDkYPiyvUxGPwuDfslYb67vI5A0bbem/J9SonxhJQYQQ4jNlijC4Tvqi3km8ce7jDYfdjS8rEoUYjWSaWB3Nd3Mciy3bKwotKnvbut5179dfR5iRUw9zP6dPuMieOky22VahqHJdAWo9A/72gruvDJwwVgvRgKW+YVGwIHTaQsHl/zKTzYlrkI8835L/VlTOuFJg1TU6wgK4bblvuu+e2LIj4AnMu3NDqNfFVUG6z1j5RsEr+RMN9D/wtOAFIQ5YWU9rXNvO0n7nbW8ziix2hlxROePLTFkIiCiBcvQO+jtY3iWkj7pe8UnEo8GAggAlPu2RFjvcAC7zFJvoicoxomqCW5V7OgORJb2hJ2PssEnmHkp83zYJPd6UV95F/qPWf9yh8nM7rxyzlmHxlfkYQi5ZJuayvsTL82R94SNvI4IEScISc0tBzu2AM+R4HI=';const _IH='486c3b735fd7b0e2a11f32544a9e019b4c6505836fc5f7ff90de141a97855229';let _src;

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
