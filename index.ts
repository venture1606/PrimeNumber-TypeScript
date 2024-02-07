const input: HTMLInputElement | null = document.getElementById('input-id') as HTMLInputElement;



const button: HTMLButtonElement | null = document.getElementById('sub-id') as HTMLButtonElement;
const clear: HTMLButtonElement | null = document.getElementById('id-clear') as HTMLButtonElement;


button.onclick = () => {
    const value: number = parseInt(input.value as string);

    function isPrime(Number: number): any {
        for (let i = 2; i < Number; i++){
            if (Number === 2){
                return false
            } else if (Number % i == 0){
                return false
            }
        }
        return true
    }

    const answer: boolean = isPrime(value);
    const result: HTMLParagraphElement | null = document.getElementById('dom-msg') as HTMLParagraphElement;

    if (answer){
        result.innerText = 'Prime Number';
    } else {
        result.innerText = 'Not Prime Number';
    }
}

clear.onclick = () => {
    input.value = "";
}