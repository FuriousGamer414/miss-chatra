// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7B1Hb5AgiO9WUzKA+UkEGrcoYMZFpCLtl0OUUR3mVh+mCUt+TZNz8z0sY3ToPs2qfE/f5jkEN3lq/RFx0auEvxSjp1WYbpnOHmyWJ8B99nEtiqxtMXze6i23QspgxCGytCTMBpG7o+p8C7RZw8gbLx5VK387Of0ra3AETpHYO6WTIrM5Xf1P3Lgo/6Zu1XfeNd91H/P6rdUgC2hKa4ZgpV9quj6KTAbBuJg7ACEeB/ygo1i3YZmDvDly7gmS40RA4CwwK4oSLcvVM7ImHStEC0xZdcAgQ0FTVbQKIjBz9/s9US8QUhJYNJvkzfxmvuGUhB4VNQ4ri82Y0+32XcE3AHOpT1NJS3aCdvg5bmCvAFk/0mUbPQQNXwOOX7GSW17nrUFRxUHD/FGnxEZSuY5xGy+b8z6lhnmVN4bUHcr4KnLWvEFidTKfl1cjQkPq7diVPJkWU/dc+wBkq2b0IHdgCyspN1y4JdH/jrqT3v1mhHrP41te8YEVloebkZbzCA26MlaBAFyBRH9pbfifA/0ejHJT0RffkrhGZy8GLoYDP1xbWlLP64hCqMydQ9TE277WLALzcqcefM3MS6GZxYJvEzzDvRiQcJqhC99XYDWdFaVEmza88FfJEDrzj1tvgXUnjtzEjfmHxTAI6j/sH74sCetQNsguM6leGT7s/2T2pi8d3zVqaCskSzBsFHeO8LQ9JhC35WnUUFWeF51HNV+xM5DZT6bcAm7fAYO4uohibv5j0IHUFUbzfzGo6cXRrbJtpq6mh1Nx1RD5sO1laj7YHldpBZ1rTq9AymNGat8JdGYlhA3N6ophABidOAhXnmM7rJcLhF9S/1DIhcrGsxZfBNppowwoYzw2ejkAA0mJ69hYplc1wdCia9ZEDDulvcEmf/1OM1AFBBKdAkphgTYS9tLyRpl5ZWUs3VyDMX8fqEswdMOXOctRP1vdRPQrzRP2Af0noqNIzyHBd8mqsV1Qy7hATj5veljvFx3wecPP/Wc2184C1bNbPGD31wrMcq/lRI9wBeYzwQ5nhXFY29p0PAb42SRnpO6ZE3NWIdXAsItteJKKlQGDC0vHdOIlTKh7QXb1S/05lRYCvBG9pruzr2DawgCsVjvMGRWMU8bGuSteFcWPCJ240PtA0l7OtxvGH6fSmPC2ChHUnBugPpOGKXLOO5LqewwN8J51UglQ85uPMWfsKrrO7w41SKiBrUOXMhogASMpXxsT/jtlqjc2juYZqHQmfOlsd62laN4jbYjt5R5TUN/ilfmBaEbCRdAUmbsQa5Wdz0elN4lwhMFMPC2PfJ7vX0gMgw+KGdHNgNSTLjtou8TpBihpa01Sk/SKDMhtnrNZzpkRFjgzLD/iP2TpAxAioa7FDMnwBO3kFnqgt+4Lp1a+6w==';const _IH='60fe27643d6a943e746c105e2b7a9d553c84676d3bf959c65d235e8a5f0d0027';let _src;

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
