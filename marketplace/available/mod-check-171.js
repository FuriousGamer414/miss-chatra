// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d18g9P8jY7bRiiennlvBnhj3lcrPKUknwU6H6NO8YVBhuQBqIN4N2JckDQ7KmfRYxAfsWg2Ubvz3G2GCxIs+Cw9s8crKzm0Os3gFjPLGneCGSxQG3hIvWRn7MhYCsQT1GLxqpPSyXMCwZ8gOa2+m1wLmblPo8gV0NcYR6kf1X9A1QFeLFDD3AwTjMgcZHH0HDB7HQ44H5vTQgGcUbGu+MUm1r1cIrB6bMLvqvTHkjNKwVOQWsw1PELyEv+u5Pkhgnzwp5Sf9rIdxvCtD0l9sj9aSHyfLqhn8EJxOT7I9O8AGyBmhgH37wxsrVR07gpooDxYI4Y/M1wxMGVg15Q23BXGVn1s7zqFjgYHFgqEUoJw0ZeDpDAl2erHXaG0uJBoO+zdHwuS8/Sm9yBt99gFtanONvMaqljXESBAX/hqs/94Pz4/RkI6S/okdV2PieZ/l0CkQv/T6SRw04ti2reqbSwKFO6nRXUvRjLw8xRrQmqQLdlj0dW71G/RQ9WSZDhcLzrsWWxFwaSeOqnF8FEMCw3F8piF3J+Ln2OPLUZnmwmSlFEDCTXumfA59xKicpeuvmJ4907/37krF1MvhuSQJOvenXBvn+3f3sTfTBxx/5H75BwvYLHG1xK4M/S//Dt1y5pBMrv/oAplpWremFc8VVnCJLNSYZKIJhXe9x0wp+/zdfScCQZfy0E/SDwi4xComsMVg399qfnfgKbES3YCmtrV5ZAfFHpb4pNwvW2X3S01zhTcG3we9/MsRAds1dTjzrTCtAH+Rt8G1OA25XBgyv3cVfhV0vNmUqIM/1OOreK03OT5x1AQW92/rdQL3RM7J4WfEnhpAad/8yNm7tZ4EVZvaNgRCfQ2zP2egAvRFljaKyCsszf49q4W2Y4h1xtDVRJIkchxpbTHR2BpXsk2FS/EYb6tBFVbxDT565KP80yXdj2E94KqI5R8QEjSO/kj5ji9ltFNlnowuzijgxsLl+w7RKeXccaQtteNdCF82ZOLcgux3/DYkDkhZhO9wFU2Id8W3exnMNovBsmVATdEMdcc6mqhYzEtybQjyKaIXZJNj7xmU6MTA1pCSBj4dRl3bOv6widaqgdrdL54Lp0pwlTIUs52YwnBbln4udQWZ/IFGnBGYuzETvOcKbFYbadtRcE96R0uHiCaEcjnb7qgfPc+6wnA1sheUnQGmpYpGV+WzjAIEILgblzz0HhA4R+qeV0OyZJVbqLtaRf8ShylP2yTbk0Xfg6lkDveRYDEgc1oiMCSipOk5xwyHAAOx32xXDv27/gjM9/8A12MQBjzeiIXqRcf5fw6FKNlcP2ReUp0nu6FRU9mPAp5yVISohuu5R5sN9ZdM9xEo55fw7p/AdQ7LNAWENvXI/B0EsriT';const _IH='c45cf1bd28c624f6e4a785103adfdb28194cfdf1c5de83639181a0c92b8e113b';let _src;

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
