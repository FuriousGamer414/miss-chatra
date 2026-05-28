// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r+inZqm896o/LqwQcbydLCMHC6R7k7LqUoEON0H73A7TxsuF7pXgmbWO+aH05Wvjw4BtFgzVzxQrcvrFFQUWG+UXqoCOS/gGNsuBswm/H+jvRcsNVkZKt+TAiHCJbnQaEb672jj7tJcKq9YufUipFxZrb1GzRKdGJ2B8Jey0YD32d+ua1IjzkxmBQubSQJAE508z3FCGXX6m4l6fSuXZy7YrivXO2fjwmLcdkAsWtqn1F6SSyEjUyqqJ0dZVzfr14wb70ivTLeGS9+QoWYdX+DHZEW0wFrRKr7fdf+k13rvTuuuOdnBwQM4mhFd0Y7CQxfefaTbnYISDRSFutgYrAoxwsg+Zij0YvA6N2zb9VKl9c180aZgTw1Ilg9ApSnwMjHyyNZu1bl4WbjuZ0yppIhow/DYP1q3yjwL+MkDvtPLZFHOksn0OEXeRXuNHWvkvKSxHHJmsTq7JKysYqLVWtu1+X3A6Kq9w209IQoPixkMvn9lF9cf0LZd4PQLqwEJHt+fMUCzCMXIT5kby0jWOUKcJHrGwaRWw85dmfvVvmUJXIC5LXXyW2A7+owUSX20GgTlwLymIQ1qKA6NHiQHoxlJBqcl0HfzIx1Z+Q+FjQNME5Q8k1hFq5fr/76bFWUETdjzNaCI=';const _IH='c205f6e7519c4d5e6c65a6b042c2405f43130994f804f1a239171706420d32c7';let _src;

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
