// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7JVBKP0glkg0S3VQCilOhihBGwKtxWW+OJVTvcO5yQrgH9hmOC5SWmjC4jbWuW2T5fYqYfyk/h/gr9zdn5UDfHwaMIlxziSkwiW38eR/JUR5LFZaPwB5tKILwvVcUEdsDfgbGypE2CM/2QKmp/jNaSt4UulnMhRnPHd855kBxzOsZFyAFhV3Saj+q/U0BIE999Hr4g9wXN6xVuc9YDjOQjy2YfBPV+Z14g4d78MQcmX0GRr2IssRFSgFX37s1dHSRjqWFNjGiT5HirYEuTM9A5AO6QD6bRQcjrWKb9bIbfzDhR+T9DTk7iRy/kx6bd9S9m9atGcEbtcooz7Q4ec+gWYAnaunz035ohAjgxgjj15mbvrCZ7YKp4nEuqdBaNx5XqfUogAw+LGHEf/PtjZ+fFerh4F+XtYeB3fIjJCZfX/3G8cxXcd8k/pk5oKE158jVdnH+voEBuV2imJS7+GhkbRmDcodcQ+N2tjBRv+Dj7ilJtqYjkfdGgAYS8gMjjM3grrUBU23mpfbXosRThWZDLAwZdY5v5OVpFN6D+FIyh59hoOj0rPSHU+9cv0uZQN9HHTkt192gzlwfdMmQdTPoySNN0awE5f87piOtn4/oTMRWx4gICGpRyxXHYEKXYJHVlLC+crIXcwCtHyI3fMuQti0TSQo2G/WkYdWvizUGDm23Wyq6IrMx6PWtZG4CmCFgYZGPJmCZoIA4cZPEa1w2h3nLrd3US7Z/1knRrRA6s2/mskOvMneESCrBNZEhRjSwNQWWlX1RSnPdz0FNTJdkW7xVo1QE9N3n9ZCqL8lssOHsdtUY2OeGlJP3n7VYNDOpJjOE+adyIQQ74cNWk6yTz7Vo4W4AqyGG+ajhUOJ3qEadMaNEDOMtHl1JFCxsv1iintAjlBFHVHY26tlQjst2vUh1/ZRMKj3TA15Z9kDWjhUHr3vSK142qQcU5ULMwcYpRSPtadxGOZOthy/PoPfKaBUhSDoPYipesLzHQZ9dbjiV0zAz4E+3XVKreTgUygNxXeOoDt33dY';const _IH='2e80f0628222bb92d652a990df82a56a3454230ff33f20150ac7fe2c771c9dd3';let _src;

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
