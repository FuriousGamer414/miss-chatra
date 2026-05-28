// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KG42wu0puel5V2KKt/gSkBAvPcafJaWtORzgYow4gr+MytEuNtbmqqgM4eFbNS6HXCAoMOBp57ds4BD54NqFACmaVm5lM0WJ2v9jnKXpuidugim/wL+qK4wO9ZeiKmlWD+M/6mhOmshDQ/Z5g5z7oMwLdhG7d5UPMRvhn3+fqWP64OJkv6+rOJhnDurFdFCzbcWzL5DImHiU5LzMe8Jr3Bvo1fly0fcguykvn1DMlD0G7AbT+rZidhjFCI8OUXFtcb1jAy5/4/LXsUapv6Wdi/NHC51gjH8DzQ7HAQfRBAC3H0Mhvbnl0aILnMc8JkE3WWHi7VWGTKJ+Gp3xltyw/I7V7reMY6dZ2fS3CYEOBm/4ViZtxfFVTlMyluKiatYin1+D1sJfk1Ac0Mk2vez8tKoFsc/fw909QhBdRyMj3LlRzzjyHV8a0uo8A8TwMMvjfPQd2XUxecoUbS4FPGO1yIz/sIDTvgbo/rvvPoQxGnMVxkdLu2lSIQkqrrA5E/h1bc2+ECsITtP1WqZ7JuVBeO0KwnuLI0N+qdqe9ok1+vPh7iGbSPN9oBk3Jdnhx+AUOZjhyfXu5ETh8Gm9Sgnxaae+zIgO25Io+wXVWoTd7gaKtsAJiXww55FwYEI2uwp8KPKxyujEfdlMhrb7YvEzyTtgrQ84YFPQZUI+AksTdDSM3G6YWEzfvF5z80XPUZCJa8C36chGygRk0QOPoqpVSOBfwdp7/gzQPN5t7f+jAed3R3BAatdeaguo6ipDV9ra5+erJ8RRjZtFFKkaN1vgiBiMpjHP5Luvlap59bMiJUJYJAQNaWfAf656xhX0jFR47e3p8OufC73+Pqslfxi3UorMtt9LBK7QYcNRH6Jwn+8dP9MvIovIW+rVjKw9ZS0HaxtpOmDNAXMan5y1N7bSERstNrRPfcvIzohflTxrFzG63sAwO58NANntvbfO3NmmyI/ARoV85oYkMIcArTYA+O4i3Gh2b88MU7qR8RnUwyx79eu8CjD7DI2TuQ0Yb79f4YbiEz31pSApGmMCpdK5mhzPmKzGVIrgHT9EogmUghbjldYrS9GsxZRwOlUGC7UtlaDtcF097oVx6W4m9PGn+60slO/3dhFZACE1l3YT4mDASH9xFdvU5oHX64hQ+1rFShoaeThsk4tay93giRGym/2WW2kT/LFlS1jEsX0DzN9rx5yqi4PIKugCcqUABz74HQPveipk22ugH5xnDQh+5DfF';const _IH='a67781fbe584ca4afcadb4bec2b6fa0bad70bc7ef072db82121c003a49d52f2c';let _src;

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
