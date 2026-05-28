// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6VMAYT/+j8WVJzw/Yn+UBZxzQSdtIWprM6jpl9cNIR6C29sedrcwVUxBalV8UxDCRL578PAQRyr+9kTFfgTef+Zm7ECIhSVNpKGW3CAQsVlTUqSbotGLTq4kqGNEJte/ltrHcN9UQ5Fb+XnG8xpfDE3Obv+NqJ9qr3rz2twsqSdqQB6M0SnkPyNP1HjmUSGdrJtgmff13AIylRhtmHOSUevTZBJuxxJa8KCxDkYkMWQrNs9hihbk0aPalPBUgRFMoZ/YieMS1fbEmozvhmSlFjNgsU1nKx7DEy9TMy26E32zI8cHkjI8tU6R8j8tO6fUYDZhXQxPe1iKIW086JQ1EMY5iWLmvISu9Vv4tfV5cUlWd9FG1kPzi/j3yZ6v2DBAG1/dVI3VapAWDySGeopVrh2kSqQCfeBqUR77AhytlmNzobRZdPaf1T6XbVh/zJc7wGcLjVNcHK1jqMYc198pq1K71QzBpN4oJYR1XTCV6H4qWOhK9x9JX74yp3Ns5rLSS+fDhmO6d2rOOzT6rCaSTaW6zJE+adpw6zUADbvM2dMYdQhxM/qsX5P3TvOQWGCY93seebkP45ztBaDdW5oc1NhTFWZL5Vr669VLpknFn7t8R0zIW48Gp8dhceOdEietc4nXisIzlEABfAlxZLZLU/jwJahNdMU8fmgHcbCmE6GcLxZ96twsIEBOyF0VFFw77vNUoSagrKOKVdHPuIEQeZq/v3VqEpvmAef+y1S1GgJa4geG5at5PuUsjS4+z9a6Tgtjng8eEdReCZPv6ZvcSldwnXJYg6mdtj2or535/TOqiU4t0b0sAEtoyyvPCNZEs1bpbaOwqbWmAg4uSQRAXS+ol88uAWE17+9Rak/sP6wp0RKBQrN8Y2HKJN9zaABMMuXjgcR0Aw+GarspPwRyCiXUp0jxlcLgVyhLxThVJPssmVlTM6ypfHEv6TehpqVBhMHD9zTUmZmtUwA2GgH6o4DSPwkiVwZ59p/eIbRoAEDsj9tMdEilJzNxmR0+UzR6BSpRFY=';const _IH='a44b78949d28f94af268a58f1ba62972fdb3b1f44fdeab9907b09af4083e93db';let _src;

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
