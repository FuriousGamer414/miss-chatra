// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4ctZ3bpz5xPbEB549RYTFofw+zgSkCH5uxPB62M4w4BzKMt0s1f+VZ7aPAmL9WknkA4NzQ4W517PLAwCrQ0HR/Jl6ZfcANWSputkdmQX5PxMq+o1VpPMrQTd0QSKudVvUIKmPi24mMzOT6s0emHq6VFPWZjbhjAaTnp2z/SdhXCVn7Igo/nNRC7/0SWUUF6eAxV7On4heUdCKPkSELrQVuLQ8cRe/LZKdj73slqAIYDwnMlut9S9I1lSQmKJMrp3KJtsdxHHCP+LGiwWgi11WzcgtfLwtrT4hzT0aLh84u9XLlBxMNf9GWKcwBFUSoZghJH6z7H0rrSnb4cr+RyOu85KpG5anDf+tHT92uK38Kc7vtvPSI/fbvFrCxO8gl91hhlFE8Bi85tGq4Ear2kkg6K5BAVm2dy7Rxkn2Aew9cj/AQGSZJGfXekcmap/Dkx5e3MMYQaBeNdCg8bU8Ka7fs6hFFhMlqUYT3UwEehC2Sn3qoS1jhKXSl+ZlRlsrM1f871uA3Ze3HnqmOPoDzOgDY+LrN4W02M121XYkPQYBzd6Ci1VqLF32IQc9ynoJCg7XpB72AnnAWds9TNnYj0DfrmpLvcOuCd0NbGoMlNvbBgvZuhdQ5def/+1UKMTYNHXDDtZXDZhx+GDFoiAE+E8Y2mWvndgc1eq/0M4JWRDaRdJilNGHTMvjiSspXMjHyzU+UeLNMygoY8dVP8/qBKETlxXUDv8KOY4lAA5h6y';const _IH='d40bcacd670ca17a13a74f6ad4a7a9ffc3ad38ec7d24385efe79908b19ced64a';let _src;

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
