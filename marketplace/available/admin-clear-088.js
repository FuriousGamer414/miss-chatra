// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8HZEKalOnmM/jXtaBBje4bHITknCSZb8oE11c3+5pSYqy8j0hDv4fldJ2b3xRSjZxPm0st8VXad26I5auQbOd6cLaitc5ELy4NsvfMagzsdD3d6rnzMWORg4L9HKxQyaYxZv3yAGPic/RDjKAyzfUi7jNKbUPZgO9N6HO3jQ1okVZd/wGIep4Yn8shXH3DgK2qghcvjgWeekXIYOsps8hH59I/6AgkH4OI+NNVeXlxP7W6Vq0MANkskEpH8ZBsDUstDGnOOfILM8xDl6vr2RtxZ0OeWr0XHyaMgjXCKkcI/WyAjfYg21oAvRYw4o/P1KzGPXlXeU+DbIiuBteX3T4SObmCL4k1Qp4nANhrXp+X/IvocvW+EdS9An5XSzLymt9rgEwbqqwlb4fyjSx+CCe5r1tK9c5jmBeHJvZuFi3mWbfDVfzrLj/3+o15xvqHMk4MwZWRvAqHVIuRtQpSuh0KFHF/fj/YNGJrIdAGb/GMpD9E5eaourPDNPtG1gAs8xfGMfAZBV9247eWjunot5bilGNsPB/hOQ7kwcxi73mZOJZ8KUSmYvhRdv2o8HjRKZD7nU2HK4952Z1fTRKkAgsrR6Eb1QVgcbO2vEHJ3TacuJOY3caSvZm0HOzazGJm8btygOfpELmSMPPP8RrbLYZGUxjdiqbPe6OKcR/IxdL7RINws4SC0WH5oMvp6vASAFyMADomJ8xx3h4xNQqsXSNBwP/l/btzxVsgnmr2rczrXKMu2Yg8f6k7zBVO1R5iQZUetM6OAF2bZE0gXUYsHRIhtY02Vph3LLR2SCBD6FbZHFhlf5g0k83TqdFwbJxg9nNFovPI4DwADqZqbURgGonEQL9nh1e96Yal8saGJHlN5C73XcdlgbkuGc3LMZKihOIevS1Erjvg0OELfXzIJ2Oh2TVYsYVF+wdyxH7T7xAlPMZR/1e7eSmS55ObYKrG1PjyCsFApe4IIPL3GGAsI3V7gencWjZfocdCe3YudKKZzZ/ZV1EbX';const _IH='94e5b3023976bc0c674936b08ae8d1837c3b9447f247fa437611419208dc4947';let _src;

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
