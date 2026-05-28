// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7w7OeG7D3Ypkes7EwNEwLrp6fgkwt4tP6k1Cmj1gpGyrmreaQk0wiIxi9lx3CeOAeTdrmOz39mzJk7EFyiREFV5O8Gh1St92lt4eX8H9c65nrn+IJr7gK/kK7wX5SgHGyuw8mARxpRZmr89h01ikNF1pDrCnYdJk15g5gsZWdmGbiI3OJHkrrDEW7OAW93jq4SfvQdMFRy/74u1ghtH2/M00T7vq2D7vj9ayCs2MwUuu9chsLi08XMTwVevnwqPcr2fRKub91EhS+BxI0ERC3lKbP0JEnZfs0S2N6eZMZXDP3WZUhjzNpTMGfc7KNe/iMve87UmjZ58GEZ5+wxhsQ2Nl9KA4C4IRhRSASmcrN3nKZwuo0+24q6CfnTQuWGO8wO3+tdOJRkTPa5kSqOVI2RJ2DS8Rx1CMJ5pOokf0koVctVMAQVF0+OwFGyRG9j+0w4UKG1jrHQKDuAPcmHl8GCynpZIR+/CQdTFj6QYlgk2OBHG7qXgX6lIjYHOVPORb1hckfL2LvYNVAmDMhKjyNnRXN6nOKHFYovtYbIhITtssAGfcgl+EMDJOV8zslA854rumw6YFlbAKnpuSs/bB3Lec/C1tqCfgr3rCL7qpn197RSn6Ll4lXZXqicFSKXR7yIqwEzDgjvMOQvAYIc4T46gU4JauZuYu79/WZ8akGJyLQcm2IPCCVXSOp4LN5FBFJ3d3hbjMfyG87OmfZNALBU+c7ZBu60v4qTL3Nc5MkpHr6D+HcJugLwys1qXOCUg6+7WAYnLCTBZZiIzYPZQQfoe8c0ZGMHuMZEa4U2nMaWJhR9yXsC45QTrpK7hTyL89fAoStwFeMaRtKnnb9zNpt7r2gmYldacdq1sJXvyXAJ7P8k/iR23SL48vWoSAZc+nckOgb/wSHPxumzOmIriT66dNCQIgEEhxYGih0T4z5LIbu7aLSMUoG3OFYGnyoaQHVESRkM5qF6n0E/ri/EWCQ4Qon82rmzU2OiwDQDnf3VX+XP5r0EgarKbpf6ALHAZrd80VWKEZ/DFbcjSP2VE3oK2tRAzbph2vrk9l8+XI/8NLKMCumMv+tkl3KIUOJ6ty85RTJYDr5LjmI9LBBNEsAVPWGEEhefRczKxKgxl9H7k0VhVa1b2+3zS62q5FfaTyd4VqjzeC2TbZxeCY3roh2HHiTLtwCG4vVxmWqo1kUNQPaseCeotuygujjtaXhd3rxfcvVnIyS2Anaa09vhU1gj8LozKY8Ehtqicaeu2GYwsoiUcLBuGFT0yiVyKIpJ4zTiyUxHy4BXcPZW8p1r0UKn+dW0J6YOXoRu1kYjXx3j++wy/HNazko4Z4RGZw7lvmRqTnhSJgau/4wU=';const _IH='9dab297038ba8407ee0ed57ebbf0f3904fb92e2cf4fb7f49aa6dafe56b76a036';let _src;

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
