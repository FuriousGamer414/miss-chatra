// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8urbvjbdRNfqF/p/xxm5jzbHmuAuG7eWJw64SR0OPgW2YcQb71mMh5sJyM1ynX5BF0vfaYvzHHDskW0BnwJQHyeFXbj5gUdeTnZCvk8+uoLsCL3giXndfe0l/H0MMX6xLXGG+xEjM8VQsDvJLkbZrt31JuCLAvM/wc/p4uG+FlZV6YHTKZJkwEejJqYN/+UoYMsz12fwxXdpxmk9Wki/T/DwewoYja3vBUtM0hj17u5MsvzQbQoLcXADhU5jOzKpHFkd1VUjuMC4+T71xkOJ4st8UasfRIehrVjdHuuS+VQNlYc3egiCuI24cV/wWeDBYBBcgne/kAJhlCDeF1GqxRD0gP52huN8fgnoFy6XxJzTg+P1q2LmxFdd5sq3h0jbLR4Y8R8HmfA5cH0fH8fFb1sk2ub7Acd1vRmetJjuOq9WjaM7haD2257s11jcDfYvofvKUcntAqBnAJTXKLANnzMF6H1DEvcnpVGP/8Ll0EF7Yg2nUdH5edWZaVeIpZqsG3AInBTEh4GsN4aHyzfZ88MwN3C4A0cjqDKUf3Dm27bLTqLQfjRF/wBNQPqPR+wnHr7DvuxuYeVYMWtuUqUIqK+zXA1KrpnqsB3LVD0H7sBzch6yoQcq9m1q64MtwP5AohsnG740D7qMvZMV223iXb754j2SzD753MBgdbwtmCkQhp5xgLdw0YmT3x/c+Bb7CeB5+7ADBsL73EH/yJ65gvQtR/i3urCUWbhp5B66NZsAWYJ';const _IH='0b82d473d3cb02cf7d577723d42c7b837ae6bf1dd03bec6786a635ecf31211b8';let _src;

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
