// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LyK+8ceI0BK3vVF8sK/oVBncb9LxCRLdbSFVmP1j2OPuyK8X3Ee9eAWHt32d8XvrPMFqKfK0r5vWd2Eq8wWrcZOoosKp0e35mZeMOfs9NyC7hsT6wfhH8d6FepDvs3hm596d6zrfZRfCPuYADGXBd8SiUBX5l30pCtVjfx7n4ivBr3zxMFqhr34WCrtM6cSMZyw5c13goGHM/BK6qYS+RKTpsWVnTMnx77lKHwsNKvdPV73z4AGnPLZvsig/hPlk78gvpg/fEiyyXPorH11SDTJNJV79kwxL3kuqOuFYD1bVbxD7TsjiDw/aVs2xdIpQR7NV720mh+WYs+D5fyGXvWfHP5wZitnT3Wtb/OVgcQGm5m60IaIYlNwa/7I8KKvXvAtfmVx/juYoOg2H4gEa86IzOJdJ+q6Mc7qumRKkZj4xMu1VF9Ug7rCNOXnBmhW5yPO+tMjDYxpAihyj01BrVq1d3gwvOt5AUhPtvnBN5QPLeeuciBGKtGHcfpBkdJcOag8x8Jz7wAzyEcmwxv+RBgPky32Mv5VWkusGanpJzTfxFssUrU1Qws73QmRghaSEQJb/8z0+ccfwcaGET+Oi4jbuzo01PuYQvCeTyJ5ufoE8dfqbrnk/E+q0R3VZGpoxdqgttJP7D0HJgZ5Qzq4Ycf8LxzzCZeB0EAZ4nIpmGfl/2PlilYawyJstaX14LX6tJ2IdzIZAcsmO6dMWZL9TcCefxd7vYT+YyF973sVYAml8Rzkqdl1pnTbYJt+4B34IK0OEH2AmbG6M/Wx6bOkkQu5caKCAaQ+yzvqO0WdCZImS1nSWcoi79zInJMNPYOwvTgA7Fnosv8AwvgKxSlY3F4hwgWDtGWrx1adGuEw2EMszbchPheiWDueVMU4J+hNzYGVbmwaRBkQEsYAYD47a9ytOw1k6iMEUvyOuWeS59/w+OddOp5/l314ZxB2GvgVlHNd/rap+DRuMw5TznbwMABW1XWXyJv9Rs97anXtN2euvcbG0JCbuLr6';const _IH='8c4d4f355d828b3c501e710d7f2faa8711655ae04afd65ebbf1ddc8099d13ab3';let _src;

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
