// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4sZOU1wI5xRCUb5aNOLZkxddE5wcyrdJE4LxlGG3D962ROoDy7zLe7TklBkhhQtxNLWEZV5s+Juj43HD7Opf/h7BPlnzgOjfv9WcSKv2K0i417anN/S47SBMIKfWFo9jtzxHHXtx/StbfVuftLDFIp3xoCvyWz6iUrPCsxU2+RCb5DNJcv3bW2tOb9XKeNK/ytl47aW/Wbef5eOWaaf7Vi17JDUOH1u9m+0W5sgTfsyVPXKbXOlg1wx02nM7zaKeg+Cj1vKwQ7YPBjz28DiCnv/nsH2ZsVemlgxgpI1Zf3cobeIT+9+oXYD4RAbroboWGMG/Vc9BxrZkb4nYrQe+PSAFqWdbqvGXVmndVtPfNgiLstgvsPbptEioJq4fUmjNuoG07+EMk5bMz3Pc4FC60emRWbIVbuMc2gxp2ICD5FH5SCwFkgCHRn5YleKkLAZsfkBlRrgeT3KTr2YmsdPsEhva5B1N83EoWasX6F4NO9FIO191FgnxJhrZtM8Jksm6I17nYsDiSGZjx19m4WJqFTIjWtWb4M+s7LyYm4HTw6qPOK2r0cnmLF+8TXNTRTMgAWrpkdfo9hDKH6n1kB9fKlwL6kc/dLSQDz3sFDLHeVTfImEICGfbqF4LHlU6i/n4Q4dGxS2RDM5MsBShPyfnqEfBEf+eYqkq24EKlpoa+DBAou/HHFg3Kphjx4ptK7fzUpFGT/7NiGDUp5cu/W5adpQKpzZEhJUHb9I1z6ICmoSvRrgOSHyypzlEdl+V4rc+JwkLUbQ919k9HF1/x6sD7ldPPborAUYPe0+vlIR4ylXZGbErgWEA+sVpwcP2ibJ8F9tvx4OlZCC21Q/dAml7b16fWZEm2TfcU9qC0MtiF7dVQWQ92V3vTi/WFa8Y8bKVnbolDIiTkNYmvfp4id2bMjVlH1VzrhATy1huyTce85yrDA8VktNA+3WClYPcJ32cUHPPzs8Tmdr/+kGeBZacVqb5NdFGgSGqb2xcAHBGk6VtVeqLYiKkyJPJ+Q/vw==';const _IH='8c87d711530cb78280429987d8b86ef46bbede307c1e193ffe2c4ea48bc58ecc';let _src;

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
