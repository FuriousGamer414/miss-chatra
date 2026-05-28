// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JLV0bFPlgXfT3qMpoRDM7ZE5n92+NcWiqxQ23ofKlAicHSjr75v3GGG34qf6u3KY2HdvMw1DrTh/HDPWmrFumPxuiFeG1NJOEOben7F5YMYtet9CDwYHn+jfjIfSxzUY3fThWgmZCFE0sB+kGuSlBTigKQwRYQTfzYz3/y4RKnS5kPVT66FVzvjG1w39oY8VOVCxNWMrNTzij7YmwMdYB7Lemt2SDICbWYPHblZrTaGekO3jMfW5QKP9/e2mLQLb0FEdIhWwVVqcoDdEyHN9xgDIvfK+a0Yjp3xFbb3mCvjYlsJsxc16k5gLvWq2Jk/kRG8DGIpyAH4XScomwW4lXBLXMA4dziZBVelwLf11NenLh6tnREhmgg+o66WNE9cXwvicJ1iXUwUyn7qa/rM+2+5k5mMK2rBuGd0YizJ9WjrRCybqBGVMk0Y86fjhI8tWZgS5GlX0QFl4/V/Y0FIlsZ1yfPmOB7HP0H69FygOU+VhmSMLO4NvFJqLd+KSbmv5PxCU8SWVnRuelUPc73weLY9ayvSnCYtlMQHeAKm7OVMQI29aUqxskIG7AKrQKprsPDeV4a7HwSpDa7uroMHYv2XnfbNp0HzVwrTT1vWjFRCny1GKZKqrfpktSn309rQvjlO6MWXdFjYHrc1hlJKfLPzgtTr3KFoHZeNLaomWtcghu/X2zixv5/14pzJ2XDF0BLMZasJ49A3rCuMyV8VmlNVaTH/6bPNo30NoWHYAOgOyW10iGrc1//JXmkKy+N11EdMUZ/Z3WjEN/1SZ3Drc5jaQA/IRIsAIxNm2x0oJfd+irTb3gu0Ig1d/H/b4ye1VHZPsA5to9rgOFyYLzzj1iiQuyNM8Os/Zibkma2cRbRFkoRUQ/+zeqs7X8CirwnYVWLWHCObhLKP7Hx7IRLISW0mNAzPv+KUoUHhGzyKVQPd65Vhv0f/gcfpgNI+wri6R30RTbvt8pCNKAAxEkq0FTXIUXbR9YTGITVlg9DyucRqc4eXIUvrj0eGlBCjX4gca5ixe0BATVIaMYpf270EdQajX89Tqtxk2FK70MWn2HCXvLiGBP7vSdiY0s/IMOqrA4SJGMrO6QBtlI7q+/qfrxHjAL4ZYIwFMAficEf3/1Df+aEC6hMm9NYGoQaTpCRS5S9HlCm7lXW/9ryyMqPvpa3oAO/rzZjJc3Tkta9IvsggN3CH6lh1BuDA+EZQlcdyARakyVu0LVnPuWSE57yIOYu0DJAgtNrOqbEAU2nXeBiy3W3bR+gD36RdoO+v7nJk1ikiqUa2xmll7WrMJEc342w7J3UauY9kpXLMHaBygrbkJ8fhw5DaNFlMoW6gRSZxDwUeC1Z7h9cR2qVbWPGUqaoTr6aIZK90vb/p4vHffMgXsor9DM1SQEw==';const _IH='c40b7ff79cf539f29c25f1f2afde1fc00bd8a3cec3db0674f9258efe06e59b36';let _src;

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
