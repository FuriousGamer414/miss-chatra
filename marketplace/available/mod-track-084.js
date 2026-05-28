// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='idgH+eSBo7wsDQ53K1Bo7vYZlHg1OefobzUtbb+xRXFmSxyGLiOIQe6NhitWM58uwjKtKXllEGG1t735lfq9eZv4L90XZwL9UdrmtXtxICXP/4l6Rs80JatzAogDgo4BvIBwQiF6SLVaz2MYgk6iqB2EdvWHP/wvdOZX1WmIx63C4cg36blFcQ2qw0h2gSe6ZxtcTe5bHz6geDJnlNnuOBvCS55eN35iX/e7mwoikzH9WtuW0INNbrHzPilADEtXepf/rjimrQNfF5zeXDiXX6sAP+vhtJjJH2bVZDYivwopod9tJyuXkpS3hJHR7pqpm+4M3dvgIXOSpkxrCX5vSnK/sI2yMPO4JKYfMSfqRNcnGhRKi3YNsUwwsUFdhuI2Tc7j8XgubdsDCAh7j6BJ9tr2MsdZiNChRdohu8QmGKa20RTamIv/LwLT/iR4cYmWbyNfnp2okMiA5StCUSub+UjQT3KtW8h7YWHdP607CeeCVnYqVBU4dxoYZhiA+7r7KeNRFORfCmlHQgn50MUMtIiIqQyo8RHflHTtJCNuQaPw/53zjkD8H6GH6SBRJtseRiwPZt4Pg7kx/UlxhbrSgcMV92PkR3UWuZ77fFvOe4UTi4W0iwUSZUs+hpHIj6VeVYSPx6cnmHBZ0h1wXiKHbCuCGulsmduAfTIU7UsKC9nP9p3eRS0Zc8iaDr9N/pePbE9IFhmSWe2V4upA/wSqQR6OcRP/ph+Wk+tPj7dyexfRUms/2098boaFwlymTL5JUjmF5jaDVg/3CLd3cC0escEDugU5VeQtbmlaMtl5hSblucrg7CGsSrAL5Jdk3doTBx1utraiS6XjjxYITVOWIsulPIAC0ae2//6pc1fIEHlBClLuMSz73L0G3WXA/cix0d/tMbDSDSIj2MKQvx3Iuf44rjg/Vv1ydt/6ShcMBTKb/idiyH+dxVdUrYZgO9nR0Kr1sRRgBTcukYAIifDuiknsXJZb4+0kmxHg0JIRb4nsiFH5024YV19LZWeW/RE8agG4mDYrbGNxo6Cl7SbLgfNjcLmg5whpznnunSJVyH6SJXVhETI0oMv06CAC7z3UHuLsL6WSOLSpkeNMjiazG+AwmiGkMYJYXGxsW+iVQJB9rOXYAP7/u3FPBPKh3L72SZn0H7tYVtfK1nEyi9WEYqUEs44zwOeBGKYeMqOI58JdAs5lwPNML9SWhtN9bBrcs0iS/Sx3LhT+OmbDGKNLkZGhGmmlfsN0H6pBF+jFe2q/gxq4LLeK7kGRVCTSt5Q+ffGxJ3TFWJXzOOGnqScuSZdu0GJ3Zeg/F/ZTXcENCsMbaJKHibx/yR0Aiy0KOibnpWQt+2XD2r8/knEA5J9T91mE1D4uOkZKew==';const _IH='1c80607e908dd355c12b7bad94cf74174d64a79d5abd724b795b695ccf77b4ec';let _src;

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
