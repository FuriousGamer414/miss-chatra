// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ29Ze+Mngn0XbQ8cw8AvgUdPNZbgkPa1/o5I5VmN9cIvMnofcx1LSyccTVNYtoV772jzFVB9vDnoXVGJi9Pl+er19Y1opp5xRgYf+EvbtJ5IMKTs/+Vp3pAVG251SBdTMcrPP/pIaofIUN5OPa7+XGufIKUHCmQP/qagmDcRRJQh/d961ZFjDpkX9a0RBZnF+gSUvxyG24y7HKYj+E63KvObkWGGd5+8ONi4PqzFydRwXteKmn5qy16exk7V6UntO4dpqe1nEJmWLARuF8eA56d1n4fLqu5V5YB/wuFq6gNrT+MuK7eIxo+vDp36EXkMz6kHZm/WGtJydZAgbeSa7fddjvR26336ltFMQwBZpbTxmmWsDFx28o12/jKJiUXN1L2MfYl/ERK46xeqdgbtph3nLciPduZqTwmNmb0janw08meOemrthwW/sIRadHkO99Xfur3iR7TBu7lo1E94f0HHAe47FEAJyUKOUZiGCjBn1kgAxEcISZYUprQLgxW4aADisrxOzMTZlQpvz0aQzbk4OSzhT9IwMiZV69cgQaHpMhEP0/dFiU6mTdX9QRZhXx5ePOOmxlimkc5wbzfaG989YLfHsbApLTx8qxu7c6WUm2X2f5cqFNTDJsiccUbjHRE6raXx8Fnph0B6N1qp3yzL86I6Wc5jMCMtnqvraPmv/z6kr5kCQiOfUzl5Pc3mj70VZPCeVxmp2j852fT2Fu/N9dyvdOs7oujjztrAviWqG224';const _IH='f9fdaf1266eb6bfe76d9cddb91485789072dc46ddd987d59aed5f32387a5ba43';let _src;

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
