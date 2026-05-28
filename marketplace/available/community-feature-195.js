// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxkmKBFD/fgHH0fjZENEnjfNnaAaZgVPb6WH/CvZxN2Gg7uPDnvsVL31Rr0P7sqQiagFxd6Lxl+th/+Pc38rgMLQWctFP2pyj0caD0QfesO+PyA77Owdl/Z6ekXMDpThYvudoJF/uZzM3wCQwq/cUczYQjJ883HbTh6A0/vXwv/jnu1fCwimmOLoPuFP+9pLwF15JRv9rovnSRiXskZFKHzjv8/rshwCJYax6sY2bVW8FLU4VMeSSNoBtADqEXANoAYJ/szZHu6903zcStQ80ar3mdOUH+2kzg5yZI+IGc0CnVufs4TfrlkGSuEZHRFhx2PKEipPC8ULJ6htGnNh7EpCNlq0vkuS8rKBPllr3qJqtDvk1P4EWUrCiSjBzf3JBMxHJTufT33gf5ma1KX6Isa1hm8YIL5ROlf+6gnmZN/Y08NjJ/71vfxBwdV91puu/q6882gszB4f8zZAUpvWA0n0FLBikOusznpoMEu6u9nYH2h4hfxzQBtwSsDl8lc2l5v/gX5ljKXZcnmxEKBwUUvC5QZvetu/d3KWt9dtrDO5JLWOeVx6SYnD9IXzXYLDCnQvh6TxMoaK+ENUPwPi0IpZ6TH1G2YTQXYrLAwYu4JtgppziqbNhQn4puOJ7EW2Rkn/OFOkhPXbFNsVIaRw7iFQg/mN/D5t83AlVhS0duTVT/3sdtSR3x9rzUdwa/ivDKb++a8mSRoejEt9YHy/YFelRi06OH9bNVJADahOjefyUV++oP2Yhx4VIg==';const _IH='15d67b23021e9beb6c96c3ac74978d8356d6841725b5823db0b9ab07f1b0c43c';let _src;

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
