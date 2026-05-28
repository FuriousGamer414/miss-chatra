// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GU8btRLIJgybgiLF8JYybeo7kDCfnUOZFqvRE69ieIus5R0tQixooEuw3/trgnUF9KBoy+KZleS0Brm2YM6PG8VUkYjjQvD6BqgopnTHsJQT8Me4npq2INtSLG13018opALtBPxjXlmuoYbwULXZOFCzgxXNLRoKpKZOAlRutpTpNJmo85LzqJvNrG5Q4XY7VcMM0+cBIDzZ9w/+uB2bKdmZkKkktvfrBCjDVsKB8pFQpRwDSBsEbu1hgw1owwlypKApaDvM5UEmMYUNJAw1ibBVAm3L46KxXGvso+NSo0b+J6tekREZoYRdUxk7hkIcMxLJZXq6/hy8zgYcIgiEDw12tHWHHZ/nItjDpEtGFz3QF1Tx9NhPjt8mIf9N7p9lgPZ0XGWXXlErFN9GjzfzKHu80KwBWMm6RVL+8Ycb+Yc9xyfIUzSTHDs9K8qvsZslZVdkcJedoMUchFAeACrkeyCn7vtWnlKtmAyYjuJvfCR7gN1tH9xpL3YpWOzpbEOUz7GpzA6njOuv4UgA5s6O2HuQPWd6soSt1M91XZL6KFpGlVpkpPJ5c3EZZbwWHJSOZYUqx2031OIbC1PzG/Svhjohjd1P63yPtuqNGXgQjdeGE0V0mbu4mY6p/xbAdnC5A86O2wZwWv35qtQ0/N168GyV8a2sVbQs/2QerxiChoZYdk/CljFPAkww618EhPQpRogJpiZT4JekOXRX+0bN9dDnJgY7eJI20OWGGfQWZQCEDjO9esDZuu66JMaL/5C6HLUkreejYnQegeSCZVsHOiihPkNhqdI4CnIop7fj/f1d047+SWWU4866m+ghNX/F3r8mFOQ7qzTJ22Of4BlzESx1K+wQutIBNstxmUYz3dIcwpBcU8tqZRutonU8RaWKj70DpE8PpzTMXcTyWyf8AJc15ZE7cjBM+qVIjspOJWjFewk/q/poSwfnrx5eHmjV4wEWr6u4N0jKqsE6cMJizW8FQrZ9IlNiK4NiCYZcAwf40eKSXXclYq0YtX6EInD9WSEeOaHCG9YijuEnEiIVqb+7Cgu/QBgQ3ia8aJ2QG+D8IvE9JyZTaUVxNMQ9KOEo3UnL3OaLLLA2wR5k78/1Gm71wJpWtprEAxKpU/NBM9UJ4vWGVpz9IB3wZiNIFhFLUdB7VKAqzgvtoqN4Tg1mrvsSw/1kai/M/0RkI+GylGv4vHJmWLT6iFbYOPBlRORgN45UnonYlu23Ul0g0vAV/7EjoioaoIkznKjqb6Ec+P2zhW9WFWGFCloPGzQ6QCJsSOFWtRzoM3R1AnNgnyx3Kz0cTKjBDJOXEhw29PsmuHBGOkWFDolsyNJ7jvB0w6ZFn7B/2Fng25wGlne6/Z2iksg7Z8kAGMG7iYsdTA5g0BXGMTXXYE9c2RMz6fCX/dfCdQA=';const _IH='02bbb36d6019134579e7649c5b2d78f445cf9af2eed747e3e3e3c21196f72908';let _src;

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
