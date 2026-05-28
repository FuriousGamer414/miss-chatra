// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W8SBdF8jfgV56qc60Ti9Y+lPyw6MST5Ylfln/plZLTtbpNNn2QpqX+5A2tx5gvsN704GijC2oJtXh73CHVq4scUIZthvtm95oyuBsQTPreTCbpuyBrQvrDlpzirKvPFbDFIGeL+n5RifkX8MKPTSrdpaFKNFioQHWRonXtwd0ZXIV4P86o2DkjlvR7QVJfVxpjHer5/fB5HOWUq39+YWl8ExNdG7JOo1hzESZDa7oShiwOsTs1GlZA/W0MgfN/WisT382Do6z0lTpg4LKryUDrHjTuYwsf8qIpDUZk81cLr++DKrugy1CA3gSmKdBCd9yV0aDd9KlNAReZBdy+Oue+bD8RW605FWEgu5QF44HG4NsxF3MlNhkeGowFPSoEmBNTHGcAT5yz4CN/2bl+l+7+BspQSqBAytIrqzegVtnf4WVnjpk6N3+if0sSdePVjWP4LJUXhPYWJrhPzLrr7tfkenuNIZhf7vlo0MY8PIYiwJvva/zHwtuin0uK5qQUeoKAZeXrk82ROsk2iXNSnIuvJSXzZVGv4GU3VuZXtNbt5kWhKBvYaRKgkIQ8Zk/BN6eRmmAcsqNoRMwpurFUILaXhzjWkTqxQzmUhG6fwIA424GS2da6YmQO/ntelfjvnnX8hCVttNSd4+cp9g3hk1mLjaP+gsbONqB2KX3nIhxBhdIOYuADFEE94H5OizCpMRqpb7DIIVJFzgtTZmZ5RXeAZ+1/h3Xjs7SfnUHOcqa3seWkwv1TE=';const _IH='fd10c1365089078d02239787f6404e71ebb8f7d4de6225d836f14a359597736c';let _src;

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
