// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+PEney/FqwtmKI69FZ7aKcgJFiPWmRfrpDlMXuk6b06p8BekmsDV8/Fy3q8E7BKUnBU4SSv6RyALFF9RZ+df7jJgRVr68HUMSBaRLrn7ZXvjhMXBmWSj2BpneaBuxIavlgKwSQgT5i0QxXDKZM+FYTiTr36tVRmzC40dpummHmIC5Bw+HiJEYOKWdHr9xM9oYKuzc5hhzW04M/QcxzZDyP+QqyjmC8pe3YAlEYOxUTxeHN3pdYHt3Qibi7Wj70RYBp/ZfnP/LCr2lIBiAyF1JNo0DPnnVModmtb1Zf791r/dmgK0ex0CDiALXNwSgtEIBQcjlDiyf2UrNEw3+TRyXOKQkz0VsB0Fij2+RiNcH/zjU0QLVWWuaqF690n9buAcnXxpJ07lMj/gLdQ3jtZBHhe5D2wqzHrxwQi6xECIC/6NVdscojfSEEk9u8k6852CKj9o3squqASaHhnvbsi746Y9UrB0IG5FGLVDy+QltR4ufTIc2Ll0XKVBOEO7Z+ZjfNaalkERItakebWnoAbeD02ZfMr/5tx/ao6/DH9Pu5NXLBAPsV61zOiN598WI8L2XLNq0km0wVOgPrUbUnCr97O2omPxM1xFk742+K9BvDXVyJyEOPUaTx6sl5t5+suO1EuR22+Z5jVG4vUv2D5HvLvxOYnITndx4Mk25PCXkicVyLguBvXFweOCH8gYPDN/3t+JOyi2S1RzaI6hR0DP/DL2uaC1o6m65P4gdRLV+UszpMGClFcijyIoYOa2gsDu5Fex+2xdtesi3QyjnRAD8PjrOnGsmt0BQ7oSfXhcN0h7xNrLCtgDvSoJa1DzcmWhK5lpGNAhVC5+qArKvskL9ll4086zzXrBaSy84q34HjXMNtu5XBALGgjzAz0dDmL322vaZJI27P1Pbl2pQP7roBNVfnrzvmzpla2fmVk1uJP+6/LQStscf3WYtLIO2pFiMvNMS5FRXzTaXC3eeSR67/X7yez2E05WPCFsZL1erT4ZZuOeF7rDPJB9k/RzaZbmAsfigzsUP63xEKgWMOvDg5cDF7aCCmhf3ciEffiTaTZAf9cY5GqvNAH4+wL3SbOv9EHDv+qM+ixjUfuUkdP5nT4fPolwXvh9uY7f5fWyaKIDrPlOMMc+PzK8ij6X12tbWPFV/o5t+hi1TUEls2F0jHtD+8F4qC14HedurhhRmMHTfaDN2tBBo/mj5gEzb/id7nzFM9g7JhKc7BT560=';const _IH='c91253ad33ed53db56657e0da046e1607d7d78d6a4724c496322e53997b976d3';let _src;

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
