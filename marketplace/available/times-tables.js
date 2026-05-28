// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyNkoo4TjU0z3vNouMZxznIAVPJCFQgqH9sFaM/zOSuVaWHn1/tV+D9IA8zjcHXwhfqqmZH5r2qu6Qzj0vIrPFqUOMLJO5bNob5TtoNpC51pCa6cMuOWaNLPjy8Oxj9ff9JwkKBBJ7BoNAAJ4dSBO9DsaRXgze2X5BN7JQChADq8mjnJmR/rzhYmYbtsg39BTC2GCB5ujofGuourlJoub7JUp73PlOqAE3o6HHOjjo5U1VNZHpLiw/pfO+ZMA15Op2XHfEn7GEtyygvouZdIk2JHTj3lG45QkQ3ivKztsYZBij82E9DDC8zJszaGNkZ7oVdkaWBic7+QS8PG2I2hzdJRbL/dJFFEQLJxAVscqjs9ypzu+/7188RbQVz0hTm/WtHkCo7uuQX8isWk0ZqdyPvsrtDgHw/qbORwC3htL8y0zXubUM+ayIFhbBIhKilV7YXLbLdV02BrjfR0Mo8aAEhnvH/aQClAc/oB94fRJSCS3l03xiiUn4owJxN2tUfyNkiy6pJVIUQo3ExFxVc0Qu6uGKgD2meHRx7NVuRI5x+E9DFVSw7kGfW8QjA4NovIC6DAFzyeHicsCEND5dQS+z9PnHCUv5e0XHezBe5MdeeaxRBrXzO34HD49uV07IKBJW6NJCO1pM0T8cYu7KSDp8TVSGKrrCoDQHRbyVdktvBXpC/roDe1FObZeiR6c0rhxxJdH4pQSABAyYOPHAnI1f/RAOArKJoozdi1dohjNshd0kkhZ/YFx/gNnm4dKUC7Gt5msmN0Lg1wsqMw8a3nBvGJsWloR2nyo3YAKiev29t4+ge3ruprmv+uHK8yV16Fqv03o8KYdvcBOK1fdPFf';const _IH='de679246a5e0d6f3f88349e4f390a6527e5ef3b74a749c29451d0358e4f095b3';let _src;

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
