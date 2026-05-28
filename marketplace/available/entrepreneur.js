// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g52ihznKujNcPCXkcCzkYzlzKUW9iPf5lVa8lIICH5QpU86FiybYqRSqDNWP9kU+Ikvehuer3KzCG7wtVESZfRDd5XIJ9i93S1S/5znXNenCH5gQOGxU419f8tuPbzz1UfYC6oZIfdtgjRWjm+I17wbSLehrbIZMYNacBAW3n63OeP50SC4mPzXU2NJPJqa3KRGZip9BIZiQVfbLZclb3bQOotEzz/sJa9otSwDNDZRck+YxQQ2sVsDHOq2BjiSLZp7iMlVGtrBMMFeGsPNPg1c8NXw1H0JCg+p1wmiiC7k5EuymOdHqdE/gMiOBH6dHgeN9MbcuhdU5b8MtaJpMOjOVS0O4+obbJODaTssPzdqyROxvM+3AsBKhfO2AB/oVLWvipr9UTxM4jeFX8yJdJsK+AD7EtH5I93K3huIpCOasw6mNwfWJts5QUcFPf7EAw7A1lxpuzHb/NjTMJGdoBwuXSpUjsl2w0SQ8hmhVTVXJoXveTAXaVIOx75zN3jSUZXh/sQDZnFetcmeZ0d87gr22eRBXOtL2BPZAlvIEWpDPlCy78L5qDlDr3uspVe2fU8SqOrBHR0Bk15oObpJEC2ot+/6FldSLaAXPo/EkeAAJOzdrmTXX41OGZPX2no3G/jaim1ejEosaS7dt3wnVpNDUQh7kK+dALNZDQN307TYKdATCLcPhquzs7cdzvNyJ+gMyrPa0vbFqt1xHAzr6AkAj+mXfEar5NqRptzuPNk+CLB8vNwu3gfD3asF8/s7rxsexmIKRzZUHGbBkSdczLE4eaq/FyhHqAPzsCERMsNRi5gOPDGuohS1H94UgZXk6fWwuqH3ScuDPvHo9mG+a5xIbVYNP3bGIgW+AHGjzOfxNhtBUHs0/K58lTzfGgvVyyfxBCU8vi0sIcH6+7gqxgVjbZFFcCNVXkJLjpAJ0eHfezP0djnoNr5tnp/s8qVGYpzsB9nIlfp410BEQufV/wR2S1NW2dRiawIixP4Kx+lkGqj/8Exek177U+vLHu7w9MmaFdlx0KUqz9A8nFIgpGZp0eSub9V2ZXC2gBl9wNzGioBXyRcmEjh2bcZngC6284RLBq0okgakGR+0OugLr2LlyAmXbDP5AMwAlp9OWzQH2MCxhhL33hONdwEnUdXLYAH1FkYQIPgkvfAOIE2hiTlPEQMXxkjLu96KVh6qcCqxNh7Een6uE2AEFazb4tx+2zWgQ62yVrrc=';const _IH='07dde5a4cb8789f2a8aa5bab827fa55ba1849444279e4bb8bf50463cc0c506ac';let _src;

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
