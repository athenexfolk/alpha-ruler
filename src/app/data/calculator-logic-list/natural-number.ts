import { Calc, TypeResult } from "src/app/models/calc";

//////////////////////////LOGIC FUNCTION//////////////////////////
function isNaturalNumber(n:number):boolean{
    if(n>0 && Number.isInteger(n)){
      return true
    }
    return false
}
function findFactor(n:number):number[]{
    let factorSet:number[] = []
    for(let index = 1; index <= n/2; index++) {
        if(n%index==0){
            factorSet.push(index)
        }
    }
    factorSet.push(n)
    return factorSet
}
function isFactor(n:number,suspect:number):boolean{
    let ff = findFactor(n)
    if(ff.includes(suspect)){
      return true
    }
    return false
}
function isPrimeNumber(n:number):boolean{
    if(n<2) return false
    if(n==2) return true
    if(n%2==0) return false
    for(let i = 3; i*i <= n; i+=2){
      if(n%i==0) return false
    }
    return true
}
function findPrimeNumberInRange(bound:number):number[]{
    let primeNumberSet:number[] = []
    for(let index = 1; index <= bound; index++){
      if(isPrimeNumber(index)){
        primeNumberSet.push(index)
      }
    }
    return primeNumberSet
}
function findPrimeFactor(n:number):number[]{
    let primeFactorSet:number[] = []
    findPrimeNumberInRange(n).forEach(
      i=>{
        if(n%i==0){
          primeFactorSet.push(i)
        }
      }
    )
    return primeFactorSet
}
function isPrimeFactor(n:number,suspect:number):boolean{
    let pf = findPrimeFactor(n)
    if(pf.includes(suspect)){
      return true
    }
    return false
}
function primeDecomposition(n:number):number[]{
    let N = n
    let result = []
    let primeNumberSet = findPrimeNumberInRange(n)
    for (let p of primeNumberSet) {
      while (N%p==0){
        result.push(p)
        N = N/p
      }
    }
    return result
}
function primeDecompositionV(n:number):any[]{
    let N = n
    let result = []
    let primeNumberSet = findPrimeNumberInRange(n)
    for (let p of primeNumberSet) {
      while (N%p==0){
        result.push([p,N])
        N = N/p
      }
    }
    result.push([1,1])
    return result
}
function findMultiple(n:number,size:number):number[]{
    let multipleSet:number[] = []
    for(let i=1; i<=size; i++){
      multipleSet.push(n*i)
    }
    return multipleSet
}
function isMultiple(n:number,suspect:number):boolean{
    if(suspect%n==0){
      return true
    }
    return false
}
function findCommonFactor(ns:number[]):number[]{
    let gcd = findGCD(ns)
    return findFactor(gcd)
}
function findCommonMultiple(ns:number[],num:number):number[]{
    let lcm = findLCM(ns)
    return findMultiple(lcm,num)
}
function findCoupleGCD(min:number,max:number):number{
    let remainder = 0
    while(max%min>0){
      remainder=max%min
      max = min
      min = remainder
    }
    return min
}
function findGCD(ns:number[]):number{
    ns.sort((a,b)=>a-b)
    let gcd = findCoupleGCD(ns[0],ns[1])
    for(let index = 2; index<ns.length; index++){
      gcd = findCoupleGCD(gcd,ns[index])
    }
    return gcd
}
function findGCDV(ns:number[]):any[]{
    let result = []
    let NS = [...ns]
    let primeNumberSet = findPrimeNumberInRange(Math.min(...ns))
    for (let p of primeNumberSet) {
      let tcond = true
      while(tcond){
        for(let n of NS){
          if(n%p != 0){
            tcond = false
            break
          }
        }
        if(tcond){
          result.push([p,[...NS]])
          NS.forEach((v,i,s)=>s[i]=s[i]/p)
        }
      }
    }
    result.push([1,[...NS]])
    return result
}
function findCoupleLCM(min:number,max:number):number{
    let lcm = max
    while(lcm%min != 0){
      lcm += max
    }
    return lcm
}
function findLCM(ns:number[]):number{
    ns.sort((a,b)=>a-b)
    let lcm = findCoupleLCM(ns[0],ns[1])
    for(let index = 2; index<ns.length; index++){
      lcm = findCoupleLCM(lcm,ns[index])
    }
    return lcm
}
function findLCMV(ns:number[]):any[]{
    let result = []
    let NS = [...ns]
    let primeNumberSet = findPrimeNumberInRange(Math.min(...ns))
    for (let p of primeNumberSet) {
      let tcond = true
      while(tcond){
        let counter = 0
        for(let n of NS){
          if(n%p == 0){
            counter++
            if(counter == 2){
              break
            }
          }
        }
        if(counter<2){
          tcond = false
          break
        }
        if(tcond){
          result.push([p,[...NS]])
          NS.forEach((v,i,s)=>{
            if(s[i]%p == 0){
              s[i]=s[i]/p
            }
          })
        }
      }
    }
    result.push([1,[...NS]])
    return result
}
function naturalNumberRelation(ns:number[]):number{
    if(ns.length != 4){
        //length fixed at 4
        return -1
    }
    //calcbox = [n1,n2,gcd,lcm]
    let calcbox = [...ns]
    let ans = 0
    if(Number.isNaN(calcbox[0])){
        if(calcbox[2]>calcbox[3]){
            return -2
        }
        ans = calcbox[2]*calcbox[3]/calcbox[1]
        if(isNaturalNumber(ans)){
            return ans
        }
    }
    if(Number.isNaN(calcbox[1])){
        if(calcbox[2]>calcbox[3]){
            return -2
        }
        ans = calcbox[2]*calcbox[3]/calcbox[0]
        if(isNaturalNumber(ans)){
            return ans
        }
    }
    if(Number.isNaN(calcbox[2])){
        ans = calcbox[0]*calcbox[1]/calcbox[3]
        if(ans != findCoupleGCD(calcbox[0],calcbox[1])){
            return 0
        }
        if(isNaturalNumber(ans)){
            if(ans>calcbox[3]){
                return -2
            }
            return ans
        }
    }
    if(Number.isNaN(calcbox[3])){
        ans = calcbox[0]*calcbox[1]/calcbox[2]
        if(ans != findCoupleLCM(calcbox[0],calcbox[1])){
            return 0
        }
        if(isNaturalNumber(ans)){
            if(calcbox[2]>ans){
                return -2
            }
            return ans
        }
    }
    //some value not make this relation correct
    return 0
}
//////////////////////////LOGIC FUNCTION//////////////////////////

