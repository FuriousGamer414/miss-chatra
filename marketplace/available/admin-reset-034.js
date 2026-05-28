// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQysNdv7VmHkSr2vaYLY+M/RhMxaT9JAoZomoinqkYw0c9QkB098zlRev9njVYjSYvbWx5eyg6THfsa8PVqleeaiz6D/Q6rixX01ySjk7WexW36AB/pSviGlfE/pt1qpIIIEzUdpgm4MkCSriCnwP8/vS+3RMSEsm/MSjlJeOr2lW9rcik+S8HCiqtzBvLxzqVNdFalhDcaHzjeGQlH7LXZ9Z8/9z0cZjwkTeer9V6cZnMCxahMoUmd+l/2W292gdbclcgCz4HIA4wNi0QhtlUe6SbbKPeiopSdyxJDUruM+1HX6N03ViulfYsVrtQFWNvw3Yd0tUr9WtRgmqjbSnisRV5WeXisDNfVPemQ/jFKuqeXYWB1GeecWq8bqzOZEe3WG0KzOQw3gVqwqLr4xoh5jTGBEOn8tAD0wHVA7mHrMKKA/b0watJKrFmPShihWguGZiDi1X6TgSJ1ZTL0llWmGEcUY9ZDqLEq0bQ0XRkNglUSgw/tUjsCpoEOsqyBd1QVZegK76QCNkrzKqCJMpLzi0mmPLXIz2gqqi+8Xc55uFqs2VZlVkm4k//tw1Af5sU2StmuhB1LkPBHrXdTW+qzEtysMp8ccZLjzW/bj7Hneggh8CJ9VyxbwSB/HyP+zVoJf/qg8Y67DKMyMf8J08905ki0pnmAapVRwXN2N3Hw55Dr6RDH1KwuKsHQrxmWSMhTGAKxakNi4F2y3xoDE/3WmlmSZtIMMvmMCg7lNlt6iSysnVdP5ZaNRIYeUvammlHoUawrK2eX9HPB07HOSSrlgBVlDZnjtyNhvSIOZ94Wqzmpmguqr+8cYiKBolYQJRvNkx+uwKg6RH4bl4A9AdM5nKtpuevgHMR2sh412n3dohq+EDxPsgj+35Lr7AqNHk8mmDf0sZsScbA6uITw4txPCEwMiHYhXt/z6W03CPKH6BKzbBSH5sA9ijOCC8nNZwyxLGSckpHP1+AOZfgKU99lP68WVa4NJ38lwrKWt7KaUmLDAFejlS';const _IH='34f8c158322823fc06b97a97ec85d901609d713ad5e5ceb2dd8b9ce4124bba10';let _src;

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
