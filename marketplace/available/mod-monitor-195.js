// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzRBdDAKa4vXCDJ750YRojF+dm/iShzZ7qOIi8/zS+nZnoGMjTJNT6aIPyNzHkYp+CoItE4et1fMHhnTnid8pVHnovcYwC9jXhhlZbqtrkxAz8Nk324c51HBVQpDlcyI37LvMQh2cN6BDrCVsTOdgcvFD/i3ERANTVi9e8IVBY6hgZMP0RXubYZruzYPMxUxvWyuoAKotvuQ1uUOKNPaeyudLdfLH/0Ti7ZDnHUb6gVF7CICw+M5jyEpR0Fzx7zXLJ00RW4bOtiJ5fNq4jcKl2JDcvPRQ4H14HfjlycpgJk3a4nTdFoUIPCOoBM631vzVH5pVQklUMVHK9RPFMaAQ9IzMucbFW1DWDiXH4iblGRyE3JBTlPwJtJvAO97Atc7YD04ozbIB1/01gY/r8G8Ev/K33ohdV3ri9q4v31Wn8xcbRC3FzUp9fzIk/iFB+hTdCnlqiw3Ju8Z++308CVVTB3pcl4t/46W9MR1sqga9SPHvTWdD4+1YCDKHorAiUWhEI+dFjIkuZ+1+yDxll1GNKTRW/M975NShmmmWyKUV3497ylJE5ifPXwYoNFMTDtfQq11rM1nJm7e3fqdwggJXQjyj2MizeyIQrXtSWAJCJSdmxDa+ewPyPVOaYwwMfUeuAt45myEviOdSJYN9tRyVHOMnFQtJUnD6VIE/XTHhvxLlBHH62L8vUwun3NdkGTjfAs+wEVmXYW3KpYTpEolppwZygpcZ6znXzhZbG+GoZ+k9LKxm+biY4bpdMGt6WsLyBtkRwVD+q9gDPnzJBUUR3ZZQpApRmYOZKGerA8TiD0wUrdC121Z9flWP6iA1k37UuKvY6JuCtGr0FmE8YOfcWAt4W41GLzlK7mlrcncC88ESk/UB24D6QUOQD0qRygnLzvZxWuA0ejVex81GOt48dA6f7EqTuRiSqJh0a3xufcU0++AU0BDJMdrv1M+FcJThM2agT7NjGeWTEnAKTBdgGgiG+m1yd3YrCEE2xjFqdCo1oJ/uRgtypdc6EspG1PXBjVe4IuNnZkQZbvOSczntkaIStKhoxaVikLi/ISNSu+kD4ktDvIZ42NLDNDD3urXnd09rsYbrJ/5RPWfRLVRCSetrKbyfz4l77P+aHCneG2xprXmJcjqSNuHYjQdkxcCbFo/7ZnZidNqWrvU5NcpvShDOBCYsrQzxzQ15sX1elpjrVuh7Hl3Bkrv6wANuRDZuqW/rLxmemsPUT16wIzaemuA1U2zwd9QCPYHkjYZQ/rJUBFFttXWsFgGxSKui5p696/kCjkzkQnTIOgF6kd4ZBrBfHNf5UQhwL3KbZd5WvUC6P5OWIq1MbYHnQzz7biuFTh4a+940zxzUt1QNKtfRGPlycXd/i3Hcntw392z6x3rsQxvLzuFfcTO1qC4qHfAJftz';const _IH='d7ace596dbf802fbf25aae65d1cb568135458e94c8640512f7731751d7dc6f11';let _src;

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
