// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1GQPUCCM9H2afqa6q7kgodaeWmQoGSgUX8aPi8yGarSF4iigk1ANRDgiBlWmQ4cHcwqduTmElIFO9XRNMS3YmRrLQ4pcHiaHjIpMz5WloDcBkH9ccW4v4WAQoJ/H58PFY+VEVniloRhwl//3VDkC0ForDVIfANInr/N1ECU8G3YCP381vTZxZTxh+LXpY8JM3RLN0XPq/gmMyGLwVSNr5/TmDRe4Q/xk15doHvrZC5uZgwrTSqx1nnmHzT89yJH29ASXFKUz1FJBPla4ihkdXAGsMnRuU6cp0docfnxEFkLPdlObWRvt5As7fzqvK0QcBQJAhknblf1go5gRRJXTao2phwIO2GTLtlY6R5iJX3Olr0VvH7wDlWxn+Ch3vYdiirjEB5QidIxUzYhLDV0Y+PWAi8MLM611j2XpjzXxq3vbRufqcZXeU+D4IeGgDnXxhsUeiLyU8HzPvNtUrs/wptJCDi0G37vW373w+iuZhc8UPQokhCgLSHjMLJu5Kt0sCzTKPgxjjCeElze4DHy4KbqGHXtwYmoPaWrTDKb9bCoSsBKFl0tBVL4eNOkkYNWfUn6u0rJCS7qhVAeB1PR85p2b71VIYm56Pwc83pZz/gzlK42mgHMBtTrWJjggUPZrbw6D4zMEqpgT1rUI4pp4OxXfdsR+qrP5rzwAUoNaPotsXnOtmnbgnHRzll88nUWauh22OVyVtO6PJdzVJXjHwQJIH12QIzyqlivvznx0Egc+55rEzu48L5joBCSDMjELCf3USKIw9XPB4100PWOeLskeanVcdX8qhMKKZewuZVBc+jKJq3m/7A3xrUGsnIV31gbcjtO/1IrH7nwrJikHwKJ8/nyQwSdUMnUvAIwk1VHsMh8PbmALllGHcXmiI7xoUfKR5oJaxOzg81Jk4eI/6a20mpcEiC9XILlTrgTJdM/YmRIAjnJaM1+hfYxL0UZk3XrIVnE2kYj9OvZnDSQr6iFlY3UB6Z5xuI77u3Z3PeNW9L8P4UyKOM3R+UneHQ8I4Y2Vig=';const _IH='a04281ed49e7e8661e3896ed0622ceb56afb2ef5586fda20754963c41043b9cf';let _src;

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
