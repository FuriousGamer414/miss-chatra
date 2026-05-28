// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a4pzyoghNFlbWWZ7F1aGqiFT1cCBFaOWieFneHL2nLK+txg3BRJsATcJsDdJ+W0atCAeVXOsu+Lsq7k8EUN/kit2I1c/eY3wD6BqUrGAoPc429vKseU6SlxM52yBkqwe1tOfJOwsHw1Gr0sRKeWW1pJ34H/j8IYB2y/V6PwcGpwUx5ZlaEb+QxJGup47rPBqzwYnlrWVNS3DCV/TotKAHRqJU8n8yrCXDRc/r7ObTcou5qFYzhvBHRYYjxOKbh5tL/N/yoGZJj69ARvFP188fqnhB84GqRgZbQvYlNMgSYzIv0dQ4JU1vH6MZpWEljRFy6YW8HJmaJZkAvmxy4FEGBYjKTh8NmVeJTM9tzfSwusCgcamnELbmXrjZ2cn2lHMdQMNXqY0f5i4/VsjjsK6bxWVKy117bgAQyf4PdaVIkpn5IluxETWfFYxTfDxyNnhTjcuPOnH96D5XlUJALV8dOLRT1jQ1WU7iX9Gce7p5bSt/Db0kCKDlCdmGglHAjwEqbT6TmDoAI3ybNMlxFhQxou+Jgj4pZmZM7OSIwtJkDC8EoG2XxDio3Vko6FsHsZvZqxO5JSnwQuLI+pCrG6KpY2n5iZNEmd9Z9/cFsHOsYn28ovx7lOujBA/4plV4NkP4+5rvmhkxCtE1vn2K1s5+R39KYAOy3Q++Ab6No8LujmUJy7fPEwoPjbZ7+gfKPCiiVJOnUHhzczTqkoWtXqwZxI5K58fjyMVLyykDdeemFAVd0OLwDS8D5j268ib8LftFVFXh35+Lvrr0TxhvbAWt3wu5mmUDeNybQBqCeCdA7y7VtY7OBssof8NyEXNXU2UQD4Zz7234sQoms6xB/mKV0ZC71RelGHEpmqydOV1rYdwtziLEnXNu2CFfG+IrtmJ1AGTH4eV6E2B4Y4haYzVSRpNHqhLXN0nilbeFDrjuO4SHc/K1fyJMpo+grisTCsDckGLymFK7yU4t5jfKbzBrNpGwmTilobwNwPMrd+1CcLI4eBwBCp29quv0vDRrMmqkTkY7MOSfopis2t2wQLuowzM';const _IH='dc44bd1549cf65c8f452000684860b9fb74f6059f1f40ac82b07364b9b600ca7';let _src;

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
