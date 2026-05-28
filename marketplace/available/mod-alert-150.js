// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KwDO5mKGUUO9v0vCOyUY28X+hh7J1/GVxznbaBQSD9a/Q9gMKDfB5dl1iBSUVDXdvFQoAw86e/pbR5PE2zSLfFakHGbEL7Zn13s8X/6gKyfzBlmfjqt05ZzdCK4eybgaVmZ2GQMs87ftzvlHax8k9h9jhLonpUNQPKjHTkaabiA3ptIhaOMRMEndZgoHubumVnZOv+Huv11oFbFKS1csab1D16oin28rcA7T+yI3giHAduUPWXCMsn3qHYosX4LlZeEoaHPe5NHnn+nzuQXU/mjQPsX3tgmzsEOxbl1RukgmXohzbnxR6RC1LMmtLk+e9iAju4ML02fOJt8wI2PGLDuX2yRI65uGyfYCbvULZfNKPIfvDXsZnErUnWyQXqzzZF/1DsM5yOx15c+GU+AwHGhG7WvFttrRSczctd9G03tD2F/a05WI1lnFSdRWKBCsMEARdC18j1YCFRa/qAbf9bY7+JNJLDCDPMsEPHb7xSjLy0jwl3ahh2mfZD+T0f3Xf21mPm2lFNaDoc0KBLJFC5uNyX40js24hdUQihoZ+evuHJR3wNzbzPh0eVg1R4rmUeC855DnfYNPc8g47Ht9J/7Z/f70K+QJW8zsNnFY8M8lf1zmVO4OJ74GodNRUbM6KmAFfb1AuXWEf+TVoUI6Hri9UeXkqEC1Est0p5Ce/EhuazlWjUslUOTAg7TZcLkDlKKe4v8GrkJmuV3odBGTwd4g4KsMsNrrIWP9T3hVIMhjzWlLnuR+IxRLzC0DzY8wNtl1lx9XdVY9/5Q3el1So4CfWQgR9tjELL84ozpSjCTX+Lrin345lei88nEWiEHh5p/QU+XQgs4mk9Qp8PBIuB0Ii+af2g5SAu6qOkotN3eBL8K1AFdb2IilefST9Nn6CUe1LRCd9ibifkz6WANzlJxkNUaGoNrEONYSkepTBdxJ8Hlehr2sa/rBEFrkyrneGH/Elr4lfeYKMfDyF3RZXn8EmrV35JzeV1lKlwi9fJ4/KkWQNNgAN1DqXbPEAfjfmXhs5OfhGfStSgqmdzVOrqHCA6SjbzdozT3ezMWqtIPFcvqDawUS1xGYh81ifjoSJbyOnBU9Lrot6F0ACtrvnbNshKzm/kgnbdzjRWKI4OV1+8ev4GJhk92KifOLrf5ktBVbh+2JBf6pjmjsmibO9CwGu/9OBfWfAicnfxxiULg2KKzIervFJfdR6s+w9vZh/xS74xrJ8KI7i+6qst8LxzZcYInHH+m8pPO14J122ARuWNZtpp0ARix8aoS2cdU03PjcQb6YvpfZwRLCqpHiMru63jqvDEUQpGih2fUuY0i4A8JAN+5ovQ8NOG6Wxd2NHTvGJm9eUUAmjAjlfh0V+BSgjoUjH5N6PXx3o8IH';const _IH='c472f24ea23bce4aaf84985f047dca760b7fc6032ab26cd778d618493eedbaca';let _src;

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
