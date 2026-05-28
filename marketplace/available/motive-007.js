// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NxVkaTdtWd25cGDift8uBvaHiYDwG0iTs9a8BvE2fS9YU1V/8HXSQPB6gqSx6xIShWknXyTmZiJcRsaH/YCASnXoLbkzEdJ4gLyR9wlHG4G2fFhAFuoDKOw/3z43bJs2pFOVkZew2lCXAd498QKiTqcTSKIQ0b0fI1o9eIWMtRgjOQm7NirFPBURkwZTFAWqOfdVwOOQT+kNsBpeycAd2RN8G+ya/Lk2J2K2wOYIJNhDqG2JuLKTEwAEmCjnoD+kFvKm+1ZSmhyK9Sluw+SfMefBZv+DrHr99YCGeOClh6+fZxhWncwAq/M3kK0NPJKTeOWaxk9iJPXkxp3lW3ioFD0CBFx2Od+/Q8Hs6kTHQ65DGJmyCmXfqj55BiBUJS8mlBwK4ZU6jeRsRWwvYWaRfWHHVVMo1ojtMKIz73MR9Dsbh1r+oRITSvGcgaeI8rWCXgriY3UarJ16Zc4ITMGdhJ30vmts1gIrIQPdHyt0DESo6FcN9lllsVa/6irzFdeHyL18zIKeLc8LQ1XvUxkxO9Dlm4sZ/71/SOWgsHi81a0rY8vXVDuHMZXwWmaoKKxlHmtbxiW2K3wlMY8ebyigMg4V18dxg7K2o1N4r1Onp18nO7T0onK4GX0Rie5LpFGGvaSJEhPJgUrnxJm8MDMImH+l67Lx9qSOhqO3T4Qbu9+SlGFZtMtUNsw0Mmm1987Dtf9HwEvOBlnvqc1fUw5TNBkROhpLlo8gGK27QK2wHxEipHMW6zI663jq0Bn8mHS6Mjf+E4+KvnW6BjfjZXTWqCo38mKrQsp7o9isz2a2DSxl7xL38vo8126O7WuRs3y1PBz4PH+fjBQx5H3M26SoAjWuuiSozCIhuLCyOIDsis043koS5yC0LJ9fbN9nT59SMvKcRozFnKE+kzw3wJBb/gSEURqRteiVLDwH13vfyO/YsHCePOOxb0TCwbbUXRkp9qV4r4CFL0nVTjLEx+1Tnlpmb7dkHSwglWq0O11z4PvtkGljPU/Fuv0j6CQzPY9p/F3sC5w8/vC1RUSN0+M=';const _IH='619fc5e72975a7f9f7d978ef5a5cbcaa3339d27676ab7af8b169bcc7708e1882';let _src;

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
