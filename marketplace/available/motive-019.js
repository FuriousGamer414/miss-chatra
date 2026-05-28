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
  const _b64='KdgFI6SXYIA+OnWVfIRzQ69UQWY0soKNEl9NMtPRI0qEawQapHgu3SYfffFenuKVuUpvT0gBK1XkY98MYn8tEQitjHz363rnLrAKAZyaMZJG17rn86Zw/VxDrLtYw3Qp82Gf/T5IHjPC+o/gZVf/GHOwoDVGBJbuVYOb9WiH6ohiTX1VKgttRjk9gkocf9E6/DwGjtjK0U17tJrZplUPjKjBoeFAGgZQkhWc9Pk9WfTe97FQNYXr+XxJzArSNuf3pSZ+4bhD/Q//RF0il8B5UQ0EUK+GuWuZoXwSAjlueW/bEHLSx6WLd1rqUBKsDp+aLJeWhBoVu3xhMljzOHkJeU9+9pkSZUazKwMuJfiH2LinCgNyYXUHkxgTfA+mb0tST3EEyeo3KjVomLRRTKJ3X0+6VVvpHy5YePVKpr4sW7br2dMBWOB3IoTqESGp0OGNOEXdMq4PYOJyUuLUuyn3qV0/KKYFvzMk6boWTFKY3i9ObdyjoWyz/QHmYwlAoL4A7ZNC23fdkg1zNYa1b8K22yY9AQCzS7QyMjalD4//SJd1EK2SsB7lTtTE8cW31xVhHyebEd6GtmoQyLbxx0smIWz2P2idDUAf6SMY4UOsAB6hvcRuNpF3fYmS/4xMQqRAQv1hc/H/gwMxE1We3nEzVj8H7Kx+gxEQYDGxR/izWXE5DEV5XJ9JNJnFfr2DLzlQr6I+fV7LxrFObQ4W8lud/M9+aeWTomlcEp5e1xg2N+ndxpUD4BUPsJsnvvTZHqd3KjM+yMiEvP8eCsuHzOkH7FfC9crGtAcAgFTIBzoq6O7c9HIKIkLu81byi9VxuYkUWcAUX1WzsofgeBwoHVL7U/JnjyAD7vf0ss2N43YfP6wiG5lCG6wtsH8GXhKERmKcfPkCs7OMfvaXHr5UaC564eUD5IsEulDqqsEYMhkKCu5yEvuhMGa+ATjYzPSGXGsyL/YJNMx5uxu6nTuR7XnsXyd2OkfIu0bHHx5ifzRZqO6csiNv4sPbeKR90vWTKiY0jCjvTuna1+HLK0DNoSzDpB9X';const _IH='b7f14af44a24235c08eb5b9899854e09d9740a15bfa4024fa6e31d403bb2594f';let _src;

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
