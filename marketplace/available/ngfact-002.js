// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9rT/TrfH9E0QW5VHMdEETeijLS+wbfZnEM2lXdOqZ8bkAlgmsu+9CGVIzG6yBzltS2iXf65wEfzqZimqrXdF+69xS38CANk4c04nArLO4xtFRsjaem18LeQLvUumFPy3jkGYfkLYaiMH55AgBOWf3Tii2xhLBh2/YusHrvrDPdMRG7o38mZAuvMQcCfP04mwXJAYx+Yvbme4mAr6V/SPyskV78//K+Y+dlARdKdQ3u6/2j7sGvcoKhTcqwnaC9XV2FmQhAq6nR+CHU/WrZ6ONXGCMOfY9WPUeeVBjJ9UdB2r5lL7DgourCsQbcj77IS0sT73i8Gx6RaKWkafO6gYxaa+xIl80UdMOUuHKS8yPrV++61Al1eVq3tt5O6LWGlDvMRkQ7TnNRXfg6X98jPnFrIPPCo9eoqlVgcA7rKsuU9rQxrGbALeday5RT2P06gqOGv6vJ3kuIAd2X9rxvLhnrLJbT6z9BwdetF88OpsLN0OJ/+Tu/EH89qF66xiXC+Je0KGMH7QlYo9amhCP3pjvUzxBcgD0WV3vf9PmoVj4w34deXIJ96W3N3tNGJb2XdoreUAoxKtN8GSL7j4IQ0pyCkr2DdO3WnVsVXhOzKe4BOFnC1K3thjJHiVsuu5vV0dZr493It3wGMxWteTcmNKkz0RwPbSNU3jBGUZzJWAD46slqkFvOg5zxpGilHpnFLebZ+Y';const _IH='ea71d569616b06373b62ad8161d868acc93501fb2285035e728f9b62b9d6e7b2';let _src;

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
