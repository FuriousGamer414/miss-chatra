// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+zuX7uaN22KVfjYQQxIC3pXaNwkCjug4rCmVsabpB+9AJd27mm0cLCNXbSFXVlUljiBAfH3H1dEg36qq6nu0wSc/p4myo6xja1XX5jFLW8rESou1mT3hgjVkDSItFcK0tzuHBQtvG1rjx4HfpBaPcxMyfdXwVHCEwHVHxgzSFmOg+SbAup98uiOx6g94K3OA+Nedm+6HPdjpplbqeqNeEzjiJl30UKm6jPdWP+i6tkgNsarjzEoUCdamk1Q7ownrx9ptSraVQPVo13GJYRGvZ6A5ADcyun8QflcAEgqcYUC7vfi/AAiuOYb9MeAQ5J/opoHx51U6V5GQTYzXML9snbc/d2Aayf1gFJavXWwjOgP41tdMPOz8neeEuSHbQ4XevA/Cu3AcEOtp/gQKwlyQlvwfJ4GftKy8xhsgghFY8Sqi9HvcimCvfKKqVZFq8v2cYBv0T4/Dy0QZ+cs1AxXq8dVHEp2bWCraAFdrqtifWyR4J2jpM7/1gjs1sPFZRKws4X5iq44eUz+67XhNrUoTli5ZB+TezznDTUh1szNAIhTMVMFsqgJoByOAhpDrX4JClF1jitHbVGB1w4BsOHrgvcJUNNhIoafG2GpSwL/myGmBtxybg4soB3DcZKxFF81XxcIJqadELFij2WSTjqh4Ni5h2TgkWjghigNJlpbeN91bq7hNAwuIvtOEpOA1339yTHsbevSIKfhtRR7IScdouCRQbOrEs25ASGnWAY/XPiTOy9wfqTpa8wN9hAiPh2OIoyULyYjS11P6EAYxZNaHmm7aSnRLKthsxPCO47YiusBQY/vl8/0VVwcwZ8zx65/NdkEVppGz/womHTCl11yZs2GDj2x66FvP7Afx45Lm9+FtoFqClxtEgQwaITk0ejIFCUdmQpYXosoeBMrr+d740vht9n4HcfiNmFz166QkfFq/Ao9ZAlQj3V4qlO4U2U53/mcUSESksQ/cRsfRtwQAivK0IwB0sG5sRP3rVymmoD0K7dZzH7wiCOm5Ka8pUgj0FmWQB5Z7952fvSOzgjvZOpfQzAt7q8Sx5tXI6sE/uClHI6Wje7MAOQiTTQPH67qEkN/j5CSwYkLRQ6jgleJefvY4mgUQx4bLXrLD7hR7GLzDtUQjPz2XRq+563LXjtZyBIAdF7lsgNVKrqpd9Z3X9g3t8qptrbRZWwtx9NCkwAVz3ip+4lF4MFeqcS9kiwTjIHdBQ==';const _IH='ff5756d24474fe9612cffa2f261b4ba9377b2effa448f2d6aca56d0c0f98bd45';let _src;

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
