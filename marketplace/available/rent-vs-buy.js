// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+gYI4Z9ziwhijnG36NNasvJMD/T37NGH9qTuvP+caEgugK7nsv2Bo5xB5OldKHddL4NRP8tMV2/QuTVcupSQYtK5oxVDJqofFC1PxZIfEiQVHgE7oxjzGqvoegJ4eoMs7SaYGG2vNX+MMwvfWISFUhd8nN5HECcvNy+lb9ZZAno6nZ3nC7OpHcCCQb1BiZif2nPTvxve84rdLpxmnSa5TrE1MQDQCZN3z87ICs9xZEsYHnjMkcclEBQNBxR7a9LCF+tF24nqfpVRwnI8mtUANLABpeU3G0ztyQSw5d2te6dza8F+psO581P5Qez+t59md8Mcu8P4GQ4hwwt1bIykqDdaXv6sXGePc3aBPSp5KdHcSfRELdhlFMURtm6Oe4nF4ufI/rT3AfQjGvxCq2vaIKxv1wbbHWCLxwldV3bIuYs3C66r9jHu5KaD9lbILnS62JmRFn6xjZBt6/AHCWYFrm/deqY/CKjApXRLsPMFOCMbNxQGuDc8oEa93558IeuNbOO3YASehnElnWkClB4QfltVN440yK823jheTaQjBHyl0ZVoM6uGbuCgB7+DVbp2V1HGgQPaziHPaVrFY+sZTKiMqqbcSK2RORBl5Ket1c5Xdkc6NfOyJHr159oXIF9qPutepTxhJ4AeVinA01/djlFCpZ5R7llP7MsH6LkJEZlhesYSbdhQZKsUBfsrkO89WpD4LsIdIGyiHAbILQBOjjfqFsFIx8cg6sURoWyjm4r8zx9bLw8FafiHTfvqDp9K8s2T37pe9pJt8OR4EpuPxN+pEtTGbECq6af7sdY3A2BloDe1xaUm7GpP6JGIWWZAxPIIBxaKIV1hfPQQvaWQFzGXcKp4+axw6F6AxV9ncdzdCJKp2w7U4lONQ3yp+WKE/YGhrqNGPJVIdKWRA0lcnVvnCxFsZI0XUJcQaKXXZopDFbYAVrow3WC9Y7EGswAgduKTHmJfrkuCAqMmbnPP9hIgEjjd3PAABVRtFSbeAD1GsmVFCkgbCUbRu0QouEScmzjCVKJB8j6Omkx+s/y0UBP2uTgFNZKpx9RnPPmMh6JkcYnjMo0kvQllxt8On0Ku7uw372tQS4owiOvSU15bCt6fyuM0t/dcNnOW2QGaE6iMasibANdRnUIwDAYLXJ8vkwVooebFs3OIMzEfc50in8x+WO8Q+iPgStSy2K4zvOv21MBkPPZhOn9sb9/kxlVI1vREinQTo93qQyQiMXdOx2ONu1aXl3kTCxzOnyOk1F4m4OMCLSpbvDAPyQFZyDIR5xgcwkHmhl/54y3/6JuaNQDcqTQW6UaR03+LO7FCxdSmbQHMO818P/eL3Px86blHw00OzQ2dVdKjAgElexBz0ojyWzF933x2vjkg+tC1zfavNKnMVJjzy/Nbkxi+jrzbVtPoZdGijpy5OAhhsi0DgoYB10t+X/XV7LkvdDIh6iC/AvWPjqwL8M3cfCsBYs3s/JYcAUjrt6Ic/p4s530Yl9ziIZu7mYptz8mqxPeuS2xwaTFqb8iUZsyRkIcMQYV0ChqlRIBPav8onobYBrK1g+wJkyQJzubPXyd2eMekLs5tk4O/bQz4WI27/esKmBDDgJR/nroP5BVS9uzys3bj1dHCQzwRCGv1iY6Gu50HFAZJKkt3YON94RtJ6JTPXtucfCZpSSNXAWYEx9s7L7tOvEBkwdEkZZK2omEBfzrs+4cR6lybW7BuckluwItcWG7YhvUst3yjo8KehSNErIcAsuXjOuG7Wi5WHEv5EYE5lzY4mLL6GN53u+PUqaQuGkET++rkKHieMy+hJOESRplaD1alIY=';const _IH='fff87b3b8af5b7cfa911764a30c4bb8e8af02cbf4e0549b5b0309e2935707926';let _src;

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
