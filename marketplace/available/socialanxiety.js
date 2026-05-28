// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5RwjZjY8/8+nzMrS2lUzs8dvonseO8AXG3/GEB2aoAv84c6SqQWhvixQ9mX3GhNJgoX10JF7KL9NEm/H4UfdCVmY11J2k0YykKfiLyRDoyNSLVZVCVKOA9nmknI3b5V6VFzGtuouN4WM8p+srgiEr0jyVRoKOzY/znYEI7WavpaMxmHEVdvatSfxg8bUodkZbVYf8DBcUf95BArfGD+Xg/Fpc0i8cBiSyMoWaG+6JGl89nYn1Ifwp5jbkyysNOeHUw54m8szbzr5RgYIBcKRtxkp/ORa6GjcRDhUKUHVMeKEmtod3Ugt59wSZj74FQemHlzVTO9qoksfsnfoaW6+BecwdEwFCeTRiyMjIKjQZCzOtbtfi8yCO1eA0EYn+Dn8xWr2ojT3+GnDTn93jR6nOjJ+boLr5KC/ZbyhjwvrM1SmZ2Jimfb2l35eMzeL9u4EDtv/8S2l6rgXMPWcOIrFnR43K9Q8PNjSMmTJGb+/7xq/gxYM6t+z+Qmfwaiz//BEbL03ckEMg6FhL/3DMfYTcfoyh8EGCG4B5XYd5F3KzxC+T90r9y/vnnjE27EX0NAEJVQzIYonU/6axVD5uYqXiIv6Y33R8caCqJgs8QVeg8d8zrfq57OSNmR0JPHkNO/qLJ2f+nsCWVvjOZJ1JlF1ye7kGS7Gt1/bRu+d6P7BILZ5uCFOuraYTcpMkvLIxgQSyzYo0ViiQJPheYOfTkCbiYzdr72L9QcQcyXNbgWU1VAWWXuQLiec3m8A7RoBGMrt6+G6MAP5d+sEsROO8Zhl87zGtWIEkz2LSslAt00J6OR+HqV+jS6uiqlzeDzvV/l7m7QFY0p32czziZxMMVc28HtbEmJtxg4cCD+4vKwxLFlZbZawsBhTBbcs5tL2T4J70oQUTg7EmYR4kp62MSfDnSJv0EK5mowzbxYYfVJhg0aoEf3s1UpM1Acr7/sbHX2oEIIsVZF4tLmPN5ekTzcm36OsLIBIRCgWvENMYpanV20jav//1zIqiDeIiyf+DzrFFwKEvNkWZAkPClyTlRByLs865pF+95eZEbmv89RgQpyAmi1H6cRRV/k0Lvc7/p3iy/Sz8QeZDYr7pQK878bGQw4B9E9WsyFEW+lqWPRY2A9UNjisIWK2tGZ+Pcp/YU4WS3IxuGWAHggZ3vm05ZtamvTe2uDLPjEB3Pu7l3CSYv/u5lIEx2WaYWSk5vk4Fsh1ivYx+d5LD0=';const _IH='d48e41c1ddc53b199baa7b92ac081b917e67df7e2d67cb69036c6a0231bcf25e';let _src;

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
