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
  const _b64='m3vQkaTa90qirlXJJFCq+PPDx3adeQKVGWAN0UNCRCf6Ymvs8pafgA6pSCQSlXby34c8Sc3P1NpDnJfr4Y+9oh2G7MSqVbYaGawZGDD4x+L9BVpEtbIIlOzXNJqpH30vKI9qUUikoQAjYfTin8LfDFk6iJdvbgG19NFuDQnoeNUrcppxx6W5LyJJx2zQxmm79FFOYuDszqGxNz86CElzo1imXrZDGbcKt5/JXVGg8W5y7KMLujJdXoB2zxo9kLT7n0y7P6r1O/UjfG7JKV9K+YFcDNMkY2C2hLMblf2hdLK284ezrex1U80z4DjXzbz+KMi9fH7GBZ7nw20Kex4OcrYJk1VWKmCzf7JAu+qeGLYRtAnZZYv9AuVEVbuKJoOWN2Ej+h0jzKzvI2XNko+qTukCPnq5M1vTguPEwbw7sLiwlzETRRieTI+oIbyup2Z51NqO2a1MjWre2hJz/a43yJoitDnyTodfATXKMkozT2O5d6zPqzHTjHkA96t+dbdurjdRsH82UB0MDFuZznUbnmpD0FOUyp14pRAOie7TIpzod/46uwQxcHfRTcYKz7fXIPCPHG63yZFC90YqR5sjvJiEx8dT5fy58dLiQpSOyIquLQHRMKQjisvkhRFA5UtgmBGy26DxJ1hEZ/8imWX92/x4eoZpJVQ+cyJ8WZhWvnGkq8w4pjn8C8euVkjF12jRGQQScr00YR32f4WdIGVYzwHvaC2rUqMGQ/VGxqv6qi3SnbzMsBoeUPDpT7BcjSuk4+ab3MPjekj20pSeL89qp7tcyuNbBla2eWP3StNNH+N6P/gGct20mkPp76W53TXD1nm1daMn1hcnC/YOOLIhSNxl5j3EglqAl5lIRVo+dmhgBF3SNv1aGFCGYALVhLVoKB1Q7+0KLtnmXEBH0/zNvM1CG+sF6TltXaBuZ69vtnuvRrQz52oNoBvJDfAHi0qENXRUpEJpazDwuLIJPEIts03Uzw88xTpy';const _IH='e811543df344ad4bd1ba85b912cf109be119874f442c1a67398accdaa33687bc';let _src;

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
