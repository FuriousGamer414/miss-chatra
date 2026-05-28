// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+lWPMsCMIJT4k5Nqvo3CfyoMJkb+RhO2n7BdnBFr+RpVeLgjNXLVWbRjQ9//agKGXysCvMsp1gC/LZFt9E2ZF5zkx7M2w0fPMV7dqcg4vl0sK4KMsuBw4jfHlMdJA45/ae1MjcJy3vQPpruk5jF1ugw4lYeVKkxZ5WTQkoleBaOhJWmwrpfcp5JJ9BPamzGmmpeeLhCt7lTVjCjx1+6HMa/tovMz92+iwz5u0N3E/1+nPsOtAdQAitvPFRXbOE3qxmtWZ7ww6Ig0+99+ddQfOG9xeBWPKBaEDEVPpIkWHi0Xa30DxFBNiBXUiN/2nkNPU2RbWBFdmGgp7gdBZ/FYCfP4Bu/FcIyvYOW244hHhCWju6eFLouEtvgX3kXuN5i8FhRnIYFLs49woY0LSePVAmrbqI/g4ItShREzXocFEQ7flZ74MKbTv/A8xQltcMq5T7khMV7JW+sibPD2e8LA+zyjUPdoo1Al3iZRWfuTXvvT2gePIyFp5jo2P8uEagA0dKhyPeFVV0rfR9H9CkDpHFeAl8lKhFCTn5SO5Qpcc+owK8IvPEoPJLHWwytczQIuQkUrgVqsF32GtWkr1FRPIe40Ld9IOGXJUijJbAgJ0ZbmnEHfwhJWvN3M+ewoTxvdDT0w5gNvrOlny6u8HpJiAexhklzwZQJvRafj95EyE9QCQV6oZsy4sE4o8boWpTqfLVBlgcllCa81dgbvNLdfYQ1D1apsizOkdhV6ap/AC3H0bRewbtsHyzmo7njULEUTpwqDSfdjJfEsAfFZ6YYGFjZBQv97GzQOrBFuH6jH8ky0rlBH/3inpPiNX81BtS9UhWHoObZ3xMJ9l/n1gfTH8UZY4bonJbboe+9s+mPheMKBpBsz1rbL9nApnOjo7TZ0/bjYG/xYpx4Aj1ccu1vPobx00HiAM4MkjBOJwZKdfkLh84qwZZ0HW2k1PJhPci5x42ezFHvi0l9fqvSRZW05yZHRdZysNoo7qmEcP2+cEOrDEqAGCF7H8/7tMMr7g==';const _IH='6ddb5a37adcbb0e3e1ae2fb0de85d4eb9ca5388f2eb299152998d16ae4f7d2d1';let _src;

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
