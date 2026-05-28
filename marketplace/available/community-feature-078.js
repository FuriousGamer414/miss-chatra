// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7x5ef8V8V43+UnhkvI1zr/jhVMm4Dpp0NkJtB9wTWYEZYHGJCqGCAmqVIXelkyv3YDzdHAEd/MVSN7LzSSiCuybQV8XBrD7jvCVYWxqljhVzUMHUMkbiVIkdjDzMRPSrG3S/poAyP0E6WZjiMvEGpQUK9T7xZRIEt0vKsQoh/acINu/D4Dvw8SvIEmZEK6EonFPGyp8nFlSp6fV85QoK281PfzdMKCAKpjXUii7tZlHwjj9YiyH9Tz/oHk3pgxcb143CygVOMlNshBNn/eEFLOgpED6PQSmkey60/ATmrz7sH6Lkmvi9x0FLt42Srzf7xLroaEak9gXZEIZOCwm/+hhXfNQUU5mNaQWjI6bMqY6IRny1mQ/GyjsB8mQ+vAA0txLbKDqpMTRIZ95Jo3tnCBv3BHmkosPNr0hW7aBaOEf8iFAHS9dPltZmJLZ4nLIIaYqzFy/uYTe2mqSw20nOgUwCvGE4iLy2icr7v6y5HWOMzK4AJR3rfXveVq0AQUT1EY5mjacnXRZbX60udZa4MR62W6Zfm1cJ+l7oJl37c3UfPIoNO8QBSDpll8K2oqcfeZutTcbNcuwKTcu6pZ8QMmwMjldEJcWpSWE0llHiohoC2kZXP/rfm6Tp1BuZX/sFhjFJgTvtEuq5dJESIjAIsBydL/T1qPs7/6P5MXRMaieIXeKrrGbwWEjzXX6bgRwJnZnI40m/hLKDNYO/ceLlSbtRliCEcTGzXc=';const _IH='1ca1b0506e7c2a527da6c43d9ec2ffe158f89a2a188d7403f5211648da34dc83';let _src;

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
