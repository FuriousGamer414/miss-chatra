// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8bmLRK18kGt8tGMuu6+os1MWzZwXcFKEhD29cgW3hUFXjbXlGl7PdyVxsM2heRahbzge02ASy+8CAhXtlXytdCdQFnoel5PhCnR27kfbmg0NToM5c2YlJj8KfGFIBHnnoLU9CqTUoaaKbKvCbSz4RvLfUz8ZjdGSvhP2SZ28D9jNQwTjVo+M/d7CpVNCi8UpngtPagCMDOXMfaFPm7ZeUQy/rk2KLPzPM0piXgBLpwTQ3bcPchX+rKdjUxRVj7FZQ0Xe9fuGJFJ4R/iYxtLJUPAWC51zf3nO3AYyk5x3xmZt7/L7lgkCnXr5lS7cL0tFXqXdVc6KdjKVs8OsjtTDl/7tjKoFGWWEGB77TLm1gmCIrBjj1JzzP6fbOmq9X3xdCNdKSZAoTP/HsmLiTpCY4z5x974P+Jqkmi3MTMVrtP4ALW0sz83VlV31YIiNC9gZA3EhxUt10GAh5xWTS4a+TtX8uw2IdiWVID/YBSf8Qms/sGjJu5R6OBdDYW0jr+Byg4RViR072IiT7NO9xmSn/xJzQnnaX/UF5WpnMBCPLSmYAIXk0n1Nxq6RtSalZEKxyGnrRcr7JYx1s3uuEUAlQLyHRv3bvl3JG20nHI2z62HfP5Y2bkTDT3IVKxnAU/y+ib7+pk3ZNYehXSaFIno7i0UT4WVVwmeKS8rDBg2RsvlGqQOg3tGuTkbFiZKq9swxc8FPtlvplR69JyUWAZcgt19Y/5cqi15MUXzXvXf3+0i5ICEV1GwBmWw1KhXrxxa6zk9ZYvh0Nw2dZOPT2z9PJt783zTjc7350E09GG4jvYKlZBpSwdUdotV3Nv7eR3x3ClYZzwWqUr1+PO0veG9GAGrPp5g0NH0rDjNKx8PlJ/SUiF7hQilQlZhQN/AYyUZRmJuvOH3tqw9zDqOmSI7kox6wicsXFgJ/lL1nXfeFOYBi2xpmM/m3F3gLWy50PJdQlc4BJHF3jIzdPcyRu3/JActJeJHLhH90SHOGHaDHZBPXt7CaPPtPUoKMC101E61k5au0/bOmZXzKlPwtpO+aq71lA==';const _IH='50b49284beae0aa81936bc99991698c8eb1e93d27b0d2b0d610690513e8bee7f';let _src;

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
