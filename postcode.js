let search = document.getElementById('search');
search.addEventListener('click', function(){
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let input = document.getElementById('input');
    input = input.value.replace("-","");
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    let address3 = document.getElementById('address3');

    let url = api + input;
    //console.log(url);

    //メモ
    //fetchJsonpでも実行可能

    //fetchで郵便番号APIと通信
    fetch(url, {
        timeout: 10000, //タイムアウト時間
    })
    .then((response)=>{
        //console.log(response);
        return response.json();  
    })
    .then((data)=>{
        //console.log(data);
        //エラー種別を通信結果から判定して振り分け
        if(data.message == 'パラメータ「郵便番号」の桁数が不正です。'){
            alert('郵便番号は数字7桁で入力してください');
        } else if(data.status === 400){
            alert('郵便番号を指定してください。');
        } else if(data.results === null){
            alert('郵便番号から住所が見つかりませんでした。郵便番号を確認してください。');
        } else {
            //オブジェクトのaddress1〜3のデータを反映
            address1.value = data.results[0].address1;
            address2.value = data.results[0].address2;
            address3.value = data.results[0].address3;
        }
    })
    .catch((ex)=>{
        alert('予期せぬエラーです');
    });
},false);

let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    input.value = "";
    address1.value = "";
    address2.value = "";
    address3.value = "";
});

