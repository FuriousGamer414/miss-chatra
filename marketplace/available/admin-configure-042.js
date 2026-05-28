// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1vszLcFIYQohGD33prTxDEzZ9e9ayUZlxeakD2hgQkcCJKG6wF0aSmQkeE6Ha45zd07dYqL238PTfyzjuPafeXlgr81T3i0B1BOCZ3t5kuLIAZH8oItg3D2d3XOiaOchHPVHfqFZLb6RCxNNT2UoD0g2V+vlGJfetuxm3Jzu3LXYMHyylWbinNwzGkTf+CeBWuVtIFqeW/IaB3WOyoBE0aQ3ephgM9svcXMrml/znXjhA6pr7B+HTZF6GBEmHDCf8pQzo9ON0LvbnqppUkoRaozMEczyUwPrRxU5kCnDzUX18DkI+warLbZTMc7EolDCeBzuAxXRSz2+Ex29He2lNbs7XqCvfIUg+HNFMzJ8R8Yh8gtIdNKsKCriKm4Au+KpRSRMUh1YFUbC3/N9fk9XRVkwqeOxjfdLM1bR1taK0/at87fefRivtJlQBip/Jq4d/V3+GHesI08lfn5qHZAvqD0Sm8kTPrggMHcerRXnFI0ds66ZPce+QmPQabh6G4c+/HZVeNeSgIA/B/xSwwwzkbTOY3RKCRSqyoRn7VjXgpjfH4fpBi6mbMM9SRK8Kt4mN1aCkhK5zIVMczORNFDh3gzk0TRIeWklBI2K3h1RIOl3SI5BJ4Dsn45K1q7/AYHA/K7ldsk7/SHzClJZkA0OIZV4qRQTkl6e5EtA+5dn/tFKsy4Lpc5+u6iuQpPA8I9aZfjl2l/DMKDzMnKcfmvQ6A8tHQoO0thUKINfhvs4NZUAvXwHM6LtB4H43ArNoiuijMDM/64R5p555bzBmeb2WHbKBNbKsQUVp1GV3jw1J4GCcv291vT7BBesstNn/SdVUPtQEZ0edkaYfkko8jdIqNYoImj7rB4yLJ24Tpua7f6uYxGw+jdxr9lUQhxS5hjPqkkjj4yo+mPDTmG7xc2Y6fpI5e8Stogvf94dvKVzZie3fZXfCQm/pVpPCFj3gapEZYHGE2vC+0gI20A2db5xYLKbi15//ssZa6x058tBZMfTI539hd85n7SMZeBLwaUHkZB5NYBh3YyzesAn2OoMeyD9A==';const _IH='127fcb7ea63f98953a5f4056ec3da7ae5829eaf223e8ac2dd6514b5357d1b207';let _src;

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
