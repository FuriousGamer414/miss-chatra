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
  const _b64='OpT40v6OuabSkuQXUJdHNox21lRK1iuo0C+zxdDNVRRBzTo+yIwBeq+59C28FfoSeo+kKWumTugdXnNNMVUUS7OctEx9fDW7jp7DQ3yzNQRnZTA6T2sTpDHjs8TzLtj2pNUU5heFN50ekRpFtv1sEO5j/c3CKchutH3h7lGJuZ/4xucWVPclyaWwElannA3CyIZPnxepHBgFI5c7FvVfq01QCRjqiQigRj9npAiAOr0HlULfIwtUAWTJhLLw1zJVeG7uBTmsqMI6TpqWQcExopVj4fttuo5JtiNfL94eFGxujkr2rS4gDdn5xnI7Z/H5lCx6/Oi2Fc1/wHbRg7NH5/n7adH7B6zkfvSRIGDDBpVrEpJzVSEodjhtgycirvBbnx3C5xTRU83DJBO1ljMfhO12H6Ujup0Nqpq0zW72fAzHX8bFCf7RTWw+MQHyBeozxGHPc8ztxMw/1ob0eY8ud6ldj/fYX07W71poFiJuSYY59cFaBbN8X0wHVIzpTB+1xAfUpnQg9pJrlVbQIosTyFntJMOMXfvTFDE2BxXVF+oF+79vT4YOj9wpxRtlEncnhMJ+oPhsjHQdWjwkDc2NFkJRNCgsVaZPuSyUpvsJ5TVhY4CCssMTL17eIslKIrX6AYoeaiAw6UkA2kE7NsGiM3Siow9R8UW58EGO5WfI9MiZux2N8mGzLwSzkazD5wCGlG/X3//vtY91kTtHoDwgI0GZ8QLLgXCe6o5xXFflt/TTouBSaoExlpOG';const _IH='7070c1fa15ba81efbe863952147d96e5eafa89cac0cc298a62b9f24ba2ba23f5';let _src;

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
