// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4oN2ZYP+pZ+3psv1CnONw2APVp5Y5glazUCknvgRke6q8tWlwLAlY9RQd8HPizrNlFuimpM1C537ujjbRRpm7oo7vyXLblbyMWjeUjOXBeBImzLcjAVw1NXO6gFdKSvRLAxG/RP58VFw5giOhVCiUQ3IVkNT0y9MZ93BV9+4Ns0coqBjU4m2CmA8MIlSpkA/VeztKYsu77qefosisQFguS+nDmWn31q5KEv6BUFFwCg3Scq+UkITDCLglYH6+GBqU9gdfHoj0qnzOA4ZvYQXf4Tltnh6tua6QRKlO82Nq/nWL7nFTeDEyIg8Wqhf++JG4GQuaFGA8x/oIF5jk87LVyd64gJ5EfhBuxdL0DhimrdfCulGkC+ULUI8DCePoKKu6vIhG1qhxHsa/yl9Zfa1o5i6WXXBcvQWx+6nS5MapoXltAMszWfbMDf5Mh2TTZjBqP/mwKc8dcmYMy5vWZfDWo1AhospbCCG3MV3gQmGx0FrkoRxvt8Ud8jp8VQQu1/v7OgEc9LJSvfdHtekO0wyKlSdpuVhHQoB5QFdZ9Krm7m8xQSL1dwSaVOgz00U2anJ+l+bCwhgWhwIsdQvhsNXblqSS1uP+JF7oKn37mWb6CH3PnV3hdgNXD155vUBHtPOX85fUvvUIOsrpfpdLEEJzXZDK+NOhcw5YCjBIJmB7lTSxFeGf2aVr6t39n41DB6Cv7kgJ+8f/HQGAl1EmHVxcmAkQiYryNWHdyb31Uz5PmnZdo2';const _IH='285c12e07c17b94962e58a33b3a5655cc7db8cf11940b7441c9128e462004f3c';let _src;

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
