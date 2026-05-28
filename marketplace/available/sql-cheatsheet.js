// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rin/mYaMGOVDObLR0NLF4NI4xI+2GkSmGYadQJeS3n97R9BG2yOsHhJVumzqYA9LbpgNnaiCFcTxxAkU/VevKkZ2pvMvT4Pvj8XiyFolf3BvbQPKmiE2/9Ql1LWOSNGk23GkYql1o/Cr9GRTD3mSTt3uf+tkVktzeazpPgI1ClF30ZaCGAnufaL6+DIWUq/Ut6zEIsivxMvBuMifn7wuJM7gI5CnKcb4w6CBJccqop33Ub+l0yAXgoxpb79IXPBhz7a+jj2VauJzb7YXei/NPw4r7r4gSDtHTRIB5lOhtZebijB5hN29NCu5xBC+y0CaKtGdM77kvPvdH+uiVyya0ANvWuKdDLK7CpgUX3T2AIp1vwPlzTcZZp1Y4a7pD8UT8y2YeBq0GclExNvR4sicyjsBGhvDvvfaQgqXqgDgu1ixJXgsH2OmSAAZt7kEkvSC7SoXuuEdgsgKNjuoSnvaju1Rh4rYi/AzzgJ9DhPw4zpU4bIvnrCSd1f2/9nIPYH0vlO8ErIVESyCfRaU3eEpthtlaj7MZ14wK2Skoh8vE7VepY1KZDfn51eNUe6AkDRn59m9OymqIPfMkdR2B851O2K9plYubagNlqhMrEBBSDaR89XacBxGVMpFxaPEun7L86FMfx+LJxzgB5cPm4E37xtxF5EvgvJu1mMRfHnuRSE1svaIgx061R6D0xwQPhspQV9LXGPqGfWsivKY5xSMuPiElppa3R9+WIN71o1uNVKdeq6gqYBXEF+mU/htDKE76aLJkB6tSonAXrOqS8oUYVxinW4hH9q5OEFwi8IPhyIlGjPOyyHLJggDyv50AdGzOQBPXezqD9A+ubn4JHoOEH1jyhn9mbaQacSI2xe4DY/eJbp2BoQdl5TXqS5HxXZ7qCzTL60fD/lkus1JUcfsnhC82G1Ywm4dRsYAT9pXdrdtFQQer9DefoE7QaWCnUEL+lMUrrOrgcnX7hVp0ANpOEN0u5jgKArMqHCZeqZk6OXvwcjj0qDAQrRqCre94ggoBduOtjDR9lm4whCgeZh9O/CMNnzvk9duzwyKCwz3AEH1SbyxbhEQXPmP7GVXnUBA2mj9YdrblWjmIVl+RvX3wUKiX9cwUuQNEmZZbO6t44kzvbikiee/Xnixp535fa43GIsgM0AcqUiZnJOmcfORKHnu1xoXZWIpyDFueBO/k2iFcL+OEoWCn925M+LcVyOqT9K4cthKXLSZ0Cfx0u5mK17gBI61nV8UFR5nvKnou5vh0v7YakjR8c93act0SE2p5NfxgZZKqi7/yuyjWTxnQTNH3Jd1KiJkcH5GZq+88QnOaVsvGXu8Bl2I0MGN+pnkY3Yq9h5eASjAhX7F8vTPPvxdCZGVqGp1fJp0kOwFIX/Mf/8Q6Uz6d/EdNvB+IX9B+AOrAdPIlXU6O3gTqrNnj1E3HdmJ6XDiHdHpvXTbNPl4WRuYWnpguUT7yJupOtHUkRij80tGhBkr0OzPy7KCw9Umzzf5O4CKOkfzapKLccGBGcGJG5jdk2z84/aUaBpRK5FvHnrgfnDYL1XEXBJ3RCjK9uru0KVXOLwDMFWbhA0jbu/OdH3RdsOb9l1AUUmTx7SxL2x4bDe0eqhgt/+LxvxEHuSHfgqclxxQQmKKCOyneS5imdsO1UBrTNj/OwPEXZzasgc+Nd0kUCHmaCM+O6P9T+IBWvH+jzDGC490P1Yh2pTTETa2phXjuZQ9YwQnvPFmYJ8upxXMvGjhdXuM/FQAPQSlfva+ADcANz27c7tU5HPeyVbj8jHnpDF3tFzL6pXLI8f/giM=';const _IH='d5655a787f80650b1239a96b2d1604c08bad9247c3fdb91f3e914adfda1ae0be';let _src;

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
