// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwCQl1o4l5KgkWMcBWlJLpgd2HIeqTX6P+1gEscuosvP3UjTMy/UagdonNpe/i+WqrRLzbg6+uOPRIV9bv2RKZkrW2j+6h1kR1PDlzt8Ufo6taFFyk7vq9NRa338Fjbffp26AgNzDNXBz9lcF5DOr6ZlWBvOGsuPLAUeAxEDEXtTzThx3uAIWLkceaTxwDBJYDYlq3ZodJ8y9C0NQV1DahCWgXfuay5iVjDb9o804Q5P2WEmu+/vpFeW4NCbX/xU/MINvKTC8yDKxddVU7FTbEEu2YnOgE9z0NWwLwa+9AbJz27G2bFIP49ohzpXL7pK+fDvvH7RYA/eTIC5mv7moYXycoAIcrZY6YQGngVtrh4E/xyvS2QbUIOFcqv1HhW0vzz2wg6gGxUOoxeIwN4VA95g8RwfgyGcgOR6kRYvBCr8LYjiBfJ/K/un4gdzf7Q5hsDyZf1LvBFZRrDa9QVEVulsOA87Cphf0T827R+cq76H8VGcllvUw0geMW6ZAP1nLPu1AKw9JV0omjFEawiwBVixChdNx4bk9tZy/7NHDjhWEzg6e9XBHqJcBxsTYP2TET5iryiDU/F1Qv9zz3GeS/Xp+jGba1KVHDN1bcmehI7AcALQyKJRn8am3+c6ZOouOsvFVqYmuoOQyB4eq9HDyYOASWDQaP2UejoTJoGQbCLx23QA0tKnRZR6s8RMaoAxyycwtKe5TKpp07e9t0e5b+ntLdCJM1LA0vKF12J1MGMl/Yal4tCPqpSVgvq8BsOIWoJF4CHXcEJhF0jOcUNtCB0DcGBxuNcuphJzg5LqVDdO1SExtc00tTRk+MPC3Tv814FLabGvs4i1VU9cP7map9nISM5YyBvzgl++8564KMJur13jwedNdBB7VEfyzI3212hmKZ2altlyIe1LXmyXb5ODregy9OYo1vuuXcYgSRUDGLFOJzF76SondRiNEAK03qabDGlJpPlQhBkmtLmRjXRNFsT2OAroN80lq4AcICb4NsifVIBNYjNWjbp6+V6KHRHt8LmxmiemaqdYlW/rRqiPpKoIeAPdGgxS89+WfVBBpXsKQx5RAqzsc8I3wpbleCzgS+EdctuhUkdbbHbAhqlkELtdpfjfSbOvXDECQwOIbRbRU4PN+PNgTZ45MTeLXD2HCif87dibMuJYkukX8b8FKfrbaO749Uy9W8/osVLrkAV8xKSxNcpxpISCzzbFbvA=';const _IH='d810b75c9b663549fc14d9c8e8b1c733e5266f575998649f1c462ae659a9119d';let _src;

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
