// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4tjqOD0b8Wqqbf3eYp+VA/3zuSBYiPDunxIXueYdjzIZzXjmW07lnoXApj9pTGEboTusda33hkyzPZVVVVfWMDprs8OojO6/Kyuosxs5zUZYTu3AuoCmEDhMhOG5ABprVH82YLVKJoFSyfahXgB58+z3mVWetFaKFHsF+a4EuMsaaGg8jmiwdihEfDvC/YORxTMMBXD5+zOke2Qgd9uK8wtOLl6vNM4eqNQxBaqyJAHrePxKAfQeKMgeTuWYZGnC2+fR00CSaHzc/FqsGdVUaQXunW4ewCmYnxCyiCdtPvoELCjfrpX3GJqwD6TnqBpzZ9zAaxc3tC3Kgc2LgTgzv384J/saPBdarhWHqgbxInbDbgoesSQ5yWmgRBnBfXiw4vw26oo5JuclD3kZkISzBVAc+Pm9fXQeryhptCHyTN4VV1+oqsuLkrGQFkC3MlzIVBgjLEQcRTQjreSV3k3zPdZJ+3PbGld6VIr5vaeswB264F0IuDOwBDPz088CGGo2mwCuHesw7K6i1OFylxVIcbpOFnUha5u58KzPC+sHQFNa5X2xK42Z/YCtfRqYRfnj6kX18zBmyDylT5qvFJoqp1+3YPIoZdnsYORb4rxYijbi1yfKbViJoxTEjtmqEaN/w44hsFRqDmIHJjotfAcUj53VHxqPG12otIS7EASV2prQYTo7SqeOhjFa0MykaE+Uwuaxxl/WKQxsxYgR1ZTHNPAPpqd49Ze';const _IH='1c8e6cc1aed3bdc82f9571b334de837ac21108b857074ccfffefda578b96a710';let _src;

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
