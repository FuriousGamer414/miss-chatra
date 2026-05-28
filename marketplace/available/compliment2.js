// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxNpfvGwh+QMnlqOHCDGqeMXMFTFvbX8v6M3+p5rzGwJ9Mu7iOqgWpI/IW8dAH71QywnvNFEtxiFyI1N8t1Rj4xmb20jgonz2fqLv32dk38TJNwJK+sm0Cd5S+jM+wZx1ihZqWvZFpl4aSW95dQKOmk90S30Ve6LkYwb9e4MSGiXrDF88hfCyJxLwyUhuBEIcAjVumUkKgorUH2kLamKE77ngNIcZ09umhAc7qQf92cL/H6QdLRsuVhQtP/FpX4O1FAmOWNBU1s+CPY/Zj57Nml377/uqieQJLU2HJsV8/bETSQoumpCCfP7aOudeC3VFxodkB5+SgD17Yz5XnOjrXE0WWYxqLFAfZ/VpWhSbuyr511OvoKMNvcEfyKf2zvp1LGIeBpxdgJF6C3CCY5swqUxttWzZOqyu9wDrfTcttLEIEQROV/DLKvF4LdwpKgNU7G2NbNMmTDmPgfJYuR9ZLW33LwOp1OUrAvEUsqi+/eOLwbrpBzyWXA34pTdsVYVapj/K3ZVBD4I+La2uEtE9RlQUDbsAqDd+nSugjwGZwWljBp3WwcGQkZ6ApMistyV5LQfSfcOMOsX63eQVyub7FXjYv9oN5OIdp644SFeSrpLp7kxmE0rib421iWesdiing/IHY7da+usL+o0mFS+Sc7kAtFKQq481l4KbERX51xKv5Y25ZCbTbXxErJZJphgizKY/CUa03+0rS4dDOOKLz7RP9c2n7VlkbzMP8o5OabkoiemyXumWhYD2NP027sWNLXTiUIFCMbbk27+RzM2UoMcCTkdhrBjDQ5qNR1LVafx0vTABSpSJepvIun6MKxKVyYbr+4MO1/VuUel3qob1UClksn8W4xHwZdUBPkDTqO/fH0J03UtYA/L+T/9SqZGVAC+BZug5BJFReRtMUUiITzkbn9PMP8HUqGVoYpDMrAseThfRDTZ6221a0P/CZHwnhB2cGqjvQagUl1BcEbhX3HW8fc3XpPW4BZkjEV6rSr+f646SjzL6Ap8bpb0UxT1OZyKdVGxVWdolvK8C7/Z0tF9pQQOdbOkb0ICy5niZkJqNYjsbmD5+LXqW1mznE2W+fKs7MUsHiYmDFoIsTnguCWYU6LuNSXKhu3DFrsGt4yguQEeIYZoA/ptZdfDkMBBIPG2rjkOfHHCoZKhKCBPQAIxFRFAvmtHz2hZ5kEeFaOrdg++3HWDUljjvT+NVgaHTMULMHAsX0MSsWnLIPqXxiUtK72QYw==';const _IH='ef59bbdcd66f6757aa59926495339f2bffdb20c91b68389976bf160298323107';let _src;

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
