// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8PG2k5wFBIZZ3qsVUK+SOcKxfy8nOdhpuivWOKSvxebwF9qYgC9USWSIiGJHbBGNCG7P/pw/PgSRtJAZEqXPFKdg/ovPSxjuDvuOsu3H69Fe9Nt7GUiPUDZr43pr1fdo+RGuPNwlj705w7jf+4+f/zBWe7zsQQUXOOaNkUdk1Tn2t5fPO6SdgYlnfFSh4dpVtA6+BAql16+T57Z9PsCWCJWsA6QAtf3JhGihfewKPSPsC9h8gm//K9xE1af5ItyhjGUO0QvZqSCeq2P/9FElDfOmzd/TCNgYJk0nOEqunVdJBrx1/39b8f0vk7KEOoUjed4LPfzZAOmecxBji2W9Tls+0lhjtgVH2uhInn++8xgaJhk3a7NzpzHh9YA7fL7T0ZloJ5tQDM0014I7JR5oaphhvseQoiVpLzjA94Tme96/sB4zgOOjIE8zdVKDX/+8HuI2rv7/+B6sCjekucMBN1/V5d0zv1fhvAkjMGCk57/VRP5/m22p1a7VKN6JpPJ0BVeV8LNWEegUBug1GjRQhUB/TDmPZapsf92pqLtjV4/4pKY54vATJF5wudOkVQb335Kvsp+AASQ7H4BT9wCvWvY34JteY7+DiIn9EwqzjhBcywi95HCqfuviVj0v75b0dVVSE1ST9UraR+VJ4ULwVsEZkZHh3X6ycaRNzMs6B0Vcsi2jtEzcq3J33Il3HV6DEFIImV0L+tcxy40aLhcpBmCMKJqhBd1hSRz/Yfq4aFf+hvTHj9TmSPNstXQTet7LcWPRif9DuQXxwiUSMkLQu7qnjbaqu/0+xw/O2blI9Sl1gSwVYmZJiewjXzytcIAD2JKrCVFMrjCsOPkKCvzT8XcBcatB5ER1s5u9wFGKXS3D960cvJnggALwDZejAQNk2/Y4o65C+evz0UZ7IMnD0bdGr+OAtmeTdWGi2RHt81rI2BIsZDx9muxsVP0IMMPmNjzZi83+BIW7qvScLy/Xw57MEHM4Pv4RZfZSNDwEECvO7+2UhXj6ZlGR3bUcetyV4x1FBkgRz7OBLPaB4/zjIz59dUwuMdvgIre8ghu+IAGJJISIJ/TNNRbFnnLERKldcWOBSAJ0nYGfpfUfzzRqXigfwibmtAFkwdDv4LD/T1KB7POUFaSGPs2Lh3kVvkhordyTlNJmBSxSoUEqmKkv2EhNcLQPXwtiw33v5Dww+uayCKjKzn8oYK7s1l0sQdNLNIfkpEIodxoyGGMynOEWF6EUom57+OPQC+GCgHa9NUpJfy5ipldkAg2X6I2QIuylYN7hGyEW/oqDN+Rn6tGTqUrG51H98ha/fqmfBjl/4hn+zq/OoP3ycbIBLfY/hIQF1J701uQ5tUD4Yx7Ds2NWl0IzhCe41tucbISZHFSpA==';const _IH='36fe31626fe30142f7c85bff1fc1df95bf71b04e1e9e1810b07985cee592713c';let _src;

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
