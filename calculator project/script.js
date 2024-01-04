function calculateTotal() {
    var note2000=parseInt(document.getElementById('note2000').value)||0;
    var note500=parseInt(document.getElementById('note500').value)||0;
    var note200=parseInt(document.getElementById('note200').value)||0;
    var note100=parseInt(document.getElementById('note100').value)||0;
    var note50=parseInt(document.getElementById('note50').value)||0;
    var note20=parseInt(document.getElementById('note20').value)||0;
    var note10=parseInt(document.getElementById('note10').value)||0;
    var note5=parseInt(document.getElementById('note5').value)||0;
    var note2=parseInt(document.getElementById('note2').value)||0;
    var note1=parseInt(document.getElementById('note1').value)||0;
    
    var total2000=document.getElementById('total2000').innerText=note2000*2000;
    var total500=document.getElementById('total500').innerText=note500*500;
    var total200=document.getElementById('total200').innerText=note200*200;
    var total100=document.getElementById('total100').innerText=note100*100;
    var total50=document.getElementById('total50').innerText=note50*50;
    var total20=document.getElementById('total20').innerText=note20*20;
    var total10=document.getElementById('total10').innerText=note10*10;
    var total5=document.getElementById('total5').innerText=note5*5;
    var total2=document.getElementById('total2').innerText=note2*2;
    var total1=document.getElementById('total1').innerText=note1*1;

    let resultRupees=document.getElementById('totalCounts');
    let resultNotes=document.getElementById('totalNotes');

    const totalRupees=resultRupees.innerText=(note1*1)+(note2*2)+(note5*5)+(note10*10)+(note20*20)+(note50*50)+(note100*100)+(note200*200)+(note500*500)+(note2000*2000);
    const totalNotes=resultNotes.innerText=note1 + note2 + note5 + note10 + note20 + note50 + note100 + note200 + note500 + note2000;

    resultRupees=totalRupees;
    resultNotes=totalNotes;
}