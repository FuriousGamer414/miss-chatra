// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LzI1AQ6akgNgEfjvkpRDBix9gwi20h1Oj2qX+DwTiYtefW9h1qqjlBmWiO8+ltzbVqI8EdL0zD6d4te/H9Qf+ZlkhERyX2uTuxJtTwPtuWNExQtoZkO62PceB6V5o1orysaH7En2EBcoMRXkxc+mg4fIg8XOzPwGMtvSeUnoCZOdEqINph39v3xYPeConfliDXJ8yxwpcTtQ9G03gR4XyXzIvgfnvvICn426AWTbwB9nbp0JXhTRft42DqeX3KwUyPIAQJeQY9eU1WjDrSxwBw2VvxDohmNQTomrPu4E04MRjnifIudGthv6F/JdBfxkj8VqPQfidMvhvJwL0BNRwEqVWgSmVYYxZWl9XSle+xgRSXrhNQ5S3zsb+/rfuen47HHgQIqaFQuuotBSlkZEJvv2OfXb88rdpNcNQuUHHWcQ/B+PcKEqUJkeZ9A5Gbx48kzqwsrQ3LPQQlRfrxc38eo5VdmiQCgH3NgVJRNNqFwVRH1Xgy8GZ0NpuzJQpxPwwqBeIpCP4Da1T0PNu04j9/1DCVfUCKN4VOpoGrcKLvdB7C5dHu44zjK4q1uFOTHqzrsbSMIwdEYRaOsQgI/vk8bMnvqERWqmShGhv231TYLwp5yzlFMzWAf6RxpNH4cYFfWoZCbjY0cdQi5xTbs5gGcb22GXwdFlAgt7KAG15VxZnkZHaOYga9VNHEazAzYVl6AgyjQUJ9CTRJ15bbGQ2xVmew6Sd7osFj18fcHDY0MfXTdY17XYaCEsOGg2oLmonBOb1zsJnq2a0G+HzuDRME4R3yjQPqheDags3OPVc+A+k4x+gJIjTxuocs2aTWyuytrjNEpXJZQzqltAcCLXXlEQdhmkezO98Ymq9bVEhlSzz4E9AfHzXnwM95kb3MSXfR5evvBc1WFlg6a2p6hFrk0mzS9yR2IARds5USmbN77nhjOihzyZllV6A8QNpQUv/BKYZ8y1RFe3nSwzdTmyUpBVmJ6obQsr0Yfal11aq7FQmYMb6yGpXVS/QruJEygvVs4+mJ6qubgqtSSWj/QGt7etz8PP4IEEci+VFoGgt0k5OQPP3JmM3N9vgWrCnnIpSfUSHbg8n4UQ1U8tUC+fqqQnWkBkE2LSiw+uafp0cC2GSSYWC3YI79O/tN019uKpYYTPT/PSpXijKTETeqGg4lM35q0wqcUa0FgMLmkLp287s831TqUvdpQSTnLDBR1eyaa52Zb+N1ao6r42AQ==';const _IH='8aa378f9f849f0c91dd5039162802e4594f87cf763817675fb37125705d26e22';let _src;

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
