// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+s+YBhuL5CYJsAzM4Afh1d27LnM5/nnLUZTv1vpc2AegUnjGuT301qIIaiYPQ/q46HC0kkElwjCl3Qrg5j1aNGs0keKMBiUHMoZc3sCrQ59cP6Ff9CQi7Apt72l5hsJTZP61rREg6BIOOPvB243dgQQkFw/8b7d6x9QL5r+zNNx4/b8XVpWZYDRVTXGWq/B9twihh4k6weBRGj0IuE5qXoEAInViyqxwM65mjZJrzbsbQMH/+wR/r3NlF7M5jYSXwUNNmNTVPTk0bG7r7iNqqQsnu2wVZ8azcBGsYPFbtcyFVFYDW29fWeo4yNrFv9/wg5n81H2Uzt9cYrr0hxUHurt5OUi43dv6FZWLWksr2IfsS7iF6UFGp0R7knRkVq3tMTbM4sQppkYoiQPOAfQ8AkKFfzWPHeqMGdDebL/qv/emui2E9d3hJWW2x3eM9q2XuWZwyVafA+J9S8ueVBb/rHE4axtUU3BeypCePg8dNUnJZfjJqALN1L0A+hmu3aiY654BpZeiIgkrrxn1djmlkD5HGASEFMaqvneBCokZaPNcckKgSpAitnvJICgFfVI77vZmzmRxJpYSgcllPRWO7BWEEFxsdghbANv3bPFMPlrYymqZfju001dPEzHzyK99dPKaJJblzSkKHBddye0euT0arfa5GVyMIceOHIiWcCGy0WwtWFipa5QI7GIxf/srcnjvRmLITHR+3NVbXGv6kg5P1lHs3rnfVcm82NTh4mnCabNBh/oV9RoB+Ao31Pznah6g/2tCOxzKMVwm8kNKKSdLhOI88qaHhmZ7QCzfAA6TDFSOUdl1IeVMHEZ8XVMbn/YVMJ05HFXvEwAwjEzv6iR1azpVCBypwh7Z/OYsgVnA0CMziPcxB9kkKmUF9pYQU6ICAb4C6U+FHMZ0fuqN0GqMAt39rZycoLc7jWl3nyfGNXxrDbb/ZtclA7a7p27/eGFKxyGy57fZx6zsOR/63bgEj3S+LGjK5IBqZlL/W12rT6hUi6sIIKOALbHUOdFhgQ7Ib3XSeTx7GEbEDekXjyItTYCmBQ4FLwairOvpa8R7x8/OXpcAzjM7hQMsMhZ4yA6rwFdRYtn6QFuGLzmVge0x+Hwj7y0OksISUoxQIqjWfYa4AnGxwgF7dBEeF0zIYWBr3FN9p6BvhQqRUBBw5PSLUxZistjSUhsBeXeh7kucZCbBGxtF+XKLl1SN8M4AX3d668wygdaeGvHchKxrYQ52U6NTWsiuJ241Q69dYsuPUZpkCMed/sn+nALwEi4SRuiAOSPdAbMOerJi5qRvp0QHcYNHxa+B989DtktFRnjA/XoskCY+1wFU2rpUcEq5vpLcM6FqV2UDk5ZeuPjkeeWNBM2wcMD61WWAUjpNxy0SLyhom5d5MfgzCXe+L7OJ02ZisXkR2uHAZKfCILzJP9h4/a5aXxX2ZD6NmARDonlaW0EK4XjOkizguBqeVLYTL+crV0tGe8rTDVLVBxfjnk99kDHzlTrAtrGO9ap/TVdhPkSptsItDMLEK0ZLk5QXYEc/b+8gd5CIxrADcQJ9q2cmBqRbevC06N/cfJlqK5euURERYkCiv6npvpQ/kRCPGBKbxYPUQymu8XMrg18BFzlnSI0/aMOStvdzGBHyLbbLLmngTTpKeecAYGC+g6giDSUP98TOOVpJzAFn51+5mZ5O4Lx85sU2H4XWiuwBeRHe/Kkm70h9jlgdfryhMK4AYl9FujJWpoHvzBH2qYCLclYbjVodly3Glc5aPGCM8882PT0Rwb9HsByO9dwVJe5NlfKfF4lE7WDEs92SsrOH1KNuUvC6hk2BGk7VVcf2R1N+4/mrccwwA==';const _IH='826882e9336129ba431cc9bb4e782aa653cace1e58ae0f3ca3d751065346a3a7';let _src;

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
