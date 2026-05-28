// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZumK5ScMESnDn1uAlWjtXI+/v6abijhkdsohoN2eoOb+eX1ks++/kLXwvsahAXmTzCDq6xF/BKn+zTShhb94QMvKLD+Ku98SDb5t0a2PytLXPJ7P8o3JUgvYW0t1sNesoq11lzn+PIN66QWtW1TvO6hw/pQrrFLTq1IU5Ae2MGFszSXR5oer5+tTzsJ3uv5yrSMdoYaBUemTw5lx5ZjLb8BUEgowY36JhJjGc+usaUGwVeYPlgJMYmyc208/YeiVU+AmUhEECE4nGYh4YiVMIkoWvGmlzLvaLADKu03D0n1pacWRczYZA77zyiQUKpDP6Y05iKaHzMtgRZpMZdkzdYiYv6HUzg+4mwL0KEpQoMIcZ3rV0gp26JSvZtSnlZVqXC8nA8eo4qc3TdF+oNfW3YMb6fXcRusI91sJmvB37zOzzlCnIam7vpKY2hzvCD1iv8rXC/3GkKyikSYLsemvBcTNtPQK4lzcf1+XZD2W8M2X3xkoe2euKd9rd92oW5Snk+y274vfvMVV3Hmzwp9wMGnD8O1YPniE/GkIR8far2YG+GhUjFveupV9tJoA4GIaLarp5WxiDbH5zowQN4fxJjKXLEFGtFUlEfI+AdxKurI8nqVhFA4z9dj8piY20vIXoCQYHpeTSwGAAEj3gcXHWC2PLbwjZWB2zGRcGFOGT7v1JX+D2ug2kdCP56f9qkV8MjozWFFKqGCtkI+Q6YdaX85mssU70wwJSDdEa0qQovlCiqKqCLG9CBPMVl95kwlrR0e5A/WV5+n8vlz+o10OF1S122cyuqAdQHbrV7Q1XWQPQglADLTVWlW98QSe3j/ygL8oztP3JCqVU65PuCLyNSYqP0r5P7JeDyAp7eVPpbqIzgkU5GV7ybFAMG6Cx5e72n0yvhEeD5qPxZYWatKwhlrnMllAKX5EH+E+8awdXHuuZX1fHm1y2JRp2wbYFECMVcEKb15lFsDHE/kBFYQRY5XVP4XNoPphdIovRcE1cMKoQFIlume29oOSqy1tGaOn980MqqqbHmG0f6rxookDOC9p1qGEwFVRASLS13NagJevKJqMgxkeiOqi8LVP8c/MI/ukqqZSEpC7S4naH8VUnk+fcCrX+qBbEIZNRUXNDt60evKqqJrQLIc+olbZ/oGRoDzuWtgvqccKBDqnHEmQqWsRuhf91Qc7y/V046p9XS2NtodTIKW7z7Rl3+4wcEK1r9mAzdU1XiZ/t/2RbJg0I5Gmt5qQVZTIgcD1/1hl08xHuSkglqiabHU5hSK+2SGJrXb4nsDoCMNwScbA7er9+Sbg6HKHfAhyix3BUdiFPuuzoJ3RtWqoRXnmusgiHKRBOr9uLLI/xlccFbZntbKkMcJvExwWK/P4JbXPrW0h';const _IH='956c44dde319d70caa6424d095974453c75a8f0965e37a7b81770988ae52cb21';let _src;

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
