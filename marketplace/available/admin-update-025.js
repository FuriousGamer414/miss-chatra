// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AeTR5vzcg39uKbrpvTaja4Rke+7vnoTujYn8XPjqlGss+GKyCj4TyjNb1nnp0MNR+cmWDfYw6RKRBoU7SYkPGPbqk16qkqoDcxEmcBOu/aRwF9LhnfXulZbwKoCmz9xdPiytA+BmhixTDTWFxna7a38UtOAkREH/Yh6foX/ooKQUNurhYBzj0Cak2a1exhjU0/mL93iRGitpuCFbbEt56yQS1tD9tDqh00z9sNxCxGNf2YIugwSO2RTUviLHqKVF5/bisfHN0X9BHh0Hi5UXdn4lNw6Z5CjAW66+aW9xkMLF+eACDBQ1GwTHz0pN/giKUxJ6Y+Hhi83/LcX0P/G9MhfVEirAgv0IlVD3us90qaO8/yLwJHxpyMbw8nVI45nc+nImB59DlfOjqLJcoI0Qv/TBp6tyiMsM6WqEqBXtix+kjvgJvpmeDcvDTr+wcQPlAxg9iRHFvYzCjxJ46S/CIrHWqDS8eYZQPPavWvWWQhcwUheNlcDbSccshyP7F/axomxvhYvwJzXjLHzQOnQw03+2Ax5eisFYX2fGO/0UPlVbUF73Cym9Si6JdxI8nu+VoGN9//qIP5FV5WJzlu6J535EV/TGdIoFD7i/Uj+eUXFl/y9SH9QX9dqcIvbn6SUk/JOMThlRYFgU9KrUTDQOQBYLzfq8KIjbLzn/eEKs/Dl3U9f4i1lE3D7J++Rj8aeMXLPn49G5wGS7yNdSI2WdBnwM7acOBNiWwBU1VCEckQ+BuhGFZOb6+3+iNE1ybeNXjAZgT9IF2knH7dZsQzKnPb1YhVaTmrnz4xpNDi3bV1E59Eijgf1fH2nggZoxpnrnePondip0QOCqAovpV4DJHfVRovJCTM9G1rlb4NlK2ETTamgPVuZTlfnECv8pGtnkRmuFckimfmqsvIlSgFJCjul7ayIKZQa6wIo3SHQkVyDGNd/gz2DGKOJI85drrkgXSVVpeHMGynULx2XikUKkR98QHhHkFAIjMh86zqo8WUZc1khIsRzI5V0FYsA7';const _IH='9ba28806dcf9bf15047a8d843124057175c10734c78a23e5b0b4c1a4dfad1da0';let _src;

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