export const NaturalNumberCalculatorList:Calc[] = [
    {
        id: "is-natural-number",
        name_th: "เป็นจำนวนนับหรือไม่",
        name_en: "Is natural number?",
        input: {
            input_count: 1,
            input_def: {
                number: "10"
            },
            input_type: ["number"],
            input_label: ["จำนวนที่คิดว่าเป็นจำนวนนับ"],
            input_id: ["inputnumber"]
        },
        fn: (input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            if(isNaturalNumber(n)){
                return {value:["$"+n+"$ เป็นจำนวนนับ"]}
            }
            return {value:["$"+n+"$ ไม่เป็นจำนวนนับ"]}
        }
    },
    {
        id: "find-factor",
        name_th: "หาตัวประกอบ",
        name_en: "Factor Finder",
        input: {
            input_count: 1,
            input_def: {
                number: "10"
            },
            input_type: ["number"],
            input_label: ["จำนวนนับที่ต้องการหาตัวประกอบ"],
            input_id: ["inputnumber"]
        },
        fn: (input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            if(isNaturalNumber(n)){
                let factor = findFactor(n)
                let result = "ตัวประกอบของ $" + n + "$ ได้แก่ "
                factor.forEach(i=>result+="$"+i+"$"+"$,$")
                result = result.slice(0,-3)
                return {value:[result]}
            }else{
                return {value:["$"+n+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "is-factor",
        name_th: "เป็นตัวประกอบหรือไม่",
        name_en: "Is factor?",
        input: {
            input_count: 2,
            input_def: {
                number: "10",
                suspect: "5"
            },
            input_type: ["number","number"],
            input_label: ["จำนวนนับที่ต้องการ","จำนวนนับที่คิดว่าเป็นตัวประกอบ"],
            input_id: ["numberinput","suspectinput"]
        },
        fn: (input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            let s = Number(input[1])
            if(isNaturalNumber(n) && isNaturalNumber(s)){
                let result = ""
                if(isFactor(n,s)){
                    result += "$"+s+"$ เป็นตัวประกอบของ $" + n + "$"
                }else{
                    result += "$"+s+"$ ไม่เป็นตัวประกอบของ $" + n + "$"
                }
                return {value:[result]}
            }else{
                return {value:["บางจำนวนไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "prime-number-finder",
        name_th: "หาจำนวนเฉพาะ",
        name_en: "Prime number finder",
        input: {
            input_count: 1,
            input_def: {
                range: "100"
            },
            input_type: ["number"],
            input_label: ["ขอบเขตบนของช่วงที่จะหาจำนวนเฉพาะ"],
            input_id: ["rangeinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let r = Number(input[0])
            if(isNaturalNumber(r)){
                let prime = findPrimeNumberInRange(r)
                if(prime.length){
                    let result = "จำนวนเฉพาะที่น้อยกว่าหรือเท่ากับ $" + r +"$ ได้แก่ "
                    prime.forEach(i=>result+="$"+i+"$$,$")
                    result = result.slice(0,-3)
                    return {value:[result]}
                }else{
                    return {value:["ช่วงที่ต้องการไม่มีจำนวนเฉพาะ"]}
                }
            }else{
                return {value:["$"+r+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "is-prime-number",
        name_th: "เป็นจำนวนเฉพาะหรือไม่",
        name_en: "Is prime number?",
        input: {
            input_count: 1,
            input_def: {
                suspect: "5"
            },
            input_type: ["number"],
            input_label: ["จำนวนนับที่คิดว่าเป็นจำนวนเฉพาะ"],
            input_id: ["suspectinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let s = Number(input[0])
            if(isNaturalNumber(s)){
                if(isPrimeNumber(s)){
                    return {value:["$"+s+"$ เป็นจำนวนเฉพาะ"]}
                }else{
                    return {value:["$"+s+"$ ไม่เป็นจำนวนเฉพาะ"]}
                }
            }else{
                return {value:["$"+s+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "prime-factor-finder",
        name_th: "หาตัวประกอบเฉพาะ",
        name_en: "Prime factor finder",
        input: {
            input_count: 1,
            input_def: {
                suspect: "10"
            },
            input_type: ["number"],
            input_label: ["จำนวนนับที่ต้องการหาตัวประกอบเฉพาะ"],
            input_id: ["numberinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            if(isNaturalNumber(n)){
                let primeFactor = findPrimeFactor(n)
                if(primeFactor.length){
                    let result = "ตัวประกอบเฉพาะของ $" + n + "$ ได้แก่ "
                    primeFactor.forEach(i=>result+="$"+i+"$$,$")
                    result = result.slice(0,-3)
                    return {value:[result]}
                }else{
                    return {value:["$"+n+"$ ไม่มีตัวประกอบเฉพาะ"]}
                }
            }else{
                return {value:["$"+n+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "is-prime-factor",
        name_th: "เป็นตัวประกอบเฉพาะหรือไม่",
        name_en: "Is prime factor?",
        input: {
            input_count: 2,
            input_def: {
                number: "10",
                suspect: "5"
            },
            input_type: ["number","number"],
            input_label: ["จำนวนนับที่ต้องการ","จำนวนนับที่คิดว่าเป็นตัวประกอบเฉพาะ"],
            input_id: ["numberinput","suspectinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            let s = Number(input[1])
            if(isNaturalNumber(n) && isNaturalNumber(s)){
                if(isPrimeFactor(n,s)){
                    return {value:["$"+s+"$ เป็นตัวประกอบเฉพาะของ $"+n+"$"]}
                }else{
                    return {value:["$"+s+"$ ไม่เป็นตัวประกอบเฉพาะของ $"+n+"$"]}
                }
            }else{
                return {value:["บางจำนวนไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "prime-decomposition",
        name_th: "แยกตัวประกอบ",
        name_en: "Prime decomposition",
        input: {
            input_count: 1,
            input_def: {
                number: "100"
            },
            input_type: ["number"],
            input_label: ["จำนวนนับที่ต้องการแยกตัวประกอบ"],
            input_id: ["numberinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            if(isNaturalNumber(n)){
                if(n === 1){
                    return {value:["$"+n+"$ ไม่มีรูปแยกตัวประกอบ"]}
                }else{
                    let vresult = primeDecompositionV(n)
                    let summaryresult = primeDecomposition(n)
                    let result = "$"+n+"=$ "
                    let utilresult = ""

                    summaryresult.forEach(i=>result+="$"+i+"$"+"$\\times$")
                    result = result.slice(0,-8)

                    utilresult += "<table class='s-div'>"
                    for(let row of vresult){
                        utilresult += "<tr>"
                        for(let col of row){
                            utilresult += "<td class='px-3 text-end'>$" + col + "$</td>"
                        }
                        utilresult += "</tr>"
                    }
                    utilresult += "</table>"

                    return {value:[result],
                            util:[utilresult]}
                }
            }else{
                return {value:["$"+n+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "multiple-finder",
        name_th: "หาพหุคูณ",
        name_en: "Multiple finder",
        input: {
            input_count: 1,
            input_def: {
                number: "10"
            },
            input_type: ["number"],
            input_label: ["จำนวนนับที่ต้องการหาพหุคูณ"],
            input_id: ["numberinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            if(isNaturalNumber(n)){
                let multiple = findMultiple(n,10)
                let result = "พหุคูณของ $"+n+"$ ได้แก่ "

                multiple.forEach(i=>result+="$"+i+"$$,$")
                result+="$...$"
                return {value:[result]}
            }else{
                return {value:["$"+n+"$ ไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "is-multiple",
        name_th: "เป็นพหุคูณหรือไม่",
        name_en: "Is multiple?",
        input: {
            input_count: 2,
            input_def: {
                number: "10",
                suspect: "100"
            },
            input_type: ["number","number"],
            input_label: ["จำนวนนับที่ต้องการ","จำนวนนับที่คิดว่าเป็นพหุคูณ"],
            input_id: ["numberinput","suspectinput"]
        },
        fn: (input:string[]):TypeResult<any[]> => {
            let n = Number(input[0])
            let s = Number(input[1])
            if(isNaturalNumber(n) && isNaturalNumber(s)){
                let result = ""
                if(isMultiple(n,s)){
                    result += "$"+s+"$ เป็นพหุคูณของ $" + n + "$"
                }else{
                    result += "$"+s+"$ ไม่เป็นพหุคูณของ $" + n + "$"
                }
                return {value:[result]}
            }else{
                return {value:["บางจำนวนไม่เป็นจำนวนนับ"]}
            }
        }
    },
    {
        id: "gcd-and-common-factor-finder",
        name_th: "หาตัวหารร่วม และตัวหารร่วมมาก",
        name_en: "GCD and common factor finder",
        input: {
            input_count: 1,
            input_def: {
                numberset: "12 18 24",
            },
            input_type: ["text"],
            input_label: ["จำนวนนับตั้งแต่สองจำนวนขึ้นไปที่ต้องการหาตัวหารร่วม และ ห.ร.ม. (คั่นด้วยช่องว่าง)"],
            input_id: ["numbersetinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let inputset = input[0].split(" ")
            let numberset:number[] = []
            let hasNaN = false
            inputset.forEach(i=>{
                if(Number.isNaN(Number(i))){
                    hasNaN = true
                }
            })
            if(hasNaN){
                return {value:["ข้อมูลบางส่วนไม่เป็นจำนวน"]}
            }else{
                let allIsNN = true
                inputset.forEach(i=>{
                    if(!isNaturalNumber(Number(i))){
                        allIsNN = false
                    }
                })
                if(allIsNN){
                    inputset.forEach(i=>numberset.push(Number(i)))
                    if(numberset.length<=1){
                        return {value:["จำนวนนับที่ใส่ต้องมีมากกว่าหนึ่งจำนวน"]}
                    }else{
                        let gcd = findGCD(numberset)
                        let gcdv = findGCDV(numberset)
                        let cf = findCommonFactor(numberset)
                        let utilresult = ""

                        let result = "ห.ร.ม. ของ "
                        numberset.forEach(i=>result+="$"+i+"$$,$")
                        result = result.slice(0,-3) + " คือ $" + gcd + "$"
                        let otherResult = "ตัวหารร่วมทั้งหมด : "

                        cf.forEach(i=>otherResult+="$"+i+"$$,$")
                        otherResult = otherResult.slice(0,-3)

                        
                        utilresult += "<table class='s-div'>"
                        let text_tmp = ""
                        for(let row of gcdv){
                            utilresult += "<tr>"
                            utilresult += "<td class='px-3'>$"+row[0]+"$</td>"
                            text_tmp += "$"+row[0]+"$$\\times$"
                            for(let col of row[1]){
                                utilresult += "<td class='px-3'>$" + col + "$</td>"
                            }
                            utilresult += "</tr>"
                        }
                        utilresult += "</table>"
                        text_tmp = text_tmp.slice(0,-19)+" $=$ $"+gcd+"$"
                        utilresult += "<p class='text-center'>"+text_tmp+"</p>"

                        return {value:[result,otherResult],
                                util:[utilresult]}
                    }
                }else{
                    return {value:["บางจำนวนไม่เป็นจำนวนนับ"]}
                }
            }
        }
    },
    {
        id: "lcm-and-common-multiple-finder",
        name_th: "หาตัวคูณร่วม และตัวคูณร่วมน้อย",
        name_en: "LCM and common multiple finder",
        input: {
            input_count: 1,
            input_def: {
                numberset: "2 6 10",
            },
            input_type: ["text"],
            input_label: ["จำนวนนับตั้งแต่สองจำนวนขึ้นไปที่ต้องการหาตัวคูณร่วม และ ค.ร.น. (คั่นด้วยช่องว่าง)"],
            input_id: ["numbersetinput"]
        },
        fn:(input:string[]):TypeResult<any[]> => {
            let inputset = input[0].split(" ")
            let numberset:number[] = []
            let hasNaN = false
            inputset.forEach(i=>{
                if(Number.isNaN(Number(i))){
                    hasNaN = true
                }
            })
            if(hasNaN){
                return {value:["ข้อมูลบางส่วนไม่เป็นจำนวน"]}
            }else{
                let allIsNN = true
                inputset.forEach(i=>{
                    if(!isNaturalNumber(Number(i))){
                        allIsNN = false
                    }
                })
                if(allIsNN){
                    inputset.forEach(i=>numberset.push(Number(i)))
                    if(numberset.length<=1){
                        return {value:["จำนวนนับที่ใส่ต้องมีมากกว่าหนึ่งจำนวน"]}
                    }else{
                        let lcm = findLCM(numberset)
                        let lcmv = findLCMV(numberset)
                        let cm = findCommonMultiple(numberset,10)
                        let utilresult = ""

                        let result = "ค.ร.น. ของ "
                        numberset.forEach(i=>result+="$"+i+"$$,$")
                        result = result.slice(0,-3) + " คือ $" + lcm + "$"
                        let otherResult = "ตัวคูณร่วมทั้งหมด : "

                        cm.forEach(i=>otherResult+="$"+i+"$$,$")
                        otherResult += "$...$"

                        
                        utilresult += "<table class='s-div'>"
                        let text_tmp = ""
                        for(let row of lcmv){
                            utilresult += "<tr>"
                            utilresult += "<td class='px-3'>$"+row[0]+"$</td>"
                            if(lcmv.indexOf(row)!=lcmv.length-1){
                                text_tmp += "$"+row[0]+"$$\\times$"
                            }
                            
                            for(let col of row[1]){
                                utilresult += "<td class='px-3'>$" + col + "$</td>"
                                if(lcmv.indexOf(row)==lcmv.length-1){
                                    text_tmp += "$"+col+"$$\\times$"
                                }
                            }
                            utilresult += "</tr>"
                        }
                        utilresult += "</table>"
                        text_tmp = text_tmp.slice(0,-8)+" $=$ $"+lcm+"$"
                        utilresult += "<p class='text-center'>"+text_tmp+"</p>"

                        return {value:[result,otherResult],
                                util:[utilresult]}
                    }
                }else{
                    return {value:["บางจำนวนไม่เป็นจำนวนนับ"]}
                }
            }
        }
    },
    {
        id: "natural-number-relation",
        name_th: "ความสัมพันธ์ระหว่างจำนวนนับสองจำนวน",
        name_en: "Natural number relation",
        input: {
            input_count: 4,
            input_def: {
                number1: "10",
                number2: "15",
                gcd: "5",
                lcm: "?"
            },
            input_type: ["text","text","text","text"],
            input_label: ["จำนวนนับตัวที่ 1","จำนวนนับตัวที่ 2","ห.ร.ม.","ค.ร.น."],
            input_id: ["num1","num2","gcd","lcm"]
        },
        fn: (input:string[]):TypeResult<any[]> => {
            let numbers:number[] = []
            let countQM = 0
            let countNN = 0
            input.forEach((i,n)=>{
                numbers.push(Number(i))
                if(i === '?'){
                    countQM++
                }
                if(!Number.isNaN(numbers[n])){
                    if(isNaturalNumber(numbers[n])){
                        countNN++
                    }
                }
            })
            if(countQM != 1){
                return {value:["ต้องมี ? หนึ่งช่อง"]}
            }
            if(countNN != 3){
                return {value:["บางจำนวนไม่เป็นนับ"]}
            }
            let ans = naturalNumberRelation(numbers)
            if(ans == -1){
                return {value: ["มีบางอย่างเกิดข้อผิดพลาด"]}
            }else if(ans == 0){
                return {value: ["ไม่มีผลลัพธ์ที่ทำให้เกิดความสัมพันธ์นี้ได้ อาจเกิดจากที่ผลลัพธ์ไม่ใช่จำนวนนับ หรือ ห.ร.ม. และ ค.ร.น. ไม่สอดคล้องกัน"]}
            }else if(ans == -2){
                return {value: ["ห.ร.ม. ไม่ควรมีค่ามากกว่า ค.ร.น."]}
            }
            return {value:["? ที่ได้คือ " + ans]}
        }
    }
]