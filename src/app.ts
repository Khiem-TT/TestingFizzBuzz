export class FizzBuzz {
    integer: number;

    constructor(integer: number) {
        this.integer = integer;
    }

    check() {
        let numberToString = String(this.integer);
        let numberToArray = numberToString.split('');
        const isFizzBuzz = this.integer % 15 === 0;
        const isFizz = this.integer % 3 === 0;
        const isBuzz = this.integer % 5 === 0;
        const hasNumber3 = numberToString.includes('3') && !numberToString.includes('5');
        const hasNumber5 = numberToString.includes('5') && !numberToString.includes('3');
        const hasNumber3AndNumber5 = numberToString.includes('3') && numberToString.includes('5');

        if (this.integer > 0) {
            if (isFizzBuzz || hasNumber3AndNumber5) return "FizzBuzz";
            else if (isFizz || hasNumber3) return "Fizz";
            else if (isBuzz || hasNumber5) return "Buzz";
            else {
                let resultArr: string[] = [];
                numberToArray.forEach(e => {
                    switch (e) {
                        case '0':
                            resultArr.push('khong');
                            break;
                        case '1':
                            resultArr.push('mot');
                            break;
                        case '2':
                            resultArr.push('hai');
                            break;
                        case '3':
                            resultArr.push('ba');
                            break;
                        case '4':
                            resultArr.push('bon');
                            break;
                        case '5':
                            resultArr.push('nam');
                            break;
                        case '6':
                            resultArr.push('sau');
                            break;
                        case '7':
                            resultArr.push('bay');
                            break;
                        case '8':
                            resultArr.push('tam');
                            break;
                        case '9':
                            resultArr.push('chin');
                            break;
                    }
                });
                return resultArr.join(' ');
            }
        } else return 'Not a positive integer';
    }
}

