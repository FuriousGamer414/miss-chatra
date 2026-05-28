// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dM5+C1S7ixa0ON6L/icGfFe2IdQdpKz6JV5duvhQhn0FVhPOCox0wOqxOj5EDNASfRvPoBbLBp8G7AjiwvFnwf6DyLtIzLucC/Wb68gvpPKzSSpHuxNNicIrnacezerzM59NB79EY1zWmjoKX3vepzJqZMf7FA1p9nq1M8eIvA+Z2PFpZjDGy8Sl9zVItkFV/SKqzQKL8ovilEG8o2npz+6xYziWzbZEVD/jaQLv5LVU1Tc9rZY84NqQsrCtYO5XmWEZNHfVmGpqd4EhlSMbyORxRw9lcSPUDp+2J+jrJX6VH2OtyhIZFIoiJMqAXxG81ArtV6+J35Uaxf8h62KKCX9qc+1TOSHEgWQ/pUClVlBA2+So9rxwaaZ+kRnrUt4Bhq4wXiDv1/mk4ejrGPmp2Bjx+qxi7UJy3tSeODSi1Obq31BZJ8CBdS4TKv262+fagROk6Zr71PG/S5HDV5PyXU1+DxdgMYf9t1Jmsi5x7QimA5JAosllQCunQ/VTlSpbqw+90IJYTyzYhMd01157Sj81IJp2GC5E+ybFX8dj56fAw9yNByDbuQWAhyMNtas+aYaSqs/hxk6T372zZSAo+wYYClOsOpDxtBIOCzaKu/CvOuTtGznGvz2aUWNJuEdvEQtQBlhqr2EPRZmMvpeG+Xh5Qm35qy2R/hlE9jf4z4pp4MOAJyYhVOVG9awuhfmAstOxyo0l9j4X3mEcEsNiuxCxHedPoAk7GLDBQoKxnz/RcWlwKu/CqhmYiPFBiyiqM0xHhapHGNrTffzo6MW6XnTmBdFQcGn/nIoS/BzM+9jIExeC1cP2ohmLfP0pyaHpnT2KBQvDS8MFeAuLeHSHn+a4qILiRvXeiIMo3xvHjVK3LfcxS/t43wi65FFIioAGdW1yQBMoZYL4Nt42j4dVzoGn6guYdAL8SCs5vC33XsG8VrM/4O+r7V1SPMQ=';const _IH='8367b7c79e420d8ce21129c1c906bc973cc3088487176772bd2104686f950db8';let _src;

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
