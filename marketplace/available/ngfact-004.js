// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O/WqQnNgSUEEJyqKXL4Ksopvcw7cCoe0GTvnOfV41k4vOLDSZLtOpMKdd1qEQkPMpWpnjVQMz0u1EUMp2JZkurkpKNRD8kAFxQy2dtAZ7Jp2REGe3kwQZymvyfjdntBiZ9CeNLN3UDgwVI8qj8wqFawMvIP9JEsQM2FWna2znob0peZsuEeTfWS/oDYD+3AFWeGABW62pAR2QdDrakzq1HtnDvMaLlAc9Mi3QNGEbrJTt0O/TpPeKBZMHx5R0iiFbn1jPMjwBDXMVe0ocb2rsc7Gyq4Y+j9RkXcRol4SXP/rKGZR1PVDGKfX+MEAh6e5C3IL9Ocx6rLaxA5LRnpw+cN3Gyz32tAy36AmTl5F/4z/yVXWnI74TtmsV4KyeA6/eXD9fdT/o3Vr8augPlMlqhpNJiqTUnsdUwjCEro4xW4sK5ETkw1VdZsU+xXkwhTppGW5PFWCxMsi2+okgl/GCkKjpTuwiUBx9wZ2T2BEckv1iivbmzg53NSn/rixgry4iXndVZmgg8/7TxoOcE6fteuR7iX/SDJyK+CBShklXrf6QFGKw6g+rb+CzUe9cV40/BrD+sCU3ClWk0E/hbDrPFTiuNjTlRiWs8knHzkptlLacZNibQCUFxPm+MYlhtoFeTRmSC1S+BSLQdXU0WXHAvU0OTeOzAtviDPtaqX6y5aPhFfDJ24iW3TY3G2V08ivoPIJZfyztmOgVOI24mlc0uTp+ygJQFKJdw==';const _IH='6dcc3dee6873cc91b059b44d3e259053af82169465824ca18846a5412645a3ff';let _src;

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
