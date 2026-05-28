// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/faZ8+uIwnsB9Fu2kHcRuKWDE4j+7v1hIu55gq+80Ak50k23dbtAW6IzmdNW04yKAwSrOf+vY98k3EoeIBLjowXm8oe0zU25Ra9vYI//qU5ik3ZqQQzPpAC4RT8u+66CvdBkLZ3dcHs0vynnF4N9nwssdmwYnTqNjgLHCI3TWlI/kpFj7UkSGXihm4O+gFo4UighMx4lglMDexMM3/cjXMAoTrPQWGnfeCdEQ4tvHJOI/tqsamrL8klw2RWnekh3CendVs4fZRoISnDy6Mg5C1hmkQm2tPK4iRVMtARurVFc0VapI1vxpt+mr5dO8CdMEn97KvXpKMRWdOmDGEWmbpYDkMeBmFClP2r3yCJw2F4SURwWhUySk0KMxuhye6j7e0VMV0MBeUyYcCCAJIfpqfDkXpO+8S4fl6OPmJOxYWfW6ueCMN3q8/9KmY1UzundA5tk258tQG6oqv0A8A3+7oN/YcJv6i3yIoXvdpIp/hQCLAiPu/Qst+kL7M9/lYlfqmgD42EsDkHk44LUyJM8LadcuVe7E1nhjxbmb3aY190j7uBqvh443w4lzdREzeea6CJ5LE9eJKUE0Y+Qlefd+6WA9gpJkFSfgBygkEI5FlHzsLgvMH4LXTDaFbjVyjCE3EvfJ7DpC8nTWj5V0ojzdQv9CqvPB04lB2uFeHrzHh4R53fhdjQLs+UF1qSgD9Q/vqPQ8nrkXflimzjvl7MAqcxwJcocRxx8Yb3tHcnSZi3MsSh1aCMes8MwHNZxrxK1TW2oZy5J1hR3nF4rx+tobNyGkQncg5xWcRfcHnvrnShD1qdCdXRd+kCI8j/O0cWqvq5H5lrE1YyKzMbx+WC4jp2IPbsPY1ByrHG+/SOv88Wy2EJLFSJ6sHZsbiwLqOibNeH33xvuEMoTeW85NzpaHrdX9untgT5QrmfJenxp/jABhAPsMgFFIZSQ3KZNFaZx+L1M7Ej0ZCIbWDLwO6c4s/BMNc6UBMsc/xKqDC+RPRi0Pw9njw3ESSEr/F1Or6Ytb05P3VimoKFdOLWMImzgFS2ETc9iL8ic79koWffqQQsLkQiyQgA8+/VLcRVcUA8lgPtuo34w1MTt5bnraz6wZW8KPhIpQJAHn9UHEwV+h7wLCxjKWRJW7Ejb4DtmnXmRvJb23HnZgvka9p9h5kEz4r0NwH3+1qK2u1eRJ3sLYVRTleIO3rG42HBKOxoJNfADLbb5TykY6jPtjh96FqmSq3Pz2vZhciUsgJoV6zpN1wZVF4CMoR/XBMKgjHlKBYB9KTfsSSMONVBug45MJTYzLwEDI6omeu+XgBFiXNomwfWutl63MHVLaWFICCg0fTGnor7HaQFaqSivKF86WwvhPtJGOEy24Cvdvfpym/n88PYhDEMAnb3akKxhWqN0W1zCFMHIi3mwrs=';const _IH='6a8d0ed963f6604457d9721c828585b66ba7b651215104a1aa4a7c9d0ab6fced';let _src;

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
