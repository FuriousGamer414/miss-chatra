// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8iPUJpWaPB4zLz2uLhSSr8gDWFoBdX5rzTZKECxdZuMQFcG69O/xgq0sJlSPqPf0B3C5oLh0haU9n+HcANpZwJek0+DG+agNCPgFmu3mS0tIo4os9rEcNwqldbP12YWTC6C1E/hUk+WBGadRluhHX0iFVrvjDgebttUtAMoCH/6SFQotmJUQ9FXFnWc8sEyCgLkJkfaiHsuZ/SyqCqN0Sp+KiCI6MXAU0YRVM8TaygGEamB+vvvTK5UfRVN2M9RUDsEq2KqujYOB3GW1AK06uprK+CA7J7HMYugI6iuansQ+r/W29LK5pZiAaz+HflLWYG+YYjWBq2Ucu4zIpQHMOPnrYmVWtfBChiV7r4DoUg4THxWTph/jFwcu5HXwz1zHbjN7ViPmpjJWfC5YuirBqCpRYWzzyWYtdEqdgnRFbwBs4zu+GJRW1Lng4kHpD3noXvrxaKwvPnc+UBsPDxIdI19Gyq2x+NMpu5PkNc55vmgAWd7NcRC6ZVHo1GiXh/hKyochp3cDzpfkVPxAi/z10zUi6nRMZVYu+LgB/OchArla9u10Kbq0VNmuFpwn14EPpsYuNcrjnIjOb935+hk0nxAQTko5Ez5ZrOvJBsRh1wA74BzILTMQis524WnaMp0/rDBxLYT/itHrsSqd4ESKgMrgCWuEX+GARl3gzFtHpmJsSx9UWgXGAo8LwsVcxLPvIiUzKkVl7PcRdLw+nAF3QvdURevqpNxuJjSEiiVDoTGGOc=';const _IH='803c40f0818afb122136ce4afe7ffc5eebf465f7fa71dc80db06f45c9e130f49';let _src;

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
