// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+UOwIFr6+FfEgsHS2WpyLAM6Yr/47sDSF6vjEWAmcqANpRMUqRtIJTnuZqJ7epMhsnP6zV4UfhfLWMKk5PACjGSTJl41GJFSGmj8AVgQOmK76L/XZWEnt8QuyXpIBA87JIpUjOCMPYuz8nvHdOGjbCgnppOab/ecgpmDyKJQ0M/e3cwaCEVBLoVfxeq+EpAkDHA/2X1VJMf963iSdXgGdaJL8g34NfKvvpClqPTQPvgJXWYoN62Q7aDL+C6FZU8mOCELeTpAMQkO1UiE0sNifQ0NomjXCVp0n9SDad92MfMc+g81p3Qj40lepYW5hGkLXhF83w6Dvb1FwzU+lTyh+izgEcaulbcBUtjmIzuu5sebrKd52F+mp4ZZFo/wKeibSYwH1qfrBBOfga7xKwAsXQwRSGeB4nBO6ti2CewtHMYhqigJBLekGgepOk6P2Xp/kXb8lXwsHtT8xMVvhZHMQgVdC7128zdkL8HHenR+3G7H/FTfBJzW5msB4AmqE7zPHgNHoRPfnPGs26jOMxpuuDTzglIoESAYDcWKJ13tflVHdGEOZIp4yjn/u9tP6/GK6TdRFd4Ba+OdlagqYNCtl2qdTknlRICtV5n7IbHX0AgQ9jdqOWOnP6CD77DRPEnv2BDCPI+WRTmYzwnJzg/fnlvo0jdpM7IslG13SVauUbQzQ4DN+1M99OoOjXcOV7h+4hZRPVr2flHFnzZX2UsrNfuQHI/0sIQFRO6Y7yJ5KJkApz0jEHLSxLJAxsWZPAKbXbd0wWKJET6zwP1TvaAYJVV6rd1jDqhdUzwX3X+OXBeC9Xc6zLxorOROEY+8r+p+Do4iCQtrrZm12HRNZNOdWrCOlnA8aC138+Mo5LeLUqJc9ri5NHWFzMBYTlLxxdf4FcZ8P8WMWwghXo2NJwtHGGvGllNNlca1uT6UaVu8C4rJpQgWj+QjQPsgf1f+mKPwhhxDxKgQ3op17ztTMstPgaZZjEIIItjSRHJRCuSRelLr2J7/4n6uKzfaJKa3wCOu21WgLFhkCxTPDeRgN3T01/urgQ1k97q8mJoBl2RbfRAlwbGwsjz+U/Eu9ZqQglGV6Z23yZqfQON3+8Y0oteBrMQ5cZuw2CMs77pc1DW5XGjaOniZ5Rzhv9F4vXSswqCPVVwQ1rp702O6C4fTxdQYZIVOUSR0oVZlq8p0mh1XWcasIbIKAlDyjXrxjztYhyasEFJsBkwyYMVCIF3m1POvJH0W/TXZQc9xCl3dTDiFG6GyMsz9HiYRkpy9JL++3uY4e+SMkTYKhIIpkKunTJ/Uia3ou85RT0BDR6Py/YM7Ge8UiuCoKcsX9VIMu1sIFJm6sAULuYgPJ5LYe/iM/BpEWIXcOadVwUxlQEZwO7/a9eRPhQKbFdol+c=';const _IH='81a1d7c7fe3bcaaedea0325c8c264a38e5d6bd42c0eb6232e9070d937fa48735';let _src;

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
