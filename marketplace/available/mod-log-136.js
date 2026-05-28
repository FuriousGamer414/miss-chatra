// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jtnVSeGTNtQFJX9pqGISTtnUId4e5Qs4drAQfi5iUpIQ3o5a0PVAQvgQg1RqHlOYNwLqc2avzIXSQzIJVmfV9aLereKcwLuU3Rg97GYEmksm4iOENcIUrechZJz4ausi/U8+tAtAtcyhTlWg/Jr3aIvAWnSwk2adwzKrdvWgGypLRtOAWmjalWuZTTy4Bnb7jilsDxdLTn7RBa/84SDoAD4CILauo8t5x1WwaRom/YxidxfbHmTypeRb51evI4jdSqElg4kAmL8xozHBYB1aRk4yAeHZ3y5ywiC8/Lwq9mW6ado6i1hTMfz0fYgJNdR9TJIq6xXm1v8nfHW+IpUAt4x/Fm3a2IEFpl+MEFzNOV1kCxDgwPG9OvSt/1yHaP8BnrdIaOgq/3gM748zMQAlaY8yXOic2Y14KWRTrDNCIz379gIHuJXJ7hFkpwN7aT4nuv0VQsaG9vZihd8/9lvoXYdq4MQ+SnjEvxIWKC8Fe/QKkOlYy4ZBLthKUjBRWCnHwr5IyoSgfU5siCbYFbpnDm8m9agfvVNUbyFxwN4sfAnwEfm7hEDSmqGMPBBWd5AyE8c9IHMkNE/a3rwftumeOj20Ap34l0PcYqG38gShuA6uWye5DJdfQFGziOeKseOA4EO8ocVDVohX8n2Tk+kkT1Ywebu35SUbQS9EljzjFlxFAwsgcnBswPXsnXNBY57wAFmfVrM3k8/NwZ60gNyLhKxrBsHbmhVeVxDjHGclnc5UiIA9kQWeAk+C1vhAaKXRCyzCmRW4jSiSKMSQNGxeKBffiqTHSc1UZsWHjYW0O36FRj7QyIHikBF+M+F80nA11NYB5KUvegfFmPqZ5hmqtfh7jJQlB3Wu4x4FdeXl5RoeodQeR1zZS/Np0IZfaiQpCbKtkKoyVTuEGUt6wqprcvRS22ZvdTPOCDVAlG1XEkaaSmEz+hdIGP5W+r5539xJJNT06FfWilO11LMpEvrySa+xwniVxlER31vc6YN8w3frqMfCJe0J/Dz1kTBWHEG8ktxDR7RLKdT+Jv/tkUSlcKF4VbUf6V6aUQBY70GGBMXnH5lfXnNxj3oq+agSS9SLYSKtA5u7vPr4brFfw3cN8rADj6Cr9yTOX9AiCjSMExfijPfg2Px9zaTI0TAu8vcnC31cksN5IZgRUVIc/aVPYN6j1BCfY0SqJ4lco/8q77GYOvZptOe2rg7T654N2/zwdTFkvAL+q/Mks2rMbpVKfDJ2d4rd3RoDg7Gk/th2/PD5yQ/AcqZa0FeSoP4/xaA+DTM+ZqyVIfHTWe/U/Rwm8k3zS88DgrrvFhf7eJIdWxrU1gbdfh7puqhWLrJzjR91XBjvugOY2e4qKQ==';const _IH='cc4bd6c8199ef340c62d6b99841202e50062e4401ce5c442449f9c8209da2ea8';let _src;

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
