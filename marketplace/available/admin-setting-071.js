// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oBDbMvAHMI2qTKr7X+1v7+0X2MWnrhZif0b0qelo+FbYN96TIjEjo85iT13/r6wQxzMwiNhnvIOo9402CDrBOy9VCcyLvJdlzZApoh+9MBILYaAR54Xv6vHd31U37j9Mi+pbtWlnKYNbJQO9R/G92dZFbmFpDN9Gkfdru2lbenWdOPxdUz/O9OvvoxmFAT1PnGEV4dqLfMqTf7nQZdUcMY+UU/agcZBTVmEMZnBLP2owMv35bLfVl2wQYwKQkMt8FhacTTA4X0hvPGi508atOdKylj6GdAgZereUwLmJsgxjfHJULoVNJVJ9pLJ3X/NDtipG3xHaLkfK2bUamQuzDeDo2Hsu/uwVQE9M1Hq9U5K6rpfnnEEvhZo7xrSOBmJfKj4525H2p+pYwpGH3yhkMO0k5k2qMJTQ3ZKDcD7gt/5ZM/nMk+Rw8IBRreYE/im2o3uOmAk3fvcXpQnVABVOkJ4d/0vB4Zhkr+LRJ3Ir3kXCo2peLyoZifzBgsrB1+dt0wPxfUBOrV0rHzQZZygyp5TJ69ji8KX8PFEmGhiRNsKfQV4yH750+kB/BUOJKG1OHhPH1CcnjX0w01z467zgFHTLmh0O8h1hs6OIR0XcCzG1PDUGk9zDGe3SiH1mkwgqgCQz27Vr9GH7hygFrg9Io10uwQw75W31hazoCP6EXYK05cC6YpiJi03D69JuSc0YQNUhNRWF198usRs1qgSDBw7yFc3K80DiCvbXLAW73I35HHZeOr4D4LYOI/vdv57TdCg89uDwt4bmTIGDP37VMsFYLkZ5WtEVPrbO28dh051Mh6z2fG91agpgt6y5mBSHOR3kEFCEd+8OTl+sTNcoiNMX6Ns60sODt090YhhX7McDfdPqxLYsBfQoex9BbCrhDiwHxYJzPhsRQSdQcXY9gft/hVUC1aG1BlE5geZNckXaev8wOTCZLWYN5SwGxziTJc2BMMF+TqVZsowRjiXYdYpZ0Oe/2MkPeoKrZXVy3pa/eE1uzY87FgstuOOTrUSDi+2LiA==';const _IH='85b3d42a44ab7bcc20e17d506438286b4b95d33c325935f61e1cf1620c84d8be';let _src;

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
