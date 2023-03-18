//JS課題
//問1：try catchを使ってエラー文をコンソールに表示させる
try{
    let array = [0,1,2,3,4];
    for(let i = 0; i <= 5; i++){
        console.log(array2[i]);
    }
} catch(e){
    //エラーが発生したら実行される
    console.log("エラーを検知しました（問1）");
} finally{
    //エラーに関係なく必ず実行
    console.log("必ず実行（問1）");
}

//問2：throw
try{
    let array = [0,1,2,3,4];

    //該当する場合強制でエラーを発生する
    if (array.length === 5){
        throw('エラーが発生しました')
    }

    //上記以外の場合は処理が実行される
    for(let i = 0; i <= 5; i++){
        console.log(array[i]);
    }

} catch(e){
    //エラーが発生したら実行される
    console.log(e);
} finally{
    //エラーに関係なく必ず実行
    console.log("必ず実行（問2）");
}


