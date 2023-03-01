// const { readFile } = require("../untils");

//     readFile("/Users/ngohoanganh/Documents/Alogorithms_Practice/ex_1/input.txt")
//     .then(data => {
//         var lines = data.toString().split('\n');
//         const totalCount = lines[0]
//         const dataIn = []
//         for(var i = 1; i < lines.length; i += 2){
//             const mapData = {
//                 maxNum: lines[i].trim().split(' ')[0],
//                 arr: lines[i + 1].trim().split(' ').map(Number)
//             }
//             dataIn.push(mapData);
//         }
//         for(let k = 0; k < totalCount; k++){
//             let result = 0;
//             const maxNum = 372;
//             const a = [ 144, 133, 130, 111, 103 ];
//             for(let i = 0; i < a.length; i++){
//                 for(let j = i + 1; j < a.length; j++){
//                     if(a[i] < a[j]){
//                         let tem = a[i];
//                         a[i] = a[j];
//                         a[j] = tem;
//                     }
//                 }
//             }

//             for(let i = 0; i < a.length; i++){
//                 let check = a[i];
//                 for(let j = 0; j < a.length; j++){
//                     const totalRemain = maxNum - check;
//                     if(a[j] > totalRemain){
//                         break;
//                     }
//                     if(i !== j && a[j] <= totalRemain){
//                         check += a[j]
//                     }
//                 }
//                 if(check > result){
//                     result = check
//                 }
//             }
//             console.log('====================================');
//             console.log(maxNum);
//             console.log(a);
//             console.log(`#${k + 1} ${result}`);
//             console.log('====================================');
//         }
//     })

// let sum = 0

// function Try(i, weight) {
//     if (weight > maxNum) {
//         return;
//     } else if (weight > sum) {
//         sum = weight;
//     }
//     for (; i < a.length; i++) {
//         Try(i + 1, weight + a[i]);

//     }

// }

// Try(0, 0)

            const maxNum = 372;
            // const maxNum = 70;
            // const a = [133, 111, 144, 103, 130];
            const a = [144, 133, 130, 111, 103];
            // const a = [31, 9, 42, 1, 32];
            // const a = [42, 32, 31, 9, 1];
            // 358
            // 248

            274




            // 130 133 103 366

            let result = 0
            for(let i = 0; i < a.length; i++){
                for(let j = i + 1; j < a.length; j++){
                    if(a[i] > a[j]){
                        let tem = a[i];
                        a[i] = a[j];
                        a[j] = tem;
                    }
                }
            }

            for(let i = 0; i < a.length; i++){
                let check = a[i];
                for(let j = 0; j < a.length; j++){
                    const totalRemain = maxNum - check;
                    if(i !== j && a[j] <= totalRemain){
                        check += a[j]
                    }
                }
                if(check > result){
                    result = check
                    console.log("==>>> ", check, i)

                }
            }
            console.log('====================================');
            console.log(a);
            console.log(result);
            console.log('====================================');