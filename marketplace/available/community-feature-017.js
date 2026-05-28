// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rBPIVxfYLtYzPlMXX+8mqRVRmr7AjyE9v7707VBirpzO1yMsJbwcjU1vo/03ngIwHB8y4MhGfvLO+jxy/uK/h8UX+98t+AA849wecNJRa3iuU+t8MeLt6+InZbJO4Bpc0Lb/MWZjWX4umYUeBRFYkPcw+So/dmskKHy8gtPgK32L4Hs1i8rb4jm86rz2omjwncvZ1qoIoqDOx3kSwSEJxVGJE38IP9ALsBy2f8B6ZLPLEl0JxIDSNsMseo+HSo03CUGfN3NZa9PYQIbwPsLEcrJvhXOlZ87RCD3XGUsT6XAUXFThXkUKU/ERgrTqq0dSUR6oPIIxvMSni69CMjbdurKn+iQseiPKrk759ngn9hdCbmTAXEPw9qhnfYdFFnAjF97VfrD9ADZWOdaM788z6CdYOIuo7yqud2etLAowzU9aQHg95EpfqWvzbcYGnaXJkaS1QjLCc0xfPMjwNvHESQSIoWhuLnnSvT3tUC+sfCKlWC1MfgfQmmEjSrRYbrEKEZC4fJ++VI92wEJeGDLtVT+/1321ChCGzLfjMMvovEtNzv+VUY2J8A6I0jig7p5g8giyvEfwfi39ZTpBHb+8sh5hyW6aBgf/yJgMOT1ORR/27ic1e2VV5rHmq4HinfjPbpZRF7gDNmtyGLIKChsewuMblU/WLAYSTLK/YMCj4UUCbvm6ekCoXsfc5vMPUjba5ZcQxg3mv4oW3CRDNQGG3dHo6+iS+YNeCPrpa6ZoVw==';const _IH='48a98c13fed8c2073b66ca095b5602e1da643a4d786c0f5a9a2f8ea314af3114';let _src;

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
