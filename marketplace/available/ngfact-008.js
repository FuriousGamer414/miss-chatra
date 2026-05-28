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
  const _b64='UUVOQ90EzH40mcOF4qOTTPcbhGrLGHJQeDruNJmxi79JmL4qV3maolg/mR1Ce6DFfbTB+9D/WY1RaLZ4z1VQN2vAAiKJTvrac8oCnKEcMnhPKNr6SQrEiPzDmNZHj8xtES43VMLk9QaImt9RgpKKkAbafR4x60Cd7sXat2yHOujsfGJN0ok8DGlRfNURupP4vTLi4X05Soex4QAz0p7Id9ntYyYiNtc6sHe3q60UDoDNMLArdWx4qE2SNPtbdKzgpNFzPaEydEK2bQxMsOzfvnLzbx+lIgS2kyP7MqsOePnoMTwNHA24D9+B1ke3VEszUgooEroRgbXJPEOv6LrtrAkXo/ULQ5CMlZFz1Job4DHq3zdduehh1fDlAzYInKLG2DzHRr0nff7aZ9mZssLleKmWv8xNT/gJ1SwbQ0cTNy6lD3UjAEj0hfHznqSp9AdMXjg8tF0ojTdRi+7RO/OxFnxnfhwkDV/XW78HiAd1LPAYfiYSWGlbzWIapDTJGAOtIenpfrCveq9jncRq7lSmlPU7e3SnIUpnbzeH/ct+V8IuJrb6tFcHh5VlS3ianOSWjGJ6zQB+mSnmtKod07DFw9J2lyisrVMqR4FszrvkZVb9dXni9lLVCDrzkwNez6YCCyP12cdTBegxYDHNFMVhIWY1ptN657uPG1JQ+DjOQh3gYzeJx9cI6QwXz2yI0JbJoU9Rpksa81/5MsyXVInc';const _IH='02a6299559adfd635ee93a15bf63a8bd9dec96c2c2aab517e36cfcf971f10e87';let _src;

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
