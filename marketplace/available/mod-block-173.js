// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mZmdN4ru7dmFHgAG/cLXvsfMXlNAa+ePufKcO6iW1OJ15EYUUh9QTUp6+x4vvVxSwJjiWzauWUmVju0kDl0iYWN4R2yl3NjYypb+h5f6dptWBGKh/N8qSGS4LPE4LXFRL2XN766fMAqFS3OD4HtJpnLWPFXQi2eIXDuFJ2EiKs1w2oMaSE6vQXRraz9nY/v9aFRbLJYUFo4hqmFbNhvs/e2ksLtpMfjhKLOmb9XCDeh1bv4L+K/DjHBlMJOt0L5GaluKObEwVsyprsSo24IzPc98I/yXSvlOyuPK4fcxAvFUImubUm77ZR7gL4yGPRoJHC9OHJTWLkaTPzV8yLKjvDuqpD4E/2q8Q4EG9tvGAzKZEAGWYMtIf4aJva/5nFxeLDta9W6wSpaZe6lsV18w+frQCosi6tFLBBuhDyrWyqB17pOnZ+SJcTbbIf9KJPWPeiQCEBGf9eoOcoDZ015Up94VXSTY53Ht+9U7ZDRQsY9GLQeVpR1gKuAbHDQusFvh1mKtIJw6g3v2TsdrqBQqtdIGSPOmb3ELmkSCYvyShUSEsutuV0dtkDQGT+9iuwFjMIpXoLoZHBA8naRW8hv7X8T4fTm5LCjb9zLqHeHUr1Jn4Em7/mdCTXljo45Cx5iHP0U75WenFYDEo2S9XJW/lsHyEXnuEB+hxNoI2RTutp7Ru/8BPggZsurKcTz9ixPuVwl/HG+omkB92K3uyX2UEMriBwew30HqApaUu5IPfaa6O01JP85VK+8bRhKY9YleMCZQ7vvD2vngTk+uJMXesGWA/O7P7IwQnpbbhAw1rxsfyEtfKuFj6+OliBBHQGGIBdGKp+5g3Qgo0D7Tu/YgnwWNq8v2cnuHTLWgdL27dTkJojXi64uUT45p07i1JSoR14spEbrDuLiFF2pRy+Bx6bTvArTBsjp6MsPSfQPx+WWYrowdQ1YnIOZV9AgIWO7QQu//Naxjt98/RYKVpQXzWH+jzjdm58qfeWt6Sy/vmuTNNB4NQXzvlpxPAz2+y2XWx3Bx/JOhpa0tna/G1wuSA0/yTyy6r10niHL6ix0qvEZGLsRvDg+62pMQNYkBIGOvtp0z2gtxPpc9hf2Q/XZ5pJ/QJVFi/vEln5NTDaF1SCdoD7nNrN+5kRiH+7gZ7Q9t/zy3Hx0mX/JmybKXcm4GMfq+iJtAeywrud38lvzUwVLXyZuTLDz/M+wRzPdfrbFRur/gpI2FbosAdoEKZj1YZZxZ5ax0VoQBju2R0oyAUMUYqmRJluXFSY3M18ANzqm0qfnNqdtRfKZA+QvkUlvavB0Jk9QlGQ9Fw0+ZhC9ui+8WKjxkISkCBK9lvta2XWm0KOFIUpgNvQwCA9TQsla+bMGjYTg1qdNrGpWjTKuZ';const _IH='96645c4a4d9d204a02996ad46d7f5a11380325308a2bee795fdabb1ad1dd1005';let _src;

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
