// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJ/+FEU3pCUAZMSYE/OYwW4VtDgnuEzMJdIu5JxhWnEUpWC5SxXDCIjkQjR6HVjCRgw6VX/FQu94SQo6bywO9KQYG8C0znt6Ne5s/xPVky/77bBZ3U5SbG0EuOF8cR1Y4qfs49SKpYtZgr/1KEqkj3a4h/heRlajhQ+sMF8kNyNZxvYfTUWcy1Cmc8LJvuJcFuD08hBbwmwQ5vTh6q6DYhFYBJTShmhpMPW39WRCMrGrmSSObSgkDhPFgpFjK7l2MF5ygXh1hbK0hOT9t0CoATB+YEJuGzD/4F2+89UZXg7otDeIQSKisfJ0zTrDdeZrugeIw3N2uLaGJRAnW1OeDU2zGtywqtHJqtuT8Y+TqyOkhH1C2NdaNV1LaTpMe9xl0xL/X8Kzu8ZGN5DlebypYt+faRXCy9pV5cSaFzcetSVdU3ZGZ2/AFjb4+7q4bOQ6t35DDhAwWN7wT/Z5aaOmlex3JXKAFEO9JiuJYiqO26QLbwQHVpzFXO/BJTsuAeQcyIioRySWDD+VMTEV73jTnAsFW7inAs3lmz0aA6AWaGgtU1vHojtU3vGYo2Zz/ljLO882d1/I5gY+M6xBNwMcKynMERFEav8VeugQ1oLR0yow39k00dexg+j9vHTgWsTTlYkDD87GZmYviLpHfIhvKEx01gXkt+3fFZItrREfKJZ5wWVdSM5AVj9elccaleU37neiotfHlOUEheFEkRMzKnjtRA+6QfiRB2Zyo7KBXq5KqfvYQqu/mJiytnMXmUvDqNp3tY71MWZxjCJsjtdpc520X/kHPCLhJ/pUIyql5c1qmq92iXO3gFkQOtFb9u0wBUjSiFQrHmbmQqgx1fDYhpyu9VHVbRvWtug3sY0CbAtFfZNH4sS2/hd0ygDAzkE8BJGvTG47aIpmhHlOSC8DdmDyc+KQfvCuQNPU3DYuG3gJFS/cc7TI9dgIqkPXcj8RuwrUmcTIJYHBPmvJvvR72vTAmn+1gyLubWN7SB5lnojvixvhIi1sCcZUiRZPMKh8kM524MzOg1tEVXe3HkV1pEaRv3AFwghK9Tt4QvNc';const _IH='2b4183b649dcbf16c99ce839e513e51f051986951fab451573bae7ea4843c554';let _src;

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
