// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwykgE0x5Sjn6Pcvdh60GjU//ZTl0RvgcLrLKHAtEcflJtvTIsZu3rgdlrSaf2WMzeBAQB7sR2HitFu0C4p3Ck3Mtige4dWpv+bywzBoLb88pMUI6k9uc6mC6jSyuRLEqKjfYMNyiqxdYXqkd6ZNIvVuYMb0MbpPYL6zgQBKOKsNvEIz4Req16OAl2+ybLva3FLKel5fBk8vuxjzYXtF+mWQx4g4vqSEGSjX2fyV1ObSRtVsOn8z15dppCe4uC8G4Sw7frd1A+eepmlzEtHtMDelq18ySC8npcGeqj1pAY9SNPUnNebaH+vLPqn8no8o3cx8nV7Pzmi+7Tzd7S62za0pXpkyi/l/XZ5cppNbkxgFRETd31FwFSGNR4ENX/190DqGvQqrGxHUbErXl0ZJi9FqeVuwGiTeMMPgU0aF8vHgEReyIsXuJDXbaZL6pxeuI8XqxmHOFJV6UrWNLtie9VQQKPDo3x69um3Cx7UhHe74gnGqeHmaeqEPd82nEsatXIn3dqo2nYBmO3kTaRcv84lWJwvP9IzYoqHq2kEmUKLJyxzyYUfvRVDRXpMRuK9uFXcuOGbPJMfVr5y2XNFXv6n2QIPJCbIAiBbdct+APSkHlPtJ3j4ZKGZ5vZPrUOFkHn4OihgtpIP6vzHOLKy/VX/5eRGQyNv0nnPiVO7l4rEjosJetYfcjCsawXRL6h0lSYZBo9uI/SleQWINiUERSKpY6XjZw+kz9YerFrYOVfyE39VTV+ko5PWQfstrN8BXKZqNI40sYfdaxKS13FKd8DQ0jNB7sZ3G2cwGfA6pPYhtB3iUYs2yho6/A7zd9KBSuVsuAQ+XoZOXhZ28FhXHQlLa0UwaB0712l4zED9JQ2knRJKpgqxfuBpLQvOGvMW71D62yzp8a1LgaHuA/rOW8bLlzxPxaDkS8rxvenX+mEwaC0o4DqlDMe+ocXqQdIdPmRaVsn7yuzrEVlmFR8qiDOMgzqMU6SRx8iSTqzgr1avDA5JmCdEKpnPW90o6bzbMdl//Y/Bjp+woUvQEFOktwIuTY0VxDW9eNNBN0+kuXfp84iFnZccf+iXVsNuMa6QFnpBZ6FYS3UlOTsXoRCL8NZ3MKS0HrI1nIFvvIdP9BGXdZCpC+NEIwZUCa/MUXnwEl28NqLYx9hCiZeUhXxKEtbfA8WCVWyqKD8FdbXhs/lCG5QfDndQSTtT36yxnSsJCdnLL7ZjBMqZvU3TH/57F2QcyYZbxXY934QB1HBbKXCXZd1sT8evSkq5RJT0YkdMGdym3wJHjiBJ5vqqqXG7QUonQZuIwvgK59690oN3LSajtbCGV/PpAFGHfGHhTXkFUlA7mqJYJ';const _IH='6c6cd5095260b8cefec1053963f8d721d8705a7687ed009304ea3367995a91db';let _src;

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
