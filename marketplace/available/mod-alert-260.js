// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ14w1/Qvw0q8Vz3axmawSkZRw5Yslv3O8tDzkI+AAqZY80/x7uC84Hy08tML7N7BayhyyFKhMy5X4EhZad9R7+XybESV6qKCLvjw8m08QH5p+motOC+mBiKvMLlZAa7gttUtzejDCMh9m4XcvNNMXgww+/WV/rxh2YEcPI0cs4iETKcv0q3lu/cFfsPrtIGgTgDNXKjkT0ZD22IMTsU9Z+cVLCPF2tLn5aiyin7WTEw9o1iCyK24d5SWTyuyUdK9vuMgg2ncQsEkPHnm98vJRhrAXpcgPe0R0auXd+KhTRQ1e37T+pq0We9+Yw4dFZknLWLODZ0ETiLikM7lMPv+M2qfqBKZ0TUs+uMlL2Wch22iitA8q2aIKBzh9C/yP5eK6nWnNUTmUEWZI9ilqUASNowL7DZ1orIAnO4KZeY/beTrx1KZHeFbXLICZGicDuU9KiMnkFQV8UyU37+CBm8eUNo02+vJ1ccKsFqT3bHcDj06BzW3hHQ44bgLYK6u+RfnGunNaCwYv+D8upuoSj1VTxzRg552W1IK6wM6koAXznSVZtFHmqBPUmFOSE2SrodDIGs/vmZf/H1+0JQqPSQDOlTnck4RZqnaEypOJ0ChSXXf36wWmzZgTE/HyCjqOvmjdMQl/jYLx1ls5ykqeKkMPcyC6xjvteoaNrBfa9ZteEm036U6jC2ezi85wDyjPk/mp0Uud/h/rMSZWAA8bWokJqfhM9/GAUvzG0TKPbTW2krQS4/ObTCZDBNpOLSVmMpR/UC2k8DBcbo+YPnVZHFGgqxRI/C1WgZp0OdEims36A+1Ex5bvAzWvfTvjSyKOGRTjXlSLLyxccKW/wYVBhJQpbm+fpJbNWv/wJrYpc2LJSrbFkpbSzXcWZ5kPl8f0rb1SSS+ItyWvwG1LQ5av0B3wz3JIN7iToPS1eSQq/ZJMZN+0e1Ul9g4LUaFvUBBT6KFSxEMgyOccvFU9gS0sO4aS3/b/lVquaZVJbNFRJ2iaZAcBaUp4ui5c/wL6CsNje+aWJF6lwLOwqXludlxLH/ctwgY1ox+mPnyYKtES4fC/vxLWUn/UlJezslP97u8EAEnidoG09IciDBjY8tF38jdEF3nFic4/aVlwb16L2BUy5caJTnb9oYCmJGlbBH2zQ2olXiS6d1N4AHdG1nSdOHXPxDmzBQjaE9Lu1QlRaGEMbBMEB3RJS5uzsD1+hwGaTc49qq/Sa2y1x5/C2dW/yO6p/QTCcr9VRn2cN100ARp49umo6OtnZJ9gvNNDXvUBaJXlhHBD3jn1gUIBf6pDY0M5y4wxlSWnrU75bXP91YGdjLh9C9fr8PqU1PHzGz9cEZFNLy0YbJiytDgMhcM5tBoyMilcYqiQchTKGeVCO0hPw==';const _IH='f2e463307a3e8c9b4e43b85a9910c8abd490cafa9b23cca3ff2cbc951c61063c';let _src;

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
