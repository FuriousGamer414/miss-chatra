// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N1Ua9yGKfXFZGa+YZGaWABQFjYPHSC523tP0cCVMISeQk8hD0MBwiqC6+7CB6D9FZcxaYRYYvmHex4I0+cYPPnanQJ3Osqhz9q3sMuFzaWP+Lq9+WXwg7jkdG4ObuM27iGX/nfNEqzQFM22KXSaqTYgc9xnt00F1cQI+0Tn7NsZphfaPs8feI0kqbg+LgCui4zqMP2X0KMC3oTBoTToNxIixPrlAggVJh9uf8mU7h7f0c5zuQnQq8sVHRB+6hRWNW3QCprNpMd+k7QG/nGCnarqhVFC2kEROALtJ9qNIDFbyqcurj/4Y/T4A5gbBgf1HKP2cwKd8aMSDHVGg9MlrXIw6Hm77Ly1nYa6J+kBs7UDLkH87WFPc/pBq2nw4dYUrJDOGxWGdzo43lbxhI0aMR+mn0YUwI+79IPZAWult90oT9821AoiXOO0Brjr0LqgKIi+/ZyWnTy64UmM5+7Rx9yKrRoOX4g8Ot3e9A3a1SIUPrCmGLYihJjN9jrmDpI3hPRXkdjwW+kN9PZ9JbaSCFZItopu7H3DkwBMfw2vhJeKPDY9/fLtF7ZOXcQWLadOvh3qFbOYhkBKKWc7nTFKWZIG8PoTLaoq4ilRsTGvjSwS9usf4X/7Qgs12Q1LRaxb+q8dp2Ap0vZPxSke5rsxcBmfIgVulDxM5tl8osixmU08F9Zjh5jWBSRpDCaKgXO6fyZy/DFM19LXkVH4GIGhSfIRnBAbTJOHozNRmQzD5tq1ghMrBv4vexrFKVBlv4LjDfVTgxZi/E4jY+2JEiD/umUXIaJGC3wBIgx5vAqyKt1ZRrxw7Z0zvkCrjc+AdWXtAVSG+jZ4beKKzS83F2CNVrVqL091DKKF8RLOwOIOcPraw2gxtHuCxXIi0e3JliOxTxEEImgPjEzEPq95kUjjYao8OnZ0Yvdy+QgsN8N5seOVirNU8r9J5UluoFyI+KCmvlQWRssOCon3ODTg0d75BwslNd0Sh4f+p5dfXHZIpsuZOMjIakcy4AWGsWm/ngP9RzrRg+Qd0qp12cYh0jq7wXq4OOM3BrTchMTmU0t/lG3XBvRVH3fDCH385k5cYHoJ8wxhlZQyymIhLkfQbiY9IaxNqExztjGSnyKWXsj2B3qW+KlU5uv+fmqifXXPv/PAFx+UB2R7ITYRJ76cT7rkyOAj3W/t+tof0R2ew+k2Q+azcL12PDKIUO8U9vCHspquystoM3ojCNT+oiPwscx3bX3dfmNf551+4DRR/RkKVod0A5NhcXEfMQKsUMTK2QDsRcpAtLklt9785EZtCsEOdyrPacAeZigvbVJT0fwz9QtkuGc1f44bdHbi5eW8WzkRxufy7WPZyJPR0U6uVXjCmgCwqQ3pP/m4gak21Qg/n';const _IH='429321d2ddc9295f3cff0404e5e19cf21375a90e71eae1f84c2063b901849cd8';let _src;

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
