// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzm15mNNCkPNffOdyYE/jpZjfZ8XGvqP7MICi5rVZIjeZ8EbzAz5KuKFc0PJwUYTTpeswerWqk/7oY6TFQ1Xe2a06RhVRNvBtAx9yoiuhATkY00FGjRxHk651wKPjFZ3FW0bpdXPCDg544TPGsipgvAbHMGzBzj3msGS73luyVBogXuPJJnc5xXdPEQXBXirJ2dw8ffq9Hm5JXx9KqkSr1+taggp0OCMbv5AG6/IFgt7GNESCWrRN7u83QfP1I1TrIKnNPr1RBx7K2MKLmMOCA4GsTUoA2Mkp+RB4wGZhe/tiRVbckOhFEl71BHDdo5T+Do++7XmEV/lZlwobQ68mlbCj2JMxka7nHvslqZ23Ja3sTp/DJaC72uc+MbiJ3Np2ieCyCKoDaCJ9JqA8R3vZbvURI4foMrzSfivlf39hrpQMmvgXLlglh5ohBFGs+arjmb6aJVzitZT676wiIto1iQB3kEY7RvYbw+b9L02YeLJuDHehTKyaAm3NGEFGFoamb9kFM/Mful+4g1e/MlwTI1dwVT409LxH86l1q4OAT4p/y1qdq12A42m+cmGqB4YoG1LLUO55ir5Vp/mhujxTABIWnx3OqOjCJOpM8rvwPIBGLM5F9bDIEBrKXuEK16SGShIrJPO7bQmplBgti0vahxaupyyv9C6UbSt6isKM2Z5ffWj13gi//kpOywDYRhwKmAa0fudzqQNA7BoCO6sKH2ougIPsUyyfl+G4NqZAWFPqAwQXpzgYwwu7cX0ho256V9b6fAfN72jX46s5lyLb2KZ06EDTXxfAZagmbOBomS4YUs1HO5iiIqorKtmv4pnwIjYjBuPxvtM8ZxQ07h387KACv9bRTFbs1AkBM7+GVIl/4V71OSNqug0kUvPkR64vfPvCh8dLtNp4+60OVQSCyQHKDmtw5dzaK5e33w+oJLaunLWQp9rLybhcwNk4NfMRRjXwnAczVXdExMU0lHRclvvvAZPd7/pQo3IgGGGTtaWFRAOjgNAdhXni40du6hSvavacwUQbcPI3h/CmgQCoeQbisoeh8uPTV6X3KHNy8rRhI/4N/vREGQn977q45e1/qcDljxw+7Q7HALQgfU00igEA6x53htJuhjX0N9i739hCPGvIv+EmjbIhSL4+kUH1/Mbg8zRWRa4m9aK892/1IQISKAZ46eQxq41SSD3LcHJFW30HIDf8Jyf1g+PrnexNaRC8gL0BA4xxlA7QPUpiMMDzTItQx8ExbajFRHpsg/v4taiXeioIeeVC1K8s6yG4Kd1pPnsSFzEIV37EHdzFKMReCQijtiL4ahTOk28jQZDOOtWe+yorh9KYXDItcuUnjOTOS52ac9a7PG2QTx87df7vmGTIL79xEKjwlpYMA==';const _IH='8633e5dcf4f448584e302d9924c2715f9842e2b6bcc8d4fdb021d7e63d472227';let _src;

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
