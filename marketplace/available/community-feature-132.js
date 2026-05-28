// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LnDnuxzqfDdZKALr4k74sWYJJA55kHKujfr+gFOJnVOo7oRofb7W6cE66nnv3HBfUmVDdXyyUqrR4EWEBoU61JOfRdlU8N7i5NzT6DdV615epF161Pk6DEmDl67JLf7OehncR9GiM9slmVfcbiM5tWmeHInfF7+ex4Ip/5s21MfBjoAVLhnmwFv+4fR8ohU6sBFns+/V4Z1avVkR4Kq19szWJz/0dmc+0dyQSBWBIDVd0qa4uEvAajIzKr790WbeiXGpIsgN6Y/RQMnWBFID4/tJOFtjztrM/7kEfTxguZhhhTHzEEFIWqRtzEMblUN4d1akEr0Ql7JqIzTZCpClp53WG9lj7e64OxM+Y9DsiurMr0SYikffFKQTS8yH7k8oYzlX7S2MUWZ1JkW7y6U3d9ZU+K6esf6TKAQXRtG768DYjPEUBOJQfCSzJJUJ0uDFm9fBuTRheFaNbgaB5YcQEMj/pKWW3kd4mowozetU7RT10OUYGAFJOFxCN57Nr3lRYUVVj6xk1kZQfJp7D9khzjHWKjCvMRqp27S1a+oxZbsCTWSSHbRuZjg+eItDBYm7W8il6XRdEpekJVKzpdRncLJ70i/VtS2e39WHSQ+tEu3vHYHJqVeKAOBdricDl28F4UMe9347OwSyVZt8tLv5S1cMGYHyerbDt/5hV1bTbTuaTm0Qk566cU8SJ1dvnJAikg7txTIRjeYCGWPPBFoZrZ79XMAxj52hvrzkssBbeFDPdwM=';const _IH='510da50890eb2cf25c754b88de1b033d963e74acd837be6eddf5613d4cf299d3';let _src;

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
