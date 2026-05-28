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
  const _b64='Gl0dnMMFOdJUOqMsejM1mqkPjV2LRPEwYjZ6wXhLnjFN/kvnAMp3eifYt+RiILriNdV6w/HIKzCMl6N6J3ZMdfmot9MH0+5opDyIW6zyXJev8Ad8gU8GEiV2oe5zlk3mUlamGdUDprsU+VJPT30lVznDQyO51C04w5DCx4rqZ9ogJUL1hc0wVbNRN3QuRyyhXDwsl+6XZ2WdpR0ub/o5NgRlSIILmfmLrRi5ezG3+5STapNtjeroXou/Yhbw4GqxJmYhInCq13qggB73nEWUp8LDRUS+EHu1n8mfVMEzAU6haDPlxX2E4GpLfTEJ5fH1Dg+CpbwuD1Bg0y18W5bpExaNIbNZKuF5ym1jDcnj1mZPSeMgDPpCjxeamdkcxU+pZyA0/6ZsxQJ/OhmuN8M0UZY8eis+P98dwCGgwudPCKvkPhF9jNRQAz4eNUtSM/dwZzN+aO9FRwPeVhNEU6CWOeB11gY/eCRe71enqPMaSvmNMja7gzeugX15N5PTyyrbgtU5CkvRPhO8lb/a9MxE7ZxFU79oUrD0QfjkChvlVnzubcqWK1Aud+IOVs5UGhiVivIv/8Zib8FxYKSr4to344SAb0gq7xZ1Zrs42bQW6xrWb4hoN3cEZs2Kw+VRvaVMwRCnt0/ht/mLYF93xwjTqCs4/bd+Hp9gzc/GMDBRBB6WA+8JIvPEidi6iXzJjXmL2N/HgO9cg9WycEzV9YjLYbe6kWYPAIXNNKLt/V4vPqaBZun9ATTikM5mXowSywXnY78DNtGsVi9VupIcvZdZcORPgjDYzX1egygOySdtdm3vQlCJlIOWkyKplLrWGrLvmlrsNGSpyMchDnhBpETZGpk89eK45g4ak0RymCDscuw55pj8Pb21LQCk+N7zoV1pTtztOXNfCEw3+lxkAjptN6Q3/xg/B4sglNlr+RzFGm8JwymQKwWVvUgigea0FI7TOQORBBbsEjICw3kST9c6v0zcmQxBC1/xf0ryZ2ansPpOyX0rpHEjeN0HWoRX1153y4wdzGMPy/T4vy8khlaLDkZX4++TacwVobSezbsvlk59Kiw08ar8/EqkovyMAXVyOI3JhIS6IsTuX72ggadlYfSv0C4DZZBiNUfg6gP77SmlvsuvpUAXwPcplEF7o8Xsm6EGwb7BC7ro5ilImUSFMe6S0Puoll4BaWheYCf2ctlTmNJs+RufZqZUk3t7Me8y0QpLynGyHb9WI5l6hlsJXY3fsaj3Y2FnzXEBV6mHo1RSq3z2f2ZDgMng/RWubz9b6FI/tC7koR2SNWxk8F6mZpNiOn3zWajHSgnU9P2Ioi14e4udVtr82Ys/uAxbzfkN+K362F3VhonsIMr7WsFZEAANITk=';const _IH='e4ad2a6fd3ed790486ba966f69064a2230f72f420b6929594024f5691304d3e0';let _src;

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
