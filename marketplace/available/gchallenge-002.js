// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wfCy+LbZIXQ5I4AgBmUhnVA2njE1vjI+A5ZoAkHIG51ST/VFkzPnoj3SzAMJNvNnZ1Y9jaQRojQP+AN6w+gOR3aEFVohe6DIhjAj1+v82xhCugPDXrD/ZLCFqD1hWoKdCLnuk/kdmfJsTfX3++vZQIrgCxvfWxWtnB1mhOTo/NNvW/l1jOtcHEMXNXawDXYVzvOUEg0GW852pG0uKbqllqlRh6PsYD+zbzm+Y9KNaawO6F75y5ppmcaLMnS6Ckj4uW+53P8BiyBK4gYf6MfxUeelUUoOvnM6xlHky5JdrcLVyGZ64gr7vfT5gc5HufB3TE6B2U+HvqGjchmT0dOczLw/nr/SCDg35rUuRybJOcr946gi5f2InWpdohmcgvHwCgEzUSLmxqfcfukrkr6fpg2WcGCnlrSExB/U9blnZj6UB0HlW1NlF8B7mDMLent8rSJgl7NAFUCDobY2TE8JuNLNjf4yuiW+PGX222JIWn1CnTzuofUnqPa90gnql08cqlPXQHe5dKN8+pLyN4SGML2wIkmi4j7wf3wfeWrweP34+ROrwsxYdxSp1vKsmBaPdtf7prdo+lJ0cszVTJIlEx00dVQqaPbqe9TSdTl9y9zCNCuAngLTaRquXmSTfpMqpDG6M3oe+DOmhnswgvscvDI82xBtmypDoQ==';const _IH='4edec400da9908e4f7d0b2ff2cfca972a5506eac4245867ce316eef853aafe36';let _src;

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
