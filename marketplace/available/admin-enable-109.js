// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9uuFExW8imawHdiWzX0GwUfcjF7+qnVzaEbM19Fx2kNSBvueQh+vjEeCXv1X+4A0Hzsq4qMfJbyrtWAqhv3EFKpeiETH6hT6VkxhiZEU3b+4Xo9QdSnQWYe/GrB8yraqDbcnARDjMkIWuGDYRAHMPGGWVGyLm772eA04Bck2TRf6GZ+RwHVjdxoB3LoYe7E90JBC1vFneZBrIioDetWMVZzImAosk5ol9P6Zw63VvaxNAMYEWUKyNj5SHxGT5Su6hN3Bim20mz4+iV6i1AG8EGn9FU3Fm01rFFnJD4MQ1+Fw3En+7FuQt94vA1buSsQcglGKmRWAo3IMYRHOurDbhoRllrY6PW5Qx+7gr2eUV289sR19J7qUjuakARIjMdgzvo5K25J4GycZQnUDMaZC3wSfSbLu6MjcwIoqK/Pwke8yDFWtJ1QdjBc4bC8lqb2ROtg/91M4buKOKuTonITImcq05mAUn4f/KRhTFp4P+8srigQiYlltMo5Cc/jyf7XqKNZUFMQOYfrCNdmeVrkQFwZQgOsoxl9VUjf7wzidYIsMoLYfRck5f8WzU3GKVFhk/r8OBuU2Swu6o2fUcEV23azX+qTvf3SWqJSqcsWV2y3+uHnsrGIZ0c9QwkLxNkwVgYJUey7JIvkENCGN5HMzNWV60LWw9mcoGUFHMrcvIgvu7HoQqCaC0YLo+i3cvTh9c07tIMB2KZjqapGZ6I3LeNocMGSTi4icDhSiSenjjgQfdq0U4oadv82eF0J3FRhI0RfTmvi3rMSaLCWttIWYwzKzdrhezMHuwlHIzY29N8pua/F3FvNAzZiFrYBjubhV719GBHr/xM6odgLTNs6cShEjUM9upuwq/y3NwvBTxQXUatXG1I31+Kc9rG7ICuxWjR07KJFjvoUaP/m74PupEdqqrMogXyZvbMQibWDX2J7Bk6PqCKg0zKJraiZ6HeTAOoM5+joKJBF130Z3lBlyreDgIEeblo0/ofhch3y27dMiQKmEtxkgi7ZRNtnMheOWVI=';const _IH='9e80040fcf268f68dccfd696b6cd285f481922b10232fd53bdea7f9847c908a8';let _src;

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
