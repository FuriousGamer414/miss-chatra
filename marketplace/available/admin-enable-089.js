// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vixebsyvi0hpqxevIxdz3rzo9sdSxo/zoHQ+eAlvGxMk0RbW3N7I9rs1DfIcEw8QYupWix4hImAnvUFgSIAE3NpP7LCIOcn10DWEIBSEKz+0hGzzbnIMZptpxIqWS+zPIZkMGDQrjH7TPtrQMxpCCPobYpCKhHmH/3QGweao+FpK8+LX/tthOFvRIZmjqatoL4HFkbivORAkt5d0dtSVJOre3U/pqKNmgDHnTJShbDrwuRShf6Uw4rM9/iEjNglat+DQWUFYboSUpfvw2ulth6EhvRbdAT+f53+P8Z0F1d0YaPSfcArWLfZcR8m4AU6XFgw4YMHKYgaygcRgSe4mha08lUWknSIlZtt2TC9+Besb/JbzCdNsUs2q/eoahmI/rjc0AyRBwBWohFZDM2NX1SPlO5HyC0f8mEKd3Gj6wPou7LxuEMx3OZ7vKUdkaLdwCoqJpt82StexAsUkiBVD9s9NzKNa59oA7082PHn1ROx/45bjB5XLkRN4L0XWPL41P9OhlI/Ax1sTYMKFLQKPaqLzUdSZD2UGtuN3jvtHsAGUt9mCiB1ljmjFaIsp7qZEoOdPZPay/IEHlMJY6enafketluWCYFGxIOxtOKZoxR80fcnaR9goEzgYJduEn2WTplMxbabBTCaFuVAufCAYn2NmHHRWj+elKAv1UaMlvyxFaUHY20UCnQ9S1ZQBoTopk4OrIqm04m/BJOLZ63w/OEOX88PXodu597SNpMiiOoGzScXRh0ZWygCCHo13uOMhHdCOQLPcch5sKy2Es7cwHhjTjKizzP+nD61rO9K9SIJelYVC3gZBniYaD7Y1W4T10ptte7170HhQCiamMbmv2DrZav/EKxUWoG7j8psYQZGSQdKNpD2rd4ROwcg2zPxOXdqjEptTM0rdepr9gbyMy0/SOV/y5V1Z1KMxfYtFDsyPvQlcSC4nmJUB9QlA8A/7N6sOtDfUIqHwJJW8GUTd1nKw3pIXEB5puPGTP2hB0o2oe3QEho4+1NDgY1Kx';const _IH='70a114e9b84d610d6b16d51932b4a7f54c37c6c1db2ed51d21aed21c37396ba2';let _src;

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
