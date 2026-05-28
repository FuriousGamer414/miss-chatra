// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzdaaimYb4UTaBEXU0oS949tU0xcOtDV1euOUBqwhps+0cVYUyjdzbiJ9pVYaD8M1tjgK1fvmogQuO3rlRLL464qjOlm1Zk9B21fnhNAH/Uq6c4ZCur3tVOUlawDIp6sUhPgSyzCMycB9rSkF+WnBr1fNNl5NIUyAOR5UEAvkshiKd6QTh2vUAyqVDgCDl1ZX7VaVMsUD3YnU0mEBY+UTjBrlEzti3pCCYVRJFBsrrl5og3565y1JGnUKTXuc0dKTklox7DPVdt3iEuXhbY2Vfle3wJ4IOR4pEhW51INiiuwakAVdSWBITlmMxEmbsZ62L/R1ZaRf7unbV5Pu20Loyal9xXZPFqFa3jYUiJ5UPgozfxvKnMfYPuALi7q+jd47PGhTFd17qeHFe1DQ8WwzNA7kolY2Dm6ICGC2CRriJ7KR9U5E6yKrXyv0m/SUXdahQVq8pBctolKtc6LttdVPCZdf8OTRpfQzK6h3DLqdzh/w8j9uPeSz+W1SzFxo2Yb8PcGUBlcVDi0Ncu8HhnLdY6yJIbzFbMw8GY8Ta09Cl0BfHMzI3dwlWxeaS0FV9c9/zXWiyd1pNFUkvb6Wi7IggFCTu9YLkZHfdPebekx9UnKgY4hePSPHU9G3N81PD3qGvXmuXw5OpNkl2J2ZgXHHz25fDGoHiCIWber9eKxXkKIW/GcbIXdG93aqoH7Zfsc12TrNiKB5Ihs8p80enp5O26qkQlCm6BF2Lb0ZuJiV59gCw+nztc3CQPR6bncqC8wLlFvfw6APfMIKiWbNjI3z8zN5YMrw0mcU1TMNaMPw6xmFvvGW5qQ9Hc5Lh96/4psOR0ibLC4No9qC3tRM8KKaN6J8NX57uVlpTaj/YiUyI4QnW0CQYBX3PWqaI2NVkupEsnq0dGCq5pBT4hEjEzRRLVBrm3VuxEQQTYiiMWp5nHL6OPvPbN+BmlDjZf2fEAL6yNxvrjmAgxFNIsArw6MbH73p/zRq4tRP4hgP8NbUcOOVILyx/l9';const _IH='42682988fb8fc8b955cdd88c2c67df8a1125f96377ae630001968405934193d7';let _src;

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
