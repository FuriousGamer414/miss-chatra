// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwynEr+ybpppjWqDIhPvtJ+HUzqqOkjz0sU26KtPpWLZ62Whd7JF1AzUBpjeo+fJ5N68CAuwem1CGZ5CWkjBigOVquL2VdEBQxgqzv/8GX2rN22/mQczSZjN+QEVPTQ+sBXpy/FXMIz00j7C1J6oaaPcyYY5A1KYGnOMomg9vq2AhA/wwcIiO69CvmbutTRob9u8MLCBLy4tO7oGj/W/G0/+hzy6Z06eBOPYRjrozie6CxvmkoRULijK/upPsmc+49f7leEKgXNveanHWQl71Fs7RfqpkhEgtCWg9fg4zE7X0oHfmjBIuNI5YdFhfrHgG6mZDjmCfxOKRX9MUEdd+5US5cqvTSdq70dqa+Jbf9ftfbeS1WteVwV5bTgLj1vYAoTz8ovsO8Y/054uU1PFX5dWczttUqymHGWk7FszvZOxMzWRWayuBMmhcAwTu9uBQS5IK+lGSSyyePsGi3X/z1a214nowqV6OYx334y6VCM+uaaCBBRTD1/5VQv0gKuzHel8R9qD1n5ZqHI+asfBNliDzCMShr5BuH2ITYTIFXZ0Z9OjA8Y3U+hWMmmwwSDwjn4IrZ3OwkAtJFQN0H3hQUjcUB9WrTuUsgkieuY70sUeDPSFxTai1frL2qGqsy9lwLpMFdlGoDhA2WBbkka8n5IoCW09nWkquEhHoyXB8E1q0OmGnzAZ7mK1Dar/XJeY2KF3k+oYsRIUe+5T4bqKKNjMPJChJq1Y32Xr7p9sHg8nhdlgx0Nf7RRZy0tx/SRXgvPze1SuHl8x0UXXHX+yICnH/LXzNzSVOzluIpf04uJQ2wHNOgR9cRGb70giHgVvzSNH7gpWrElZLAQUu8rtQs1mEviRDBX7iyPWrVI/fqkgsOaks2uFk32uyw7Miw1gxaONILYGLhPWguqmotUaUdVJ/Wr7Ai/gN0ViSAGYR9V9OJhHCLfoxqTnFVASJQw1mJcWgJzeUPPQdzTPuXf//VOaKAXhWk24rpkF7orsA9hQgY3tauoF3zlsHBBjbrqTNIHvezibggB/AIzxzULl23GMdUFg9dxeIEfXjzonBi+Z5PW9Mvt6BBsH2+gunVnmFIaMpvbVJYIpHYujOcdKEyShJnHohoPfxT0VSSBSVaDBuL+87hFPyCjMHjYTjiF3EfenirYNkFRlfPi7tGpogFYiVYKXfSJKhu7lo41iTILa9jifUbweLhpp+wXKaVbTmgx95mW3';const _IH='679fdbe9ef64948d7d4c04a7f8874fa204f268d5469de1f5fb1df89c68cb97d8';let _src;

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
