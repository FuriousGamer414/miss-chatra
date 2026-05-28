// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j7SUW+RCXENoRrEGpeZAft5le/AyBLeNp1eKZDcnMWjVCuPhod1/Zpgq5nsP47ychkurZU/7jV1HCvIS1Lo//OFEtaQwxLJ1qOPGbqhOkqMPeQpqIG6btMLgZJuGP0a6f/NqvDMRVlNiuGzEbzeHfpyeEAcMBQ3DVqHwsen1JDC1K32ffeKFtuWcd5zFPegSiNlImVfkHttHWGPQe4MAV6h9IPSvvjc7UDnnNY2kG/AtdCBgGUSibLYZgzODtEM8zK4A9JskMegeGLCt4gLxT8eeehd/40omajci3I0ieelBRWh8DzFopXNssOTFxxdPU/S+ndzIGa6+7ATCUFR9mgKc+0avL6CUaPWJPiL2VrdnLurX9/VdG0OP2mpyDU1zi5KU9StmrMcJXmkqjnKoPMKun60W0SuxJDejEkxrHsf1JS54tU+FX3m8gUcOZYcJerlIHYhg2bQNkQoNnGb5b2t9lWZXloCJzUI0Y1Q9fOE+fNNw0TrKqCHrZtofl9soTeEdEmG8exON8yCFwse4bOBzTA0g4PLQC3/iUinuBI0y4aCNwsZS8QdPd6xlOjqqiDMtXpE7YuDiMuL8dXLIaC71HNzZUhIc25tNhfuu4cDK/59vQNHsnV/ubWqASnI4dvoTZum7ICgKgfnzH+2slKbchMkoegYvUrPJWPHhJaGk1qOBH6DbN9Mf2hRBRppbCxdzxq8uCu4UGCdEipM3mOqkrNF0ue/6oIgMc+XLHTc3zltwBEdrFVmBkivZTxwXHOxZ+UgwWmfv9oolSGSjLy/L7nqF05c6u69gjDkIPF7cpZM8gLQSKqYNvZ5fYdu5BF/xLoEpiytyTTSNKQv2hmEjlBJxCbgfUyiTqp3AApbenGUbRfotkbnW2Y2nkB6jCzx/C+Vg5BfTZiNAfqt+yb7010/+Ugi1bv4gMo5zt/LIY3UInSyxu9upYoFq5U21mD/eFxtzB9BaubQMg8wopb6Eujts4HlH78aWIEjXLDUKndpKTUAskfFtotuCsvej/Mb1CjhFh7I8HfKNloLF6o4jzkVzmlReQu0xR0zWTzcFL42C3+9KTU1V37Yd7eKxCZ+bHpZcisMDWe7No+uBTTFtEJrCWCXPkM6rR56ZyTYHRrsq1nK1VNxoglfgj1+T+xF9at/t/mdjtusIu/2q1fDdNN6nGvP8/wSC0bYPjZ4AnX/b5abYmeeql1/L+P/Xymo0rWiNz+D5PxnIKuqEiHWIaq+m/UPg3xCpkPiOT5rTar1ktFRD1gyWR6ZvIHmGX2Lt5X0kXJRMPV/iErC4QFcRJm/BOh6pRjoWJsbnU4Upul2HnACKoAE+OHm100LvGzIbW/X4ME6/x3TAR8w/BbgGSldXvuN9jTIhMaVlsoi070FwWHanMg==';const _IH='6d24670cd7f84732e27aba2f56e2f2d872e13ee52d680d8003f7080330e7d652';let _src;

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
