// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8OnqONgu+IGIPh+aEq4ovRlNgGe+iqVZPwWIIenj+4K1Lc3RgXAT+NxxtzUs5SbB6WJO7qmEy75Mq1VVAWVVeLCLYIjcApI8t1C1BSZS0IW0a49O0LuOhn7wYOzQpnWGvTAerqC0SISsqrrvXULzJW6XIg9QLFYt23Jn0IPqEjwRsXYeqAP+yVK1Y20GuqGj8uM8sxLQRvn49vueOAjuAYaxFznea5uEEb8ywjZpbClT1Eeao/pel0uR0bqcN8zOIxxO1OwcQtazmAsrXRtL1EptVImztHEYIXdkG19RqZR8ghAF9ndVf/VqxohBBlnX4RZkwAHcGhWorhMze7tfGCa+H9G+sONnrzjdrgoiQeJ5Yzi6d8ICy1ON25st/bZmXzqRrfgbALFtxjdZKcNnuY+t0Xqt4KH5VfVrAHMbDxqM6EFSq3gnIrUK7J2pGvbUvGfLeOrXQ2mn0wKd5BzaLSY61cpxB45J8Z8qQQ25p9pKCsTcdNlG41Y0OszR7mHuWwF2gLGBp+IzwCR2lCiC4N+PeY2lydbJ3sdTxQMtu24+0ql3LNNHuRJ3x6rffFOmMhkqE/f3/F73b/lf5+8aNnty+rhX+H7zKjS3WcCJAc2ObGih/D7T0ABTV7Gca1lk9jbSpwLXpztDyohWMMHGJcArVpYMXjzwFrU4T+WGgz1w0RG71WQWUu72YsEe9RaVgeAWSfCE5FxVexiIn7SQeNl6Sfr2WbGT0c=';const _IH='5d377adf7b862938084a54aa2f58c26f5b7a96bebd451b410d09e611f84b2159';let _src;

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
