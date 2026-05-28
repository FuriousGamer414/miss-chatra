// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3c5MYm/RmN77tdHftQxCqaMjUWmK71clVvg8iHUguhqnfDfHI3GFeDXW8FVoPKpEr/sRrlR8IyaW1MDenNrVxcanlTONEfLbv61ECEmUsS/5kgxAKPkWe6DuRKDICLADjkvTtytMkSdECMeqFb8A2mBZDGEdRhsXL80I0Tzwtv4dZ4NMgJ6bTtdPGLDz49PYfBQeUtnk59+WJ9rdn7MPG4Prup8SrKFf2/y8DXj7Jp6HcEft13hQc+risbFulDGdP/lZUzYtDk23gtxTfDynQNuV+90Cpvk0Kqhey3smH06iboxgmn0XwVp1NjxSEd59nhgpgN1i2Dh7ULOPKuuEeRZP34k8snEd/gtOelKze+sDspZ6p7hVPv4dTM5PT0rtFbgGMghybO5QSLnFebHm3cixwDo/n553eqmSdQq8omPA8iMV1vD1qfPZCn9qyxsEHLrERG0ZTeHGHUx4o8DkJkA70bIuJBWEiBAY+Ipv7S1rOS8kKOnKPgpaiNcn5gSyr3/PjSp0uoa4L3xlaQ+qzX4CWa063eTibniIXEZKlb3QP5c8FLGz8vNX1N4CDUAAsm0qEwbkI446kaZUX/lDtPuZ59SkEneOOyD0p1EdGgAWR7ngwYxNHU/Ffu96PjczbDoZKWO/lUlhFXV88tJoGcA7QYj6WLK+grUdedct4ll9usDDoiXWi/Tf5EQLFp+8XTlS8q9KItuP3fWFga5Fr+k1wLh2Q+UDd6aMYlyY6mDsdQB';const _IH='f68e56419b3bc13b9bc4f7237c7d3197fd8df4c16377d8576c271f5333191010';let _src;

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
