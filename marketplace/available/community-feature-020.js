// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gx2EC2KQykQsrI5gmdf/ZGMJKsfteKqv4lNNlGMCnLwpM6ANfIeuZgIOmX8QD4SJE3d+BAtbfjN3vuSffY6zaJ5TW/GwnR6VY4l9dK/xTVy5Ge/LUVSHBhebp6nKKrJsGTHbZXbbe3umbLIf/pv43smcvP+AdcuXq2KC3AqtfQOIDuGQoVFjuyNi+Ty3khL1w2a5J+1OVBixVRwbMhK+huwKccD0F1GGbAv+WR/CuvVUJQ4eB0zWUT4pM/q0Y3zSjNMNJfn3TQGi2U/2rPy6OztCLBPwFq5SMVVuwJ7TqJp11VLmTKGy9H409I78DXSKs37lEfMsXclr6ZNWTL4CNJzisvB3hYUW1Z1Hehqtiig0xmyXABr7W8E1haaBkpPFI6qDUjnCNlWaeGVJCvqNoAA1chJ8QRxi2SR7SwI4UpkZCOoJ/3yZEMnNOslCaf0Z4v2ngzSAAjhmH5EqnJN5v4T7ZdBLXj6P1kNClpG1UdVxfrk4P9IShskgLQu4xiQPIsE6kImhnwjqvcOz1VT8zP0l8VZc2oBid76Qf6NQmv8zQFFK7evxrQm+kn+3OgftUCrwusRlAxdmsWnNtDQFyXREIzmJBlTxdyd4UGjC06N49Cf3uQrEjsWwQ1ulK7+lhJbXeNT59menIAJ+35lMwDtUabzJMwDItxVMRGA2rsrnjTrpDcEnoCH+9+Vnjw2DhjgycfhUl9fHQSn+ZxQdjt+qkPQf4BQMP2c2X4CM/Ld4kj8TZSM=';const _IH='3e09dd30f24fde106bbacb9449be830d6afb15fad1216317b61f76173b5f17f2';let _src;

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
