// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/VV90qCv/6o+Yf5N2dUyCaK7IavXvQ5I2Y85ABCm3f4iptMcZpT48yW5A8UumjEBERAL+/s72svPX5spcmRa9HmagO2UcLOLfTmd19VH0Uj1tItN//FOxTj6Qnk+1gO2pgglHhg8ShgNm7x0spEjg3grG+nq+lAbLR0Vx0oyvLrFaQrg76GXenFK0li4O4fBGcN5GovmaaX4zbTrPhImMpz/7BjlrftPf4oKheu8vcACXpFnvPWAuC8NKuh0QfojURe3lnzCIr8eWR/kKNFTlzYVF5/jNp1SxLZKTCiT+a87ibNRIqbMNCP3TcEsDCU69Lfam6p5wvdHhi6Ejs8k9kGzHOdiuWZWWUTAY2DcJP9QymaOUpVFGmSe+mfVtrgKDLf6BKim12hMqqPmWRdwnECfJnf/y34OD3ko+aypJU+tH/OD388Zxc8+uhnv/VsZQcFuTgMwsk/Nc8xPafhkuF7JMEdkqMUnPNXDFj4a5jukXKQ7KrCJAI0JF/uiimuahmjuEL1UyrzIy2wBTGppNeGOV1JZfwZZfvoIpNafrPNyNKb/LeF3dnEPUywxuja59yEZAEOXSwyehdO5jtJx5Ts981wDiR7vQAvsWtdFz5h8akoHgnw8HN7ooDBbHd3NyStDqOhc9j7WXPB4Cqe9H24M2ey0mq/Q5LiFOt9pYccEo0KqsPojOuq9IXj6+lESHh7tYRV4F7O1TMqdBJLbUgPNNkK2XO+AHcVo8d2lH2Tx/VaIG04WRloSw==';const _IH='3c8ccabc9d6f0e2113511846bda03ae112757d35e0a45775e4f2393fa4325f9d';let _src;

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
