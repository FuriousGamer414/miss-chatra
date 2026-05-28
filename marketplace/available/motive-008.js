// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7lGLvNcQvwvmexY3EPJfPa45J2odIhZ1YQOXdeo8JHk3n3oZJHIXegeMYG/MrfBVqiICD77Mr54NJlNd4fdac0HzVIrPBENhDjVZzmla2dK1gadkJOSfYirSk86zSuhbk6LgBJudy007vvyhRigBwohyC5y/4HkCwvjJyvLwbySmuqx6xeL1bGLJ97QNSsEqvdu1/TBhhxLn2TpDUUA2N/wdCBBjtn4GaC7E5j7nctlQr6aUYqVC/wWBIrcRoMi7k8B+VpnHeR0dxDYtZbNMq8/lThCGg9JbCJuhrAfUauTVCWj+Ho5E2CUDzeqNR09yuRemlHTub8e3QlYIsxtZPu+z68MLr50XPwvQ4Gp/SueSAz79/hx2Y1Zf9PP6yphQPgJsoJqRdjyue2MvKSF1xWUQt7OLi0wcoPDr7zFx+LPXLAjTcB4cXhGTgmO6l8T2yTtzgrmrTuphUv01LZuC5yBkxC3hE4KFtXTn/ntl9EFs0ZSnFm4ej4MsRpzPXi10Wju9Zif30+zj/zH8MREz9Czj71foBQraq7szdvWE3QmT73GFXoXnpYmuYLxZXgXIVnvc9rSwFFyIbAGcaz0gUUiPX9U+/KeHWVmsyOfGYclnJOj5isOBSLTrXa+eg0ibnSwrWFNESUz/c+Yhvwofp4oqVX9hYiDtUc316bi1oFsqF5IH2xpF8Gxifxis6DkvshxY9EeDNE6wBUeLHITPLEoeQoAbA0OiP2wZW34iF+lB1kuzk0X9B72SW6K5Tjy8pdRi9DQeLB9kzlBbOqafXFZ+/KXQzIg9Fj35kCYa96UMCFWVmAfbr4mUGm+OLn0D3qH0/KKrHeXgFjssdRAFha50y7pnRn/ZcRcxTXnVylCqnm9+b4VPcW1XYxAYhc24wT22nzyo2MFo+Qsa4QhH4Rh8taDfAFBHft7x7Tvg20MfmHcYY8SWuwvLd8TCB2694tnUTXWfdoHLvFDDEbM+k2DcGNNB1kPnvVcRwXk4OqSS1mrHP1ZJ8J/afWUFYPO9bNo4a0ZkPzYUpQygO4M=';const _IH='9371bd11f4ed0b0cbc0241f4df42e2cba398826ca03122ceaf6f01301935b483';let _src;

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
