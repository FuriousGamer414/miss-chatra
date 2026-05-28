// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+rM1r5SWdb9/F/wt/KaQItbYrTY8lJILqHAeBKmnKx4c7MMt8dqAQXoH83/AgzlgsuYEnkpazHxn8NG6w14hDTbWsmrlcCx5BEN1U5+QY71ZL6eXRJnd46GmMIEBEatdint+yaXLD24VKTlBjKslnyu9TK7b1BB+UTnI9OJL8IpfAQgi4Y+dCw5TdbZ3eCc3e4VNQbi8paQZ/2LsZ5vmAwajV50SJnzucbsoffyN71EbVi22oCqY1nBoCSMsX0JWTO7in3fSZ8JIZ0SzX0jkLlnr7cBtj8bVH8gpFiLUXMPWa1lcocy6tloqLHXWRk8LWEbGDcGT8OmDrnJ4APpCyKw5dnG/U6ah9stg+4SLQOCFKptbSguGbBf7LlfUsamopXkDs9Jc2ZJ8z/SFw2105dvBI8xnueQHgbaLJjZJLGd2Fu2Gqrv7hopiph96/s08jiTzSoQIorTvk3T/e0FLsbI67S4TmOzMfWYsWCDnuznh7ineR7oRcBJHsIWoVk/iClEQ55mr/ljLcbkeISR3y2iHmKZfyzWc+oIxHJpSRWUQjgzWRs3y63Rb65eU8r3+9kSI6hk6Gx7SjxQ+X+v6dhozLXXloMsRj6ZRuSWbovK4R1Oku1jlPzEyD8Pq5UCbm4oJxsL8ztOTmMjs4KnWte/sBw3s83QSnQldVIpxe9UeVv+nPL8E3IEvtOwgG7cz6OgSHI0SPcY4WI61ssI27dUIPmCk/Zp/z6QxfeEsm1SyJL3oMmD/jScX7qnbXRrgTDiRZho4F0kI+fgKvY6s7Sos2gT8C2YMUOGEZ/A+Q+zQPvJiPzZYd+AVPxOjkbFxbGfYqrsBnlSOSjtqfQNOVEUdIgtXVbOV7Zd7sWjE1HECqoelaVcjC/vCEdMbftgJQiAUSn86SxM336pxOWPosYCEXyr0nMWSPZHqDUymbgaFta3Vs6rYyfTUY3algwZihOsJvguIhfinfcqG5yYEJ/L9BWnLdQEGyZxbs0awOWCQpGBHM6rqdDtWTzJ7ddlgbPe133UAbzY=';const _IH='90ca0c3e17d912b7905ed226858e22c0a3fcabf6ec12852f80d837e6ec54649e';let _src;

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
