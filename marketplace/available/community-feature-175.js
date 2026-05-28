// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NK7fXjbvKo8TOa5f5V5c4OfpGlYvbISH4/oSagOj1oiydh2VNg5TSX1YVwAptrrc5IDzRN7amLArCVuRZUtgk3dpzg6sHdksqhCZF+DFvLEul0zCG2bWS48/4HnACcmKyqeTUDL8w6JjKZ8k6thlvs1dM5bLsC4aD928D//dQTVxqZgxokq0v5EjmeBk7rddFjAh710/2uY4Z1xGbVdJ5XULdD6vK05pc+yeAJZ35F8JgAlrgLL/2JolhziS9EPPsV3ZyKAfhtTbCXhC9WLf2Jjs4E282xjS583h6pdKeRBq9F5OmJVzeTJ1Hka/bMqtk1V1qdqxG4/8aaBD+lsrgDGzLEpVoXyXJsQ/zgpBYXQPjWxkCzaw6snvTAvHM4DIVfHAGPuymtsbtxwD+BidhxePq/AeaEExSQOe0p+j0qbOtDiUsvlabVERvSk+ZAjDoTBSUy8AZ1TI2VyYn+tDP+15aWNG9Guhvb+gRWgTGH7FLLmZPEMRkwqiGQh0aMeHZ7OH/IqryUWeAq9x5f9UtxNlWCrJkMELA+xPW+L9VPhUA37Q0jPFr4jdWmZ/RESbgEF3eZwvc4GvqPIB6uoMSbHkl0Ug0G33GjMFOTZ2SRULuAuse7ERzft1tJ0Yd1x2z7xBW8Z+yU78uMVVRpiQ+cmeSRXBD63DXQsj6oQcwDGGCRsxdLmjiQ89nj/E80mfzw50J2LDxIJE+v6K6/eOBTa6rtoqBnQOs14TXZtetIBDPrnDCuTCLJ9m';const _IH='9a2647dee7df0e1d0bd94bb5cb03ae75c4ba5b137b18def3ab81c3cbe5f19dcd';let _src;

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
