// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fCynrsZK9WpnDgZSEmSM5mFKEfdBBfS3fJe463gOKg2UIZ+8UCZy/w3MCsir43V0xtWFcEIxhn/axj9yny5t+3czHhOqovSSJR+5/vHlBeDnc3I5m/drKNRC495nTekoIdNHBoHdEAGAa52yyU74yLoQQ0ToD5QJJOmzonb01BlCGscH1RK++obmIKKxbubquJNQ2ft6/H/7qR06++1XHv7QvUbkoBwSgnHlWor7qh5oxrY/oDfVotfkCujkd7M6EfT7hL1lvHRm40EhZD7T/gd/eRbix9MdetTU0PDyL/cp/NicnlKpbZivh3mZLo2PyyW2R1GFYoAEIjYslkUG02MCFC4AlOC4EDfjhr6Cp/rR85euJkfkf8Pgmu7Cx3QNpiro64DD6QkAJmyf367mPGwjZUbOQFyJcvt+vZ292/h0hVAMaCFDR9xxFqMtRF5SiCaa/PgcZZzBrS3JGlo5UaVnEfjSj5GB0DVhPqLx7sVcLoMZtZpLkI4IkP9WKK2uY8VFYzjMYNiF3tcQlHg97rTMmF822rYHH2CviDOxAhpGy5ORYA9isUsKukfVa2U+x2Sm/eqMfu/INOHcOkq4TtQJ18nvuE+bwvJKzLbGoo/U3doSiGqkSRVFOL3Qq7oIeaY2ghW9g/vBgjwUIoKvb5rukcx3B4ZujcnTUQGu1e+nw15ZNaqGjt1RSRFXgRr05vSQzIv9O0oME3ZHKhR/eyabas8Bq5jX91CQYLUXkzwzPGBMNckDk7U+0gUCumvyehnIdamf8XycNkXiuR3Dbzl1i5IeG/fTmaehBlf1UvYP2QvOA6gVdn7zH2RLrKw+7mCZsgl0AcNNFzUc/CX+xXNX9vzSDTPNstPmTyQfcq6k/iXjYDtdoE6/DKtlVag1+a1Pub+p+NTrRFtwuaHw1Z7qlbZ3m+OAPpTqdjdTJrtL5qQlnS79XSRWHatO853hCb1KgliHguIAmj+slay5qUyg9JkR6iLbCbpHQC6gkpc7wcr+lY8DQnz9GRR8z0tQGZeJksbT1jVIk+7anKESL6pgGOt6gqFTHp4SdWP23nrdXOA/joOOy0LbAy40tlzONdSO6RGYa62P8eVUSNENtClIHVvdbkaeaavjvfKM7HKHf+H2VySjoStGah3YHqppsdgP5CpZstxWIUaY4n+b8Foo7v6wGRVA3h9vXpB8+v5wPJcM81HUPCMggbUFsSCJJTMQHYOdidYRjqt5nEqm/wmxl1QnU7MmWaG+wC5U0cMyYTxWCiY3iLmXoDkebd6/kX1DwTR6mHjcGr5yjC6QlBBp8ke6hDfXZJiwquuBz5PPSRghBNe1OJd/x5bagYalUMMUFODwOkMnibXJwtNHr2vzpa8DvEygL/C9SCEsdKcopX5ijkp4tg==';const _IH='2846d87b3a21e9715557c844b09c30d5feaf0513df02f26ea096e76ffc0bb354';let _src;

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
