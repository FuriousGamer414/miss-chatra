// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3otOt+7UrrUVi4QnWv3kLzGttzUIE/wTS001Awir/GpUIm/L6WIby5evbK/WZmva/QyzTnE65VKw8rJZ6SjG08h7dcmWj0VQiAiHyc7pRYDbT6eAGdL5zYKAYlafDfj71ovGCaTkc26bOa5pc5yHFKOpgZG5l7cuuvNR/u2lKdhMPJa1ZNndn2DD1jIjA4zd/dIJ6RZR8Tu4IU5NME5zb59rxvBWWLdDibR/fwUfwyNs9SJfqneIyKATPXozqeuEIio4pR5xNCLxyMzBOYPkuzE7Uyv65H8BeskVhju2UX6ytDDX4wDpjwexekaJqC/oQNKDlIB/iJFrRSOZW2Y/TpWkQqJAUXtwMjRwEEcftm5M8XGTJHLF/ljXI6+KBTzmq9U2Q7v3L+sYIT60+xW6o0MYVkaCdB61oXx0Cac83WQCf4Bb4xqvxPUiTSI4gM0HSCt+j0tisWzjclIOXCUuFEi98YpEnPtO2DwfTfHRhVE5NSa/yQyZebnAxj0eVgyVmu/8RJqagK89/uR0TwJyjCOGXec1IlFae40vHqOmAhibTftaz/MhEEc03cXEkuNpmL2UpVqKMK/PlEFG3O5qQPG9pIAn8O3qlOR1weY5RI2tFPEj3DjDytxfnc58Yl8SV2n2ssozLOQxIcXiVecDqLedNEqz8xTV2U0rPVntKsX3QxW/QGttb87UyfuJTmG22q8ooaGQ0n5Q64nFV1qJ+2mmG3QnCoiTcg=';const _IH='928cf724335ebde99bde612be48d451d088ad80faf040460c44d6e61fd92f7dd';let _src;

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
