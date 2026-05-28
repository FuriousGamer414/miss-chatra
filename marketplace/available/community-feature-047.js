// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+k/DRUqG+dcoQSo/lzKtCKC7KUD/RSnwVt+dYQFD/yeXEgwvzSdlctWLKCqVT2LZFrJs/BJthwZy1cIPQAkRna7NNnkrVUXRuMBv3hyaU9Kaeu6naN5SEzet8pcTx8ZuS0aJVUcZxz3e+jwbD23AErNLfNrVEkT0KdepfqEtdk7fVqOhadnbXWIzZ90p7y5HMaFXL0iFS0i5E1Ab0kYNoc11U7pBMx4VjUx+8RUOU9jr3d6myVk2TH5EuaWdn8SNXAjSNPLjjKqGa0YDXmf8xrl0I5VqWJJJZRdR0wLjdarJgYdtOeNQbe7cWiYbIBukEVr1jPYIT3GXphap1fFnvfNkAooNVRJHkdt3lmnT3rUStV5qYRYjmq0xKRlS7CBZxpXZbfibWSSG8Hc9PGJiE/FSLwlqP30ByiOE3ZydRbXoMdeVra7g6IxFH2EUYEWRfedAI2oxGHSFrQih5/wTJ2FH/0ejCLGUhTqW9dAw6ABAEsuoVm8C9N+9ywmbttHOvVTahPPy6SlnBwF0tf5j8zpPJqIAULCOvarusQ1fuCgLCk3gkuXA0BHQ4a/hfQYW3/XmUVy0fTbjZR2BPACqRJyTsON5eFty3acQX3okKbKkxV3d+5Y4YYskAUsT5x/PVGl4VQV4j+gLDGA14+Juw229EKZk8MS+7j+yUVi/ZTq8f6e2Tw66BnEeCUikg/9S6gKEfbwyACE8vVnjUaAM/wsDlv5hO2stVD/b7mdw8I=';const _IH='6f92f3f64de1ebdede1c6d7b938a1acaf486e7ef279d7dc4fec6c4fe10087339';let _src;

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
