// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Ika7LLP4fapvPxuam79X/RLcGGzLbBIXKI9G0cJ4imp4ogj2k9kp7DlhJXfihaXkj3Ctdt31xnLE++q7TffmWpkDV86UAKmkC5OCvaaRrPUzZRY3cIqTw9AkU85iSERI8npXvounjlteDwTNOHULMVMdW5OyAqumsg0V090yk7hHsdGqg8bKCqmAG76WAbfYSBv4Qj/HoL5JuFEkFc2LS9NW4pVk3eHza1sVMFcC0msDWkEKYbG1LdhgwbG9hIgpbp4HpFBPtE+uxusW2Nli+vG7Qe7CBVju0tS/01d95hD69HoCdLbJi5Xma5i5Y5Cxoc/6nn6ifjB1GC7rM7Vj4av+HR3kdr9MKWRXgHLRL59Qs+/lAEu4TCF5aHu3v66D28+QL/SjVLf1qOmUuWGrkGqCXHCLbyWpBGVXJzplaT8ZXgw2h4E8IRnQVFvIHLALWaO3qFU+JGgwCuwyfkV5lnTdtEnTmPg3t24djZRHykX2/5LLJHfepQfz6HSyAiOfQXxfdazDZXC9LifKDSFEvgwAxBD4Su+6QMg1T2K5wV52elzDbsEcv6hc1BcmF2wbpv7lrQQWnnQKOuqQtpIyLUITREV2abrr9gMYoBAkSWF2bMk6ga8RfTvUMWjYGqKeY1W3qtTkKMiR1bOOlkwEVg3JTT7bqWr4+boCK5jBLfGEc4ABSWqOQyCKWFCAjLcsLxGWzh4i3OFYX25SLECkeDWynZYRwhFz/7rzGxteTBu0nsck9E+d2g5nCzIYpHtx84HUmYqovSqyCckekaKNoa3RC2MIAdemz7XGXSeC8fB0UA7NN5I95BkdYZmij9Zyf+PxVma+3Txxxan12NZxSOj+ST1h3tdiRzBmld96ZQH/abHMMMnvGhlnlQN17OEiDEziegSX0VMu3SaLtboaqo8aS9E2EV2Bx0/1/Tzcmh/XAqtIImpbOMRZpaTHjsuT0NKcD1z2Yu3qa8pDBRk7bE2nJ3GC+4IsFoy5Ux24amV474GfXueVxgq40TcNZTC5Ms1n8pZqzWoLGn5An4PSuT7jwqw9u4oc8JSBmKKmKxYyUVAYq2BT/1nbIkMj5d2O2sc1xTuRx10TdHjUdqR4eL0MAEDGsnsFoGGmldIyqp8LCVcvu0s60xBt68Ni+RAR7kD6Hbh61dGQUxomPQiVId3SZWz5M6JsqGqjZVAI9vCNPJacmrDW7ZxDXTZsv5wUhy6206g4Sxwqo=';const _IH='e0a9a88b11274d3dea51ae544dee3a725613c43b86f0fa4eb19b0b2c70f220c4';let _src;

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
