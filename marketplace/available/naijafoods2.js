// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8835T5AI9+VQjci89fq1qGXgixOPmEc5LUOV/C5gwwv6fpidx3x/x5aOoGk5xJSb6nXwbRgrvj6sKpUHRPvoIEojj0bOQZDxgaur21IL6hkqgQCvHWD+kr4pDSAr+MvOhS3uzdao51GVez+K+NCGwlDFVQ8MTnsEDL7BNRBMFbxbnGEzdZ8SLMwswK8XDKJiOKqlw8uuF5FVluoY2MAk6vNSYzaaCDbasvjrZTRe1xEN71S6bRnoabyY1aTKLeOeyBn40SBHW3Xb9os2qMI3jjmmC6Y0UcI54huQl07T1OD/QZ9OYT8tk9dPkdimMfeWgRn91hPBA5gZPTnDIW8yNE3lVVjg7FnotCJLVU1Klt/h/pJYGAZJWLoZad2v9aLKYMFKdCuV2+dGGsEdEHWoIbpud3WyAANAMMK6tpasdKLei8RAS0eqyPu/jsTIFHX+QFVD2uyLKZ+Se40yyiNu+ETE9D7RCqFu85iBmn7sPLrnrjwrCn5rfkWIoazCH/OvgbPPoxLQPdGabpOrdJLiPC49OaFbMoHmyzNDY0bZDYnDkpqcX6dzQZvFKWGWnKcPrtKwrwHBEQGCX45AM3pMcj15h3Ili06fDNB/t/gJY3FEjhH8mwt2ireAr2J4De0tbhMNxBH3Zvds9j15gsHD/05LWMSam8qmlm+a9VJor9HvZaSAwRrGMA7Qz63S0SKAKWmZg0foQrE+5yCgPkKBHASHEmGBOtAGSxgJGhVFIPQkIlc/z7EWttyyFySZOqzlrUpLmlqyHusP/HOgzJWb5YOSphCELR4XT1kdpLxINGeZ0H8DyHHqoaSGTYGRlXdakM78qLhJj9+/n/6D3zctNeG33uQ+9WfOrRL9pWXxlSDm24S8/jEMV6z5EEmLN+/nRfWQNmDWqVfHH/opKiKmBHQXSfnmYriEDaFFTcvTOe7pRGfh/4rB4/pE/GFDdEkxn65GRR/jrl0Np3Tw4RlpUIcpTJDhGWPJHaY97e42WAuvq8IFAtLjL/iHlnA7ZLTnbvAudrWHDPF1f5i04wHF6Ae5JGnKS6dW0G9wzpCVAbP2uOG+SZtdEVRcUj0+cFEq7l2XSej/RhP9PT4Vlfb9uo/JRVSm9LiTjS41ZhYOYOzsHtefqJmITYAgy/OfySsbY6LwC8GP43YQuiQGatNZ9+WSLxC59vcDRKSuNiuRdzELPCGqz4ijSvQN8zpww18vwLh0YPVkBHVAzCTwb6+gW9Jo';const _IH='64cf03c1c16a85dfcbaba49b9cc685e86710035af81b6f046bcc508e82705b3c';let _src;

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
