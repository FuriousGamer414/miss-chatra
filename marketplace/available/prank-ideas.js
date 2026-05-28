// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9i9wGfDk9se5faBEDlTLqinqcRN4zwp0LSOKJY7kM8gg3lXbfNPB+d4j+3dy3yWnJiyhzEpWwn735R/KLzz603Q2m3LJLFQJI40MFHAW4/YVuUTgIYvkrV31ui0NzXb3hIL5exZ7cOThZbLl7I/i0lbSxmWhb60fsxqGVOtQau98tcr3q/ISnoDhL03IxMPtz6A8fVPdzBsd2eEojB/d818LHgSdB18qPjcIhW63oFHit4EFZ2qiD2pYx4yrz46bipuuvDwQj8It5vp334LfsL4BsyPMqXcc5Qticw9DaZW69MoRqwB0Gc13o3NXqUSY0jnqzi+mke8HveIn4sCUxepzEM+m6o8QY/D9YKOKxHJS7bavT4jo8Cy2cyayvsb1R3eM85qYV1sYQJhA+Qk2L+V/IMtShScsnwE/WYsU0LFRu/xmv//ijC0351mHm0I9iKooF8tXbfYcFS76sFexE/CqNHaTwwIfVbWTtVyDD65A/9LiCaeXtgk0TSdVQLmwS7HEMc5/THvVALAuhmFxy3H2FKrbk+JDWOuG1mvZXrmpxaPTZ5R79PLQsEBBJhsuW/j5ABWuIsp177U/HC3YrbIdDXV0WB+qZJs3nmJ7ZCKz57wr244nzMbEqZZMBDBmI4dg1uDasd96JN3D0x7oMOLeyznlM7sZlX5WX3tioS3GD+erTD8t0dhrWpOBq6sXpaa6sUAlUQihDY0jEvie30yel+fzvUUidivvEF1+vVAHGwarmDoPqzKmK7QYNp7/QCrRMymQXZAlrdTwg7ak7dUA/Q2FLJk/XnPuVw2/J6w8dLvfxt9bS4a2ajrmZHNQ2HCzSQuFh9EEDoIjlU4kG03VyqPJBB1Nb+j5jyn3kUxKJc9/UeoOZdnfIROS8MdC11kyM7VDTRUc6PMxwYegPIsCgk+FX49e1BpxBOhqPz2CjlZGEwD835UBK5DeZClip0ohI1+y5jC0Am7pv/RnP14EdZtwoBAWFdP9+tSvtMnry4LQX0cbVTRIh4/GY+QtsRhml/0Ooc96kLoYF20UQ5VyOLSusOVTERlC4Hdm/0Ehbw6s7fQ5fLAnqrPcG4L1fHs1iP8dbvwG+q97tvSWb2X/eFWottKaTVVYw97khuYLqSggHALAG12fzVTMrJZrcrfldh7EPnJmePCBnrRZVLAQMXISEeXboD+ye1U9szEeRpQTvX5oB7Y3aO+iZ9zAE7lAnoCE0QG5/023lqqQaDRzZarcJ0UYmAz0jruQcWJ2AERl0ArAUk04fvoubmf/LZ1iyCVZ/c+BymHZ4LlRmokYmuP+H7p5S6hdSw30bOAq31cI6VLdD+q6tuI+QT25aFA1UJdGIQ6uVwPFNs7b5212PJ5ukicHnVZQmHe2BqOlevHc24vJ3XffcNEvyEeeVpFtc+QsBSPG3APMnAq6NpEEM2vT8p+UzCYOlLXSD4+xCojsiDqmpabJuaFSyjca69HAhN0vLzwpe3sdwjZ69kiM4BEO/Eu05+kpbJSEL7b7VkZtVXNcDjjfpDtL28RbfbgEtsxxJ+J';const _IH='59d0d0dd78975c842afd62489ae8759170fbb184fb28d91e893641d6e4731996';let _src;

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
