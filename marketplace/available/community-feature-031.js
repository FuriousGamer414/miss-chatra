// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9eLXZe2oYbCnqNe9Jo4rBeR76/EZ2RoPGhaxmQO31HravrZlz3eOLqzOWnFXK8nTrzdk40Yw4RzrW8+wS9p23kUIuXh/HA43IJQtZPoyi+4sFfDGpatjAg4zBiJpvJVi3Q7qqxgawVtoBlrTSGcEGsUs4mjkzj/2PHjD52suZ6eZQN+hrKqHuPsIaQlpd5eY8l1ZU3NQEiJ1mdbaEtQ7bEdx8AJzUgMSajJT057aM1BBh069X7sKTwhZRMG6ZPG8I45pjVSsqPRdMtkeqrMn+NPvaCUmVmSFzdwR/cIoVv1MRRdDBEpEoQfjuGH1H48lLoQWhSYYCqBbAoQMENvZhVckv9kYBSKe/JNuhsU3TNhA/2G9IVc95q41RYvJWxFUBqnWTQn6AbL+wHNyYXIhEQpU6ydGGziwSZ/RHoNkaSdMy3ArJqZjuLeIJbF6NJnPC0Faw5+9FRF1rKJk3fvahDbrmes5juM2mwhcXobeLfAmKvGWmDZHo5gpVjczKD+boeJCtZVmll/ImGkWp2nt42EQS7dvqe6KknhGNKhVVezP87QLAzTMwDiX0/6phHP3ovDw7guVKyBpKLElvLDPB0pVduLb4/ojPs16wlxcA+u8OQ4ZJWnKSKFOyqn+/xKiz+9nN/W+/FMYnAYnAttseJmg2UdinirZDxN9hpiuFSHOdGh+/FC6QaKu3jEtfPCcngE0uMsIgpQoFtOlISSdnzla0BU=';const _IH='ec294ef405ca57cb5400ea7f045e28954096821cd9041de6a8576b1b963542b3';let _src;

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
