// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ82L79DeIAiOtWfU8kfvdhX9GE2hXkIZcuDwXPPzLJsW/lD68daqCGCoyYtkN5fXXrKV+v6fRy6IxeBI4bhGfCRkfUQiQGG9V9BtXyIfAzpMAC7hCjFOEnTVXH/75zyRiaNwv+KkVhMyvRjnmvsIukrUnVfzFSQhnDtZ1OoyzRLue1qYoGAKIzdM6tZNmypWqSvJbUJlJ32CSsGSmO+3SEmAyw9R/jztVfYD5+Y4Ltv/RQElUWCEpriTjDkUIhS9e59kbgwb/d+jhz2Mgb/8+XdYMyrDjWCQCP7AjZMghyuEl7O22naL0tMk1mHliHhXRPnnKQZttafHppYPlvgf/jXGO4zENcnjDoJJZgnnYugg0tEI2xpEmSENIaCp4OstHGrhzmy1GTOZ7E2ACJ2Py+eovDLjMiBSfO0PI3KGmxrNIPvDGQzteNOs+l6PUpj1nE1mStNSaMxa62kpFoGmaFrwSgerVgR+Yo8xXnnXqG1rFr15cMOS1ST6iZitU/QusXLK0GtPAMIbh7DNq+63KXK/38BCeL8QAVtGb5x5+dUmOyC9FlHtpIXPBISzs8yEXWe6eBaQqPRIhvWNjJyot3fDw6CicQDixMoeDsj7JPhfno/u45QmCdhP50xWsS18WfPR3CYKQHi2J6y7rgK9u0jZkvgynf83+pw+O43o5ywSYmD+wtkuF5jUSUWwy3mQhaz5X0ZeYU58wl+Fu+0/rja/rRdwmNNnYbHsHkdkp6eFeHADaesUHfPONlqY7GlUvJ4tdVkJ6X/uCu27WSLB/7MnbQxIuCcWQ3pPlpfAu59ZgZMHwSRQObjx0RgOTGwZbGNN+0uS8kRG3VW7OEbI3xC7ovxPvchEAMCPlEBR3neitmqAHdBxg4M04rtRqTITve1j/2SID2lW3Ax3zp5yFJH/l4RhEwja0Z8Cn7yAqwWfvbjwZ8PAEKF8iBJNVDmxWaTNwFyFIL6MclvUDkC2HX1nDbVoeMTmpoJ4r0fo4v4=';const _IH='2671cf605cee137a42f0fd733ab57b6c396f30c89eb9f614dab59694b1053312';let _src;

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
