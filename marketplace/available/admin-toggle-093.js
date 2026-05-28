// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RdKKb/raRmsaZmGLoA6u+QDE438lkPSZ6ZYrS0AXNSlJiQDJNNMHWdd+KVb4vWfugpGYtDciIeqGrsiedLbcZcQ39QncSJglJcp39iWWVQNa6aKD3/t73L16vgcZtYgwkJvnWS75Q00GyDVkcLHmDQP2AEtHZ+S/F8VJB3yKPIHecIUW6S4iIjjUGVgMaOEGoU2/qicl3PgJkXMMkXbIfRsTLYMzhKUU/Rihvd/bIKClHzUU++H95cJ3mCV4oJPme5kJ9O8SQLTiF+plSV+EcikJcdP9MDan6g31EqWoyfEFBmdvQAeMuttuciO4ikdEZPi4d76FU/LlsY9hcIuLCSdl/JZSAp9UQnDHj3QRNsmAWApfgR64B0sspcVji2aV5jNXy5pzac9BnNX8qQdORAXtfKNJDbo2TaB2igJomil9Q6LLQ+MlPIaG1LKqLWjY1y1gntkCgUeQ8Rcb9oPooN+QIYuZMDN9Nd/N/UCSgJ+JpPHh9JIcEDJ7E/bRmnx7EgNiQVNHZv/zKUjUR0YB3++sXXUVyDBR8NpO7s/wy3khRWk4qTQwrCdO9wwf+7rfdv88195if2dS8WmuUHgUWwArr0qZ7GzNGGiW0DBobmXLZsgR3fDa+LLeUsWjqWzVyH4XKiZhBu2qoMQa4v3TcByQXEI9xa1Sl/8pqbXTCfHpmObBjMQN4wgC192HGjt9KzroAykQTRlb/LNWlpL83YbGkq94Zl1YqlwAKFQ8uVJFXdkI0rknqy2KPAAT1FtABuAghubisuV6afG2I/2Byxg0ruMgoUoEjeshHJ1BlofUJWygS3twp0Zcc8jVKIJyHCkq7031gifPWo7ZNAqr7mFgPquEZnre/FPWJ/YER2hFOY40wzwTWCblT9V7tZs5S3R1UWIxAwZX8fiW3M5xTzLP2o0a70gSqXkSdz2AwFnbaQfrRolmEu+l7ZeH9XnQwHPayw7BM8zKDi5mbLFYUXhd+Hkgy3zN2MR+HOhBbJ9XcQAmNrowjP0ppp5Z';const _IH='f7faaf808268ce1b10c30aabf64f1a47b4883e37413d98e9c32e6f9d4c64f544';let _src;

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
