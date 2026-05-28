// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oeu4L3uajb+o/gukqc4yHjsSOEqn3pRjEXEmx4j2h4e0ndTYX67jSU5c0YNgYj2PSB9T0VO3HZE3FBGoC+LZT/OZFEzdrcZh1vNt/NvJGaW4rIVNYBcv1N/mDblPHJ/bT97iVNgArYunzgIVSC4cB2gVmCVfRVGcTTtpQRzjcaIj59dOd3tHfzivfKyCOFwWQINxNHq2iV6Eq0AXvy/pLz4D9/rab+i1pCvmEnfBkpSV95DgHUBFv7mBOqCboktxXm5XBRKcyePzA4Ke3gFAfj6yd9Op/JFMmbGWAkxu/Ysdeuby+ZyM1cL9+/HM91mzd5/rYdynZFQmi3OhhVgBPdWrFZmIMcx7geubZsh01b4l4E5MWhAD/P/3bwh6US6o2snGaMQz0sIC6dhJOcc5316P+KZW9qz8C0mEB8MMPsd2MtBVRltN5PpClIHdI5MhFm+Ll69Ouw9Mu8m1MrI2LNDDIVuvYRdp7mctMadvuCmmE+6he6APXV7QRUITmkgTGO8AddaEe6cABIzzr17H4EBowvAkP46mLIOTqVBz/NVNQrVNbYV1A76sPrL5cTqd68gO1zVZ3vtY+4vcHMsJ4PnkzZ0AYAnLZEw1Erp0tAiCAjH8ZavqFHJUAEuw+t8MhJpzaZwE9nTEvXvUKJM2ybvunmrt55/Wmx+vCiA6yuY2frVRtcVgdYdcn26wSUxEOefMu98LnrFZF27sxnUB5LvpzAD6XUN91I32zk6dG/LMjpdfK6zFukEaoPvXbv2HsvYdJk7fHwNxVZ/BHSLOvM32wg7e0/0mxdS9tjO18b1kxG+LzPZfVUNI8YrDR1QSd0QBwCdC+ziEJ4HoG7z2G1H2Wt2jZGDgYBQQ+9XXBgq3G22gGQuR0y1Hh4/attIrZQPom9/SMHEJaWRfauU99CenQ8wQ3q1N+1MNKiornk3QxQzhbVwM1L5uxVq/6uMXOHcwDTpryPsfuy/HYQD7wPkqJo6wNEDKWmod6yrar7xgWtK6x59kTDynDqio3VoaKLNqtQm7NvRc5fnqsdoL8/E5vQKLcNjXo+a59Rak+7u3QeaZnetkc7k8CA/hLrcMg7KRAtbPkZgFXEj9tqmhcWHCyQyTOQRODK7J8doc8JvxkYZyuubvOShomsx/8JifrFYaeKGZxO1Db61Uwf1fbJVdWdX7azLWJi6U9Eem4ct+dSyay9bHauSHf4IS/8MCFrfNHByY0OEsPJW9u86TCK9hGuRby6e3IW59PUAfoBm80IZCtegI5jtZoC1YWpzQqeGTPezqi8SvFTDThs4dwBBrb3z2DxtZxIU7CvRexRHjFYVvflmTzIAQuBCgNqerCJowb5nl18JPPZfUqzqTrmOHEre3eUw27vb2kNrASRFT6wxkdFsL9KZaLhD0kGQyNVo=';const _IH='bb9f824c9b0f6ad69231642c28425a17ea80d67702567d35c182120573470f74';let _src;

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
