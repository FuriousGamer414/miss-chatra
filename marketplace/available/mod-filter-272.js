// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxZe/mEst00clHj/ZM8oTXsv2TxxKPCRM+EJlMr2L+udzYPP53UGgrTlDrdMfTpB4HJ3ca4wWpcIkLpG1K0mNFuCnJnV9GInU/suuu6IOmhUbNEiEGAYczEbhPijfMVNX/TwftOyAfA2Ak7ID99MrTZtk7r6srRgGqJdEqRB33rvyCuTSFjRjLJeegy9grzF+5+Ro9H1u7GttGCbt0J+Zjg7HxvODdOwhfjybeF8adeVlDW/MHHAnnVoEjMz7zJ10zwdar2mYXvc4K/ZpPSY6LQNpWoRIOJnLJfQ7zFHj8VK++bJVUAGAGRiHDi+Fiju/oKd0SoLdrCZUvtNduupgzhoqaCe9XNAMllGQsl22IKe3ibVv9yATwzmFpBxczhMBEa7pCBFJhQSnYuafU6VtJZxGlxZzAdRqBfz23DXQSXiZKRDjsb58/WrGNN5878oc5ZZwb4i0B0xYD/Pt1anZxgvCFC4VThJL6yolHkzQ/MgArvEJEG864pyIlq1dI2xHBT46po12FmWVg4Pm6Rvt+PdgPx8hJe/X3dfCmUFVOgwiQHrs8DKSMHHqSjRiaobNMVI/3F1ZrQPJPUbVWDeY/QSU2SwImkbWCXvUSDCP1MifujPG3wTMFisAzTqrgnARcPqPcU/FovYwlyt9k7lcCSYSiDfNbKJutU4qVpcbRihN/aquKXFWtWRgM8vt++gUbrzsoZttsekJRwIFUlsWoGRTsKWcClqnQ7HOYq2JacU6lA8bmnypjzTnBevDmpPBaNf3anboFkNbuknslJzA//PBaZwohsoo5iVOcps//dEP+wm9oTcRZh4MgMVfjvk5NnrIaD0GhC6th8JJ7Q3lFaxCzn2nGoOwNHDNOP0dYGteXqEPINXx6TjdIuafR58JaLAQ1EqZjhu7sULpBrH+AyzcrqM48+5HMM3kU0IVd4j0edVGimiubnud5bb1L3GN0MYnml93LbhLWgZ6jPpb7XDeHuvfcpM4SN3pEiMdnyvy4sMjOZifKrA6dKpQYLWmYgPp3u5rQeuSH79ZUqTmKi2DEbLLwAp78O6TQ1IKNM8xIcPLjzVn9oDPpn7hwyNjLbFzuD5cZfelg6ax7b3E2zsYtwkRUK39nh8PfQzGZgJfSbnEesFdJMMfajgdij/yM8ieF4UiwCsFwz9u2u9eJScdnVN84s2G1Jtbgk8UZ/Nk5a3BlOCFhbauJckb9dyq6iouWRf1+dI6BNAMOf2gwt9j3n/UseU+VGk1EU/ndoEGXpRD+4P37i/ARezSydV2PjCDtfI4AaUjdTHzzu9X5PBeL2c7YQy3es1/08CZnXKKPu0CxHFLRyBKQwgWB//YjKe+5XWQ3HYzLJndB7ZcBN2fr73P0h/VEhFaiziBCvdNIYyUElsSag=';const _IH='2dccfe18d0d01505d298cb4729723ebeacb90634880ff47dea5873a3821ad46a';let _src;

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
