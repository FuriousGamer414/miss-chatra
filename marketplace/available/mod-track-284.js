// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3x5Z+RpTx3VixJhZU3pry6hEJMlhoJF+e1jkJUx/3zOoKJrKM+OSx6f8gQOc403ZNcCL1rksWbeMwCtK2/onEGyObmV8wjtseHwnBSRf/pzUyd2rAQ+sth7mMj2aNeEFnTzdfZBuENC6sd6VzmsKwNHwjJs1hpHtECbzkHSx3vzxZAqtnKFE6SY1Z2x/vcjw4WSabdYKw67VZq7LANn5N5FIvLpjTOB6id3CgXyg3vwg1Prb/iSjp7EljV+j0e4Dfm1wTvpqkCWhG7LX0x20wOoqVcY04k63TOnlUUrpRVVNAWqMbYNgjzSf8h2w4hpvBkCBk1JOUpeggZpfMDFsD2dTdzHn+D5qU9yrYbThd8dFVxX9QzwAd4Qxl+dvqJDe2GdywSKUzrVmZW8fnX/V25LxeTxG5Wvf/Y+aFVO+Qg1w/ecNQaLOBGWA4dIFj6YwavJV9ZkA1t2ALGoTzNsJai7evUM4b28JnOVQESZU51vkGqCVKQuuU6gmzgSSUPtMX8MMV/EtNc7IOIqIfwrLDiXNLRbgcczGkE3dCa5JVUv3Dog0ocbDLeJ3xMh0WaLoq75J8OVavonujSwcbswewxWuvXcCVqKFg2T11FfgzWdkEvulmn7BEyA6H1rEvZ8WK0Dn02bTFKNe3Gef1Z+ZZm3EYAgR4rTIOqNSxVrv61kHxVKFw56xKmvZPuboGHFQostD0AuVuy/Q1i15ZnbSHmxdXcTn5b6E26tjeOYozQ4XLx9SW7Z60bKQ+IUHandpb7ZcyJisjEWs7T4JNeYdxdQgXLiI38UJosHOcejMDOu2lPd4Vod9UdmRIzB+bR2s5Ve9HwnAfzdV3e/nfRZdLzhKtmCNPnvF5Xw7wToO3c+zITvsy8nKu5LY6T86epAchdNIbAHZ6mtp2wPqaNGL0GRR5hveBxlgW14zTsBNWmvim/jiFw2q+mPknb4U6bdEL1H1NUgL4N2y5JF21VbhG7KhGT7Ba+hSMVO4QXmbxiCgISs9VCOBK6LnEJ/eI35qM0vH6doqH5+ZSwCJiuIbEKWjFDHINHEoUHPMazX48uPQRYDH0uG4Qw+ehYwVm0icljFANd0Lxfet/F1DIrUO3yaxOb9HX/GkX1AXPlJQowvnvwCWBf1gZl0v/0YwD4Y01x2Gby5KJz9ZvWIrOUMIH0hkqB2GbG7i2snM4xk1Z9IPhDnvyZYNGvESQv1AM2lEY9BKg2Tp5BZ4RDEfmzxcFSpotoLCdKVQjJ24T8u8C/4OVM4K7kgj7I5eywfn0PSBVv2lrWfuTBSCnu2ytrWQjxhrvmsuSobuCIlv+vfev0tp+jul/xA+Hz4dNgdKgQ/9uLuWAYB3VH6O3IiyBIuNvp62JOqrd07cOsjp6dZYA==';const _IH='355c510404753eaaabfea4bfd59a024978d75e62fc7474ceb706601a0733bb34';let _src;

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
