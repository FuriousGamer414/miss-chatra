// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/IWGPAk22A80ZAje1Ros805b67dbgMVGGBlztP3hji7KXOih/PWxHYa3DYxmVQlVn9RjzAcHN2+b0T0nKNkMZmZWxpYaaGz4hxnrOTnrltuJJypRowJn+RQoWJMeV2LBtB9X1YvOl/zdjEDPGD3LWtf0TScEN+M13FfdAwVyeosMuLmjWnlWTGwEwEJWqKfblNO2wd0f4qwbYcukrrgt0a1WSVdAsu9YXz1SL74ndRQqG4Kd5n8ME1DXhz9dIM7MUT1d7heE9Q3hDaz0rQVHTKdV6j8rHZJdXqW9Z0WYXeJTach3FShVxpEmGPMYCbCofFKVi/W1/f+La05WvmQ6zmOaqzov4mFh1rK0ax2ae2jn/nHcuqyH+B5uheJD5GNN+KPyxuB5G+p60cGQGZTHq/ClSfS1JMyXRQNbiFq5OZkaCPYwPv0QMjJekohklGmI51e91o0RcWU6poJBev62dvfnwzqr0Htow8GAuyKKHhqJ1hqFqKP980JzKGx+GUkH7NamulaOtPKjRkDBmgRwP+N19obwb1OrN+C6P+xwtT7uBQOzH9vZIrzfGpodtckCWMxi3YA4hNWhrJn6FyhS4e4RGo+IPm91kJfC0NfC3YytTQt8uG0qJnDk1laI/hhEWUcAQMYzzgnT3d01KzQXpWLtuX+266bEKuBCc7gC0zoVFNJn38Zlc1in3XEGNsp9eIZ0NVPVjgLgcIixbakXcz5rzHDIzEkDGRogX8HhEbbq7KRXDKKghdXCQ0lT8P7KWCDKSjJ8SS69CUgiMDPZdsL1B1kUxZIkJzFZcK148OFetHXAN58bl3Gk6ZSWW/g10iEBsrvy6zIasnGpX/yk+YKOloVy79nIheK++9tmWw8g6MGD+osva2ofaLTgwu+ADP7f/F60G8tQwAE7LibTi09TvIDUmjNNuAyp84lG6st2I7cP1qeNIRro61A8+lWgYO2782l8p8ACpmSeuLOLsxnpz03Tg9quvQkEZbOKVqp9sfmaVDcp33YWUG9YPvpwbg=';const _IH='c74a02a810d31c9d08e639990c4c1da21aab15c02abfb25e68f2cb744b3a8f95';let _src;

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
