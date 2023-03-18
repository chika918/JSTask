//JS課題
//try catchを使ってエラー文をコンソールに表示させる

try{
    let array = [0,1,2,3,4];
    for(let i = 0; i <= 5; i++){
        console.log(array2[i]);
    }
} catch(e){
    //エラーが発生したら実行される
    console.log("エラーを検知しました");
} finally{
    //エラーに関係なく必ず実行
    console.log("必ず実行");
}