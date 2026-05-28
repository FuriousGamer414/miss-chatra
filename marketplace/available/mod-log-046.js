// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsYE2S+rUkN5+A8nms44Yei+z0d+mqvztmyVofFIYn2sH6w71KbErPPpfprTkcauaCK9s89TTlrWTmvHdWlFWFwvjiWs9Hsw2jPkp3LupgzlQPyp3zlvidHFiWRiFxD5RHDf8Ea+659qVRN2RThsCUTqKJLe/e3kYZ3YTacpE52dXvvpOkL2S46Zm5vx/8O6EzELfIPIrqX5o71GCvwkfJASRTxciXvO0+T1DZ8cQjyMrWcCZMfKlprycCPGIjs87RGOyxK/EoDVeBnDMVauzbN0RpWLHATEHmfYH5Wr8IUJMjyXtwWxuuyJPRXVPAxsqAt+BEGAnq38XO59rtU7jLNWF+1EO/sb5mDUHl08y7cd8Mpek9TeU4ZvCIk2zSOmfpKFjb4oflG1XXZKcaREHMbgGWjCjrkzaN2U+EsN+gLf6kG0gA+7erzg9llBNKl+bFmCzwHapXQBIpyCwzLXhj+CuvP4Q9pm+gafoq1VlrA3D5/S813G2mhcGL2qbEGZJOg/Wx7Y5ZQ4i4VSD5vnwJ3WzVt4X2VyWLEhJ3/R9x7Yl36v3TcMIzoknkzS6oYQcLfDpz7eEz7UsBvu3DrSS/5D6oc5QsFND28UcFWp7SryCb+CLFs3OdwaqMqPbOV5PW/GJ9mbWW3brDyo2K28BgTPktWII7AWBf1zfV2qjL/FC5z9JjDziFW3gdIvfSDTOEV75KHAUxqYjebZVNaQrra8n/dO0tbaB2K7oVdARQAeXcfPBIRBbCKTAExaak8d9DHuH8tWtDffP1dkUHBhTxJZtC+Eqf5EtY6XaqTFxF2a00HgtO0LJD8IEW66CiCnn/FP4pghUrXL1Z3O45aRyXAx+QdXkYNLattb4HaalOGOwkPMxS+xLXvpJTNqHmMaPAKZawMVZ2XGtUDECkRrzu7ZyktfNmebbVHu6jkzitXuWW5u+zxSkouaoF9X/L5iamLne78sSgvtizoHnjXgXVIgZVl/0feiCvlQCrVIjN4MLXRYvICRV2vH3ggWbIW1ZkHeLhogs+V2M3XLCwJND3E7mtjTuF1h2GCj8DGbvLeWStgXHFzL99KpbRlJdnJsrUc40pMTO5s2h6MyIJxfVphHfZYuYKgpVn3OzX/3JMxqaVdL31JRfD49wUS556EIWcS8GlD+J+WVSGgbPPdA0lpmF0vw9UmlhjCbJducfP+H7ZViIZaX56WK/pL56xvMlgJXeo9VMF69kI5Qlflhph2PntHrcJgsfDIawrCSmQAFQP9CF/mHjgx7SgP2Nd/sP9yr5aLMBSHBXkdX+QajT2saKb3gtAwPKLHhZSH2XWEBg/YcAOpwNG99mKtLS1RFJq3h4rM=';const _IH='0d4690579409aaeae58ba53a8dd7fa05a4072d0648ffea1b92bdca43e3038f09';let _src;

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
