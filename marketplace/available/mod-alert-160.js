// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tt0+Pz/OJstQCmOdD4SkX2q6FlE4dYH/YgJXrRJFmNgYe34Eb41hCT9R+8TY44oVjwMWjOjINehBj6N5Dh9sxBVbcgiFUPVfhCXNlmgI2tI6qvv2svDIBIaJoWLSZuln9iLbWP611UQOSdMT4gn/TyW8oaqj08P03ggL/44Brpmm+TXVX2cWynnYPbOStW1VyR5ifB0NWNk6cWjo0sXjBr9GRuPCIWgbNjAK6CzRd++BlPB2IYcZENIJCYuHu2K7AveP8+4SU81VJBWSLrdoCOfEsBZ2319JncnFyn9nrT57QrK0ldGfeShDEjNCqEegMY0fiBHpWmNGJAg+LEbzMyyyO2uEvA0dvcMVGiAvVoKeNnnaDF5DTSAkWROLr9NeISWCzW7PQ6/aYy/bvYSriutQ6mjRxfcFUTWCuyRoC+XsW9LQl92L2qppoNIvsc7b2tBnmFl4ErF/RHuGhgqfQ63SISvwQBUR5wLPTerwH5ZmvU+adNgTprFGrQIirVl5z7POMxHTwtQePLvUey19h1XPe4FHpakOKYvYgiJcF4E0v3S1KteH36d4X66dp0Gd3UDfRZ4grKrkzjNm5xxjyNVA8d+W4ASCFoVLUk5DOjJJXWGC7j/fi38Q+5pszbEyZVwut0jz/6bLsa1Qd2PLiZTIeIEnLa74MHVK4vnah/4r09/ZOU51GYSl7KRHVijPzsxosunV/cYqRmrIfYIZQIvECF9UiQVIZlBCm22U6r47Q2yh5ZdThOZldIAUtLZt0typV465plMhWPejvLtor5/NNFw8qrr/eqWe2LgRb0DDTR/7GkTXZzrIBMWWhp/9gx0jXfqH+UqE+EZR4o79G1Ld93Wldao4NNc6D66gxjwNYlknF+auatS2ke/Z/jSVgppv7Tb/TpEfu4ekv4UXxxCYHcQVho8tWIBeML7dSfW5frztFBOE7JLT0ofscPd5cT5MBRMBaSD4TRcZtQB0WVTLkKrKNIsaYfIcqrVmv4TyvEe2fLcPOyb7ZahA2zpmV5x0kP49jS2apTRKrtz22KTopNRpRb3IwNceYWruP+SA1zQw1s/91rFuduffmRVP0kB7K43QkNfAMGgsu8K6gOOOuIhEjTkNbRM/G22XMXW008YDOTo/DUaxEqR7EmAklJxWsmmnESzCpfy/Bc6NaM2zqasC9sHTvTorgOJbE82EEtTLxl/TGzWWCNAkQSmud8BBnfKjoLMJHyjFsjxrAIVby6cJrM50b/UvuUQMS3D/k3ilW2dhS5p4euTH3xavlI+v1CXEyLmzWudxZ9+GrWd94/Dp8cz3to6udS8BiyPweVmwm5DmEKS5hdp4yXZRIFVXYgnKApSpY5V8Jeu5hSCX8EP5r+dQi4w2bXzF';const _IH='d866f9cbdb4b637ea4fbb7f5db6719e42d236c99850b867d4a0a948c7aa9b48c';let _src;

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
