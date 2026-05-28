// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DHAwQE/BZ8TaMSgDcKGYRfOYW8eLojJzYsHzOyrDSceJPitHe1IbFTY8vc5bZUihDFKfvJScJzTWatfjSNqIK2sBOoEO3EqIfmfDDPskulX4UR3/yDwWfZ0rUNJYELyNuhxUKzEImdSFz3sz+AWnCNxlqPX6iigN1KK0X7Gk85zFCldAM3YHwMxsJrhf7v+KVPUYSYNi89q/F0lLI7X4ut+jiiOJxPUQyBpNuESjrt9leSB1jscHKAG0dmSEPn3Pzj+HVjFJjybiX5fybLyhkATY0j6NrbWf+e9HvqyYcP+gAaI7EsOPyAz9Ea3JzoOXcvHzU711+FVMUbMXDwB0/oLHYb1bZ64dY9nbhz4PaAbnoNfpgCKcAGqF05F2G/3ny731/4pAf+ONFkNiYNbumZVA1LHM3ZTLhnq6EO0Hn/O2im1Hy4LOTU4qhgX8hUGpoaF7u+Y2DzZdkqI5JcgYx40ogUOi4ySkMB93eOSEli01S/It9Ov6n2qmWlFM2ENQvNCQipd7SQox36SKLPtV5pLawhIJCv7wwPiVdLTZgjY4uhwrbpcgJQIFON8ZEawDbGR5hl/8ogGvxR6O+Cwt9Favn5RJSWB635Fiet1QI625fEXfXkY2Tyj0BNTHKq4gholUBiKAm6xHc1TwAf7ItNSjuKP/1I6P6Mm3lzl+TVIqk+ly3DGh9jLwNMZhfnCW6MaMTEpwneXgyvngCYuD51Q5XN4u8dyfvTKG3ek30McH2g9k6W/GCWa28nb1rext7ODX69JvjBlt7Gg8/bOQvPt5PX9D9Zf7l09zgftyQPFHlJR7tLMgsZ4R2Os762JFfECjTKdnsys2F5ysKf9lwbW6ANq9O3WsPoyniacIJdBn5PDoYrVhqs0RWmk1ox7aiNlgqjgzCkvfmdpy+NTqdw7yA0PqOTmhK+ubq53DiAM8GZlYraaty4utaMuO7Qf37fRuZptsIK5QNYFAx8tCFEAVhw9R2lAA8wXBGNJCVqowWGs1h9AAW9LXF5MpjH86D7QnCzJATvuRkXwJXHe0wc8NTW2iRMbsS+iCKn3ogP0QeVBF4eaLf4hCOi1w0CXlEhnY6ALElRCrFsU0h17YWhDBuGOBTebYCl05YAKiUHFV/2RRsJUPTz4hwMlfNnR4qFeFjRTOuueikyuLmPvbZ/X/ApsTU6qCxSyOjiOksbJBlNNFtSGKzT5Qqh1tRIs6L/OBPxnn2Bf8z2l1o4d4ih24C+DDkjcBFrFM/EQ65hfL3dNQ0MdzOh+mH/WRFsalqAg2CRLdiqdGGsjVPlyYiReuvhyKesJbr0tpanaFr+Wn8BR3D23gSBRh61vxAR9dRNqLr5aia8ONRwkk4oanViYymDiK1NumBvXqK62drXnjVCF2vwR3yY2yodlYgpi+o9U1lWUijZdLJs4mNAq2QZ6ih9DXnW7gvCy/D3tHODxtTKFAdgUPccDvR1QRTPBQA0hAhSatLgMPoyMylwvqsIpifLGBjZ+ruc0tZP2lTA==';const _IH='429827a62ae67cbe549283f653bbead5bab57eead2bfa0026ed98509b6259b09';let _src;

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
