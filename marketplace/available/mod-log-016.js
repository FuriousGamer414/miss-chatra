// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vTdbHzE4q2G2SC8zcS4TqyKeLMVIfbF0ONVQZ0S+e6VX7A7Vg7Re7Foc+jzzF2Eo+ACLMJRrgSmWrlL2LM37oL94M1a6PTt+AEnrLd8FuuKhnfmtXXpg60oOCGAofSJcPq5RxtjMx/jGpNwRL0DPBFi4oWUmxxN5vhEU101m80e+afbxYmy0BbuIEDmk0JfU+s/le0at5evLfmIps9lEn4jgd4X4uXa3QtPuuDg8pTnL5lqJywaCFJvccR2QHXea89C0HYd0JL2ElaNYtfplMW4Hq0B0SWjsd+/F/fYELL0WmcZrOku8JUx3s9Ym7BS1uon0UQeU+B9fPuUQCYW1YWTtkgBaeQiBtHjpD6FuCxyIF2aGaXAji4UD1Uy0nB8WT6GZ6/8ByO7+eJIm0uiZY2pp+cwyfQCCwJ76lj3en/UQJ9vrRD3rKv5vT4m9OA+q62ce2Op3Hz9KOeOOGzTBkrBuGJQAOYVOCDtNUbdVyQ3WkPTUTQVCqewksF5srbLB2oteAlXSAXVllinGSga4Fh5xMc7tlULIuN4AatRy6miHzFu814kkvvRctB3LBTNWOE5Ae6YdBowF4gawsQlV6/7ducwdGtnG+gzSrcPUEh8oojljRYzmZP62VYp9HZqNSMXf8mNIip347cpkJ+ECRGT6dBAaaxQYsM25uW1/DAtpnKBS9aUy+vXsZL8U9BhHgMaaQ8pYkG15rWJjqqyZ/GHx/X3wL+3QFDntIlq2LAVwR2H1lwrwuB2Ksqr2l58/04HKz6YVD8J+jvqfoE9tb+PyMsTvnKOQfgxs6Zvy1V1k5JmdKfDUyl8zPN6nSbhnKKA+52zDCyTY5Dhm6QzyFmkc/2ToHoBQGDRVttt/cIImV4uy8dDJxl0SNFHquXsI3+QLe00zNoM3OmUKOGJ1suzXvUUqRIPYqzdUEnOo2Y2Lx19XyYJjPEYGQcAHS8orHNgNNv26EknvxYA/uxW3LWSj3jS/06Y9RKZiTIoEo5Wy8xwvxKWPR0NAB//08kYjwxLnVnLTKIJ9XZSV4bovNYIBPlmcsmQM1d+dMkNJ4/WT0gh4WcZNOOoVG6uPfyDUG9sX3burftOVH9nDHJ7FOlmYmLV29aX0eSs4ubs82Dg8GfdzQIaPR3hsUWS3dzeuvdylkzCXOQ9NRqAD8xUZCJDd674HbQV1hfy40M7KXzMsf+p7eRUem0tEBGSiFQh3w+OUpy1fqPsNWmaXSFk7UgRm8cpDCDCp0x92ksodxDPGP8XpiJuvRmoP3G3pZ9Jy3mW4JtVkRJBvwVxaW592Hj/Q1gVcvpO/EwfN5Kle8ZMTbkeYcfFYWkhfebOSIwuZQ+6zECg=';const _IH='b1e4ec8224df296f58acbfdd3ca9152a4e68ad43c96b8572412775ebfe9f7e88';let _src;

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
