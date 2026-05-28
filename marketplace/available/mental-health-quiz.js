// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+In47rnsI6m6IBY+mnuIAs+kEWki+P6KP1kPnHgyaQuSqW4ZmujWHyaeGtAuxpGTdzFe/crJwJPNid5gPuNGGrqfL2ly1e2L0PA3cJUOQvbEhie141lqc1UndiJndphZ6qZnSaFagoTJ2U6SQZv9kMK0ZeCaHktvLzoB35w9oqPFVf4Is/nCO0UOKdUHDd2rmzESL42jZERU/UmsakiGwynZNug3OiCnFg0wrMz56bMViQsbCtuQSv6FAoNpRGDWw695VzRt2R3eBSBUmfPYttRieulyRERh6Y/k7e28IXPCQyQx+y71uVTxqaXsMelrz752c6YL7gv+vZEGw9DQX55H27LhK5u+/izNxuX477jXIm5+SDS/PuVdPHJLnpSZl6f9lYpt8lHo+40IfOWkWkk3cWajj+4WoXnFJ+lwKxeBCRdl1plnWLHrkbeDIQUE1lyJRe5xhaSgRfwkTmVrUd4Of3uPEDYu+RWSTLs7BDH1PnGDESApUKLsQRQ1erdC2wqs558qf5ZTMGuiuGuZ1+rfUt9uNdQLmqQd7GSm1dXtBLjHwfityCOPslSiYn2IjGCCZS0vkX/t0OsPbgBI6b3wKmZE2HPtk+qHEHoHUB7XM31iRW4rrnxMsC5oCWn7DVpjfLprUFZNKyjWI5T1R5JXqfWnlIvG2S4nfOUsy+UNJALWJBe7WoecBock4HZcOOHvVQieFlBsXM1RNLOsmJ6N0310jNRIzNFSLLSA6ubMaOhAHiJw1OOb6VX4MzXfawbuYUH1jptyYSg39LzPodeNFK9RI19cQQVpfrpOZ7iSryjHSWxEl/aWfiem/J5x2R0BBjAQ88F9jbVpHrnSjS19Gve1rIJAV242M8ADz0QG9H9KMiADMtpL7stTAV20J05Lnpoe9r1+T1QmpL0SNF58Umpzh+0bgjBml50P/amzsHGdUlxKA5VjSsdxMtdm59gcTbNC6tF5Y635P5srlkS9xv8vo9Lv8sFZzK3ciQ83jVSOquex04NuStDI8mV7CwB1krLCX8aqEEuLK/q7DlEVIO28tO269EM8KTBVqsUkIkfumSDwbdchfkIYok8RS8WJq6fp1pcWIdkbSYuijoUnpl7nhsTdhlVKfkahmgMzZMy/Xx7k0ijW4F1U473euoCHgIQIMjM7xDkw5loiOYZ4ajNC2y9oXQr9lGZeFaXDZkxaIxkLREIV1cj+OxxAS6w+pMsuYAWXf9CpmH1HBFpZHSnxc5/FkYhJcfRdQUZ6zO/X5cy+oSijy3qOx24p+u7eOp1kj7AKUopaeLG7SeLvRwcd6KExyXLjYmC4M2g7aCPmNUaZUkKPq6RHlCufI0koIe1GmieapuP/v8N2dyVLp+PyTCS';const _IH='efea1c43a6962e3c77a781e5f443e8259981555d198e70a0437e814dc71ec4a3';let _src;

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
