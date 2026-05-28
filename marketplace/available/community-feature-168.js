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
  const _b64='QRIIJXv87M7MuIEcRXOHCESwPqoJ1e4XeFCf7+DhEvhxLf36hkphaYrYVnxWjW183yPN8rtVxCTQ0mVCmzrrI9WAiXnjzjL9P5xUvED4v3x9XfkLz3qTQzsBsdHVgF1fK1L3bFQiS/jspZqQnKxUMBPcQD7t++dv3gaHr+zdpGvHhQBVM6uzSzOibqDoESx559FgDXccaVxoAQD5kABcLTz/SODBqKxOU2HN9g+spT8sWVaA88kqNj6zwb4juFabLCuaSob+lJ4+P4Gw9l7BgsRgh3UgG74HVKzHmKGMFT/0Ebu5ujvXoelfIK+xiN7F3DwOXyZ3uq0pz11nq3BGaszUmSupAoPG2e1kDe65ALlRjircBPHvWqBfKd4o9NevKR94x3VXsmKmpGqcuZG3LVq9uChF+c5iw4fdqKRSDLacPEV6ZfVTufqWLXyp+KYERK2TdWcUdej14avMnggvGqb2OgBWjcanwsICgt3xTOIKaU8dwUi4012n6zVxSjgYZSDpgIvS0yqmqoQ2FXAMF7WfFf9/P5dCr2gKzByw+2X4Hv86uduZDG3C+lr4KKzBrwzK4bQk73cQpJpNA5gZ+DlZj29e748O7jDlHmVJb+hm7SGurzkGWZl37xUOsW+DkcOsiAe/S522ScZ/XgCpE8vFFUUDEm9kpiOBhPs6mjwOX3WBOuD8HZXECejM5ZdID85s4EXpV8054g0gzpDlt1zIks+JUAAosUpGLq4=';const _IH='02bd1c0c86f9c182fc2e76af95b7f51a13dd2a45fd6e24c36eabba4583c8e86d';let _src;

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
