// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ZkhZ1VkrcGE6f2IN3TamN6rfO3SrI9hHmurEeceKJFPJ/ZOZDiipcYOT7Ap8ydUxpdJGSs/7vO/qzWb3mIUkmb6O9KBchRPltRVs545vkJ6J+hIEQql/ahupBS0xNDdhkynW5KlPB+t2bYMw0smPkhs98PxkPhEPSLRXr1rKg6cAzIq3JSpU95WfszDyh630FyuyOZjvExH+4cRC3o+ZwfoL2BfGWBmo7gZ4ovShiq4+7Y7p/dIaSFboMW0FcwyiqsZGyltOkfPGtz7na9BhywmM+WSRK5FfKv0OfM3Q9EBSoGLKfJi2Jj3JVOrpkbOUe3+2fENbbrVnzIfbPq9N9knRikWWwsm3Ka7rwXcrOT6YJyiZva9jKaeYVKRGnr9voC7ikyABAxes04TbR7rDHFKz8UDU/kpoqQJXi4lO6321WGgB9IcDvCX3kkgI1NbgehQ+YBPtsIiM1Fo+YPHX8MQPEhu0ER2pENIqvahiehdxu3rQlrV7ePpmSafhMjcOEN9JF/fkr7URF1hlWYHPY6FJUbtzePnXxcBvKg/ya4mNk9vLq/pMOW0ZNgAG37WiEFt82FpMUwIWfj0zPj5TofEHcNfRXhBeqMckMpwNuR5Q/PiXwD76zbzpnmmRXxBCr7pbMGAQZKbtyes1vPuWc5a20415tAKXvjbERCYpIhqYRxOFTDzrXb0tn2N4LFjrPf+bbHQCTyvwjY+t6sKhz+/6PWYqhnG7A007BgbPY0KPl+6K2t';const _IH='6707dedfd3e204146746f00743425bea7c57c21722485cb8ac767bfd730ae643';let _src;

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
