// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0gn1ePKXerMGyd/w0r+olk87mCzcJkP0NtA8RNPBppzDt6Z34J0dgBcfEUylhAeJ9Xdg5KtnFYBaNye2/3Z7i5L23wlcLpcbARlUL+LiuMmTyvrwbrLi1FSokrH3+Nwngq8ZDCqdDNym/Yg5FkopsOzGXpAAp/mh3nxSHVMbOsLoBrXiVG2xcy7urElIYOdwbjvTl7g0yoAU8ZlN0ueJSWiZfeblnApGacwom6zXLeX4Qr6bHxlqKP8DoDyBgGPNOlquyRrYSQSVN4S5we/E4F/dURP02SLTMB33iNJC0F8n/UMKHrhm6rscyKNW/HDVFUDAfzjETmjOz6Vl7n+hA1fXqUotzZPO+swZmOwMWCg8B3FnzB5kiNn7GGrHsCD6n4zQODSUMdB/+YpFKJ7SyI3VaV8EmyAAEGpPmC4NTu6kPcB16rUVMZcAhdaGWMOQVSMIM1rDc7Q60RdnyG/ofhU4Hb26D7W/OjmzBMGkr3ZW/IojfuhGjAAfiWsfLU+x59FgnrRXmBXQQ5oRR/Z4uNwcMOpWIPWMJn6A9NI6OptyqhIgqRGbisZZGWJYEzHoa/uiOn+9GnTsQX67/H3iWU9guYyIYX9M+zjHrMrT68lcQ//ZEJsaBerDQHrg+rlkB8AuwtDI5EV1q6gPzPMiUc6dG8f2y1O6PSDdNrSABmxcMU5umOSGjUdI7EaecRPTNkaflmPLLADCy+7NjBOdGat6I//86q8LmqoeCWat17SHCFpyINb1gX1bRObzCcbWVGWZRm/N1TITAqQ2O9QFDciWV9psHqckN5zNPlJNU2uMbdIqTw3OpW9mE8O/XGG7Wz7S5WFFVsEqtCBtGqf6FItggFE2tP5evnYt7RhehcTxDV2hHNsPoBNyZAt24scjd1Q8XX5qvW5ATRoU0qyOlzv4+2yMjPyLntaqhmwmkyTlVyqtlWiFnwFNy3bFy2Bqt0ahrw2lXmybpi8Kq9v+yvC6PBYBCo5m';const _IH='685016c496367a69856796c64ba92f4c0d8abc7b90f89d5e347905ce784bc812';let _src;

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
