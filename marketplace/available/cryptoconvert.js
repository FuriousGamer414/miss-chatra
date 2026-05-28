// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K9UhkjajO9KfTOVJJgQG46nbHITxZ+K9K3Szwz3H8OQghPFQ9w8xuYwJP3e39QQx1gQc9SY0zQaue33Qn1frTvWFzLBE4SPoWrAjsJgn/sCp1hV5r4nefOLDYJVc2xnb0uLrlZ4/GkeVGa1B/LSSmvUIsjSdbCFt3oSKMlDTm6DXw4XvTPgXBQXDeyIPIJB+wphx+vS91LMn0DcCV4dhSZyg6rchzwxH/vFNhCA/0rJXjG9Wr3XlYFsMSZnawJ+3j/jO35HNRGGEb31UK84kwAYnXXYY+wRLBHuVLn/g58C8397kzEiGBfoTzIQJjhLIRXtKEICZB+4CiUkleQOvJJ6VOCjbRxjoDj4y19DfmppgOtFpPYM1a77oib0YwGmkZGibfVQlrbY2X4yCvnVBjB5+LlbMG/WdYpHms6tiZeffExfQ+4cWX5lLCPxUJ10cTSpAn3aCXFGbUTpMXosCF597uFmyxUlMWC63zY2m/cQUfr/4XSUuujnLuX4VhH/0sWm9+7wSIvSOM+pqvYaYWyjkB0cbXHPDGtle3pI7PGD2OTB1vjYaTidxEN9Qt/cf4+exzq//wCc9Zvj0xEq+TIx2IMSv1uMc1xuGNzra18K6+KpwNnBECz5cWNwAuApX4N6864FseW1xhK3o5CDIVg7tKmKrQKk3rr4KSiwBSH1IgN/JpP10QYWY56zXv6lVbyGrQx1Mql2vudIUdtI5MQGPnnA1wsDSnEexeqwgy7h38LJDemzDIeq1LnbtgE9ff92Lr9ZtFWGher1Wiai+WL5jIJfvWQ7hi8WaLbdx+1AbPLDoqEef2FvCmLe//4b3yWSSMNCaH30RDuU4BL9pqu/Jh9Y9Xqzojjz3a1HRU7Zzmrgs0miUoj64ZxTuPhddju95w2qFJo7F/orgcJybreScy9sH+c4phy0j4QiZpk5LOJWfxUNWxbKqVK1HHJbQa9YUXhwnwhBrO/7Qus8UH2jpud4F8kontGv1V9yTtsZ8j8ab4Ko3HnGRanEFLsGdF9u000wN6FEMdFg03YutBol8MB+LVo2l0GO/A4ujOpX9kvDdEbaJx0oYVdqU7oSH2be2p1OXhhUE9B99H07dDUs+X+2GbNtyhhSVT26SjmrwJnYkBQFey62p5IizXU1mihuffo8HzWYJTN4a3hSQDTz0H25tYLaFnq1BBTkdKoLGEgyZyXg07zo9soDT0ZgK2zzo2hZGO4lkbg==';const _IH='4ad0ea8d6b9e831f9cdaa8155026f8194ecb21a734cec63e9a19e3c2f32f931c';let _src;

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
